import { Bot, session } from "grammy";
import { config } from "dotenv";
config();
import * as wordnet from "wordnet";
await wordnet.init();

import { onStart } from "./onStart.js";
import { onInfo } from "./onInfo.js";
import { onGame } from "./onGame.js";
import { initializeSessionData } from "./initializeSessionData.js";
import { MyContext } from "./MyContext";

const BOT_TOKEN = process.env.BOT_TOKEN;

const bot: Bot = new Bot<MyContext>(BOT_TOKEN);

bot.use(session({ initial: initializeSessionData }));
bot.use(onStart).use(onInfo).use(onGame);

bot.start();
