const Discord = require('discord.js');

const client = new Discord.Client();

const token = 'NTcxMjIxMzE3Mjg2NzU2Mzky.XMKovA.HsJSSV7c8MK6D9hJLVt8ta32Om0';

client.on('ready', () => {
    console.log('Bot has been started up.');    
}

);

client.on('message', message => {
    if (message.content === 'HeyI') {
        let msg = message.channel;
        let author = message.author.username;
        let reply_text = `What\'s the matter, ${author}?`;

        message.reply(reply_text)
            .then(message => console.log(`Sent message: ${reply_text}`))
            .catch(console.error);
        return;
    }
}

);

client.login(token);