const fs = require("fs");

module.exports.config = {
  name: "chumma",
  version: "1.0.1",
  hasPermssion: 0,
  credits: " ",
  description: "hihihihi",
  commandCategory: "no prefix",
  usages: "",
  cooldowns: 5,
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
  var { threadID, messageID } = event;

  if (event.body.indexOf("😘")==0 || event.body.indexOf("kiss")==0 || event.body.indexOf("chumma")==0 || event.body.indexOf("chumu")==0) {
    var replies = [
      "Ummmmmmaaaahhhhhh___________😘😘",
      "ले चूमा दू 😘",
    ];
    var msg = { body: replies[Math.floor(Math.random() * replies.length)], };
    api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("", event.messageID, (err) => {}, true);
  }

  if (event.body.indexOf("hug")==0 || event.body.indexOf("गले लगा")==0) {
    var replies = [
      "ले आजा लगे लगा लू मेरी जान तुझे______😘",
      "तुम्हारी बाहों में रहना चाहता हूँ________🥰",
      "तुम्हारे साथ रहना चाहता हूँ________😘",
    ];
    var msg = { body: replies[Math.floor(Math.random() * replies.length)], };
    api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("", event.messageID, (err) => {}, true);
  }

  if (event.body.indexOf("love")==0 || event.body.indexOf("i love you")==0) {
    var replies = [
      "मैं तुमसे प्यार करता हूँ बेबी_________🥰",
      "I love you too jaanu_________🥰❤️",
      "तुम मेरी जिंदगी हो___________😌",
      "तुम्हारे बिना मैं जी नहीं सकता_________🥺😌",
    ];
    var msg = { body: replies[Math.floor(Math.random() * replies.length)], };
    api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("", event.messageID, (err) => {}, true);
  }
};

  if (event.body.indexOf("🥰")==0 || event.body.indexOf("😌")==0 || event.body.indexOf("😍")==0 || event.body.indexOf("☺️")==0) {
    var replies = [
      "क्या बात है बड़ा प्यार दिखा रही हो जान आज तो______🥰😌",
    ];
    var msg = { body: replies[Math.floor(Math.random() * replies.length)], };
    api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("", event.messageID, (err) => {}, true);
  }

  if (event.body.indexOf("Jai shree ram 🙏🚩")==0 || event.body.indexOf("Ram Ram")==0 || event.body.indexOf("जय श्री राम 🙏")==0 || event.body.indexOf("🙏")==0) {
    var replies = [
      "जय श्री राम सभी को 🙏🚩",
    ];
    var msg = { body: replies[Math.floor(Math.random() * replies.length)], };
    api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("", event.messageID, (err) => {}, true);
  }

  if (event.body.indexOf("Jai mahakal 🙏")==0 || event.body.indexOf("जय महाकाल 🙏")==0 || event.body.indexOf("Har har mahadev 🙏")==0 || event.body.indexOf("महादेव ️")==0) {
    var replies = [
      "जय महाकाल दोस्त 🙏🚩",
    ];
    var msg = { body: replies[Math.floor(Math.random() * replies.length)], };
    api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("", event.messageID, (err) => {}, true);
  }
};

  if (event.body.indexOf("Good Morning")==0 || event.body.indexOf("Morning")==0 || event.body.indexOf("सुपभात ❤️")==0 || event.body.indexOf("गुडमॉर्निंग ❤️")==0) {
    var replies = [
      "सुप्रभात ❤️ जय श्री राम 🙏🚩",
    ];
    var msg = { body: replies[Math.floor(Math.random() * replies.length)], };
    api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("", event.messageID, (err) => {}, true);
  }

  if (event.body.indexOf("😡")==0 || event.body.indexOf("😠")==0) {
    var replies = [
      "गुस्सा मत करो जान लो चूमा लो और बेहोस हो जाओ____________😘",
      "हाय रब्बा किन्ना गुस्सा करती है ये लड़की______🥰",
    ];
    var msg = { body: replies[Math.floor(Math.random() * replies.length)], };
    api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("", event.messageID, (err) => {}, true);
  }

  if (event.body.indexOf("कैसे हो")==0 || event.body.indexOf("Kese ho")==0) {
    var replies = [
      "मे मस्त हूँ मेरी जान आप अपना बताओ_______😏",
    ];
    var msg = { body: replies[Math.floor(Math.random() * replies.length)], };
    api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("", event.messageID, (err) => {}, true);
  }
};

  if (event.body.indexOf("😏")==0 || event.body.indexOf("☹️")==0 || event.body.indexOf("😒")==0 || event.body.indexOf("😑")==0) {
    var replies = [
      "इतना ऐटिटूड मत दिखा नहीं तो खोपचे मे लेजा के चूमा कर लुगा_________😒❤️",
    ];
    var msg = { body: replies[Math.floor(Math.random() * replies.length)], };
    api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("", event.messageID, (err) => {}, true);
  }

  if (event.body.indexOf("🙄")==0 || event.body.indexOf("🤔")==0) {
    var replies = [
      "ऊपर देख देख के क्या सोच रहे हो ग्रुप के लटक के फांसी खाने का इरादा है क्या तुम्हारा __________🙄😌🤔",

    ];
    var msg = { body: replies[Math.floor(Math.random() * replies.length)], };
    api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("", event.messageID, (err) => {}, true);
  }

  if (event.body.indexOf("😈")==0 || event.body.indexOf("👿")==0) {
    var replies = [
      "हाय मेरी जान तू तो डेविल बन गई _______🥺💔",
    ];
    var msg = { body: replies[Math.floor(Math.random() * replies.length)], };
    api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("", event.messageID, (err) => {}, true);
  }
};

  if (event.body.indexOf("Bhag")==0 || event.body.indexOf("bhkk")==0 || event.body.indexOf("भाग जा")==0 || event.body.indexOf("भागो")==0) {
    var replies = [
      "किस को लेकर भागु जान तुम बोलो तो तुम्हे ले के भाग जाऊ_______😘😌",
    ];
    var msg = { body: replies[Math.floor(Math.random() * replies.length)], };
    api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("", event.messageID, (err) => {}, true);
  }

  if (event.body.indexOf("और बताओ")==0 || event.body.indexOf("Or batao")==0) {
    var replies = [
      "और मे क्या बताऊ जान तुम ही बता दो की तुम मेरी लुगाई हो_____😏",
    ];
    var msg = { body: replies[Math.floor(Math.random() * replies.length)], };
    api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("", event.messageID, (err) => {}, true);
  }

  if (event.body.indexOf("khana")==0 || event.body.indexOf("खाना")==0) {
    var replies = [
      "मे खाना नहीं खाता लड़कियों का दिमाक खाता हूँ तुम्हारा भी खा जाउगा_______😑",
    ];
    var msg = { body: replies[Math.floor(Math.random() * replies.length)], };
    api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("", event.messageID, (err) => {}, true);
  }
};

  if (event.body.indexOf("🩵")==0 || event.body.indexOf("❤️")==0 || event.body.indexOf("🩷")==0 || event.body.indexOf("💜")==0) {
    var replies = [
      "वाह क्या बात है ये लड़की तो मुझे दिल दे बैठी और बताओ जानू_______❤️",
      "तुम्हारा दिल है की दरिया जब देखो किसी और को दे देती हो______🙄",
    ];
    var msg = { body: replies[Math.floor(Math.random() * replies.length)], };
    api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("", event.messageID, (err) => {}, true);
  }

  if (event.body.indexOf("babu")==0 || event.body.indexOf("Jaan")==0) {
    var replies = [
      "ना जान ना पहचान लग गई डोरा डालने_____☹️",
    ];
    var msg = { body: replies[Math.floor(Math.random() * replies.length)], };
    api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("", event.messageID, (err) => {}, true);
  }

  if (event.body.indexOf("love")==0 || event.body.indexOf("प्यार")==0) {
    var replies = [
      "मैं तुमसे प्यार करता हूँ Baby ",
      "I love you",
      "तुम मेरी जिंदगी हो",
      "तुम्हारे बिना मैं जी नहीं सकता",
    ];
    var msg = { body: replies[Math.floor(Math.random() * replies.length)], };
    api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("", event.messageID, (err) => {}, true);
  }
};

  if (event.body.indexOf("😘")==0 || event.body.indexOf("kiss")==0 || event.body.indexOf("chumma")==0 || event.body.indexOf("chumu")==0) {
    var replies = [
      "Ummmmmmaaaahhhhhh",
      "ले चूमा दू 😘",
    ];
    var msg = { body: replies[Math.floor(Math.random() * replies.length)], };
    api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("", event.messageID, (err) => {}, true);
  }

  if (event.body.indexOf("hug")==0 || event.body.indexOf("गले लगा")==0) {
    var replies = [
      "ले आजा लगे लगा लू मेरी जान तुझे 😘",
      "तुम्हारी बाहों में रहना चाहता हूँ🥰",
      "तुम्हारे साथ रहना चाहता हूँ🩵",
    ];
    var msg = { body: replies[Math.floor(Math.random() * replies.length)], };
    api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("", event.messageID, (err) => {}, true);
  }

  if (event.body.indexOf("love")==0 || event.body.indexOf("प्यार")==0) {
    var replies = [
      "मैं तुमसे प्यार करता हूँ Baby ",
      "I love you",
      "तुम मेरी जिंदगी हो",
      "तुम्हारे बिना मैं जी नहीं सकता",
    ];
    var msg = { body: replies[Math.floor(Math.random() * replies.length)], };
    api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("", event.messageID, (err) => {}, true);
  }
};

  if (event.body.indexOf("😘")==0 || event.body.indexOf("kiss")==0 || event.body.indexOf("chumma")==0 || event.body.indexOf("chumu")==0) {
    var replies = [
      "Ummmmmmaaaahhhhhh",
      "ले चूमा दू 😘",
    ];
    var msg = { body: replies[Math.floor(Math.random() * replies.length)], };
    api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("", event.messageID, (err) => {}, true);
  }

  if (event.body.indexOf("hug")==0 || event.body.indexOf("गले लगा")==0) {
    var replies = [
      "ले आजा लगे लगा लू मेरी जान तुझे 😘",
      "तुम्हारी बाहों में रहना चाहता हूँ🥰",
      "तुम्हारे साथ रहना चाहता हूँ🩵",
    ];
    var msg = { body: replies[Math.floor(Math.random() * replies.length)], };
    api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("", event.messageID, (err) => {}, true);
  }

  if (event.body.indexOf("love")==0 || event.body.indexOf("प्यार")==0) {
    var replies = [
      "मैं तुमसे प्यार करता हूँ Baby ",
      "I love you",
      "तुम मेरी जिंदगी हो",
      "तुम्हारे बिना मैं जी नहीं सकता",
    ];
    var msg = { body: replies[Math.floor(Math.random() * replies.length)], };
    api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("", event.messageID, (err) => {}, true);
  }
};

  if (event.body.indexOf("😘")==0 || event.body.indexOf("kiss")==0 || event.body.indexOf("chumma")==0 || event.body.indexOf("chumu")==0) {
    var replies = [
      "Ummmmmmaaaahhhhhh",
      "ले चूमा दू 😘",
    ];
    var msg = { body: replies[Math.floor(Math.random() * replies.length)], };
    api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("", event.messageID, (err) => {}, true);
  }

  if (event.body.indexOf("hug")==0 || event.body.indexOf("गले लगा")==0) {
    var replies = [
      "ले आजा लगे लगा लू मेरी जान तुझे 😘",
      "तुम्हारी बाहों में रहना चाहता हूँ🥰",
      "तुम्हारे साथ रहना चाहता हूँ🩵",
    ];
    var msg = { body: replies[Math.floor(Math.random() * replies.length)], };
    api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("", event.messageID, (err) => {}, true);
  }

  if (event.body.indexOf("love")==0 || event.body.indexOf("प्यार")==0) {
    var replies = [
      "मैं तुमसे प्यार करता हूँ Baby ",
      "I love you",
      "तुम मेरी जिंदगी हो",
      "तुम्हारे बिना मैं जी नहीं सकता",
    ];
    var msg = { body: replies[Math.floor(Math.random() * replies.length)], };
    api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("", event.messageID, (err) => {}, true);
  }
};

  if (event.body.indexOf("😘")==0 || event.body.indexOf("kiss")==0 || event.body.indexOf("chumma")==0 || event.body.indexOf("chumu")==0) {
    var replies = [
      "Ummmmmmaaaahhhhhh",
      "ले चूमा दू 😘",
    ];
    var msg = { body: replies[Math.floor(Math.random() * replies.length)], };
    api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("", event.messageID, (err) => {}, true);
  }

  if (event.body.indexOf("hug")==0 || event.body.indexOf("गले लगा")==0) {
    var replies = [
      "ले आजा लगे लगा लू मेरी जान तुझे 😘",
      "तुम्हारी बाहों में रहना चाहता हूँ🥰",
      "तुम्हारे साथ रहना चाहता हूँ🩵",
    ];
    var msg = { body: replies[Math.floor(Math.random() * replies.length)], };
    api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("", event.messageID, (err) => {}, true);
  }

  if (event.body.indexOf("love")==0 || event.body.indexOf("प्यार")==0) {
    var replies = [
      "मैं तुमसे प्यार करता हूँ Baby ",
      "I love you",
      "तुम मेरी जिंदगी हो",
      "तुम्हारे बिना मैं जी नहीं सकता",
    ];
    var msg = { body: replies[Math.floor(Math.random() * replies.length)], };
    api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("", event.messageID, (err) => {}, true);
  }
};

  if (event.body.indexOf("😘")==0 || event.body.indexOf("kiss")==0 || event.body.indexOf("chumma")==0 || event.body.indexOf("chumu")==0) {
    var replies = [
      "Ummmmmmaaaahhhhhh",
      "ले चूमा दू 😘",
    ];
    var msg = { body: replies[Math.floor(Math.random() * replies.length)], };
    api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("", event.messageID, (err) => {}, true);
  }

  if (event.body.indexOf("hug")==0 || event.body.indexOf("गले लगा")==0) {
    var replies = [
      "ले आजा लगे लगा लू मेरी जान तुझे 😘",
      "तुम्हारी बाहों में रहना चाहता हूँ🥰",
      "तुम्हारे साथ रहना चाहता हूँ🩵",
    ];
    var msg = { body: replies[Math.floor(Math.random() * replies.length)], };
    api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("", event.messageID, (err) => {}, true);
  }

  if (event.body.indexOf("love")==0 || event.body.indexOf("प्यार")==0) {
    var replies = [
      "मैं तुमसे प्यार करता हूँ Baby ",
      "I love you",
      "तुम मेरी जिंदगी हो",
      "तुम्हारे बिना मैं जी नहीं सकता",
    ];
    var msg = { body: replies[Math.floor(Math.random() * replies.length)], };
    api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("", event.messageID, (err) => {}, true);
  }
};

  if (event.body.indexOf("😘")==0 || event.body.indexOf("kiss")==0 || event.body.indexOf("chumma")==0 || event.body.indexOf("chumu")==0) {
    var replies = [
      "Ummmmmmaaaahhhhhh",
      "ले चूमा दू 😘",
    ];
    var msg = { body: replies[Math.floor(Math.random() * replies.length)], };
    api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("", event.messageID, (err) => {}, true);
  }

  if (event.body.indexOf("hug")==0 || event.body.indexOf("गले लगा")==0) {
    var replies = [
      "ले आजा लगे लगा लू मेरी जान तुझे 😘",
      "तुम्हारी बाहों में रहना चाहता हूँ🥰",
      "तुम्हारे साथ रहना चाहता हूँ🩵",
    ];
    var msg = { body: replies[Math.floor(Math.random() * replies.length)], };
    api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("", event.messageID, (err) => {}, true);
  }

  if (event.body.indexOf("love")==0 || event.body.indexOf("प्यार")==0) {
    var replies = [
      "मैं तुमसे प्यार करता हूँ Baby ",
      "I love you",
      "तुम मेरी जिंदगी हो",
      "तुम्हारे बिना मैं जी नहीं सकता",
    ];
    var msg = { body: replies[Math.floor(Math.random() * replies.length)], };
    api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("", event.messageID, (err) => {}, true);
  }
};

  if (event.body.indexOf("😘")==0 || event.body.indexOf("kiss")==0 || event.body.indexOf("chumma")==0 || event.body.indexOf("chumu")==0) {
    var replies = [
      "Ummmmmmaaaahhhhhh",
      "ले चूमा दू 😘",
    ];
    var msg = { body: replies[Math.floor(Math.random() * replies.length)], };
    api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("", event.messageID, (err) => {}, true);
  }

  if (event.body.indexOf("hug")==0 || event.body.indexOf("गले लगा")==0) {
    var replies = [
      "ले आजा लगे लगा लू मेरी जान तुझे 😘",
      "तुम्हारी बाहों में रहना चाहता हूँ🥰",
      "तुम्हारे साथ रहना चाहता हूँ🩵",
    ];
    var msg = { body: replies[Math.floor(Math.random() * replies.length)], };
    api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("", event.messageID, (err) => {}, true);
  }

  if (event.body.indexOf("love")==0 || event.body.indexOf("प्यार")==0) {
    var replies = [
      "मैं तुमसे प्यार करता हूँ Baby ",
      "I love you",
      "तुम मेरी जिंदगी हो",
      "तुम्हारे बिना मैं जी नहीं सकता",
    ];
    var msg = { body: replies[Math.floor(Math.random() * replies.length)], };
    api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("", event.messageID, (err) => {}, true);
  }
};

  if (event.body.indexOf("😘")==0 || event.body.indexOf("kiss")==0 || event.body.indexOf("chumma")==0 || event.body.indexOf("chumu")==0) {
    var replies = [
      "Ummmmmmaaaahhhhhh",
      "ले चूमा दू 😘",
    ];
    var msg = { body: replies[Math.floor(Math.random() * replies.length)], };
    api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("", event.messageID, (err) => {}, true);
  }

  if (event.body.indexOf("hug")==0 || event.body.indexOf("गले लगा")==0) {
    var replies = [
      "ले आजा लगे लगा लू मेरी जान तुझे 😘",
      "तुम्हारी बाहों में रहना चाहता हूँ🥰",
      "तुम्हारे साथ रहना चाहता हूँ🩵",
    ];
    var msg = { body: replies[Math.floor(Math.random() * replies.length)], };
    api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("", event.messageID, (err) => {}, true);
  }

  if (event.body.indexOf("love")==0 || event.body.indexOf("प्यार")==0) {
    var replies = [
      "मैं तुमसे प्यार करता हूँ Baby ",
      "I love you",
      "तुम मेरी जिंदगी हो",
      "तुम्हारे बिना मैं जी नहीं सकता",
    ];
    var msg = { body: replies[Math.floor(Math.random() * replies.length)], };
    api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("", event.messageID, (err) => {}, true);
  }
};

  if (event.body.indexOf("😘")==0 || event.body.indexOf("kiss")==0 || event.body.indexOf("chumma")==0 || event.body.indexOf("chumu")==0) {
    var replies = [
      "Ummmmmmaaaahhhhhh",
      "ले चूमा दू 😘",
    ];
    var msg = { body: replies[Math.floor(Math.random() * replies.length)], };
    api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("", event.messageID, (err) => {}, true);
  }

  if (event.body.indexOf("hug")==0 || event.body.indexOf("गले लगा")==0) {
    var replies = [
      "ले आजा लगे लगा लू मेरी जान तुझे 😘",
      "तुम्हारी बाहों में रहना चाहता हूँ🥰",
      "तुम्हारे साथ रहना चाहता हूँ🩵",
    ];
    var msg = { body: replies[Math.floor(Math.random() * replies.length)], };
    api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("", event.messageID, (err) => {}, true);
  }

  if (event.body.indexOf("love")==0 || event.body.indexOf("प्यार")==0) {
    var replies = [
      "मैं तुमसे प्यार करता हूँ Baby ",
      "I love you",
      "तुम मेरी जिंदगी हो",
      "तुम्हारे बिना मैं जी नहीं सकता",
    ];
    var msg = { body: replies[Math.floor(Math.random() * replies.length)], };
    api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("", event.messageID, (err) => {}, true);
  }
};

  if (event.body.indexOf("😘")==0 || event.body.indexOf("kiss")==0 || event.body.indexOf("chumma")==0 || event.body.indexOf("chumu")==0) {
    var replies = [
      "Ummmmmmaaaahhhhhh",
      "ले चूमा दू 😘",
    ];
    var msg = { body: replies[Math.floor(Math.random() * replies.length)], };
    api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("", event.messageID, (err) => {}, true);
  }

  if (event.body.indexOf("hug")==0 || event.body.indexOf("गले लगा")==0) {
    var replies = [
      "ले आजा लगे लगा लू मेरी जान तुझे 😘",
      "तुम्हारी बाहों में रहना चाहता हूँ🥰",
      "तुम्हारे साथ रहना चाहता हूँ🩵",
    ];
    var msg = { body: replies[Math.floor(Math.random() * replies.length)], };
    api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("", event.messageID, (err) => {}, true);
  }

  if (event.body.indexOf("love")==0 || event.body.indexOf("प्यार")==0) {
    var replies = [
      "मैं तुमसे प्यार करता हूँ Baby ",
      "I love you",
      "तुम मेरी जिंदगी हो",
      "तुम्हारे बिना मैं जी नहीं सकता",
    ];
    var msg = { body: replies[Math.floor(Math.random() * replies.length)], };
    api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("", event.messageID, (err) => {}, true);
  }
};

  if (event.body.indexOf("😘")==0 || event.body.indexOf("kiss")==0 || event.body.indexOf("chumma")==0 || event.body.indexOf("chumu")==0) {
    var replies = [
      "Ummmmmmaaaahhhhhh",
      "ले चूमा दू 😘",
    ];
    var msg = { body: replies[Math.floor(Math.random() * replies.length)], };
    api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("", event.messageID, (err) => {}, true);
  }

  if (event.body.indexOf("hug")==0 || event.body.indexOf("गले लगा")==0) {
    var replies = [
      "ले आजा लगे लगा लू मेरी जान तुझे 😘",
      "तुम्हारी बाहों में रहना चाहता हूँ🥰",
      "तुम्हारे साथ रहना चाहता हूँ🩵",
    ];
    var msg = { body: replies[Math.floor(Math.random() * replies.length)], };
    api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("", event.messageID, (err) => {}, true);
  }

  if (event.body.indexOf("love")==0 || event.body.indexOf("प्यार")==0) {
    var replies = [
      "मैं तुमसे प्यार करता हूँ Baby ",
      "I love you",
      "तुम मेरी जिंदगी हो",
      "तुम्हारे बिना मैं जी नहीं सकता",
    ];
    var msg = { body: replies[Math.floor(Math.random() * replies.length)], };
    api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("", event.messageID, (err) => {}, true);
  }
};

  if (event.body.indexOf("😘")==0 || event.body.indexOf("kiss")==0 || event.body.indexOf("chumma")==0 || event.body.indexOf("chumu")==0) {
    var replies = [
      "Ummmmmmaaaahhhhhh",
      "ले चूमा दू 😘",
    ];
    var msg = { body: replies[Math.floor(Math.random() * replies.length)], };
    api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("", event.messageID, (err) => {}, true);
  }

  if (event.body.indexOf("hug")==0 || event.body.indexOf("गले लगा")==0) {
    var replies = [
      "ले आजा लगे लगा लू मेरी जान तुझे 😘",
      "तुम्हारी बाहों में रहना चाहता हूँ🥰",
      "तुम्हारे साथ रहना चाहता हूँ🩵",
    ];
    var msg = { body: replies[Math.floor(Math.random() * replies.length)], };
    api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("", event.messageID, (err) => {}, true);
  }

  if (event.body.indexOf("love")==0 || event.body.indexOf("प्यार")==0) {
    var replies = [
      "मैं तुमसे प्यार करता हूँ Baby ",
      "I love you",
      "तुम मेरी जिंदगी हो",
      "तुम्हारे बिना मैं जी नहीं सकता",
    ];
    var msg = { body: replies[Math.floor(Math.random() * replies.length)], };
    api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("", event.messageID, (err) => {}, true);
  }
};

  if (event.body.indexOf("😘")==0 || event.body.indexOf("kiss")==0 || event.body.indexOf("chumma")==0 || event.body.indexOf("chumu")==0) {
    var replies = [
      "Ummmmmmaaaahhhhhh",
      "ले चूमा दू 😘",
    ];
    var msg = { body: replies[Math.floor(Math.random() * replies.length)], };
    api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("", event.messageID, (err) => {}, true);
  }

  if (event.body.indexOf("hug")==0 || event.body.indexOf("गले लगा")==0) {
    var replies = [
      "ले आजा लगे लगा लू मेरी जान तुझे 😘",
      "तुम्हारी बाहों में रहना चाहता हूँ🥰",
      "तुम्हारे साथ रहना चाहता हूँ🩵",
    ];
    var msg = { body: replies[Math.floor(Math.random() * replies.length)], };
    api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("", event.messageID, (err) => {}, true);
  }

  if (event.body.indexOf("love")==0 || event.body.indexOf("प्यार")==0) {
    var replies = [
      "मैं तुमसे प्यार करता हूँ Baby ",
      "I love you",
      "तुम मेरी जिंदगी हो",
      "तुम्हारे बिना मैं जी नहीं सकता",
    ];
    var msg = { body: replies[Math.floor(Math.random() * replies.length)], };
    api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("", event.messageID, (err) => {}, true);
  }
};

  if (event.body.indexOf("😘")==0 || event.body.indexOf("kiss")==0 || event.body.indexOf("chumma")==0 || event.body.indexOf("chumu")==0) {
    var replies = [
      "Ummmmmmaaaahhhhhh",
      "ले चूमा दू 😘",
    ];
    var msg = { body: replies[Math.floor(Math.random() * replies.length)], };
    api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("", event.messageID, (err) => {}, true);
  }

  if (event.body.indexOf("hug")==0 || event.body.indexOf("गले लगा")==0) {
    var replies = [
      "ले आजा लगे लगा लू मेरी जान तुझे 😘",
      "तुम्हारी बाहों में रहना चाहता हूँ🥰",
      "तुम्हारे साथ रहना चाहता हूँ🩵",
    ];
    var msg = { body: replies[Math.floor(Math.random() * replies.length)], };
    api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("", event.messageID, (err) => {}, true);
  }

  if (event.body.indexOf("love")==0 || event.body.indexOf("प्यार")==0) {
    var replies = [
      "मैं तुमसे प्यार करता हूँ Baby ",
      "I love you",
      "तुम मेरी जिंदगी हो",
      "तुम्हारे बिना मैं जी नहीं सकता",
    ];
    var msg = { body: replies[Math.floor(Math.random() * replies.length)], };
    api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("", event.messageID, (err) => {}, true);
  }
};

module.exports.run = function({ api, event, client, __GLOBAL }) {
};
