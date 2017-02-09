/*jshint node:true*/
module.exports = {
  normalizeEntityName: function() {
  },
  afterInstall: function() {
    // Include bower assets
    return this.addBowerPackageToProject('plyr');
  }
};
