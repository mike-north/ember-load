import Ember from 'ember';
import EmberLoadRemover from 'ember-load/components/ember-load-remover';

const { Logger } = Ember;

export default EmberLoadRemover.extend({
  removeLoadingIndicator() {
    // Perform default behavior
    this._super(...arguments);
    // Do something custom in addition to it
    Logger.log('Just so you know, your app has loaded. 🚀');
  }
});