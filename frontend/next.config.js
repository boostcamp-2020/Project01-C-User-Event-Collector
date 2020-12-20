// const withTypescript = require('@zeit/next-typescript');
const withImages = require('next-images')

module.exports = withImages({
  async redirects() {
    return [
      {
        source: '/',
        destination: '/today', 
        permanent: true,
      },
    ]
  },
})
