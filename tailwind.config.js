/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './**/*.{html,js}',  // This will include all HTML and JS files in the src folder and its subdirectories.
    './scripts/**/*.{js,ts}', // This will include all JavaScript and TypeScript files in the scripts folder.
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
