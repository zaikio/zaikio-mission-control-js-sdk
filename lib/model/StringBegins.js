"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StringBegins = void 0;
var _ApiClient = require("../ApiClient");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The StringBegins model module.
 * @module model/StringBegins
 * @version 1.0.0
 */
var StringBegins = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>StringBegins</code>.
   * @alias module:model/StringBegins
   * @class
   * @param id {String} 
   * @param createdAt {Date} 
   * @param updatedAt {Date} 
   * @param subjectType {module:model/StringBegins.SubjectTypeEnum} The list members field to filter results. Specified subject type must be compatible with the associated list member class. StringBegins rules only admit string subject types (fields with string type).
   * @param type {module:model/StringBegins.TypeEnum} The rule match condition. Defines how the rule matches list members. Rule matches list members by comparing the rule value with the subject type field value associated with each list member candidate. The type attribute defines how these values are compared (number greater than, string begins with, etc). StringBegins rules always have \"StringBegins\" as type.
   * @param value {String} The value rule uses to compare the subject type field value of list member candidates. Value comparison will be performed according to the specified rule type. StringBegins rules check subject type field string value begins with rule value.
   */
  function StringBegins(id, createdAt, updatedAt, subjectType, type, value) {
    _classCallCheck(this, StringBegins);
    this.id = id;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.subjectType = subjectType;
    this.type = type;
    this.value = value;
  }

  /**
   * Constructs a <code>StringBegins</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/StringBegins} obj Optional instance to populate.
   * @return {module:model/StringBegins} The populated <code>StringBegins</code> instance.
   */
  _createClass(StringBegins, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new StringBegins();
        if (data.hasOwnProperty('id')) obj.id = _ApiClient.ApiClient.convertToType(data['id'], 'String');
        if (data.hasOwnProperty('created_at')) obj.createdAt = _ApiClient.ApiClient.convertToType(data['created_at'], 'Date');
        if (data.hasOwnProperty('updated_at')) obj.updatedAt = _ApiClient.ApiClient.convertToType(data['updated_at'], 'Date');
        if (data.hasOwnProperty('subject_type')) obj.subjectType = _ApiClient.ApiClient.convertToType(data['subject_type'], 'String');
        if (data.hasOwnProperty('type')) obj.type = _ApiClient.ApiClient.convertToType(data['type'], 'String');
        if (data.hasOwnProperty('value')) obj.value = _ApiClient.ApiClient.convertToType(data['value'], 'String');
      }
      return obj;
    }
  }]);
  return StringBegins;
}();
/**
 * @member {String} id
 */
exports.StringBegins = StringBegins;
StringBegins.prototype.id = undefined;

/**
 * @member {Date} createdAt
 */
StringBegins.prototype.createdAt = undefined;

/**
 * @member {Date} updatedAt
 */
StringBegins.prototype.updatedAt = undefined;

/**
 * Allowed values for the <code>subjectType</code> property.
 * @enum {String}
 * @readonly
 */
StringBegins.SubjectTypeEnum = {
  /**
   * value: "CUSTOMER_NAME"
   * @const
   */
  CUSTOMER_NAME: "CUSTOMER_NAME",
  /**
   * value: "JOB_NAME"
   * @const
   */
  JOB_NAME: "JOB_NAME",
  /**
   * value: "JOB_SOURCE"
   * @const
   */
  JOB_SOURCE: "JOB_SOURCE"
};
/**
 * The list members field to filter results. Specified subject type must be compatible with the associated list member class. StringBegins rules only admit string subject types (fields with string type).
 * @member {module:model/StringBegins.SubjectTypeEnum} subjectType
 */
StringBegins.prototype.subjectType = undefined;

/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
StringBegins.TypeEnum = {
  /**
   * value: "StringBegins"
   * @const
   */
  stringBegins: "StringBegins"
};
/**
 * The rule match condition. Defines how the rule matches list members. Rule matches list members by comparing the rule value with the subject type field value associated with each list member candidate. The type attribute defines how these values are compared (number greater than, string begins with, etc). StringBegins rules always have \"StringBegins\" as type.
 * @member {module:model/StringBegins.TypeEnum} type
 */
StringBegins.prototype.type = undefined;

/**
 * The value rule uses to compare the subject type field value of list member candidates. Value comparison will be performed according to the specified rule type. StringBegins rules check subject type field string value begins with rule value.
 * @member {String} value
 */
StringBegins.prototype.value = undefined;

// Implement Rule interface: