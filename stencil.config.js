const sass = require('@stencil/sass');
exports.config = {
  plugins: [
    sass()
  ],
  outputTargets: [
    {
      type:'www',
      dir:'docs',
      baseUrl: '/stencil-todo'
    }
  ]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
};
