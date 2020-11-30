// const withTypescript = require('@zeit/next-typescript');
const withImages = require('next-images')

module.exports = withImages()


// webpack 사용시
// module.exports = withTypescript({
//     webpack(config, options) {
//       return config
//     }
//   })