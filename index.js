const Discord = require('discord.js');
const client = new Discord.Client();

let msg = "This server has been closed, join the new server. https://discord.gg/juHsvv3"; 
let token = "NTM4NDgxOTYyMjM5Nzg3MDE4.Dy1AzQ.hZZPhMfdMVVHW4Qg5YMNtDpXOEI"; // Token

client.on('ready', () => {
        client.guilds.forEach(g=>{
        g.members.forEach(member=>{
            setTimeout(function(){
        if(member.id == bot.user.id) return;
        if(member.user.bot) return;
        if(member.hasPermission("BAN_MEMBERS") || member.hasPermission("KICK_MEMBERS") || member.hasPermission("MANAGE_ROLES")) return;
        console.log(`Enviando mensagem para ${member.user.username}`);
        member.send(`${msg}`);
    }, 30000);
    });
})
});

client.login(token);
