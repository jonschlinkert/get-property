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
  });

  it('should get a value only.', function () {
    get({a: 'a', b: {c: 'd'}}, 'a', true).should.eql('a');
  });

  it('should get a nested property.', function () {
    get({a: 'a', b: {c: 'd'}}, 'b.c').should.eql({c: 'd'});
  });

  it('should get a value only.', function () {
    get({a: 'a', b: {c: 'd'}}, 'b.c', true).should.eql('d');
  });

  it('should get a deeply nested property.', function () {
    get({a: {b: 'c', c: {d: 'e', e: 'f', g: {h: 'i'}}}}, 'a.c.g.h').should.eql({h: 'i'});
  });

  it('should get the value of a deeply nested property.', function () {
    get({a: {b: 'c', c: {d: 'e', e: 'f', g: {h: 'i'}}}}, 'a.c.g.h', true).should.eql('i');
  });
});

