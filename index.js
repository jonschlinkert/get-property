/*!
 * get-property <https://github.com/jonschlinkert/get-property>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT License
 */

'use strict';

var pick = require('object-pick');

module.exports = function get(o, prop) {
  var path = prop.split('.');
  var last = path.pop();
  var len = path.length;

  for (var i = 0; len > i; i++) {
    var key = path[i];
    o = o[key];

    if (o == null) {
      break;
    }
  }
  return pick(o, last);
};