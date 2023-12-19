import { exec } from 'child_process'
import speed from 'performance-now'

const {
    tlang,
    prefix, 
    Config ,
    sleep,
    getBuffer, 
     } = require('../lib')

  async(m)=>{
  try{
    await m.reply('https://cataas.com/cat',{caption:"*meyaoooooooooooooon!*"},"img",m)
  }catch(e){ m.error(`${e}\n\nCommand: cat`,e,false)}
  })
  

handler.help = ['cat']
handler.tags = ['logo']
handler.command = ['cat'] 

export default handler
