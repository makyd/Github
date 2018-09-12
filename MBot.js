const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');
const prefix = "!";
var tagReply = require('./chatCommands');

client.on('message', (receivedMessage) => tagReply.replyBot(client.user, receivedMessage))



client.login(config.token);
