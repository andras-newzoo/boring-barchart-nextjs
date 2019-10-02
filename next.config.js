const withSass = require('@zeit/next-sass');
const withCSS = require("@zeit/next-css");
module.exports = withCSS(withSass({
   webpack (config, options) {
       config.module.rules.push({
           test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
           use: {
               loader: 'url-loader',
               options: {
                   limit: 100000
               },
            },
            // onDemandEntries: {
            //  // period (in ms) where the server will keep pages in the buffer
            //  maxInactiveAge: 25 * 1000,
            //  // number of pages that should be kept simultaneously without being disposed
            //  pagesBufferLength: 5,
        // }
       });

       return config;
   }
}));

