/* jshint node: true */
'use strict';

 module.exports = {
  name: 'ember-cli-plyr',
  included: function(app) {
    this._super.included(...arguments);

    app.import('node_modules/plyr/dist/plyr.css');
  },
  isDevelopingAddon: function() {
    return true;
  }
};

