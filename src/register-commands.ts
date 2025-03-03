import { REST, Routes } from "discord.js";
import { config } from "./config";

const commands = [
  {
    name: "add-birthday",
    description: "Adds Birthday to bot",
  },
];

export async function registerCommands() {
  const rest = new REST({ version: "10" }).setToken(config.DISCORD_TOKEN);

  console.log("Registering (/) commands...");
  await rest.put(
    Routes.applicationGuildCommands(config.DISCORD_CLIENT_ID, config.GUILD_ID),
    { body: commands }
  );
  console.log("(/) commands were registered successfully!");
}
