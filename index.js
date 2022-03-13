const { Telegraf } = require('telegraf');
const BOT_TOKEN = '5130358506:AAGXTqvVJWnr5EQ5iVOH5R1B_mcXwUYxHjg';

const bot = new Telegraf(BOT_TOKEN);

bot.command('/sayhello', (ctx) => {
  ctx.reply('Hello!');
})
bot.hears('Привет', (ctx) => {
  ctx.reply('Привет!')
})

bot.launch();