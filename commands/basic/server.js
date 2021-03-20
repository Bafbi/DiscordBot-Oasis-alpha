module.exports = {
    name: 'server',
    description: 'Information du serveur.',
    execute(message) {
        message.channel.send(`Nom du serveur : ${message.guild.name}
        \nNombre d'utilisateurs : ${message.guild.memberCount}
        \nNombre de connectés : ${message.guild.description}`);
    }

};