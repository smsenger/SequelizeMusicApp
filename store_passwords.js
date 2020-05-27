const bcrypt = require('bcrypt');
const fs = require('fs');

const input = process.argv[2];

bcrypt.hash(input, 10, (err, hash) => { //# is how changed input is from orig.
    fs.writeFile('/routes/user.js', hash, (err) => {
        console.log('wrote password has to file: ./hash.txt');
    });  //enter passwd in terminal, receive hash
})