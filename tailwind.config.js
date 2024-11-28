/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "custom-black": "2px 4px 0px 0px #000000", // Define your shadow here
      },
    },
  },
  plugins: [],
};
