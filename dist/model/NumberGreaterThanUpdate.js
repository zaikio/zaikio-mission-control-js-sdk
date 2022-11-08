"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NumberGreaterThanUpdate = void 0;
var _ApiClient = require("../ApiClient");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The NumberGreaterThanUpdate model module.
 * @module model/NumberGreaterThanUpdate
 * @version 1.0.0
 */
var NumberGreaterThanUpdate = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>NumberGreaterThanUpdate</code>.
   * @alias module:model/NumberGreaterThanUpdate
   * @class
   */
  function NumberGreaterThanUpdate() {
    _classCallCheck(this, NumberGreaterThanUpdate);
  }

  /**
   * Constructs a <code>NumberGreaterThanUpdate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/NumberGreaterThanUpdate} obj Optional instance to populate.
   * @return {module:model/NumberGreaterThanUpdate} The populated <code>NumberGreaterThanUpdate</code> instance.
   */
  _createClass(NumberGreaterThanUpdate, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new NumberGreaterThanUpdate();
        if (data.hasOwnProperty('value')) obj.value = _ApiClient.ApiClient.convertToType(data['value'], 'Number');
      }
      return obj;
    }
  }]);
  return NumberGreaterThanUpdate;
}();
/**
 * The value rule uses to compare the subject type field value of list member candidates. Value comparison will be performed according to the specified rule type. GreaterThan rules check check subject type field value is higher than rule value.
 * @member {Number} value
 */
exports.NumberGreaterThanUpdate = NumberGreaterThanUpdate;
NumberGreaterThanUpdate.prototype.value = undefined;

// Implement GreaterThanUpdate interface: