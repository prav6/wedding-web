/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
  {
    resolve: `gatsby-plugin-styled-components`,
    options: {
        
    },
  },
  {
    resolve: `react-countdown-now`,
    options: {
        
    },
  },
  

  
  
  
  `gatsby-plugin-image`,
  `gatsby-plugin-sharp`,
  `gatsby-transformer-sharp`,]
  

}

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});


