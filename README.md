[![Build Status](https://travis-ci.org/davidpett/ember-smooch.svg?branch=master)](https://travis-ci.org/davidpett/ember-smooch)
[![npm version](https://badge.fury.io/js/ember-smooch.svg)](https://badge.fury.io/js/ember-smooch)
[![Ember Observer Score](http://emberobserver.com/badges/ember-smooch.svg)](http://emberobserver.com/addons/ember-smooch)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](http://makeapullrequest.com)
[![FastBoot Ready](https://img.shields.io/badge/FastBoot-not%20ready-red.svg)](http://ember-fastboot.com)
# ember-smooch

This wraps the web sdk for [smooch](http://smooch.io) and adds it to your project

## Setup in your app
```
ember install ember-smooch
```

After installing the addon, configure your Smooch App Token in `config/environment.js`:
```
smooch: {
  appToken: 'YOUR-SMOOCH-APP-TOKEN'
}
```

Once configured, you are good to go. You should see the widget in the bottom right of your screen.

For more information about smooch, please see their website at [smooch.io](http://smooch.io)
