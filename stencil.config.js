const sass = require('@stencil/sass');
exports.config = {
  plugins: [
    sass()
  ],
  outputTargets: [
    {
      type: 'www',
      dir: 'docs'
    }
  ]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
};
