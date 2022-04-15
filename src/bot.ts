import { Bot } from "grammy";
import { config } from "dotenv";
config();
const BOT_TOKEN = process.env.BOT_TOKEN;

const bot: Bot = new Bot(BOT_TOKEN);

bot.start();
