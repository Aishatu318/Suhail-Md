hiconst fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349162906799";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_14_01_07_28_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAxODksXG4gICAgICAgIDEzMCxcbiAgICAgICAgNTMsXG4gICAgICAgIDE4MixcbiAgICAgICAgNjEsXG4gICAgICAgIDQ0LFxuICAgICAgICAxNzcsXG4gICAgICAgIDYsXG4gICAgICAgIDQwLFxuICAgICAgICAxNDEsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNDMsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTgxLFxuICAgICAgICAxMSxcbiAgICAgICAgMTM1LFxuICAgICAgICAyMDYsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMixcbiAgICAgICAgMjE4LFxuICAgICAgICAyNDUsXG4gICAgICAgIDIzMixcbiAgICAgICAgOTAsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMixcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMTEsXG4gICAgICAgIDI5LFxuICAgICAgICAyMzcsXG4gICAgICAgIDEyNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1NixcbiAgICAgICAgMjQ5LFxuICAgICAgICA3MSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMzEsXG4gICAgICAgIDMyLFxuICAgICAgICA3NCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAzMixcbiAgICAgICAgMzgsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMTYsXG4gICAgICAgIDU3LFxuICAgICAgICAxMTYsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjI0LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTExLFxuICAgICAgICA0LFxuICAgICAgICA3NixcbiAgICAgICAgMjQ0LFxuICAgICAgICA0NyxcbiAgICAgICAgMTU5LFxuICAgICAgICAyMjUsXG4gICAgICAgIDMxLFxuICAgICAgICA2MSxcbiAgICAgICAgMyxcbiAgICAgICAgMjM2LFxuICAgICAgICAxOTgsXG4gICAgICAgIDMyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDAsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjEsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTA3LFxuICAgICAgICA5OCxcbiAgICAgICAgNDAsXG4gICAgICAgIDg1LFxuICAgICAgICAyOSxcbiAgICAgICAgMTI2LFxuICAgICAgICA0OSxcbiAgICAgICAgMTI0LFxuICAgICAgICA3OCxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMzUsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNTYsXG4gICAgICAgIDU0LFxuICAgICAgICAyNDgsXG4gICAgICAgIDcyLFxuICAgICAgICA2MCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMixcbiAgICAgICAgODIsXG4gICAgICAgIDI1LFxuICAgICAgICAxMjJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI3LFxuICAgICAgICAxNzksXG4gICAgICAgIDQwLFxuICAgICAgICAxMDUsXG4gICAgICAgIDg2LFxuICAgICAgICA5MyxcbiAgICAgICAgNTAsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMjcsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTY1LFxuICAgICAgICA3MixcbiAgICAgICAgMjQ5LFxuICAgICAgICA3LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMDMsXG4gICAgICAgIDY0LFxuICAgICAgICAxNSxcbiAgICAgICAgMTUxLFxuICAgICAgICAxNzUsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTcyLFxuICAgICAgICA4NixcbiAgICAgICAgMTg4LFxuICAgICAgICAxNSxcbiAgICAgICAgMTk1LFxuICAgICAgICAyMDMsXG4gICAgICAgIDEwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0OCxcbiAgICAgICAgMTYwLFxuICAgICAgICAyNDgsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjM0LFxuICAgICAgICA0OCxcbiAgICAgICAgMTA0LFxuICAgICAgICAxNCxcbiAgICAgICAgMTUsXG4gICAgICAgIDEyMixcbiAgICAgICAgMzEsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTgxLFxuICAgICAgICAyMSxcbiAgICAgICAgNDksXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTI3LFxuICAgICAgICAyMTIsXG4gICAgICAgIDUsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTgzLFxuICAgICAgICA0MCxcbiAgICAgICAgMTAxLFxuICAgICAgICAzNSxcbiAgICAgICAgMTU0LFxuICAgICAgICAyNDEsXG4gICAgICAgIDgwLFxuICAgICAgICAyOSxcbiAgICAgICAgNDMsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTMsXG4gICAgICAgIDEwN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTgsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjQyLFxuICAgICAgICAyMDIsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjE2LFxuICAgICAgICAxOTIsXG4gICAgICAgIDMwLFxuICAgICAgICAxMTIsXG4gICAgICAgIDU0LFxuICAgICAgICAyNSxcbiAgICAgICAgMSxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMSxcbiAgICAgICAgMjQsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTM3LFxuICAgICAgICAxOCxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMjAsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMDQsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTMsXG4gICAgICAgIDMyLFxuICAgICAgICAxNCxcbiAgICAgICAgMjIxLFxuICAgICAgICAxODIsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTk2LFxuICAgICAgICA4M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTAxXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDkxLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDksXG4gICAgICAgICAgN1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ5LFxuICAgICAgICAyMTksXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMDQsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTkxLFxuICAgICAgICA5OSxcbiAgICAgICAgMTMzLFxuICAgICAgICA5MSxcbiAgICAgICAgMTU2LFxuICAgICAgICA5LFxuICAgICAgICAxNjAsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTYyLFxuICAgICAgICAyNyxcbiAgICAgICAgMyxcbiAgICAgICAgNDYsXG4gICAgICAgIDUsXG4gICAgICAgIDYwLFxuICAgICAgICAxMDMsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMDUsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMDgsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMzEsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjI1LFxuICAgICAgICAxNjYsXG4gICAgICAgIDExMixcbiAgICAgICAgMTA1LFxuICAgICAgICAxMzQsXG4gICAgICAgIDMxLFxuICAgICAgICAxNTIsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNCxcbiAgICAgICAgMjE2LFxuICAgICAgICA5NixcbiAgICAgICAgNDgsXG4gICAgICAgIDg1LFxuICAgICAgICAxNTUsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjEyLFxuICAgICAgICAzNSxcbiAgICAgICAgMTIyLFxuICAgICAgICA1MSxcbiAgICAgICAgMjA5LFxuICAgICAgICA4OSxcbiAgICAgICAgOTYsXG4gICAgICAgIDExMixcbiAgICAgICAgMTgzLFxuICAgICAgICAzMSxcbiAgICAgICAgMjA2LFxuICAgICAgICAxNTcsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNzQsXG4gICAgICAgIDEyMixcbiAgICAgICAgODIsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTM5LFxuICAgICAgICAxMjhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDY3LFxuICBcImFkdlNlY3JldEtleVwiOiBcIlVZOEVDdklneE9MY01MSWc4YTlzZEpDeFcxQTRFY09mRG1RcTI5ZmR4OE09XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInBfWVEzbUp2VHVxZ3AtSlo2U256dmdcIixcbiAgXCJwaG9uZUlkXCI6IFwiNTIxNjg1YmItZGE0Mi00MWY3LWJmMGMtMTNmOWFlZGY5Yjc2XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE4MixcbiAgICAgIDQzLFxuICAgICAgMjA3LFxuICAgICAgMjI4LFxuICAgICAgMjE2LFxuICAgICAgMTc4LFxuICAgICAgNjQsXG4gICAgICAyMzMsXG4gICAgICAxODEsXG4gICAgICA1OCxcbiAgICAgIDEsXG4gICAgICAxOTYsXG4gICAgICAyMTMsXG4gICAgICAxNzAsXG4gICAgICA1NSxcbiAgICAgIDE5MSxcbiAgICAgIDIxMCxcbiAgICAgIDExMCxcbiAgICAgIDc2LFxuICAgICAgMTU4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIzNixcbiAgICAgIDIyOCxcbiAgICAgIDI1MSxcbiAgICAgIDgwLFxuICAgICAgNDksXG4gICAgICA5MixcbiAgICAgIDI0OCxcbiAgICAgIDExMyxcbiAgICAgIDQ5LFxuICAgICAgMTU3LFxuICAgICAgMTAsXG4gICAgICA2NCxcbiAgICAgIDE5MixcbiAgICAgIDEyNyxcbiAgICAgIDExMCxcbiAgICAgIDExNyxcbiAgICAgIDQ2LFxuICAgICAgMTgyLFxuICAgICAgMTcwLFxuICAgICAgMjMzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkpXUTVCWUo3XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MTYyOTA2Nzk5OjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjEwMjk0NjU1NzcxNDUzOToxQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ01xSzg4WUZFS0dlbWJVR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiVFNpYWxFSVMrc1pybWRUUFFYakdLdFo4WGo5Y1c5ZDVtTEEyd0xJeGJHMD1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJiRWhpNlhZUWp5NjNkbmtDUmRUTVVTZ05SQkVGMHBGeURHM09TMjc4bGpyOTNhR25IY2IxTlYrUWlVTlJQT3o1ZVh5VG5HTFloTVdDZzJCd1EwRFRDdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJ4RU04L3djcGxFTWp4OUFUQ05OUjFjVjBMQ0VDY0xmZEgzMGZhZWNKcVhjOHk5UW1SQWdlZGQrbmFsMHVtZFNDc2Z5NWlBbEZYR2grMWpJUVVhbGVnQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MTYyOTA2Nzk5OjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICA5MixcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTA5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjIxNzUyNzJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















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
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
