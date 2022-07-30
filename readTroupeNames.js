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

function readTroupeNames(troupes){
    let fileName = prompt("Please enter a file name to read: ");

    // Read text file:
    const troupeNames = fs.readFileSync(`${fileName}.txt`, 'utf8');
    
    // Print to console:
    console.log(troupeNames);

    // Store each line in an array:
    const troupeList = troupeNames.split("\r\n");
    
    // Print the array:
    console.log(troupeList);

    // Create troupes with given names:
    for(let i = 0; i < troupeList.length; i++){
        troupes.push({tMembers: [], tName: troupeList[i], mDur: '', tGenre: ''});
    }
    console.log(troupes);
    return;
}

module.exports = {readTroupeNames}
