import { ModalSubmitInteraction } from "discord.js";

export async function addBdayInteraction(interaction: ModalSubmitInteraction) {
  if (interaction.customId === "add-birthday") {
    const name = interaction.fields.getTextInputValue("nameInput");
    const discordUid =
      interaction.fields.getTextInputValue("discordUserIdInput");
    const date = interaction.fields.getTextInputValue("dateInput");
    console.log({ name, discordUid, date }); //console log
    await interaction.reply({
      content: "Your submission was received sucessfully!", //message to user
      ephemeral: true,
    });
  }
}
