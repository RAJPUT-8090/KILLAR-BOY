module.exports.config = {
  name: "antibd",
  eventType: ["log:user-nickname", "log:thread-name"],
  version: "0.0.2",
  credits: "𝙋𝙧𝙞𝙮𝙖𝙣𝙨𝙝 𝙍𝙖𝙟𝙥𝙪𝙩",
  description: "बोट और ग्रुप का नाम केवल एडमिन ही बदल सकें"
};

module.exports.run = async function({ api, event, Users, Threads }) {
  const { logMessageData, threadID, author } = event;
  const botID = api.getCurrentUserID();
  const { BOTNAME, ADMINBOT } = global.config;


  const { nickname } = await Threads.getData(threadID, botID);
  const currentNickname = nickname || BOTNAME;
  const { threadName } = await Threads.getData(threadID);
  const currentThreadName = threadName;


  if (logMessageData.participant_id == botID && author != botID && !ADMINBOT.includes(author) && logMessageData.nickname != currentNickname) {
    api.changeNickname(currentNickname, threadID, botID);
    const userData = await Users.getData(author);
    return api.sendMessage({ body: `${userData.name} - 𝙏𝙐𝙈 𝘽𝙊𝙏 𝙆𝘼 𝙉𝙄𝘾𝙆𝙉𝘼𝙈𝙀 𝘾𝙃𝘼𝙉𝙂𝙀 𝙉𝙄 𝙆𝘼𝙍 𝙎𝘼𝙆𝙏𝘼𝙔 😹🖐` }, threadID);
  }


  if (logMessageData.participant_id == botID && author != botID && !ADMINBOT.includes(author) && logMessageData.thread_name != currentThreadName) {
    api.setTitle(currentThreadName, threadID);
    const userData = await Users.getData(author);
    return api.sendMessage({ body: `${userData.name} - 𝙏𝙐𝙈 𝙂𝙍𝙐𝙋 𝙆𝘼 𝙉𝘼𝙈𝙀 𝘾𝙃𝘼𝙉𝙂𝙀 𝙉𝙄 𝙆𝘼𝙍 𝙎𝘼𝙆𝙏𝘼𝙔 😹🖐` }, threadID);
  }
};
