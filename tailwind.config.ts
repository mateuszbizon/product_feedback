import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "light-1": "#ffffff",
        "light-2": "#F7F8FD",
        "light-3": "#F2F4FF",
        "light-4": "#CFD7FF",
        "dark-1": "#373F68",
        "dark-2": "#3A4374",
        "dark-2-bright": "#656EA3",
        "dark-3": "#647196",
        "primary-1": "#AD1FEA",
        "primary-1-bright": "#C75AF6",
        "primary-2": "#4661E6",
        "primary-2-bright": "#7C91F9",
        "primary-3": "#62BCFA",
        "primary-4": "#F49F85",
        "primary-5": "#8397F8",
        "error-1": "#D73737",
        "error-1-bright": "#E98888",
      },
      backgroundImage: {
        "background-header-mobile": "url('/background-header-mobile.png')",
        "background-header-tablet": "url('/background-header-tablet.png')",
      },
      height: {
        "home-header-height": "70px",
      },
    },
  },
  plugins: [],
};
export default config;
