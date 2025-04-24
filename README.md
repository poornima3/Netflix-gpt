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

- inside index.css add
  @tailwind base;
  @tailwind components;
  @tailwind utilities;