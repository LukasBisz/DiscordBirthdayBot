import {
  Client,
  IntentsBitField,
  REST,
} from "discord.js";
import { config } from "./config";
import { registerCommands } from "./register-commands";
import { addBirthday } from "./commands/add-bday";
import { addBdayInteraction } from "./interactions/add-bday-interaction";

const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
  ],
});

client.on("ready", async (c) => {
  await registerCommands();
  console.log(`${c.user.username} is online! 🤖`);
});

client.on("interactionCreate", async (interaction) => {
  if (interaction.isChatInputCommand()) {
    addBirthday(interaction);
  }
  if (interaction.isModalSubmit()) {
    addBdayInteraction(interaction);
  }
});

client.login(config.DISCORD_TOKEN);
const rest = new REST({ version: "10" }).setToken(config.DISCORD_TOKEN);
