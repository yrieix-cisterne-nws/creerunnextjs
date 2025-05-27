/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blanc: "#f5f5f5", /* Blanc grisé */
        fond: "#d1d5db", /* Gray-300 */
        titre: '#374151', /* Gray-700 */
      }

    },
  },
  plugins: [],
};
