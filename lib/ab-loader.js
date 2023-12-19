export default async function displayLoadingScreen(conn, from) {
    const loadingStages = [
       " Injecting Malware,", 
      " █ 10%,", 
    " █ █ 20%," ,   
" █ █ █ 30%," , 
" █ █ █ █ 40%,",    
" █ █ █ █ █ 50% ", 
    " █ █ █ █ █ █ 60%,",  
     " █ █ █ █ █ █ █ 70%,",   
" █ █ █ █ █ █ █ █ 80%", 
    " █ █ █ █ █ █ █ █ █ 90%,", 
" █ █ █ █ █ █ █ █ █ █ 100%,",
        " █ █ █ █ █ █ █ █ █ █ █ █ █ █ █ █ █ █ █ █ 200%,",
        " █ █ █ █ █ █ █ █ █ █ █ █ █ █ █ █ █ █ █ █ █ █ █ █ █ █ █ █ █ █ 300%,",
        " █ █ █ █ █ █ █ █ █ █ █ █ █ █ █ █ █ █ █ █ █ █ █ █ █ █ █ █ █ █ █ █ █ █ █ █ █ █ █ 400%,",
        " █ █ █ █ █ █ █ █ █ █ █ █ █ █ █ █ █ █ █ █ █ █ █ █ █ █ █ █ █ █ █ █ █ █ █ █ █ █ █ █ █ █ █ █ █ █ █ █ █  500%,",
        " █ █ █ █ █ █ █ █ █ █ 600%,",
         " █ █ █ █ █ █ █ █  700%,",
        " █ █ █ █ █ █  800%,",
        " █ █ █ █  900%,",
        " █ █  1000%,",
        " █ █ █ █ █ █ █ 1100%,",
        " █ █ █ █ █ █ █ █ █ █ 😂00%,",



        
"XLICON TEAM"
    ];
  
    try {
      const { key } = await conn.sendMessage(from, { text: 'ʟᴏᴀᴅɪɴɢ...' });
  
      for (let i = 0; i < loadingStages.length; i++) {
        await conn.relayMessage(from, {
          protocolMessage: {
            key: key,
            type: 14,
            editedMessage: {
              conversation: loadingStages[i]
            }
          }
        }, {});
      }
    } catch (error) {
      console.error('XLICON FASTER THAN 😅 ALL:', error);
    }
  }
  
