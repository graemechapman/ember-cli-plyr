/* jshint node: true */
'use strict';

var path = require("path");
var resolve = require("resolve");
var Funnel = require('broccoli-funnel');
var MergeTrees = require('broccoli-merge-trees');
 module.exports = {
  name: 'ember-cli-plyr',
   treeForVendor(tree) {
    var plyrPath = path.join(path.dirname(resolve.sync('plyr')), '../../dist');
    var plyrTree = new Funnel(plyrPath, {
      files: [
        'plyr.js',
        'plyr.css'
      ],
      destDir: '/plyr/dist',
    });
     return new MergeTrees([tree, plyrTree]);
  },
  included: function(app) {
    this._super.included(app);

    app.import('vendor/plyr/dist/plyr.js');
    app.import('vendor/plyr/dist/plyr.css');
  },
  isDevelopingAddon: function() {
    return true;
  }
};

