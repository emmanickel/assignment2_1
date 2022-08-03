// MusoPlan Entry-Point Page
// ==========================
// Emma Nickel
// --------------------------

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

// Create global maps of musicians and troupes:
const musicians = new Array();
const troupes = new Array();

//===========================================================================
// FOR TESTING:
// Create some musicians:
// let g1 = new Guitarist()
// g1.mInst = 'guitarist';
// g1.mName = "emma";
// g1.yrsPlaying = '8';
// g1.hrlyRate = '55';
// musicians.push(g1);

// let b1 = new Bassist()
// b1.mInst = 'bassist';
// b1.mName = "lewis";
// b1.yrsPlaying = '2';
// b1.hrlyRate = '75';
// musicians.push(b1);

// let p1 = new Percussionist()
// p1.mInst = 'percussionist';
// p1.mName = "zac";
// p1.yrsPlaying = '7';
// p1.hrlyRate = '55';
// musicians.push(p1);

// let f1 = new Flautist()
// f1.mInst = 'flautist';
// f1.mName = "rebecca";
// f1.yrsPlaying = '9';
// f1.hrlyRate = '95';
// musicians.push(f1);

// let p2 = new Percussionist()
// p2.mInst = 'percussionist';
// p2.mName = "shelby";
// p2.yrsPlaying = '5';
// p2.hrlyRate = '75';
// musicians.push(p2);

// let f2 = new Flautist()
// f2.mInst = 'flautist';
// f2.mName = "andrew";
// f2.yrsPlaying = '9';
// f2.hrlyRate = '100';
// musicians.push(f2);

// // Create some troupes:
// let t1 = new Troupe()
// t1.tMembers = [];
// t1.tName = "sitting down";
// t1.mDur = '2';
// t1.tGenre = 'jazz';
// troupes.push(t1);

// let t2 = new Troupe()
// t2.tMembers = [];
// t2.tName = "the strokes";
// t2.mDur = '3';
// t2.tGenre = 'rock';
// troupes.push(t2);

// // Add some musicians to a troupe:
// t1.tMembers.push(g1);
// t1.tMembers.push(b1);
// t1.tMembers.push(p1);
// t1.tMembers.push(f1);
// t1.tMembers.push(p2);

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
                // Clear the menu from the console:
                console.clear();
                // Successful selection message:
                console.log("You have selected to register a musician.");
                // Add a musician by calling the regMusician function and pushing
                // the Musician object that is returned to the musicians array:
                musicians.push(regMusician.regMusician(musicians));
                console.clear();
                // Successful execution message:
                console.log("You have successfully created a musician.\n");
                prompt("Press the enter key to continue.");
                continue;
            case 2:
                console.clear();
                // Successful selection message:
                console.log("You have selected to register a troupe.\n");
                // Add a troupe by calling the regTroupe function and pushing the 
                // returned Troupe object to the array troupes:
                troupes.push(regTroupe.regTroupe(troupes));
                console.clear();
                console.log("You have successfully created a troupe.");
                // Successful execution message:
                prompt("Press the enter key to continue.");
                continue;
            case 3:
                console.clear();
                // Successful selection message:
                console.log("You have selected to add a musician to a troupe.\n");
                // Call dispTroupeMembers function (which calls the addMusicianTroupe
                // function) to add a musician to a troupe
                addMusicianTroupe.dispTroupeMembers(musicians, troupes);
                prompt("Press the enter key to continue.");
                continue;
            case 4:
                console.clear();
                // Successful selection message:
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
                // Successful selection message:    
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
                // Successful selection message:
                console.log("You have selected to calculate the cost of deploying the troupe for a number of hours");
                console.clear();
                // Get cost of deployment through calling the calDepCost function:
                calDepCost.calDepCost(troupes);
                prompt("Press the enter key to continue.");
                continue;
            case 7:
                console.clear();
                // Successful selection message:    
                console.log("You have selected to read a list of troupe names to be populated from a file.");
                console.clear();
                // Read troupe names from a file using the readTroupeNames function
                readTroupeNames.readTroupeNames(troupes);
                prompt("Press the enter key to continue.");
                continue;
            case 8:
                console.clear();
                // Successful selection message:
                console.log("You have selected to write a list of the detailed descriptions for all troupes to a given file name.");
                console.clear();
                // Write detailed descriptions of all troupes to file of given name
                // by calling the writeFileDesc function
                fileName = writeToFile.writeFileDesc(troupes);
                console.log(`You have successfully written a list of the detailed descriptions for all troupes to a file called "${fileName}.txt".\n`);
                prompt("Press the enter key to continue.");
                continue;
            case 9:
                console.clear();
                // Goodbye message
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
        // Break out of while loop once switch break occurs:
        break;
    }
}
