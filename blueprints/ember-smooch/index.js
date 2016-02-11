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
    return self.addPackagesToProject([{
      name: 'ember-browserify',
      target: '1.1.6'
    }, {
      name: 'smooch',
      target: '^2.1.6'
    }])
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
