const config = require("./config.js");

const token = config.token;
const channelid = config.channelId;

const { Client } = require("discord.js-selfbot-v13");
const client = new Client();

const heistbotId = "1225070865935368265";

client.on("ready", async () => {
  const discordchannel = client.channels.cache.get(channelid);
  console.log(`Started fisher on ${client.user.username}`);
  let begged = 0;
  function goBeg() {
    discordchannel
      .sendSlash(heistbotId, "eco beg")
      .then(() => {
        begged += 1;
        console.log(`begged ${begged}`);
        setTimeout(goBeg, 40 * 1000);
      })
      .catch(console.error);
  }
  goBeg();
});
client.login(token);
