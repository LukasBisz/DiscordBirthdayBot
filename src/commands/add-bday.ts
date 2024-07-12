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

    const birthdayIdInput = new TextInputBuilder()
      .setCustomId("birthdayIdInput")
      .setRequired(true)
      .setStyle(TextInputStyle.Short)
      .setMinLength(16)
      .setLabel("What's your Discord User ID?")
      .setPlaceholder("e.g. 1247578731678138399");

    const dateInput = new TextInputBuilder()
      .setCustomId("dateInput")
      .setRequired(true)
      .setStyle(TextInputStyle.Short)
      .setMinLength(3)
      .setMaxLength(5)
      .setLabel("What's your Birthday?")
      .setPlaceholder("DD.MM");

    const firstActionRow =
      new ActionRowBuilder<TextInputBuilder>().addComponents(nameInput);
    modal.addComponents(firstActionRow);

    const secondActionRow =
      new ActionRowBuilder<TextInputBuilder>().addComponents(
        birthdayIdInput
      );
    modal.addComponents(secondActionRow);

    const thirdActionRow =
      new ActionRowBuilder<TextInputBuilder>().addComponents(dateInput);
    modal.addComponents(thirdActionRow);

    interaction.showModal(modal);
  }
}
