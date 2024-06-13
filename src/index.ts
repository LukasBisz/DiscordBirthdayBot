import {
  Client,
  EmbedBuilder,
  IntentsBitField,
  InteractionCollector,
} from "discord.js";
import { config } from "./config";

const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
  ],
});

client.on("ready", (c) => {
  console.log(`${c.user.username} is online! 🤖`);
});

client.on("interactionCreate", (interaction) => {
  if (!interaction.isChatInputCommand()) return;
});

client.login(config.DISCORD_TOKEN);