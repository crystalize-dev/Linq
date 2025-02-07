/** @type {import('tailwindcss').Config} */
const config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}'
    ],
    darkMode: 'selector',
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: 'var(--primary)',
                    dark: 'var(--primary-dark)'
                },
                light: {
                    DEFAULT: 'var(--bg-full)',
                    secondary: 'var(--bg-object)',
                    border: 'rgba(0,0,0,0.2)'
                },
                dark: {
                    DEFAULT: 'var(--bg-full-dark)',
                    secondary: 'var(--bg-object-dark)',
                    border: 'rgba(255,255,255,0.2)'
                }
            }
        }
    },
    plugins: ['prettier-plugin-tailwindcss']
};

export default config;
