const Discord = require('discord.js');

const client = new Discord.Client();



client.on('ready', () => {

    console.log('I am ready!');

});



client.on('message', message => {

    if (message.content === 'ping') {

    	message.reply('pong');

  	}

});



// THIS  MUST  BE  THIS  WAY

client.login(NTQyNDA0ODQ5OTY3MzAwNjI5.D2QXNQ.06ZOre066bdAXfHWSO1XmmlXb0M);
