"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ArrayContainsUpdate = void 0;
var _ApiClient = require("../ApiClient");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The ArrayContainsUpdate model module.
 * @module model/ArrayContainsUpdate
 * @version 1.0.0
 */
var ArrayContainsUpdate = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ArrayContainsUpdate</code>.
   * @alias module:model/ArrayContainsUpdate
   * @class
   */
  function ArrayContainsUpdate() {
    _classCallCheck(this, ArrayContainsUpdate);
  }

  /**
   * Constructs a <code>ArrayContainsUpdate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ArrayContainsUpdate} obj Optional instance to populate.
   * @return {module:model/ArrayContainsUpdate} The populated <code>ArrayContainsUpdate</code> instance.
   */
  _createClass(ArrayContainsUpdate, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ArrayContainsUpdate();
        if (data.hasOwnProperty('subject_type')) obj.subjectType = _ApiClient.ApiClient.convertToType(data['subject_type'], 'String');
        if (data.hasOwnProperty('type')) obj.type = _ApiClient.ApiClient.convertToType(data['type'], 'String');
        if (data.hasOwnProperty('value')) obj.value = _ApiClient.ApiClient.convertToType(data['value'], ['String']);
      }
      return obj;
    }
  }]);
  return ArrayContainsUpdate;
}();
/**
 * Allowed values for the <code>subjectType</code> property.
 * @enum {String}
 * @readonly
 */
exports.ArrayContainsUpdate = ArrayContainsUpdate;
ArrayContainsUpdate.SubjectTypeEnum = {
  /**
   * value: "JOB_REFERENCE"
   * @const
   */
  JOB_REFERENCE: "JOB_REFERENCE"
};
/**
 * The list members field to filter results. Specified subject type must be compatible with the associated list member class. ArrayContains rules only admit array subject types (fields with array type).
 * @member {module:model/ArrayContainsUpdate.SubjectTypeEnum} subjectType
 */
ArrayContainsUpdate.prototype.subjectType = undefined;

/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
ArrayContainsUpdate.TypeEnum = {
  /**
   * value: "ArrayContains"
   * @const
   */
  arrayContains: "ArrayContains"
};
/**
 * The rule match condition. Defines how the rule matches list members. Rule matches list members by comparing the rule value with the subject type field value associated with each list member candidate. The type attribute defines how these values are compared (number greater than, string begins with, etc). ArrayContains rules always have \"ArrayContains\" as type.
 * @member {module:model/ArrayContainsUpdate.TypeEnum} type
 */
ArrayContainsUpdate.prototype.type = undefined;

/**
 * The value rule uses to compare the subject type field value of list member candidates. Value comparison will be performed according to the specified rule type. ArrayContains rules check value array items are present in subject type field value.
 * @member {Array.<String>} value
 */
ArrayContainsUpdate.prototype.value = undefined;

// Implement RuleUpdate interface: