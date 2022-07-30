const { Guitarist } = require('./Guitarist');
const { Bassist } = require('./Bassist');
const { Percussionist } = require('./Percussionist');
const { Flautist } = require('./Flautist');
const { Musician } = require('./Musician');
const {Troupe} = require('./Troupe');

// Access prompt-sync package for user input:
const prompt = require('prompt-sync')();

function giveSummaryDesc(troupes){
    // Declare index variable
    let i;

    while(true){
        // Show list of troupe names:
        console.log("The current available troupes are: ");            
        for(let i=0; i<troupes.length; i++){
            console.log(`\t- ${troupes[i].tName}`);
        }
        // Get user input:
        let tName = prompt("Please select a troupe from the list above: ");
        
        // Find troupe in array troupes:
        for(i = 0; i < troupes.length; i++){
            if(tName == troupes[i].tName){
                // Give title
                console.log(`\nSummary Description`);
                console.log(`====================`);
                // Access troupe name from troupes array:
                console.log(`Troupe name: ${troupes[i].tName}`);
                // For loop to display troupe members:
                console.log(`Members: `);
                    for(let x = 0; x < troupes[i].tMembers.length; x++){
                        console.log(`\t- ${troupes[i].tMembers[x].mName}`);
                    }
                // Access troupe genre from troupes array:
                console.log(`Genre: ${troupes[i].tGenre}`);
                // Access troupe minimum duration from troupes array:
                console.log(`Minimum duration: ${troupes[i].mDur} hours`);
                // Access troupe hourly rate by calling calHrlyRate function from Troupe class:
                console.log(`Hourly rate: $${parseInt(Troupe.prototype.calHrlyRate.call(troupes[i]))}/hr`);
                return;
            }
        }
            // If troupe name doesn't exist, give error:
            console.log("\nInvalid selection. Please try again.\n");
    }
    }

module.exports = {giveSummaryDesc}
