/* jshint node: true */
'use strict';

var filterInitializers = require('./lib/broccoli/filter-initializers');

module.exports = {
  name: 'ember-smooch',

  preconcatTree: function(tree) {
    if (process.env.EMBER_CLI_FASTBOOT) {
      return filterInitializers(tree, 'browser', this.app.name);
    }
    return tree;
  }
};
