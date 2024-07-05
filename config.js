const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "254104245659";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/72d064645e1de6e96cd78.jpg" // ramadan Theme Images
global.waPresence= process.env.WAPRESENCE ||  "recording " ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "254104245659";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_10_04_07_05_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICA0NSxcbiAgICAgICAgMjUzLFxuICAgICAgICAyMTAsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjEsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjE5LFxuICAgICAgICA3MyxcbiAgICAgICAgMjAsXG4gICAgICAgIDcwLFxuICAgICAgICAxMTcsXG4gICAgICAgIDM1LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE0LFxuICAgICAgICA2OSxcbiAgICAgICAgMjA1LFxuICAgICAgICAyMTYsXG4gICAgICAgIDU2LFxuICAgICAgICAxNjgsXG4gICAgICAgIDI4LFxuICAgICAgICAyNSxcbiAgICAgICAgMjQyLFxuICAgICAgICA5OSxcbiAgICAgICAgMzAsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNzcsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTIzLFxuICAgICAgICA2OSxcbiAgICAgICAgMjUxLFxuICAgICAgICA3OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDcsXG4gICAgICAgIDY5LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTU5LFxuICAgICAgICAyNDcsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTY3LFxuICAgICAgICAyNTQsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTM0LFxuICAgICAgICAxNjEsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjYsXG4gICAgICAgIDc1LFxuICAgICAgICAyNDMsXG4gICAgICAgIDExLFxuICAgICAgICAyMyxcbiAgICAgICAgNTYsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjAyLFxuICAgICAgICAxMCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMTEsXG4gICAgICAgIDg5LFxuICAgICAgICA5OCxcbiAgICAgICAgMTgzLFxuICAgICAgICA3MCxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMjIsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0LFxuICAgICAgICA2NCxcbiAgICAgICAgNTksXG4gICAgICAgIDExMSxcbiAgICAgICAgMTgyLFxuICAgICAgICAzNixcbiAgICAgICAgMjI1LFxuICAgICAgICAyMTIsXG4gICAgICAgIDYzLFxuICAgICAgICAyMixcbiAgICAgICAgMjIwLFxuICAgICAgICAxNSxcbiAgICAgICAgMjE4LFxuICAgICAgICA2LFxuICAgICAgICAxMixcbiAgICAgICAgNzksXG4gICAgICAgIDEyMyxcbiAgICAgICAgOTUsXG4gICAgICAgIDg5LFxuICAgICAgICAyMzIsXG4gICAgICAgIDYyLFxuICAgICAgICA2MCxcbiAgICAgICAgMTkzLFxuICAgICAgICA5OCxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjUwLFxuICAgICAgICA5OSxcbiAgICAgICAgMjExLFxuICAgICAgICAxNTAsXG4gICAgICAgIDExOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3MSxcbiAgICAgICAgMjIyLFxuICAgICAgICAyMTAsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTQyLFxuICAgICAgICAxOTEsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyOSxcbiAgICAgICAgMjYsXG4gICAgICAgIDc0LFxuICAgICAgICAyMDgsXG4gICAgICAgIDI3LFxuICAgICAgICA5NixcbiAgICAgICAgMTkyLFxuICAgICAgICAxNTEsXG4gICAgICAgIDIxLFxuICAgICAgICAyMjQsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMzAsXG4gICAgICAgIDIsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTA0LFxuICAgICAgICAxODEsXG4gICAgICAgIDIwMixcbiAgICAgICAgOTYsXG4gICAgICAgIDQsXG4gICAgICAgIDIwLFxuICAgICAgICAxMjQsXG4gICAgICAgIDkxLFxuICAgICAgICA1MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDIxOCxcbiAgICAgICAgOTMsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMzQsXG4gICAgICAgIDMyLFxuICAgICAgICAxMzksXG4gICAgICAgIDE3MCxcbiAgICAgICAgNzcsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjMsXG4gICAgICAgIDEyOSxcbiAgICAgICAgODEsXG4gICAgICAgIDg5LFxuICAgICAgICAxNjUsXG4gICAgICAgIDQxLFxuICAgICAgICA5OCxcbiAgICAgICAgNTIsXG4gICAgICAgIDEzOCxcbiAgICAgICAgODUsXG4gICAgICAgIDY2LFxuICAgICAgICA0MyxcbiAgICAgICAgMTM5LFxuICAgICAgICAxODgsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNjEsXG4gICAgICAgIDIzMixcbiAgICAgICAgNTYsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTQzLFxuICAgICAgICA4OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDUsXG4gICAgICAgIDcxLFxuICAgICAgICAyNDcsXG4gICAgICAgIDEwLFxuICAgICAgICAyNDgsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMzcsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjA0LFxuICAgICAgICAyMTMsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTI4LFxuICAgICAgICA0OSxcbiAgICAgICAgMjgsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNjMsXG4gICAgICAgIDkxLFxuICAgICAgICAyNDgsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMDcsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTIsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjE0LFxuICAgICAgICAxOTAsXG4gICAgICAgIDIyLFxuICAgICAgICA4M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxMDlcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjQsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNTYsXG4gICAgICAgIDExMSxcbiAgICAgICAgNjIsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTYwLFxuICAgICAgICAyMDQsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMCxcbiAgICAgICAgMTU2LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE1LFxuICAgICAgICA3NixcbiAgICAgICAgMTczLFxuICAgICAgICA3NixcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNDAsXG4gICAgICAgIDM3LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjQ3LFxuICAgICAgICAxOTEsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNjgsXG4gICAgICAgIDkzLFxuICAgICAgICAxNzAsXG4gICAgICAgIDIzNixcbiAgICAgICAgNjcsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTU1LFxuICAgICAgICAyMDcsXG4gICAgICAgIDMxLFxuICAgICAgICAyMjEsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjIxLFxuICAgICAgICAxNjUsXG4gICAgICAgIDY0LFxuICAgICAgICAxNzYsXG4gICAgICAgIDU2LFxuICAgICAgICAyMDMsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjMzLFxuICAgICAgICAyNDUsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTg0LFxuICAgICAgICAxODEsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMzcsXG4gICAgICAgIDMxLFxuICAgICAgICA1NixcbiAgICAgICAgNjcsXG4gICAgICAgIDEwMixcbiAgICAgICAgMzAsXG4gICAgICAgIDkwLFxuICAgICAgICAzOCxcbiAgICAgICAgMTg0LFxuICAgICAgICA1NCxcbiAgICAgICAgNzgsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjE5LFxuICAgICAgICA1NCxcbiAgICAgICAgMTRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEzNSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJxSVN3Yk40MENpZE01aDhCcGVNYnJFQklYRE0xbE5jRzMvaW90UjBwQ21FPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJMekIyZlpBdFJGbUNkNXllZmFGODR3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjJiNmMwYzVlLWRjZDctNDExYi1iZjA2LWVlOTExZmMyYmUwNVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA1NixcbiAgICAgIDQ1LFxuICAgICAgMjEsXG4gICAgICA4NixcbiAgICAgIDIwOSxcbiAgICAgIDg0LFxuICAgICAgNDUsXG4gICAgICAxNDAsXG4gICAgICAxNTIsXG4gICAgICAxNTQsXG4gICAgICAyMzMsXG4gICAgICAyMTYsXG4gICAgICA5MixcbiAgICAgIDczLFxuICAgICAgMjM5LFxuICAgICAgNDQsXG4gICAgICAyMTQsXG4gICAgICA1MCxcbiAgICAgIDEzMyxcbiAgICAgIDI5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE2NyxcbiAgICAgIDE2MyxcbiAgICAgIDIzOCxcbiAgICAgIDM1LFxuICAgICAgMjksXG4gICAgICAxODAsXG4gICAgICAyMDQsXG4gICAgICAxNTQsXG4gICAgICAxMTgsXG4gICAgICAyNTQsXG4gICAgICAxNSxcbiAgICAgIDIyOCxcbiAgICAgIDIyNSxcbiAgICAgIDEyNSxcbiAgICAgIDE1MixcbiAgICAgIDg0LFxuICAgICAgMjMzLFxuICAgICAgOTIsXG4gICAgICAxMjIsXG4gICAgICAxNjdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiSlpNSjlQMUhcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1NDEwNDI0NTY1OTo3NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjE5NzU2NzMyOTA3NzIyOjc1QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0lHRXA4OENFTEdLbjdRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiUFJsRUhTU3J6eVU5RzZkQlFTR1BBVXY1NXZialNBWWN2TjZYUFAzcnJDaz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJUTXFrTEh0SHVvK2J3SG93endRRkZyRGxGd0w4TExxNnoxMGR6S3dXeU9IQ2ZqQjFYdmlXUEEyZnFrdnZEa2l6OEpiN3dVRjNKNlI3UzlsZlh1UTJEdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJXdkV6MXNBSGswcVV0MXQ3TWxMc3NkNEZwTk5ZeUhVenR1dkJXdVNtWnowcmRzOU5JcUh0VzVka1QrL2lWbGs2ZWdMbmovQVBuNExPalJxNkJQTnRDQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTQxMDQyNDU2NTk6NzVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMSxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgNixcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICA0MVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwMTczODc2LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBREVwXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFERXAuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJtK2JPT29obTBMUXgrWmVkY3lNRkJOdWV4c3dyLzFHNGd3Ny85aE9IdHhnPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjcwMzE4NTQwNSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIwMDk4MDQxNzQxXCJ9Igp9" ;


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.1",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Suhail-MD",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Giddy Tennor",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};

























global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
