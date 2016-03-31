/*jshint node:true*/

var EOL = require('os').EOL;
var chalk = require('chalk');

module.exports = {
  description: 'ember-smooch installation blueprint',

  normalizeEntityName: function() {},

  afterInstall: function() {
    return this.addPackagesToProject([{
      name: 'ember-browserify'
    }, {
      name: 'smooch'
    }])
    .then(function() {
      var output = EOL;
      output += chalk.yellow('Ember Smooch') + ' has been installed. Please configure your Smooch appToken in ' + chalk.green('config/environment.js') + EOL;
      console.log(output);
    });
  }
};
