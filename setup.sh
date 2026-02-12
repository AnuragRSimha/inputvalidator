#!/bin/bash

# Author: Anurag R Simha

# This is the project setup wizard. It helps to quickly finish the setup of the project without any user interaction.
# It checks if you have npm and git installed on your computer, and if you don't, it waits until you download them and
# notify the script with "Done". If you do have npm and git installed, it clones the repository, cd's into it, runs
# npm install, and starts the server with npm run dev.

# This script is completely safe to run. There are no viruses injected by this script. 
# It only runs the git and npm commands.

# This script can be found on: https://gitlab.com/anurag.rsimha/cs530-assignment-3/-/blob/main/setup.sh?ref_type=heads

echo "--- Project Setup Wizard ---"

echo "Checking for npm"
while ! command -v npm &> /dev/null; do
    echo "--------------------------------------------------------"
    echo "ERROR: npm (Node Package Manager) was not found."
    echo "1. Please download npm from https://nodejs.org/en"
    echo "OR"
    echo "2. Run apt install npm in another terminal window"
    echo "--------------------------------------------------------"
    
    read -p "Once you have finished installing, type 'Done': " user_input
    
    if [[ "$user_input" == "Done" || "$user_input" == "done" ]]; then
        echo "Re-checking for npm..."
        sleep 1 
    fi
done
echo "npm found! Version: $(npm -v)"
echo ""

echo "Checking for git"
while ! command -v git &> /dev/null; do
    echo "--------------------------------------------------------"
    echo "ERROR: Git was not found."
    echo "1. Please go to https://git-scm.com/downloads"
    echo "2. Download and install Git for your system."
    echo "--------------------------------------------------------"
    
    read -p "Once you have finished installing Git, type 'Done': " user_input
    
    if [[ "$user_input" == "Done" || "$user_input" == "done" ]]; then
        echo "Re-checking for Git..."
        sleep 1 
    fi
done

echo "Git found! Version: $(git --version)"
echo ""

echo "Cloning into repository..."
git clone git@gitlab.com:anurag.rsimha/cs530-assignment-3.git

echo "Switching directory"
cd cs530-assignment-3
echo ""

echo "Running 'npm install'..."
npm install

echo "Launching development server..."
npm run dev