require('dotenv').config();
const path = require('path');
const express = require('express');
const twilio = require('twilio');

const app = express();
const port = Number(process.env.PORT || 3001);

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  if (req.method === 'OPTIONS') {
    return res.sendStatus(204);
  }
  next();
});

app.use(express.json({ limit: '1mb' }));
app.use(express.static(__dirname, { index: false }));
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'Cyberlyx-J5-V10-Dr.html'));
});

const eventCatalog = [
  {
    id: 'e1',
    name: 'Grand Sunday Prophecy Service',
    date: 'Sunday 10:00 AM',
    location: 'MVUMA HQ Sanctum',
    type: 'Prophecy'
  },
  {
    id: 'e2',
    name: 'Midweek Deliverance & Breakthrough',
    date: 'Wednesday 5:30 PM',
    location: 'All Branch Sanctuary Nodes',
    type: 'Deliverance'
  },
  {
    id: 'e3',
    name: 'J5 Youth Anointing Crusade',
    date: 'Saturday 2:00 PM',
    location: 'Harare CBD Sanctuary',
    type: 'Youth'
  },
  {
    id: 'e4',
    name: 'Regional Prophets & Leaders Summit',
    date: 'Friday 9:00 AM',
    location: 'Johannesburg SA Region',
    type: 'Leadership'
  }
];

function formatPhoneNumber(value) {
  if (!value) return '';
  const cleaned = String(value).replace(/[^\d+]/g, '');
  if (cleaned.startsWith('+')) return cleaned;
  return `+${cleaned.replace(/^0+/, '')}`;
}

function buildEventMessage(event, customText) {
  if (customText && customText.trim()) {
    return customText.trim();
  }

  return `You are invited to ${event.name} on ${event.date} at ${event.location}. We look forward to worshipping with you.`;
}

function hasTwilioCredentials() {
  const values = [
    process.env.TWILIO_ACCOUNT_SID,
    process.env.TWILIO_AUTH_TOKEN,
    process.env.TWILIO_PHONE_NUMBER
  ];

  return values.every((value) => value && !value.startsWith('your_') && !value.includes('12345678901'));
}

app.get('/api/health', (req, res) => {
  res.json({
    ok: true,
    service: 'J5 SMS service',
    mode: hasTwilioCredentials() ? 'live' : 'demo',
    timestamp: new Date().toISOString()
  });
});

app.get('/api/events', (req, res) => {
  res.json({ ok: true, events: eventCatalog });
});

app.post('/api/send-event-sms', async (req, res) => {
  const { phone, eventId, message, eventName, eventDate, eventLocation } = req.body || {};

  if (!phone || !eventId && !eventName) {
    return res.status(400).json({ ok: false, error: 'Phone and event details are required.' });
  }

  const selectedEvent = eventCatalog.find((item) => item.id === eventId) || {
    name: eventName,
    date: eventDate || 'upcoming service',
    location: eventLocation || 'MVUMA HQ'
  };

  const smsText = buildEventMessage(selectedEvent, message);
  const recipient = formatPhoneNumber(phone);

  if (!recipient) {
    return res.status(400).json({ ok: false, error: 'A valid phone number is required.' });
  }

  const sid = process.env.TWILIO_ACCOUNT_SID;
  const token = process.env.TWILIO_AUTH_TOKEN;
  const fromNumber = process.env.TWILIO_PHONE_NUMBER;

  if (!hasTwilioCredentials()) {
    return res.status(200).json({
      ok: true,
      demoMode: true,
      provider: 'demo',
      to: recipient,
      message: smsText,
      note: 'Twilio credentials are not set yet. Add them in .env to send real SMS.'
    });
  }

  try {
    const client = twilio(sid, token);
    const result = await client.messages.create({
      body: smsText,
      from: fromNumber,
      to: recipient
    });

    res.json({
      ok: true,
      demoMode: false,
      provider: 'twilio',
      sid: result.sid,
      status: result.status,
      to: recipient,
      message: smsText
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      error: 'SMS failed to send.',
      details: error?.message || 'Unknown error'
    });
  }
});

app.listen(port, () => {
  console.log(`J5 SMS service running on http://localhost:${port}`);
});
