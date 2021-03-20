module.exports = {
    name: 'ping',
    description: 'Test de connection du bot.',
    execute(message) {
        message.channel.send('pong!');
    }

};