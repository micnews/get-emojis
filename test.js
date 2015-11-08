'use strict';

var test = require('tape');
var getEmojis = require('./index');

test('getEmojis()', function (t) {
  t.deepEqual(getEmojis(''), []);
  t.deepEqual(getEmojis('I ❤️ emoji!'), [{
    src: '//twemoji.maxcdn.com/36x36/2764.png'
  }]);
  t.deepEqual(getEmojis('Here\'s a christmas tree: 🎄and a heart: ❤️'), [{
    src: '//twemoji.maxcdn.com/36x36/1f384.png'
  }, {
    src: '//twemoji.maxcdn.com/36x36/2764.png'
  }]);
  t.end();
});
