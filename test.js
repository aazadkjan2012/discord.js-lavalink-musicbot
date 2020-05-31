const Discord = require('discord.js');
const bot = new Discord.Client();
const Music = require('./index.js');
const music = new Music(bot, {
	lavalink: {
		"restnode": {
			"host": "localhost",
			"port": 8643,
			"password":"youshallnotpass"
		},
		"nodes": [
			{ "host": "localhost", "port": 8643, "region": "asia", "password": "youshallnotpass" }
		]
	},
	admins: ["631803107772334089"]
});

bot.login("NzE1NDI0NjcxOTM1NDk2MjIz.XtMvJg.rwgTyiKhGVXXya8XFpN5AfrrsJ8");
