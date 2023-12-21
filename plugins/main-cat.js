import { exec } from 'child_process';
import speed from 'performance-now';
import cheerio from 'cheerio';
import fetch from 'node-fetch';

let handler = async (m, {
  conn,
  args,
  usedPrefix,
  text,
  command
}) => {
  try {
    await m.reply('https://cataas.com/cat', { caption: "*meyaoooooooooooooon!*" }, "img", m);
  } catch (e) {
    console.error(`${e}\n\nCommand: cat`);
    // Handle the error accordingly, e.g., send an error message back to the user.
    await conn.sendMessage(m.chat, 'An error occurred while processing the command.', 'text', { quoted: m });
  }
};

handler.help = ['cat'];
handler.tags = ['logo'];
handler.command = ['cat'];

export default handler;
