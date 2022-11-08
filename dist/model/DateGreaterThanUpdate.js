"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DateGreaterThanUpdate = void 0;
var _ApiClient = require("../ApiClient");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The DateGreaterThanUpdate model module.
 * @module model/DateGreaterThanUpdate
 * @version 1.0.0
 */
var DateGreaterThanUpdate = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>DateGreaterThanUpdate</code>.
   * @alias module:model/DateGreaterThanUpdate
   * @class
   */
  function DateGreaterThanUpdate() {
    _classCallCheck(this, DateGreaterThanUpdate);
  }

  /**
   * Constructs a <code>DateGreaterThanUpdate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DateGreaterThanUpdate} obj Optional instance to populate.
   * @return {module:model/DateGreaterThanUpdate} The populated <code>DateGreaterThanUpdate</code> instance.
   */
  _createClass(DateGreaterThanUpdate, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DateGreaterThanUpdate();
        if (data.hasOwnProperty('value')) obj.value = _ApiClient.ApiClient.convertToType(data['value'], 'Date');
      }
      return obj;
    }
  }]);
  return DateGreaterThanUpdate;
}();
/**
 * The value rule uses to compare the subject type field value of list member candidates. Value comparison will be performed according to the specified rule type. GreaterThan rules check subject type field date value is older than rule date value.
 * @member {Date} value
 */
exports.DateGreaterThanUpdate = DateGreaterThanUpdate;
DateGreaterThanUpdate.prototype.value = undefined;

// Implement GreaterThanUpdate interface: