/*jshint node:true*/

var chalk = require('chalk');
var EOL = require('os').EOL;

module.exports = {
  description: 'ember-smooch installation blueprint',

  normalizeEntityName: function() {},

  afterInstall: function(options) {
    var self = this;
    var smoochProps = {
      appToken: null,
      givenName: null,
      surname: null,
      email: null,
      properties: null
    };
    return self.addPackagesToProject(['ember-browserify', 'smooch'])
    .then(function() {
      return self.addToConfig('smooch', '\'' + smoochProps + '\'');
    })
    .then(function() {
      var output = EOL;
      output += chalk.yellow('Ember Smooch') + ' has been installed. Please configure your smooch appToken in ' + chalk.green('config/environment.js') + EOL;
      console.log(output);
    });
  }
};
