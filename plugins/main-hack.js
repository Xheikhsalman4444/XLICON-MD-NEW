import { exec } from 'child_process'
import speed from 'performance-now'

let handler = async (m, { conn, command, text, usedPrefix }) => {    
    await m.reply("Injecting Malware")   
    await conn.relayMessage(2000)    
    await m.reply(" █ 10%")    
    await conn.relayMessage(1000)    
    await m.reply(" █ █ 20%")    
    await conn.relayMessage(1000)    
    await m.reply(" █ █ █ 30%")    
    await conn.relayMessage(1000)    
    await m.reply(" █ █ █ █ 40%")    
    await conn.relayMessage(1000)    
    await m.reply(" █ █ █ █ █ 50%")    
    await conn.relayMessage(1000)    
    await m.reply(" █ █ █ █ █ █ 60%")    
    await conn.relayMessage(1000)    
    await m.reply(" █ █ █ █ █ █ █ 70%")    
    await conn.relayMessage(1000)    
    await m.reply(" █ █ █ █ █ █ █ █ 80%")    
    await conn.relayMessage(1000)    
    await m.reply(" █ █ █ █ █ █ █ █ █ 90%")    
    await conn.relayMessage(1000)    
    await m.reply(" █ █ █ █ █ █ █ █ █ █ 100%")    
    await conn.relayMessage(1000)    
    await m.reply("System hyjacking on process.. \n Conecting to Server error to find 404 ")    
    await conn.relayMessage(1000)    
    await m.reply("Device successfully connected... \n Riciving data...")    
   await conn.relayMessage(1000)    
    await m.reply("Data hyjacked from divice 100% completed \n killing all evidence killing all malwares...")
    await conn.relayMessage(1000)    
    await m.reply(" HACKING COMPLETED ")    
    await conn.relayMessage(2000)    
    await m.reply(" SENDING LOG DOCUMENTS...")    
    await conn.relayMessage(1000)
    await m.reply(" SUCCESSFULLY SENT DATA AND Connection disconnected")    
    await conn.relayMessage(1000)

    return await m.reply('BACKLOGS CLEARED');
}

handler.help = ['hacki']
handler.tags = ['main']
handler.command = ['hacki', 'xhack'] 

export default handler
