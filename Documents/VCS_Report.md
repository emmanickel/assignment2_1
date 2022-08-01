# VCS Report
### Emma Nickel

## Criteria:

    Research and choose version control system (VCS) according to organisational requirements, Explain how the VCS you choose fits with the organisational requirements.

    - Identify VCS pre-installation factors, then communicate any installation disruptions or requirements according to organisational policies and procedures.

    - Install VCS and create personal account and push changes from branch according to VCS service provider and organisational requirements.

    - Configure tools and user interface of VCS according to organisational requirements

    - Create local repository and directory according to service provider procedures and organisational requirements

    - Demonstrates knowledge of distributed and centralised version control systems, web-based DevOps lifecycle tools , DevOps automation tools, principles and techniques of creating repositories and branch workflows, and distributed version control industry standard best practices

    - Write VCS report as markdown file and commit to project repository.

    - Report Includes 400 - 600 Words

<br>

Version Control Systems (VCS) are software tools used to track changes in files over time. In software development they allow teams to contribute to and monitor simultaneous source code modifications. A VCS also allows proposed changes to be integrated smoothly.

<br>

## Different VCS Investigated:

**Git**

Got is a free distributed VCS, meaning that versions can be saved in a server-side remote repository as well as in local repositories on the client's machine.
Git was launched in 2005 by Linus Torvalds and currently holds 80% of VCS market share. It is written in C, Shell, Perl, TCL (Tool Command Language), and Python. Although it has a steep learning curve, Git's wide use means most developers are familiar with its operation.

<br>

**Concurrent Versioning System (CVS)**

CVS is a free client-server revision control system that was developed in the UNIX OS environment. Developed by Dick Grune in 1986, CVS is used with both commercial and open source developers. It operates as a front end to Revizion Control System, which is an older VCS that managed files individually rather than whole projects. CVS keeps a working master copy of the file up-to-date and requires manual intervention only when an edit conflict occurs.
This enables multiple developers to work on a file (their own copy) simultaneously without losing data. The 'branches' can later be merged to a single copy. CVS uses delta compression for efficient storage of different file versions.

<br>
	
**Mercurial**

Mercurial is a free distributed VCS. Sometimes referred to as a revision control system or Mercurial source control, Mercurial was launched in 2005 led by developer Olivia Mackall. While Mercurial is used by Facebook, Mozilla and the World Wide Web Consortium (W3), it holds only has 2% of VCS market share.
Mercurial was written mainly in Python, and partly with C. Mercurial is similar in power to Git, however many developers find it easier to learn.

<br>

##	Benefits of different VCS:

 Provides strong support for non-linear development
-	Offers cryptographic authentication of history
-	Garbage accumulates until collected
-	Periodic explicit object packing


| |  Git | CVS | Mercurial |
|---|---|---|---|
| Benefits | Distributed Model <br> Many commands – more powerful <br> Fast and efficient performance Can be used for small or large projects, but more effective for larger scale Cross-platform <br> Allows clear tracking of code changes <br> Full history tree available offline <br> Powerful CL utility git bash can be used or user-friendly GIT GUI |	Excellent cross-platform support <br> Powerful, fully-featured command-line client <br> Very old and well understood (considered to be a ‘mature technology’ <br> Allows good web browsing of source code repository | Distributed Model <br> Safer for less experienced users <br> Conceptually simple to use – easy to learn (than git) <br> Fast and powerful |
| Disadvantages | Historylogs can become confusing in larger and more complex projects <br> Can be difficult to learn <br> Not optimal for single developers (better for larger teams) <br> Limited Windows support compared to Linux | No integrity checking for source code repository <br> Movingrenaming files does not include a version update <br> Doesn’t support atomic (all file) checkouts and commits <br> Poor support for distributed source control <br> Doesn’t support signed revisions or merge tracking <br> Branch operations expensive as not designed for long-term branching <br> Security risks from symbolic links to files | Problematic when used with additional extensions <br> Partial checkouts not allowed <br> Doesn’t allow 2 parents to be merged  <br> Uses an extension system rather than being scriptable <br> Less out of the box power (than git) |

<br>

## How the chosen VCS fits organisational requirements:
**Chosen VCS: Git**

While it has a steep learning curve, Git’s power as a distributed VCS and wide use in industry makes it a good choice for Globex Corporation in the MusoPlan project. The use of Git will allow Globex’s software developers to work as a team simultaneously, with all development to take place on feature branches (leaving the main branch exclusively for initialisation and merges). Git also allows all commits to be made with industry standard messages that clearly track all changes in detail, containing the author’s name and email address.

<br>

## Installation process

To install Git on a Windows computer, follow the steps below:
1. Download the latest Git for Windows from the official website: https://git-scm.com/download/win
3. Click on the .exe file (in your Downloads folder) to run the installer.and follow the instructions in the installer.
4. Launch the Git Bash application.
5. Windows will prompt the following message: “Do you want to allow this app to make changes to your device?”. Click *Yes*.
6. Select *Next* in all of the following steps to install Git Bash using default settings.
7. Select *Finish* to complete the installation process.
8. Launch Git, either by running the Git Bash application or through your default editor.
9. Confirm Git has been installed correctly by running the following command:

        git --version

    If the terminal returns a version of Git (e.g. `git version 2.36.1.windows.1`), it has been successfully installed to your system.

<br>

**Common Git Installation Issues:**

Common Git installation issues include:
- Git is already installed to the system
- The user did not select the recommended PATH environment (*use Git from the command line and also from 3rd-party software*)

<br>

**Git Pre-Installation Factors???**

<br>

**Configuration process:** 

In order to configure Git so that all commits show the author's name and email, run the following commands:

Configure author's name:

    git config --global user.name "Emma"

Configure author's email:

    git config --global user.email emmajanenickel@gmail.com

To confirm the configuration details have been set correctly, you may run the command:

    git config --list

To show all configuration details, run the command:

    git config --list --show-origin

<br>

## References:
https://medium.com/@derya.cortuk/version-control-software-comparison-git-mercurial-cvs-svn-21b2a71226e4

https://www.educative.io/answers/how-to-install-git-bash-in-windows

https://devopsbuzz.com/centralized-vs-distributed-version-control-systems/#:~:text=The%20concept%20of%20a%20centralized,repo%20on%20the%20server%20side.

https://biz30.timedoctor.com/git-mecurial-and-cvs-comparison-of-svn-software/

https://www.stanleyulili.com/git/how-to-install-git-bash-on-windows/#step-1-downloading-git-bash

https://www.perforce.com/blog/vcs/what-is-version-control#:~:text=Version%20control%2C%20also%20known%20as,binary%20files%2C%20and%20digital%20assets.

https://www.oreilly.com/library/view/essential-cvs-2nd/0596527039/ch01.html