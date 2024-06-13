import { REST, Routes, ApplicationCommandOptionType } from "discord.js";
import { config } from "./config";

const commands = [];

const rest = new REST({ version: "10" }).setToken(config.DISCORD_TOKEN);

(async () => {
  try {
    console.log("Registering (/) commands...");
    await rest.put(
      Routes.applicationGuildCommands(
        config.DISCORD_CLIENT_ID,
        config.GUILD_ID
      ),
      { body: commands }
    );

    console.log("(/) commands were registered successfully!");
  } catch (error) {
    console.log(`There was an error: ${error}`);
  }
})();
