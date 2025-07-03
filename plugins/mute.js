const { cmd } = require('../command');

cmd({
  pattern: 'mute',
  desc: 'Mute the group (only admins can send messages).',
  category: 'group',
  filename: __filename
}, async (robin, mek, m, { from, isGroup, isAdmins, isBotAdmins, reply }) => {
  try {
    if (!isGroup) return reply('⚠️ This command can only be used in a group!');
    if (!isAdmins) return reply('⚠️ Only group admins can use this command!');
    if (!isBotAdmins) return reply('⚠️ I need to be an admin to mute the group!');
    await robin.groupSettingUpdate(from, 'announcement');
    reply('🔇 Group has been muted. Only admins can send messages.');
  } catch (e) {
    reply('❌ Failed to mute the group.');
  }
}); 