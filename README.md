# JavaScript Code Challenges

A React web application that demonstrates core JavaScript concepts through five practical, real-world coding challenges. The project was built as hands-on practice alongside the **Code Challenges for JavaScript** course on LinkedIn Learning.

![screenshot](./JS_Challenges.gif)

## Tech Stack

- **React 17** (bootstrapped with Create React App)
- **React Router DOM 6**
- Plain JavaScript (ES6+)

## Challenges

Each challenge is an interactive button in the UI that executes a snippet and displays the result inline.

| # | Challenge | JavaScript concept |
|---|-----------|-------------------|
| 01 | **Vegetarian dinner** – filters a menu to show only vegetarian options | `Array.filter()` |
| 02 | **Ticking clock** – displays a live, updating clock | `setInterval`, `Date.toLocaleTimeString()` |
| 03 | **Coffee calculations** – totals a coffee order and applies a 25% markup | `Array.reduce()`, template literals |
| 04 | **Available books** – tracks book inventory and reports stock status | ES6 `class`, getters, default parameters |
| 05 | **Movie object** – builds a movie record and generates a summary string | Constructor functions, prototype chain |

## Getting Started

```bash
cd JavaScriptCodeChallenges
npm install
npm start          # opens http://localhost:3000
```

Run the tests:

```bash
npm test
```

## Reference

Based on the [Code Challenges for JavaScript](https://www.linkedin.com/learning/code-challenges-for-javascript) course on LinkedIn Learning.