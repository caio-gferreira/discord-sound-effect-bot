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

  switch(msg.content) {
      case prefixo + 'play boom':
        servers.server.connection = (await msg.member.voice.channel.join()).play('./sounds/boom.mp3');
        break;
    case prefixo + 'play cow':
        servers.server.connection = (await msg.member.voice.channel.join()).play('./sounds/cow.mp3');
        break;
    case prefixo + 'play hehe':
        servers.server.connection = (await msg.member.voice.channel.join()).play('./sounds/hehe.mp3');
        break;
    case prefixo + 'play horse':
        servers.server.connection = (await msg.member.voice.channel.join()).play('./sounds/horse.mp3');
        break;
    case prefixo + 'play rusbe':
        servers.server.connection = (await msg.member.voice.channel.join()).play('./sounds/rusbe.mp3');
        break;
    case prefixo + 'play badum':
        servers.server.connection = (await msg.member.voice.channel.join()).play('./sounds/badum.mp3');
        break;
    default:
        break
  }


});

client.login(token);
