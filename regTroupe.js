// Import required classes:
const {Troupe} = require('./Troupe');

// Access prompt-sync package for user input:
const prompt = require('prompt-sync')();

// Function regTroupe takes user input to record their name, minimum duration and genre
// Accepted parameters: 
    // name must be: between 3 and 30 characters (including)
    // minimum duration must be: a number between 0.5 and 3 hours
    // genre must be either: rock/jazz/pop
// Returns the Troupe object that has been created
function regTroupe()
{
    // Declare variables such that they are defined but invalid:
    let t_name = "";
    let min_duration = 0;
    let genre = "";

    // Create new object from the Troupe class:
    const troupe = new Troupe();

    // // While loop for user input of Troupe data:
    while(true){
        // If statements validate that input value meets required conditions
        // Name must be between 3 and 30 characters long: 
        if(t_name.length >= 3 && t_name.length <=30){
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
