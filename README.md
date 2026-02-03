// Behzad Ghabaei
// CS 81 - JavaScript
// Assignment 9A
// README.md - UserProfile.jsx - App.jsx - ContactCard.jsx
// Instructor Seno

## Description
This project is a modern web application built using the Vite build tool and the React library.
Its primary purpose is to display a UserProfile component that shows a user's professional
headshot, name, and a short biography. I used the code provided and some help with the inline CSS
styles to ensure the component is visually appealing and centered on the screen without needing
external stylesheets. This setup serves as a foundational exercise in understanding how data flows
from variables into a user interface.

## What I Learned
Through this assignment, I learned how to practice on a fast development environment using the NPM Vite
Template command. I gained first time experience writing JSX, which allowed me to combine HTML-like structures
directly with JavaScript. I also practiced building a functional component, learning how to export it
from one file and import it into App.jsx and, Finally, I was introduced to the syntax for inline styling
in React, which uses camelCase properties and object-based values rather than standard CSS strings.

## Challenges
One of the first hurdles I encountered was a PowerShell execution policy error that initially prevented me
from running any npm scripts on my machine. I solved this by using the Set-ExecutionPolicy command in an administrative
terminal to temporarily allow script execution. I also faced a "non-fast-forward" error when pushing to GitHub, which
happened because my local branch was out of sync with the remote repository. By learning to use git pull with the --allow-unrelated-histories
flag, I was able to merge the two versions and successfully upload my code.  I wasn't sure if I could upload random images
of people with the names which were provided but I did this for practicing on the localhost browser.

## Screenshot
<img width="1366" height="708" alt="DevTeam" src="https://github.com/user-attachments/assets/5392dc58-1eb0-4873-8ad2-37470d9b62c8" />




//previous README.md file (ignore all below this line)
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
