# Ember-load

A simple loading indicator, while your static assets download, and your Ember.js app starts up.

[![Build Status](https://travis-ci.org/mike-north/ember-load.svg?branch=master)](https://travis-ci.org/mike-north/ember-load)
[![Code Climate](https://codeclimate.com/github/mike-north/ember-load/badges/gpa.svg)](https://codeclimate.com/github/mike-north/ember-load)
[![npm version](https://badge.fury.io/js/ember-load.svg)](http://badge.fury.io/js/ember-load)
[![Ember Observer Score](http://emberobserver.com/badges/ember-load.svg)](http://emberobserver.com/addons/ember-load)
[![Dependency Status](https://david-dm.org/mike-north/ember-load.svg)](https://david-dm.org/mike-north/ember-load)
[![devDependency Status](https://david-dm.org/mike-north/ember-load/dev-status.svg)](https://david-dm.org/mike-north/ember-load#info=devDependencies)

## Configuration & Use

You can customize this addon in your **environment/config.js**

```js
module.exports = function(environment) {
  var ENV = {
    // optional
    'ember-load': {
      // This is the default value, if you don't set this opton
      loadingIndicatorClass: 'ember-load-indicator'
    }
    ...
  }
  ...
}  
```

And then place some HTML in your **app/index.html**

```html

<div class="ember-load-indicator">
  CAN I HAS APP NOW?
</div>
```

The loading indicator will be removed when your application view is inserted into the DOM

### But where do I find cool little spinners?!

Anything that's purely CSS or plain JavaScript should work beautifully. You'll have the best luck with things that require no scripts or assets (i.e., images) to run in the browser.

* [Spinkit](http://tobiasahlin.com/spinkit/)
* [Single Element CSS Loaders](http://projects.lukehaas.me/css-loaders/)
* [css-spinners.com](http://www.css-spinners.com/)
* [CSS-only loaders](http://blog.pexels.com/css-only-loaders/)
* [Tim Holman's Loaders and Spinners Collection](http://codepen.io/collection/HtAne/)
* [cssload.net](http://cssload.net/)

## Compatibility
This add-on currently depends on the use of Views.  This means it is compatible with later versions of Ember (1.11.x+) or Ember 2.0 with the installation of [ember-legacy-views](https://github.com/emberjs/ember-legacy-views).


## Installation

* `git clone` this repository
* `npm install`
* `bower install`

## Running

* `ember server`
* Visit your app at http://localhost:4200.

## Running Tests

* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).
