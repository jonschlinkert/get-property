/*!
 * get-property <https://github.com/jonschlinkert/get-property>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT License
 */

'use strict';

var should = require('should');
var get = require('./');

describe('.get()', function () {
  it('should get the specified property.', function () {
    get({a: 'a', b: 'b'}, 'a').should.eql({a: 'a'});
    get({first: 'Jon', last: 'Schlinkert'}, 'first').should.eql({first: 'Jon'});
    get({locals: {a: 'a'}, options: {b: 'b'}}, 'locals').should.eql({locals: {a: 'a'}});
  });

  it('should get a nested property.', function () {
    get({a: 'a', b: {c: 'd'}}, 'b.c').should.eql({c: 'd'});
  });

  it('should get a deeply nested property.', function () {
    get({a: {b: 'c', c: {d: 'e', e: 'f', g: {h: 'i'}}}}, 'a.c.g.h').should.eql({h: 'i'});
  });
});

