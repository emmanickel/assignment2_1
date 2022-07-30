// Access prompt-sync package for user input:
const prompt = require('prompt-sync')();

// Import functions:
let regMusician = require('./regMusician.js');
let regTroupe = require('./regTroupe.js');
let addMusicianTroupe = require('./addMusicianTroupe.js');
let giveDescriptions = require('./giveDescriptions.js');
let readTroupeNames = require('./readTroupeNames.js');
let writeToFile = require('./writeToFile.js');
let calDepCost = require('./calDepCost.js');


// Import classes
const { Troupe } = require('./Troupe.js');
const { Musician } = require('./Musician.js');

// Create global maps of musicians and troupes:
const musicians = new Array();
const troupes = new Array();

// Create some musicians
musicians.push({mInst: 'guitarist', mName: 'emma', yrsPlaying: '8', hrlyRate: '55'});
musicians.push({mInst: 'bassist', mName: 'lewis', yrsPlaying: '2', hrlyRate: '70'});
musicians.push({mInst: 'flautist', mName: 'zac', yrsPlaying: '10', hrlyRate: '55'});
musicians.push({mInst: 'percussionist',mName: 'georgia', yrsPlaying: '3', hrlyRate: '80'});
musicians.push({mInst: 'guitarist', mName: 'jazz', yrsPlaying: '1', hrlyRate: '95'});
musicians.push({mInst: 'bassist', mName: 'jill', yrsPlaying: '7', hrlyRate: '60'});

// Create some troupes
troupes.push({tMembers: [], tName: 'sitting down', mDur: '2', tGenre: 'jazz'});
troupes.push({tMembers: [], tName: 'the strokes', mDur: '3', tGenre: 'rock'});

// const troupeMembers = new Array();

// Call selectFn function to operate main menu:
selectFn();

// Function dispMenu displays application main menu to user and takes selection:
// Input parameters: none
// Made up of console.log statements
// Returns user input of function selection as a string e.g. "4"

function dispMenu(){
    console.clear();
    console.log("=========================================");
    console.log("|               MusoPlan                |");       
    console.log("|=======================================|");
    console.log("|     Please select from one of the     |");
    console.log("|           following options           |");
    console.log("|        -----------------------        |");
    console.log("|                                       |");
    console.log("| 1. Create a musician                  |");
    console.log("| 2. Create a troupe                    |");
    console.log("| 3. Add a musician to a troupe.        |");
    console.log("| 4. Provide a summary description of a |");
    console.log("|    troupe                             |");
    console.log("| 5. Provide a detailed description of  |");
    console.log("|    a troupe                           |");
    console.log("| 6. Calculate cost of deploying the    |");
    console.log("|    troupe for a number of hours       |");
    console.log("| 7. Read a list of troupe names to be  |");
    console.log("|    populated from a file              |");
    console.log("| 8. Write a list of the detailed       |");
    console.log("|    descriptions for all troupes to    |");
    console.log("|    a given file name                  |");
    console.log("| 9. Exit                               |");
    console.log("|_______________________________________|");
    return prompt("Please enter your selection [1, 2, 3, 4, 5, 6, 7, 8, 9]: ");
}


// Function selectFn uses a switch statement inside a while(true) loop to execute
// the function according to the user's selection
// The user's selection is taken by calling the dispMenu() function
// Break and continue statements are used to control the while loop, so that it
// cycles indefinitely until the user selects option 9
// Input parameters: none

function selectFn(){
    let fn;
    while(true){
        fn = parseInt(dispMenu());
        switch(fn){
            case 1:
                console.log("You have selected to register a musician.");
                musicians.push(regMusician.regMusician());
                console.log("You have successfully created a musician.");
                // console.log(musicians);
                prompt("Press any key to continue.");
                continue;
            case 2:
                console.log("You have selected to register a troupe.");
                troupes.push(regTroupe.regTroupe());
                console.log("You have successfully created a troupe.");
                // console.log(troupes);
                prompt("Press any key to continue.");
                continue;
            case 3:
                console.log("You have selected to add a musician to a troupe.");
                addMusicianTroupe.dispTroupeMembers(musicians, troupes);
                // console.log(troupes);
                prompt("Press any key to continue.");
                continue;
            case 4:
                console.log("You have selected to provide a summary description of a troupe.");
                // Get troupe name (by index)
                index = giveDescriptions.getTroupeName(troupes);
                // Give title
                console.log(`\nSummary Description`);
                console.log(`====================`);
                console.log(giveDescriptions.giveSummaryDesc(troupes, false, index));
                prompt("Press any key to continue.");
                continue;
            case 5:
                console.log("You have selected to provide a detailed description of a troupe.");
                // Get troupe name (by index)
                index = giveDescriptions.getTroupeName(troupes);
                // Give title
                console.log(`\nDetailed Description`);
                console.log(`====================`);
                console.log(giveDescriptions.giveSummaryDesc(troupes, true, index));
                prompt("Press any key to continue.");
                continue;
            case 6:
                console.log("You have selected to calculate the cost of deploying the troupe for a number of hours");
                calDepCost.calDepCost(troupes);
                prompt("Press any key to continue.");
                continue;
            case 7:
                console.log("You have selected to read a list of troupe names to be populated from a file.");
                readTroupeNames.readTroupeNames(troupes);
                prompt("Press any key to continue.");
                continue;
            case 8:
                console.log("You have selected to write a list of the detailed descriptions for all troupes to a given file name.");
                writeToFile.writeFileDesc(troupes);
                prompt("Press any key to continue.");
                continue;
            case 9:
                console.log("Goodbye");
                break; 
            default:
                console.log("Invalid input");
                prompt("Press any key to continue.");
                continue;
            }
        break;

    }

}
