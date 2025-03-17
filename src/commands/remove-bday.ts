import {
  ActionRowBuilder,
  CacheType,
  ChatInputCommandInteraction,
  ModalBuilder,
  TextInputBuilder,
  TextInputStyle,
} from "discord.js";
import { channelId } from "..";

export async function removeBday(
  interaction: ChatInputCommandInteraction<CacheType>
) {
  if (!interaction.channel || interaction.channel.id !== channelId) {
    return await interaction.reply({
      content: "❌ You can only use this command in the designated channel!",
      ephemeral: true,
    });
  }
  if (interaction.commandName === "remove-birthday") {
    const modal = new ModalBuilder()
      .setCustomId("remove-birthday")
      .setTitle("Remove a Birthday from the Bot");

    const removeBirthdayIdInput = new TextInputBuilder()
      .setCustomId("removeBirthdayIdInput")
      .setRequired(true)
      .setStyle(TextInputStyle.Short)
      .setMinLength(16)
      .setLabel("What's your Discord User ID?")
      .setPlaceholder("e.g. 1247578731678138399");

    const firstActionRow =
      new ActionRowBuilder<TextInputBuilder>().addComponents(
        removeBirthdayIdInput
      );
    modal.addComponents(firstActionRow);

    interaction.showModal(modal);
  }
}
