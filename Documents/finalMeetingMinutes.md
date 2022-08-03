# Final Meeting Minutes

## MusoPlan Software User Requirements

The application will operate from the command line, and upon startup will bring the user to a main menu from which they can select one of the following eight functions to run:

<br>

**1. Create a musician**

| Input | Data Type | Condition |
|---|---|---|
| Instrument | String | Equal to: 'guitarist', 'bassist', 'percussionist' or 'flautist'|
| Musician name | String | Between 3 and 30 characters in length |
| Years playing | Number | Non-negative |
| Hourly rate | Number | greater than or equal to 50 |

<br>

**2. Create a troupe**

| Input | Data Type | Condition |
|---|---|---|
| Troupe name | String | Between 3 and 30 characters in length |
| Minimum duration | Number | Between 0.5 and 3 |
| Genre | String | Equal to: 'rock', 'jazz' or 'pop' |

<br>

**3. Add a musician to a troupe**

| Input | Data Type | Condition |
|---|---|---|
| Troupe name | String | Existing troupe name |
| Musician name | String | Existing musician name |

<br>

**4. Provide a summary description of a troupe**

| Input | Data Type | Condition |
|---|---|---|
| Troupe name | String | Existing troupe name |

<br>

| Output | Example |
|---|---|
| Troupe name | `Troupe name: The Strokes` | 
| How many of which instruments it contains | `Instruments: `<br>` Guitarists: 2 `<br>` Bassists: 1 `<br>` Percussionists: 1 `<br>` Flautists: 1` |
| Genre | `Genre: rock` |
| Minimum duration | `Minimum duration: 2.5 hours` |
| Hourly rate | `Hourly rate: $150/hr` |

<br>

**5. Provide a detailed description of a troupe**

| Output | Example |
|---|---|
| Troupe name | `Troupe name: The Strokes` | 
| How many of which instruments it contains | `Instruments: `<br>` Guitarists: 2 `<br>` Bassists: 1 `<br>` Percussionists: 1 `<br>` Flautists: 1` |
| Genre | `Genre: rock` |
| Minimum duration | `Minimum duration: 2.5 hours` |
| Hourly rate | `Hourly rate: $150/hr` |
| Introduction of each musician | `Name: Emma` <br> `Instrument: Guitarist` <br> `Years playing: 7` <br> `Hourly rate: $55/hr` <br> `Interesting fact: The more strings you have, the better you are`|
    
**Note:**
- Interesting fact must be one of the following:
    - Guitarist - "The more strings you have, the better you are"
    - Bassist - "Everyone loves a bassist"
    - Percussionist - "Me drum"
    - Flautist - "1989 heavy metal instrument of the year"

<br>

**6. Calculate the cost of deploying the troupe for a number of hours**

| Input | Data Type | Condition |
|---|---|---|
| Troupe name | String | Existing troupe name |
| Number of hours | Greater than troupe's minimum duration but less than 3 hours |

<br>

| Output | Example |
|---|---|
| Cost of deploying the given troupe for the given number of hours | `The cost of deploying The Strokes for 2.5 hours is $375.` |

<br>

**7. Read a list of troupe names to be populated from a file**

| Input | Data Type | Condition |
|---|---|---|
| List of troupe names | String | Separated line by line |

<br>

**8. Write a list of the detailed descriptions for all troupes to a given filename**

| Input | Data Type | Condition |
|---|---|---|
| File name | String | No file extension |

<br> 

| Output | Example |
|---|---|
| Detailed description of all troupes given in named .txt file | See function 5 |

<br>


## How you tested your software (demonstrate)

## How you fixed any defects discovered during testing

## Obtain user acceptance of your software

## Final task sign off from use of VCS