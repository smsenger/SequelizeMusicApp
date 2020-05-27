const bcrypt = require('bcrypt');
const fs = require('fs');

const hash = process.argv[2];
const password = process.argv[3];
fs.readFile('/routes/user.js', { encoding: 'utf8'}, (err, hash) => {
    bcrypt.compare(password, hash, (err, passwordMatch) => { 
        console.log('Password matches hash', passwordMatch); //enter hash then password to see if hashes match  
});
});