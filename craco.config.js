const purgecss = require('@fullhuman/postcss-purgecss').default({
  content: ['./public/index.html', './src/**/*.{js,jsx,ts,tsx}'],
  defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
  // Add the safelist property here:
  safelist: {
    standard: [
      'ms-md-4',
      'pt-md-5',
      'pe-md-5',
      'ms-auto', // If you use ms-auto for centering
      'm-auto',  // If you use m-auto as in your App.js for the logo
      'p-auto',  // As used in your App.js for the logo
      'mt-5',    // As used in your App.js for the slogan and Register component
      /^mt-/, 
      /^mb-/, 
      /^ms-/, 
      /^me-/, 
      /^m-/,  
      /^p-/,  
      /^pt-/, 
      /^pb-/, 
      /^ps-/, 
      /^pe-/, 
      /^text-/, 
      /^d-/,   
      /^flex-/,
      /^w-/,   
      /^h-/,   
      /^align-items-/, 
      /^justify-content-/, 
      
    ],
    },
  });

  module.exports = {
    style: {
      postcss: {
        plugins: [
          require('autoprefixer'),
          ...(process.env.NODE_ENV === 'production' ? [purgecss] : []),
        ],
      },
    },
  }
  