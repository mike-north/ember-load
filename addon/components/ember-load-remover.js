import Ember from 'ember';
import layout from '../templates/components/ember-load-remover';

const { inject, Component, $ } = Ember;

export default Component.extend({
  layout,
  'ember-load-config': inject.service(),
  didInsertElement() {
    this._super(...arguments);
    this.removeLoadingIndicator();
  },
  /**
   * remove the loading indicator. By default this
   * removes the first element with the '.ember-load-indicator'
   * found CSS class from the DOM
   * @public
   */
  removeLoadingIndicator() {
    let loadingIndicatorClass = this.get('ember-load-config.loadingIndicatorClass') || 'ember-load-indicator';
    $(`.${loadingIndicatorClass}`).remove();
  }
});
