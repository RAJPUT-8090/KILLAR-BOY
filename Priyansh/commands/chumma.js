const fs = require("fs");

module.exports.config = {
  name: "chumma",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "Your Name",
  description: "Auto reply on sweet messages",
  commandCategory: "no prefix",
  usages: "Auto responses",
  cooldowns: 5,
};

module.exports.handleEvent = function ({ api, event }) {
  const { threadID, messageID, body } = event;
  if (!body) return;
  const lowerBody = body.toLowerCase();

  const sendResponse = (replies, emoji = "😘") => {
    const msg = { body: replies[Math.floor(Math.random() * replies.length)] };
    api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction(emoji, messageID, (err) => {}, true);
  };

  if (["😘", "kiss", "chumma", "chumu"].some(word => lowerBody.startsWith(word))) {
    sendResponse(["Ummmmmmaaaahhhhhh___________😘😘", "ले चूमा दू 😘"]);
  }

  else if (["hug", "गले लगा"].some(word => lowerBody.startsWith(word))) {
    sendResponse([
      "ले आजा लगे लगा लू मेरी जान तुझे______😘",
      "तुम्हारी बाहों में रहना चाहता हूँ________🥰",
      "तुम्हारे साथ रहना चाहता हूँ________😘"
    ]);
  }

  else if (["love", "i love you"].some(word => lowerBody.startsWith(word))) {
    sendResponse([
      "मैं तुमसे प्यार करता हूँ बेबी_________🥰",
      "I love you too jaanu_________🥰❤️",
      "तुम मेरी जिंदगी हो___________😌",
      "तुम्हारे बिना मैं जी नहीं सकता_________🥺😌"
    ]);
  }

  else if (["🥰", "😌", "😍", "☺️"].some(em => body.startsWith(em))) {
    sendResponse(["क्या बात है बड़ा प्यार दिखा रही हो जान आज तो______🥰😌"]);
  }

  else if (["jai shree ram", "ram ram", "जय श्री राम", "🙏"].some(word => lowerBody.startsWith(word))) {
    sendResponse(["जय श्री राम सभी को 🙏🚩"], "🙏");
  }

  else if (["jai mahakal", "जय महाकाल", "har har mahadev", "महादेव"].some(word => lowerBody.startsWith(word))) {
    sendResponse(["जय महाकाल दोस्त 🙏🚩"], "🚩");
  }

  else if (["good morning", "Gm", "gm", "morning", "सुपभात", "गुडमॉर्निंग"].some(word => lowerBody.startsWith(word))) {
    sendResponse(["सुप्रभात ❤️ जय श्री राम 🙏🚩"]);
  }

  else if (["😡", "😠"].some(em => body.startsWith(em))) {
    sendResponse([
      "गुस्सा मत करो जान लो चूमा लो और बेहोस हो जाओ____________😘",
      "हाय रब्बा किन्ना गुस्सा करती है ये लड़की______🥰"
    ]);
  }

  else if (["कैसे हो", "kese ho"].some(word => lowerBody.startsWith(word))) {
    sendResponse(["मैं मस्त हूँ मेरी जान, आप अपना बताओ_______😏"]);
  }

  else if (["😏", "☹️", "😒", "😑"].some(em => body.startsWith(em))) {
    sendResponse(["इतना ऐटिटूड मत दिखा नहीं तो खोपचे में ले जाकर चूमा कर लूंगा_________😒❤️"]);
  }
  
  else if (["😂", "🤣️", "😁", "😹"].some(em => body.startsWith(em))) {
    sendResponse(["इतना मत हस नहीं तो दाँत निचे गिर जायेगे कोइ ना उठाएगा फिर ______________😂❤️"]);
  }
  
  else if (["💔", "🥺", "😢", "😭"].some(em => body.startsWith(em))) {
    sendResponse(["सेड मत हो जानू तेरा दिल टूट गया है तो कोइ बात नहीं मे अपना लुगा तुझे 🤣_________😒❤️"]);
  }

  else if (["love", "Love", "I love you", "आई लव यू"].some(em => body.startsWith(em))) {
    sendResponse(["आई लव यू टू मेरी जान _________😒❤️"]);
  }

  else if (["🤭", "☺️", "😇", "😌"].some(em => body.startsWith(em))) {
    sendResponse(["हाय रब्बा मेरी जान शर्मा रही है _________😒❤️"]);
  }

  else if (["😴", "🥱", "Gn", "gn", "Good Night", "good night"].some(em => body.startsWith(em))) {
    sendResponse(["जा सुगली सोजा तुझे नींद आ रही है _________😒❤️"]);
  }

  else if (["🙄", "🤔"].some(em => body.startsWith(em))) {
    sendResponse(["ऊपर देख देख के क्या सोच रहे हो? ग्रुप के लटक के फांसी खाने का इरादा है क्या तुम्हारा __________🙄😌🤔"]);
  }

  else if (["😈", "👿"].some(em => body.startsWith(em))) {
    sendResponse(["हाय मेरी जान तू तो डेविल बन गई _______🥺💔"]);
  }

  else if (["bhag", "bhkk", "भाग जा", "भागो"].some(word => lowerBody.startsWith(word))) {
    sendResponse(["किस को लेकर भागूं जान? तुम बोलो तो तुम्हें ले के भाग जाऊ_______😘😌"]);
  }

  else if (["और बताओ", "or batao"].some(word => lowerBody.startsWith(word))) {
    sendResponse(["और मैं क्या बताऊ जान, तुम ही बता दो कि तुम मेरी लुगाई हो_____😏"]);
  }

  else if (["khana", "खाना"].some(word => lowerBody.startsWith(word))) {
    sendResponse(["मैं खाना नहीं खाता, लड़कियों का दिमाग खाता हूँ, तुम्हारा भी खा जाऊँगा_______😑"]);
  }

  else if (["🩵", "❤️", "🩷", "💜"].some(em => body.startsWith(em))) {
    sendResponse([
      "वाह क्या बात है, ये लड़की तो मुझे दिल दे बैठी और बताओ जानू_______❤️",
      "तुम्हारा दिल है की दरिया, जब देखो किसी और को दे देती हो______🙄"
    ]);
  }

  else if (["babu", "jaan"].some(word => lowerBody.startsWith(word))) {
    sendResponse(["ना जान ना पहचान, लग गई डोरा डालने_____☹️"]);
  }
};

module.exports.run = function ({ api, event }) {
  // This is just required to export; you can leave it empty if not used.
};
