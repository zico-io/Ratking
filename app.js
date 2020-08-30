// Import the discord.js module
const Discord = require('discord.js');

// Load config json
const config = require("./config.json");

// Create an instance of a Discord client
const client = new Discord.Client();

// Load environment variables
require('dotenv').config();

const env = {
  token: process.env.TOKEN,
  owner: process.env.OWNER
};

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

// Create an event listener for messages
client.on('message', msg => {
    // Check for ping
  if (msg.content === 'ping') {
    msg.reply('pong');
  }
});

// Bot login
client.login(env.token);