'use strict';

var twemoji = require('twemoji');

module.exports = function (input) {
  var results = [];
  twemoji.parse(input, function (icon, options) {
    results.push({
      src: options.base + options.size + '/' + icon + options.ext
    });
  });
  return results;
};
