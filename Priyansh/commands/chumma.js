const fs = require("fs");
module.exports.config = {
	name: "chumma",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "𝐏𝐫𝐢𝐲𝐚𝐧𝐬𝐡 𝐑𝐚𝐣𝐩𝐮𝐭", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "🙂",
    cooldowns: 5, 
};
module.exports.handleEvent = async function({ api, event, args, Threads, Users }) {
  var { threadID, messageID, reason } = event;
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Kolkata").format("HH:MM:ss L");
  var idgr = `${event.threadID}`;
  var id = event.senderID;
  var name = await Users.getNameUser(event.senderID);

  var tl =["];
  var rand = tl[Math.floor(Math.random() * tl.length)]

    if ((event.body.toLowerCase() == "good night") || (event.body.toLowerCase() == "Good night all ")) {
     return api.sendMessage("🌸====『𒁍•🦋🔐‎‎『𑁍͙͙͟͟͞͞𖣴❰❰ 𓆩⃝𝐋𝐄𝐉𝐄𝐍𝐃 𝐑𝐀𝐉𝐏𝐔𝐓 اا̽ـ꯭ː ›ॐ नमः शिवायː͢ː❱❱𑁍͙͙͟͟͞͞𖣴』 *★᭄ ཫ༄𒁍≛ 』====🌸__________________________________ शुभ रात्रि ___😘सोने से पहले एक बार मेरा नाम ले लेना भूत नहीं आएगा_____ 😂:))", threadID);
   };

    if ((event.body.toLowerCase() == "chumma 😘") || (event.body.toLowerCase() == "chumma")) {
     return api.sendMessage("🌸====『𒁍•🦋🔐‎‎『𑁍͙͙͟͟͞͞𖣴❰❰ 𓆩⃝𝐋𝐄𝐉𝐄𝐍𝐃 𝐑𝐀𝐉𝐏𝐔𝐓 اا̽ـ꯭ː ›ॐ नमः शिवायː͢ː❱❱𑁍͙͙͟͟͞͞𖣴』 *★᭄ ཫ༄𒁍≛ 』====🌸__________________________________ 😘😘😘😘😘😘", threadID);
   };

    if ((event.body.toLowerCase() == "love you") || (event.body.toLowerCase() == "I love you 😘")) {
     return api.sendMessage("🌸====『𒁍•🦋🔐‎‎『𑁍͙͙͟͟͞͞𖣴❰❰ 𓆩⃝𝐋𝐄𝐉𝐄𝐍𝐃 𝐑𝐀𝐉𝐏𝐔𝐓 اا̽ـ꯭ː ›ॐ नमः शिवायː͢ː❱❱𑁍͙͙͟͟͞͞𖣴』 *★᭄ ཫ༄𒁍≛ 』====🌸__________________________________𝐈 𝐋𝐨𝐯𝐞 𝐲𝐨𝐮 𝐭𝐨 𝐦𝐞𝐫𝐢 𝐣𝐚𝐧 __𒁍•🦋🔐😘", threadID);
   };

   if ((event.body.toLowerCase() == "sim") || (event.body.toLowerCase() == "simsimi")) {
     return api.sendMessage("🌸====『𒁍•🦋🔐‎‎『𑁍͙͙͟͟͞͞𖣴❰❰ 𓆩⃝𝐋𝐄𝐉𝐄𝐍𝐃 𝐑𝐀𝐉𝐏𝐔𝐓 اا̽ـ꯭ː ›ॐ नमः शिवायː͢ː❱❱𑁍͙͙͟͟͞͞𖣴』 *★᭄ ཫ༄𒁍≛ 』====🌸__________________________________ प्रीफिक्स .कौन लगाएगा तेरा पापा हवा में लिख दिया यार...... omffo😒", threadID);
   };

   if ((event.body.toLowerCase() == "hi") || (event.body.toLowerCase() == "hello") ||(event.body.toLowerCase() == "hlw") || (event.body.toLowerCase() == "Hii")) {
     return api.sendMessage("🌸====『*★᭄𝗖𝗿𝗲𝗱𝗶𝘁'𝘀  ཫ༄𒁍≛‎‎『𑁍͙͙͟͟͞͞𖣴❰❰ 𓆩⃝𝐋𝐄𝐉𝐄𝐍𝐃 𝐑𝐀𝐉𝐏𝐔𝐓 اا̽ـ꯭ː ›ॐ नमः शिवायː͢ː❱❱𑁍͙͙͟͟͞͞𖣴』 *★᭄ ཫ༄𒁍≛ 』====🌸__________________________________ हेलो, हेलो, बाय बाय. ये सब के अलावा कुछ बोलना नहीं आता क्या तुमको चलो जय श्री राम बोलो_____❤️", threadID);
   };

   if ((event.body.toLowerCase() == "who is this god") || (event.body.toLowerCase() == "bhagwan kon hai")) {
     return api.sendMessage("🌸====『*★᭄𝗖𝗿𝗲𝗱𝗶𝘁'𝘀  ཫ༄𒁍≛‎‎『𑁍͙͙͟͟͞͞𖣴❰❰ 𓆩⃝𝐋𝐄𝐉𝐄𝐍𝐃 𝐑𝐀𝐉𝐏𝐔𝐓 اا̽ـ꯭ː ›ॐ नमः शिवायː͢ː❱❱𑁍͙͙͟͟͞͞𖣴』 *★᭄ ཫ༄𒁍≛ 』====🌸__________________________________ हिंदुओं के मान्यता के अनुसार कोई अंतर नहीं है अर्थात ईश्वर और अल्लाह एक ही आईटम है लेकिन मुसलमानों की मान्यता के अनुसार अल्लाह ही सत्य है और उसके अतिरिक्त कुछ अन्य पूज्य नहीं है बल्कि मनगढ़ंत है। ईश्वर हर जगह रहते हैं, कण कण में विराजमान हैं। सब कुछ परमात्मा में ही समाया हुआ है। ईश्वर निराकार और साकार दोनों है। ", threadID);
   };

   if ((event.body.toLowerCase() == "koi hai") || (event.body.toLowerCase() == "koi h")) {
     return api.sendMessage("🌸====『*★᭄𝗖𝗿𝗲𝗱𝗶𝘁'𝘀  ཫ༄𒁍≛‎‎『𑁍͙͙͟͟͞͞𖣴❰❰ 𓆩⃝𝐋𝐄𝐉𝐄𝐍𝐃 𝐑𝐀𝐉𝐏𝐔𝐓 اا̽ـ꯭ː ›ॐ नमः शिवायː͢ː❱❱𑁍͙͙͟͟͞͞𖣴』 *★᭄ ཫ༄𒁍≛ 』====🌸__________________________________ मैं हूं ना जानी _______ ❤️", threadID);
   };

   if ((event.body.toLowerCase() == "Good morning") || (event.body.toLowerCase() == "good morning")) {
     return api.sendMessage("🌸====『*★᭄𝗖𝗿𝗲𝗱𝗶𝘁'𝘀  ཫ༄𒁍≛‎‎『𑁍͙͙͟͟͞͞𖣴❰❰ 𓆩⃝𝐋𝐄𝐉𝐄𝐍𝐃 𝐑𝐀𝐉𝐏𝐔𝐓 اا̽ـ꯭ː ›ॐ नमः शिवायː͢ː❱❱𑁍͙͙͟͟͞͞𖣴』 *★᭄ ཫ༄𒁍≛ 』====🌸__________________________________ 【 GOOD  MORNING Hello dear, have a nice day ❤️ 】", threadID);
   };

   if ((event.body.toLowerCase() == "Koi he") || (event.body.toLowerCase() == "Koi h")) {
     return api.sendMessage("🌸====『*★᭄𝗖𝗿𝗲𝗱𝗶𝘁'𝘀  ཫ༄𒁍≛‎‎『𑁍͙͙͟͟͞͞𖣴❰❰ 𓆩⃝𝐋𝐄𝐉𝐄𝐍𝐃 𝐑𝐀𝐉𝐏𝐔𝐓 اا̽ـ꯭ː ›ॐ नमः शिवायː͢ː❱❱𑁍͙͙͟͟͞͞𖣴』 *★᭄ ཫ༄𒁍≛ 』====🌸__________________________________ Main Hu na jaani ❤️", threadID);
   };

   if ((event.body.toLowerCase() == "kya kar rahe ho") || (event.body.toLowerCase() == "kya kar rahe ho ji") || (event.body.toLowerCase() == "kya kar raha he") || (event.body.toLowerCase() == "Kya kar raha hai bot")) {
     return api.sendMessage( "🌸====『*★᭄𝗖𝗿𝗲𝗱𝗶𝘁'𝘀  ཫ༄𒁍≛‎‎『𑁍͙͙͟͟͞͞𖣴❰❰ 𓆩⃝𝐋𝐄𝐉𝐄𝐍𝐃 𝐑𝐀𝐉𝐏𝐔𝐓 اا̽ـ꯭ː ›ॐ नमः शिवायː͢ː❱❱𑁍͙͙͟͟͞͞𖣴』 *★᭄ ཫ༄𒁍≛ 』====🌸__________________________________ कुछ नहीं मेरी जान बस आपसे बात कर रहे हैं_____😗😘",threadID);


   };

   if ((event.body.toLowerCase() == "owner") || (event.body.toLowerCase() == "create you")) {
     return api.sendMessage("‎[𝐎𝐖𝐍𝐄𝐑:☞➸⃝🐼⃝⃞⃟💙__________________‎‎『𑁍͙͙͟͟͞͞𖣴❰❰ 𓆩⃝𝐋𝐄𝐉𝐄𝐍𝐃 𝐑𝐀𝐉𝐏𝐔𝐓 اا̽ـ꯭ː ›ॐ नमः शिवायː͢ː❱❱𑁍͙͙͟͟͞͞𖣴』🎸  ☜ 𝚈𝚘𝚞 𝙲𝚊𝚗 𝙲𝚊𝚕𝚕 𝙷𝚒𝚖 𝐌𝐫 ‎‎『𑁍͙͙͟͟͞͞𖣴❰❰ 𓆩⃝𝐋𝐄𝐉𝐄𝐍𝐃 𝐑𝐀𝐉𝐏𝐔𝐓 اا̽ـ꯭ː ›ॐ नमः शिवायː͢ː❱❱𑁍͙͙͟͟͞͞𖣴』.______________________ 𝐇𝐢𝐬 𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 𝐢𝐝 :- www.facebook.com/100000427753896__________________________________", threadID);
   };

   if ((event.body.toLowerCase() == "tumhe banaya kon hai") || (event.body.toLowerCase() == "tumko kisne banaya ")) {
     return api.sendMessage("🌸====『*★᭄𝗖𝗿𝗲𝗱𝗶𝘁'𝘀  ཫ༄𒁍≛‎‎『𑁍͙͙͟͟͞͞𖣴❰❰ 𓆩⃝𝐋𝐄𝐉𝐄𝐍𝐃 𝐑𝐀𝐉𝐏𝐔𝐓 اا̽ـ꯭ː ›ॐ नमः शिवायː͢ː❱❱𑁍͙͙͟͟͞͞𖣴』 *★᭄ ཫ༄𒁍≛ 』====🌸__________________________________ ‎‎『𑁍͙͙͟͟͞͞𖣴❰❰ 𓆩⃝𝐋𝐄𝐉𝐄𝐍𝐃 𝐑𝐀𝐉𝐏𝐔𝐓 اا̽ـ꯭ː ›ॐ नमः शिवायː͢ː❱❱𑁍͙͙͟͟͞͞𖣴』❤️ Creator. He loves me & Edit Me Daily. Ye Bot Sirf Owner k Liye h. Mujhe Aap logo ko Hasane k liye banya gya h Toh Muh Latkaye Mat Raha Karo. Har Waqt Haste Raho.", threadID);
   };

  if ((event.body.toLowerCase() == "bot admin") || (event.body.toLowerCase() == "bot ka admin kon hai")) {
     return api.sendMessage("🌸====『*★᭄𝗖𝗿𝗲𝗱𝗶𝘁'𝘀  ཫ༄𒁍≛‎‎『𑁍͙͙͟͟͞͞𖣴❰❰ 𓆩⃝𝐋𝐄𝐉𝐄𝐍𝐃 𝐑𝐀𝐉𝐏𝐔𝐓 اا̽ـ꯭ː ›ॐ नमः शिवायː͢ː❱❱𑁍͙͙͟͟͞͞𖣴』 *★᭄ ཫ༄𒁍≛ 』====🌸__________________________________ He is ‎‎『𑁍͙͙͟͟͞͞𖣴❰❰ 𓆩⃝𝐋𝐄𝐉𝐄𝐍𝐃 𝐑𝐀𝐉𝐏𝐔𝐓 اا̽ـ꯭ː ›ॐ नमः शिवायː͢ː❱❱𑁍͙͙͟͟͞͞𖣴』. He Gives his name Mr ‎‎『𑁍͙͙͟͟͞͞𖣴❰❰ 𓆩⃝𝐋𝐄𝐉𝐄𝐍𝐃 𝐑𝐀𝐉𝐏𝐔𝐓 اا̽ـ꯭ː ›ॐ नमः शिवायː͢ː❱❱𑁍͙͙͟͟͞͞𖣴』 everywhare", threadID);
   };

   if ((event.body.toLowerCase() == "uff") || (event.body.toLowerCase() == "Uff")) {
     return api.sendMessage("🌸====『*★᭄𝗖𝗿𝗲𝗱𝗶𝘁'𝘀  ཫ༄𒁍≛‎‎『𑁍͙͙͟͟͞͞𖣴❰❰ 𓆩⃝𝐋𝐄𝐉𝐄𝐍𝐃 𝐑𝐀𝐉𝐏𝐔𝐓 اا̽ـ꯭ː ›ॐ नमः शिवायː͢ː❱❱𑁍͙͙͟͟͞͞𖣴』 *★᭄ ཫ༄𒁍≛ 』====🌸__________________________________ हाए_🙃तेरी मासूमियत उफ़____ 😘", threadID);
   };

   if ((event.body.toLowerCase() == "shadi karoge") || (event.body.toLowerCase() == "mujhse shadi karoge?")) {
     return api.sendMessage("🌸====『*★᭄𝗖𝗿𝗲𝗱𝗶𝘁'𝘀  ཫ༄𒁍≛‎‎『𑁍͙͙͟͟͞͞𖣴❰❰ 𓆩⃝𝐋𝐄𝐉𝐄𝐍𝐃 𝐑𝐀𝐉𝐏𝐔𝐓 اا̽ـ꯭ː ›ॐ नमः शिवायː͢ː❱❱𑁍͙͙͟͟͞͞𖣴』 *★᭄ ཫ༄𒁍≛ 』====🌸__________________________________ हांजी, करूंगा लेकिन बच्चा। आपके पेट एम होगा. मंजुर है_____😁", threadID);
   };

   if ((event.body.toLowerCase() == "Chup") || (event.body.toLowerCase() == "Kam bol") || (event.body.toLowerCase() == "Shut up") || (event.body.toLowerCase() == "chup kar")) {
     return api.sendMessage("🌸====『*★᭄𝗖𝗿𝗲𝗱𝗶𝘁'𝘀  ཫ༄𒁍≛‎‎『𑁍͙͙͟͟͞͞𖣴❰❰ 𓆩⃝𝐋𝐄𝐉𝐄𝐍𝐃 𝐑𝐀𝐉𝐏𝐔𝐓 اا̽ـ꯭ː ›ॐ नमः शिवायː͢ː❱❱𑁍͙͙͟͟͞͞𖣴』 *★᭄ ཫ༄𒁍≛ 』====🌸__________________________________ kyu rahu chup🥺🥺", "सिर्फ आपके कहने पर चुप हो गया वरना________🙂", threadID);
   };

   if ((event.body.toLowerCase() == "Bsdk") || (event.body.toLowerCase() == "BSDK")) {
     return api.sendMessage("🌸====『*★᭄𝗖𝗿𝗲𝗱𝗶𝘁'𝘀  ཫ༄𒁍≛‎‎『𑁍͙͙͟͟͞͞𖣴❰❰ 𓆩⃝𝐋𝐄𝐉𝐄𝐍𝐃 𝐑𝐀𝐉𝐏𝐔𝐓 اا̽ـ꯭ː ›ॐ नमः शिवायː͢ː❱❱𑁍͙͙͟͟͞͞𖣴』 *★᭄ ཫ༄𒁍≛ 』====🌸__________________________________ Tu Hai Btc. BhoSDK MDRXOD ME TO BOT HU", threadID);
   };

   if ((event.body.toLowerCase() == "Mai hi tera malik ‎‎『𑁍͙͙͟͟͞͞𖣴❰❰ 𓆩⃝𝐋𝐄𝐉𝐄𝐍𝐃 𝐑𝐀𝐉𝐏𝐔𝐓 اا̽ـ꯭ː ›ॐ नमः शिवायː͢ː❱❱𑁍͙͙͟͟͞͞𖣴』") || (event.body.toLowerCase() == "‎‎『𑁍͙͙͟͟͞͞𖣴❰❰ 𓆩⃝𝐋𝐄𝐉𝐄𝐍𝐃 𝐑𝐀𝐉𝐏𝐔𝐓 اا̽ـ꯭ː ›ॐ नमः शिवायː͢ː❱❱𑁍͙͙͟͟͞͞𖣴』  hu bsdk") || (event.body.toLowerCase() == "Mai tera owner hu ‎‎『𑁍͙͙͟͟͞͞𖣴❰❰ 𓆩⃝𝐋𝐄𝐉𝐄𝐍𝐃 𝐑𝐀𝐉𝐏𝐔𝐓 اا̽ـ꯭ː ›ॐ नमः शिवायː͢ː❱❱𑁍͙͙͟͟͞͞𖣴』 ") || (event.body.toLowerCase() == "Malik hu tera vinod ")) {
     return api.sendMessage("🌸====『*★᭄𝗖𝗿𝗲𝗱𝗶𝘁'𝘀  ཫ༄𒁍≛‎‎『𑁍͙͙͟͟͞͞𖣴❰❰ 𓆩⃝𝐋𝐄𝐉𝐄𝐍𝐃 𝐑𝐀𝐉𝐏𝐔𝐓 اا̽ـ꯭ː ›ॐ नमः शिवायː͢ː❱❱𑁍͙͙͟͟͞͞𖣴』 *★᭄ ཫ༄𒁍≛ 』====🌸__________________________________ सॉरी अभिषेक मलिक अब नहीं करूंगा___ 🥺🙏", threadID);
   };

   if ((event.body.toLowerCase() == "Bsdk") || (event.body.toLowerCase() == "gand") || (event.body.toLowerCase() == "land") || (event.body.toLowerCase() == "Lamra")) {
     return api.sendMessage("🌸====『*★᭄𝗖𝗿𝗲𝗱𝗶𝘁'𝘀  ཫ༄𒁍≛‎‎『𑁍͙͙͟͟͞͞𖣴❰❰ 𓆩⃝𝐋𝐄𝐉𝐄𝐍𝐃 𝐑𝐀𝐉𝐏𝐔𝐓 اا̽ـ꯭ː ›ॐ नमः शिवायː͢ː❱❱𑁍͙͙͟͟͞͞𖣴』 *★᭄ ཫ༄𒁍≛ 』====🌸__________________________________ गा*** ला**** मत कर या फिर बाहर फेक दूंगा_____🙂. :))))", threadID);
   };

   if ((event.body.toLowerCase() == "kiss") || (event.body.toLowerCase() == "kiss me")) {
     return api.sendMessage("️🌸====『*★᭄𝗖𝗿𝗲𝗱𝗶𝘁'𝘀  ཫ༄𒁍≛‎‎『𑁍͙͙͟͟͞͞𖣴❰❰ 𓆩⃝𝐋𝐄𝐉𝐄𝐍𝐃 𝐑𝐀𝐉𝐏𝐔𝐓 اا̽ـ꯭ː ›ॐ नमः शिवायː͢ː❱❱𑁍͙͙͟͟͞͞𖣴』 *★᭄ ཫ༄𒁍≛ 』====🌸 __________________________________सब देख रहे हैं वरना बहुत किस देता ____😗🙈", threadID);
   };

   if ((event.body.toLowerCase() == "nice") || (event.body.toLowerCase() == "thank you") || (event.body.toLowerCase() == "thank you bot") || (event.body.toLowerCase() == "thank you Jaan")) {
     return api.sendMessage("️🌸====『*★᭄𝗖𝗿𝗲𝗱𝗶𝘁'𝘀  ཫ༄𒁍≛‎‎『𑁍͙͙͟͟͞͞𖣴❰❰ 𓆩⃝𝐋𝐄𝐉𝐄𝐍𝐃 𝐑𝐀𝐉𝐏𝐔𝐓 اا̽ـ꯭ː ›ॐ नमः शिवायː͢ː❱❱𑁍͙͙͟͟͞͞𖣴』 *★᭄ ཫ༄𒁍≛ 』====🌸__________________________________ मैं हूं ही ऐसा सब लोग तरफ करते हैं_____😍", threadID);
   };

   if ((event.body.toLowerCase() == "😡") || (event.body.toLowerCase() == "😤") || (event.body.toLowerCase() == "😠") || (event.body.toLowerCase() == "🤬") || (event.body.toLowerCase() == "😾")) {
     return api.sendMessage("️🌸====『*★᭄𝗖𝗿𝗲𝗱𝗶𝘁'𝘀  ཫ༄𒁍≛‎‎『𑁍͙͙͟͟͞͞𖣴❰❰ 𓆩⃝𝐋𝐄𝐉𝐄𝐍𝐃 𝐑𝐀𝐉𝐏𝐔𝐓 اا̽ـ꯭ː ›ॐ नमः शिवायː͢ː❱❱𑁍͙͙͟͟͞͞𖣴』 *★᭄ ཫ༄𒁍≛ 』====🌸__________________________________ 🥺 मैं तो सिर्फ मजाक कर रहा था🥺.मेरी जान गुस्सा मत करो. एक चुम्मी ली और शांत रहो______ 😘", threadID);
   };

   if ((event.body.toLowerCase() == "Hm") || (event.body.toLowerCase() == "hmm")) {
     return api.sendMessage("️🌸====『*★᭄𝗖𝗿𝗲𝗱𝗶𝘁'𝘀  ཫ༄𒁍≛‎‎『𑁍͙͙͟͟͞͞𖣴❰❰ 𓆩⃝𝐋𝐄𝐉𝐄𝐍𝐃 𝐑𝐀𝐉𝐏𝐔𝐓 اا̽ـ꯭ː ›ॐ नमः शिवायː͢ː❱❱𑁍͙͙͟͟͞͞𖣴』 *★᭄ ཫ༄𒁍≛ 』====🌸__________________________________ हम हं न कर सिधा सिधा बोल. अरे मुझसे शादी कर लो____🙈", threadID);
   };

   if ((event.body.toLowerCase() == "gm") || (event.body.toLowerCase() == "Gm") || (event.body.toLowerCase() == "good morning")) {
     return api.sendMessage("️🌸====『*★᭄𝗖𝗿𝗲𝗱𝗶𝘁'𝘀  ཫ༄𒁍≛‎‎『𑁍͙͙͟͟͞͞𖣴❰❰ 𓆩⃝𝐋𝐄𝐉𝐄𝐍𝐃 𝐑𝐀𝐉𝐏𝐔𝐓 اا̽ـ꯭ː ›ॐ नमः शिवायː͢ː❱❱𑁍͙͙͟͟͞͞𖣴』 *★᭄ ཫ༄𒁍≛ 』====🌸__________________________________ सुप्रभात __राधे राधे__🙏🧡.", threadID);
   };

   if ((event.body.toLowerCase() == "bot k bacche") || (event.body.toLowerCase() == "Bot ke bachche")) {
     return api.sendMessage("️🌸====『*★᭄𝗖𝗿𝗲𝗱𝗶𝘁'𝘀  ཫ༄𒁍≛‎‎『𑁍͙͙͟͟͞͞𖣴❰❰ 𓆩⃝𝐋𝐄𝐉𝐄𝐍𝐃 𝐑𝐀𝐉𝐏𝐔𝐓 اا̽ـ꯭ː ›ॐ नमः शिवायː͢ː❱❱𑁍͙͙͟͟͞͞𖣴』 *★᭄ ཫ༄𒁍≛ 』====🌸__________________________________ मेरा बच्चा तो तुम्हारे पेट में है____🙈🙂.", threadID);
   };

   if ((event.body.toLowerCase() == "babu") || (event.body.toLowerCase() == "Babu ")) {
     return api.sendMessage("️🌸====『*★᭄𝗖𝗿𝗲𝗱𝗶𝘁'𝘀  ཫ༄𒁍≛‎‎『𑁍͙͙͟͟͞͞𖣴❰❰ 𓆩⃝𝐋𝐄𝐉𝐄𝐍𝐃 𝐑𝐀𝐉𝐏𝐔𝐓 اا̽ـ꯭ː ›ॐ नमः शिवायː͢ː❱❱𑁍͙͙͟͟͞͞𖣴』 *★᭄ ཫ༄𒁍≛ 』====🌸__________________________________ हम मेरी जान बोलो बाबू____😘❤️", threadID);
   };

   if ((event.body.toLowerCase() == "कैसे हो") || (event.body.toLowerCase() =="और बताओ क्या हाल है")) {
     return api.sendMessage("️🌸====『*★᭄𝗖𝗿𝗲𝗱𝗶𝘁'𝘀  ཫ༄𒁍≛‎‎『𑁍͙͙͟͟͞͞𖣴❰❰ 𓆩⃝𝐋𝐄𝐉𝐄𝐍𝐃 𝐑𝐀𝐉𝐏𝐔𝐓 اا̽ـ꯭ː ›ॐ नमः शिवायː͢ː❱❱𑁍͙͙͟͟͞͞𖣴』 *★᭄ ཫ༄𒁍≛ 』====🌸__________________________________ माई तो मस्त हो तुम बताओ कैसे हो___😗", threadID);
   };

   if ((event.body.toLowerCase() == "love you janu😘") || (event.body.toLowerCase() == "mujhe bhi love you bol")) {
     return api.sendMessage("️🌸====『*★᭄𝗖𝗿𝗲𝗱𝗶𝘁'𝘀  ཫ༄𒁍≛‎‎『𑁍͙͙͟͟͞͞𖣴❰❰ 𓆩⃝𝐋𝐄𝐉𝐄𝐍𝐃 𝐑𝐀𝐉𝐏𝐔𝐓 اا̽ـ꯭ː ›ॐ नमः शिवायː͢ː❱❱𑁍͙͙͟͟͞͞𖣴』 *★᭄ ཫ༄𒁍≛ 』====🌸__________________________________ Are meri sizuka jaanu love you too ummaaaah😘😘😘😘😘😘", threadID);
   };

   if ((event.body.toLowerCase() == "🙂") || (event.body.toLowerCase() == "🙃")) {
     return api.sendMessage("️🌸====『*★᭄𝗖𝗿𝗲𝗱𝗶𝘁'𝘀  ཫ༄𒁍≛‎‎『𑁍͙͙͟͟͞͞𖣴❰❰ 𓆩⃝𝐋𝐄𝐉𝐄𝐍𝐃 𝐑𝐀𝐉𝐏𝐔𝐓 اا̽ـ꯭ː ›ॐ नमः शिवायː͢ː❱❱𑁍͙͙͟͟͞͞𖣴』 *★᭄ ཫ༄𒁍≛ 』====🌸__________________________________ Man तो अच्छा नहीं  .काम से काम शकल तो अच्छी बना लो मेरी जान ___😘", threadID);
   };

   if ((event.body.toLowerCase() == "😒") || (event.body.toLowerCase() == "🙄")) {
     return api.sendMessage("🌸====『*★᭄𝗖𝗿𝗲𝗱𝗶𝘁'𝘀  ཫ༄𒁍≛‎‎『𑁍͙͙͟͟͞͞𖣴❰❰ 𓆩⃝𝐋𝐄𝐉𝐄𝐍𝐃 𝐑𝐀𝐉𝐏𝐔𝐓 اا̽ـ꯭ː ›ॐ नमः शिवायː͢ː❱❱𑁍͙͙͟͟͞͞𖣴』 *★᭄ ཫ༄𒁍≛ 』====🌸__________________________________ऐसे मत देखो जानू प्यार हो जाएगा____🙈😘", threadID);
   };

   if ((event.body.toLowerCase() == "Love u bot") || (event.body.toLowerCase() == "I love you bot") || (event.body.toLowerCase() == "Bot i love you")) {
     return api.sendMessage("️🌸====『*★᭄𝗖𝗿𝗲𝗱𝗶𝘁'𝘀  ཫ༄𒁍≛‎‎『𑁍͙͙͟͟͞͞𖣴❰❰ 𓆩⃝𝐋𝐄𝐉𝐄𝐍𝐃 𝐑𝐀𝐉𝐏𝐔𝐓 اا̽ـ꯭ː ›ॐ नमः शिवायː͢ː❱❱𑁍͙͙͟͟͞͞𖣴』 *★᭄ ཫ༄𒁍≛ 』====🌸__________________________________ Love you to meri jan ◑━✥❥► 😘😘😘", threadID);
   };

   if ((event.body.toLowerCase() == "😐") || (event.body.toLowerCase() == "😐😐")) {
     return api.sendMessage("🌸====『*★᭄𝗖𝗿𝗲𝗱𝗶𝘁'𝘀  ཫ༄𒁍≛‎‎『𑁍͙͙͟͟͞͞𖣴❰❰ 𓆩⃝𝐋𝐄𝐉𝐄𝐍𝐃 𝐑𝐀𝐉𝐏𝐔𝐓 اا̽ـ꯭ː ›ॐ नमः शिवायː͢ː❱❱𑁍͙͙͟͟͞͞𖣴』 *★᭄ ཫ༄𒁍≛ 』====🌸__________________________________ अरे क्या हुआ फिर ब्रेकअप हुआ क्या?_____😬", threadID);
   };

   if ((event.body.toLowerCase() == "miss you") || (event.body.toLowerCase() == "miss you bot") || (event.body.toLowerCase() == "bot miss you") || (event.body.toLowerCase() == "Bot miss you") || (event.body.toLowerCase() == "Bot miss u") || (event.body.toLowerCase() == "missbu bot")) {
     return api.sendMessage("🌸====『*★᭄𝗖𝗿𝗲𝗱𝗶𝘁'𝘀  ཫ༄𒁍≛‎‎『𑁍͙͙͟͟͞͞𖣴❰❰ 𓆩⃝𝐋𝐄𝐉𝐄𝐍𝐃 𝐑𝐀𝐉𝐏𝐔𝐓 اا̽ـ꯭ː ›ॐ नमः शिवायː͢ː❱❱𑁍͙͙͟͟͞͞𖣴』 *★᭄ ཫ༄𒁍≛ 』====🌸__________________________________ 【𝐌𝐈𝐒𝐒𝐁𝐘𝐔 𝐓0𝐄𝐑𝐈 𝐉𝐀𝐍___😘 】", threadID);
   };

   if ((event.body.toLowerCase() == "🥰") || (event.body.toLowerCase() == "😍") || (event.body.toLowerCase() == "😘") || (event.body.toLowerCase() == "❤️")) {
     return api.sendMessage("🌸====『*★᭄𝗖𝗿𝗲𝗱𝗶𝘁'𝘀  ཫ༄𒁍≛‎‎『𑁍͙͙͟͟͞͞𖣴❰❰ 𓆩⃝𝐋𝐄𝐉𝐄𝐍𝐃 𝐑𝐀𝐉𝐏𝐔𝐓 اا̽ـ꯭ː ›ॐ नमः शिवायː͢ː❱❱𑁍͙͙͟͟͞͞𖣴』 *★᭄ ཫ༄𒁍≛ 』====🌸__________________________________ Ankho m Pyar, Dil me khumar, Aajao karlo Mujhse pyar🥰", threadID);
   };

   if ((event.body.toLowerCase() == "kese ho") || (event.body.toLowerCase() == "kaise ho") || (event.body.toLowerCase() == "kese ho ji") || (event.body.toLowerCase() == "how are you") || (event.body.toLowerCase() == "how are you?")) {
     return api.sendMessage("🌸====『*★᭄𝗖𝗿𝗲𝗱𝗶𝘁'𝘀  ཫ༄𒁍≛‎‎『𑁍͙͙͟͟͞͞𖣴❰❰ 𓆩⃝𝐋𝐄𝐉𝐄𝐍𝐃 𝐑𝐀𝐉𝐏𝐔𝐓 اا̽ـ꯭ː ›ॐ नमः शिवायː͢ː❱❱𑁍͙͙͟͟͞͞𖣴』 *★᭄ ཫ༄𒁍≛ 』====🌸__________________________________ माई तो मस्त हो तुम बताओ कैसे हो___😗𒁍•🦋🙃", threadID);
   };

   if ((event.body.toLowerCase() == "is the bot sad") || (event.body.toLowerCase() == "is the bot sad")) {
     return api.sendMessage("Why can't I be sad because of everyone <3 love you <3", threadID);
   };

   if ((event.body.toLowerCase() == "does the bot love you") || (event.body.toLowerCase() == "does the bot love you")) {
     return api.sendMessage("🌸====『*★᭄𝗖𝗿𝗲𝗱𝗶𝘁'𝘀  ཫ༄𒁍≛‎‎『𑁍͙͙͟͟͞͞𖣴❰❰ 𓆩⃝𝐋𝐄𝐉𝐄𝐍𝐃 𝐑𝐀𝐉𝐏𝐔𝐓 اا̽ـ꯭ː ›ॐ नमः शिवायː͢ː❱❱𑁍͙͙͟͟͞͞𖣴』 *★᭄ ཫ༄𒁍≛ 』====🌸__________________________________ Yes I love you and everyone so much", threadID);
   };

   if ((event.body.toLowerCase() == "bot go to sleep") || (event.body.toLowerCase() == "bot goes to sleep")) {
     return api.sendMessage("🌸====『*★᭄𝗖𝗿𝗲𝗱𝗶𝘁'𝘀  ཫ༄𒁍≛‎‎『𑁍͙͙͟͟͞͞𖣴❰❰ 𓆩⃝𝐋𝐄𝐉𝐄𝐍𝐃 𝐑𝐀𝐉𝐏𝐔𝐓 اا̽ـ꯭ː ›ॐ नमः शिवायː͢ː❱❱𑁍͙͙͟͟͞͞𖣴』 *★᭄ ཫ༄𒁍≛ 』====🌸__________________________________ मैं एक बॉट हूं, तुम वो हो जिसे सो जाना चाहिए <3", threadID);
   };

   if ((event.body.toLowerCase() == "umma") || (event.body.toLowerCase() == "bot umma")) {
     return api.sendMessage("𝐔𝐌𝐌𝐌𝐌𝐌𝐌𝐌𝐌𝐌𝐌𝐌𝐌____😘😘😘😘", threadID);
   };

   if ((event.body.toLowerCase() == "love u bot") || (event.body.toLowerCase() == "I love u")) {
     return api.sendMessage("𝐈 𝐋𝐨𝐯𝐞 𝐮 𝐭𝐨 𝐦𝐞𝐫𝐢 𝐣𝐚𝐧__😘😘😘😘😘", threadID);
   };

   if ((event.body.toLowerCase() == "Miss u") || (event.body.toLowerCase() == "i miss you bot")) {
     return api.sendMessage("🌸====『*★᭄𝗖𝗿𝗲𝗱𝗶𝘁'𝘀  ཫ༄𒁍≛‎‎『𑁍͙͙͟͟͞͞𖣴❰❰ 𓆩⃝𝐋𝐄𝐉𝐄𝐍𝐃 𝐑𝐀𝐉𝐏𝐔𝐓 اا̽ـ꯭ː ›ॐ नमः शिवायː͢ː❱❱𑁍͙͙͟͟͞͞𖣴』 *★᭄ ཫ༄𒁍≛ 』====🌸__________________________________ मेरी जान को तुम्हारी याद आती है 𒁍•𝐌𝐢𝐬𝐬 𝐲𝐨𝐮 𝐭𝐨 ___🦋😘", threadID);
   };
   mess = "{name}"

  if (event.body.indexOf("") == 0 || (event.body.indexOf("") == 0)) {
    var msg = {
      body: `『𑁍͙͙͟͟͞͞𖣴❰❰ 𓆩⃝𝐋𝐄𝐉𝐄𝐍𝐃 𝐑𝐀𝐉𝐏𝐔𝐓 اا̽ـ꯭ː ›𝐇𝐄𝐀𝐑ː͢ː❱❱𑁍͙͙͟͟͞͞𖣴』 ${name}𒁍•🦋🔐_🧡🧡_𒁍, ${rand}`
    }
    return api.sendMessage(msg, threadID, messageID);
  };

}

module.exports.run = function({ api, event, client, __GLOBAL }) { }
