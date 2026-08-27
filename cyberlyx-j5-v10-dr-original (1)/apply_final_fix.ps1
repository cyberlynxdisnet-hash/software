$c = [System.IO.File]::ReadAllText('Cyberlyx-J5-V10-Dr.html')

$c = $c.Replace('ENTER SANCTUM • BIOMETRIC REQUIRED"' + "`r`n" + '                })' + "`r`n" + '              ]' + "`r`n" + '            })' + "`r`n" + '          )', 'ENTER SANCTUM • BIOMETRIC REQUIRED"' + "`r`n" + '                })' + "`r`n" + '              ]' + "`r`n" + '            })' + "`r`n" + '          })')
$c = $c.Replace('ENTER SANCTUM • BIOMETRIC REQUIRED"' + "`n" + '                })' + "`n" + '              ]' + "`n" + '            })' + "`n" + '          )', 'ENTER SANCTUM • BIOMETRIC REQUIRED"' + "`n" + '                })' + "`n" + '              ]' + "`n" + '            })' + "`n" + '          })')

$c = $c.Replace('            })' + "`r`n" + '          // PULPIT LIVE TAB', '            })' + "`r`n" + '          }),' + "`r`n" + '          // PULPIT LIVE TAB')
$c = $c.Replace('            })' + "`n" + '          // PULPIT LIVE TAB', '            })' + "`n" + '          }),' + "`n" + '          // PULPIT LIVE TAB')

[System.IO.File]::WriteAllText('Cyberlyx-J5-V10-Dr.html', $c, [System.Text.Encoding]::UTF8)
Write-Host "Cyberlyx-J5-V10-Dr.html updated cleanly!"
