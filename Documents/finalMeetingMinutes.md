# Final Meeting Minutes

## MusoPlan Software User Requirements

The application will operate from the command line, and upon startup will bring the user to a main menu from which they can select one of the following eight functions to run:

<br>

**1. Create a musician**

| Input | Condition |
|---|---|
| Instrument | Equal to: 'guitarist', 'bassist', 'percussionist' or 'flautist'|
| Musician name | Between 3 and 30 characters in length |
| Years playing | Non-negative |
| Hourly rate | greater than or equal to 50 |

<br>

**2. Create a troupe**

| Input |Condition |
|---|---|
| Troupe name | Between 3 and 30 characters in length |
| Minimum duration| Between 0.5 and 3 |
| Genre | Equal to: 'rock', 'jazz' or 'pop' |

<br>

**3. Add a musician to a troupe**

| Input |Condition |
|---|---|
| Troupe name | Existing troupe name |
| Musician name | Existing musician name |

<br>

**4. Provide a summary description of a troupe**

| Input | Condition |
|---|---|
| Troupe name | Existing troupe name |

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
| Introduction of each musician | `Troupe member introductions:` <br> `---------------------------------------` <br> `Hello, my name is emma and I am a guitarist.` <br> `I have been playing for 8 years and my hourly rate is $55/hr.` <br>` Here's an interesting fact about guitarists:` <br> `"The more strings you have, the better you are"`|

**Note:**
- Interesting fact must be one of the following:
    - Guitarist - "The more strings you have, the better you are"
    - Bassist - "Everyone loves a bassist"
    - Percussionist - "Me drum"
    - Flautist - "1989 heavy metal instrument of the year"

<br>

**6. Calculate the cost of deploying the troupe for a number of hours**

| Input  | Condition |
|---|---|
| Troupe name  | Existing troupe name |
| Number of hours | Greater than troupe's minimum duration but less than 3 hours |

<br>

| Output | Example |
|---|---|
| Cost of deploying the given troupe for the given number of hours | `The cost of deploying The Strokes for 2.5 hours is $375.` |

<br>

**7. Read a list of troupe names to be populated from a file**

| Input | Condition |
|---|---|
| List of troupe names | Separated line by line |

<br>

**8. Write a list of the detailed descriptions for all troupes to a given filename**

| Input | Condition |
|---|---|
| File name | No file extension |

<br> 

| Output | Example |
|---|---|
| Detailed description of all troupes given in named .txt file | See function 5 |

<br>


## How you tested your software (demonstrate)

## How you fixed any defects discovered during testing

## Obtain user acceptance of your software

## Final task sign off from use of VCS