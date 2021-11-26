const {fontFamily} = require('tailwindcss/defaultTheme');

module.exports = {
    purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        colors: {
            pink: '#EA88C9',
            turquoise: '#80FFEC',
            black: '#000000',
        },
        fontFamily: {
            sans: ['Raleway', ...fontFamily.sans]
        },
        extend: {},
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
