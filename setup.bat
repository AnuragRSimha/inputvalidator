@echo off
setlocal enabledelayedexpansion

:: Author: Anurag R Simha
:: This is the project setup wizard for Windows.
:: It checks for npm and git, clones the repository, installs dependencies, and starts the server.

echo --- Project Setup Wizard ---

:CHECK_NPM
echo Checking for npm...
where npm >nul 2>nul
if %errorlevel% equ 0 (
    for /f "delims=" %%v in ('npm -v') do set npm_ver=%%v
    echo npm found! Version: !npm_ver!
    echo.
    goto CHECK_GIT
)

echo --------------------------------------------------------
echo ERROR: npm (Node Package Manager) was not found.
echo 1. Please download npm from https://nodejs.org/en
echo OR
echo 2. Install it via a package manager like Chocolatey or Winget.
echo --------------------------------------------------------

:WAIT_NPM
set /p user_input="Once you have finished installing, type 'Done': "
if /i "%user_input%"=="Done" (
    echo Re-checking for npm...
    timeout /t 1 >nul
    goto CHECK_NPM
) else (
    goto WAIT_NPM
)

:CHECK_GIT
echo Checking for git...
where git >nul 2>nul
if %errorlevel% equ 0 (
    for /f "delims=" %%v in ('git --version') do set git_ver=%%v
    echo !git_ver! found!
    echo.
    goto PROCEED
)

echo --------------------------------------------------------
echo ERROR: Git was not found.
echo 1. Please go to https://git-scm.com/downloads
echo 2. Download and install Git for Windows.
echo --------------------------------------------------------

:WAIT_GIT
set /p user_input="Once you have finished installing Git, type 'Done': "
if /i "%user_input%"=="Done" (
    echo Re-checking for Git...
    timeout /t 1 >nul
    goto CHECK_GIT
) else (
    goto WAIT_GIT
)

:PROCEED
echo Cloning into repository...
git clone git@gitlab.com:anurag.rsimha/cs530-assignment-3.git

echo Switching directory...
cd cs530-assignment-3

echo Running 'npm install'...
call npm install

echo Launching development server...
echo --------------------------------------
call npm run dev

pause