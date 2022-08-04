# MusoPlan Software

## Setup Instructions
1. Copy remote HTTPS link for the repository 'assignment2_1' (created by Emma Nickel).
2. Open VS Code and create a new terminal.
3. Confirm Node.js has been installed by running the command:

        node -v


    If the terminal returns a version (e.g. v18.2.0), then node has been installed to the computer. If not, install node by following the instructions on the following link: https://nodejs.org/en/download/

3. Confirm Git has been installed by running the command:

        git --version

    If the terminal returns a version (e.g. `git version 2.36.1.windows.1`), then Git has been installed to the computer. If not, install Git by following the instructions on the following link: https://git-scm.com/downloads

4. Select desired working directory.
5. Clone the repository to the chosen local directory by running the following command:  

        git clone https://github.com/emmanickel/assignment2_1.git

6. Run the following command and enter the prompted details to be added to the "package.json" file.

        npm init

7. Install the *prompt-sync* package by running the following command:

        npm i prompt-sync

<br>

## Operating Instructions

1. Navigate to the local directory in which the repository has been saved. This can be done using the `cd` command.
2. Run the application from the entry point file "*index.js*" by running the following command:

        node index.js

3. Upon loading of the MusoPlan main menu, select one of the chosen application functions to run by entering a number between 1 and 8 (or 9 to exit the program).
4. Follow the prompts given in the console to execute the required functions of the application.
5. After executing the selected function, the application will return to the main menu (an indefinite number of times). Select the next chosen function by entering another number between 1 and 8. 

<br>