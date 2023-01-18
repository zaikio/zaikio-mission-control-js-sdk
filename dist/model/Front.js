"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Front = void 0;
var _ApiClient = require("../ApiClient");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The Front model module.
 * @module model/Front
 * @version 1.0.0
 */
var Front = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Front</code>.
   * The content of the front of this finishing
   * @alias module:model/Front
   * @class
   * @param reference {String} 
   */
  function Front(reference) {
    _classCallCheck(this, Front);
    this.reference = reference;
  }

  /**
   * Constructs a <code>Front</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Front} obj Optional instance to populate.
   * @return {module:model/Front} The populated <code>Front</code> instance.
   */
  _createClass(Front, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Front();
        if (data.hasOwnProperty('reference')) obj.reference = _ApiClient.ApiClient.convertToType(data['reference'], 'String');
      }
      return obj;
    }
  }]);
  return Front;
}();
/**
 * @member {String} reference
 */
exports.Front = Front;
Front.prototype.reference = undefined;