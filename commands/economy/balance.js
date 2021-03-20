const Schem = require("../../modules/schema_eco")

module.exports = {
    name: "balance",
    description: 'voir la moula',
    execute(message, args) {
        let demandedUser
        if (args[0] === undefined) demandedUser = message.author
        else demandedUser = message.mentions.users.map(user)
        console.log(demandedUser.id)    
        Schem.findOne({
            server: message.guild,
            user_ID: demandedUser.id
        }, (err, profil) => {
            message.channel.send({
                embed: {
                    color: 0xffd700,
                    title: `balance de ${demandedUser.username}`,
                    thumbnail: {
                        url: message.author.avatarURL({ dynamic: true })
                    },
                    //description: `--~[ ${profil.balance} $ ]~--`,
                    fields: [
                        {
                            name: `--~[ ${profil.balance} $ ]~--`,
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

        }
        )
    }

};