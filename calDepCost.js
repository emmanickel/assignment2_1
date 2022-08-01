// Import classes:
const {Troupe} = require('./Troupe');

// Access prompt-sync package for user input:
const prompt = require('prompt-sync')();


function calDepCost(troupes){
    // Access prompt-sync package for user input:
    const prompt = require('prompt-sync')();
    let i;

    while(true){
    // Give list of troupe names:
    console.log("The current available troupes are: ");
    for(let i=0; i<troupes.length; i++){
        console.log(`\t- ${troupes[i].tName}`);
    }

    // Get troupe name from user:
    let tName = prompt("Please select a troupes from the list above: ");

    // Check given musician name is valid:
    for(i = 0; i < troupes.length; i++){
        if(tName == troupes[i].tName){
            while(true){
                // Get number of hours from user:
                hours = prompt(`Please enter the number of hours to deploy ${troupes[i].tName} for: `);
                // If condition confirms given number of hours is greater than or equal to minimum but less than or equal to 3:
                if(hours >= troupes[i].mDur&& hours <= 3){
                    console.log( `Cost of deployment of ${troupes[i].tName} for ${hours} hours is: $${hours*Troupe.prototype.calHrlyRate.call(troupes[i])}.\n`);
                    return;
                }
                else{
                    console.log(`Invalid number of hours. Please give a number of hours between ${troupes[i].mDur} and 3.`)
                }
            }
        }
    }

    console.log("Invalid selection. Please enter an existing musician name.");
    }
}

module.exports = {calDepCost}
