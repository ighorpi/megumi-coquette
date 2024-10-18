import { Injectable } from '@nestjs/common';
import { EmbedBuilder } from 'discord.js';
import { Context, SlashCommand, SlashCommandContext } from 'necord';

@Injectable()
export class AppService {
  @SlashCommand({
    name: 'mahoraga',
    description: 'Summon Mahoraga',
  })
  public async onMahoraga(@Context() [interaction]: SlashCommandContext) {
    const embed = new EmbedBuilder()
      .setTitle(`furube yura yura...\n`)
      .setImage(
        'https://media1.tenor.com/m/5LLZBqp69sQAAAAC/with-this-treasure-i-summon-mahoraga.gif',
      );
    return await interaction.reply({
      embeds: [embed],
    });
  }
}
