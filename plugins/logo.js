import fetch from 'node-fetch'
import axios from 'axios'
import maker from 'mumaker'

let logos = {
    "deepsea": "https://textpro.me/create-3d-deep-sea-metal-text-effect-online-1053.html",
    "horror": "https://textpro.me/horror-blood-text-effect-online-883.html",
    "pink":"https://textpro.me/create-blackpink-logo-style-online-1001.html",
    "candy":"https://textpro.me/create-christmas-candy-cane-text-effect-1056.html",
    "christmas":"https://textpro.me/christmas-tree-text-effect-online-free-1057.html",
}




let handler = async (m, { conn, usedPrefix, command ,text}) => {
    if(!text) return await conn.sendMessage(m.chat, { text : `Use ${usedPrefix+command} Ab Dev.`})
    let anu = await maker.textpro(logos[command], text)
    conn.sendMessage(m.chat, { image: { url: anu.image } })
}
handler.help = ['deepsea', 'horror','pink','candy','christmas',]
handler.tags = ['logo']
handler.command = /^(deepsea|horror|pink|candy|christmas)$/i
export default handler


/**
 *  THANKS TO @SuhailTechInfo ------ hehe 
 **/
