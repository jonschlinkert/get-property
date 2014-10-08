# get-property [![NPM version](https://badge.fury.io/js/get-property.svg)](http://badge.fury.io/js/get-property)

> Get a nested property or its value from an object using simple `a.b.c` paths.

## Related project

  - [get-value](https://github.com/jonschlinkert/get-value)
  - [get-object](https://github.com/jonschlinkert/get-object)

## Usage

```js
var get = require('get-property');
```

## Examples

```js
var obj = {a: 'a', b: {c: 'd'}};

get(obj, 'b.c');
//=> {c: 'd'}

get({a: 'a', b: 'b'}, 'a');
//=> {a: 'a'}

get({a: 'a', b: {c: 'd'}}, 'b.c');
//=> {c: 'd'}

get({a: {b: 'c', c: {d: 'e', e: 'f', g: {h: 'i'}}}}, 'a.c.g.h');
//=> {h: 'i'}
```

## Install
#### Install with [npm](npmjs.org)

```bash
npm i get-property --save
```
#### Install with [bower](https://github.com/bower/bower)

```bash
bower install get-property --save
```

## Run tests

```bash
npm test
```

## Author

**Jon Schlinkert**
 
+ [github/jonschlinkert](https://github.com/jonschlinkert)
+ [twitter/jonschlinkert](http://twitter.com/jonschlinkert) 


## License
Copyright (c) 2014 Jon Schlinkert, contributors.  
Released under the MIT license

***

_This file was generated by [verb-cli](https://github.com/assemble/verb-cli) on October 08, 2014._