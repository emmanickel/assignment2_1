// Access prompt-sync package for user input:
const prompt = require('prompt-sync')();

// Function to display menu to user and get selection:
function dispMenu(){
    console.log("==================================================================");
    console.log("                            MusoPlan                       ");
    console.log("==================================================================");
    console.log("1. Create a musician");
    console.log("2. Create a troupe");
    console.log("3. Add a musician to a troupe");
    console.log("4. Provide a summary description of a troupe");
    console.log("5. Provide a detailed description of a troupe")
    console.log("6. Provide a detailed description of a troupe")
    console.log("7. Read a list of troupe names to be populated from a file")
    console.log("8. Write a list of the detailed descriptions for all troupes to a given filename")
    console.log("9. Exit")
    let selection = parseInt(prompt("Please enter your selection [1, 2, 3, 4, 5, 6, 7, 8, 9]: "));
    return selection;
}
dispMenu();