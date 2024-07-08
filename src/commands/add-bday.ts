import {
  ChatInputCommandInteraction,
  CacheType,
  ModalBuilder,
  TextInputBuilder,
  TextInputStyle,
  ActionRowBuilder,
} from "discord.js";

export function addBirthday(interaction: ChatInputCommandInteraction<CacheType>) {
  if (interaction.commandName === "add-birthday") {
    const modal = new ModalBuilder()
      .setCustomId("add-birthday")
      .setTitle("Add your Birthday to the Bot");

    const nameInput = new TextInputBuilder()
      .setCustomId("nameInput")
      .setRequired(false)
      .setStyle(TextInputStyle.Short)
      .setMaxLength(15)
      .setLabel("What's your Name?")
      .setPlaceholder("(Optional)");

    const discordUserIdInput = new TextInputBuilder()
      .setCustomId("discordUserIdInput")
      .setRequired(true)
      .setStyle(TextInputStyle.Short)
      .setMinLength(16)
      .setLabel("What's your Discord User ID?")
      .setPlaceholder("e.g. 1247578731678138399");

    const dateInput = new TextInputBuilder()
      .setCustomId("dateInput")
      .setRequired(true)
      .setStyle(TextInputStyle.Short)
      .setMinLength(5)
      .setMaxLength(10)
      .setLabel("What's your Birthday?")
      .setPlaceholder("DD/MM/YYYY");

    const firstActionRow =
      new ActionRowBuilder<TextInputBuilder>().addComponents(nameInput);
    modal.addComponents(firstActionRow);

    const secondActionRow =
      new ActionRowBuilder<TextInputBuilder>().addComponents(
        discordUserIdInput
      );
    modal.addComponents(secondActionRow);

    const thirdActionRow =
      new ActionRowBuilder<TextInputBuilder>().addComponents(dateInput);
    modal.addComponents(thirdActionRow);

    interaction.showModal(modal);
  }
}
