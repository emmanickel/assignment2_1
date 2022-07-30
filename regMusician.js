const { Guitarist } = require('./Guitarist');
const { Bassist } = require('./Bassist');
const { Percussionist } = require('./Percussionist');
const { Flautist } = require('./Flautist');
const { Musician } = require('./Musician');

// Access prompt-sync package for user input:
const prompt = require('prompt-sync')();


function regMusician()
{
    // While loop takes user input to select musician's instrument
    while(true){
        // Take user input to select an instrument:
        instrument = prompt("Please select an instrument (guitarist/bassist/percussionist/flautist): ").toLowerCase();
        // Switch statement validates that user has input a valid instrument
        // If the instrument is valid, a new instrumentalist is created
        // Either a guitarist, bassist, percussionist or flautist
        switch(instrument){
            case 'guitarist':
                musi = new Guitarist();
                musi.instument = instrument;
                // console.log(musi);
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
                // If the input is invalid, an error is thrown and the while loop continues, allowing the user to re-enter input 
                console.log("Invalid input.");
                continue;
        }
        break;
    }

    // Declare properties for Musician object:
    let m_name = "";
    let yrs_playing = -1;
    let m_rate = 0;
    let flag1 = 0;
    let flag2 = 0;
    let flag3 = 0;

    // // While loop for user input of Musician data:
    while(true){
        // If statements validate that input value meets required conditions 
        if(m_name.length >= 3 && m_name.length <=30){
            musi.musicianName = m_name;
            if(yrs_playing >= 0 && typeof(parseFloat(yrs_playing))=="number"){
                musi.yearsPlaying = yrs_playing;
                if(m_rate>=50 && typeof(parseFloat(m_rate))=="number"){
                    musi.hourlyRate = m_rate;
                    // Break while loop once all conditions have been met
                    break;
                }
                // Else statements prompt user to enter input
                else{
                    m_rate = prompt("Enter the musician's hourly rate: ");
                    musi.hourlyRate = m_rate;
                }
            }
            else{
                yrs_playing = prompt("Enter the number of years the musician has been playing: ");
                musi.yearsPlaying = yrs_playing;
            }
        }
        else{
            m_name = prompt("Enter the musician's name: ");
            musi.musicianName = m_name;
        }
    }

    return(musi);
}

module.exports = {regMusician}
