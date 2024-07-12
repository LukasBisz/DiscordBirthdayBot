import { ModalSubmitInteraction } from "discord.js";
import { regexPatterns } from "../config";
import { birthday } from "../database/birthday-model";
import { DateTime } from "luxon";

export async function addBdayInteraction(interaction: ModalSubmitInteraction) {
  if (interaction.customId === "add-birthday") {
    const nameInput = interaction.fields.getTextInputValue("nameInput");
    const birthdayIdInput =
      +interaction.fields.getTextInputValue("birthdayIdInput");
    const dateInput = interaction.fields.getTextInputValue("dateInput");
    const formatedDate = DateTime.fromFormat(dateInput, "dd.MM").toJSDate();
    const senderIdInput = +interaction.user.id;

    if (!regexPatterns.letters.test(nameInput)) {
      await interaction.reply({
        content:
          "There was an error with your Name input; please use letters only.",
        ephemeral: true,
      });
      return;
    }

    if (isNaN(+birthdayIdInput)) {
      await interaction.reply({
        content:
          "There was an error with the Provided Discord ID; please use numbers only.",
        ephemeral: true,
      });
      return;
    }

    if (!regexPatterns.date.test(dateInput)) {
      await interaction.reply({
        content:
          "There was an error with your Date input; please follow the example.",
        ephemeral: true,
      });
      return;
    }

    const insert = new birthday({
      name: nameInput,
      birthdayId: birthdayIdInput,
      date: formatedDate,
      senderId: senderIdInput,
    });
    insert.save();

    await interaction.reply({
      content: "Your submission was received sucessfully!",
      ephemeral: true,
    });
  }
}
