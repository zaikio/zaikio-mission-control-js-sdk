"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Front1 = void 0;
var _ApiClient = require("../ApiClient");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The Front1 model module.
 * @module model/Front1
 * @version 1.0.0
 */
var Front1 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Front1</code>.
   * The content of the front of this finishing
   * @alias module:model/Front1
   * @class
   */
  function Front1() {
    _classCallCheck(this, Front1);
  }

  /**
   * Constructs a <code>Front1</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Front1} obj Optional instance to populate.
   * @return {module:model/Front1} The populated <code>Front1</code> instance.
   */
  _createClass(Front1, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Front1();
        if (data.hasOwnProperty('reference')) obj.reference = _ApiClient.ApiClient.convertToType(data['reference'], 'String');
      }
      return obj;
    }
  }]);
  return Front1;
}();
/**
 * @member {String} reference
 */
exports.Front1 = Front1;
Front1.prototype.reference = undefined;