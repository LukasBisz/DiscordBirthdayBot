import { ModalSubmitInteraction } from "discord.js";
import { regexPatterns } from "../config";
import { birthday } from "../database/birthday-model";
import { DateTime } from "luxon";
import { checkForBday } from "../check-for-bday";

export async function addBdayInteraction(interaction: ModalSubmitInteraction) {
  if (interaction.customId === "add-birthday") {
    const nameInput = interaction.fields.getTextInputValue("nameInput");

    const birthdayUserIdInput =
      interaction.fields.getTextInputValue("birthdayIdInput");

    const dateInput = interaction.fields.getTextInputValue("dateInput");
    const formatedDate = DateTime.now().toFormat("MM.dd");

    const yearInput = interaction.fields.getTextInputValue("yearInput");

    const addedByIdInput = interaction.user.id;

    if (isNaN(+birthdayUserIdInput)) {
      await interaction.reply({
        content:
          "There was an error with the Provided Discord ID; please use numbers only.",
        ephemeral: true,
      });
      return;
    }

    const existingBirthdayUserId = await birthday.findOne({
      where: { birthdayUserId: birthdayUserIdInput },
    });

    if (existingBirthdayUserId) {
      await interaction.reply({
        content: "The provided Discord User ID was already added to the Bot",
        ephemeral: true,
      });
      return;
    }

    if (!regexPatterns.text.test(nameInput)) {
      await interaction.reply({
        content:
          "There was an error with your Name input; please use letters only.",
        ephemeral: true,
      });
      return;
    }

    if (dateInput.length !== 5) {
      await interaction.reply({
        content:
          "There was an error with your Date input; dates must be 5 characters long",
        ephemeral: true,
      });
      return;
    }

    if (!regexPatterns.date.test(dateInput)) {
      await interaction.reply({
        content:
          "There was an error with your birthdate input; please follow the example.",
        ephemeral: true,
      });
      return;
    }

    if (yearInput === "") {
    } else {
      if (!regexPatterns.year.test(yearInput)) {
        await interaction.reply({
          content:
            "There was an error with your birth year input; please follow the example.",
          ephemeral: true,
        });
        return;
      }
    }

    const insert = new birthday({
      name: nameInput,
      birthdayUserId: birthdayUserIdInput,
      birthdate: formatedDate,
      birthYear: yearInput,
      addedById: addedByIdInput,
    });
    insert.save();

    await interaction.reply({
      content: "Your submission was received sucessfully!",
      ephemeral: true,
    });
    checkForBday();
  }
}
