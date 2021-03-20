module.exports = {
    name: 'play',
    description: 'Joue du son.',
    async execute(message, args) {
        let pause = false ;

        if (!message.guild) return;

        if (message.member.voice.channel) {

            if (args[0] === "pause") {
                console.log('cats');
                //console.log('dog')
                dispatcher.pause(); 

                /*const ytdl = require('ytdl-core')
                const connection = await message.member.voice.channel.join();
                const dispatcher = connection.play(ytdl(args[0]), {
                    volume: 0.5,
                });

                dispatcher.on('start', () => {
                    message.client.user.setActivity('Youtube', { type: 'LISTENING' });
                    message.member.voice.channel.setName('MusicPlaying');
                });

                dispatcher.on('error', () => {
                    message.reply("Cette vidéo n'est pas lisible !");
                    message.member.voice.channel.leave();
                });

                dispatcher.on('finish', () => {
                    dispatcher.destroy();
                    message.member.voice.channel.leave();
                    message.client.user.setActivity('te regarder', { type: 'PLAYING'});
                    message.member.voice.channel.setName('Général');
                });*/

            }

            else {
                const ytdl = require('ytdl-core')
                const connection = await message.member.voice.channel.join();
                const dispatcher = connection.play(ytdl(args[0]), {
                    volume: 0.5,
                });

                dispatcher.on('start', () => {
                    message.client.user.setActivity('Youtube', { type: 'LISTENING' });
                    message.member.voice.channel.setName('MusicPlaying');
                });

                dispatcher.on('error', () => {
                    message.reply("Cette vidéo n'est pas lisible !");
                    message.member.voice.channel.leave();
                });

                dispatcher.on('finish', () => {
                    dispatcher.destroy();
                    message.member.voice.channel.leave();
                    message.client.user.setActivity('te regarder', { type: 'PLAYING'});
                    message.member.voice.channel.setName('Général');
                });

                console.log('dog')
                //dispatcher.pause();   
            }
        }
        
        else {
            message.reply('You need to join a voice channel first!');
        }
    }

};