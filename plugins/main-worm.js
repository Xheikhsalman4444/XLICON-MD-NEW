import fetch from 'node-fetch';

let handler = async ({ text, conn, usedPrefix, command, quoted, sender }) => {
  try {
    if (!text && !quoted) {
      throw `Please provide some text or quote a message to get a response.`;
    }

    if (!text && quoted && quoted.text) {
      text = quoted.text;
    }

    const prompt = encodeURIComponent(text);

    // Assuming you wanted to make a GET request to the provided URL
    const wormGPTUrl = `https://flowgpt.com/p/wormgpt-v30/gpt3?prompt=${prompt}`;
    
    try {
      let response = await fetch(wormGPTUrl);
      let data = await response.json();
      let result = data.message; // Adjust this according to the API response

      if (!result) {
        throw new Error('No valid JSON response from the WormGPT API');
      }

      // Sending the result back to the chat
      await conn.sendMessage(conn.user.jid, {
        text: result,
        quoted: { key: quoted.key, message: quoted.message },
        contextInfo: { mentionedJid: [sender] }
      });

    } catch (error) {
      console.error('Error from the WormGPT API:', error);

      // Handling the error or fallback to another API
      const fallbackUrl = `https://ultimetron.guruapi.tech/gpt3?prompt=${prompt}`;
      let response = await fetch(fallbackUrl);
      let data = await response.json();
      let result = data.completion; // Adjust this according to the API response

      // Sending the fallback result back to the chat
      await conn.sendMessage(conn.user.jid, {
        text: result,
        quoted: { key: quoted.key, message: quoted.message },
        contextInfo: { mentionedJid: [sender] }
      });
    }

  } catch (error) {
    console.error('Error:', error);
    throw `*ERROR*`;
  }
};

handler.help = ['worm'];
handler.tags = ['AI'];
handler.command = ['worm', 'wormi', 'hacki'];

export default handler;
