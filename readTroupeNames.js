// Import required classes:
const {Troupe} = require('./Troupe');

// Access prompt-sync package for user input:
const prompt = require('prompt-sync')();

// Access fs package for reading/writing to files:
const fs = require('fs');

// Function readTroupeNames reads the troupe names given in a text file
// and creates troupes with the given names
// Accepted parameters = array containing all current Troupe objects (to be added to)
// No return values
function readTroupeNames(troupes){
    let troupeNames;
    let fileName;
    while(true){
    // Prompt the user to enter the filename (no extension required):
     fileName = prompt("Please enter a file name to read (without the file extension): ");
    // let troupeNames;
    // Read text file of given name using readFileSync():
    
    try{
        troupeNames = fs.readFileSync(`${fileName}.txt`, 'utf8');
        break;
    }
    catch{
        console.log("File name does not exist.");
    }
}
    // Store each line as a value inside the array troupeList:
    const troupeList = troupeNames.split("\r\n");

    // For loop cycles through each of the new troupe names
    // In order to create troupes with the given names (by pushing to the troupes
    // array troupes which contains all Troupe objects):
    console.log(`\nTroupe names added: \n`);

    for(let i = 0; i < troupeList.length; i++){
        const troupe = new Troupe();
        troupe.troupeName = troupeList[i];
        if(troupe.troupeName != undefined){
            troupes.push(troupe);
            console.log(troupe.troupeName);
        }
        //     console.log(troupe.troupeName);        }
        // else{
        //     troupes.push(troupe);
        //     console.log(troupe.troupeName);
        // }

    }
    return;
}

// Export the function readTroupeNames:
module.exports = {readTroupeNames}
