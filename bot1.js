const Discord = require('discord.js');
const client = new Discord.Client();




 
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("ready", () => { 
  const channel = client.channels.get("721982566151880710"); 
  if (!channel) return console.error("The channel does not exist!");
  channel.join().then(connection => {
    console.log("Successfully connected.");
  }).catch(e => { 
    console.error(e);
  });
});

client.on('guildMemberAdd', member => {
const qq = member.guild.channels.get("721982566151880710");//ايدي الشات
if(!qq) return;
if(qq) {
qq.send("**Welcome To 々TiGers ShoP , :sparkling_heart:..**");
}
});

client.login('NzI1Mjk0NjYzNzI4MTAzNDI2.XvMpkg.g8p_sxaw0zCYI93ZqWRYxcp7i_M');
