#!/bin/bash

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

REPO_DIR="cs530-assignment-3"
if [ ! -d "$REPO_DIR" ]; then
    echo "Cloning into repository..."
    git clone git@gitlab.com:anurag.rsimha/cs530-assignment-3.git
else
    echo "Directory $REPO_DIR already exists. Skipping clone..."
fi

echo "Switching directory"
cd "$REPO_DIR"
echo ""

echo "Running 'npm install'..."
npm install

echo "Launching development server..."
npm run dev