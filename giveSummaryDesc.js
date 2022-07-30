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
                break;
            }
            console.log("Invalid selection.")
        }

        // If troupe name doesn't exist give error

        console.log(`Troupe name: ${troupes[i].tName}`);
        // Need for loop - write function for troupe members:
        // console.log(`Members: ${troupes[i].tName.tMembers}`);
        console.log(`Genre: ${troupes[i].tGenre}`);
        console.log(`Minimum duration: ${troupes[i].mDur}`);
        // Calculate hourly rate... make into property of troupe?
        // console.log(`Hourly rate: ${troupes[i].hr}`);
    }

}

module.exports = {giveSummaryDesc}
