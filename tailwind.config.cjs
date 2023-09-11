/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            fontSize: {
                '10xl': '12rem',
            },
            colors: {
                bg: '#f8e24d',
                'bg-2': '#f6f6f4',
                text: '#474647',
                'text-2': '#f6f6f4',
                hi: '#1480ae',
            },
        },
    },
    plugins: [],
};
