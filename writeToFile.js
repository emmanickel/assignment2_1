const { Guitarist } = require('./Guitarist');
const { Bassist } = require('./Bassist');
const { Percussionist } = require('./Percussionist');
const { Flautist } = require('./Flautist');
const { Musician } = require('./Musician');
const {Troupe} = require('./Troupe');

// Access prompt-sync package for user input:
const prompt = require('prompt-sync')();

// Access fs package for reading/writing to files:
const fs = require('fs');

// Import functions from giveDescriptions.js:
let giveDescriptions = require('./giveDescriptions.js');

function writeFileDesc(troupes){
    let fileName = prompt("Please enter a file name: ");
    let description = '';

    // For loop writes detailed description of each troupe to the file
    for(let i = 0; i < troupes.length; i ++){
        description = description.concat(giveDescriptions.giveSummaryDesc(troupes, true, i));
    }


    // Write to a file:
    fs.writeFileSync(`${fileName}.txt`, description, 'utf8');

    // Other way of writing to a file:
    // writeMessage = "hello"


    // Write to file
    // fs.appendFileSync(`${fileName}.txt`, writeMessage, function(err){
    // })

    return;
}

module.exports = {writeFileDesc}
