# get-emojis

Given a string, extracts the emojis.

## Installation

```shell

npm install --save get-emojis
```

## Usage

```js
var getEmojis = require('get-emojis');
var emojis = getEmojis('I ❤️ emoji!');

// emojis will be a list of objects of the form [{ src: '//twemoji.maxcdn.com/36x36/...' }, ...]
console.log('emojis', emojis);
```
