const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = "$"
var adminprefix = '$'

client.on('ready',async () => {//Toxic Codes
console.log("Starting..");//Toxic Codes
let g = client.guilds.get("721982566151880707"); // id server
let c = g.channels.get("725632823314088020");// id channel
if(c.type === 'voice') {//Toxic Codes
c.join();//Toxic Codes
setInterval(() => {//Toxic Codes
if(!g.me.voiceChannel) c.join();
}, 1);//Toxic Codes
} else {//Toxic Codes
console.log('Failed To Join: \n The Channel Type isn "Listening."')
}
});
 
  
  client.on("message", message => {
    if (message.content === "$help") {
     const embed = new Discord.RichEmbed() 
         .setColor("#00FF00")
         .setThumbnail(message.author.avatarURL)
         .setDescription(`**Help|هيلب

       $obc | لأرسال برود كاست للكل

       $bc  |  لأرسال برود كاست للأونلاين

       ** `)
   message.author.sendEmbed(embed)
   
   }
   });

//خط


client.on('message', msg => {
  if (msg.content === 'خط') {
    msg.reply('https://media.discordapp.net/attachments/721999476696547329/725306956067110912/508209739218419732.png?width=653&height=35');
  }
});
// هكر حميه 

var config = {
  events: [
    {type: "CHANNEL_CREATE", logType: "CHANNEL_CREATE", limit: 4 , delay: 5000},
    {type: "CHANNEL_DELETE", logType: "CHANNEL_DELETE", limit: 4, delay: 5000},
    {type: "GUILD_MEMBER_REMOVE", logType: "MEMBER_KICK", limit: 4, delay: 5000},
    {type: "GUILD_BAN_ADD", logType: "MEMBER_BAN_ADD", limit: 4, delay: 5000},
    {type: "GUILD_ROLE_CREATE", logType: "ROLE_CREATE", limit: 5, delay: 5000},
    {type: "GUILD_ROLE_DELETE", logType: "ROLE_DELETE", limit: 4, delay: 5000},
  ]
}
client.on("error", (e) => console.error(e));
client.on("raw", (packet)=> {
  let {t, d} = packet, type = t, {guild_id} = data = d || {};
  if (type === "READY") {
    client.startedTimestamp = new Date().getTime();
    client.captures = [];
  }
  let event = config.events.find(anEvent => anEvent.type === type);
  if (!event) return;
  let guild = client.guilds.get(guild_id);
  if (!guild) return;
  guild.fetchAuditLogs({limit : 1, type: event.logType})
    .then(eventAudit => {
      let eventLog = eventAudit.entries.first();
      if (!eventLog) return;
      let executor = eventLog.executor;
      guild.fetchAuditLogs({type: event.logType, user: executor})
        .then((userAudit, index) => {
          let uses = 0;
          userAudit.entries.map(entry => {
            if (entry.createdTimestamp > client.startedTimestamp && !client.captures.includes(index)) uses += 1;
          });
          setTimeout(() => {
            client.captures[index] = index
          }, event.delay || 2000)
          if (uses >= event.limit) {
            client.emit("reachLimit", {
              user: userAudit.entries.first().executor,
              member: guild.members.get(executor.id),
              guild: guild,
              type: event.type,
            })
          }
        }).catch(console.error)
    }).catch(console.error)
});
client.on("reachLimit", (limit)=> {
  let log = limit.guild.channels.find( channel => channel.name === "hack-log");
  log.send(limit.user.username+"\** سيرفر بيتهكر ! ** ");
  limit.guild.owner.send(limit.user.username+"\** سيرفرك بيتهكر ! ** ")
  limit.member.roles.map(role => {
    limit.member.removeRole(role.id)
    .catch(log.send)
  });
});

 // تكت 
client.on('message', async message => {
 
   if (message.content.startsWith("$new")) {  
        const reason = message.content.split(" ").slice(1).join(" ");  
        if (!message.guild.roles.exists("name", "Support Team")) return message.channel.send(`لازم تسوي رتبة اسمها \`Support Team\` وتنطي البوت ادمنيتر حتا يقدر يسوي الرومات ويعدل برمشنات`);
        if (message.guild.channels.exists("name", "ticket-{message.author.id}" + message.author.id)) return message.channel.send(`You already have a ticket open.`);    /// ALPHA CODES
        message.guild.createChannel(`ticket-${message.author.username}`, "text").then(c => {
            let role = message.guild.roles.find("name", "Support Team");
            let role2 = message.guild.roles.find("name", "@everyone");
            c.overwritePermissions(role, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true
            });  
            c.overwritePermissions(role2, {
                SEND_MESSAGES: false,
                READ_MESSAGES: false
            });
            c.overwritePermissions(message.author, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true
            });
            message.channel.send(`:white_check_mark: تم انشاء تذكرتك, #${c.name} `);
            const embed = new Discord.RichEmbed()
                .setColor(d1631e)
                .addField(`Hey ${message.author.username}!`, `:white_check_mark:  تم انشاء تذكرتك, #ticket`)
                .setTimestamp();
            c.send({
                embed: embed
            });
        }).catch(console.error);
    }
 
 
  if (message.content.startsWith("$close")) {
        if (!message.channel.name.startsWith(`ticket-`)) return message.channel.send(`You can't use the close command outside of a ticket channel.`);
 
       message.channel.send(`هل انت متأكد من اقفالك للتذكرة اذا متأكد اكتبclose`)
           .then((m) => {
               message.channel.awaitMessages(response => response.content === 'close', {
                       max: 1,
                       time: 10000,
                       errors: ['time'],
                   })  
                   .then((collected) => {
                       message.channel.delete();
                   })  
                   .catch(() => {
                       m.edit('لم يتم تقفيل التكت').then(m2 => {
                           m2.delete();
                       }, 3000);
                   });
           });
   }
 
});
 

const developers = ["508209739218419732","id"]
client.on('message', message => {
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!developers.includes(message.author.id)) return;
      
  if (message.content.startsWith(adminprefix + 'setg')) {
    client.user.setGame(argresult);
      message.channel.send(`**✅   ${argresult}**`)
  } else 
     if (message.content === (adminprefix + "leave")) {
    message.guild.leave();        
  } else  
  if (message.content.startsWith(adminprefix + 'setw')) {
  client.user.setActivity(argresult, {type:'WATCHING'});
      message.channel.send(`**✅   ${argresult}**`)
  } else 
  if (message.content.startsWith(adminprefix + 'setl')) {
  client.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.send(`**✅   ${argresult}**`)
  } else 
  if (message.content.startsWith(adminprefix + 'sets')) {
    client.user.setGame(argresult, "https://www.twitch.tv/dream");
      message.channel.send(`**✅**`)
  }
  if (message.content.startsWith(adminprefix + 'setname')) {
  client.user.setUsername(argresult).then
      message.channel.send(`Changing The Name To ..**${argresult}** `)
} else
if (message.content.startsWith(adminprefix + 'setava')) {
  client.user.setAvatar(argresult);
    message.channel.send(`Changing The Avatar To :**${argresult}** `);
}
});


client.on('message', function(msg) {
    if(msg.content.startsWith (prefix  + 'server')) {
      let embed = new Discord.RichEmbed()
      .setColor('BLACK')
      .setThumbnail(msg.guild.iconURL)
      .setTitle(` **${msg.guild.name}**`)
      .addField('ٍ➺ **Server Region**',`[** __${msg.guild.region}__ **]`,true)
      .addField('**Roles**',`[** __${msg.guild.roles.size}__ **]`,true)
      .addField('**Members**',`[** __${msg.guild.memberCount}__ **]`,true)
      .addField(' **Text Channels**',`[** __${msg.guild.channels.filter(m => m.type === 'text').size}__** ]`,true)
      .addField(' **Voice Channels**',`[** __${msg.guild.channels.filter(m => m.type === 'voice').size}__ **]`,true)
      .addField(' **Owner Ship**',`**${msg.guild.owner}**`,true)
      .addField(' **Server ID**',`**${msg.guild.id}**`,true)
      .addField(' **Date of  creating**',`**${msg.guild.createdAt.toLocaleString()}**`,true)

msg.channel.send(embed);
    }
});




 
 
var prefix = "$";
 
client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;
 
  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);
 
  let args = message.content.split(" ").slice(1);
 
// !say
  if (command === "say") {
          message.delete()
    message.channel.sendMessage(args.join(" ")).catch(console.error);
  }
 
 
 
if (command == "embed") {
    let say = new Discord.RichEmbed()
    .setDescription(args.join("  "))
    .setColor(0x23b2d6)
    message.channel.sendEmbed(say);
    message.delete();
  }
 
 
});
 




client.login(process.env.BOT_TOKEN);
