const profils = require("../../modules/profil");

module.exports = {
    name: 'lv',
    description: "test d'un autre truc",
    execute(message, args) {
        const profil = profils.profilsAccess(message.guild.id, message.author.id, message.author.username)
        profil.then((result) => {
            if (result) {
                message.channel.send({
                    embed: {
                        color: 0xffd700,
                        title: `level de ${result.pseudo}`,
                        thumbnail: {
                            url: message.author.avatarURL({ dynamic: true })
                        },
                        //description: `--~[ ${profil.balance} $ ]~--`,
                        fields: [
                            {
                                name: `--~[ ${result.xp} xp ]~--`,
                                value: `~[ levels : ${result.level} ]~`
                            },
                        ],
                        timestamp: new Date(),
                        footer: {
                            icon_url: message.author.avatarURL({ dynamic: true }),
                            text: "&balance"
                        }
                    }
                });
            } else message.reply("Vous n'aviez pas encore de profil... bizarre, je vous en créé un.")

           
        })        
        

    }

};