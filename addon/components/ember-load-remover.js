import Ember from 'ember';
import layout from '../templates/components/ember-load-remover';

const { inject } = Ember;

export default Ember.Component.extend({
  layout,
  'ember-load-config': inject.service(),
  didInsertElement() {
    this._super(...arguments);
    const loadingIndicatorClass = this.get('ember-load-config.loadingIndicatorClass') || 'ember-load-indicator';
    Ember.$(`.${loadingIndicatorClass}`).remove();
  }
});
