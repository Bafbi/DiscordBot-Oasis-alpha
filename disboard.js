const Discord = require('discord.js');

const client = new Discord.Client();

const { prefix, token } = require('./config.json');


client.on('ready', () => {
    console.log('I am ready!');
});




client.on('message', message => {

    if (message.author.username === 'Oasis (alpha)') {

        let bump = message.embeds[0];
        console.log(bump)

        let description = bump.description.split(',');
        console.log(description);
        let verif = description[1].split('\n');
        let count;
        console.log(verif);
        if (verif[1] == 'Bump effectué! : thumbsup:') {
            let user = description[0];
            console.log(user);
            if (user === userbump) {
                count+1;
                console.log(count);
            }
            else {
                var userbump = user;
                console.log(userbump);
            }
        }       
        else message.reply('a');


    }
});


client.login(token);