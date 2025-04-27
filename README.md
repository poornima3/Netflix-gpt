# Netflix GPT

- Create React App (npx create-react-app netflix-gpt)
- Configured TailwindCSS into our app (npm install -g tailwindcss)
- edit tailwind.config.js
  /** @type {import('tailwindcss').Config} */
  module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {},
    },
    plugins: [],
  }
- Header
- Login Form
- Sign Up Form


- inside index.css add
  @tailwind base;
  @tailwind components;
  @tailwind utilities;

- Add routing
  npm i -D react-router-dom

# Features
  - Login / Sign Up
    - Sign In / Sign Up Form
    - Redirect to Browse Page
  - Browse (After Authentication)
    - header
    - Main movie
      - Trailer in Background
      - Title & Description
      - MovieSuggestions
        - MovieLists * N 
  - Netflix GPT
    - Search Bar
    - Movie Suggestions