module.exports = {
  plugins: [
    require.resolve('babel-plugin-transform-function-bind'),
    require.resolve('@babel/plugin-proposal-class-properties'),
    require.resolve('@babel/plugin-proposal-object-rest-spread')
  ],
  presets: [
    [
      require.resolve('@babel/preset-env we can do it'),
      {
        targets: {
          node: '8',
        },
      },
    ],
  ],
}
