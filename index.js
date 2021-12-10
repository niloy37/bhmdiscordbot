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
		message.channel.send('https://cdn.discordapp.com/attachments/893772731424837642/918747623740043304/Rupomx.jpg');
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
message.channel.send('```Frequency for BHM Radio is  36.66 MHz```');
});


client.on('message', message=> {
	if(message.content === 'bhai')
	message.channel.send(`${message.author} kon bhai, kar bhai?`);
	});

// Set the bot's "Playing: " status (must be in an event!)
client.on("ready", () => {
    client.user.setActivity("Black Hand Mafia Discord", { type: "WATCHING"})
})
	
	client.on('message', message=> {
		if(message.content === '!sajid')
		message.channel.send('Lamiya wants to know your location');
		});
         client.on('message', message=> {
		if(message.content === '!mahdin')
		message.channel.send('Dudu dekhan. Dudu na dekhaile cole gelam');
		});
        client.on('message', message=> {
		if(message.content === '!haxor')
		message.channel.send('Why do you want to contact with that madarxod?');
		});
         client.on('message', message=> {
		if(message.content === '!pang')
		message.channel.send('Good Morning');
		});
         client.on('message', message=> {
		if(message.content === '!havoc')
		message.channel.send('https://cdn.discordapp.com/attachments/893772731424837642/918746758283157535/havoc.jpg');
		});
        client.on('message', message=> {
		if(message.content === '!emon')
		message.channel.send('https://cdn.discordapp.com/attachments/893772731424837642/918748802473680966/EmonEEEE.jpg');
		});
        client.on('message', message=> {
		if(message.content === '!maaj')
		message.channel.send('You mean toxic maaj?');
		});

        client.on('message', message=> {
		if(message.content === '!dimion')
		message.channel.send('You mean shotgun?');
		});

       client.on('message', message=> {
		if(message.content === '!oze')
		message.channel.send('Anyone renting GPU??');
		});

		client.on('message', message=> {
			if(message.content === '!wasi')
			message.channel.send('Rama Rama, Errrama');
			});
       
//                  client.on('message', message=> {
// 			if(message.content === '!havoc')
// 			message.channel.send('Loves Bindi'); 		
// 		       });
 

              client.on('message', message=> {
			if(message.content === '!pasha')
			message.channel.send('behen ki lawre');
			});
	


client.on('message', message=> {
	if(message.content === 'Havoc')
	message.channel.send( `${message.author}, Havoc has been notified, please wait for his response.`);
	});

	client.on('message', message=> {
		if(message.content === 'Oze')
		message.channel.send(`${message.author}, Ozemandias has been notified, please wait for his response.`);
		});

		client.on('message', message=> {
			if(message.content === 'Rupom')
			message.channel.send(`${message.author}, Rupom has been notified, please wait for his response.`);
			});
		
	
 client.on("message", (message) => {

	if (message.author.bot || !message.member.roles.cache.has(config["announcer-role"]) || !message.content.startsWith("!")  ) return;
	  
	const args = message.content.slice(1).trim().split(' ');
	const command = args.shift().toLowerCase();
  //this is a test
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


//end
  

client.login(process.env.token);
