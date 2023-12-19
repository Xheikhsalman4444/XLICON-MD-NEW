import { exec } from 'child_process'
import speed from 'performance-now'

let handler = async (m, { conn, command, text, usedPrefix }) => {    
    await m.reply("Injecting Malware")   
    await sleep(2000)    
    await m.reply(" █ 10%")    
    await sleep(1000)    
    await m.reply(" █ █ 20%")    
    await sleep(1000)    
    await m.reply(" █ █ █ 30%")    
    await sleep(1000)    
    await m.reply(" █ █ █ █ 40%")    
    await sleep(1000)    
    await m.reply(" █ █ █ █ █ 50%")    
    await sleep(1000)    
    await m.reply(" █ █ █ █ █ █ 60%")    
    await sleep(1000)    
    await m.reply(" █ █ █ █ █ █ █ 70%")    
    await sleep(1000)    
    await m.reply(" █ █ █ █ █ █ █ █ 80%")    
    await sleep(1000)    
    await m.reply(" █ █ █ █ █ █ █ █ █ 90%")    
    await sleep(1000)    
    await m.reply(" █ █ █ █ █ █ █ █ █ █ 100%")    
    await sleep(1000)    
    await m.reply("System hyjacking on process.. \n Conecting to Server error to find 404 ")    
    await sleep(1000)    
    await m.reply("Device successfully connected... \n Riciving data...")    
    await sleep(1000)    
    await m.reply("Data hyjacked from divice 100% completed \n killing all evidence killing all malwares...")
    await sleep(1000)    
    await m.reply(" HACKING COMPLETED ")    
    await sleep(2000)    
    await m.reply(" SENDING LOG DOCUMENTS...")    
    await sleep(1000)
    await m.reply(" SUCCESSFULLY SENT DATA AND Connection disconnected")    
    await sleep(1000)

    return await m.reply('BACKLOGS CLEARED');
}

handler.help = ['hacki']
handler.tags = ['main']
handler.command = ['hacki', 'xhack'] 

export default handler
