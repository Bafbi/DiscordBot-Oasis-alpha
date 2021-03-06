const Schem = require("./schema_eco")

module.exports.profilsAccess = async (server, user_ID, pseudo) => {
    console.log(`==>Running FindOne() for profilsAccess of ${pseudo}`)
    const result = await Schem.findOne({
        server,
        user_ID
    })
    //console.log(result)
    if (!result) {
        //this.profilUpdate(server, user_ID, pseudo)
        /*console.log(`${pseudo} get a new profil...`)
        new Schem({
            server: server,
            user_ID: user_ID,
            pseudo: pseudo,
            xp: 10,
            level: 1,
            balance: 100,        
        }).save()
        console.log(`...Profil save`)*/
    } else {
        //console.log(`...return FindOne result ${result}`)
        return result
    }
}

module.exports.profilUpdate = (message) => {
    console.log(`==>Running FindOne() for profilUpdate of ${message.author.username}`)
    Schem.findOne({
        server: message.guild.id,
        user_ID: message.author.id
    }, (err, result) => {
        if (err) console.log(err)
        if (result) {
            result.balance += 10
            result.xp += 1
            if (result.xp / 15 > result.level) {
                result.level = Math.trunc(result.xp / 15) + 1
                message.reply("levels up")
            }
            console.log("gain xp/money")
            result.save()
        } else {
            console.log(`get a new profil...`)
            new Schem({
                server: message.guild.id,
                user_ID: message.author.id,
                pseudo: message.author.username,
                xp: 10,
                level: 1,
                balance: 100,        
            }).save()
            console.log(`...Profil save`)
        }
        
    })
}