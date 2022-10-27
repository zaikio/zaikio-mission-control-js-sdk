"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ArrayContains = void 0;
var _ApiClient = require("../ApiClient");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The ArrayContains model module.
 * @module model/ArrayContains
 * @version 1.0.0
 */
var ArrayContains = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ArrayContains</code>.
   * @alias module:model/ArrayContains
   * @class
   * @param id {String} 
   * @param createdAt {Date} 
   * @param updatedAt {Date} 
   * @param subjectType {module:model/ArrayContains.SubjectTypeEnum} The list members field to filter results. Specified subject type must be compatible with the associated list member class. ArrayContains rules only admit array subject types (fields with array type).
   * @param type {module:model/ArrayContains.TypeEnum} The rule match condition. Defines how the rule matches list members. Rule matches list members by comparing the rule value with the subject type field value associated with each list member candidate. The type attribute defines how these values are compared (number greater than, string begins with, etc). ArrayContains rules always have \"ArrayContains\" as type.
   * @param value {Array.<String>} The value rule uses to compare the subject type field value of list member candidates. Value comparison will be performed according to the specified rule type. ArrayContains rules check value array items are present in subject type field value.
   */
  function ArrayContains(id, createdAt, updatedAt, subjectType, type, value) {
    _classCallCheck(this, ArrayContains);
    this.id = id;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.subjectType = subjectType;
    this.type = type;
    this.value = value;
  }

  /**
   * Constructs a <code>ArrayContains</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ArrayContains} obj Optional instance to populate.
   * @return {module:model/ArrayContains} The populated <code>ArrayContains</code> instance.
   */
  _createClass(ArrayContains, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ArrayContains();
        if (data.hasOwnProperty('id')) obj.id = _ApiClient.ApiClient.convertToType(data['id'], 'String');
        if (data.hasOwnProperty('created_at')) obj.createdAt = _ApiClient.ApiClient.convertToType(data['created_at'], 'Date');
        if (data.hasOwnProperty('updated_at')) obj.updatedAt = _ApiClient.ApiClient.convertToType(data['updated_at'], 'Date');
        if (data.hasOwnProperty('subject_type')) obj.subjectType = _ApiClient.ApiClient.convertToType(data['subject_type'], 'String');
        if (data.hasOwnProperty('type')) obj.type = _ApiClient.ApiClient.convertToType(data['type'], 'String');
        if (data.hasOwnProperty('value')) obj.value = _ApiClient.ApiClient.convertToType(data['value'], ['String']);
      }
      return obj;
    }
  }]);
  return ArrayContains;
}();
/**
 * @member {String} id
 */
exports.ArrayContains = ArrayContains;
ArrayContains.prototype.id = undefined;

/**
 * @member {Date} createdAt
 */
ArrayContains.prototype.createdAt = undefined;

/**
 * @member {Date} updatedAt
 */
ArrayContains.prototype.updatedAt = undefined;

/**
 * Allowed values for the <code>subjectType</code> property.
 * @enum {String}
 * @readonly
 */
ArrayContains.SubjectTypeEnum = {
  /**
   * value: "JOB_REFERENCE"
   * @const
   */
  JOB_REFERENCE: "JOB_REFERENCE"
};
/**
 * The list members field to filter results. Specified subject type must be compatible with the associated list member class. ArrayContains rules only admit array subject types (fields with array type).
 * @member {module:model/ArrayContains.SubjectTypeEnum} subjectType
 */
ArrayContains.prototype.subjectType = undefined;

/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
ArrayContains.TypeEnum = {
  /**
   * value: "ArrayContains"
   * @const
   */
  arrayContains: "ArrayContains"
};
/**
 * The rule match condition. Defines how the rule matches list members. Rule matches list members by comparing the rule value with the subject type field value associated with each list member candidate. The type attribute defines how these values are compared (number greater than, string begins with, etc). ArrayContains rules always have \"ArrayContains\" as type.
 * @member {module:model/ArrayContains.TypeEnum} type
 */
ArrayContains.prototype.type = undefined;

/**
 * The value rule uses to compare the subject type field value of list member candidates. Value comparison will be performed according to the specified rule type. ArrayContains rules check value array items are present in subject type field value.
 * @member {Array.<String>} value
 */
ArrayContains.prototype.value = undefined;

// Implement Rule interface: