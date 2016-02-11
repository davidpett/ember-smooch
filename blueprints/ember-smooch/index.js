/*jshint node:true*/

var EOL = require('os').EOL;
var chalk = require('chalk');
var fs = require('fs-extra');
var Promise = require('rsvp');
var readFile = Promise.denodeify(fs.readFile);

module.exports = {
  description: 'ember-smooch installation blueprint',

  normalizeEntityName: function() {},

  afterInstall: function(options) {
    var self = this;
    var smoochAppToken = options.appToken || 'YOUR APP TOKEN HERE';

    return self.addPackagesToProject([{
      name: 'ember-browserify',
      target: '1.1.6'
    }, {
      name: 'smooch',
      target: '^2.1.6'
    }])
    .then(function() {
      return self.addToConfig('smoochAppToken', '\'' + smoochAppToken + '\'');
    })
    .then(function() {
      var output = EOL;
      output += chalk.yellow('Ember Smooch') + ' has been installed. Please configure your smooch appToken in ' + chalk.green('config/environment.js') + EOL;
      console.log(output);
    });
  },

  addToConfig: function (key, value) {
    var self = this;
    return this.fileContains('config/environment.js', key + ':').then(function(contains) {
      if (contains) { return true; }

      var options = { after: '    environment: environment,' + EOL };
      return self.insertIntoFile('config/environment.js', '    ' + key + ': ' + value + ',', options);
    });
  },

  fileContains: function (filePath, snippet) {
    return readFile(filePath).then(function (fileContents) {
      return fileContents.toString().indexOf(snippet) !== -1;
    });
  }
};
