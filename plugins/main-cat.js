import { exec } from 'child_process';
import now from 'performance-now';
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
    const start = now();
    
    // Your code block here
    await m.reply('https://cataas.com/cat', { caption: "*meyaoooooooooooooon!*" }, "img", m);

    const end = now();
    const executionTime = (end - start).toFixed(3);
    
    console.log(`Execution time: ${executionTime} milliseconds`);
  } catch (e) {
    console.error(`${e}\n\nCommand: cat`);

    // Check if 'text' is present in the error message
    const errorMessage = e.toString().includes('text') ? e : 'An error occurred while processing the command.';
    
    await conn.sendMessage(m.chat, errorMessage, 'text', { quoted: m });
  }
};

handler.help = ['cat'];
handler.tags = ['logo'];
handler.command = ['cat'];

export default handler;
