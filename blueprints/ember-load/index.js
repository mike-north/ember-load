var VersionChecker = require('ember-cli-version-checker');

module.exports = {
  description: 'install ember-load into a typical project',
  normalizeEntityName: function() {}, // no-op since we're just adding dependencies

  afterInstall: function () {
    var checker = new VersionChecker(this);
    var dep = checker.for('ember', 'bower');

    if (dep.satisfies('>= 2.0')) {
      return this.addPackageToProject('ember-legacy-views', '~0.2.0');
    }
  }
};
