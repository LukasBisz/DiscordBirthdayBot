import dotenv from "dotenv";

dotenv.config();

const { DISCORD_TOKEN, DISCORD_BOT_CLIENT_ID, GUILD_ID, CHANNEL_ID } =
  process.env;

if (!DISCORD_TOKEN || !DISCORD_BOT_CLIENT_ID || !GUILD_ID || !CHANNEL_ID) {
  throw new Error("Missing environment variables");
}

export const config = {
  DISCORD_TOKEN,
  DISCORD_BOT_CLIENT_ID,
  GUILD_ID,
  CHANNEL_ID,
};

export const regexPatterns = {
  text: /^[A-Za-z]*$/,
  date: /^(0[1-9]|[12][0-9]|30)\.(04|06|09|11)$|^(0[1-9]|[12][0-9]|31)\.(01|03|05|07|08|10|12)$|^(0[1-9]|1[0-9]|2[0-8])\.02$|^29\.02$/,
  year: /^(19|2[0-9])\d{2}$/, //Year 1900 to 2999
};
