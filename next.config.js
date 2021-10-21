module.exports = {
  reactStrictMode: false,
  async rewrites() {
    return [
      // Rewrite everything else to use `pages/index`
      {
        source: '/:any*',
        destination: '/',
      },
    ];
  },
}

