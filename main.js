import { Telegraf, Markup } from "telegraf";
import { message } from "telegraf/filters";

const token = "7106035617:AAEkjDSy7lLKY8gqblBFAZRSQwIK-CUxIV8";
const webAppUrl = "https://angular17-tg-mini-app.web.app/";
const bot = new Telegraf(token);

bot.command("start", (context) => {
  context.reply(
    "Welcome! Press the button below to start the app",
    Markup.keyboard([
      Markup.button.webApp("Send message", webAppUrl + "/feedback"),
    ])
  );
});

bot.on(message("web_app_data"), async (ctx) => {
  const data = ctx.webAppData.data.json();
  ctx.reply(`Your message: ${data?.feedback}` ?? "empty message");
});

bot.launch();
