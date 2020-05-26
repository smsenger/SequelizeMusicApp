const db = require('./models');
db.
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  })
  
  readline.question(`What's your favorite artist?`, (name) => {
    db.artist.create({
        artist_name: name
    }).then((artist) => {
        console.log(`created artist with id ${artist}`)
        readline.close()
    })
  });