const config = require("./config.js");

const token = config.token;
const channelid = config.channelId;

const { Client } = require("discord.js-selfbot-v13");
const client = new Client();

const heistbotId = "1225070865935368265";

client.on("ready", async () => {
  const discordchannel = client.channels.cache.get(channelid);
  console.log(`Started fisher on ${client.user.username}`);
  let worked = 0;
  function goWork() {
    discordchannel
      .sendSlash(heistbotId, "eco work")
      .then(() => {
        worked += 1;
        console.log(`worked ${worked}`);
        setTimeout(goWork, 180 * 1000);
      })
      .catch(console.error);
  }
});
client.login(token);
