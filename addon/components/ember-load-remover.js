import { inject as service } from '@ember/service';
import Component from '@ember/component';
import layout from '../templates/components/ember-load-remover';

export default Component.extend({
  layout,
  'ember-load-config': service(),
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
    let loadingIndicatorClass =
      this.get('ember-load-config.loadingIndicatorClass') ||
      'ember-load-indicator';
    const elems = document.querySelectorAll(`.${loadingIndicatorClass}`);
    elems.forEach(e => e.remove());
  }
});
