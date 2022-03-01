module.exports = {
    content: [
        './components/**/*.{vue,js}',
        './layouts/**/*.vue',
        './pages/**/*.vue',
        './plugins/**/*.{js,ts}',
        './nuxt.config.{js,ts}'
    ],
    // darkMode: 'class', // default: 'media'
    theme: {
        extend: {
            textColor: {
                inherit: 'inherit'
            }
        }
    },
    plugins: [
        require('@tailwindcss/forms')
    ]
}
