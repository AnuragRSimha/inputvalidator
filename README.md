# Assignment 3
## Details
<b>Framework: React</b> \
Author: Anurag R Simha \
University ID: 14763701

## Installation Instructions
You can do any one of these:
1. <b>Quick and easy:</b> Run setup.sh for convenience.\
This script is completely safe to run. It only runs a and a set of git and npm commands. \
If you are on a windows machine, either use WSL or Gitbash to run setup.sh.

2. <b>Manual process:</b> Running the steps followed by setup.sh:
<pre>git clone git@gitlab.com:anurag.rsimha/cs530-assignment-3.git</pre>
<pre>cd cs530-assignment-3</pre>
<pre>npm install</pre>
<pre>npm run dev</pre>

Copy and paste/Ctrl+Click the link shown on the terminal window.

If you don't have npm installed, please download it from https://nodejs.org/en or run `apt install npm` if you are on a Linux machine.

## Implementation Details
### Directory Structure Followed
```
├── assets/
│   ├── background.jpg --> Application background         
│   └── react.svg --> Created by default during setup
├── components/
│   ├── DetailsDisplay.jsx --> Displays name and age
│   ├── Form.jsx --> Main form with required elements
│   ├── Layout.jsx --> Wrapper for Form and DetailsDisplay
│   └── validation.js --> JavaScript file that validates user input
├── App.css --> Contains CSS for the entire project
├── App.jsx --> Parent for setting up everything
├── index.css --> Default file created during setup
└── main.jsx --> The root file
```
### File Interaction
- The file, main.jsx acts as the root, which sets up the parent, App.jsx.
- In App.jsx, 