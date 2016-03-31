import Smooch from 'npm:smooch';
import config from 'ember-get-config';

export function initialize() {
  if (config.smooch) {
    Smooch.init(config.smooch);
  } else {
    console.warn('Please enter your Smooch appToken in config/environment.js');
  }
}

export default {
  name: 'ember-smooch',
  initialize
};
