# Testing Requirements Report
### Emma Nickel

Organisational Requirements to be followed include VCS, Software Development and Software Testing


## Organisational Requirements for Version Control Systems
- All software development must be done using a distributed version control system that most developers are familiar with, and has good online supporting ecosystems

- All development in the version control system must take place on feature branches, so the main branch is exclusively initialisation and then merges

- All commit messages must follow the industry standard of being in the present tense and imperative mood

- Commit scope should be kept to a single change e.g., "Add function foo to example.js" not "Add function foo to example.js, updated configuration file for other_example.json, added error handling for another_one.js"

- Version control systems must be configured so each commit contains the author's name and email address

- All repositories must start with just a README.md file and no source code, do not initialise a repository with code already present

<br>

## Organisational Requirements for Software Development
- All JavaScript programs developed at Globex follow MDN's General JavaScript guidelines which can be found at https://developer.mozilla.org/en-US/docs/MDN/Guidelines/Code_guidelines/JavaScript#general_javascript_guidelines (Links to an external site.)

- All software must have a README.md which includes sections with setup instructions, operating instructions, and testing instructions

- All software must include unit tests of major functionality to guarantee quality

- All JavaScript functions must include a comment describing their behaviour, and accepted types for their parameters

- Code must be commented with the problem solving strategies used in the design and structure of code where appropriate

<br>

## Organisational Requirements for Software Testing
- All automated testing to be done in Jest

- All manual test instructions must be clear enough for anyone to follow and verify the software

- All software must have over 75% coverage of functions tested by automated testing

- A software test plan must include automatic and manual unit testing during a testing phase

- A software test plan must include manual system testing of the program during a testing phase

- A software test plan must include test cases with purposefully invalid, incorrect, or malformed inputs

- Testing requirement reports must include discussion of how testing fits into the SDLC of your project

- All test progress reports must include an appendix with a JUnit xml document of the automated testing results