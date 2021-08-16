module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'archivo': ['Archivo'],
        'display': ['Archivo'],
        'body': ['Archivo'],
       }
    },
  },
  variants: {
    extend: {
        display: ["group-hover"],
    },
  },
  plugins: [],
}
