module.exports = {
  description: 'install ember-load into a typical project',
  normalizeEntityName: function() {}, // no-op since we're just adding dependencies

  afterInstall: function () {
    return this.addPackageToProject('ember-legacy-views', '~0.2.0');
  }
};
