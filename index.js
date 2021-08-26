const Discord = require("discord.js");
const client = new Discord.Client({disableEveryone: true});
const { CanvasSenpai } = require("canvas-senpai")
const canva = new CanvasSenpai();
const config = require("./config.json")

client.once("ready", () => {
  console.log("Ready!");
  client.user.setPresence({
    activity: {
      type: "PLAYING",
      name: "code by HZR_H3RY"
    },
    status: "dnd"
  });
})

require("http").createServer((req, res) => res.end("alive")).listen();

client.on('guildMemberAdd', async member => {
	const channel = member.guild.channels.cache.find(ch => ch.id === 'id_channels_welcome_here');	if (!channel) return;
   let data = await canva.welcome(member, { link: "https://wallpapercave.com/wp/wp5128415.jpg", blur: false, block: false })
    const attachment = new Discord.MessageAttachment(
      data,
      "welcome-image.png"
    );
    channel.send(
      `Welcome to the server, **${member.user}**!\nnow in this server have ${member.guild.memberCount} Member!!`,
      attachment
    );  
});

client.on('guildMemberRemove', async member => {
	const channel = member.guild.channels.cache.find(ch => ch.id === 'id_channels_goodbye_here');
	if (!channel) return;
   let data = await canva.welcome(member, { link: "https://wallpapercave.com/wp/wp5128415.jpg", blur: false, block: false })
    const attachment = new Discord.MessageAttachment(
      data,
      "welcome-image.png"
    );

    channel.send(
      `goodbye **${member.user.username}** pls come back`,
      attachment
    );
   });

client.login(config.token);
