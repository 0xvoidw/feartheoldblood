// gatsby-config.js
module.exports = {
    siteMetadata: {
      name: "Fear The Old Blood",
      description: "",
      keywords: ["tech", "blog", "reviews", "life"],
      siteUrl: 'https://gatsby-theme-terminal.netlify.com',
      siteImage: 'hunter.png', // pop an image in the static folder to use it as the og:image,
      profileImage: 'hunter.png'
      lang: `eng`,
      config: {
        sidebarWidth: 240 // optional,
      },
    },
    plugins: ['@pauliescanlon/gatsby-theme-terminal']
  }
