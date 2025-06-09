/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        blanc: "#f5f5f5", /* Blanc grisé */
        fond: "#d1d5db", /* Gray-300 */
        titre: '#374151', /* Gray-700 */
        blancDark:  "#1f2937", /* Gray-800 */
        fondDark: "#374151", /* Gray-700 */
        titreDark: "#e5e7eb", /* Gray-200 */
      }

    },
  },
  plugins: [],
};
