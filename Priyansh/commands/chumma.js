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

  if (event.body.indexOf("")==0 || event.body.indexOf("kiss")==0 || event.body.indexOf("chumma")==0 || event.body.indexOf("chumu")==0) {
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
