const Discord = require('discord.js');
const bot = new Discord.Client();
const config = require('dotenv').config();

bot.login(process.env.BOT_TOKEN);

bot.on('message', message =>{
    if(message.content.startsWith('teste')){
        message.channel.send('que bot bom');
    }
})