import { Composer } from "grammy";

export const onStart = new Composer();

onStart.command("start", (ctx) => {
    ctx.reply(
        "*Welcome\\!* \n\nGuess the *WORDLE* in six tries\\. Each guess must be a valid five\\-letter word\\. Hit the enter button to submit\\. After each guess, the color of the tiles will change to show how close your guess was to the word\\.",
        {
            parse_mode: "MarkdownV2",
        }
    );
});
