export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#0b1220",
        card: "rgba(18, 24, 38, 0.75)",
        border: "rgba(255,255,255,0.08)",
        text: "#E7ECFF",
        sub: "#9AA5CE",
        accent: "#5B9DFF"
      },
      boxShadow: { soft: "0 8px 30px rgba(0,0,0,.35)" },
      backdropBlur: { xs: "2px" }
    }
  },
  plugins: []
};
