/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
  {
    resolve: `gatsby-plugin-s3`,
    options: {
        bucketName: 'www.sandpwedding.co.uk',
    },
  },

  
  
  `react-countdown-now`]
  

}

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});


