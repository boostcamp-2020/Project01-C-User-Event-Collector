// const withTypescript = require('@zeit/next-typescript');
const withImages = require('next-images')

module.exports = withImages({
  async redirects() {
    return [
      {
        source: '/',
        destination: '/today', // Matched parameters can be used in the destination
        permanent: true,
      },
    ]
  },
})

// webpack 사용시
// module.exports = withTypescript({
//     webpack(config, options) {
//       return config
//     }
//   })