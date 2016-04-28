/* jshint node: true */
'use strict';

var filterInitializers = require('fastboot-filter-initializers');

module.exports = {
  name: 'ember-smooch',

  preconcatTree: function(tree) {
    return filterInitializers(tree, this.app.name);
  }
};
