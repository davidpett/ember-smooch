/* jshint node: true */
'use strict';

const path = require('path');

module.exports = {
  name: 'ember-smooch',

  blueprintsPath() {
    return path.join(__dirname, 'blueprints');
  }
};
