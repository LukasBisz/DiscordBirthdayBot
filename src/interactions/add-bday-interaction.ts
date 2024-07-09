import { ModalSubmitInteraction } from "discord.js";
import { regexPatterns } from "../config";


export async function addBdayInteraction(interaction: ModalSubmitInteraction) {
  if (interaction.customId === "add-birthday") {
    const name = interaction.fields.getTextInputValue("nameInput");
    const discordUid =
      interaction.fields.getTextInputValue("discordUserIdInput");
    const date = interaction.fields.getTextInputValue("dateInput");

    if (!regexPatterns.letters.test(name)) {
      await interaction.reply({
        content:
          "There was an error with your Name input; please use letters only.",
        ephemeral: true,
      });
      return;
    }

    if (isNaN(+discordUid)) {
      await interaction.reply({
        content:
          "There was an error with your Discord User ID input; please use numbers only.",
        ephemeral: true,
      });
      return;
    }

    if (!regexPatterns.date.test(date)) {
      await interaction.reply({
        content:
          "There was an error with your Date input; please follow the example.",
        ephemeral: true,
      });
      return;
    }

    console.log({ name, discordUid, date }); //console log
    await interaction.reply({
      content: "Your submission was received sucessfully!", //message to user
      ephemeral: true,
    });
  }
}
