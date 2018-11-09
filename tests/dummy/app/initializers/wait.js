import { later } from '@ember/runloop';

export function initialize() {
  let application = arguments[1] || arguments[0];
  application.deferReadiness();
  later(() => {
    application.advanceReadiness();
  }, 1500);
}

export default {
  name: 'wait',
  initialize
};
