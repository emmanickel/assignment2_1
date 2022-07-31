// Access prompt-sync package for user input:
const prompt = require('prompt-sync')();

// Access fs package for reading/writing to files:
const fs = require('fs');

// Function readTroupeNames reads the troupe names given in a text file
// and creates troupes with the given names
// Accepted parameters = array containing all current Troupe objects (to be added to)
// No return values
function readTroupeNames(troupes){
    // Prompt the user to enter the filename (no extension required):
    let fileName = prompt("Please enter a file name to read (without the file extension): ");

    // Read text file of given name using readFileSync():
    const troupeNames = fs.readFileSync(`${fileName}.txt`, 'utf8');

    // Store each line as a value inside the array troupeList:
    const troupeList = troupeNames.split("\r\n");

    // For loop cycles through each of the new troupe names
    // In order to create troupes with the given names (by pushing to the troupes
    // array troupes which contains all Troupe objects):
    for(let i = 0; i < troupeList.length; i++){
        troupes.push({tMembers: [], tName: troupeList[i], mDur: '', tGenre: ''});
    }
        
    // Print new troupe names to the console:
    console.log(`\nTroupe names added: \n${troupeNames}\n`);

    return;
}

// Export the function readTroupeNames:
module.exports = {readTroupeNames}
