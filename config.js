//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "davidcyril209@gmail.com";
global.location = "Abuja, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/Queen_Anita-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/17c8ba84a7761eed633f6.jpg";
global.devs = "https://t.me/deecee_x";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "2349157440336";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/ba9ced500f9eca7db8acb.mp4,https://telegra.ph/file/a22200a780671e0e32383.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieUlSWnRuTHhGVXNEb2J2V0tpdXpTd3lZaUU4Q2c3eUk4MCtYRldQb1RtYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUEV2Y1RYNUVYN3o3QzNvako5VTN5allvVzhCOWwyZGl5SUduWG1JQW5pND0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIrRGJMYW4wTEhJaWtYZFFTSWpPWlNQZ3BnQWFrSXdDSVdjZC93NEYxYzNzPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJiN2dvRnZvRzVvcjhzN25naUIvdmhBeWN4dWJnWlZNb0l2a3NOWEFzc1QwPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkFPdHVjZmNtRHNxNTFBMmxzakM3R1hxZm1qYzJsVmNHYlpuZlJ2QklBVVk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjErZXBQMEtXM1E3K0p2ZDhRS1RJcUdYNDhjbk5iczd1eUhMeElyZER6eFk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYUIyUzJpUU8xMzVxWXM0SlVOaERYV29MUEZPR2ltTERUMGFjdzZCRC8yST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUHorTThrVCtCTkFKNWc0TlI2WEZXV3EwNFZnQnlSaURkTjZ4Z3FmeldGVT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im9OSm1vR0tlc3hJYU5BVnl1ZzFhWUlMcnRvVWJQakgyRG9GT3o1cVQzQkJsMFEzUDloNDVSMG1nSStqclJKbUZUc2huZmJMMXJJRmhmQVJGRWVnOGlnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjMzLCJhZHZTZWNyZXRLZXkiOiIybWlZQnpETWhQNDM5NXdRd3dsaHJYbG8xT0ZwanpubEJWRnVhb2czbHpBPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjIzNDkxNTc0NDAzMzZAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiRkJERThGNUVBQjNERTIyNzk3OTQ2QkY1OUREQTFGMEMifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyODQ3ODQ3N30seyJrZXkiOnsicmVtb3RlSmlkIjoiMjM0OTE1NzQ0MDMzNkBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJCNTg2NTBGODQ5NjI4OTYxMjVFODcyNkFDOEVDQjFENCJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzI4NDc4NDc3fSx7ImtleSI6eyJyZW1vdGVKaWQiOiIyMzQ5MTU3NDQwMzM2QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjY2NzZCMkE0MTc0MjE2RTFENzhEMkRCMEE3NDQ0QTMyIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3Mjg0Nzg0Nzl9LHsia2V5Ijp7InJlbW90ZUppZCI6IjIzNDkxNTc0NDAzMzZAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiMTU1MUE0N0E1OEM5Qzc2MTI1NjI5QkZEMjVDMkUxMDYifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyODQ3ODQ3OX1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoieFFEOXVIeE9SUHl5elhOczBua3g0QSIsInBob25lSWQiOiI4YWZlYzQwNS1kZGFjLTQ0YjMtYTEwMS02MmFmNDczMTdjZDQiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRWpYb2tkNmhqQlRaR09nWXB1Q01DTDJxTnRNPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlZTOTgyaS9KODBnbFpRTmlNdFJxWFVTQXdKdz0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiI0R1ZCWFlNVCIsIm1lIjp7ImlkIjoiMjM0OTE1NzQ0MDMzNjoxQHMud2hhdHNhcHAubmV0IiwibmFtZSI6IlDDq3TDq3IgRMOkdmlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNKS0lrUEVFRVByNW1iZ0dHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJqVTJDUDFYcWQ0eTU4TEp3NmpKaGhheXNrWFhpZXA2UFJUb2JiWitLcXk4PSIsImFjY291bnRTaWduYXR1cmUiOiIvM3hFdmFCMUY5MjJlU1Y4aVZnY2krVCt3VzZvODhqMVIrRnhZbkFNRi8vQ1pVbXBsck12b0VWZE00TC9EcHBDTnJQNm5TTnNpZDhFN0lFVk1IU0NCUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiYkpIbzNkZll1RHgzVWx0eU5vRCt4OWJOWEZWbXk0MFhBb0wyOG93aDdoWlNTa29aZ1Y0UFAvd0Mzb0JLdmdJNGRXM05QSjdrSXh0NDJJMTk3aDNtakE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ5MTU3NDQwMzM2OjFAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCWTFOZ2o5VjZuZU11ZkN5Y09veVlZV3NySkYxNG5xZWowVTZHMjJmaXFzdiJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyODQ3ODQ3NiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFEMmQifQ=="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_ANITA-V2™`",
  author: process.env.PACK_AUTHER || "QUEEN_ANITA-V2",
  packname: process.env.PACK_NAME || "A N I T A",
  botname: process.env.BOT_NAME || "QUEEN_ANITA-V2",
  ownername: process.env.OWNER_NAME || "David Cyril",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "A N I T A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
