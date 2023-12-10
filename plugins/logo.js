import fetch from 'node-fetch'
import axios from 'axios'
import maker from 'mumaker'

let logos = {
    "deepsea": "https://textpro.me/create-3d-deep-sea-metal-text-effect-online-1053.html",
    "horror": "https://textpro.me/horror-blood-text-effect-online-883.html",
}




let handler = async (m, { conn, usedPrefix, command ,text}) => {
    if(!text) return await conn.sendMessage(m.chat, { text : `Use ${usedPrefix+command} Suhail Tech.`})
    let anu = await maker.textpro(logos[command], text)
    conn.sendMessage(m.chat, { image: { url: anu.image } })
}
handler.help = ['deepsea', 'horror',]
handler.tags = ['logo']
handler.command = /^(deepsea|horror)$/i
export default handler


/**
 *  THANKS TO @SuhailTechInfo ------ hehe 
 **/