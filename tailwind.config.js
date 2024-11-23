/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            container: {
                center: true,
                padding: {
                    sm: "24px",
                    lg: "26px"
                }
            },
            colors: {
                mainDark: "#141414",
                grey: {
                    50: "#F7F8F9",
                    100: "#E7EAEE",
                    300: "#B8C0CC",
                    600: "#4B5768",
                    700: "#323A46",
                    900: "#0D0F11"
                },
                extraBackground: "#F8F7F4",
                buttonStroke: "#EBEBED"
            
            },
            fontFamily: {
                SansJakarta: ["Plus Jakarta Sans", "sans-serif"]
            },
            width: {
                'custom-homepage': 'calc(100% - 230px - 40px)', 
              },
        },
    },
    plugins: [],
};
