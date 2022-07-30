const { Guitarist } = require('./Guitarist');
const { Bassist } = require('./Bassist');
const { Percussionist } = require('./Percussionist');
const { Flautist } = require('./Flautist');
const { Musician } = require('./Musician');
const {Troupe} = require('./Troupe');

// Access prompt-sync package for user input:
const prompt = require('prompt-sync')();

function calDepCost(troupes){
            
    // Access prompt-sync package for user input:
    const prompt = require('prompt-sync')();
    let i;
    let sumCost;

    while(true){
    // Give list of troupe names:
    console.log("The current available musicians are: ");
    for(let i=0; i<troupes.length; i++){
        console.log(`\t- ${troupes[i].tName}`);
    }

    // Get troupe name from user:
    let tName = prompt("Please select a troupes from the list above: ");

    // Check given musician name is valid:
    for(i = 0; i < troupes.length; i++){
        if(tName == troupes[i].tName){
            // Get number of hours from user:
            // ADD IN CONDITION TO CHECK MINIMUM DURATION
            hours = prompt(`Please enter the number of hours to deploy ${troupes[i].tName} for: `);
            console.log( `Cost of deployment of ${troupes[i].tName} for ${hours} hours is: $${hours*Troupe.prototype.calHrlyRate.call(troupes[i])}.`);
            return;
        }
    }

    console.log("Invalid selection. Please enter an existing musician name.");
    }
}

module.exports = {calDepCost}
