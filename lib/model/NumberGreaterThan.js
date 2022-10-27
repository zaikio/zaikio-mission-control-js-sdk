"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NumberGreaterThan = void 0;
var _ApiClient = require("../ApiClient");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The NumberGreaterThan model module.
 * @module model/NumberGreaterThan
 * @version 1.0.0
 */
var NumberGreaterThan = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>NumberGreaterThan</code>.
   * @alias module:model/NumberGreaterThan
   * @class
   * @param value {Number} The value rule uses to compare the subject type field value of list member candidates. Value comparison will be performed according to the specified rule type. GreaterThan rules check check subject type field value is higher than rule value.
   */
  function NumberGreaterThan(value) {
    _classCallCheck(this, NumberGreaterThan);
    this.value = value;
  }

  /**
   * Constructs a <code>NumberGreaterThan</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/NumberGreaterThan} obj Optional instance to populate.
   * @return {module:model/NumberGreaterThan} The populated <code>NumberGreaterThan</code> instance.
   */
  _createClass(NumberGreaterThan, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new NumberGreaterThan();
        if (data.hasOwnProperty('value')) obj.value = _ApiClient.ApiClient.convertToType(data['value'], 'Number');
      }
      return obj;
    }
  }]);
  return NumberGreaterThan;
}();
/**
 * The value rule uses to compare the subject type field value of list member candidates. Value comparison will be performed according to the specified rule type. GreaterThan rules check check subject type field value is higher than rule value.
 * @member {Number} value
 */
exports.NumberGreaterThan = NumberGreaterThan;
NumberGreaterThan.prototype.value = undefined;

// Implement GreaterThan interface: