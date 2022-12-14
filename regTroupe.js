// Import required classes:
const {Troupe} = require('./Troupe');

// Access prompt-sync package for user input:
const prompt = require('prompt-sync')();

// Function regTroupe takes user input to record their name, minimum duration and genre
// Input parameter is the current array of Troupe objects
// The function works by accepting the following user inputs:
    // name must be: between 3 and 30 characters (including)
    // minimum duration must be: a number between 0.5 and 3 hours
    // genre must be either: rock/jazz/pop
// Returns the Troupe object that has been created (to be pushed to the troupes array)
function regTroupe(troupes)
{
    // Declare variables such that they are defined but invalid:
    let t_name = "";
    let min_duration = 0;
    let genre = "";

    // Create new object from the Troupe class:
    const troupe = new Troupe();

    // // While loop for user input of Troupe data:
    while(true){
        // Outer label is jumped to if musician name already exists
        outer:
        // If statements validate that input value meets required conditions
        // Name must be between 3 and 30 characters long: 
        if(t_name.length >= 3 && t_name.length <=30){
            // For loop checks troupe name doesn't already exist:
            for(let i = 0; i < troupes.length; i++){
                if(troupes[i].tName.toLowerCase() == t_name.toLowerCase()){
                    console.log("Troupe name already exists. Please try again.");
                    t_name = "";
                    // Break to 'outer' label allows a 'double break'
                    break outer;
                }
            }
            troupe.troupeName = t_name;
            // Minimum duration must be a number between 0.5 and 3:
            if(min_duration >= 0.5 && min_duration <= 3 && !isNaN(min_duration)){
                troupe.minDuration = min_duration;
                // Genre must be either rock/jazz/pop:
                if(genre == 'rock' | genre == 'jazz' | genre == 'pop'){
                    troupe.troupeGenre = genre;
                    // Break while loop once all conditions have been met:
                    break;
                }
                // Else statements prompt user to enter input:
                else{
                    genre = prompt("Enter the troupe's genre (rock/jazz/pop): ").trim().toLowerCase();
                    troupe.troupeGenre = genre;
                }
            }
            else{
                min_duration = prompt("Enter the troupe's minimum duration (between 0.5 and 3 hrs): ").trim();
                troupe.minDuration = min_duration;
            }
        }
        else{
            t_name = prompt("Enter the troupe's name: ").trim();
            troupe.troupeName = t_name;
        }
    }
    // Return the new Troupe object:
    return(troupe);
}

// Export the function regTroupe:
module.exports = {regTroupe}
