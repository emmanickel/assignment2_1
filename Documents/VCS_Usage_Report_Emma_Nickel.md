# VCS Usage Report

### Emma Nickel

<br>

## Difficulties during development

Overall my experience with using the Git VCS (in conjunction with the GitHub platform) for the MusoPlan project was straight-forward and problem-free. While it did take some time to get into the habit of frequently making commits after single changes, I soon adjusted and became comfortable with the process.

One small challenge I did face during the development process was ensuring that I was on the correct feature branch before continuing development. I had two branches: one called *jsFiles* (containing all project ".js" files) and one called *assignmentDocs* (containing report documents as ".md" files). Files created on one branch can only be accessed from the branch upon which they were created, and all modified files must be committed before switching branches.


<br>

## Compliance with organisational requirements

I ensured that the VCS organisational requirements for the project were complied with by:
- Choosing the suitable distributed VCS, Git, for project development
- Undertaking all development on feature branches (leaving the main branch for initialisation and merges only)
- Ensuring all commit messages made followed the industry standard of being in the present tense and imperative mood, as well as containing both the author's name and email address
- Ensuring all commits were kept to a single change
- Including a README.md file at the start of the repository, and ensuring no source code was present

<br>

## Verification that the VCS was performing as expected

To verify the chosen VCS (Git) was performing as expected, the project was setup carefully by running all of the required commands. During the development process, the functioning of Git was confirmed by running the following command frequently:

        git status

This command returns the current status of staged, tracked and untracked files, allowing the relevant file stages and commits to be made.

**Git branches:** Immediately after initialising the repository, feature branches were created for development as this is standard industry practice (and an organisational requirement of Globex Corporation). This can be done by running the command:

    git branch jsFiles

Switching between branches was achieved using the command:

    git checkout branchName

All development on JS files was conducted on a branch called *jsFiles* and all development on project reports was conducted on the branch *assignmentDocs*.


**Git stages:** Files are staged in preparation for being committed using the command:

    git add fileName.js

**Git commits:** A commit is used to save changes made to a staged file to the local repository. During development, commits were made frequently (after every single change) with detailed messages explaining the change (in the industry standard format of present imperative tense). In accordance with organisational requirements, all commits featured the author's name, email address and the time the commit was made.


**Git merges:** The feature branches were later merged to the main branch once development was complete. To merge to main, first switch to the main branch, then run the command:

    git merge branchname


**Git push/pull to share commits with remotes:** The push command uploads content from the local repository to the remote repository. The pull command fetches content from the remote repository in order to update the local repository to match.

During the project development, no push or pulls were conducted to share with remote repositories because all development took place individually (no collaboration) in the local repository. The completed project (after feature branches were merged to main) was pushed to the remote repository using the command:

    git push origin


**Git pull requests:** A pull request is used when a developer forks from someone's remote repository and wants to integrate their changes. It involves *requesting* that the other developer pulls your work from your repostory to their repository, and can be set up using the GitHub GUI. No pull requests were required as part of this project no collaboration was involved.
 


**Git commit log:** The frequent checking of the commit history as important in ensuring commits were successful and followed a logical order. The git commit log can be accessed by running the command:

    git log

<br>

## If your repository was forked from another repository, how would you go about having them integrate your changes to the central repository? 

To integrate changes made to a repository which was forked from another repository, a pull request must be sent to the author of the repository that was forked from. This can be done using the GitHub platform, and description messages can be added to communicate the change request. Any changes made in a local version of the repository must first be committed and pushed to your remote copy of the repository before sending the pull request.

<br>

## References

Git Remote | Atlassian Git Tutorial. (2022). Retrieved 3 August 2022, from https://www.atlassian.com/git/tutorials/syncing