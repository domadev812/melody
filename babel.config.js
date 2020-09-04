// const isTest = String(process.env.NODE_ENV) === 'test';
// const presetEnv = isTest
//   ? ['@babel/preset-env', { modules: 'commonjs', targets: { node: 'current' } }]
//   : ['@babel/preset-env', { modules: false }];

module.exports = {
  presets: [
    // presetEnv,
    '@vue/cli-plugin-babel/preset'
  ],
}
