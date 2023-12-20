import fetch from 'node-fetch';
import util from 'util';

var handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) throw `Masukkan pertanyaan!\n\n*Contoh:* kenapa wanita bisa hamil?`;

  await conn.sendMessage(m.chat, { quoted: m });

  try {
    var js = await fetch(API('lann', '/api/search/bard-ai', { apikey: beta, text: `${text}` }));
    var json = await js.json();

    await conn.sendMessage(m.chat, {
      text: json.message,
      contextInfo: {
        externalAdReply: {
          title: 'Bard-Ai',
          body: '',
          thumbnailUrl: 'https://telegra.ph/file/35cad7ee8a8250020ecc7.jpg',
          sourceUrl: '',
          mediaType: 2, // Fix: use mediaType 2 for thumbnail
          renderLargerThumbnail: true,
        },
      },
    }, { quoted: m });
  } catch (err) {
    // Handle the error gracefully
    console.error(err);
    await conn.sendMessage(m.chat, { quoted: m });
  }
};

handler.command = handler.help = ['bardi', 'gbard', 'goobard'];
handler.tags = ['info'];
handler.register = false;
handler.limit = 3;

export default handler;
