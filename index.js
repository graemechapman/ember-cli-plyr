/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cli-plyr',
  included: function(app) {
    this._super.included(app);

    app.import(app.bowerDirectory + '/plyr/dist/plyr.js');
    app.import(app.bowerDirectory + '/plyr/dist/plyr.css');
  },
  isDevelopingAddon: function() {
    return true;
  }
};
