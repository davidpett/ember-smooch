import Smooch from 'npm:smooch';
import config from 'ember-get-config';

export function initialize() {
  Smooch.init(config.smoochAppToken);
}

export default {
  name: 'ember-smooch',
  initialize
};
