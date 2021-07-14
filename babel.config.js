module.exports = {
    presets: [
      ['@babel/preset-env', {targets: {node: 'current'}}],
      ['@babel/preset-react', {targets: {node: 'current'}}] // add this
    ],
    plugins: [
        "@babel/plugin-proposal-class-properties",
        {
            "loose": true
        }
    ]
  };