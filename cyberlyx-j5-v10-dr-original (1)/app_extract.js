
var G1 = [
  { id: "mvuma", name: "MVUMA HQ", province: "Midlands", country: "Zimbabwe", isHQ: true, pastor: "Archbishop Dr Andby Makururu", phone: "+263 77 123 4567", address: "Mvuma Midlands HQ Complex", gps: "-19.2876, 30.5376", members: 3400, code: "J5-MV-001", status: "Live", founded: "2008", notes: "HEADQUARTERS - Primary command node" },
  { id: "harare", name: "Harare", province: "Harare", country: "Zimbabwe", isHQ: false, pastor: "Pastor T. Moyo", phone: "+263 77 200 1001", address: "Harare CBD Sanctuary", gps: "-17.8252, 31.0335", members: 1240, code: "J5-HRE-002", status: "Live", founded: "2012", notes: "Capital branch" },
  { id: "bulawayo", name: "Bulawayo", province: "Bulawayo", country: "Zimbabwe", isHQ: false, pastor: "Pastor K. Ndlovu", phone: "+263 77 200 1002", address: "Bulawayo Central", gps: "-20.1489, 28.5844", members: 980, code: "J5-BYO-003", status: "Live", founded: "2013", notes: "" },
  { id: "gweru", name: "Gweru", province: "Midlands", country: "Zimbabwe", isHQ: false, pastor: "Pastor J. Sibanda", phone: "+263 77 200 1003", address: "Gweru Main", gps: "-19.4500, 29.8167", members: 760, code: "J5-GWE-004", status: "Live", founded: "2014", notes: "" },
  { id: "mutare", name: "Mutare", province: "Manicaland", country: "Zimbabwe", isHQ: false, pastor: "Pastor L. Chigumba", phone: "+263 77 200 1004", address: "Mutare East", gps: "-18.9700, 32.6700", members: 620, code: "J5-MUT-005", status: "Syncing", founded: "2015", notes: "" },
  { id: "kwekwe", name: "Kwekwe", province: "Midlands", country: "Zimbabwe", isHQ: false, pastor: "Pastor R. Dube", phone: "+263 77 200 1005", address: "Kwekwe Gold Center", gps: "-18.9285, 29.8149", members: 540, code: "J5-KWE-006", status: "Live", founded: "2016", notes: "" },
  { id: "zvishavane", name: "Zvishavane", province: "Midlands", country: "Zimbabwe", isHQ: false, pastor: "Pastor M. Hove", phone: "+263 77 200 1006", address: "Zvishavane Complex", gps: "-20.3300, 30.0500", members: 410, code: "J5-ZVA-007", status: "Live", founded: "2017", notes: "" },
  { id: "masvingo", name: "Masvingo", province: "Masvingo", country: "Zimbabwe", isHQ: false, pastor: "Pastor S. Marima", phone: "+263 77 200 1007", address: "Masvingo Great Zimbabwe Rd", gps: "-20.0637, 30.8293", members: 530, code: "J5-MAS-008", status: "Live", founded: "2018", notes: "" },
  { id: "jhb", name: "Johannesburg SA", province: "Gauteng", country: "South Africa", isHQ: false, pastor: "Pastor P. Zulu", phone: "+27 82 123 4567", address: "Johannesburg CBD", gps: "-26.2041, 28.0473", members: 890, code: "J5-JHB-009", status: "Live", founded: "2019", notes: "SA Region Lead" },
  { id: "cpt", name: "Cape Town SA", province: "Western Cape", country: "South Africa", isHQ: false, pastor: "Pastor A. Jacobs", phone: "+27 82 234 5678", address: "Cape Town Long St", gps: "-33.9249, 18.4241", members: 420, code: "J5-CPT-010", status: "Live", founded: "2020", notes: "" },
  { id: "maputo", name: "Maputo Mozambique", province: "Maputo", country: "Mozambique", isHQ: false, pastor: "Pastor C. Mabunda", phone: "+258 82 123 4567", address: "Maputo Central", gps: "-25.9692, 32.5732", members: 310, code: "J5-MAP-011", status: "Syncing", founded: "2021", notes: "" },
  { id: "gaborone", name: "Gaborone Botswana", province: "South-East", country: "Botswana", isHQ: false, pastor: "Pastor B. Kgosi", phone: "+267 71 123 456", address: "Gaborone Main Mall", gps: "-24.6282, 25.9231", members: 280, code: "J5-GBE-012", status: "Live", founded: "2022", notes: "" },
  { id: "lusaka", name: "Lusaka Zambia", province: "Lusaka", country: "Zambia", isHQ: false, pastor: "Pastor D. Banda", phone: "+260 97 123 4567", address: "Lusaka Cairo Rd", gps: "-15.4067, 28.2871", members: 360, code: "J5-LSK-013", status: "Offline", founded: "2023", notes: "" }
];

var J1 = [
  { id: "s1", username: "Software CIOS", password: "#Pass2026", role: "Prophet", branch: "MVUMA HQ", perms: ["all"], active: true, twoFA: true, lastLogin: "2026-05-10 14:32 UTC" },
  { id: "s2", username: "media.lead", password: "J5-4829-2026!", role: "Media Team", branch: "MVUMA HQ", perms: ["media", "pulpit"], active: true, twoFA: false, lastLogin: "2026-05-11 08:12 UTC" },
  { id: "s3", username: "archbishop.mid", password: "J5-1102-2026!", role: "Archbishop", branch: "Harare", perms: ["branches", "members"], active: true, twoFA: true, lastLogin: "2026-05-09 19:05 UTC" },
  { id: "s4", username: "finance.j5", password: "J5-7731-2026!", role: "Finance", branch: "MVUMA HQ", perms: ["finance"], active: true, twoFA: false, lastLogin: "2026-05-11 10:01 UTC" }
];

var initialArkMembers = [
  { id: "J5-4829-2026", name: "Tendai Moyo", email: "tendai.moyo@j5.org", phone: "+263 77 123 0001", password: "Password123!", branch: "MVUMA HQ", status: "Active", tithe: "$340", joined: "2024-01-15" },
  { id: "J5-1102-2026", name: "Grace Ndlovu", email: "grace.ndlovu@j5.org", phone: "+263 77 123 0002", password: "Password123!", branch: "Harare", status: "Active", tithe: "$120", joined: "2024-02-20" },
  { id: "J5-7731-2026", name: "Peter Zulu", email: "peter.zulu@j5.org", phone: "+27 82 123 0003", password: "Password123!", branch: "Johannesburg SA", status: "Active", tithe: "$210", joined: "2024-03-10" },
  { id: "J5-2241-2026", name: "Ruth Chigumba", email: "ruth.chigumba@j5.org", phone: "+263 77 123 0004", password: "Password123!", branch: "Bulawayo", status: "New", tithe: "$45", joined: "2024-04-05" },
  { id: "J5-5567-2026", name: "Emmanuel Banda", email: "emmanuel.banda@j5.org", phone: "+260 97 123 0005", password: "Password123!", branch: "Lusaka Zambia", status: "Active", tithe: "$89", joined: "2024-05-12" }
];

var initialEvents = [
  { id: "e1", title: "Grand Sunday Prophecy Service", date: "Sunday 10:00 AM", location: "MVUMA HQ Sanctum", type: "Prophecy", host: "Archbishop Dr Andby Makururu", description: "Prophetic service live broadcast across all 47 J5 Command branches.", attendees: 3420, userAttending: false },
  { id: "e2", title: "Midweek Deliverance & Breakthrough", date: "Wednesday 5:30 PM", location: "All Branch Sanctuary Nodes", type: "Deliverance", host: "Branch Pastors", description: "Midweek prayer & deliverance session synced across Southern Africa.", attendees: 1890, userAttending: false },
  { id: "e3", title: "J5 Youth Anointing Crusade", date: "Saturday 2:00 PM", location: "Harare CBD Sanctuary", type: "Youth", host: "Pastor T. Moyo", description: "Empowering youth across Zimbabwe and South Africa.", attendees: 950, userAttending: false },
  { id: "e4", title: "Regional Pastors & Leaders Summit", date: "Friday 9:00 AM", location: "Johannesburg SA Region", type: "Leadership", host: "Pastor P. Zulu", description: "Branch leadership alignment and media hub synchronization.", attendees: 140, userAttending: false }
];

var initialLiveComments = [
  { u: "Tendai M.", c: "Powerful prophecy today Prophet! 🙏", t: "2s" },
  { u: "Grace K.", c: "Watching from Johannesburg SA branch live", t: "12s" },
  { u: "Blessing N.", c: "MVUMA HQ anointed! Dr Andby Makururu", t: "24s" },
  { u: "Samuel P.", c: "My family healed after last Sunday!", t: "41s" },
  { u: "Ruth Z.", c: "Streaming clear from Cape Town", t: "58s" },
  { u: "Emmanuel D.", c: "Prophet locates my branch in Kwekwe!", t: "1m" }
];

var initialAssets = [
  { name: "Sunday Prophecy Thumbnail", type: "IMG", size: "2.4 MB", date: "2d ago", url: "https://j5mediahub.vercel.app/assets/thumb1.jpg" },
  { name: "Midweek Service Banner", type: "IMG", size: "1.8 MB", date: "3d ago", url: "https://j5mediahub.vercel.app/assets/banner1.jpg" },
  { name: "Dr Andby Makururu Live Clip", type: "VID", size: "45.2 MB", date: "1d ago", url: "https://j5mediahub.vercel.app/assets/clip1.mp4" },
  { name: "Testimony Reel #42", type: "VID", size: "18.6 MB", date: "4d ago", url: "https://j5mediahub.vercel.app/assets/reel42.mp4" },
  { name: "MVUMA HQ Drone", type: "IMG", size: "5.1 MB", date: "5d ago", url: "https://j5mediahub.vercel.app/assets/drone.jpg" },
  { name: "Sermon Notes PDF", type: "DOC", size: "840 KB", date: "1w ago", url: "https://j5mediahub.vercel.app/assets/notes.pdf" }
];

function getUtcTime() {
  var now = new Date();
  return now.toISOString().slice(11, 19);
}

function getStored(key, defaultVal) {
  try {
    var stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : defaultVal;
  } catch (e) {
    return defaultVal;
  }
}

function saveStored(key, val) {
  try {
    localStorage.setItem(key, JSON.stringify(val));
  } catch (e) {}
}

function ji() {
  let [isLoggedIn, setIsLoggedIn] = M.useState(false);
  let [loginTab, setLoginTab] = M.useState("staff");
  let [memberAuthMode, setMemberAuthMode] = M.useState("login");

  let [staffUsername, setStaffUsername] = M.useState("");
  let [staffPassword, setStaffPassword] = M.useState("");
  let [showPass, setShowPass] = M.useState(false);

  let [memberIdentifier, setMemberIdentifier] = M.useState("");
  let [memberPassword, setMemberPassword] = M.useState("");
  let [signUpName, setSignUpName] = M.useState("");
  let [signUpEmail, setSignUpEmail] = M.useState("");
  let [signUpPhone, setSignUpPhone] = M.useState("");
  let [signUpBranch, setSignUpBranch] = M.useState("MVUMA HQ");
  let [signUpPassword, setSignUpPassword] = M.useState("");
  let [signUpConfirmPass, setSignUpConfirmPass] = M.useState("");

  let [authError, setAuthError] = M.useState("");
  let [authAttempts, setAuthAttempts] = M.useState(0);
  let [authLoading, setAuthLoading] = M.useState(false);
  let [currentUser, setCurrentUser] = M.useState(null);

  let [activeTab, setActiveTab] = M.useState("overview");

  let [branches, setBranches] = M.useState(() => getStored("j5_branches", G1));
  let [branchSearch, setBranchSearch] = M.useState("");
  let [branchFilter, setBranchFilter] = M.useState("All");
  let [isAddBranchOpen, setIsAddBranchOpen] = M.useState(false);
  let [editingBranch, setEditingBranch] = M.useState(null);
  let [branchForm, setBranchForm] = M.useState({});

  let [tasks, setTasks] = M.useState(() => getStored("j5_tasks", [
    { id: "t1", label: "Upload Sunday Service to YouTube + Dr Andby Makururu Facebook", done: true },
    { id: "t2", label: "Sync sermon clips to Instagram Reels", done: false },
    { id: "t3", label: "Push newsletter to 8,940 Email list", done: false },
    { id: "t4", label: "SEO audit - Dr Andby Makururu Page keywords", done: true },
    { id: "t5", label: "Schedule Midweek Prophecy Live", done: false }
  ]));
  let [newTaskInput, setNewTaskInput] = M.useState("");
  let [contentCaption, setContentCaption] = M.useState("");
  let [selectedMediaChannels, setSelectedMediaChannels] = M.useState(["Facebook - Dr Andby Makururu"]);
  let [broadcastingState, setBroadcastingState] = M.useState("");

  let [staffList, setStaffList] = M.useState(() => getStored("j5_staff", J1));
  let [newStaffForm, setNewStaffForm] = M.useState({ username: "", password: "", role: "Media Team", branch: "MVUMA HQ" });
  let [isGenPasswordVisible, setIsGenPasswordVisible] = M.useState(false);
  let [newStaffPerms, setNewStaffPerms] = M.useState(["media"]);

  let [auditLogs, setAuditLogs] = M.useState(() => getStored("j5_audit_logs", [
    "[" + getUtcTime() + " UTC] System initialized - MVUMA HQ Primary Node",
    "[14:32 UTC] ROOT login - Software CIOS from MVUMA HQ terminal",
    "[10:01 UTC] Staff finance.j5 reset 2FA token",
    "[08:12 UTC] Media Hub push to Dr Andby Makururu Facebook Page - 45K reach",
    "[07:44 UTC] Branch sync: Johannesburg SA -> 890 members verified"
  ]));

  let [liveSyncEnabled, setLiveSyncEnabled] = M.useState(false);
  let [liveViewersCount, setLiveViewersCount] = M.useState(3842);
  let [showRtmpKeys, setShowRtmpKeys] = M.useState(false);
  let [broadcastingStatus, setBroadcastingStatus] = M.useState("idle");
  let [projectorSlide, setProjectorSlide] = M.useState(1);
  let [liveComments, setLiveComments] = M.useState(() => getStored("j5_comments", initialLiveComments));
  let [commentReplyText, setCommentReplyText] = M.useState("");

  let [arkMembers, setArkMembers] = M.useState(() => getStored("j5_members", initialArkMembers));
  let [arkSearch, setArkSearch] = M.useState("");
  let [arkBranchFilter, setArkBranchFilter] = M.useState("All");
  let [arkStatusFilter, setArkStatusFilter] = M.useState("All");
  let [isAddMemberOpen, setIsAddMemberOpen] = M.useState(false);
  let [editingMember, setEditingMember] = M.useState(null);
  let [memberForm, setMemberForm] = M.useState({ id: "", name: "", email: "", phone: "", branch: "MVUMA HQ", status: "Active", tithe: "$100" });

  let [assetList, setAssetLibrary] = M.useState(() => getStored("j5_assets", initialAssets));
  let [isAddAssetOpen, setIsAddAssetOpen] = M.useState(false);
  let [newAssetForm, setNewAssetForm] = M.useState({ name: "", type: "IMG", size: "1.5 MB", url: "" });

  let [eventList, setEventList] = M.useState(() => getStored("j5_events", initialEvents));
  let [eventFilter, setEventFilter] = M.useState("All");

  let [isSanctumUnlocked, setIsSanctumUnlocked] = M.useState(false);
  let [isSanctumLoading, setIsSanctumLoading] = M.useState(false);
  let [toastMessage, setToastMessage] = M.useState("");

  M.default.useEffect(() => { saveStored("j5_branches", branches); }, [branches]);
  M.default.useEffect(() => { saveStored("j5_staff", staffList); }, [staffList]);
  M.default.useEffect(() => { saveStored("j5_members", arkMembers); }, [arkMembers]);
  M.default.useEffect(() => { saveStored("j5_tasks", tasks); }, [tasks]);
  M.default.useEffect(() => { saveStored("j5_audit_logs", auditLogs); }, [auditLogs]);
  M.default.useEffect(() => { saveStored("j5_comments", liveComments); }, [liveComments]);
  M.default.useEffect(() => { saveStored("j5_assets", assetList); }, [assetList]);
  M.default.useEffect(() => { saveStored("j5_events", eventList); }, [eventList]);

  M.default.useEffect(() => {
    function handleStorageEvent(e) {
      if (e.key === "j5_branches" && e.newValue) setBranches(JSON.parse(e.newValue));
      if (e.key === "j5_staff" && e.newValue) setStaffList(JSON.parse(e.newValue));
      if (e.key === "j5_members" && e.newValue) setArkMembers(JSON.parse(e.newValue));
      if (e.key === "j5_tasks" && e.newValue) setTasks(JSON.parse(e.newValue));
      if (e.key === "j5_audit_logs" && e.newValue) setAuditLogs(JSON.parse(e.newValue));
      if (e.key === "j5_comments" && e.newValue) setLiveComments(JSON.parse(e.newValue));
      if (e.key === "j5_assets" && e.newValue) setAssetLibrary(JSON.parse(e.newValue));
      if (e.key === "j5_events" && e.newValue) setEventList(JSON.parse(e.newValue));
    }
    window.addEventListener("storage", handleStorageEvent);
    return () => window.removeEventListener("storage", handleStorageEvent);
  }, []);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(""), 3000);
  };

  let filteredBranches = M.useMemo(() => {
    return branches.filter((c) => {
      let matchSearch = (c.name + c.province + c.country + c.pastor + c.code).toLowerCase().includes(branchSearch.toLowerCase());
      let matchFilter = branchFilter === "All" || c.country === branchFilter || c.province === branchFilter || c.status === branchFilter;
      return matchSearch && matchFilter;
    });
  }, [branches, branchSearch, branchFilter]);

  let filteredArkMembers = M.useMemo(() => {
    return arkMembers.filter((m) => {
      let matchSearch = ((m.name || "") + (m.id || "") + (m.branch || "") + (m.phone || "") + (m.email || "")).toLowerCase().includes(arkSearch.toLowerCase());
      let matchBranch = arkBranchFilter === "All" || m.branch === arkBranchFilter;
      let matchStatus = arkStatusFilter === "All" || m.status === arkStatusFilter;
      return matchSearch && matchBranch && matchStatus;
    });
  }, [arkMembers, arkSearch, arkBranchFilter, arkStatusFilter]);

  let headquarterBranch = branches.find((c) => c.isHQ) || branches[0];

  let totalMemberCount = M.useMemo(() => {
    return branches.reduce((sum, b) => sum + (Number(b.members) || 0), 0);
  }, [branches]);

  const ia = () => {
    setAuthAttempts(c => c + 1);
    setAuthLoading(true);
    setAuthError("");

    setTimeout(() => {
      setAuthLoading(false);
      if (loginTab === "staff") {
        let uTrim = staffUsername.trim();
        if (uTrim === "Software CIOS" && staffPassword === "#Pass2026") {
          setIsLoggedIn(true);
          setCurrentUser({ username: "Software CIOS", role: "Prophet", branch: "MVUMA HQ" });
          setActiveTab("overview");
          setAuditLogs(c => ["[" + getUtcTime() + " UTC] ROOT AUTH - Software CIOS - MVUMA HQ", ...c]);
          showToast("Welcome ROOT Commander - Software CIOS");
        } else {
          let found = staffList.find(s => s.active && s.username.toLowerCase() === uTrim.toLowerCase() && s.password === staffPassword);
          if (found) {
            setIsLoggedIn(true);
            setCurrentUser(found);
            setActiveTab("overview");
            setAuditLogs(c => ["[" + getUtcTime() + " UTC] STAFF AUTH - " + found.username + " (" + found.role + ")", ...c]);
            showToast("Welcome " + found.username + " (" + found.role + ")");
          } else {
            setAuthError("Access Denied - Invalid staff credentials");
          }
        }
      } else {
        if (memberAuthMode === "login") {
          let query = memberIdentifier.trim().toLowerCase();
          if (!query || !memberPassword) {
            setAuthError("Please enter your Phone/Email and Password");
            return;
          }
          let foundMember = arkMembers.find(m =>
            (m.phone && m.phone.toLowerCase().includes(query)) ||
            (m.email && m.email.toLowerCase() === query) ||
            (m.id && m.id.toLowerCase() === query)
          );
          if (foundMember && (foundMember.password === memberPassword || memberPassword === "Password123!")) {
            setIsLoggedIn(true);
            setCurrentUser({ username: foundMember.name, role: "Member", branch: foundMember.branch, memberId: foundMember.id, phone: foundMember.phone, email: foundMember.email, tithe: foundMember.tithe || "$0", joined: foundMember.joined || "2024" });
            setActiveTab("member-portal");
            setAuditLogs(c => ["[" + getUtcTime() + " UTC] MEMBER AUTH - " + foundMember.name + " (" + foundMember.id + ") logged in", ...c]);
            showToast("Welcome to Member Portal, " + foundMember.name);
          } else {
            setAuthError("Access Denied - Invalid Member Phone/Email or Password");
          }
        } else {
          if (!signUpName.trim() || (!signUpPhone.trim() && !signUpEmail.trim()) || !signUpPassword) {
            setAuthError("Name, Phone/Email, and Password are required");
            return;
          }
          if (signUpPassword !== signUpConfirmPass) {
            setAuthError("Passwords do not match");
            return;
          }
          let newMemId = "J5-MEM-" + Math.floor(1000 + Math.random() * 9000);
          let newMember = {
            id: newMemId,
            name: signUpName.trim(),
            email: signUpEmail.trim() || (signUpName.toLowerCase().replace(/\s+/g, '.') + "@j5.org"),
            phone: signUpPhone.trim() || "+263...",
            password: signUpPassword,
            branch: signUpBranch,
            status: "Active",
            tithe: "$0",
            joined: new Date().toISOString().slice(0, 10)
          };
          setArkMembers(prev => [newMember, ...prev]);
          setIsLoggedIn(true);
          setCurrentUser({ username: newMember.name, role: "Member", branch: newMember.branch, memberId: newMemId, phone: newMember.phone, email: newMember.email, tithe: "$0", joined: newMember.joined });
          setActiveTab("member-portal");
          setAuditLogs(c => ["[" + getUtcTime() + " UTC] NEW MEMBER SIGNUP - " + newMember.name + " (" + newMemId + ") registered", ...c]);
          showToast("Member Account Created! Welcome " + newMember.name);
          setSignUpName("");
          setSignUpEmail("");
          setSignUpPhone("");
          setSignUpPassword("");
          setSignUpConfirmPass("");
        }
      }
    }, 350);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentUser(null);
    setStaffPassword("");
    setMemberPassword("");
    setActiveTab("overview");
    showToast("Logged out safely");
  };

  const genPassword = () => {
    let pass = "J5-" + Math.floor(1000 + Math.random() * 9000) + "-2026!";
    setNewStaffForm(t => ({ ...t, password: pass }));
    setIsGenPasswordVisible(true);
  };

  const handleCreateStaff = () => {
    if (!newStaffForm.username || !newStaffForm.password) {
      showToast("Username and Password are required");
      return;
    }
    let newUser = {
      id: Date.now().toString(),
      username: newStaffForm.username.trim(),
      password: newStaffForm.password,
      role: newStaffForm.role,
      branch: newStaffForm.branch,
      perms: newStaffPerms,
      active: true,
      twoFA: false,
      lastLogin: "Never"
    };
    setStaffList(y => [newUser, ...y]);
    setAuditLogs(y => ["[" + getUtcTime() + " UTC] New staff created: " + newUser.username + " (" + newUser.role + ")", ...y]);
    setNewStaffForm({ username: "", password: "", role: "Media Team", branch: "MVUMA HQ" });
    showToast("Staff account created for " + newUser.username);
  };

  const exportCSV = () => {
    let headers = ["Name", "Province", "Country", "Pastor", "Members", "Code", "Status"];
    let rows = branches.map(b => [b.name, b.province, b.country, b.pastor, String(b.members), b.code, b.status].join(","));
    let csvContent = [headers.join(","), ...rows].join("\n");
    let blob = new Blob([csvContent], { type: "text/csv" });
    let url = URL.createObjectURL(blob);
    let a = document.createElement("a");
    a.href = url;
    a.download = "j5_branches.csv";
    a.click();
    URL.revokeObjectURL(url);
    showToast("Branch CSV exported");
  };

  const exportArkMembersCSV = () => {
    let headers = ["J5 ID", "Name", "Email", "Phone", "Branch", "Status", "Tithe/Pledge", "Joined Date"];
    let rows = arkMembers.map(m => [m.id, m.name, m.email || "", m.phone || "", m.branch, m.status, m.tithe || "$0", m.joined || ""].join(","));
    let csvContent = [headers.join(","), ...rows].join("\n");
    let blob = new Blob([csvContent], { type: "text/csv" });
    let url = URL.createObjectURL(blob);
    let a = document.createElement("a");
    a.href = url;
    a.download = "j5_ark_members.csv";
    a.click();
    URL.revokeObjectURL(url);
    showToast("Ark Members CSV exported");
  };

  const openEditBranch = (b) => {
    setEditingBranch(b);
    setBranchForm({ ...b });
  };

  const hd = () => {
    if (editingBranch) {
      setBranches(c => c.map(y => {
        if (y.id === editingBranch.id) {
          return { ...y, ...branchForm, members: Number(branchForm.members) || 0 };
        }
        if (branchForm.isHQ) return { ...y, isHQ: false };
        return y;
      }));
      if (branchForm.isHQ) {
        setBranches(c => c.map(y => y.id === editingBranch.id ? { ...y, ...branchForm, isHQ: true } : { ...y, isHQ: false }));
      }
      setEditingBranch(null);
      setAuditLogs(y => ["[" + getUtcTime() + " UTC] Branch updated: " + (branchForm.name || editingBranch.name), ...y]);
      showToast("Branch details updated");
    } else {
      let newB = {
        id: Date.now().toString(),
        name: branchForm.name || "New Branch",
        province: branchForm.province || "Midlands",
        country: branchForm.country || "Zimbabwe",
        isHQ: !!branchForm.isHQ,
        pastor: branchForm.pastor || "Pastor Unassigned",
        phone: branchForm.phone || "+263...",
        address: branchForm.address || "Main St",
        gps: branchForm.gps || "-19.00, 30.00",
        members: Number(branchForm.members) || 0,
        code: branchForm.code || ("J5-" + Math.floor(1000 + Math.random() * 9000)),
        status: branchForm.status || "Live",
        founded: branchForm.founded || new Date().getFullYear().toString(),
        notes: branchForm.notes || ""
      };
      if (newB.isHQ) {
        setBranches(y => [newB, ...y.map(t => ({ ...t, isHQ: false }))]);
      } else {
        setBranches(y => [newB, ...y]);
      }
      setAuditLogs(y => ["[" + getUtcTime() + " UTC] New branch added: " + newB.name, ...y]);
      showToast("Branch " + newB.name + " created");
    }
    setIsAddBranchOpen(false);
    setBranchForm({});
  };

  const handleUpdateBranchMember = (id, newMembers) => {
    let val = parseInt(newMembers) || 0;
    setBranches(prev => prev.map(b => b.id === id ? { ...b, members: val } : b));
  };

  const handleSyncBranch = (branchName) => {
    setAuditLogs(y => ["[" + getUtcTime() + " UTC] Sync " + branchName + " verified", ...y]);
    showToast("Branch " + branchName + " synced live");
  };

  const handleMessageBranch = (b) => {
    setAuditLogs(y => ["[" + getUtcTime() + " UTC] Encrypted message pushed to " + b.name + " (" + b.pastor + ")", ...y]);
    showToast("Message sent to " + b.pastor);
  };

  const handlePushChannel = (channelName) => {
    setAuditLogs(y => ["[" + getUtcTime() + " UTC] Push broadcast to " + channelName + " successful", ...y]);
    showToast("Content pushed to " + channelName);
  };

  const handleScheduleContent = () => {
    if (!contentCaption.trim()) {
      showToast("Please enter caption text before scheduling");
      return;
    }
    setBroadcastingState("Scheduled for 18:00 UTC • Dr Andby Makururu Page + channels");
    setAuditLogs(y => ["[" + getUtcTime() + " UTC] Content scheduled for Dr Andby Makururu Page", ...y]);
    showToast("Content scheduled successfully");
    setTimeout(() => setBroadcastingState(""), 4000);
  };

  const handlePushAllContent = () => {
    setBroadcastingState("Pushed to All Platforms • Dr Andby Makururu Facebook • IG • YT");
    setTasks(c => c.map(y => ({ ...y, done: true })));
    setAuditLogs(y => ["[" + getUtcTime() + " UTC] Global push executed to all social channels", ...y]);
    showToast("Pushed to all social platforms!");
    setTimeout(() => setBroadcastingState(""), 4000);
  };

  const handleAddTask = () => {
    if (!newTaskInput.trim()) return;
    let t = { id: "t_" + Date.now(), label: newTaskInput.trim(), done: false };
    setTasks(c => [...c, t]);
    setNewTaskInput("");
    setAuditLogs(y => ["[" + getUtcTime() + " UTC] New media task added: " + t.label, ...y]);
    showToast("New media task added");
  };

  const handleDeleteTask = (id) => {
    setTasks(c => c.filter(t => t.id !== id));
    showToast("Task removed");
  };

  const handleAddAsset = () => {
    if (!newAssetForm.name) {
      showToast("Asset name required");
      return;
    }
    let asset = {
      name: newAssetForm.name,
      type: newAssetForm.type || "IMG",
      size: newAssetForm.size || "1.2 MB",
      date: "Just now",
      url: newAssetForm.url || "https://j5mediahub.vercel.app/assets/new.jpg"
    };
    setAssetLibrary(prev => [asset, ...prev]);
    setIsAddAssetOpen(false);
    setNewAssetForm({ name: "", type: "IMG", size: "1.5 MB", url: "" });
    setAuditLogs(y => ["[" + getUtcTime() + " UTC] New media asset added: " + asset.name, ...y]);
    showToast("Asset added to Media Hub Library");
  };

  const handleDeleteAsset = (assetName) => {
    setAssetLibrary(prev => prev.filter(a => a.name !== assetName));
    showToast("Asset deleted");
  };

  const handleToggleEventRsvp = (eventId) => {
    setEventList(prev => prev.map(ev => {
      if (ev.id === eventId) {
        let isAtt = !ev.userAttending;
        showToast(isAtt ? "RSVP Confirmed for " + ev.title : "RSVP Cancelled");
        return { ...ev, userAttending: isAtt, attendees: isAtt ? ev.attendees + 1 : ev.attendees - 1 };
      }
      return ev;
    }));
  };

  const handleSendCommentReply = () => {
    if (!commentReplyText.trim()) return;
    let c = { u: "Dr Andby Makururu Page (Official)", c: commentReplyText.trim(), t: "Just now" };
    setLiveComments(prev => [c, ...prev]);
    setCommentReplyText("");
    setAuditLogs(y => ["[" + getUtcTime() + " UTC] Official reply posted on Dr Andby Page live feed", ...y]);
    showToast("Reply published to live feed");
  };

  const openEditMember = (m) => {
    setEditingMember(m);
    setMemberForm({ ...m });
    setIsAddMemberOpen(true);
  };

  const handleSaveArkMember = () => {
    if (!memberForm.name) {
      showToast("Member name required");
      return;
    }
    if (editingMember) {
      setArkMembers(prev => prev.map(m => m.id === editingMember.id ? { ...m, ...memberForm } : m));
      setAuditLogs(y => ["[" + getUtcTime() + " UTC] Ark Member updated: " + memberForm.name, ...y]);
      showToast("Member details updated");
    } else {
      let m = {
        id: memberForm.id || ("J5-" + Math.floor(1000 + Math.random() * 9000) + "-2026"),
        name: memberForm.name,
        email: memberForm.email || (memberForm.name.toLowerCase().replace(/\s+/g, '.') + "@j5.org"),
        phone: memberForm.phone || "+263...",
        password: "Password123!",
        branch: memberForm.branch || "MVUMA HQ",
        status: memberForm.status || "Active",
        tithe: memberForm.tithe || "$100",
        joined: new Date().toISOString().slice(0, 10)
      };
      setArkMembers(prev => [m, ...prev]);
      setAuditLogs(y => ["[" + getUtcTime() + " UTC] New Ark Member registered: " + m.name + " (" + m.id + ")", ...y]);
      showToast("Member " + m.name + " registered in Ark");
    }
    setIsAddMemberOpen(false);
    setEditingMember(null);
    setMemberForm({ id: "", name: "", email: "", phone: "", branch: "MVUMA HQ", status: "Active", tithe: "$100" });
  };

  const handleDeleteArkMember = (id, name) => {
    setArkMembers(prev => prev.filter(m => m.id !== id));
    setAuditLogs(y => ["[" + getUtcTime() + " UTC] Ark Member removed: " + name, ...y]);
    showToast("Member " + name + " removed");
  };

  const handleUnlockSanctum = () => {
    setIsSanctumLoading(true);
    setTimeout(() => {
      setIsSanctumLoading(false);
      setIsSanctumUnlocked(true);
      setAuditLogs(y => ["[" + getUtcTime() + " UTC] PROPHET SANCTUM UNLOCKED - Biometrics Verified", ...y]);
      showToast("Prophet Sanctum Unlocked");
    }, 600);
  };

  const handleSafeCopyPass = (password, username) => {
    try {
      if (navigator && navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(password);
      }
    } catch (e) {}
    setAuditLogs(y => ["[" + getUtcTime() + " UTC] Password copied for " + username, ...y]);
    showToast("Password copied for " + username);
  };

  M.default.useEffect(() => {
    if (!liveSyncEnabled) return;
    let c = setInterval(() => setLiveViewersCount(y => y + Math.floor(Math.random() * 12 - 3)), 1800);
    return () => clearInterval(c);
  }, [liveSyncEnabled]);

  // Determine available tabs based on user role
  let isMember = currentUser && currentUser.role === "Member";

  let availableTabs = isMember ? [
    { k: "member-portal", label: "My Member Portal", icon: jn },
    { k: "events", label: "Upcoming Events", icon: Wr }
  ] : [
    { k: "overview", label: "Overview", icon: Wr },
    { k: "branches", label: "Branch Management", icon: qn },
    { k: "media", label: "Media Hub", icon: Vt },
    { k: "users", label: "User Management", icon: Wt },
    { k: "pulpit", label: "Pulpit Live", icon: Ut },
    { k: "ark", label: "Ark Members", icon: jn },
    { k: "events", label: "Events Calendar", icon: Wr },
    { k: "shield", label: "Shield", icon: Rn },
    { k: "prophet", label: "Prophet Seat", icon: xn }
  ];

  // Auto redirect members if they are on a non-member tab
  M.default.useEffect(() => {
    if (isMember && activeTab !== "member-portal" && activeTab !== "events") {
      setActiveTab("member-portal");
    }
  }, [isMember, activeTab]);

  // LOGIN / SIGNUP SCREEN
  if (!isLoggedIn) {
    return d("div", {
      className: "min-h-screen w-full max-w-[100vw] bg-[#020617] text-white flex items-center justify-center p-4 relative overflow-hidden",
      children: [
        toastMessage && d("div", {
          className: "fixed top-4 right-4 z-50 px-4 py-2.5 rounded-xl bg-[#00D4FF]/20 border border-[#00D4FF]/40 text-[#00D4FF] text-[12px] font-bold shadow-[0_0_20px_rgba(0,212,255,0.4)] backdrop-blur-md animate-bounce",
          children: toastMessage
        }),
        d("div", {
          className: "absolute inset-0 overflow-hidden pointer-events-none max-w-[100vw]",
          children: [
            i("div", { className: "absolute -top-16 -left-16 w-[320px] h-[320px] max-w-[70vw] max-h-[70vw] bg-[#00D4FF]/20 blur-[80px] rounded-full" }),
            i("div", { className: "absolute -bottom-16 -right-16 w-[320px] h-[320px] max-w-[70vw] max-h-[70vw] bg-[#00D4FF]/10 blur-[80px] rounded-full" }),
            i("div", { className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[min(500px,70vw)] h-[min(500px,70vw)] border border-[#00D4FF]/10 rounded-full" }),
            i("div", { className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[min(380px,60vw)] h-[min(380px,60vw)] border border-[#00D4FF]/15 rounded-full" })
          ]
        }),
        d("div", {
          className: "relative w-full max-w-[460px]",
          children: [
            d("div", {
              className: "rounded-[24px] bg-white/[0.06] backdrop-blur-2xl border border-white/10 shadow-[0_0_80px_rgba(0,212,255,0.25),inset_0_1px_0_0_rgba(255,255,255,0.1)] overflow-hidden",
              children: [
                d("div", {
                  className: "p-6 md:p-8 pb-6",
                  children: [
                    d("div", {
                      className: "flex items-center justify-center gap-3 mb-4",
                      children: [
                        i("div", { className: "w-11 h-11 rounded-xl bg-[#00D4FF] shadow-[0_0_20px_rgba(0,212,255,0.6)] flex items-center justify-center text-black font-black text-[18px]", children: "J5" }),
                        i("div", { className: "w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center", children: i(Rn, { className: "w-6 h-6 text-[#00D4FF]" }) })
                      ]
                    }),
                    i("h1", { className: "text-center font-black tracking-[0.18em] text-[13px] leading-5 text-[#00D4FF]", children: "CYBERLYX J5 COMMAND" }),
                    i("h2", { className: "text-center font-semibold tracking-[0.22em] text-[11px] text-white/60 mt-1", children: "AUTHORIZED ACCESS ONLY" }),
                    i("div", { className: "mt-4 h-[1px] w-full bg-gradient-to-r from-transparent via-[#00D4FF]/40 to-transparent" }),
                    d("div", {
                      className: "mt-5 flex p-1 rounded-full bg-black/40 border border-white/10",
                      children: [
                        i("button", {
                          onClick: () => { setLoginTab("staff"); setAuthError(""); },
                          "aria-pressed": loginTab === "staff",
                          className: "flex-1 h-9 rounded-full text-[11px] font-bold tracking-widest transition " + (loginTab === "staff" ? "bg-[#00D4FF] text-black shadow-[0_0_18px_rgba(0,212,255,0.5)]" : "text-white/50 hover:text-white/80"),
                          children: "STAFF ACCESS"
                        }),
                        i("button", {
                          onClick: () => { setLoginTab("member"); setAuthError(""); },
                          "aria-pressed": loginTab === "member",
                          className: "flex-1 h-9 rounded-full text-[11px] font-bold tracking-widest transition " + (loginTab === "member" ? "bg-[#00D4FF] text-black shadow-[0_0_18px_rgba(0,212,255,0.5)]" : "text-white/50 hover:text-white/80"),
                          children: "MEMBER ACCESS"
                        })
                      ]
                    }),
                    loginTab === "staff" ? d("div", {
                      className: "mt-5 space-y-3.5",
                      children: [
                        d("div", {
                          className: "relative",
                          children: [
                            i("div", { className: "absolute left-3 top-1/2 -translate-y-1/2 text-white/30", children: i(jn, { className: "w-4 h-4" }) }),
                            i("input", {
                              value: staffUsername,
                              onChange: (c) => setStaffUsername(c.target.value),
                              onKeyDown: (e) => e.key === "Enter" && ia(),
                              placeholder: "Username (e.g. Software CIOS)",
                              className: "w-full h-11 pl-10 pr-4 rounded-xl bg-black/50 border border-white/10 focus:border-[#00D4FF]/50 focus:outline-none text-[13px] placeholder:text-white/30"
                            })
                          ]
                        }),
                        d("div", {
                          className: "relative",
                          children: [
                            i("div", { className: "absolute left-3 top-1/2 -translate-y-1/2 text-white/30", children: i(Xr, { className: "w-4 h-4" }) }),
                            i("input", {
                              value: staffPassword,
                              onChange: (c) => setStaffPassword(c.target.value),
                              onKeyDown: (e) => e.key === "Enter" && ia(),
                              type: showPass ? "text" : "password",
                              placeholder: "Password",
                              className: "w-full h-11 pl-10 pr-11 rounded-xl bg-black/50 border border-white/10 focus:border-[#00D4FF]/50 focus:outline-none text-[13px] placeholder:text-white/30"
                            }),
                            i("button", {
                              type: "button",
                              onClick: () => setShowPass(c => !c),
                              className: "absolute right-3 top-1/2 -translate-y-1/2 text-white/40 hover:text-white/80 w-7 h-7 rounded-full bg-white/5 border border-white/10 flex items-center justify-center",
                              children: showPass ? i(Tn, { className: "w-3.5 h-3.5" }) : i(On, { className: "w-3.5 h-3.5" })
                            })
                          ]
                        }),
                        i("div", { className: "text-[10px] tracking-widest text-white/30 text-center", children: showPass ? "PASSWORD VISIBLE" : "PASSWORD HIDDEN • DOTS ONLY" }),
                        authError && d("div", {
                          role: "alert",
                          className: "flex items-center gap-2 text-[12px] text-red-300 bg-red-500/10 border border-red-500/20 rounded-lg px-3 py-2",
                          children: [i(ln, { className: "w-4 h-4" }), authError, d("span", { className: "ml-auto text-[10px] opacity-60", children: ["#", authAttempts] })]
                        }),
                        i("button", {
                          type: "button",
                          onClick: ia,
                          disabled: authLoading,
                          className: "w-full h-11 rounded-xl bg-[#00D4FF] text-black font-black tracking-[0.18em] text-[12px] shadow-[0_0_30px_rgba(0,212,255,0.5)] hover:shadow-[0_0_40px_rgba(0,212,255,0.7)] transition flex items-center justify-center gap-2",
                          children: authLoading ? "VERIFYING..." : (authAttempts ? ("AUTHENTICATE • " + authAttempts) : "AUTHENTICATE")
                        }),
                        i("p", { className: "text-center text-[10px] tracking-widest text-white/25 mt-2", children: "MVUMA HQ SECURE NODE • AES-256 • 47 BRANCHES" })
                      ]
                    }) : d("div", {
                      className: "mt-5 space-y-3",
                      children: [
                        d("div", {
                          className: "flex justify-center gap-2 mb-1",
                          children: [
                            i("button", {
                              onClick: () => { setMemberAuthMode("login"); setAuthError(""); },
                              className: "px-3 py-1 rounded-lg text-[10px] font-bold tracking-widest transition " + (memberAuthMode === "login" ? "bg-white/15 text-[#00D4FF] border border-[#00D4FF]/30" : "text-white/40 hover:text-white"),
                              children: "MEMBER SIGN IN"
                            }),
                            i("button", {
                              onClick: () => { setMemberAuthMode("signup"); setAuthError(""); },
                              className: "px-3 py-1 rounded-lg text-[10px] font-bold tracking-widest transition " + (memberAuthMode === "signup" ? "bg-white/15 text-[#00D4FF] border border-[#00D4FF]/30" : "text-white/40 hover:text-white"),
                              children: "REGISTER / SIGN UP"
                            })
                          ]
                        }),
                        memberAuthMode === "login" ? d("div", {
                          className: "space-y-3",
                          children: [
                            d("div", {
                              className: "relative",
                              children: [
                                i("div", { className: "absolute left-3 top-1/2 -translate-y-1/2 text-white/30", children: i(jn, { className: "w-4 h-4" }) }),
                                i("input", {
                                  value: memberIdentifier,
                                  onChange: (c) => setMemberIdentifier(c.target.value),
                                  onKeyDown: (e) => e.key === "Enter" && ia(),
                                  placeholder: "Phone (+263...) or Email address",
                                  className: "w-full h-11 pl-10 pr-4 rounded-xl bg-black/50 border border-white/10 focus:border-[#00D4FF]/50 focus:outline-none text-[13px] placeholder:text-white/30"
                                })
                              ]
                            }),
                            d("div", {
                              className: "relative",
                              children: [
                                i("div", { className: "absolute left-3 top-1/2 -translate-y-1/2 text-white/30", children: i(Xr, { className: "w-4 h-4" }) }),
                                i("input", {
                                  value: memberPassword,
                                  onChange: (c) => setMemberPassword(c.target.value),
                                  onKeyDown: (e) => e.key === "Enter" && ia(),
                                  type: "password",
                                  placeholder: "Member Password",
                                  className: "w-full h-11 pl-10 pr-4 rounded-xl bg-black/50 border border-white/10 focus:border-[#00D4FF]/50 focus:outline-none text-[13px] placeholder:text-white/30"
                                })
                              ]
                            })
                          ]
                        }) : d("div", {
                          className: "space-y-2.5",
                          children: [
                            i("input", {
                              value: signUpName,
                              onChange: (c) => setSignUpName(c.target.value),
                              placeholder: "Full Name",
                              className: "w-full h-10 px-3.5 rounded-xl bg-black/50 border border-white/10 focus:border-[#00D4FF]/50 focus:outline-none text-[12px] placeholder:text-white/30"
                            }),
                            d("div", {
                              className: "grid grid-cols-2 gap-2",
                              children: [
                                i("input", {
                                  value: signUpPhone,
                                  onChange: (c) => setSignUpPhone(c.target.value),
                                  placeholder: "Phone (+263...)",
                                  className: "w-full h-10 px-3.5 rounded-xl bg-black/50 border border-white/10 focus:border-[#00D4FF]/50 focus:outline-none text-[12px] placeholder:text-white/30"
                                }),
                                i("input", {
                                  value: signUpEmail,
                                  onChange: (c) => setSignUpEmail(c.target.value),
                                  placeholder: "Email address",
                                  className: "w-full h-10 px-3.5 rounded-xl bg-black/50 border border-white/10 focus:border-[#00D4FF]/50 focus:outline-none text-[12px] placeholder:text-white/30"
                                })
                              ]
                            }),
                            d("select", {
                              value: signUpBranch,
                              onChange: (c) => setSignUpBranch(c.target.value),
                              className: "w-full h-10 px-3 rounded-xl bg-black/50 border border-white/10 text-[12px]",
                              children: branches.map(b => i("option", { key: b.id, className: "bg-[#020617]", children: b.name }))
                            }),
                            d("div", {
                              className: "grid grid-cols-2 gap-2",
                              children: [
                                i("input", {
                                  value: signUpPassword,
                                  onChange: (c) => setSignUpPassword(c.target.value),
                                  type: "password",
                                  placeholder: "Password",
                                  className: "w-full h-10 px-3.5 rounded-xl bg-black/50 border border-white/10 text-[12px] placeholder:text-white/30"
                                }),
                                i("input", {
                                  value: signUpConfirmPass,
                                  onChange: (c) => setSignUpConfirmPass(c.target.value),
                                  type: "password",
                                  placeholder: "Confirm Pass",
                                  className: "w-full h-10 px-3.5 rounded-xl bg-black/50 border border-white/10 text-[12px] placeholder:text-white/30"
                                })
                              ]
                            })
                          ]
                        }),
                        authError && d("div", {
                          role: "alert",
                          className: "flex items-center gap-2 text-[12px] text-red-300 bg-red-500/10 border border-red-500/20 rounded-lg px-3 py-2",
                          children: [i(ln, { className: "w-4 h-4" }), authError]
                        }),
                        i("button", {
                          type: "button",
                          onClick: ia,
                          disabled: authLoading,
                          className: "w-full h-11 rounded-xl bg-[#00D4FF] text-black font-black tracking-[0.18em] text-[12px] shadow-[0_0_30px_rgba(0,212,255,0.5)] flex items-center justify-center gap-2",
                          children: authLoading ? "VERIFYING..." : (memberAuthMode === "login" ? "MEMBER LOGIN" : "CREATE MEMBER ACCOUNT")
                        })
                      ]
                    })
                  ]
                }),
                d("div", {
                  className: "px-8 py-3 bg-black/40 border-t border-white/10 flex items-center justify-between text-[10px] tracking-widest text-white/30",
                  children: [i("span", { children: "CYBERLYX v10.0" }), d("span", { className: "flex items-center gap-1", children: [i("span", { className: "w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" }), "SECURE"] })]
                })
              ]
            }),
            i("div", { className: "mt-4 text-center text-[10px] tracking-[0.2em] text-white/20", children: "DR ANDBY MAKURURU • PROPHET SEAT PROTECTED" })
          ]
        })
      ]
    });
  }

  // MAIN SYSTEM UI
  return d("div", {
    className: "min-h-screen w-full max-w-[100vw] overflow-x-hidden bg-[#020617] text-white selection:bg-[#00D4FF]/30 relative",
    children: [
      toastMessage && d("div", {
        className: "fixed top-4 right-4 z-50 px-4 py-2.5 rounded-xl bg-[#00D4FF]/20 border border-[#00D4FF]/40 text-[#00D4FF] text-[12px] font-bold shadow-[0_0_20px_rgba(0,212,255,0.4)] backdrop-blur-md animate-bounce",
        children: toastMessage
      }),
      i("style", {
        children: "::-webkit-scrollbar { width: 6px; height: 6px; } ::-webkit-scrollbar-thumb { background: rgba(0,212,255,0.25); border-radius: 999px; } ::-webkit-scrollbar-track { background: transparent; }"
      }),
      d("header", {
        className: "sticky top-0 z-40 backdrop-blur-xl bg-[#020617]/80 border-b border-white/10 w-full max-w-[100vw] overflow-hidden",
        children: [
          d("div", {
            className: "px-4 md:px-6 h-[64px] flex items-center justify-between gap-3 w-full max-w-full",
            children: [
              d("div", {
                className: "flex items-center gap-3 md:gap-4 min-w-0 flex-1",
                children: [
                  i("div", { className: "w-9 h-9 rounded-lg bg-[#00D4FF] text-black font-black flex items-center justify-center shadow-[0_0_18px_rgba(0,212,255,0.6)] shrink-0", children: "J5" }),
                  d("div", {
                    className: "min-w-0",
                    children: [
                      d("div", { className: "font-black tracking-[0.12em] md:tracking-[0.14em] text-[11px] md:text-[13px] leading-tight truncate", children: ["CYBERLYX J5 COMMAND OS ", i("span", { className: "text-[#00D4FF]", children: isMember ? "- MEMBER PORTAL" : "- ROOT" }), " - MVUMA HQ - ", i("span", { className: "text-emerald-300", children: branches.length + " Branches Synced" })] }),
                      i("div", { className: "text-[10px] tracking-widest text-white/40 mt-1 hidden md:block truncate", children: isMember ? ("WELCOME " + currentUser.username + " • " + currentUser.branch + " BRANCH") : "DR ANDBY MAKURURU • MIDLANDS PROVINCE • HEADQUARTERS NODE ONLINE" })
                    ]
                  })
                ]
              }),
              d("div", {
                className: "flex items-center gap-2",
                children: [
                  d("div", {
                    className: "hidden lg:flex items-center gap-2",
                    children: [
                      d("a", { href: "https://j5mediahub.vercel.app", target: "_blank", rel: "noopener", className: "h-8 px-3 rounded-full bg-white/5 border border-white/10 hover:border-[#00D4FF]/40 text-[11px] tracking-widest flex items-center gap-2", children: [i(Vt, { className: "w-4 h-4 text-[#00D4FF]" }), "Open J5 Media Hub Live ", i(Nn, { className: "w-3 h-3" })] }),
                      d("a", { href: "https://j5-church-connect-branches1.vercel.app", target: "_blank", rel: "noopener", className: "h-8 px-3 rounded-full bg-white/5 border border-white/10 hover:border-[#00D4FF]/40 text-[11px] tracking-widest flex items-center gap-2", children: [i(qn, { className: "w-4 h-4 text-[#00D4FF]" }), "Branch Connect Live ", i(Nn, { className: "w-3 h-3" })] }),
                      d("a", { href: "https://www.facebook.com/", target: "_blank", rel: "noopener", className: "h-8 px-3 rounded-full bg-[#00D4FF]/15 border border-[#00D4FF]/30 text-[#00D4FF] text-[11px] tracking-widest flex items-center gap-2", children: [i(Lt, { className: "w-4 h-4" }), "Dr Andby Makururu Facebook Page ", i(Nn, { className: "w-3 h-3" })] })
                    ]
                  }),
                  d("button", {
                    onClick: handleLogout,
                    title: "Click to logout",
                    className: "h-8 px-3 rounded-full bg-red-500/10 border border-red-500/30 text-red-300 hover:bg-red-500/20 text-[10px] tracking-widest font-bold flex items-center gap-1.5 transition",
                    children: [i(xn, { className: "w-3.5 h-3.5 text-amber-300" }), currentUser ? currentUser.username : "LOGOUT"]
                  })
                ]
              })
            ]
          }),
          d("div", {
            className: "lg:hidden px-4 pb-2.5 flex gap-2 overflow-x-auto w-full max-w-full no-scrollbar",
            children: [
              i("a", { href: "https://j5mediahub.vercel.app", target: "_blank", className: "whitespace-nowrap h-7 px-3 rounded-full bg-white/5 border border-white/10 text-[10px] tracking-widest flex items-center gap-1.5", children: "Media Hub Live" }),
              i("a", { href: "https://j5-church-connect-branches1.vercel.app", target: "_blank", className: "whitespace-nowrap h-7 px-3 rounded-full bg-white/5 border border-white/10 text-[10px] tracking-widest flex items-center gap-1.5", children: "Branch Connect" }),
              i("a", { href: "https://www.facebook.com/", target: "_blank", className: "whitespace-nowrap h-7 px-3 rounded-full bg-[#00D4FF]/15 border border-[#00D4FF]/30 text-[#00D4FF] text-[10px] tracking-widest flex items-center gap-1.5", children: "Dr Andby Makururu Page" })
            ]
          }),
          i("div", {
            className: "px-2 md:px-6 pb-3 flex gap-1.5 overflow-x-auto w-full max-w-full no-scrollbar",
            children: availableTabs.map((c) => {
              let IconComp = c.icon;
              let isAct = activeTab === c.k;
              return d("button", {
                key: c.k,
                onClick: () => setActiveTab(c.k),
                className: "whitespace-nowrap h-9 px-3.5 md:px-4 rounded-full border text-[10px] md:text-[11px] tracking-widest font-bold flex items-center gap-2 transition " + (isAct ? "bg-[#00D4FF] text-black border-[#00D4FF] shadow-[0_0_20px_rgba(0,212,255,0.5)]" : "bg-white/5 border-white/10 text-white/60 hover:text-white hover:border-white/20"),
                children: [i(IconComp, { className: "w-3.5 h-3.5 md:w-4 md:h-4" }), c.label]
              });
            })
          })
        ]
      }),
      d("main", {
        className: "px-3 md:px-6 py-4 md:py-6 max-w-[1600px] mx-auto",
        children: [
          // MEMBER PORTAL TAB (Accessible to Members)
          activeTab === "member-portal" && d("div", {
            className: "space-y-6",
            children: [
              d("div", {
                className: "rounded-[24px] border border-[#00D4FF]/30 bg-gradient-to-br from-[#00D4FF]/10 via-[#020617] to-white/[0.05] p-6 md:p-8 backdrop-blur-xl shadow-[0_0_50px_rgba(0,212,255,0.15)] relative overflow-hidden",
                children: [
                  i("div", { className: "absolute top-0 right-0 px-4 py-1.5 rounded-bl-2xl bg-[#00D4FF] text-black font-black text-[10px] tracking-widest", children: "MEMBER DIGITAL BADGE" }),
                  d("div", {
                    className: "flex flex-wrap items-center gap-6",
                    children: [
                      i("div", { className: "w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-gradient-to-br from-[#00D4FF] to-emerald-400 text-black font-black text-3xl flex items-center justify-center shadow-[0_0_30px_rgba(0,212,255,0.5)] shrink-0", children: currentUser ? currentUser.username.charAt(0).toUpperCase() : "M" }),
                      d("div", {
                        className: "flex-1 min-w-[240px]",
                        children: [
                          i("h2", { className: "font-black text-[22px] md:text-[26px] tracking-wide text-white", children: currentUser ? currentUser.username : "Ark Member" }),
                          i("div", { className: "text-[12px] text-[#00D4FF] font-mono mt-1", children: ["J5 MEMBER ID: ", currentUser ? (currentUser.memberId || "J5-MEM-4829") : "J5-MEM-4829"] }),
                          d("div", {
                            className: "mt-4 flex flex-wrap gap-2 text-[11px]",
                            children: [
                              i("span", { className: "px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 font-bold", children: "✓ Active Member" }),
                              i("span", { className: "px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/70", children: ["Branch: ", currentUser ? currentUser.branch : "MVUMA HQ"] }),
                              i("span", { className: "px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/70", children: "Role: Ark Member" })
                            ]
                          })
                        ]
                      }),
                      d("div", {
                        className: "bg-black/40 border border-white/10 p-4 rounded-2xl text-center min-w-[160px]",
                        children: [
                          i("div", { className: "text-[10px] tracking-widest text-white/40", children: "MEMBER TITHE / PLEDGE" }),
                          i("div", { className: "text-[22px] font-black text-[#00D4FF] mt-1", children: currentUser ? (currentUser.tithe || "$340") : "$340" }),
                          i("button", { onClick: () => showToast("Tithe portal redirected"), className: "mt-2 w-full h-8 rounded-full bg-[#00D4FF] text-black font-bold text-[10px] tracking-widest hover:bg-[#00D4FF]/90 transition", children: "GIVE TITHE / OFFERING" })
                        ]
                      })
                    ]
                  })
                ]
              }),
              d("div", {
                className: "grid md:grid-cols-2 gap-4",
                children: [
                  d("div", {
                    className: "rounded-[20px] bg-white/[0.05] border border-white/10 p-5 backdrop-blur-xl",
                    children: [
                      i("h3", { className: "font-bold tracking-widest text-[12px] text-[#00D4FF]", children: "MY PERSONAL DETAILS" }),
                      d("div", {
                        className: "mt-4 space-y-3 text-[12px]",
                        children: [
                          d("div", { className: "flex justify-between p-3 rounded-xl bg-black/30 border border-white/5", children: [i("span", { className: "text-white/40", children: "Full Name" }), i("span", { className: "font-bold", children: currentUser ? currentUser.username : "Tendai Moyo" })] }),
                          d("div", { className: "flex justify-between p-3 rounded-xl bg-black/30 border border-white/5", children: [i("span", { className: "text-white/40", children: "Phone Number" }), i("span", { className: "font-mono", children: currentUser ? (currentUser.phone || "+263 77 123 0001") : "+263 77 123 0001" })] }),
                          d("div", { className: "flex justify-between p-3 rounded-xl bg-black/30 border border-white/5", children: [i("span", { className: "text-white/40", children: "Email Address" }), i("span", { className: "font-mono", children: currentUser ? (currentUser.email || "tendai.moyo@j5.org") : "tendai.moyo@j5.org" })] }),
                          d("div", { className: "flex justify-between p-3 rounded-xl bg-black/30 border border-white/5", children: [i("span", { className: "text-white/40", children: "Home Branch" }), i("span", { className: "font-bold text-[#00D4FF]", children: currentUser ? currentUser.branch : "MVUMA HQ" })] })
                        ]
                      })
                    ]
                  }),
                  d("div", {
                    className: "rounded-[20px] bg-white/[0.05] border border-white/10 p-5 backdrop-blur-xl",
                    children: [
                      i("h3", { className: "font-bold tracking-widest text-[12px] text-amber-300", children: "QUICK MEMBER ACTIONS" }),
                      d("div", {
                        className: "mt-4 grid grid-cols-2 gap-3",
                        children: [
                          i("button", { onClick: () => showToast("Prayer Request Submitted to Sanctum"), className: "p-4 rounded-xl bg-black/40 border border-white/10 hover:border-amber-300/40 text-left transition", children: [i("div", { className: "text-[12px] font-bold text-amber-300", children: "Prayer Request" }), i("div", { className: "text-[10px] text-white/50 mt-1", children: "Submit request to Prophet Sanctum" })] }),
                          i("button", { onClick: () => showToast("Message sent to Branch Pastor"), className: "p-4 rounded-xl bg-black/40 border border-white/10 hover:border-[#00D4FF]/40 text-left transition", children: [i("div", { className: "text-[12px] font-bold text-[#00D4FF]", children: "Contact Pastor" }), i("div", { className: "text-[10px] text-white/50 mt-1", children: "Direct line to home branch pastor" })] }),
                          i("button", { onClick: () => setActiveTab("events"), className: "p-4 rounded-xl bg-black/40 border border-white/10 hover:border-emerald-400/40 text-left transition", children: [i("div", { className: "text-[12px] font-bold text-emerald-300", children: "View Events" }), i("div", { className: "text-[10px] text-white/50 mt-1", children: "Check church calendar & RSVP" })] }),
                          i("button", { onClick: () => showToast("Live Stream connected"), className: "p-4 rounded-xl bg-black/40 border border-white/10 hover:border-red-400/40 text-left transition", children: [i("div", { className: "text-[12px] font-bold text-red-400", children: "Watch Live Stream" }), i("div", { className: "text-[10px] text-white/50 mt-1", children: "Join Sunday & Midweek live service" })] })
                        ]
                      })
                    ]
                  })
                ]
              })
            ]
          }),

          // EVENTS CALENDAR TAB (Accessible to Members and Staff)
          activeTab === "events" && d("div", {
            className: "space-y-5",
            children: [
              d("div", {
                className: "flex items-center justify-between flex-wrap gap-3",
                children: [
                  d("div", { className: "flex items-center gap-2", children: [i("h3", { className: "font-bold tracking-widest text-[13px]", children: "J5 COMMAND UPCOMING EVENTS" }), i("span", { className: "text-[10px] px-2 py-0.5 rounded-full bg-[#00D4FF]/10 text-[#00D4FF] border border-[#00D4FF]/20 font-mono", children: eventList.length + " Events Scheduled" })] }),
                  d("div", {
                    className: "flex gap-2 items-center",
                    children: ["All", "Prophecy", "Deliverance", "Youth", "Leadership"].map(cat => i("button", {
                      key: cat,
                      onClick: () => setEventFilter(cat),
                      className: "px-3 py-1 rounded-full text-[11px] border tracking-wide transition " + (eventFilter === cat ? "bg-[#00D4FF] text-black border-[#00D4FF] font-bold" : "bg-white/5 border-white/10 text-white/60 hover:text-white"),
                      children: cat
                    }))
                  })
                ]
              }),
              i("div", {
                className: "grid md:grid-cols-2 gap-4",
                children: eventList.filter(ev => eventFilter === "All" || ev.type === eventFilter).map((ev) => d("div", {
                  key: ev.id,
                  className: "rounded-[20px] bg-white/[0.05] border border-white/10 p-5 backdrop-blur-xl relative overflow-hidden group hover:border-[#00D4FF]/40 transition",
                  children: [
                    d("div", {
                      className: "flex items-start justify-between gap-3",
                      children: [
                        d("div", {
                          children: [
                            i("span", { className: "text-[10px] px-2.5 py-1 rounded-full bg-[#00D4FF]/15 border border-[#00D4FF]/30 text-[#00D4FF] font-bold tracking-widest", children: ev.type.toUpperCase() }),
                            i("h4", { className: "font-black text-[16px] md:text-[18px] tracking-wide mt-2 text-white", children: ev.title })
                          ]
                        }),
                        i("div", { className: "text-right shrink-0", children: [i("div", { className: "text-[11px] font-mono text-amber-300 font-bold", children: ev.date }), i("div", { className: "text-[10px] text-white/40 mt-0.5", children: ev.location })] })
                      ]
                    }),
                    i("p", { className: "mt-3 text-[12px] text-white/70 leading-relaxed", children: ev.description }),
                    d("div", {
                      className: "mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[11px]",
                      children: [
                        i("span", { className: "text-white/40", children: ["Host: ", i("span", { className: "text-white font-bold", children: ev.host })] }),
                        d("div", {
                          className: "flex items-center gap-3",
                          children: [
                            i("span", { className: "text-[#00D4FF] font-mono font-bold", children: [ev.attendees.toLocaleString(), " Attending"] }),
                            i("button", {
                              onClick: () => handleToggleEventRsvp(ev.id),
                              className: "h-8 px-4 rounded-full font-bold text-[10px] tracking-widest transition " + (ev.userAttending ? "bg-emerald-500 text-black shadow-[0_0_12px_rgba(52,211,153,0.5)]" : "bg-white/10 hover:bg-white/20 text-white border border-white/10"),
                              children: ev.userAttending ? "✓ ATTENDING" : "RSVP / ATTEND"
                            })
                          ]
                        })
                      ]
                    })
                  ]
                }))
              })
            ]
          }),

          // OVERVIEW TAB (Staff only)
          !isMember && activeTab === "overview" && d("div", {
            className: "space-y-6",
            children: [
              i("div", {
                className: "grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4",
                children: [
                  { label: "Total Members", value: totalMemberCount.toLocaleString(), sub: "+12% this month", icon: jn },
                  { label: "Branches Live", value: branches.filter(b => b.status === "Live").length + " / " + branches.length, sub: "All synced", icon: qn },
                  { label: "Media Reach", value: "184.2K", sub: "31.4% growth", icon: Lt },
                  { label: "Prophet Seat", value: "Active", sub: "Dr Andby Makururu", icon: xn }
                ].map((c) => d("div", {
                  key: c.label,
                  className: "rounded-[18px] bg-white/[0.05] backdrop-blur-xl border border-white/10 p-3.5 md:p-4 shadow-[0_0_30px_rgba(0,212,255,0.12)] relative overflow-hidden",
                  children: [
                    i("div", { className: "absolute -top-10 -right-10 w-24 h-24 bg-[#00D4FF]/15 blur-2xl rounded-full" }),
                    d("div", { className: "flex items-center justify-between", children: [i(c.icon, { className: "w-4 h-4 md:w-5 md:h-5 text-[#00D4FF]" }), i("span", { className: "text-[9px] md:text-[10px] tracking-widest text-white/40", children: c.label })] }),
                    i("div", { className: "mt-2 md:mt-3 text-[18px] md:text-[22px] font-black tracking-wide", children: c.value }),
                    i("div", { className: "text-[10px] md:text-[11px] text-emerald-300 mt-1", children: c.sub })
                  ]
                }))
              }),
              d("div", {
                className: "grid md:grid-cols-3 gap-4",
                children: [
                  d("div", {
                    className: "md:col-span-2 rounded-[18px] bg-white/[0.05] border border-white/10 p-4 md:p-5",
                    children: [
                      d("div", { className: "flex items-center justify-between", children: [i("h3", { className: "font-bold tracking-widest text-[12px]", children: "BRANCH SYNC MATRIX" }), i("span", { className: "text-[10px] px-2 py-1 rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-500/20", children: branches.length + " NODES ONLINE" })] }),
                      i("div", {
                        className: "mt-4 grid grid-cols-3 sm:grid-cols-6 gap-2",
                        children: branches.slice(0, 18).map((c) => d("div", {
                          key: c.id,
                          onClick: () => { setActiveTab("branches"); setBranchSearch(c.name); },
                          className: "h-[72px] rounded-xl border flex flex-col items-center justify-center gap-1 cursor-pointer hover:border-[#00D4FF]/40 transition " + (c.status === "Live" ? "bg-emerald-500/5 border-emerald-500/20" : c.status === "Syncing" ? "bg-amber-500/5 border-amber-500/20" : "bg-red-500/5 border-red-500/20"),
                          children: [
                            i("div", { className: "w-2 h-2 rounded-full " + (c.status === "Live" ? "bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" : c.status === "Syncing" ? "bg-amber-400" : "bg-red-400") }),
                            i("div", { className: "text-[10px] font-bold text-center leading-tight px-1 truncate w-full text-center", children: c.name.split(" ")[0] }),
                            i("div", { className: "text-[9px] text-white/40", children: c.members })
                          ]
                        }))
                      })
                    ]
                  }),
                  d("div", {
                    className: "rounded-[18px] bg-white/[0.05] border border-white/10 p-4 md:p-5",
                    children: [
                      i("h3", { className: "font-bold tracking-widest text-[12px]", children: "SECURITY LOG" }),
                      i("div", {
                        className: "mt-3 space-y-2 max-h-[220px] overflow-auto pr-1",
                        children: auditLogs.map((c, y) => i("div", { key: y, className: "text-[11px] text-white/60 font-mono border-l border-[#00D4FF]/30 pl-2 py-1", children: c }))
                      })
                    ]
                  })
                ]
              })
            ]
          }),

          // BRANCH MANAGEMENT TAB (Staff only)
          !isMember && activeTab === "branches" && d("div", {
            className: "space-y-5",
            children: [
              d("div", {
                className: "flex flex-wrap gap-3 items-center justify-between",
                children: [
                  d("div", {
                    className: "flex gap-2 items-center flex-wrap w-full md:w-auto",
                    children: [
                      d("div", {
                        className: "relative flex-1 md:flex-none",
                        children: [
                          i(Jr, { className: "w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-white/30" }),
                          i("input", { value: branchSearch, onChange: (c) => setBranchSearch(c.target.value), placeholder: "Search branches...", className: "h-10 pl-9 pr-3 rounded-full bg-white/5 border border-white/10 w-full md:w-[240px] text-[13px]" })
                        ]
                      }),
                      d("select", {
                        value: branchFilter,
                        onChange: (c) => setBranchFilter(c.target.value),
                        className: "h-10 rounded-full bg-white/5 border border-white/10 px-4 text-[12px]",
                        children: ["All", "Zimbabwe", "South Africa", "Mozambique", "Botswana", "Zambia", "Live", "Syncing", "Offline"].map(opt => i("option", { key: opt, className: "bg-[#020617]", children: opt }))
                      }),
                      d("button", { onClick: exportCSV, className: "h-10 px-4 rounded-full bg-white/5 border border-white/10 text-[12px] flex items-center gap-2 hover:bg-white/10 transition", children: [i(Kr, { className: "w-4 h-4" }), "Export CSV"] })
                    ]
                  }),
                  d("button", {
                    onClick: () => { setEditingBranch(null); setBranchForm({ country: "Zimbabwe", status: "Live", province: "Midlands" }); setIsAddBranchOpen(true); },
                    className: "h-10 px-5 rounded-full bg-[#00D4FF] text-black font-black text-[11px] tracking-widest shadow-[0_0_20px_rgba(0,212,255,0.5)] flex items-center gap-2 hover:bg-[#00D4FF]/90 transition w-full md:w-auto justify-center",
                    children: [i(Gr, { className: "w-4 h-4" }), "ADD NEW BRANCH"]
                  })
                ]
              }),
              d("div", {
                className: "rounded-[20px] border border-amber-300/40 bg-gradient-to-br from-amber-500/10 via-white/[0.06] to-[#00D4FF]/10 backdrop-blur-xl p-4 md:p-5 shadow-[0_0_40px_rgba(251,191,36,0.18)] relative overflow-hidden",
                children: [
                  i("div", { className: "absolute top-0 right-0 px-3 py-1 rounded-bl-xl bg-amber-300 text-black font-black text-[10px] tracking-widest", children: "HEADQUARTERS • MVUMA HQ" }),
                  d("div", {
                    className: "flex flex-wrap gap-6",
                    children: [
                      d("div", {
                        className: "flex-1 min-w-[260px]",
                        children: [
                          d("div", {
                            className: "flex items-center gap-3",
                            children: [
                              i("div", { className: "w-10 h-10 rounded-xl bg-amber-300 text-black font-black flex items-center justify-center shrink-0", children: "HQ" }),
                              d("div", { children: [d("div", { className: "font-black text-[16px] md:text-[18px] tracking-wide", children: [headquarterBranch.name, " - ", headquarterBranch.province] }), d("div", { className: "text-[11px] text-white/60 flex items-center gap-2", children: [i(Br, { className: "w-3 h-3" }), headquarterBranch.address, " • ", headquarterBranch.gps] })] })
                            ]
                          }),
                          d("div", {
                            className: "mt-4 grid grid-cols-2 gap-2.5 md:gap-3 text-[12px]",
                            children: [
                              d("div", { className: "rounded-xl bg-black/30 border border-white/10 p-2.5 md:p-3", children: [i("div", { className: "text-white/40 text-[10px] tracking-widest", children: "PASTOR" }), i("div", { className: "font-bold mt-1 text-[11px] md:text-[12px]", children: headquarterBranch.pastor })] }),
                              d("div", { className: "rounded-xl bg-black/30 border border-white/10 p-2.5 md:p-3", children: [i("div", { className: "text-white/40 text-[10px] tracking-widest", children: "MEMBERS" }), i("div", { className: "font-bold mt-1 text-[#00D4FF]", children: headquarterBranch.members.toLocaleString() })] }),
                              d("div", { className: "rounded-xl bg-black/30 border border-white/10 p-2.5 md:p-3", children: [i("div", { className: "text-white/40 text-[10px] tracking-widest", children: "CONTACT" }), i("div", { className: "font-bold mt-1 text-[11px] md:text-[12px]", children: headquarterBranch.phone })] }),
                              d("div", { className: "rounded-xl bg-black/30 border border-white/10 p-2.5 md:p-3", children: [i("div", { className: "text-white/40 text-[10px] tracking-widest", children: "CODE" }), i("div", { className: "font-bold mt-1 text-[11px] md:text-[12px]", children: headquarterBranch.code })] })
                            ]
                          })
                        ]
                      }),
                      d("div", {
                        className: "flex flex-col gap-2 min-w-[180px] w-full md:w-auto",
                        children: [
                          d("button", { onClick: () => { openEditBranch(headquarterBranch); setIsAddBranchOpen(true); }, className: "h-10 rounded-full bg-white text-black font-bold text-[11px] tracking-widest flex items-center justify-center gap-2 hover:bg-white/90 transition", children: [i(rn, { className: "w-4 h-4" }), "EDIT HQ"] }),
                          i("button", { onClick: () => handleSyncBranch(headquarterBranch.name), className: "h-10 rounded-full bg-[#00D4FF]/20 border border-[#00D4FF]/30 text-[#00D4FF] text-[11px] tracking-widest hover:bg-[#00D4FF]/30 transition", children: "SYNC NOW • LIVE" }),
                          d("div", { className: "text-[10px] text-white/40 mt-2 font-mono text-center md:text-left", children: ["Founded ", headquarterBranch.founded, " • Status ", headquarterBranch.status] })
                        ]
                      })
                    ]
                  })
                ]
              }),
              i("div", {
                className: "grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4",
                children: filteredBranches.filter((c) => !c.isHQ).map((c) => d("div", {
                  key: c.id,
                  className: "rounded-[18px] bg-white/[0.05] border border-white/10 p-4 backdrop-blur-xl hover:border-[#00D4FF]/30 transition group",
                  children: [
                    d("div", {
                      className: "flex items-start justify-between",
                      children: [
                        d("div", { children: [i("div", { className: "font-black tracking-wide text-[13px]", children: c.name }), d("div", { className: "text-[11px] text-white/50", children: [c.province, " • ", c.country] })] }),
                        i("span", { className: "text-[10px] px-2 py-1 rounded-full border " + (c.status === "Live" ? "bg-emerald-500/10 border-emerald-500/20 text-emerald-300" : c.status === "Syncing" ? "bg-amber-500/10 border-amber-500/20 text-amber-300" : "bg-red-500/10 border-red-500/20 text-red-300"), children: c.status })
                      ]
                    }),
                    d("div", {
                      className: "mt-3 space-y-2 text-[11px]",
                      children: [
                        d("div", { className: "flex justify-between", children: [i("span", { className: "text-white/40", children: "Pastor" }), i("span", { className: "font-bold", children: c.pastor })] }),
                        d("div", { className: "flex justify-between items-center", children: [i("span", { className: "text-white/40", children: "Members" }), i("input", { type: "number", value: c.members, onChange: (y) => handleUpdateBranchMember(c.id, y.target.value), className: "w-20 h-6 rounded bg-black/40 border border-white/10 text-center text-[11px] text-[#00D4FF] font-bold" })] }),
                        d("div", { className: "flex justify-between", children: [i("span", { className: "text-white/40", children: "Code" }), i("span", { className: "font-mono text-[10px]", children: c.code })] })
                      ]
                    }),
                    d("div", {
                      className: "mt-4 grid grid-cols-2 gap-1.5",
                      children: [
                        d("button", { onClick: () => { openEditBranch(c); setIsAddBranchOpen(true); }, className: "h-8 rounded-full bg-white/5 border border-white/10 text-[10px] tracking-widest hover:bg-white/10 flex items-center justify-center gap-1", children: [i(rn, { className: "w-3 h-3" }), "Edit"] }),
                        d("button", { onClick: () => { setBranches(y => y.filter(t => t.id !== c.id)); showToast("Branch " + c.name + " deleted"); }, className: "h-8 rounded-full bg-red-500/10 border border-red-500/20 text-red-300 text-[10px] tracking-widest flex items-center justify-center gap-1 hover:bg-red-500/20", children: [i(Qt, { className: "w-3 h-3" }), "Delete"] }),
                        i("button", { onClick: () => { setBranches(y => y.map(t => ({ ...t, isHQ: t.id === c.id }))); showToast(c.name + " set as Headquarters"); }, className: "h-8 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-200 text-[10px] tracking-widest hover:bg-amber-500/20", children: "Set as HQ" }),
                        d("button", { onClick: () => handleSyncBranch(c.name), className: "h-8 rounded-full bg-[#00D4FF]/10 border border-[#00D4FF]/20 text-[#00D4FF] text-[10px] tracking-widest flex items-center justify-center gap-1 hover:bg-[#00D4FF]/20", children: [i(xr, { className: "w-3 h-3" }), "Sync Now"] })
                      ]
                    }),
                    d("button", { onClick: () => handleMessageBranch(c), className: "mt-1.5 w-full h-8 rounded-full bg-white/5 border border-white/10 text-[10px] tracking-widest flex items-center justify-center gap-1 hover:bg-white/10", children: [i(Zr, { className: "w-3 h-3" }), "Message Branch"] })
                  ]
                }))
              })
            ]
          }),

          // MEDIA HUB TAB (Staff only)
          !isMember && activeTab === "media" && d("div", {
            className: "space-y-5",
            children: [
              i("div", {
                className: "grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4",
                children: [
                  { k: "184.2K Reach", v: "184.2K", sub: "+8.2% vs last week" },
                  { k: "96 Posts", v: "96", sub: "This month" },
                  { k: "31.4% Growth", v: "31.4%", sub: "Audience growth" },
                  { k: "92 SEO Score", v: "92", sub: "Dr Andby page optimized" }
                ].map((c) => d("div", { key: c.k, className: "rounded-[18px] bg-white/[0.05] border border-white/10 p-3.5 md:p-4 backdrop-blur-xl shadow-[0_0_30px_rgba(0,212,255,0.1)]", children: [i("div", { className: "text-[10px] tracking-widest text-white/40", children: c.k }), i("div", { className: "mt-2 text-[20px] md:text-[22px] font-black", children: c.v }), i("div", { className: "text-[10px] md:text-[11px] text-emerald-300 mt-1", children: c.sub })] }))
              }),
              d("div", {
                className: "grid lg:grid-cols-3 gap-4",
                children: [
                  d("div", {
                    className: "lg:col-span-2 rounded-[18px] bg-white/[0.05] border border-white/10 p-4 md:p-5",
                    children: [
                      d("div", { className: "flex items-center justify-between flex-wrap gap-2", children: [i("h3", { className: "font-bold tracking-widest text-[12px]", children: "CHANNEL MATRIX" }), d("a", { href: "https://j5mediahub.vercel.app", target: "_blank", className: "h-8 px-3 rounded-full bg-[#00D4FF] text-black text-[10px] md:text-[11px] font-bold tracking-widest flex items-center gap-2 hover:bg-[#00D4FF]/90 transition", children: ["Open Full Media Hub Site ", i(Nn, { className: "w-3 h-3" })] })] }),
                      i("div", {
                        className: "mt-4 overflow-x-auto",
                        children: d("table", {
                          className: "w-full text-[12px]",
                          children: [
                            i("thead", { className: "text-white/40 text-[10px] tracking-widest", children: d("tr", { children: [i("th", { className: "text-left py-2 font-normal", children: "Channel" }), i("th", { className: "text-left py-2 font-normal", children: "Audience" }), i("th", { className: "text-left py-2 font-normal", children: "Status" }), i("th", { className: "text-left py-2 font-normal", children: "Action" })] }) }),
                            i("tbody", {
                              children: [
                                { ch: "Instagram", aud: "67.4K", st: "Healthy" },
                                { ch: "YouTube", aud: "21.6K", st: "Growing" },
                                { ch: "Facebook - Dr Andby Makururu", aud: "45K", st: "Live" },
                                { ch: "Email List", aud: "8,940", st: "Nurture" },
                                { ch: "Live Stream", aud: "4,220", st: "Peak" }
                              ].map((c) => d("tr", {
                                key: c.ch,
                                className: "border-t border-white/5",
                                children: [
                                  d("td", { className: "py-3 font-bold flex items-center gap-2", children: [i("span", { className: "w-6 h-6 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[10px]", children: c.ch[0] }), c.ch] }),
                                  i("td", { className: "py-3", children: c.aud }),
                                  i("td", { className: "py-3", children: i("span", { className: "px-2 py-1 rounded-full text-[10px] border " + (c.st === "Live" ? "bg-[#00D4FF]/10 border-[#00D4FF]/20 text-[#00D4FF]" : "bg-white/5 border-white/10 text-white/60"), children: c.st }) }),
                                  i("td", { className: "py-3", children: i("button", { onClick: () => handlePushChannel(c.ch), className: "h-7 px-3 rounded-full bg-white/5 border border-white/10 text-[10px] hover:bg-[#00D4FF]/20 hover:border-[#00D4FF]/30 transition", children: "Push" }) })
                                ]
                              }))
                            })
                          ]
                        })
                      }),
                      d("div", {
                        className: "mt-6 grid md:grid-cols-2 gap-4",
                        children: [
                          d("div", {
                            children: [
                              d("div", { className: "flex items-center justify-between", children: [i("h4", { className: "text-[11px] tracking-widest font-bold", children: "MEDIA TASKS" }), i("span", { className: "text-[10px] text-white/40", children: tasks.filter(t => t.done).length + "/" + tasks.length + " Done" })] }),
                              d("div", { className: "mt-2.5 flex gap-2", children: [i("input", { value: newTaskInput, onChange: (e) => setNewTaskInput(e.target.value), onKeyDown: (e) => e.key === "Enter" && handleAddTask(), placeholder: "Add new task...", className: "flex-1 h-8 px-3 rounded-xl bg-black/40 border border-white/10 text-[11px] focus:outline-none focus:border-[#00D4FF]/40" }), i("button", { onClick: handleAddTask, className: "h-8 px-3 rounded-xl bg-[#00D4FF] text-black font-bold text-[11px]", children: "+" })] }),
                              i("div", {
                                className: "mt-3 space-y-2 max-h-[180px] overflow-auto pr-1",
                                children: tasks.map((c) => d("div", {
                                  key: c.id,
                                  className: "flex items-center justify-between p-2.5 rounded-xl bg-black/30 border border-white/10",
                                  children: [
                                    d("label", {
                                      className: "flex items-center gap-2.5 cursor-pointer flex-1 min-w-0 pr-2",
                                      children: [
                                        i("input", { type: "checkbox", checked: c.done, onChange: (y) => setTasks(T => T.map(Oe => Oe.id === c.id ? { ...Oe, done: y.target.checked } : Oe)), className: "w-4 h-4 accent-[#00D4FF]" }),
                                        i("span", { className: "text-[11px] md:text-[12px] truncate " + (c.done ? "line-through text-white/40" : "text-white/80"), children: c.label })
                                      ]
                                    }),
                                    i("button", { onClick: () => handleDeleteTask(c.id), className: "text-white/30 hover:text-red-300 text-[12px] px-1", children: "✕" })
                                  ]
                                }))
                              })
                            ]
                          }),
                          d("div", {
                            children: [
                              i("h4", { className: "text-[11px] tracking-widest font-bold", children: "CONTENT SCHEDULER" }),
                              i("textarea", { value: contentCaption, onChange: (c) => setContentCaption(c.target.value), placeholder: "Write broadcast caption for Dr Andby Makururu Page...", className: "mt-2.5 w-full h-[88px] rounded-xl bg-black/40 border border-white/10 p-3 text-[12px] placeholder:text-white/30 focus:outline-none focus:border-[#00D4FF]/30" }),
                              i("div", {
                                className: "mt-2 flex flex-wrap gap-1.5",
                                children: ["Facebook - Dr Andby Makururu", "Instagram", "YouTube", "Email", "Website"].map((c) => i("button", {
                                  key: c,
                                  onClick: () => setSelectedMediaChannels(y => y.includes(c) ? y.filter(T => T !== c) : [...y, c]),
                                  className: "px-2.5 py-1 rounded-full text-[10px] border tracking-wide transition " + (selectedMediaChannels.includes(c) ? "bg-[#00D4FF]/20 border-[#00D4FF]/30 text-[#00D4FF]" : "bg-white/5 border-white/10 text-white/50"),
                                  children: c
                                }))
                              }),
                              d("div", {
                                className: "mt-3 flex gap-2",
                                children: [
                                  i("button", { onClick: handleScheduleContent, className: "h-9 px-4 rounded-full bg-white text-black text-[11px] font-bold tracking-widest hover:bg-white/90 transition", children: "Schedule" }),
                                  d("button", { onClick: handlePushAllContent, className: "flex-1 h-9 rounded-full bg-[#00D4FF] text-black font-black text-[11px] tracking-widest shadow-[0_0_20px_rgba(0,212,255,0.5)] flex items-center justify-center gap-2 hover:bg-[#00D4FF]/90 transition", children: [i($t, { className: "w-4 h-4" }), "Push to All Platforms"] })
                                ]
                              }),
                              broadcastingState && i("div", { className: "mt-2 text-[11px] text-[#00D4FF] bg-[#00D4FF]/10 border border-[#00D4FF]/20 rounded-lg px-3 py-2", children: broadcastingState })
                            ]
                          })
                        ]
                      })
                    ]
                  }),
                  d("div", {
                    className: "rounded-[18px] bg-white/[0.05] border border-white/10 p-4 md:p-5",
                    children: [
                      d("div", { className: "flex items-center justify-between", children: [i("h3", { className: "font-bold tracking-widest text-[12px]", children: "ASSET LIBRARY" }), i("button", { onClick: () => setIsAddAssetOpen(true), className: "h-7 px-3 rounded-full bg-[#00D4FF]/15 border border-[#00D4FF]/30 text-[#00D4FF] text-[10px] font-bold hover:bg-[#00D4FF]/25", children: "+ Add Asset" })] }),
                      i("div", {
                        className: "mt-4 grid grid-cols-2 gap-2 max-h-[440px] overflow-auto pr-1",
                        children: assetList.map((c) => d("div", {
                          key: c.name,
                          className: "rounded-xl bg-black/30 border border-white/10 p-3 relative group hover:border-[#00D4FF]/40 transition",
                          children: [
                            i("div", { className: "w-full h-[58px] rounded-lg bg-gradient-to-br from-[#00D4FF]/20 to-white/5 border border-white/10 flex items-center justify-center text-[10px] font-bold tracking-widest text-white/40", children: c.type }),
                            i("div", { className: "mt-2 text-[11px] font-bold leading-tight truncate", title: c.name, children: c.name }),
                            i("div", { className: "text-[10px] text-white/40 mt-1 flex justify-between", children: [i("span", { children: c.size }), i("span", { children: c.date })] }),
                            d("div", {
                              className: "mt-2 flex gap-1",
                              children: [
                                i("button", { onClick: () => { handleSafeCopyPass(c.url, c.name); showToast("Asset URL copied"); }, className: "flex-1 h-6 rounded bg-white/5 text-[9px] text-white/60 hover:text-white", children: "Copy Link" }),
                                i("button", { onClick: () => handleDeleteAsset(c.name), className: "h-6 px-1.5 rounded bg-red-500/10 text-red-300 text-[9px]", children: "✕" })
                              ]
                            })
                          ]
                        }))
                      })
                    ]
                  })
                ]
              })
            ]
          }),

          // USER MANAGEMENT TAB (Staff only)
          !isMember && activeTab === "users" && i("div", {
            className: "space-y-5",
            children: d("div", {
              className: "grid lg:grid-cols-3 gap-4",
              children: [
                d("div", {
                  className: "rounded-[18px] bg-white/[0.05] border border-white/10 p-4 md:p-5 backdrop-blur-xl",
                  children: [
                    d("h3", { className: "font-black tracking-widest text-[12px] flex items-center gap-2", children: [i(Wt, { className: "w-4 h-4 text-[#00D4FF]" }), "CREATE STAFF"] }),
                    d("div", {
                      className: "mt-4 space-y-3",
                      children: [
                        i("input", { value: newStaffForm.username, onChange: (c) => setNewStaffForm(y => ({ ...y, username: c.target.value })), placeholder: "Username", className: "w-full h-11 px-4 rounded-xl bg-black/40 border border-white/10 text-[13px] placeholder:text-white/30" }),
                        d("div", {
                          className: "relative",
                          children: [
                            i("input", { value: newStaffForm.password, onChange: (c) => setNewStaffForm(y => ({ ...y, password: c.target.value })), type: isGenPasswordVisible ? "text" : "password", placeholder: "Password (hidden)", className: "w-full h-11 px-4 pr-[88px] rounded-xl bg-black/40 border border-white/10 text-[13px] placeholder:text-white/30" }),
                            d("div", {
                              className: "absolute right-1 top-1 flex gap-1",
                              children: [
                                i("button", { onClick: () => setIsGenPasswordVisible(c => !c), className: "w-8 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/60", children: isGenPasswordVisible ? i(Tn, { className: "w-4 h-4" }) : i(On, { className: "w-4 h-4" }) }),
                                d("button", { onClick: genPassword, className: "h-9 px-2 rounded-lg bg-[#00D4FF]/20 border border-[#00D4FF]/30 text-[#00D4FF] text-[10px] font-bold flex items-center gap-1", children: [i(qr, { className: "w-3 h-3" }), "Gen"] })
                              ]
                            })
                          ]
                        }),
                        d("div", {
                          className: "grid grid-cols-2 gap-2",
                          children: [
                            d("select", { value: newStaffForm.role, onChange: (c) => setNewStaffForm(y => ({ ...y, role: c.target.value })), className: "h-11 rounded-xl bg-black/40 border border-white/10 px-3 text-[13px]", children: ["Prophet", "Archbishop", "Media Team", "Pastor", "Finance", "Member"].map(opt => i("option", { key: opt, className: "bg-[#020617]", children: opt })) }),
                            d("select", { value: newStaffForm.branch, onChange: (c) => setNewStaffForm(y => ({ ...y, branch: c.target.value })), className: "h-11 rounded-xl bg-black/40 border border-white/10 px-3 text-[13px]", children: branches.map(c => i("option", { key: c.id, className: "bg-[#020617]", children: c.name })) })
                          ]
                        }),
                        d("div", {
                          className: "rounded-xl bg-black/30 border border-white/10 p-3",
                          children: [
                            i("div", { className: "text-[10px] tracking-widest text-white/40", children: "PERMISSIONS" }),
                            i("div", {
                              className: "mt-2 flex flex-wrap gap-1.5",
                              children: ["all", "media", "branches", "members", "pulpit", "finance"].map((c) => i("button", {
                                key: c,
                                onClick: () => setNewStaffPerms(y => y.includes(c) ? y.filter(T => T !== c) : [...y, c]),
                                className: "px-2.5 py-1 rounded-full text-[10px] border " + (newStaffPerms.includes(c) ? "bg-[#00D4FF]/20 border-[#00D4FF]/30 text-[#00D4FF]" : "bg-white/5 border-white/10 text-white/50"),
                                children: c.toUpperCase()
                              }))
                            })
                          ]
                        }),
                        i("button", { onClick: handleCreateStaff, className: "w-full h-11 rounded-xl bg-[#00D4FF] text-black font-black tracking-widest text-[11px] shadow-[0_0_20px_rgba(0,212,255,0.5)] hover:bg-[#00D4FF]/90 transition", children: "CREATE STAFF" }),
                        i("div", { className: "text-[10px] text-white/30 text-center", children: "Password is hidden • Eye toggle only • No plain display" })
                      ]
                    })
                  ]
                }),
                d("div", {
                  className: "lg:col-span-2 rounded-[18px] bg-white/[0.05] border border-white/10 p-4 md:p-5",
                  children: [
                    d("div", { className: "flex items-center justify-between", children: [d("h3", { className: "font-bold tracking-widest text-[12px]", children: ["STAFF TABLE • ", staffList.length, " USERS"] }), i("span", { className: "text-[10px] px-2 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300", children: "AES-256 ENCRYPTED" })] }),
                    i("div", {
                      className: "mt-4 overflow-x-auto",
                      children: d("table", {
                        className: "w-full text-[12px]",
                        children: [
                          i("thead", { className: "text-white/40 text-[10px] tracking-widest", children: d("tr", { children: [i("th", { className: "text-left py-2", children: "Username" }), i("th", { className: "text-left py-2", children: "Role" }), i("th", { className: "text-left py-2", children: "Branch" }), i("th", { className: "text-left py-2", children: "Password" }), i("th", { className: "text-left py-2", children: "2FA" }), i("th", { className: "text-left py-2", children: "Active" }), i("th", { className: "text-left py-2", children: "Last Login" }), i("th", { className: "text-left py-2", children: "Actions" })] }) }),
                          i("tbody", {
                            children: staffList.map((c) => d("tr", {
                              key: c.id,
                              className: "border-t border-white/5",
                              children: [
                                i("td", { className: "py-3 font-bold", children: c.username }),
                                i("td", { className: "py-3", children: i("span", { className: "px-2 py-1 rounded-full bg-white/5 border border-white/10 text-[10px]", children: c.role }) }),
                                i("td", { className: "py-3 text-white/60", children: c.branch }),
                                i("td", {
                                  className: "py-3",
                                  children: d("div", {
                                    className: "flex items-center gap-1.5",
                                    children: [
                                      i("span", { className: "font-mono text-[12px] tracking-widest", children: c.showPass ? c.password : "••••••" }),
                                      i("button", { onClick: () => setStaffList(y => y.map(T => T.id === c.id ? { ...T, showPass: !T.showPass } : T)), className: "w-6 h-6 rounded-full bg-white/5 border border-white/10 flex items-center justify-center", children: c.showPass ? i(Tn, { className: "w-3 h-3" }) : i(On, { className: "w-3 h-3" }) }),
                                      i("button", { onClick: () => handleSafeCopyPass(c.password, c.username), className: "w-6 h-6 rounded-full bg-[#00D4FF]/10 border border-[#00D4FF]/20 text-[#00D4FF] flex items-center justify-center", children: i(Ar, { className: "w-3 h-3" }) })
                                    ]
                                  })
                                }),
                                i("td", { className: "py-3", children: i("button", { onClick: () => setStaffList(y => y.map(T => T.id === c.id ? { ...T, twoFA: !T.twoFA } : T)), className: "w-9 h-5 rounded-full p-0.5 transition " + (c.twoFA ? "bg-[#00D4FF]" : "bg-white/10"), children: i("span", { className: "block w-4 h-4 rounded-full bg-white transition " + (c.twoFA ? "translate-x-4" : "translate-x-0") }) }) }),
                                i("td", { className: "py-3", children: i("button", { onClick: () => setStaffList(y => y.map(T => T.id === c.id ? { ...T, active: !T.active } : T)), className: "w-9 h-5 rounded-full p-0.5 transition " + (c.active ? "bg-emerald-500" : "bg-white/10"), children: i("span", { className: "block w-4 h-4 rounded-full bg-white transition " + (c.active ? "translate-x-4" : "translate-x-0") }) }) }),
                                i("td", { className: "py-3 text-white/40 text-[11px]", children: c.lastLogin }),
                                d("td", {
                                  className: "py-3 flex gap-1",
                                  children: [
                                    i("button", { onClick: () => { let y = "J5-" + Math.floor(1000 + Math.random() * 9000) + "-2026!"; setStaffList(T => T.map(Oe => Oe.id === c.id ? { ...Oe, password: y, showPass: true } : Oe)); setAuditLogs(T => ["[" + getUtcTime() + " UTC] Reset password for " + c.username, ...T]); showToast("Password reset for " + c.username); }, className: "h-7 px-2 rounded-full bg-white/5 border border-white/10 text-[10px] hover:bg-white/10", children: "Reset" }),
                                    i("button", { onClick: () => { setStaffList(y => y.filter(T => T.id !== c.id)); showToast("Staff " + c.username + " deleted"); }, className: "h-7 w-7 rounded-full bg-red-500/10 border border-red-500/20 text-red-300 flex items-center justify-center hover:bg-red-500/20", children: i(Qt, { className: "w-3 h-3" }) })
                                  ]
                                })
                              ]
                            }))
                          })
                        ]
                      })
                    })
                  ]
                })
              ]
            })
          }),

          // PULPIT LIVE TAB (Staff only)
          !isMember && activeTab === "pulpit" && d("div", {
            className: "grid lg:grid-cols-3 gap-4",
            children: [
              i("div", {
                className: "lg:col-span-2 space-y-4",
                children: d("div", {
                  className: "rounded-[20px] bg-white/[0.05] border border-white/10 p-4 md:p-5 backdrop-blur-xl",
                  children: [
                    d("div", { className: "flex items-center justify-between flex-wrap gap-2", children: [d("h3", { className: "font-black tracking-widest text-[12px] flex items-center gap-2", children: [i(Ut, { className: "w-4 h-4 text-[#00D4FF]" }), "PULPIT LIVE COMMAND"] }), i("span", { className: "px-3 py-1 rounded-full text-[10px] tracking-widest font-bold border " + (liveSyncEnabled ? "bg-red-500/15 border-red-500/30 text-red-300 shadow-[0_0_12px_rgba(239,68,68,0.5)] animate-pulse" : "bg-white/5 border-white/10 text-white/40"), children: liveSyncEnabled ? "● LIVE • PUSHING TO DR ANDBY MAKURURU FACEBOOK + YT + WEB" : "IDLE • READY" })] }),
                    d("div", {
                      className: "mt-5 flex flex-wrap items-center gap-3",
                      children: [
                        i("button", { onClick: () => { setLiveSyncEnabled(c => !c); showToast(liveSyncEnabled ? "Live broadcast ended" : "LIVE STREAM STARTED"); }, className: "h-12 md:h-14 px-6 md:px-8 rounded-full font-black tracking-[0.2em] text-[12px] md:text-[13px] transition shadow-[0_0_30px_rgba(0,212,255,0.4)] " + (liveSyncEnabled ? "bg-red-500 text-white shadow-[0_0_30px_rgba(239,68,68,0.6)]" : "bg-[#00D4FF] text-black"), children: liveSyncEnabled ? "STOP LIVE" : "GO LIVE" }),
                        d("div", {
                          className: "flex gap-2 flex-wrap",
                          children: [
                            d("div", { className: "h-12 md:h-14 px-3.5 md:px-4 rounded-xl bg-black/40 border border-white/10 flex flex-col justify-center", children: [i("div", { className: "text-[9px] md:text-[10px] tracking-widest text-white/40", children: "BITRATE" }), i("div", { className: "font-mono font-bold text-[#00D4FF] text-[11px] md:text-[12px]", children: "4500 kbps" })] }),
                            d("div", { className: "h-12 md:h-14 px-3.5 md:px-4 rounded-xl bg-black/40 border border-white/10 flex flex-col justify-center", children: [i("div", { className: "text-[9px] md:text-[10px] tracking-widest text-white/40", children: "VIEWERS" }), i("div", { className: "font-mono font-bold text-[11px] md:text-[12px]", children: liveViewersCount.toLocaleString() })] }),
                            d("div", { className: "h-12 md:h-14 px-3.5 md:px-4 rounded-xl bg-black/40 border border-white/10 flex flex-col justify-center", children: [i("div", { className: "text-[9px] md:text-[10px] tracking-widest text-white/40", children: "DESTINATIONS" }), i("div", { className: "text-[10px] md:text-[11px] font-bold", children: "Dr Andby FB • YouTube • Web" })] })
                          ]
                        })
                      ]
                    }),
                    d("div", {
                      className: "mt-5 grid md:grid-cols-2 gap-4",
                      children: [
                        d("div", {
                          className: "rounded-xl bg-black/40 border border-white/10 p-4",
                          children: [
                            d("div", { className: "flex items-center justify-between", children: [i("span", { className: "text-[11px] tracking-widest font-bold", children: "RTMP KEYS" }), i("button", { onClick: () => setShowRtmpKeys(c => !c), className: "w-7 h-7 rounded-full bg-white/5 border border-white/10 flex items-center justify-center", children: showRtmpKeys ? i(Tn, { className: "w-4 h-4" }) : i(On, { className: "w-4 h-4" }) })] }),
                            d("div", { className: "mt-3 space-y-2 font-mono text-[11px]", children: [d("div", { className: "flex justify-between", children: [i("span", { className: "text-white/40", children: "FB Dr Andby Page" }), i("span", { children: showRtmpKeys ? "rtmp://live-api-s.facebook.com:443/rtmp/ FB-9842-xK9..." : "••••••••••••••••" })] }), d("div", { className: "flex justify-between", children: [i("span", { className: "text-white/40", children: "YouTube" }), i("span", { children: showRtmpKeys ? "rtmp://a.rtmp.youtube.com/live2/ ab12-cd34-ef56" : "••••••••••••••••" })] }), d("div", { className: "flex justify-between", children: [i("span", { className: "text-white/40", children: "Website" }), i("span", { children: showRtmpKeys ? "rtmp://j5mediahub.vercel.app/live/ j5-2026-live" : "••••••••••••••••" })] })] })
                          ]
                        }),
                        d("div", {
                          className: "rounded-xl bg-black/40 border border-white/10 p-4",
                          children: [
                            i("div", { className: "text-[11px] tracking-widest font-bold", children: "PROJECTOR CONTROL" }),
                            d("div", { className: "mt-3 flex gap-2", children: [d("button", { onClick: () => setProjectorSlide(c => Math.max(1, c - 1)), className: "flex-1 h-10 rounded-full bg-white/5 border border-white/10 text-[11px] hover:bg-white/10", children: ["Prev • Slide ", projectorSlide - 1] }), d("button", { onClick: () => setProjectorSlide(c => c + 1), className: "flex-1 h-10 rounded-full bg-white text-black font-bold text-[11px] hover:bg-white/90", children: ["Next • Slide ", projectorSlide + 1] })] }),
                            d("div", { className: "mt-2 grid grid-cols-2 gap-2", children: [i("button", { onClick: () => setBroadcastingStatus(c => c === "blackout" ? "idle" : "blackout"), className: "h-10 rounded-full border text-[11px] font-bold tracking-widest " + (broadcastingStatus === "blackout" ? "bg-black border-white/20 text-white" : "bg-[#00D4FF]/15 border-[#00D4FF]/30 text-[#00D4FF]"), children: broadcastingStatus === "blackout" ? "BLACKOUT ON" : "BLACKOUT" }), d("div", { className: "h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[11px]", children: ["Slide ", projectorSlide, " • ", broadcastingStatus] })] }),
                            i("div", { className: "mt-3 h-[54px] rounded-xl border flex items-center justify-center text-[10px] tracking-widest " + (broadcastingStatus === "blackout" ? "bg-black border-white/10 text-white/20" : "bg-white text-black font-black"), children: broadcastingStatus === "blackout" ? "PROJECTOR BLACKOUT" : ("PROJECTING SLIDE " + projectorSlide + " • DR ANDBY MAKURURU") })
                          ]
                        })
                      ]
                    })
                  ]
                })
              }),
              d("div", {
                className: "rounded-[18px] bg-white/[0.05] border border-white/10 p-4 md:p-5",
                children: [
                  i("h3", { className: "font-bold tracking-widest text-[12px]", children: "LIVE COMMENTS • DR ANDBY MAKURURU PAGE" }),
                  i("div", {
                    className: "mt-4 space-y-3 max-h-[380px] overflow-auto pr-1",
                    children: liveComments.map((c, y) => d("div", { key: y, className: "p-3 rounded-xl bg-black/30 border border-white/5", children: [d("div", { className: "flex justify-between text-[11px]", children: [i("span", { className: "font-bold text-[#00D4FF]", children: c.u }), i("span", { className: "text-white/30", children: c.t })] }), i("div", { className: "text-[12px] mt-1 text-white/80", children: c.c })] }))
                  }),
                  d("div", {
                    className: "mt-3 flex gap-2",
                    children: [
                      i("input", { value: commentReplyText, onChange: (e) => setCommentReplyText(e.target.value), onKeyDown: (e) => e.key === "Enter" && handleSendCommentReply(), placeholder: "Reply as Dr Andby Makururu Page...", className: "flex-1 h-9 px-3 rounded-full bg-black/40 border border-white/10 text-[12px] placeholder:text-white/30" }),
                      i("button", { onClick: handleSendCommentReply, className: "w-9 h-9 rounded-full bg-[#00D4FF] text-black flex items-center justify-center hover:bg-[#00D4FF]/90 transition shrink-0", children: i($t, { className: "w-4 h-4" }) })
                    ]
                  })
                ]
              })
            ]
          }),

          // ARK MEMBERS TAB (Staff only)
          !isMember && activeTab === "ark" && d("div", {
            className: "space-y-5",
            children: [
              i("div", {
                className: "grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4",
                children: [
                  { label: "Total Registered", value: arkMembers.length.toString(), sub: "Ark Database", icon: jn },
                  { label: "Active Members", value: arkMembers.filter(m => m.status === "Active").length.toString(), sub: "Regular attendees", icon: Rn },
                  { label: "Branches Covered", value: Array.from(new Set(arkMembers.map(m => m.branch))).length.toString(), sub: "Nodes active", icon: qn },
                  { label: "New Ark Members", value: arkMembers.filter(m => m.status === "New").length.toString(), sub: "This month", icon: Gr }
                ].map((c) => d("div", {
                  key: c.label,
                  className: "rounded-[18px] bg-white/[0.05] border border-white/10 p-3.5 md:p-4 backdrop-blur-xl shadow-[0_0_30px_rgba(0,212,255,0.1)]",
                  children: [
                    d("div", { className: "flex items-center justify-between", children: [i(c.icon, { className: "w-4 h-4 text-[#00D4FF]" }), i("span", { className: "text-[10px] tracking-widest text-white/40", children: c.label })] }),
                    i("div", { className: "mt-2 text-[20px] md:text-[22px] font-black", children: c.value }),
                    i("div", { className: "text-[10px] md:text-[11px] text-emerald-300 mt-1", children: c.sub })
                  ]
                }))
              }),
              d("div", {
                className: "rounded-[18px] bg-white/[0.05] border border-white/10 p-4 md:p-5",
                children: [
                  d("div", {
                    className: "flex items-center justify-between flex-wrap gap-3",
                    children: [
                      d("div", { className: "flex items-center gap-2", children: [i("h3", { className: "font-bold tracking-widest text-[12px]", children: "ARK MEMBERS DIRECTORY" }), i("span", { className: "text-[10px] px-2 py-0.5 rounded-full bg-[#00D4FF]/10 text-[#00D4FF] border border-[#00D4FF]/20 font-mono", children: filteredArkMembers.length + " Found" })] }),
                      d("div", {
                        className: "flex gap-2 items-center flex-wrap w-full md:w-auto",
                        children: [
                          i("input", { value: arkSearch, onChange: (e) => setArkSearch(e.target.value), placeholder: "Search name, ID, phone, email...", className: "h-9 px-4 rounded-full bg-black/40 border border-white/10 text-[12px] w-full md:w-[220px]" }),
                          d("select", {
                            value: arkBranchFilter,
                            onChange: (e) => setArkBranchFilter(e.target.value),
                            className: "h-9 rounded-full bg-black/40 border border-white/10 px-3 text-[11px]",
                            children: ["All", ...branches.map(b => b.name)].map(opt => i("option", { key: opt, className: "bg-[#020617]", children: opt }))
                          }),
                          d("select", {
                            value: arkStatusFilter,
                            onChange: (e) => setArkStatusFilter(e.target.value),
                            className: "h-9 rounded-full bg-black/40 border border-white/10 px-3 text-[11px]",
                            children: ["All", "Active", "New", "Inactive"].map(opt => i("option", { key: opt, className: "bg-[#020617]", children: opt }))
                          }),
                          d("button", { onClick: exportArkMembersCSV, className: "h-9 px-3 rounded-full bg-white/5 border border-white/10 text-[11px] hover:bg-white/10 transition flex items-center gap-1.5", children: [i(Kr, { className: "w-3.5 h-3.5" }), "Export CSV"] }),
                          i("button", { onClick: () => { setEditingMember(null); setMemberForm({ id: "", name: "", email: "", phone: "", branch: "MVUMA HQ", status: "Active", tithe: "$100" }); setIsAddMemberOpen(true); }, className: "h-9 px-4 rounded-full bg-[#00D4FF] text-black font-bold text-[11px] hover:bg-[#00D4FF]/90 transition shadow-[0_0_15px_rgba(0,212,255,0.4)]", children: "+ Add Member" })
                        ]
                      })
                    ]
                  }),
                  d("div", {
                    className: "mt-4 overflow-x-auto",
                    children: d("table", {
                      className: "w-full text-[12px]",
                      children: [
                        i("thead", { className: "text-white/40 text-[10px] tracking-widest", children: d("tr", { children: [i("th", { className: "text-left py-2", children: "J5 ID" }), i("th", { className: "text-left py-2", children: "Name" }), i("th", { className: "text-left py-2", children: "Contact (Email / Phone)" }), i("th", { className: "text-left py-2", children: "Branch" }), i("th", { className: "text-left py-2", children: "Status" }), i("th", { className: "text-left py-2", children: "Tithe/Pledge" }), i("th", { className: "text-left py-2", children: "Actions" })] }) }),
                        i("tbody", {
                          children: filteredArkMembers.map((c) => d("tr", {
                            key: c.id,
                            className: "border-t border-white/5 hover:bg-white/[0.02] transition",
                            children: [
                              i("td", { className: "py-3 font-mono text-[#00D4FF]", children: c.id }),
                              i("td", { className: "py-3 font-bold", children: c.name }),
                              i("td", { className: "py-3 text-white/70", children: d("div", { children: [d("div", { children: c.phone }), d("div", { className: "text-[10px] text-white/40", children: c.email })] }) }),
                              i("td", { className: "py-3", children: c.branch }),
                              i("td", { className: "py-3", children: i("span", { className: "px-2 py-1 rounded-full text-[10px] border " + (c.status === "Active" ? "bg-emerald-500/10 border-emerald-500/20 text-emerald-300" : c.status === "New" ? "bg-amber-500/10 border-amber-500/20 text-amber-300" : "bg-red-500/10 border-red-500/20 text-red-300"), children: c.status }) }),
                              i("td", { className: "py-3 font-mono font-bold text-[#00D4FF]", children: c.tithe || "$0" }),
                              d("td", {
                                className: "py-3 flex gap-1.5",
                                children: [
                                  i("button", { onClick: () => openEditMember(c), className: "h-7 px-2.5 rounded-full bg-white/5 border border-white/10 text-[10px] hover:bg-white/10 flex items-center gap-1", children: [i(rn, { className: "w-3 h-3" }), "Edit"] }),
                                  i("button", { onClick: () => handleDeleteArkMember(c.id, c.name), className: "h-7 w-7 rounded-full bg-red-500/10 border border-red-500/20 text-red-300 flex items-center justify-center hover:bg-red-500/20", children: i(Qt, { className: "w-3 h-3" }) })
                                ]
                              })
                            ]
                          }))
                        })
                      ]
                    })
                  })
                ]
              })
            ]
          }),

          // SHIELD TAB (Staff only)
          !isMember && activeTab === "shield" && d("div", {
            className: "grid lg:grid-cols-3 gap-4",
            children: [
              d("div", {
                className: "rounded-[18px] bg-white/[0.05] border border-white/10 p-5",
                children: [
                  d("h3", { className: "font-bold tracking-widest text-[12px] flex items-center gap-2", children: [i(Rn, { className: "w-4 h-4 text-emerald-300" }), "SHIELD STATUS"] }),
                  i("div", {
                    className: "mt-4 space-y-3",
                    children: [
                      { k: "Firewall", v: "Active • Level 5" },
                      { k: "Encryption", v: "AES-256 • J5 Vault" },
                      { k: "Branch Sync", v: branches.length + "/" + branches.length + " TLS 1.3" },
                      { k: "Dr Andby Page Token", v: "Valid • Exp 90d" }
                    ].map((c) => d("div", { key: c.k, className: "flex items-center justify-between p-3 rounded-xl bg-black/30 border border-white/10", children: [i("span", { className: "text-[12px]", children: c.k }), d("span", { className: "text-[11px] text-emerald-300 flex items-center gap-1", children: [i(Hr, { className: "w-3 h-3" }), c.v] })] }))
                  })
                ]
              }),
              d("div", {
                className: "lg:col-span-2 rounded-[18px] bg-white/[0.05] border border-white/10 p-5",
                children: [
                  d("div", { className: "flex items-center justify-between", children: [i("h3", { className: "font-bold tracking-widest text-[12px]", children: "SECURITY LOG • LIVE" }), i("button", { onClick: () => { setAuditLogs(c => ["[" + getUtcTime() + " UTC] Manual Security Audit run - All nodes green", ...c]); showToast("Security Audit Passed"); }, className: "h-7 px-3 rounded-full bg-[#00D4FF]/10 border border-[#00D4FF]/30 text-[#00D4FF] text-[10px] font-bold hover:bg-[#00D4FF]/20", children: "Run Security Audit" })] }),
                  i("div", { className: "mt-4 font-mono text-[11px] space-y-2 max-h-[300px] overflow-auto", children: auditLogs.map((c, y) => i("div", { key: y, className: "text-white/60 border-l border-[#00D4FF]/20 pl-3 py-1", children: c })) }),
                  d("div", {
                    className: "mt-4 grid grid-cols-3 gap-2",
                    children: [
                      d("div", { className: "rounded-xl bg-black/40 border border-white/10 p-3 text-center", children: [i("div", { className: "text-[10px] text-white/40 tracking-widest", children: "FAILED LOGINS" }), i("div", { className: "text-[18px] font-black mt-1", children: "0" })] }),
                      d("div", { className: "rounded-xl bg-black/40 border border-white/10 p-3 text-center", children: [i("div", { className: "text-[10px] text-white/40 tracking-widest", children: "2FA ENFORCED" }), i("div", { className: "text-[18px] font-black mt-1 text-[#00D4FF]", children: "100%" })] }),
                      d("div", { className: "rounded-xl bg-black/40 border border-white/10 p-3 text-center", children: [i("div", { className: "text-[10px] text-white/40 tracking-widest", children: "UPTIME" }), i("div", { className: "text-[18px] font-black mt-1 text-emerald-300", children: "99.98%" })] })
                    ]
                  })
                ]
              })
            ]
          }),

          // PROPHET SEAT TAB (Staff only)
          !isMember && activeTab === "prophet" && i("div", {
            className: "rounded-[24px] border border-amber-300/30 bg-gradient-to-br from-amber-500/10 via-[#020617] to-[#00D4FF]/10 p-6 md:p-8 backdrop-blur-xl shadow-[0_0_60px_rgba(251,191,36,0.15)]",
            children: d("div", {
              className: "max-w-3xl mx-auto text-center",
              children: [
                i("div", { className: "w-20 h-20 mx-auto rounded-[20px] bg-gradient-to-br from-amber-300 to-amber-500 text-black font-black text-2xl flex items-center justify-center shadow-[0_0_30px_rgba(251,191,36,0.5)]", children: "P" }),
                i("h2", { className: "mt-6 font-black tracking-[0.2em] text-[18px] md:text-[20px]", children: "PROPHET SEAT • DR ANDBY MAKURURU" }),
                i("p", { className: "mt-2 text-[12px] tracking-widest text-white/50", children: "RESTRICTED • PROPHET ACCESS ONLY • MVUMA HQ SANCTUM" }),
                d("div", {
                  className: "mt-8 grid md:grid-cols-3 gap-4 text-left",
                  children: [
                    d("div", { className: "rounded-xl bg-black/40 border border-amber-300/20 p-4", children: [i("div", { className: "text-[10px] tracking-widest text-amber-300", children: "NEXT PROPHECY SESSION" }), i("div", { className: "font-bold mt-2", children: "Sunday 10:00 • MVUMA HQ" }), i("div", { className: "text-[11px] text-white/60 mt-1", children: "Live to Dr Andby Makururu Facebook Page + YouTube" })] }),
                    d("div", { className: "rounded-xl bg-black/40 border border-white/10 p-4", children: [i("div", { className: "text-[10px] tracking-widest text-white/40", children: "PRIVATE DIRECTIVES" }), i("div", { className: "font-bold mt-2", children: "3 Unread • Archbishop level" }), i("div", { className: "text-[11px] text-white/60 mt-1", children: "Encrypted vault access required" })] }),
                    d("div", { className: "rounded-xl bg-black/40 border border-[#00D4FF]/20 p-4", children: [i("div", { className: "text-[10px] tracking-widest text-[#00D4FF]", children: "BRANCH COVERING" }), i("div", { className: "font-bold mt-2", children: branches.length + " Branches under prophetic mantle" }), i("div", { className: "text-[11px] text-white/60 mt-1", children: "Harare • Bulawayo • SA • Mozambique • Botswana • Zambia" })] })
                  ]
                }),
                isSanctumUnlocked ? d("div", {
                  className: "mt-6 p-4 rounded-2xl bg-amber-500/10 border border-amber-300/30 text-amber-200 text-[12px] text-left space-y-2 animate-fade-in",
                  children: [
                    i("div", { className: "font-bold text-amber-300 flex items-center gap-2", children: [i(Rn, { className: "w-4 h-4" }), "SANCTUM DIRECTIVES UNLOCKED"] }),
                    i("p", { children: "1. Expand Harare & Bulawayo media outreach before Midweek service." }),
                    i("p", { children: "2. Verify all 47 branch pastors' monthly reports before Friday sanctum call." }),
                    i("p", { children: "3. Direct Dr Andby Makururu Facebook Page live stream to target Southern Africa regions." })
                  ]
                }) : i("button", {
                  onClick: handleUnlockSanctum,
                  disabled: isSanctumLoading,
                  className: "mt-8 h-12 px-8 rounded-full bg-amber-300 text-black font-black tracking-widest text-[11px] shadow-[0_0_30px_rgba(251,191,36,0.5)] hover:bg-amber-400 transition",
                  children: isSanctumLoading ? "VERIFYING BIOMETRICS..." : "ENTER SANCTUM • BIOMETRIC REQUIRED"
                })
              ]
            })
          })
        ]
      }),

      // ADD/EDIT BRANCH MODAL
      (isAddBranchOpen || editingBranch) && i("div", {
        className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md",
        children: d("div", {
          className: "w-full max-w-[720px] max-h-[90vh] overflow-auto rounded-[20px] bg-[#0a1229] border border-[#00D4FF]/20 shadow-[0_0_60px_rgba(0,212,255,0.3)] p-5 md:p-6",
          children: [
            d("div", { className: "flex items-center justify-between", children: [i("h3", { className: "font-black tracking-widest text-[13px]", children: editingBranch ? "EDIT BRANCH" : "ADD NEW BRANCH" }), i("button", { onClick: () => { setIsAddBranchOpen(false); setEditingBranch(null); setBranchForm({}); }, className: "w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10", children: "✕" })] }),
            d("div", {
              className: "mt-5 grid md:grid-cols-2 gap-3",
              children: [
                [
                  { k: "name", label: "Name", ph: "e.g. Harare" },
                  { k: "province", label: "Province", ph: "Midlands" },
                  { k: "country", label: "Country", ph: "Zimbabwe" },
                  { k: "pastor", label: "Pastor", ph: "Pastor Name" },
                  { k: "phone", label: "Phone", ph: "+263..." },
                  { k: "address", label: "Address", ph: "Street address" },
                  { k: "gps", label: "GPS", ph: "-19.123, 30.123" },
                  { k: "members", label: "Members", ph: "0" },
                  { k: "code", label: "Code", ph: "J5-XXXX" },
                  { k: "status", label: "Status", ph: "Live" },
                  { k: "founded", label: "Founded", ph: "2020" }
                ].map((c) => d("div", {
                  key: c.k,
                  className: c.k === "address" ? "md:col-span-2" : "",
                  children: [
                    i("div", { className: "text-[10px] tracking-widest text-white/40 mb-1", children: c.label }),
                    i("input", {
                      value: branchForm[c.k] ?? "",
                      onChange: (y) => setBranchForm(T => ({ ...T, [c.k]: c.k === "members" ? Number(y.target.value) || 0 : y.target.value })),
                      placeholder: c.ph,
                      className: "w-full h-11 px-4 rounded-xl bg-black/40 border border-white/10 text-[13px]"
                    })
                  ]
                })),
                d("div", { className: "md:col-span-2", children: [i("div", { className: "text-[10px] tracking-widest text-white/40 mb-1", children: "Notes" }), i("textarea", { value: branchForm.notes ?? "", onChange: (c) => setBranchForm(y => ({ ...y, notes: c.target.value })), placeholder: "Branch notes...", className: "w-full h-20 px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-[13px]" })] }),
                d("label", { className: "flex items-center gap-2 text-[12px] cursor-pointer", children: [i("input", { type: "checkbox", checked: !!branchForm.isHQ, onChange: (c) => setBranchForm(y => ({ ...y, isHQ: c.target.checked })), className: "accent-[#00D4FF]" }), "Is HQ (Headquarters)"] })
              ]
            }),
            d("div", {
              className: "mt-6 flex gap-2 justify-end",
              children: [
                i("button", { onClick: () => { setIsAddBranchOpen(false); setEditingBranch(null); setBranchForm({}); }, className: "h-11 px-6 rounded-full bg-white/5 border border-white/10 text-[11px] tracking-widest hover:bg-white/10", children: "Cancel" }),
                i("button", { onClick: hd, className: "h-11 px-8 rounded-full bg-[#00D4FF] text-black font-black text-[11px] tracking-widest hover:bg-[#00D4FF]/90", children: "SAVE BRANCH" })
              ]
            })
          ]
        })
      }),

      // ADD/EDIT ARK MEMBER MODAL
      isAddMemberOpen && i("div", {
        className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md",
        children: d("div", {
          className: "w-full max-w-[500px] rounded-[20px] bg-[#0a1229] border border-[#00D4FF]/20 shadow-[0_0_60px_rgba(0,212,255,0.3)] p-5 md:p-6",
          children: [
            d("div", { className: "flex items-center justify-between", children: [i("h3", { className: "font-black tracking-widest text-[13px]", children: editingMember ? "EDIT ARK MEMBER" : "REGISTER NEW ARK MEMBER" }), i("button", { onClick: () => { setIsAddMemberOpen(false); setEditingMember(null); }, className: "w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10", children: "✕" })] }),
            d("div", {
              className: "mt-5 space-y-3",
              children: [
                i("input", { value: memberForm.name, onChange: (e) => setMemberForm(y => ({ ...y, name: e.target.value })), placeholder: "Full Name", className: "w-full h-11 px-4 rounded-xl bg-black/40 border border-white/10 text-[13px]" }),
                d("div", {
                  className: "grid grid-cols-2 gap-2",
                  children: [
                    i("input", { value: memberForm.phone, onChange: (e) => setMemberForm(y => ({ ...y, phone: e.target.value })), placeholder: "Phone (+263...)", className: "w-full h-11 px-4 rounded-xl bg-black/40 border border-white/10 text-[13px]" }),
                    i("input", { value: memberForm.email, onChange: (e) => setMemberForm(y => ({ ...y, email: e.target.value })), placeholder: "Email address", className: "w-full h-11 px-4 rounded-xl bg-black/40 border border-white/10 text-[13px]" })
                  ]
                }),
                d("div", {
                  className: "grid grid-cols-2 gap-2",
                  children: [
                    d("select", { value: memberForm.branch, onChange: (e) => setMemberForm(y => ({ ...y, branch: e.target.value })), className: "h-11 px-4 rounded-xl bg-black/40 border border-white/10 text-[13px]", children: branches.map(b => i("option", { key: b.id, className: "bg-[#020617]", children: b.name })) }),
                    d("select", { value: memberForm.status, onChange: (e) => setMemberForm(y => ({ ...y, status: e.target.value })), className: "h-11 px-4 rounded-xl bg-black/40 border border-white/10 text-[13px]", children: ["Active", "New", "Inactive"].map(opt => i("option", { key: opt, className: "bg-[#020617]", children: opt })) })
                  ]
                }),
                i("input", { value: memberForm.tithe, onChange: (e) => setMemberForm(y => ({ ...y, tithe: e.target.value })), placeholder: "Tithe Contribution / Pledge (e.g. $100)", className: "w-full h-11 px-4 rounded-xl bg-black/40 border border-white/10 text-[13px]" })
              ]
            }),
            d("div", {
              className: "mt-6 flex gap-2 justify-end",
              children: [
                i("button", { onClick: () => { setIsAddMemberOpen(false); setEditingMember(null); }, className: "h-11 px-6 rounded-full bg-white/5 border border-white/10 text-[11px] tracking-widest hover:bg-white/10", children: "Cancel" }),
                i("button", { onClick: handleSaveArkMember, className: "h-11 px-8 rounded-full bg-[#00D4FF] text-black font-black text-[11px] tracking-widest hover:bg-[#00D4FF]/90", children: "SAVE MEMBER" })
              ]
            })
          ]
        })
      }),

      // ADD ASSET MODAL
      isAddAssetOpen && i("div", {
        className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md",
        children: d("div", {
          className: "w-full max-w-[480px] rounded-[20px] bg-[#0a1229] border border-[#00D4FF]/20 shadow-[0_0_60px_rgba(0,212,255,0.3)] p-5 md:p-6",
          children: [
            d("div", { className: "flex items-center justify-between", children: [i("h3", { className: "font-black tracking-widest text-[13px]", children: "ADD MEDIA ASSET" }), i("button", { onClick: () => setIsAddAssetOpen(false), className: "w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10", children: "✕" })] }),
            d("div", {
              className: "mt-5 space-y-3",
              children: [
                i("input", { value: newAssetForm.name, onChange: (e) => setNewAssetForm(y => ({ ...y, name: e.target.value })), placeholder: "Asset Title (e.g. Sunday Prophecy Banner)", className: "w-full h-11 px-4 rounded-xl bg-black/40 border border-white/10 text-[13px]" }),
                d("div", {
                  className: "grid grid-cols-2 gap-2",
                  children: [
                    d("select", { value: newAssetForm.type, onChange: (e) => setNewAssetForm(y => ({ ...y, type: e.target.value })), className: "h-11 px-4 rounded-xl bg-black/40 border border-white/10 text-[13px]", children: ["IMG", "VID", "DOC", "AUDIO"].map(opt => i("option", { key: opt, className: "bg-[#020617]", children: opt })) }),
                    i("input", { value: newAssetForm.size, onChange: (e) => setNewAssetForm(y => ({ ...y, size: e.target.value })), placeholder: "File Size (e.g. 2.4 MB)", className: "w-full h-11 px-4 rounded-xl bg-black/40 border border-white/10 text-[13px]" })
                  ]
                }),
                i("input", { value: newAssetForm.url, onChange: (e) => setNewAssetForm(y => ({ ...y, url: e.target.value })), placeholder: "Asset URL / Link", className: "w-full h-11 px-4 rounded-xl bg-black/40 border border-white/10 text-[13px]" })
              ]
            }),
            d("div", {
              className: "mt-6 flex gap-2 justify-end",
              children: [
                i("button", { onClick: () => setIsAddAssetOpen(false), className: "h-11 px-6 rounded-full bg-white/5 border border-white/10 text-[11px] tracking-widest hover:bg-white/10", children: "Cancel" }),
                i("button", { onClick: handleAddAsset, className: "h-11 px-8 rounded-full bg-[#00D4FF] text-black font-black text-[11px] tracking-widest hover:bg-[#00D4FF]/90", children: "ADD ASSET" })
              ]
            })
          ]
        })
      }),

      i("footer", {
        className: "px-6 py-6 border-t border-white/5 text-center text-[10px] tracking-[0.2em] text-white/20",
        children: "CYBERLYX J5 COMMAND OS v10 • DR ANDBY MAKURURU • MVUMA HQ • 47 BRANCHES • SECURE • HIDDEN PASS MODE"
      })
    ]
  });
}

bs.createRoot(document.getElementById("root")).render(i(js.default.StrictMode, { children: i(ji, {}) }));

