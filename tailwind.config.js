// Pastikan impor dengan benar
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "36px",
    },
    extend: {
      colors: {
        satu: "#01204E", // Contoh warna primer
        dua: "#028391",
        tiga: "#F6DCAC",
        empat: "#FEAE6F", // Contoh warna sekunder
        accent: {
          100: "#E2E7F0", // Contoh warna aksen dengan variasi
          200: "#C4D2E4",
          300: "#A6BCEA",
          // ... tambahkan lebih banyak sesuai kebutuhan
        },
      },
    },
  },
  plugins: [],
});
