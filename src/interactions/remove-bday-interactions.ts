import { ModalSubmitInteraction } from "discord.js";
import { birthday } from "../database/birthday-model";

export async function removeBdayInteraction(
  interaction: ModalSubmitInteraction
) {
  if (interaction.customId === "remove-birthday") {
    const removeBirthdayIdInput = interaction.fields.getTextInputValue(
      "removeBirthdayIdInput"
    );

    const userFetch = await birthday.findOne({
      where: { addedById: removeBirthdayIdInput },
    });

    if (removeBirthdayIdInput === userFetch?.addedById) {
      await birthday.destroy({
        where: { id: userFetch.id },
      });
    } else {
      await interaction.reply({
        content:
          "❌ The provided Discord user Id couldnt be found in our database!",
        ephemeral: true,
      });
    }

    await interaction.reply({
      content: "The birthday was deleted succesfully!",
      ephemeral: true,
    });
  }
}
