import { REST, Routes } from "discord.js";
import { config } from "./config";

const commands = [
  {
    name: "add-birthday",
    description: "Adds a Birthday to the bot",
  },
  {
    name: "remove-birthday",
    description: "Removes Birthday from the bot",
  },
];

export async function registerCommands() {
  const rest = new REST({ version: "10" }).setToken(config.DISCORD_TOKEN);

  console.log("Registering (/) commands...");
  await rest.put(
    Routes.applicationGuildCommands(
      config.DISCORD_BOT_CLIENT_ID,
      config.GUILD_ID
    ),
    { body: commands }
  );
  console.log("(/) commands were registered successfully!");
}
