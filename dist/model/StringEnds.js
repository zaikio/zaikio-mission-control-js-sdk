"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StringEnds = void 0;
var _ApiClient = require("../ApiClient");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The StringEnds model module.
 * @module model/StringEnds
 * @version 1.0.0
 */
var StringEnds = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>StringEnds</code>.
   * @alias module:model/StringEnds
   * @class
   * @param id {String} 
   * @param createdAt {Date} 
   * @param updatedAt {Date} 
   * @param subjectType {module:model/StringEnds.SubjectTypeEnum} The list members field to filter results. Specified subject type must be compatible with the associated list member class. StringEnds rules only admit string subject types (fields with string type).
   * @param type {module:model/StringEnds.TypeEnum} The rule match condition. Defines how the rule matches list members. Rule matches list members by comparing the rule value with the subject type field value associated with each list member candidate. The type attribute defines how these values are compared (number greater than, string begins with, etc). StringEnds rules always have \"StringEnds\" as type.
   * @param value {String} The value rule uses to compare the subject type field value of list member candidates. Value comparison will be performed according to the specified rule type. StringBegins rules check subject type field string value ends with rule value.
   */
  function StringEnds(id, createdAt, updatedAt, subjectType, type, value) {
    _classCallCheck(this, StringEnds);
    this.id = id;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.subjectType = subjectType;
    this.type = type;
    this.value = value;
  }

  /**
   * Constructs a <code>StringEnds</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/StringEnds} obj Optional instance to populate.
   * @return {module:model/StringEnds} The populated <code>StringEnds</code> instance.
   */
  _createClass(StringEnds, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new StringEnds();
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
  return StringEnds;
}();
/**
 * @member {String} id
 */
exports.StringEnds = StringEnds;
StringEnds.prototype.id = undefined;

/**
 * @member {Date} createdAt
 */
StringEnds.prototype.createdAt = undefined;

/**
 * @member {Date} updatedAt
 */
StringEnds.prototype.updatedAt = undefined;

/**
 * Allowed values for the <code>subjectType</code> property.
 * @enum {String}
 * @readonly
 */
StringEnds.SubjectTypeEnum = {
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
 * The list members field to filter results. Specified subject type must be compatible with the associated list member class. StringEnds rules only admit string subject types (fields with string type).
 * @member {module:model/StringEnds.SubjectTypeEnum} subjectType
 */
StringEnds.prototype.subjectType = undefined;

/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
StringEnds.TypeEnum = {
  /**
   * value: "StringEnds"
   * @const
   */
  stringEnds: "StringEnds"
};
/**
 * The rule match condition. Defines how the rule matches list members. Rule matches list members by comparing the rule value with the subject type field value associated with each list member candidate. The type attribute defines how these values are compared (number greater than, string begins with, etc). StringEnds rules always have \"StringEnds\" as type.
 * @member {module:model/StringEnds.TypeEnum} type
 */
StringEnds.prototype.type = undefined;

/**
 * The value rule uses to compare the subject type field value of list member candidates. Value comparison will be performed according to the specified rule type. StringBegins rules check subject type field string value ends with rule value.
 * @member {String} value
 */
StringEnds.prototype.value = undefined;

// Implement Rule interface: