# Testing Report

### Emma Nickel

<br>

## Test Case 1: Create a musician

| Input | Expected output | Actual Output |
|---|---|---|
| `'1'` <br> `->'guitarist'` <br> `->'Emma'` <br> `->'4'` <br> `->'70'` | `'You have successfully created a musician.'` | `'You have successfully created a musician.'` | 
| `'1'` <br> `->'pianist'` | `'Invalid input. Instrument must be either guitarist, bassist, percussionist or flautist.'` | `'Invalid input. Instrument must be either guitarist, bassist, percussionist or flautist.'` |
| `'1'` <br> `->'guitarist'` <br> `->'Em'` | `'Invalid input. Musician name must be between 3 and 30 characters.'` | `'Invalid input. Musician name must be between 3 and 30 characters.'` |
| `'1'` <br> `->'guitarist'` <br> `->'Emma'` <br> `->'-4'` | `'Invalid input. Years playing must be a non-negative integer.'` |  `'Invalid input. Years playing must be a non-negative integer.'` |
| `'1'` <br> `->'guitarist'` <br> `->'Emma'` <br> `->'4'`<br> `->'40'` | `'Invalid input. Hourly rate must be a number greater than 50.'` |  `'Invalid input. Hourly rate must be a number greater than 50.'` |

<br>

## Test Case 2: Create a troupe

| Input | Expected output | Actual Output |
|---|---|---|
| `'2'` <br> `->'Pink Floyd'` <br> `->'0.75'` <br> `->'rock'` <br> `->'70'` | `'You have successfully created a troupe.'` |`'You have successfully created a troupe.'` | 
| `'two'` | `'Invalid input. Selection must be a number between 1-9.'` | `'Invalid input. Selection must be a number between 1-9.'` |
| `'2'` <br> `->'Pink Floyd'` <br> `->'5'` | `'Invalid input. Minimum duration between 0.5 and 3 hours.'` | `'Invalid input. Minimum duration between 0.5 and 3 hours.'` |
| `'2'` <br> `->'Pink Floyd'` <br> `->'0.75'` <br> `->'country'` | `'Invalid input. Genre must be either rock, jazz or pop.'` |  `'Invalid input. Genre must be either rock, jazz or pop.'` |

<br>

## Test Case 3: Add a musician to a troupe

| Input | Expected output | Actual Output |
|---|---|---|
| `'3'` <br> `->'Emma'` <br> `->'The Strokes'`  | `'Successfully added emma to the strokes.'` |`'Successfully added emma to the strokes.'` | 
| `'3'` <br> `->'Non-existent musician'`| `'Invalid selection. Please enter an existing musician name.'` |`'Invalid selection. Please enter an existing musician name.'` |
| `'3'` <br> `->'Emma'` <br> `->'Non-existent troupe'` | `'Invalid selection. Please enter an existing troupe name.'` |`'Invalid selection. Please enter an existing troupe name.'` | 
| `'3'` <br> `->'Emma'` <br> `->'The Strokes'` <br> (Repeat addition) | `'Emma is already a member of The Strokes. Please select another musician.'` |`'Emma is already a member of The Strokes. Please select another musician.'` | 

<br>

## Test Case 4: Provide a summary description of a troupe

| Input | Expected output | Actual Output |
|---|---|---|
| `'4'` <br> `->'The Strokes'` |`'Summary Description` <br> `==============================` <br> `Troupe name: The Strokes` <br> `==============================` <br> `Members: ` <br> `- Emma` <br> `- Lewis` <br> `Instruments:` <br> `- Guitarists: 1`<br> `- Bassists: 1` <br> `- Percussionists: 0` <br> `- Flautists: 0` <br> `Genre: rock` <br> `Minimum duration: 3 hours` <br> `Hourly rate: $125/hr'`|`'Summary Description` <br> `==============================` <br> `Troupe name: The Strokes` <br> `==============================` <br> `Members: ` <br> `- Emma` <br> `- Lewis` <br> `Instruments:` <br> `- Guitarists: 1`<br> `- Bassists: 1` <br> `- Percussionists: 0` <br> `- Flautists: 0` <br> `Genre: rock` <br> `Minimum duration: 2 hours` <br> `Hourly rate: $125/hr'` | 
| `'4'` <br> `->'Non-existent troupe'` | `'Invalid selection. Please try again.'` |`'Invalid selection. Please try again.'`|
| `'4'` <br> `->'MGMT'` <br> (Troupe containing no members) | `'Summary Description ` <br> `==============================` <br> `Troupe name: MGMT` <br> `==============================` <br> `Members: None` <br> `Genre: rock` <br> `Minimum duration: 3 hours` <br> `Hourly rate: $0/hr'` | `'Summary Description ` <br> `==============================` <br> `Troupe name: MGMT` <br> `==============================` <br> `Members: None` <br> `Genre: rock` <br> `Minimum duration: 2 hours` <br> `Hourly rate: $0/hr'` | 

<br>

## Test Case 5: Calculate the cost of deploying the troupe for a number of hours

| Input | Expected output | Actual Output |
|---|---|---|
| `'6'` <br> `->'The Strokes'` <br> `->3` <br> | `'Cost of deployment of the strokes for 3 hours is: $375.'` |`'Cost of deployment of the strokes for 3 hours is: $375.'` |
| `'6'` <br> `->'The Strokes'` <br> `->4` | `'Invalid number of hours. Please give a number of hours between 2 and 3.' ` | `'Invalid number of hours. Please give a number of hours between 2 and 3.' `| 

<br>

## Modifications required

No defects were found throughout the unit testing process, hence no modifications were made.