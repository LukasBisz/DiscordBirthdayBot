import { DateTime } from "luxon";
import { CronJob } from "cron";
import { birthday } from "./database/birthday-model";
import { EmbedBuilder } from "discord.js";
import { channelId, client } from ".";
import { config } from "./config";

export const cronJob = new CronJob("01 0 * * *", function () {
  checkForBday();
});

export async function checkForBday() {
  const getCurrentDate = DateTime.now().toFormat("MM.dd");
  const getDateWithYear = DateTime.now().toISODate();

  const getBirthdayDate = await birthday.findAll({
    where: { birthdate: getCurrentDate },
  });

  if (getBirthdayDate.length > 0) {
    const channel = await client.channels.fetch(channelId);

    getBirthdayDate.forEach(async (birthdayRecord) => {
      if (
        birthdayRecord.lastDisplayedAt &&
        birthdayRecord.lastDisplayedAt.toString() === getDateWithYear
      ) {
        return;
      }

      const user = await client.users.fetch(birthdayRecord.birthdayUserId);
      const bot = await client.users.fetch(config.DISCORD_CLIENT_ID);

      const birthdayEmebed = new EmbedBuilder()
        .setTitle(`**Happy Birthday**`)
        .setColor(0xff6347)
        .setThumbnail(`${user.displayAvatarURL({ size: 512 })}`)
        .setDescription(
          `Hey, it's time to **celebrate!** 🎉
          Today is <@!${birthdayRecord.birthdayUserId}>'s birthday.
          Let's wish them a **Happy Birthday**!`
        )
        .addFields({
          name: " ",
          value: "BirthdayBot wishes you a **Wonderful** day.",
        })
        .setFooter({
          text: "via BirthdayBot",
          iconURL: `${bot.displayAvatarURL()}`,
        })
        .setTimestamp();

      if (channel && channel.isTextBased()) {
        channel.send({ embeds: [birthdayEmebed] }).then((embedMessage) => {
          embedMessage.react("🎉");
        });
      }

      await birthday.update(
        { lastDisplayedAt: getDateWithYear },
        { where: { id: birthdayRecord.id } }
      );
    });
  } else {
    return;
  }
}
