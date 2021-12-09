require('dotenv').config()
const { Client } = require('discord.js');

const token = process.env.DISCORD_TOKEN

const client = new Client();
const prefixo = '#';

const servers = {
    'server': {
        connection: null,
        dispatcher: null
    }
}

client.on('ready', () => {
  console.log('servidor is running');
});

client.on('message', async msg => {
  if (!msg.guild) return;

  if (!msg.content.startsWith(prefixo)) return;

  if (msg.content === prefixo + 'join') {
      servers.server.connection = (await msg.member.voice.channel.join())
    }
    const sound = msg.content.replace(/#play /gi, '')
    
    if (msg.content ===  `${prefixo}play ${sound}`) {
        servers.server.connection = (await msg.member.voice.channel.join()).play(`./sounds/${sound}.mp3`);
    }
});

client.login(token);
