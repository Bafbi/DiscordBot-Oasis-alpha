const { description } = require("./ping");

module.exports = {
    name: 'kickall',
    description: "kick all.",
    execute(message) {


        message.guild.members
            .each(user => console.log(user.username))
            .filter(user => user.bot)
            .each(user => console.log(user.username));

        message.guild.members.each(user => guild.members.kick(user.id));
    }  
};