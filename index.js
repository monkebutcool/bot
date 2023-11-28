const { AoiClient } = require("aoi.js");

const client = new AoiClient({
  token: process.env.token,
  prefix: "4FNCM3731RfcGsjTnjb9gOYYHghZs8NMjs3ZU6J1uACD2TSwckpgDVcjKNzB1s7UrjpVMYmktya2FcEoZ2Symnd8pjcJnpJ3wf01",
  intents: ["Guilds", "GuildMessages", "MessageContent"],
  events: ["onMessage", "onInteractionCreate"],
  database: {
    type: "aoi.db",
    db: require("@akarui/aoi.db"),
    tables: ["main"],
    path: "./database/",
    extraOptions: {
      dbType: "KeyValue",
    },
  },
});

client.loadCommands("./commands/", true);
