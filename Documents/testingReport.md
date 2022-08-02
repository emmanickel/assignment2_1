# Testing Report

### Emma Nickel

<br>

## Unit Test 1: Create a musician

**Testing instructions:**

1. Select option 1 from the main menu by pressing 1.
2. Select the instrument the musician plays by typing one of the following 4 instruments: guitarist, bassist, percussionist or flautist.
3. Enter the musician's name (must be between 3 and 30 characters in length).
4. Enter the number of years the musician has been playing (as a non-negative number).
5. Enter the musician's hourly rate (as a number greater than or equal to 50).

<br>

| Input | Expected output | Actual Output |
|---|---|---|
| `'1'` <br> `->'guitarist'` <br> `->'Emma'` <br> `->'4'` <br> `->'70'` | `'You have successfully created a musician.'` | `'You have successfully created a musician.'` | 
| `'1'` <br> `->'pianist'` | `'Invalid input. Instrument must be either guitarist, bassist, percussionist or flautist.'` | `'Invalid input. Instrument must be either guitarist, bassist, percussionist or flautist.'` |
| `'1'` <br> `->'guitarist'` <br> `->'Em'` | `'Invalid input. Musician name must be between 3 and 30 characters.'` | `'Invalid input. Musician name must be between 3 and 30 characters.'` |
| `'1'` <br> `->'guitarist'` <br> `->'Emma'` <br> `->'-4'` | `'Invalid input. Years playing must be a non-negative integer.'` |  `'Invalid input. Years playing must be a non-negative integer.'` |
| `'1'` <br> `->'guitarist'` <br> `->'Emma'` <br> `->'4'`<br> `->'40'` | `'Invalid input. Hourly rate must be a number greater than 50.'` |  `'Invalid input. Hourly rate must be a number greater than 50.'` |

<br>

## Unit Test 2: Create a troupe

**Testing instructions:**

1. Select option 2 from the main menu by pressing 2.
2. Enter the troupe's name (must be between 3 and 30 characters in length).
4. Enter the troupe's minimum duration in hours (as a number between 0.5 and 3).
5. Enter the troupe's genre by typing one of the following: rock, jazz or pop.

<br>

| Input | Expected output | Actual Output |
|---|---|---|
| `'2'` <br> `->'Pink Floyd'` <br> `->'0.75'` <br> `->'rock'` <br> `->'0.75'` | `'You have successfully created a troupe.'` |`'You have successfully created a troupe.'` | 
| `'two'` | `'Invalid input. Selection must be a number between 1-9.'` | `'Invalid input. Selection must be a number between 1-9.'` |
| `'2'` <br> `->'Pink Floyd'` <br> `->'5'` | `'Invalid input. Minimum duration between 0.5 and 3 hours.'` | `'Invalid input. Minimum duration between 0.5 and 3 hours.'` |
| `'2'` <br> `->'Pink Floyd'` <br> `->'0.75'` <br> `->'country'` | `'Invalid input. Genre must be either rock, jazz or pop.'` |  `'Invalid input. Genre must be either rock, jazz or pop.'` |

<br>

## Unit Test 3: Add a musician to a troupe

**Testing instructions:**

1. Select option 3 from the main menu by pressing 3.
2. Enter the musician's name chosen from the given list.
4. Enter the troupe's name chosen from the given list.

<br>

| Input | Expected output | Actual Output |
|---|---|---|
| `'3'` <br> `->'Emma'` <br> `->'The Strokes'`  | `'Successfully added emma to the strokes.'` |`'Successfully added emma to the strokes.'` | 
| `'3'` <br> `->'Non-existent musician'`| `'Invalid selection. Please enter an existing musician name.'` |`'Invalid selection. Please enter an existing musician name.'` |
| `'3'` <br> `->'Emma'` <br> `->'Non-existent troupe'` | `'Invalid selection. Please enter an existing troupe name.'` |`'Invalid selection. Please enter an existing troupe name.'` |
| `'3'` <br> `->'Jack'` <br> `->'The Strokes'` <br> (6th member addition) | `'This troupe is full. Please select another musician.'` |`'This troupe is full. Please select another musician.'` | 
| `'3'` <br> `->'Emma'` <br> `->'The Strokes'` <br> (Repeat addition) | `'Emma is already a member of The Strokes. Please select another musician.'` |`'Emma is already a member of The Strokes. Please select another musician.'` | 

<br>

## Unit Test 4: Provide a summary description of a troupe

| Input | Expected output | Actual Output |
|---|---|---|
| `'4'` <br> `->'The Strokes'` |`'Summary Description` <br> `==============================` <br> `Troupe name: The Strokes` <br> `==============================` <br> `Members: ` <br> `- Emma` <br> `- Lewis` <br> `Instruments:` <br> `- Guitarists: 1`<br> `- Bassists: 1` <br> `- Percussionists: 0` <br> `- Flautists: 0` <br> `Genre: rock` <br> `Minimum duration: 3 hours` <br> `Hourly rate: $125/hr'`|`'Summary Description` <br> `==============================` <br> `Troupe name: The Strokes` <br> `==============================` <br> `Members: ` <br> `- Emma` <br> `- Lewis` <br> `Instruments:` <br> `- Guitarists: 1`<br> `- Bassists: 1` <br> `- Percussionists: 0` <br> `- Flautists: 0` <br> `Genre: rock` <br> `Minimum duration: 2 hours` <br> `Hourly rate: $125/hr'` | 
| `'4'` <br> `->'Non-existent troupe'` | `'Invalid selection. Please try again.'` |`'Invalid selection. Please try again.'`|
| `'4'` <br> `->'MGMT'` <br> (Troupe containing no members) | `'Summary Description ` <br> `==============================` <br> `Troupe name: MGMT` <br> `==============================` <br> `Members: None` <br> `Genre: rock` <br> `Minimum duration: 3 hours` <br> `Hourly rate: $0/hr'` | `'Summary Description ` <br> `==============================` <br> `Troupe name: MGMT` <br> `==============================` <br> `Members: None` <br> `Genre: rock` <br> `Minimum duration: 2 hours` <br> `Hourly rate: $0/hr'` | 

<br>

## Unit Test 5: Calculate the cost of deploying the troupe for a number of hours

| Input | Expected output | Actual Output |
|---|---|---|
| `'6'` <br> `->'The Strokes'` <br> `->3` <br> | `'Cost of deployment of the strokes for 3 hours is: $375.'` |`'Cost of deployment of the strokes for 3 hours is: $375.'` |
| `'6'` <br> `->'The Strokes'` <br> `->4` | `'Invalid number of hours. Please give a number of hours between 2 and 3.' ` | `'Invalid number of hours. Please give a number of hours between 2 and 3.' `| 

<br>

## Modifications required

No defects were found throughout the unit testing process, hence no modifications were made.