"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NumberGreaterThanCreate = void 0;
var _ApiClient = require("../ApiClient");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The NumberGreaterThanCreate model module.
 * @module model/NumberGreaterThanCreate
 * @version 1.0.0
 */
var NumberGreaterThanCreate = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>NumberGreaterThanCreate</code>.
   * @alias module:model/NumberGreaterThanCreate
   * @class
   */
  function NumberGreaterThanCreate() {
    _classCallCheck(this, NumberGreaterThanCreate);
  }

  /**
   * Constructs a <code>NumberGreaterThanCreate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/NumberGreaterThanCreate} obj Optional instance to populate.
   * @return {module:model/NumberGreaterThanCreate} The populated <code>NumberGreaterThanCreate</code> instance.
   */
  _createClass(NumberGreaterThanCreate, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new NumberGreaterThanCreate();
        if (data.hasOwnProperty('value')) obj.value = _ApiClient.ApiClient.convertToType(data['value'], 'Number');
      }
      return obj;
    }
  }]);
  return NumberGreaterThanCreate;
}();
/**
 * The value rule uses to compare the subject type field value of list member candidates. Value comparison will be performed according to the specified rule type. GreaterThan rules check check subject type field value is higher than rule value.
 * @member {Number} value
 */
exports.NumberGreaterThanCreate = NumberGreaterThanCreate;
NumberGreaterThanCreate.prototype.value = undefined;

// Implement GreaterThanCreate interface: