import { Composer } from "grammy";
import { MyContext } from "./MyContext";

export const onGame = new Composer<MyContext>();

onGame.command("game", (ctx) => {
    startGame(ctx);
});

function startGame(ctx: MyContext) {
    if (ctx.session.currentlyInGame) {
        ctx.reply("Finish your old Wordle first!");
        return;
    }
    
    const wordToGuess = fakeWords[getRandomInt(fakeWords.length)];
    ctx.session.lastWord = wordToGuess;

    console.log(ctx.session);
}

function getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
}

const fakeWords = ["steak", "among", "queue", "start", "phone"];
