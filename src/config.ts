import dotenv from "dotenv";

dotenv.config();

const { DISCORD_TOKEN, DISCORD_CLIENT_ID, GUILD_ID } = process.env;

if (!DISCORD_TOKEN || !DISCORD_CLIENT_ID || !GUILD_ID) {
  throw new Error("Missing environment variables");
}

export const config = {
  DISCORD_TOKEN,
  DISCORD_CLIENT_ID,
  GUILD_ID,
};

export const regexPatterns = {
  text: /^[A-Za-z]*$/,
  date: /(?:(?:31\.?(?:0?[13578]|1[02]))|(?:(?:29|30)\.?(?:0?[13-9]|1[0-2])))$|^(?:29\.?0?2)$|^(?:0?[1-9]|1\d|2[0-8])\.?(?:(?:0?[1-9])|(?:1[0-2]))*$/,
};
