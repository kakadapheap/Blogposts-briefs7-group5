// // tailwind.config.js
// export const content = ["./src/**/*.{js,jsx,ts,tsx}"];
// export const theme = {
//   extend: {
//     keyframes: {
//       typing: {
//         from: { width: "0" },
//         to: { width: "100%" },
//       },
//       blink: {
//         "50%": { borderColor: "transparent" },
//         "100%": { borderColor: "white" },
//       },
//       fadeInUp: {
//         "0%": { opacity: 0, transform: "translateY(20px)" },
//         "100%": { opacity: 1, transform: "translateY(0)" },
//       },
//     },
//     animation: {
//       typing: "typing 2s steps(20) 1 forwards",
//       blink: "blink 1s step-end infinite",
//       fadeInUp: "fadeInUp 1s ease-out forwards",
//     },
//   },
// };
// export const plugins = [];

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        fadeInUp: {
          "20%": { opacity: "0", transform: "translateY(10px)" },
          "80%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        fadeInUp: "fadeInUp 0.5s ease-out",
      },
    },
  },
  plugins: [],
};
