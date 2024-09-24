/** @type {import('tailwindcss').Config} */
export default {
  content:
   ["./index.html",
    "./src/**/*.{js,jsx}" 
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-bg': "url('../src/Asset/back1.png')",
         'cus1': "url('../src/Asset/cus1.png)",
        //  'contact':"url('../src/Asset/contact.png')"
      },
       inset:{
        'custom-img':"url('../src/Asset/innova.png')",
       },
       width:{
         'bg-width':" 100%",
       },
       
    },
  },
  plugins: [],
}

