/*!
 * get-property <https://github.com/jonschlinkert/get-property>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT License
 */

'use strict';

var pick = require('object-pick');

module.exports = function get(o, path, value) {
  var props = path.split('.');
  var last = props.pop();
  var len = props.length;

  for (var i = 0; len > i; i++) {
    path = props[i];
    o = o[path];

    if (o == null) {
      break;
    }
  }

  if (value === true) {
    return o[last];
  }

  return pick(o, last);
};
