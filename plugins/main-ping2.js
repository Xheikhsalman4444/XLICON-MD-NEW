import fetch from 'node-fetch';
import displayLoadingScreen from '../lib/ab-loader.js'

const endpoint = 'https://v2-guru-indratensei.cloud.okteto.net/perplexity?query=';

let handler = async (m, { text, conn, usedPrefix, command }) => {
  try {
    if (!text && !(m.quoted && m.quoted.text)) {
      throw `Please provide some text or quote a message to get a response.`;
    }

    if (!text && m.quoted && m.quoted.text) {
      text = m.quoted.text;
    } else if (text && m.quoted && m.quoted.text) {
      text = `${text} ${m.quoted.text}`;
      if (m.quoted.text.includes('.aisearch')) {
        text = text.replace('.aisearch', ''); // 
      }
    }
    await displayLoadingScreen(conn, m.chat)
    conn.sendPresenceUpdate('composing', m.chat);
    let emsg = await conn.sendMessage(m.chat, {text: 'Hacking you...'})
    const prompt = encodeURIComponent(text);

    const response = await fetch(endpoint + prompt);

    if (!response.ok) {
      throw `Received an error response from the server: ${response.status} - ${response.statusText}`;
    }

    const data = await response.json();
    const result = data.response.trim(); 
    await conn.relayMessage(m.chat, {
        protocolMessage: {
          key: emsg.key,
          type: 14,
          editedMessage: {
            conversation: result 
          }
        }
      }, {})
  } catch (error) {
    console.error('Error:', error);
    m.reply(`YOU HAVE BEEN HACKED BY XLICON TEAM.`);
  }
};
handler.help = ['ping2']
handler.tags = ['main']
handler.command = ['ping2', 'pingi']; 


export default handler;
