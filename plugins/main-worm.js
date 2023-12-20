import fetch from 'node-fetch';

let handler = async WormGPT({ text, conn, usedPrefix, command }) {

const axios = require('axios')
let data = await axios.get(`https://flowgpt.com/p/wormgpt-v30/gpt3?prompt=Hello`);

return data

WormGPT();
}
handler.help = ['worm']
handler.tags = ['AI']
handler.command = ['AD', 'worm', 'wornai', 'hacker'];

export default handler;
