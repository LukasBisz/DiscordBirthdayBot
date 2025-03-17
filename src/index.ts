import { Client, IntentsBitField, REST } from "discord.js";
import { config } from "./config";
import { registerCommands } from "./register-commands";
import { addBday } from "./commands/add-bday";
import { addBdayInteraction } from "./interactions/add-bday-interaction";
import { connectToDatabase } from "./database/sequelize-config";
import { checkForBday, cronJob } from "./check-for-bday";
import { DateTime } from "luxon";
import { removeBday } from "./commands/remove-bday";
import { removeBdayInteraction } from "./interactions/remove-bday-interactions";

export const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
  ],
});

export const channelId = config.CHANNEL_ID;

client.on("ready", async (c) => {
  await connectToDatabase();
  await registerCommands();
  cronJob.start();
  console.log(`⏰ Cronjob has been started at ${DateTime.now().toJSDate()}`);
  console.log(`${c.user.username} is online! 🤖`);
});

client.on("interactionCreate", async (interaction) => {
  if (interaction.isChatInputCommand()) {
    addBday(interaction);
    removeBday(interaction);
  }
  if (interaction.isModalSubmit()) {
    addBdayInteraction(interaction);
    removeBdayInteraction(interaction);
  }
});

client.login(config.DISCORD_TOKEN);
const rest = new REST({ version: "10" }).setToken(config.DISCORD_TOKEN);
