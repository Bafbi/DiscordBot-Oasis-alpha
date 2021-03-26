const profils = require("../../modules/profil");

module.exports = {
    name: 'bal',
    description: "test d'un autre truc",
    execute(message, args) {
        const profil = profils.profilsAccess(message.guild.id, message.author.id, message.author.username)
        profil.then((result) => {
            if (result) {
                message.channel.send({
                    embed: {
                        color: 0xffd700,
                        title: `balance de ${result.pseudo}`,
                        thumbnail: {
                            url: message.author.avatarURL({ dynamic: true })
                        },
                        //description: `--~[ ${profil.balance} $ ]~--`,
                        fields: [
                            {
                                name: `--~[ ${result.balance} $ ]~--`,
                                value: "----------------"
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