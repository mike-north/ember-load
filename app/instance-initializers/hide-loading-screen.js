import config from '../config/environment';

const userConfig = config['ember-load'] || {};

export function initialize() {
  const instance = arguments[1] || arguments[0];
  const container = !!arguments[1] ? arguments[0] : instance.container;

  let ApplicationView = container.lookupFactory ?
    container.lookupFactory('view:application') :
    instance.resolveRegistration('view:application');

  ApplicationView = ApplicationView.reopen({
    didInsertElement() {
      this._super(...arguments);
      
      var loadingIndicatorClass = userConfig.loadingIndicatorClass || 'ember-load-indicator';
      
      Ember.$(`.${loadingIndicatorClass}`).remove();
    }
  });
}

export default {
  name: 'hide-loading-screen-instance',
  initialize
};
