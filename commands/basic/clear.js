const { Permissions, GuildMember } = require("discord.js");

module.exports = {
    name: 'clear',
    description: 'Suprimme des messages.',
    execute(message, args) {
        //if message.author.permissions = ('MANAGE_MESSAGES') && message.author.flags('ADMINISTRATOR') {
            const amount = parseInt(args[0]);

                if (isNaN(amount)) {
                    return message.reply(`T'as oublié de mettre un nombre dumbass ! ►${prefix}clear [Nombre]◄`);
                }
                else if (amount < 1 || amount >= 100) {
                    return message.reply("Le nombre doit etre entre 1 et 100, t'as compris ?!");
                }

                message.channel.bulkDelete(amount + 1)
                    
                    .then(messages => message.channel.send(`\`${messages.size - 1} messages suprimés.\``));
        //}
    }

};