//Guru ka Maal Hai 
//Made For Guru Bot
//created on Diwali(12th Nov)
//copy with credits
//lodusheks stay away



let handler = m => m
handler.all = async function (m, conn) {
    var vn = "./Assets/ALIVE.mp3"
    let url = "https://github.com/abrahamdw882"
    let murl = "https://www.instagram.com/asli_guru_2k23"
    let hash = global.botname
    let img = "https://i.imgur.com/OtwLwJ9.jpg"
    let num = "233533763772"

    let doc = {
        audio: {
          url: vn
        },
        mimetype: 'audio/mpeg',
        ptt: true,
        waveform: [0,99,0,99,0,99,0],
        fileName: "Guru",
    
        contextInfo: {
          mentionedJid: [m.sender],
          externalAdReply: {
          title: "↺ |◁   II   ▷|   ♡",
          body: hash,
          thumbnailUrl: img,
          sourceUrl: url,
          mediaType: 2,
          mediaUrl: murl,
         // renderLargerThumbnail: true,
          showAdAttribution: true
          }}
      };
	
    let phoneNumber = '';
    if (m.mentionedJid && m.mentionedJid[0]) {
        phoneNumber = m.mentionedJid[0].replace(/[^0-9]/g, '');
        if (phoneNumber === num) {
          return this.sendMessage(m.chat, doc, { quoted: m });
        }
      } else {
        return
      }
}
export default handler

