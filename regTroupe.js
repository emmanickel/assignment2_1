const { Guitarist } = require('./Guitarist');
const { Bassist } = require('./Bassist');
const { Percussionist } = require('./Percussionist');
const { Flautist } = require('./Flautist');
const { Musician } = require('./Musician');
const {Troupe} = require('./Troupe');

// Access prompt-sync package for user input:
const prompt = require('prompt-sync')();


function regTroupe()
{
    // Declare properties for Troupe object:
    let t_name = "";
    let min_duration = 0;
    let genre = "";
    const troupe = new Troupe();

    // // While loop for user input of Musician data:
    while(true){
        // If statements validate that input value meets required conditions 
        if(t_name.length >= 3 && t_name.length <=30){
            troupe.troupeName = t_name;
            if(min_duration >= 0.5 && min_duration <= 3){
                troupe.minDuration = min_duration;
                if(genre == 'rock' | genre == 'jazz' | genre == 'pop'){
                    troupe.troupeGenre = genre;
                    // Break while loop once all conditions have been met
                    break;
                }
                // Else statements prompt user to enter input
                else{
                    genre = prompt("Enter the troupe's genre (rock/jazz/pop): ");
                }
            }
            else{
                min_duration = prompt("Enter the troupe's minimum duration (between 0.5 and 3 hrs): ");
            }
        }
        else{
            t_name = prompt("Enter the troupe's name: ");
        }
    }

    // Set property values of 'troupe' object:
    troupe.troupeName = t_name;
    troupe.minDuration = min_duration;
    troupe.troupeGenre = genre;
    console.log(troupe);
    return(troupe);
}

module.exports = {regTroupe}
