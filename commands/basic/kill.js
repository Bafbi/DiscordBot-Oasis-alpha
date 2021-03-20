module.exports = {
    name: 'kill',
    description: 'Pour tuer quelqu\'un.',
    execute(message, args) {
        if (args[0] === undefined) {
            message.channel.send(`${message.author} vient de se suicider, quel débile !`);
        }

        const killList = message.mentions.users.map(user => {
            return `${user.username} vient de mourir !`;
        });
        
        message.channel.send(killList);
        
    }

};