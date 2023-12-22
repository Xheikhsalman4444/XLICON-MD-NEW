import axios from 'axios';


const endpoint = 'https://mzn-api.onrender.com/ai/blackbox?prompt=';


let handler = async (m, { text, conn, usedPrefix, command }) => {
  try {
    if (!text) {
      await m.reply('❓');
      throw `❓ *Please provide some text to use Blackbox AI*`;
    }

    let res = {}
   try{
    await m.reply('⌛')
    res = await axios.get(`${endpoint}${text}`);

   }catch(e){ console.log(e);
    res = await axios.get(`${endpoint}${text}`);


}
        res.data ? m.reply(res.data.response) : m.reply("⛔ *An error occurred.*"); 




  } catch (e) {
    console.error(e);
    m.reply(e);
    await m.reply('⛔')
  }
};
handler.help = ['blackbox']
handler.tags = ['AI']
handler.command = ['blackbox']; 


export default handler;
