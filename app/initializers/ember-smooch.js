import Smooch from 'npm:smooch';
import config from 'ember-get-config';

export function initialize() {
  Smooch.init({ appToken: config.smoochAppToken });
}

export default {
  name: 'ember-smooch',
  initialize
};
