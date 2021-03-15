// cucumber.js
let common = [
    'test/features/**/*.feature',                // Specify our feature files
    '--require-module ts-node/register',    // Load TypeScript module
    '--require test/features/step_definitions/*.ts',   // Load step definitions
  ].join(' ');
  
  // eslint-disable-next-line no-undef
  module.exports = {
    default: common
  };