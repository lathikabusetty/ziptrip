# Challenge Implementation

This repository contains the solution for two technical challenges.

## Challenge 1 (JavaScript and CSS)
Located in `challenge1/`.
- `challenge1/pattern.js`: Number pattern printing in JavaScript.
- `challenge1/reverse.js`: Reversing characters in a string.
- `challenge1/unique.js`: Removing duplicates from an array.
- `challenge1/selectors.md`: Answers and explanations for CSS selectors matching.
- `challenge1/layout.html` / `challenge1/layout.css`: Three ways to lay out 3 boxes horizontally using Flexbox, CSS Grid, and Absolute positioning.

## Challenge 2 (Todo Application)
A simple Multi-Page Application (MPA) built with React, Vite, and Express.
	### Features
- **Backend (`challenge2/backend`)**: Express API with full CRUD endpoints. Stores data in `todos.json`.
- **Frontend (`challenge2/frontend`)**: React application configured as an MPA using Vite.
  - Contains two entry points: `index.html` (List of todos) and `todo.html` (Single todo details).
  - Can add, delete, and mark todos as completed on the list page.
  - Clicking a todo navigates to the detailed view using a query parameter.

### How to Run
**Backend:**
```sh
cd challenge2/backend
npm install
node server.js
```

**Frontend:**
```sh
cd challenge2/frontend
npm install
npm run dev
```