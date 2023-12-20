import fetch from 'node-fetch';

let handler = async (m, { text, conn, usedPrefix, command }) => {
const axios = require('axios')
let data = await axios.get(`https://flowgpt.com/p/wormgpt-v30/gpt3?prompt=Hello`);

return data

m();
}
handler.help = ['worm']
handler.tags = ['AI']
handler.command = ['AD', 'worm', 'wornai', 'hacker'];

export default handler;
