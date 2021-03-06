'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _firstPersonControls = require('./controls/firstPersonControls');

Object.keys(_firstPersonControls).forEach(function (key) {
  if (key === "default") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _firstPersonControls[key];
    }
  });
});

var _orbitControls = require('./controls/orbitControls');

Object.keys(_orbitControls).forEach(function (key) {
  if (key === "default") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _orbitControls[key];
    }
  });
});

var _api = require('./api');

Object.keys(_api).forEach(function (key) {
  if (key === "default") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _api[key];
    }
  });
});
//# sourceMappingURL=index.js.map
