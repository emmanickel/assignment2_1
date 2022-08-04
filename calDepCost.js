// Import classes:
const {Troupe} = require('./Troupe');

// Function calDepCost takes the array of troupes as an input parameter
// Calculates the deployment cost of the selected troupe by multiplying the hrly rate
// of the troupe by the number of hours input by the user:
// No return value (console.log only)
function calDepCost(troupes){
    // Access prompt-sync package for user input:
    const prompt = require('prompt-sync')();
    // Declare the index value i:
    let i;

    // While troupe allows unlimited user attempts until valid input
    while(true){
    // For loop to give list of troupe names:
    console.log("The current available troupes are: ");
    for(let i=0; i<troupes.length; i++){
        console.log(`\t- ${troupes[i].tName}`);
    }

    // Get troupe name from user:
    let tName = prompt("Please select a troupe from the list above: ").trim();
    
    // Check given troupe name is valid using for loop:
    for(i = 0; i < troupes.length; i++){
        if(tName.toLowerCase() == troupes[i].tName.toLowerCase()){
            // While loop allows unlimited attempts to enter number of hours:
            while(true){
                // Get number of hours from user:
                hours = prompt(`Please enter the number of hours to deploy ${troupes[i].tName} for: `);
                // If condition confirms given number of hours is greater than or equal to minimum but less than or equal to 3:
                if(hours >= troupes[i].mDur&& hours <= 3){
                    // Calculate deployment cost:
                    let depCost = hours*Troupe.prototype.calHrlyRate.call(troupes[i]);
                    // Round to 2 decimal places:
                    depCost = Math.round((depCost + Number.EPSILON) * 100) / 100;
                    // Print answer to console:
                    console.log( `Cost of deployment of ${troupes[i].tName} for ${hours} hours is: $${depCost}.\n`);
                    // No return value:
                    return;
                }
                else{
                    // Error on invalid number of hours input
                    console.log(`Invalid number of hours. Please give a number of hours between ${troupes[i].mDur} and 3.`)
                }
            }
        }
    }

    // Error on invalid troupe name selection:
    console.log("Invalid selection. Please enter an existing troupe name.");
    }
}

// Export the function:
module.exports = {calDepCost}
