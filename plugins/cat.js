import { exec } from 'child_process'
import speed from 'performance-now'
import cheerio from 'cheerio';
import fetch from 'node-fetch';

    let handler = async (m, {
    conn,
    args,
    usedPrefix,
    text,
    command
}) => {
  try{
    await m.reply('https://cataas.com/cat',{caption:"*meyaoooooooooooooon!*"},"img",m)
  }catch(e){ m.error(`${e}\n\nCommand: cat`,e,false)}
  })
  

handler.help = ['cat']
handler.tags = ['logo']
handler.command = ['cat'] 

export default handler
