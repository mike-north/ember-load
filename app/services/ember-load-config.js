import Service from 'ember-load/services/ember-load-config';

import config from '../config/environment';
const userConfig = config['ember-load'] || {};

export default Service.extend({
  loadingIndicatorClass: userConfig.loadingIndicatorClass
});
