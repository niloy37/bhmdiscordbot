const Discord = require('discord.js');
const client = new Discord.Client();
const config = require("./config.json");
const config2 = require("./config2.json");
const webhookClient = new Discord.WebhookClient(config.webhookID, config.webhookToken);
const webhookClient2 = new Discord.WebhookClient(config2.webhookID, config2.webhookToken);



client.once('ready', () => {
	console.log('Ready!');
});


client.on('message', message => {
	if (message.content === '!rupom') {
		// send back "Pong." to the channel the message was sent in
		message.channel.send('Loves Bindi.');
	}
});
client.on('message', message => {
	if (message.content === '!xman') {
		// send back "Pong." to the channel the message was sent in
		message.channel.send('Sorry, user has been booked by the Saudi-Sheikhs for tonight!');
	}
});

client.on('message', message=> {
if(message.content === '!radio')
message.channel.send('```Frequency for BHM Radio is  358 MHz```');
});

client.on('message', message=> {
	if(message.content === 'Havoc')
	message.channel.send('Havoc has been notified, please wait for his response.');
	});

	client.on('message', message=> {
		if(message.content === 'Oze')
		message.channel.send('Ozemandias has been notified, please wait for his response.');
		});

		client.on('message', message=> {
			if(message.content === 'Rupom')
			message.channel.send('Rupom has been notified, please wait for his response.');
			});
		
	
 client.on("message", (message) => {

	if (message.author.bot || !message.member.roles.cache.has(config["announcer-role"]) || !message.content.startsWith("!")  ) return;
	  
	const args = message.content.slice(1).trim().split(' ');
	const command = args.shift().toLowerCase();
  
	if (command == "announce") {
	  var announcement = "";
	  for (const word in args) {
		announcement = announcement + args[word] + " ";
	  }
	
	  webhookClient.send(announcement)
	}
  })

  client.on("message", (message) => {

	if (message.author.bot || !message.member.roles.cache.has(config["announcer-role"]) || !message.content.startsWith("!")  ) return;
	  
	const args = message.content.slice(1).trim().split(' ');
	const command = args.shift().toLowerCase();
  
	if (command == "say") {
	  var announcement = "";
	  for (const word in args) {
		announcement = announcement + args[word] + " ";
	  }
	
	  webhookClient2.send(announcement)
	}
  })



  

client.login(process.env.token);