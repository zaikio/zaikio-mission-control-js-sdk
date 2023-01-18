"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BoxModelSpreadChildren = void 0;
var _ApiClient = require("../ApiClient");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The BoxModelSpreadChildren model module.
 * @module model/BoxModelSpreadChildren
 * @version 1.0.0
 */
var BoxModelSpreadChildren = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>BoxModelSpreadChildren</code>.
   * @alias module:model/BoxModelSpreadChildren
   * @class
   */
  function BoxModelSpreadChildren() {
    _classCallCheck(this, BoxModelSpreadChildren);
  }

  /**
   * Constructs a <code>BoxModelSpreadChildren</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BoxModelSpreadChildren} obj Optional instance to populate.
   * @return {module:model/BoxModelSpreadChildren} The populated <code>BoxModelSpreadChildren</code> instance.
   */
  _createClass(BoxModelSpreadChildren, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new BoxModelSpreadChildren();
      }
      return obj;
    }
  }]);
  return BoxModelSpreadChildren;
}();
exports.BoxModelSpreadChildren = BoxModelSpreadChildren;