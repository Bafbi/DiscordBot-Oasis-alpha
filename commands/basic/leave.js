module.exports = {
    name: 'leave',
    description: 'Fait partir le bot.',
    async execute(message, args) {
        if (!message.guild) return;

            message.member.voice.channel.leave();
            message.client.user.setActivity('te regarder', { type: 'PLAYING'});
            
    }

};