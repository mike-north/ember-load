import Ember from 'ember';
import config from '../config/environment';

const userConfig = config['ember-load'] || {};

export function initialize() {
  let instance = arguments[1] || arguments[0];
  let container = arguments[1] ? arguments[0] : instance.container;

  if (Ember.View) {
    let ApplicationView = container.lookupFactory
      ? container.lookupFactory('view:application')
      : instance.resolveRegistration('view:application');

    ApplicationView.reopen({
      didInsertElement() {
        this._super(...arguments);

        let loadingIndicatorClass =
          userConfig.loadingIndicatorClass || 'ember-load-indicator';

        document
          .querySelectorAll(`.${loadingIndicatorClass}`)
          .forEach(e => e.remove());
      }
    });
  }
}

export default {
  name: 'hide-loading-screen-instance',
  initialize
};
