exports.config = {
  runner: 'local',
  framework: 'mocha',
  reporters: ['spec'],
  specs: ['./specs/*.test.js'],

  logLevel: 'warn',
  capabilities: [
    {
      maxInstances: 5,
      browserName: 'chrome',
      // 'moz:firefoxOptions': {
      //   args: ['-headless']
      // }
    }
  ],

  // onPrepare() {
  //   require('geckodriver').start();
  // },

  // onComplete() {
  //   require('geckodriver').stop();
  // }
};
