// Import classes:
const { Guitarist } = require('./Guitarist');
const { Bassist } = require('./Bassist');
const { Percussionist } = require('./Percussionist');
const { Flautist } = require('./Flautist');

// Access prompt-sync package for user input:
const prompt = require('prompt-sync')();

// Function regMusician creates a musician 
// Input parameter is the current array of Musician objects
// The function works by first taking user selection of
// whether the musician is an guitarist, bassist, percussionist or flautist
// It then takes user input to record their name, years playing and hourly rate
// Accepted inputs: 
    // instrument must be either: guitarist/bassist/percussionist/flautist
    // name must be: between 3 and 30 characters (including)
    // years playing must be: a non-negative number
    // hourly rate must be: a number greater than (or equal to) 50
// Returns the Musician object that has been created (which is then pushed to the musicians array)

function regMusician(musicians)
{
    // While loop takes user input to select musician's instrument
    while(true){
        // Take user input to select an instrument:
        // toLowerCase() means input is not case-sensitive 
        instrument = prompt("Please choose a type of instrumentalist (guitarist/bassist/percussionist/flautist): ").trim().toLowerCase();
        
        // Switch statement validates that the user has input a valid instrumentalist type
        // If the input is valid, objects of that instrumentalist class are created
        // the instrument property is then set for that object too
        switch(instrument){
            case 'guitarist':
                musi = new Guitarist();
                musi.instument = instrument;
                break;
            case 'bassist':
                musi = new Bassist();
                musi.instument = instrument;
                break;
            case 'percussionist':
                musi = new Percussionist();
                musi.instument = instrument;
                break;
            case 'flautist':
                musi = new Flautist();
                musi.instument = instrument;
                break;
            default:
                // If the input is invalid, an error is thrown and the while loop
                // continues, allowing the user to re-enter input 
                console.log("Invalid input. Instrument must be either guitarist, bassist, percussionist or flautist.");
                continue;
        }
        break;
    }
    // Declare variables such that they are defined but invalid:
    let m_name = "";
    let yrs_playing = -1;
    let m_rate = 0;
    // While loop takes user input of the musicians name, years playing and hourly rate:
    while(true){
        // Outer label is jumped to if musician name already exists
        outer:
        // If statements validate that input value meets required conditions
        // Name must be between 3 and 30 characters long: 
        if(m_name.length >= 3 && m_name.length <=30){
            // For loop checks musician name doesn't already exist:
            for(let i = 0; i < musicians.length; i++){
                if(musicians[i].mName.toLowerCase() == m_name.toLowerCase()){
                    console.log("Musician name already exists. Please try again.");
                    m_name = "";
                    // break to 'outer' label allows a 'double break':
                    break outer;
                }
            }
            // Assign musician object with the input name:
            musi.musicianName = m_name;
            // Years playing must be a non negative number:
            if(yrs_playing >= 0 && !isNaN(yrs_playing)){
                // Assign musician object with the input years playing:
                musi.yearsPlaying = yrs_playing;
                // Hourly rate must be a number greater than 50:
                if(m_rate>=50 && !isNaN(m_rate)){
                    // Assign musician object with the input hourly rate:
                    musi.hourlyRate = m_rate;
                    // Break while loop once all conditions have been met
                    break;
                }
                // Else statements prompt user to enter input:
                // trim() removes white space
                else{
                    m_rate = prompt("Enter the musician's hourly rate: ").trim();
                    // Assign musician object with the input hourly rate:
                    musi.hourlyRate = m_rate;
                }
            }
            else{
                yrs_playing = prompt("Enter the number of years the musician has been playing: ").trim();
                 // Assign musician object with the input years playing:
                musi.yearsPlaying = yrs_playing;
            }
        }
        else{
            m_name = prompt("Enter the musician's name: ").trim();
             // Assign musician object with the input name:
            musi.musicianName = m_name;
        }
    }
    // Return created musician object:
    return(musi);
}

// Export class:
module.exports = {regMusician}
