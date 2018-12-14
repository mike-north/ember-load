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
   * removes all elements with the '.ember-load-indicator'
   * found CSS class from the DOM
   * @public
   */
  removeLoadingIndicator() {
    let loadingIndicatorClass =
      this.get('ember-load-config.loadingIndicatorClass') ||
      'ember-load-indicator';
    const elems = document.querySelectorAll(`.${loadingIndicatorClass}`);
    /**
     * Very important to iterate over the NodeList this way,
     * and remove the DOM elements via removeChild to maintain ie11
     * compatibility
     */
    for (let i = 0; i < elems.length; i++) {
      elems[i].parentNode.removeChild(elems[i]);
    }
  }
});
