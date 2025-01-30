noconst fs = require('fs-extra')
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
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"
global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3,
global.disablepm = process.env.DISABLE_PM || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "text",
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "true"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923087598338";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923087598338,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "V.1.2.8",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Suhail-MD",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",

  sessionName:process.env.SESSION_ID || "SUHAIL_08_18_01_30_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE2NixcbiAgICAgICAgNTcsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNSxcbiAgICAgICAgNjgsXG4gICAgICAgIDE3LFxuICAgICAgICA0NSxcbiAgICAgICAgMjM5LFxuICAgICAgICA5OCxcbiAgICAgICAgMTQyLFxuICAgICAgICAxNTIsXG4gICAgICAgIDE4LFxuICAgICAgICAxODUsXG4gICAgICAgIDMsXG4gICAgICAgIDExMixcbiAgICAgICAgMTI3LFxuICAgICAgICAyMzUsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTg2LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTYwLFxuICAgICAgICAyMixcbiAgICAgICAgNTgsXG4gICAgICAgIDE2NCxcbiAgICAgICAgOTEsXG4gICAgICAgIDc2LFxuICAgICAgICAxNjgsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTI3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjEzLFxuICAgICAgICAxOTUsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTcxLFxuICAgICAgICAxNTgsXG4gICAgICAgIDI0NCxcbiAgICAgICAgOTQsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjMwLFxuICAgICAgICA2OCxcbiAgICAgICAgMTA2LFxuICAgICAgICAzLFxuICAgICAgICAxMjgsXG4gICAgICAgIDI1LFxuICAgICAgICAxNTEsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMzYsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNDAsXG4gICAgICAgIDk4LFxuICAgICAgICA3NCxcbiAgICAgICAgMTE3LFxuICAgICAgICAyNDAsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTYyLFxuICAgICAgICAxNzAsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjcsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTE0LFxuICAgICAgICAzMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDgyLFxuICAgICAgICA4NyxcbiAgICAgICAgMixcbiAgICAgICAgMjM2LFxuICAgICAgICAxMDUsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMzQsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjQyLFxuICAgICAgICA5OSxcbiAgICAgICAgMjE0LFxuICAgICAgICAxODksXG4gICAgICAgIDk4LFxuICAgICAgICA1NyxcbiAgICAgICAgMTczLFxuICAgICAgICAxOTgsXG4gICAgICAgIDQzLFxuICAgICAgICAyMDQsXG4gICAgICAgIDc1LFxuICAgICAgICA0MyxcbiAgICAgICAgMTYzLFxuICAgICAgICAyMjEsXG4gICAgICAgIDg4LFxuICAgICAgICAxMzMsXG4gICAgICAgIDI1LFxuICAgICAgICA5MixcbiAgICAgICAgNDksXG4gICAgICAgIDksXG4gICAgICAgIDE2NixcbiAgICAgICAgOTFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDQ3LFxuICAgICAgICA0NCxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMzgsXG4gICAgICAgIDc4LFxuICAgICAgICAyMzQsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTY0LFxuICAgICAgICA4LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMzcsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNzcsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTg3LFxuICAgICAgICAxNTksXG4gICAgICAgIDg5LFxuICAgICAgICAyNDYsXG4gICAgICAgIDUzLFxuICAgICAgICAyNDgsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTQsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNzksXG4gICAgICAgIDE1MixcbiAgICAgICAgNTZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk2LFxuICAgICAgICAxOTksXG4gICAgICAgIDE2MixcbiAgICAgICAgMjE4LFxuICAgICAgICA3NSxcbiAgICAgICAgMTIsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNTUsXG4gICAgICAgIDExLFxuICAgICAgICA4MixcbiAgICAgICAgMTU5LFxuICAgICAgICAyMTYsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjI3LFxuICAgICAgICAxNjgsXG4gICAgICAgIDg5LFxuICAgICAgICAyNDIsXG4gICAgICAgIDUxLFxuICAgICAgICA0OSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxODgsXG4gICAgICAgIDEyMCxcbiAgICAgICAgODksXG4gICAgICAgIDExLFxuICAgICAgICA1NyxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxNTIsXG4gICAgICAgIDY2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTU3LFxuICAgICAgICA1LFxuICAgICAgICAxMTYsXG4gICAgICAgIDMwLFxuICAgICAgICA0MSxcbiAgICAgICAgMixcbiAgICAgICAgMTc2LFxuICAgICAgICA2MSxcbiAgICAgICAgMTk2LFxuICAgICAgICAyNTAsXG4gICAgICAgIDExLFxuICAgICAgICAxNDUsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMDEsXG4gICAgICAgIDExMixcbiAgICAgICAgODQsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMDYsXG4gICAgICAgIDcsXG4gICAgICAgIDIxLFxuICAgICAgICA0NSxcbiAgICAgICAgMTg3LFxuICAgICAgICA5OCxcbiAgICAgICAgMTY2LFxuICAgICAgICAyMjUsXG4gICAgICAgIDEyLFxuICAgICAgICAyMzAsXG4gICAgICAgIDIwNixcbiAgICAgICAgOTIsXG4gICAgICAgIDc4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDgwLFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAzNSxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgNzdcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAzMixcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMzJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3MyxcbiAgICAgICAgNDAsXG4gICAgICAgIDIwLFxuICAgICAgICAyMyxcbiAgICAgICAgMjE3LFxuICAgICAgICAxODIsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNzcsXG4gICAgICAgIDkyLFxuICAgICAgICAxNixcbiAgICAgICAgMTM2LFxuICAgICAgICAxNDAsXG4gICAgICAgIDEyLFxuICAgICAgICA2OCxcbiAgICAgICAgMTAsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjM4LFxuICAgICAgICA3OCxcbiAgICAgICAgMTcxLFxuICAgICAgICAxMDIsXG4gICAgICAgIDgyLFxuICAgICAgICAxNTgsXG4gICAgICAgIDY5LFxuICAgICAgICAyNTAsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjIsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMzMsXG4gICAgICAgIDcxLFxuICAgICAgICA0NSxcbiAgICAgICAgNzAsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMDEsXG4gICAgICAgIDAsXG4gICAgICAgIDIyLFxuICAgICAgICAxNDgsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjEsXG4gICAgICAgIDc1LFxuICAgICAgICAyOSxcbiAgICAgICAgMTY1LFxuICAgICAgICAxMjYsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTY0LFxuICAgICAgICAzOSxcbiAgICAgICAgNDIsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTA5LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTgxLFxuICAgICAgICAxMTYsXG4gICAgICAgIDk0LFxuICAgICAgICAzMixcbiAgICAgICAgMTkzLFxuICAgICAgICAxNjcsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjE0LFxuICAgICAgICA5XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJ6OENaNldkNklTMlk0OTF2OXNDSHZSM3BzdERCd1lSVUlHU0lLY3JVUC9vPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJIdkJ4d3JCUVNyaUkyTUdIWWlvZWFBXCIsXG4gIFwicGhvbmVJZFwiOiBcImEyNjI2YjI4LWM4OGQtNDRiZS04M2UwLTQ4MTAwZDBmNTlhMlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNTIsXG4gICAgICA3MCxcbiAgICAgIDk3LFxuICAgICAgMjIyLFxuICAgICAgMTc3LFxuICAgICAgOTYsXG4gICAgICAxODYsXG4gICAgICAxMDksXG4gICAgICA3MixcbiAgICAgIDE0MSxcbiAgICAgIDEwMixcbiAgICAgIDQwLFxuICAgICAgMjAxLFxuICAgICAgMTU2LFxuICAgICAgMTM1LFxuICAgICAgMTQ0LFxuICAgICAgODEsXG4gICAgICAyNTAsXG4gICAgICA4MixcbiAgICAgIDE1MVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNDYsXG4gICAgICAxNTEsXG4gICAgICAxMjcsXG4gICAgICAyNTUsXG4gICAgICAyMDcsXG4gICAgICAxOTMsXG4gICAgICAxNjksXG4gICAgICAxMzUsXG4gICAgICAxNTYsXG4gICAgICAxNDMsXG4gICAgICAxNDgsXG4gICAgICA2NCxcbiAgICAgIDIyMixcbiAgICAgIDI5LFxuICAgICAgMTQzLFxuICAgICAgMTQwLFxuICAgICAgMjQ0LFxuICAgICAgMTE1LFxuICAgICAgMTA5LFxuICAgICAgM1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJDTEtMVE1EVFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMDg3NTk4MzM4OjkwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwic2FxbGFpbiBhc2xhbVwiLFxuICAgIFwibGlkXCI6IFwiNzQ0OTE5MTI3ODYxNDI6OTBAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTExQMXFnQ0VMZnI3THdHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJLNTl4d2M5T2xwUHZIaGorUHVwem5VQ1hpWGZBSXBRTkFsWVhRNTh4MHlVPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInA4cjRPSlhVb1I5enliWlVJc3lyTE94TzBKZ3dPMzZrcUF5NlhTT1ZhQVZSbGY3SHVGRVRsOXBvNkVtYnJ5azFtVmJoWlBUbGFMT3hQNkF1SSt4TEF3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIk95SEZVak5UcHRaenRwU2xHdlNiaDQvTE9NZHVpQzI3ZThnenVXd1FXYW1VTE1JcGc0S3JNZVZSVzFEOVh2NXpodDVWbWN5VzNDVHpVdmVCVFZPMkNnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzA4NzU5ODMzODo5MEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMzdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczODIyNTA4MixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUpmY1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSmZjLmpzb24iOiAie1wia2V5RGF0YVwiOlwiU3FkUkE2L2RIbkUvR25mcStKQlF6aWRpeXRXYTdUbDJCNStnYzlIMVVpcz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo2MjIxNzYxNzgsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTczODIyNTA4NzcwOVwifSIKfQ==",  // PUT SESSION ID HERE 
  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "private",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "SUHAIL",



};




























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
 
