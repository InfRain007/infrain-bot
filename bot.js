const Discord = require('discord.js');

const client = new Discord.Client();

const token = 'NTcxMjIxMzE3Mjg2NzU2Mzky.XMKovA.HsJSSV7c8MK6D9hJLVt8ta32Om0';

client.on('ready', () => {
    console.log('Bot has been set up.');    
}

);

client.on('message', message => {
    if (message.content === 'i.hey') {
        let msg = message.channel;
        let author = message.author.username;
        let reply_text1 = `なんや？暇人か？`;

        message.reply(reply_text1)
            .then(message => console.log(`Sent message: ${reply_text1}`))
            .catch(console.error);
        return;
    }
}

);

client.on('message', message => {
    if (message.content === 'i.check') {
        let reply_text2 = `感度良好、問題なし。`;

        message.reply(reply_text2)
            .then(message => console.log(`Sent message: ${reply_text2}`))
            .catch(console.error);
        return;
    }
}

);

client.on('message', message => {
    if (message.content === 'i.now') {
        let Zweeks = new Array("日","月","火","水","木","金","土");
        let Znow = new Date();
        let Zy = Znow.getFullYear();
        let Zmo = Znow.getMonth() + 1;
        let Zd = Znow.getDate();
        let Zw = Zweeks[Znow.getDay()];
        let Zh = Znow.getHours();
        let Zmi = Znow.getMinutes();
        let Zs = Znow.getSeconds();
        let reply_text3 = "\n[現在時刻]\n" + Zy + "年" + Zmo + "月" + Zd + "日 " + Zw + "曜日" + "\n" + Zh + "時" + Zmi + "分" + Zs + "秒です。" ;

        if (Zmo < 10) Zmo = "0" + Zmo;
        if (Zd < 10) Zd = "0" + Zd;
        if (Zmi < 10) Zmi = "0" + Zmi;
        if (Zs < 10) Zs = "0" + Zs;

        message.reply(reply_text3)
            .then(message => console.log(`Sent message: ${reply_text3}`))
            .catch(console.error);
        return;
    }
}

);

//client.on('voiceStateUpdate', (oldMember, newMember) => {
    //let newUserChannel = newMember.voiceChannel
    //let oldUserChannel = oldMember.voiceChannel

    //if (oldUserChannel === )
//}

//);

client.login(token);