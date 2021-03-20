const fs = require('fs');
const mongoose = require('mongoose');
const Discord = require('discord.js');
const Eco = require('./modules/economie');

const { prefix, token } = require('./config.json');

const client = new Discord.Client();
client.commands = new Discord.Collection();

mongoose.connect("mongodb+srv://Bafbi:4c3o8dJcvs0SZnSb@oasisbot.uy5oh.mongodb.net/Oasis(test)?retryWrites=true&w=majority", {useUnifiedTopology: true, useNewUrlParser: true}).then(() => console.log("Mongodb Connecté"));

const commandDirectory = fs.readdirSync('./commands');

for (const directory of commandDirectory) {
    const commandFiles = fs.readdirSync(`./commands/${directory}`).filter(file => file.endsWith('.js'));

    for (const file of commandFiles) {
        const command = require(`./commands/${directory}/${file}`);
        client.commands.set(command.name, command);
}
}



client.once('ready', () => {
    console.log(`Ready! le préfix est "${prefix}"`);
    //client.channels.fetch('746127737571246161').then(channel => channel.send(`Bot`)).catch(console.error);
    client.user.setActivity('moi', { type: 'WATCHING' });   
});


//client.user.setActivity('discord.js', { type: 'WATCHING' });
//client.user.setAFK('true');

client.on('message', message => {
    Eco.profilUpdate(message)
    if (!message.content.startsWith(prefix) || message.author.bot) return;

        const args = message.content.slice(prefix.length).split(/ +/);
        const command = args.shift().toLowerCase();
        //console.log(client.commands)
        if (!client.commands.has(command)) return;

        try {
            client.commands.get(command).execute(message, args);
        } catch (error) {
            console.error(error);
            //message.reply("Une erreur s'est produite pendant l'exécution de la commande !");
            message.channel.send({
                embed: {
                    color: 0xe43333,
                    title: `Erreur`,
                    thumbnail: {
                        url: 'https://images.emojiterra.com/mozilla/512px/274c.png'
                    },
                    fields: [
                        {
                            name: `Raison`,
                            value: `${message.author.tag} vous n'avez pas la permission d'utiliser cette commande.`
                        },
                    ],
                    timestamp: new Date(),
                    footer: {
                        icon_url: (client.user.avatarURL({ dynamic: true })),
                        text: (client.user.username)
                    }
                }
            });
        }

})




client.login(token);