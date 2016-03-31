import Ember from 'ember';
import EmberSmoochInitializer from '../../../initializers/browser/ember-smooch';
import { module, test } from 'qunit';

let application;

module('Unit | Initializer | ember smooch', {
  beforeEach() {
    Ember.run(function() {
      application = Ember.Application.create();
      application.deferReadiness();
    });
  }
});

// Replace this with your real tests.
test('it works', function(assert) {
  EmberSmoochInitializer.initialize(application);

  // you would normally confirm the results of the initializer here
  assert.ok(true);
});
