import axios from 'axios';


const endpoint = 'https://v2-guru-indratensei.cloud.okteto.net/perplexity?query=';




let handler = async (m, { text, conn, usedPrefix, command }) => {
  try {
    if (!text) {
      throw `Please provide some text to get a response.`;
    }

    let res = {}
   try{
    res = await axios.get(`http://api.brainshop.ai/get?bid=179485&key=eE38jJX6r4VlZlSY&uid=[${m.sender}]&msg=[${text}]`);

   }catch(e){ console.log(e);
    res = await axios.get(`http://api.brainshop.ai/get?bid=175685&key=Pg8Wu8mrDQjfr0uv&uid=[Suhail-MD]&msg=[${text}]`);


}
        res.data ? m.reply(res.data.cnt) : m.reply("Request Denied!"); 




  } catch (e) {
    console.error(e);
    m.reply(e);
  }
};
handler.help = ['chat']
handler.tags = ['AI']
handler.command = ['chat']; 


export default handler;
