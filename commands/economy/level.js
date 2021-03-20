const Schem = require("../../modules/schema_eco")

module.exports = {
    name: "level",
    description: 'voir le level',
    execute(message, args) {
        Schem.findOne({
            server: message.guild,
            user_ID: message.author.id
        }, (err, profil) => {
            message.channel.send({
                embed: {
                    color: 0xffd700,
                    title: `xp de ${message.author.username}`,
                    thumbnail: {
                        url: message.author.avatarURL({ dynamic: true })
                    },
                    //description: `--~[ ${profil.xp} xp ]~--`,
                    fields: [
                        {
                            name: `--~[ ${profil.xp} xp ]~--`,
                            value: `~[ levels : ${profil.level} ]~`
                        },
                    ],
                    timestamp: new Date(),
                    footer: {
                        icon_url: message.author.avatarURL({ dynamic: true }),
                        text: "&level"
                    }
                }
            });

        }
        )
    }

};