const { Client,LocalAuth  } = require('whatsapp-web.js');

const qrcode = require('qrcode-terminal');
// Load the session data if it has been previously saved
const fs = require('fs');
// Path where the session data will be stored
// const SESSION_FILE_PATH = './session.json';
// let sessionData;
// if(fs.existsSync(SESSION_FILE_PATH)) {
//     sessionData = require(SESSION_FILE_PATH);
// }
// const client = new Client({
    
//     puppeteer: {
// 		args: ['--no-sandbox'],
// 	},
//     authStrategy: new LegacySessionAuth({
//         session: sessionData,

//     })
    
// });
// const { Client, LocalAuth } = require("whatsapp-web.js");

console.log("Connection to Whatsapp Web Client");

const client = new Client({
  puppeteer: {
    executablePath: '/usr/bin/brave-browser-stable',
  },
  authStrategy: new LocalAuth({
    clientId: "client-one"
  }),
  puppeteer: {
    headless: false,
    args: ['--no-sandbox'],
  }

});

// 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



// Use the saved values

// client.on('authenticated', (session) => {
//     sessionData = session;
//     fs.writeFile(SESSION_FILE_PATH, JSON.stringify(session), (err) => {
//         if (err) {
//             console.error(err);
//         }
//     });
// });
// const client = new Client();
client.on('qr', (qr) => {
    // console.log('QR RECEIVED', qr);
    qrcode.generate(qr, {small: true});
});

//obtaining messages
client.on('message', async message => {
    console.log(message.body);
	if(message.body === 'hi') {
		message.reply('yes man');
	}
});
// //sending
// client.on('message', async message => {
//     console.log(message.body);
// 	if(message.body === 'hi') {
// 		client.sendMessage(message.from, 'yes yooh');
// 	}
// });
client.on('ready', () => {
    console.log('Client is ready!');
});
client.initialize();