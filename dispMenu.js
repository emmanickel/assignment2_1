// Access prompt-sync package for user input:
const prompt = require('prompt-sync')();

// Function dispMenu displays application main menu to user and takes selection:
// Input parameters: none
// Made up of console.log statements
// Returns user input of function selection as a string e.g. "4"

function dispMenu(){
    const menuDisplay = `\
    |=================================================================|
    |                            MusoPlan                             |
    |=================================================================|
    |                 Please select a number from one                 |
    |                    of the following options:                    |
    |=================================================================|
    | 1. Create a musician                                            |
    | 2. Create a troupe                                              |
    | 3. Add a musician to a troupe                                   |
    | 4. Provide a summary description of a troupe                    |
    | 5. Provide a detailed description of a troupe                   |
    | 6. Calculate the cost of deploying the troupe for a number of   |
    |    hours                                                        |             
    | 7. Read a list of troupe names to be populated from a file      |
    | 8. Write a list of the detailed descriptions for all troupes    |
    |    to a given file name                                         |                
    | 9. Exit Program                                                 |
    |=================================================================|
    \
    `;
    // Clear the console:
    console.clear();
    // Display the menu:
    console.log(menuDisplay);
    // Return user input:
    return prompt("Please enter your selection [1, 2, 3, 4, 5, 6, 7, 8, 9]: ");
}

module.exports = {dispMenu}