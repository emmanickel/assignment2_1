// Access prompt-sync package for user input:
const prompt = require('prompt-sync')();

// Import functions:
let dispMenu = require('./dispMenu.js');
let regMusician = require('./regMusician.js');
let regTroupe = require('./regTroupe.js');
let addMusicianTroupe = require('./addMusicianTroupe.js');
let giveDescriptions = require('./giveDescriptions.js');
let calDepCost = require('./calDepCost.js');
let readTroupeNames = require('./readTroupeNames.js');
let writeToFile = require('./writeToFile.js');
const { Guitarist } = require('./Guitarist.js');
const { Flautist } = require('./Flautist.js');
const { Percussionist } = require('./Percussionist.js');
const { Bassist } = require('./Bassist.js');
const { Troupe } = require('./Troupe.js');

// Create global maps of musicians and troupes:
const musicians = new Array();
const troupes = new Array();

//===========================================================================
// Questions to ask on Monday:
// - Can names (of musicians and troupes) be numbers?
//     - isNaN(musicians[i].mName)
//     - isNaN(troupes[i].tName)
// - When there are no members of a troupe, should we still print the summary
// and detailed description?
// - Allow create a second musician/troupe with the same name?
// - Case sensitivity on input?
//===========================================================================
// FOR TESTING:
// Create some musicians:
let g1 = new Guitarist()
g1.mInst = 'guitarist';
g1.mName = "emma";
g1.yrsPlaying = '8';
g1.hrlyRate = '55';
musicians.push(g1);

let b1 = new Bassist()
b1.mInst = 'bassist';
b1.mName = "lewis";
b1.yrsPlaying = '2';
b1.hrlyRate = '75';
musicians.push(b1);

let p1 = new Percussionist()
p1.mInst = 'percussionist';
p1.mName = "zac";
p1.yrsPlaying = '7';
p1.hrlyRate = '55';
musicians.push(p1);

let f1 = new Flautist()
f1.mInst = 'flautist';
f1.mName = "rebecca";
f1.yrsPlaying = '9';
f1.hrlyRate = '95';
musicians.push(f1);

// Create some troupes:
let t1 = new Troupe()
t1.tMembers = [];
t1.tName = "sitting down";
t1.mDur = '2';
t1.tGenre = 'jazz';
troupes.push(t1);

let t2 = new Troupe()
t2.tMembers = [];
t2.tName = "the strokes";
t2.mDur = '3';
t2.tGenre = 'rock';
troupes.push(t2);

// Add some musicians to a troupe:
t1.tMembers.push(g1);
t1.tMembers.push(b1);

//===========================================================================

// Call selectFn function to operate main menu:
selectFn();

// Function selectFn uses a switch statement inside a while(true) loop to execute
// the function according to the user's selection
// The user's selection is taken by calling the dispMenu() function
// Break and continue statements are used to control the while loop, so that it
// cycles indefinitely until the user selects option 9
// Input parameters: none

function selectFn(){
    // Define fn variable:
    let fn;
    // While loop means app runs indefinitely, with main menu returned to after 
    // executing each function:
    while(true){
        // Call dispMenu function to display the main menu to the user and take
        // their selection (and assign to fn variable)
        fn = parseInt(dispMenu.dispMenu());
        switch(fn){
            case 1:
                console.clear();
                console.log("You have selected to register a musician.");
                // Add a musician by calling the regMusician function:
                musicians.push(regMusician.regMusician());
                console.clear();
                console.log("You have successfully created a musician.\n");
                prompt("Press the enter key to continue.");
                continue;
            case 2:
                console.clear();
                console.log("You have selected to register a troupe.\n");
                // Add a troupe by calling the regTroupe function:
                troupes.push(regTroupe.regTroupe());
                console.clear();
                console.log("You have successfully created a troupe.");
                prompt("Press the enter key to continue.");
                continue;
            case 3:
                console.clear();
                console.log("You have selected to add a musician to a troupe.\n");
                addMusicianTroupe.dispTroupeMembers(musicians, troupes);
                prompt("Press the enter key to continue.");
                continue;
            case 4:
                console.clear();
                console.log("You have selected to provide a summary description of a troupe.");
                // Get troupe name (by index) by calling getTroupeName function
                index = giveDescriptions.getTroupeName(troupes);
                // Give title
                console.clear();
                console.log(`\nSummary Description`);
                // Get summary description of the selected troupe by calling the
                // giveSummaryDesc function
                console.log(giveDescriptions.giveSummaryDesc(troupes, false, index));
                prompt("Press the enter key to continue.");
                continue;
            case 5:
                console.clear();
                console.log("You have selected to provide a detailed description of a troupe.");
                // Get troupe name (by index) by calling getTroupeName function
                index = giveDescriptions.getTroupeName(troupes);
                // Give title
                console.clear();
                console.log(`\nDetailed Description`);
                // Get detailed description of the selected troupe by calling the
                // giveSummaryDesc function
                console.log(giveDescriptions.giveSummaryDesc(troupes, true, index));
                prompt("Press the enter key to continue.");
                continue;
            case 6:
                console.clear();
                console.log("You have selected to calculate the cost of deploying the troupe for a number of hours");
                console.clear();
                // Get cost of deployment throught the calDepCost function:
                calDepCost.calDepCost(troupes);
                prompt("Press the enter key to continue.");
                continue;
            case 7:
                console.clear();
                console.log("You have selected to read a list of troupe names to be populated from a file.");
                console.clear();
                // Read troupe names from a file using the readTroupeNames function
                readTroupeNames.readTroupeNames(troupes);
                prompt("Press the enter key to continue.");
                continue;
            case 8:
                console.clear();
                console.log("You have selected to write a list of the detailed descriptions for all troupes to a given file name.");
                console.clear();
                // Write detailed descriptions of all troupes to file of given name:
                fileName = writeToFile.writeFileDesc(troupes);
                console.log(`You have successfully written a list of the detailed descriptions for all troupes to a file called "${fileName}.txt".\n`);
                prompt("Press the enter key to continue.");
                continue;
            case 9:
                console.clear();
                console.log("Goodbye");
                // Break out of switch statement if user selects to exit program:
                break; 
            default:
                console.clear();
                // Give error on invalid input:
                console.log("Invalid input. Selection must be a number between 1-9.");
                prompt("Press the enter key to continue.");
                continue;
            }
        // Break out of while loop once switch is complete:
        break;
    }
}


module.exports = {selectFn}