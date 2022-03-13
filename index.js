const { Telegraf } = require('telegraf');
const BOT_TOKEN = 'ВАШ ТОКЕН';

const bot = new Telegraf(BOT_TOKEN);

bot.command('/sayhello', (ctx) => {
  ctx.reply('Hello!');
})
bot.hears('Привет', (ctx) => {
  ctx.reply('Привет!')
})

bot.launch();
