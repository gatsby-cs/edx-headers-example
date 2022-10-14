module.exports = {
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-gatsby-cloud`,
      options: {
        headers: {
          "/event": [
            "X-Frame-Options: ''" // I think this will override it
          ],
          "/images/*": [
            "Cache-Control: public, max-age=3600"
          ]
        }, // option to add more headers.
        allPageHeaders: [
          "Strict-Transport-Security: max-age=31536000; includeSubDomains; preload",
        ], // option to add headers for all pages
      },
    },
  ],
}
