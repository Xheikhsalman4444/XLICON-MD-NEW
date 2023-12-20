import fetch from 'node-fetch'
import util from 'util'
var handler = async (m, {
 conn, 
 text, 
 usedPrefix, 
 command
 }) => {
if (!text) throw `Masukkan pertanyaan!\n\n*Contoh:* kenapa wanita bisa hamil? `
await conn.sendMessage(m.chat, { contextInfo: { externalAdReply: { title: 'Tunggu sebentar kak',  thumbnailUrl: `https://telegra.ph/file/1ccd736159d3566c3895e.jpg` }}}, { quoted: m });
  var js = await fetch(API('lann', '/api/search/bard-ai', { apikey: beta, text: `${text}` }))
var json = await js.json()
try {
  await conn.sendMessage(m.chat, {
text: json.message,
contextInfo: {
externalAdReply: { 
title: 'Bard-Ai',
body: '',
thumbnailUrl: "https://telegra.ph/file/35cad7ee8a8250020ecc7.jpg",
sourceUrl: "",
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: m})
} catch (err) {
conn.sendMessage(m.chat, { sticker: errorstc, contextInfo: { externalAdReply: { title: 'eror 👻',  thumbnailUrl: rawr2 }}}, { quoted: m });
}}
handler.command = handler.help = ['bard','gbard','goobard'];
handler.tags = ['info'];
handler.register = false
handler.limit = 3
export default handler
