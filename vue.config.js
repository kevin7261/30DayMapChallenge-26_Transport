const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  publicPath: '/30DayMapChallenge-25_Hexagons/',
  transpileDependencies: true,
  devServer: {
    port: 8080,
    host: 'localhost',
  },
});
