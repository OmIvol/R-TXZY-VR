let fetch = require('node-fetch')
let { MessageType } = require('@adiwajshing/baileys')
let handler = async(m, { conn }) => {
    let kamisato = `
┌〔 List Berlangganan 〕
├ 🤴Not Berlaganan
├ 🤴Not Berlanganan
├ 🤴Not Berlanganan
├ Trial 3 Hari
└────
Silahkan klik pada "List Harga" untuk melihat list.

Pembayaran:
Pulsa : 🤴Not Berlanganan
GoPay: 🤴Not Berlanganan
`.trim()
    const button = {
        buttonText: 'List Harga',
        description: kamisato,
        sections:  [{title: "Silahkan di pilih", rows: [
        {title: '🤴Not', description: "RpNot\nNot Sewa Bot.", rowId:".masuk"},
        {title: '🤴Not', description: "RpNot\nNot Sewa Bot.", rowId:".masuk"},
        {title: '🤴Not', description: "RpNot\nNot Sewa Bot.", rowId:".masuk"},
        {title: 'Trial', description: "GRATIS\nBot gratis 3 Hari.", rowId:".join"},
        {title: 'Owner', description: "Chat owner nya jika ada perlu.", rowId:".owner"},
        {title: 'Rules', description: "Kebijakan Privasi, Syarat Ketentuan dan Peraturan.", rowId:".snk"},
       ] }],
        listType: 1
       }
    conn.sendMessage(m.chat, button, MessageType.listMessage, { quoted: m })
}
handler.tags = ['main']
handler.command = /^(sewa)$/i
handler.help = ['sewa']
module.exports = handler
//R-Txzy
