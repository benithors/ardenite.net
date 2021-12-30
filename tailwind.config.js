const {fontFamily} = require('tailwindcss/defaultTheme');

module.exports = {
    purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        colors: {
            pink: '#EA88C9',
            turquoise: '#80FFEC',
            black: '#000000',
            debug: '#ec0707',
        },
        opacity: {
            '0': '0',
            '25': '.25',
            '50': '.5',
            '75': '.75',
            '10': '.1',
            '20': '.2',
            '30': '.3',
            '40': '.4',
            '60': '.6',
            '70': '.7',
            '80': '.8',
            '90': '.9',
            '100': '1',
        },
        fontFamily: {
            sans: ['Raleway', ...fontFamily.sans]
        },
        extend: {
            blur: {
                xs: '0.842546px',
                md: '2.5px',
                xl: '10px',
                xxl: '20px',
            },
            dropShadow: {
                xs : '0 0 2px rgba(253, 196, 240, 1)',
                md : '0 0 3px rgba(253, 196, 240, 1)',
                xl : '0px 0px 15px rgba(253, 196, 240, 1)',
                xxl : '0px 2px 20px rgba(128, 255, 236, 1)',
            }

        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
