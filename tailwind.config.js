/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'light-blue': "url('https://wallpapers.com/images/hd/plain-light-blue-background-2000-x-1997-7zhb45hop2v9m4by.jpg')",
      },
    },
  },
  plugins: [],
};
