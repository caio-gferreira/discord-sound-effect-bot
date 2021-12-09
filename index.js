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

  if (msg.content === prefixo + 'commands') {
      msg.channel.send(`
      #play badum - bateria;\n\n#play boom - explosão;\n\n#play clap - aplausos;\n\n#play cow - vaca;\n\n#play donkey - jumento;\n\n#play hehe - michael jackson;\n\n#play horse - cavalo;\n\n#play rusbe - michael jackson2;\n\n#play wee - weeeeee`)
    }
    const sound = msg.content.replace(/#play /gi, '')
    
    if (msg.content ===  `${prefixo}play ${sound}`) {
        servers.server.connection = (await msg.member.voice.channel.join()).play(`./sounds/${sound}.mp3`);
    }
});

client.login(token);
