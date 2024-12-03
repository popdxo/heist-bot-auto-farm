# Heist Bot Auto Farm
This is an auto farmer for the Heist Discord bot

This uses [Discord.js Selfbot](https://github.com/aiko-chan-ai/discord.js-selfbot-v13)

This breaks a lot and I found there isn't much work arounds for my coding capabilities so I'm most likely going to rewrite this soon with another language and modules.

> [!CAUTION]
> You should be careful using Discord self-bot as they are against Discord's TOS

## How to use

To use this, make sure you have [Node.js](https://nodejs.org/) installed and run:
`npm install discord.js-selfbot-v13@latest`

Clone/download the repo

Make sure you have your discord token copied and a channel ID from a Discord server channel with the bot invited
Before you get both the token and the channel ID, you must have developer mode enabled on your account.

If you need to get your Discord token, press ctrl+shift+i and go to the console tab then paste this in on the console tab.
This will only output your token so nothing bad will happen

```javascript
(webpackChunkdiscord_app.push([[''],{},e=>{m=[];for(let c in e.c)m.push(e.c[c])}]),m).find(m=>m?.exports?.default?.getToken!==void 0).exports.default.getToken()
```

If you need to get a channel ID, just right click the `# channel name` button and click Copy Channel ID

### Easy Setup

On windows just double-click windowsStart.bat
You can just run start.sh on linux

### Manual Setup

Open the config.js file in any text editor

Follow the instructions in the comments for the first 2 lines. 

Run the script using `node path/to/run.js`

