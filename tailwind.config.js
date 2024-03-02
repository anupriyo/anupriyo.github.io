/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./**/*.html"],
    darkMode: "media",
    theme: {
        extend: {
            backdropFilter: {
                none: "none",
                blur: "blur(2px)",
            },
        },
    },
    variants: {
        extend: {
            backdropFilter: ["responsive"], // this line is optional
        },
    },
    plugins: [],
};
