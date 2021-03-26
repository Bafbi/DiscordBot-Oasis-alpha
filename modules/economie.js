const Schem = require("./schema_eco")

module.exports = {
    profilUpdate(message) {
        Schem.findOne({
            server: message.guild,
            user_ID: message.author.id
        }, (err, profil) => {
            if(err) console.log(err)
            if(!profil){
                console.log("new profil account")
                let account = new Schem({
                    server: message.guild,
                    user_ID: message.author.id,
                    pseudo: message.author.username,
                    xp: 10,
                    level: 1,
                    
                    balance: 100,
                    
                })
                account.save()
            }
            else{
                console.log("gain xp/money")
                profil.xp ++
                profil.balance += 10
                //profil.moneyRank = reloadxpRank(message, profil)
                //let main_level = profil.level;
                //let next_level = profil.level * 15
                if(profil.level * 15 <= profil.xp){
                    profil.level ++
                    message.channel.send(`Bravo ${message.author} vous venez de passer levels ${profil.level}`)
                }
                profil.save()
            }
        }
        )
    },

}

function reloadxpRank(message, profil) {
    console.log("here")
    Schem.findOne({
        server: message.guild,
        moneyRank: profil.moneyRank
    }, (err, profilDown) => {
        if(err) console.log(err)
        if (profilDown.balance > profil.moneyRank) {
            console.log("echange")
            profil.moneyRank --
            profilDown.moneyRank ++
            profilDown.save()
            return profil.moneyRank
        }
        
    }
    )
}