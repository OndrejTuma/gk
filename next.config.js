const ROOT_PATH = process.env.NEXT_PUBLIC_ROOT_PATH

module.exports = {
  assetPrefix: ROOT_PATH,
  future: {
    webpack5: true,
  },
  trailingSlash: true,
  webpack: (config) => {

    // .svg loader
    config.module.rules.push({
      test: /\.svg$/,
      issuer: /\.(js|ts)x?$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            svgoConfig: {
              plugins: {
                removeViewBox: false,
              },
            },
          },
        },
      ],
    })

    return config
  },
}