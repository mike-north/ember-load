export function initialize() {
  let application = arguments[1] || arguments[0];
  application.deferReadiness();
  setTimeout(() => {
    application.advanceReadiness();
  }, 3000);
}

export default {
  name: 'wait',
  initialize
};
