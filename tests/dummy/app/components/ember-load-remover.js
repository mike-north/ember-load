import EmberLoadRemover from 'ember-load/components/ember-load-remover';

export default EmberLoadRemover.extend({
  removeLoadingIndicator() {
    // Perform default behavior
    this._super(...arguments);
    // Do something custom in addition to it
    console.log('Just so you know, your app has loaded. 🚀');
  }
});