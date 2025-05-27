const purgecss = require('@fullhuman/postcss-purgecss').default({
  content: ['./public/index.html', './src/**/*.{js,jsx,ts,tsx}'],
  defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
  // Add the safelist property here:
  safelist: {
    standard: [
      'ms-md-4',
      'pt-md-5',
      'pe-md-5',
      'ms-auto', 
      'm-auto',  
      'p-auto', 
      'mt-5',
      'w-md-25',  
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
  