const mf = require("mineflayer");

function handle(){
  const bot = mf.createBot({host: process.env.HOST, port: process.env.PORT, username: process.env.USERNAME, version: "1.19.2"});

  bot.on("login", () => {bot.chat("E");console.log("Joined! Logging server");});
  bot.on("message", (msg)=> {console.log(msg.toAnsi());});
  bot.on("end", handle);
}
handle();
