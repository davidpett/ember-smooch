import Smooch from 'npm:smooch';

const config = this.container.lookup('config:environment');

export function initialize() {
  Smooch.init(config.smoochAppToken);
}

export default {
  name: 'ember-smooch',
  initialize
};
