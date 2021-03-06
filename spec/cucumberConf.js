var env = require('./environment.js');

// A small suite to make sure the cucumber framework works.
exports.config = {
  seleniumAddress: env.seleniumAddress,

  framework: 'custom',
  frameworkPath: '../index.js',

  // Spec patterns are relative to this directory.
  specs: [
    'cucumber/*.feature'
  ],

  capabilities: env.capabilities,

  baseUrl: env.baseUrl,

  cucumberOpts: {
    require: 'cucumber/**/stepDefinitions.js',
    tags: '@dev',
    format: undefined,
    profile: false,
    'no-source': true
  }
};
