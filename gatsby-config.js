module.exports = {
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`,
  },
  trailingSlash: "never",
  plugins: [
    {
      resolve: `gatsby-plugin-gatsby-cloud`,
      options: {
        // option to add more headers
        headers: {
          "/event": [
            "X-XSS-Protection: 1; mode=block",
            "X-Content-Type-Options: nosniff",
            "Referrer-Policy: same-origin",
          ],
          "/event/": [
            "X-XSS-Protection: 1; mode=block",
            "X-Content-Type-Options: nosniff",
            "Referrer-Policy: same-origin",
          ],
          "/images/*": [
            "Cache-Control: public, max-age=3600"
          ],
          "/*": [
            "X-XSS-Protection: 1; mode=block",
            "X-Content-Type-Options: nosniff",
            "Referrer-Policy: same-origin",
            "X-Frame-Options: DENY"
          ],
        },
        mergeSecurityHeaders: false,
        // option to add headers for all pages
        allPageHeaders: [
          "Strict-Transport-Security: max-age=31536000; includeSubDomains; preload",
        ],
      },
    },
  ],
}
