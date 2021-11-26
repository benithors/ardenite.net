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
        extend: {
            blur: {
                xs: '0.8px',
            },
            dropShadow: {
                md : '0 0 3px rgba(253, 196, 240, 1)',
                xl : '0px 0px 15px rgba(253, 196, 240, 1)',
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
