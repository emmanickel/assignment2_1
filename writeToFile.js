
// Access prompt-sync package for user input:
const prompt = require('prompt-sync')();

// Access fs package for reading/writing to files:
const fs = require('fs');

// Import functions from giveDescriptions.js:
let giveDescriptions = require('./giveDescriptions.js');

function writeFileDesc(troupes){
    // If no troupes are available, exit function:
    if(troupes.length == 0){
        return;
    }

    // Get file name from user:
    let fileName = prompt("Please enter a file name: ");
    let description = '';

    // For loop concatenated description string with detailed description of each troupe:
    for(let i = 0; i < troupes.length; i ++){
        description = description.concat(giveDescriptions.giveSummaryDesc(troupes, true, i));
    }

    // Write to a file:
    fs.writeFileSync(`${fileName}.txt`, description, 'utf8');
    return fileName;
}

// Export function:
module.exports = {writeFileDesc}
