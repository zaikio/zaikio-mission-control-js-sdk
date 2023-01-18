"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BoxModelIntermediateLayoutChildren = void 0;
var _ApiClient = require("../ApiClient");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The BoxModelIntermediateLayoutChildren model module.
 * @module model/BoxModelIntermediateLayoutChildren
 * @version 1.0.0
 */
var BoxModelIntermediateLayoutChildren = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>BoxModelIntermediateLayoutChildren</code>.
   * @alias module:model/BoxModelIntermediateLayoutChildren
   * @class
   */
  function BoxModelIntermediateLayoutChildren() {
    _classCallCheck(this, BoxModelIntermediateLayoutChildren);
  }

  /**
   * Constructs a <code>BoxModelIntermediateLayoutChildren</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BoxModelIntermediateLayoutChildren} obj Optional instance to populate.
   * @return {module:model/BoxModelIntermediateLayoutChildren} The populated <code>BoxModelIntermediateLayoutChildren</code> instance.
   */
  _createClass(BoxModelIntermediateLayoutChildren, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new BoxModelIntermediateLayoutChildren();
      }
      return obj;
    }
  }]);
  return BoxModelIntermediateLayoutChildren;
}();
exports.BoxModelIntermediateLayoutChildren = BoxModelIntermediateLayoutChildren;