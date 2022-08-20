const {fontFamily} = require('tailwindcss/defaultTheme');

module.exports = {
    purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {

        extend: {
            colors: {
                pink: '#FDC4F0',
                turquoise: '#80FFEC',
                black: '#000000',
                debug: '#ec0707',
                shopPink: '#FF01B8',
                'brand-black': '#100F0F',
                'brand-black-transparent': 'rgba(16, 15, 15, 0.5)',
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
                InterSans: ['inter', ...fontFamily.sans],
                SourceSans: ['Source Sans Pro', ...fontFamily.sans]
            },
            extend: {
                blur: {
                    xs: '0.842546px',
                    md: '2.5px',
                    xl: '10px',
                    xxl: '20px',
                },
                dropShadow: {
                    xsPink: '0 0 3px rgba(255, 0, 181, 1)',
                    xsGreen: '0 0 3px rgba(128, 255, 236, 1)',
                    md: '0 0 4px rgba(253, 196, 240, 1)',
                    xl: '0px 0px 15px rgba(253, 196, 240, 1)',
                    xxl: '0px 2px 20px rgba(128, 255, 236, 1)',
                }

            },
        }
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
