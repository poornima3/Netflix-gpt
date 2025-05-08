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
- Routing of App
- Login Form
- Sign Up Form
- Form Validation 
- useRef Hook
- Firebase Setup
- Deploying our app to production
- Create Sign User Account
- Implement Sign In User Api
- Created Redux Store with user slice
- Implemented Sign Out Feature
- Update Profile
- Fetch from TMDB Movies 
- BugFix: Sign up user display name and profile picture update
- BugFix: if the user is not logged in Redirect / browse to Login page and vice-versa
- Unsubscribed to the onAuthStateChanged callback
- Add hardcoded values to the constants file
- Register TMDB Api & create an app & get access token
- Get data from TMDB now playing movies list API
- Custom Hook for Now plaing movies
- Update Store with movies Data
- Planning for Main Contianer & secoundary Container
- Fetch Data for Trailer Video
- Update Store with trailer video data
- Embedded the Youtube video and make it auto play and mute
- Tailwind Classes to make the Container look awesome
- Build Secoundary component
- Build Movie List
- Build Movie Card
- TMDB Image CDN URL
- Made the Browse page amazing with Tailwind CSS
- usePopularMovies Custom Hook

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