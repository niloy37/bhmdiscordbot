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
		message.channel.send('https://cdn.discordapp.com/attachments/683332734428381247/918867188335669248/175689469_1101295460356055_8288913261650733605_n_1.jpg');
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
		message.channel.send('https://cdn.discordapp.com/attachments/683332734428381247/918868465262137384/12295410_1656312857971494_2339211801915431556_n.jpg');
		});
	client.on('message', message=> {
		if(message.content === '!rahib')
		message.channel.send('https://cdn.discordapp.com/attachments/683332734428381247/918872220909072456/received_735872633792272.jpeg');
		});

       client.on('message', message=> {
		if(message.content === '!oze')
		message.channel.send('https://cdn.discordapp.com/attachments/683332734428381247/918749073480241182/15439905_373521899664537_600511466642628842_n.jpg');
		});

		client.on('message', message=> {
			if(message.content === '!sabid')
			message.channel.send('https://cdn.discordapp.com/attachments/683332734428381247/918867641014317076/20031909_103450856985312_6230515363120431526_n.jpg');
			});
		
			client.on('message', message=> {
			if(message.content === '!shanto')
			message.channel.send('https://scontent.xx.fbcdn.net/v/t1.15752-9/p320x320/264686932_1796677264055760_6513904486538220557_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=aee45a&_nc_eui2=AeGuVf3aMK8kGzcH50-bLrYdm5bVGd-4eVebltUZ37h5V5F7vLchgOXGrdn9qfW4dZs_w9QPjqGcfPb7XXmttnCd&_nc_ohc=HaUO2AcOGIsAX-jsXR5&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVJqtlsiSFWZfGraLhIBFoH8JbTnd9Y3UMwUDr9rPYxxrQ&oe=61DE8A6C');
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
