module.exports = {
    name: 'meme',
    description: 'Meme avec music',
    async execute(message, args) {
        const color = '4B95E8'
        const { MessageEmbed } = require('discord.js');
        if (message.guild) message.channel.bulkDelete(1);

//Gayschlatt
        if (args[0] === 'gay') {
            const gayschlatt = new MessageEmbed()

                .setTitle('Gayschlatt')
                .setColor(color)
                .setImage('https://i.ytimg.com/vi/igc9XClqvMM/hq720.jpg?sqp=-oaymwEZCOgCEMoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCqJtPBUca7Njy-ECBS7TKryytMpA')
                .setURL('https://www.youtube.com/watch?v=igc9XClqvMM');

            message.channel.send(gayschlatt);

            if (!message.guild) return;

            if (message.member.voice.channel) {
                const connection = await message.member.voice.channel.join();
                const dispatcher = connection.play('./audio/gayschlatt-meme.mp3');

                dispatcher.on('finish', () => {
                    dispatcher.destroy();
                    message.member.voice.channel.leave();

                });
            }
            return
        }

//Caramelldansen
        else if (args[0] === 'caramell') {
            const caramelldansen = new MessageEmbed()

                .setTitle('Caramelldansen')
                .setColor(color)
                .setImage('https://i.kym-cdn.com/entries/icons/original/000/000/238/icon.gif')
                .setURL('https://youtu.be/0OZyleriwRU');

            message.channel.send(caramelldansen);

            if (!message.guild) return;

            if (message.member.voice.channel) {
                const connection = await message.member.voice.channel.join();
                const dispatcher = connection.play('./audio/caramelldansen.mp3');

                dispatcher.on('finish', () => {
                    dispatcher.destroy();
                    message.member.voice.channel.leave();

                });
            }
            return
        }

//Leekspin
        else if (args[0] === 'spin') {
            const leekspin = new MessageEmbed()

                .setTitle('Leekspin')
                .setColor(color)
                .setImage('https://i.kym-cdn.com/photos/images/original/000/328/161/576.gif')
                .setURL('https://www.youtube.com/watch?v=C2n212OP1cQ&ab_channel=JeanValfourrer');

            message.channel.send(leekspin);

            if (!message.guild) return;

            if (message.member.voice.channel) {
                const connection = await message.member.voice.channel.join();
                const dispatcher = connection.play('./audio/leekspin.mp3');

                dispatcher.on('finish', () => {
                    dispatcher.destroy();
                    message.member.voice.channel.leave();

                });
            }
            return
        }
//Touhou
        else if (args[0] === 'touhou') {
            const touhou = new MessageEmbed()

                .setTitle('Touhou')
                .setColor(color)
                .setImage('https://media.giphy.com/media/NB59B0xtA9wc0/giphy.gif')
                .setURL('https://www.youtube.com/watch?v=6EUYBWhVkKg&list=RD6EUYBWhVkKg&start_radio=1&ab_channel=Kamen8211E');

            message.channel.send(touhou);

            if (!message.guild) return;

            if (message.member.voice.channel) {
                const connection = await message.member.voice.channel.join();
                const dispatcher = connection.play('./audio/touhou.mp3');

                dispatcher.on('finish', () => {
                    dispatcher.destroy();
                    message.member.voice.channel.leave();

                });
            }
            
        }

        else {
            const meme = new MessageEmbed()

                .setTitle('Memes Disponible')
                .addFields(
                    { name: 'Gayschlatt', value: 'meme gay', inline: true },
                    { name: 'Caramelldansen', value: 'meme caramell', inline: true },
                    { name: 'Leekspin', value: 'meme spin', inline: true },
                    { name: 'Touhou', value: 'meme touhou', inline: true },
                )

            message.channel.send(meme);
        }


        


    }

};