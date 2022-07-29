// Access prompt-sync package for user input:
const prompt = require('prompt-sync')();

// Import functions:
let regMusician = require('./regMusician.js');
let regTroupe = require('./regTroupe.js');
let addMusicianTroupe = require('./addMusicianTroupe.js');

// Create global maps of musicians and troupes:
const musicians = new Array();
const troupes = new Array();

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
    console.log("|    given file name                    |");
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
                console.log(musicians);
                prompt("Press any key to continue.");
                continue;
            case 2:
                console.log("You have selected to register a troupe.");
                troupes.push(regTroupe.regTroupe());
                console.log("You have successfully created a troupe.");
                console.log(troupes);
                prompt("Press any key to continue.");
                continue;
            case 3:
                console.log("You have selected to add a musician to a troupe.");
                addMusicianTroupe.addMusicianTroupe(musicians, troupes);
                console.log(troupes);
                continue;
            case 4:
                console.log("You have selected to provide a summary description of a troupe.");
                continue;
            case 5:
                console.log("You have selected to provide a detailed description of a troupe.");
                continue;
            case 6:
                console.log("You have selected to calculate the cost of depolying the troupe for a number of hours");
                continue;
            case 7:
                console.log("You have selected option 7");
                continue;
            case 8:
                console.log("You have selected option 8");
                continue;
            case 9:
                console.log("Goodbye");
                break; 
            default:
                console.log("Invalid input");
                continue;
            }
        break;

    }

}
