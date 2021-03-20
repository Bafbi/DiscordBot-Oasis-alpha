const { description } = require("./ping");

module.exports = {
    name: 'pp',
    description: "Affiche L'avatar de la personne selectionné.",
    execute(message) {

        const { MessageEmbed } = require('discord.js'); 

        if (!message.mentions.users.size) {
            //return message.channel.send(`Votre avatar est : ${message.author.displayAvatarURL({ format: 'png' })}`); 
            const pp = new MessageEmbed()
                .setAuthor(message.author.tag)
                .setTitle('Votre avatar est :')
                .setColor("8C0C3C")
                .setImage(message.author.displayAvatarURL({ dynamic : true })) 
            message.channel.send(pp);
        }

        const avatarList = message.mentions.users.map(user => {
            //return `l'avatar de ${user.tag} est :\n${user.displayAvatarURL({ format: 'png' })}`;
            const pp = new MessageEmbed()
                .setAuthor(message.author.tag)
                .setTitle(`l'avatar de ${user.tag} est :`)
                .setColor("8C0C3C")
                .setImage(user.displayAvatarURL({ dynamic : true }))
            message.channel.send(pp);
        });

        message.channel.send(avatarList);
    }
};