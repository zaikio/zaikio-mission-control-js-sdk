"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DateIsFuture = void 0;
var _ApiClient = require("../ApiClient");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The DateIsFuture model module.
 * @module model/DateIsFuture
 * @version 1.0.0
 */
var DateIsFuture = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>DateIsFuture</code>.
   * @alias module:model/DateIsFuture
   * @class
   * @param id {String} 
   * @param createdAt {Date} 
   * @param updatedAt {Date} 
   * @param subjectType {module:model/DateIsFuture.SubjectTypeEnum} The list members field to filter results. Specified subject type must be compatible with the associated list member class. DateIsFuture rules only admit date subject types (fields with date type).
   * @param type {module:model/DateIsFuture.TypeEnum} The rule match condition. Defines how the rule matches list members. Rule matches list members by comparing the rule value with the subject type field value associated with each list member candidate. The type attribute defines how these values are compared (number greater than, string begins with, etc). DateIsFuture rules always have \"DateIsFuture\" as type.
   * @param value {Date} The value rule uses to compare the subject type field value of list member candidates. Value comparison will be performed according to the specified rule type. DateIsFuture rules use the current date to compare the subject type field value, thus, they do not require the value to be specified.
   */
  function DateIsFuture(id, createdAt, updatedAt, subjectType, type, value) {
    _classCallCheck(this, DateIsFuture);
    this.id = id;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.subjectType = subjectType;
    this.type = type;
    this.value = value;
  }

  /**
   * Constructs a <code>DateIsFuture</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DateIsFuture} obj Optional instance to populate.
   * @return {module:model/DateIsFuture} The populated <code>DateIsFuture</code> instance.
   */
  _createClass(DateIsFuture, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DateIsFuture();
        if (data.hasOwnProperty('id')) obj.id = _ApiClient.ApiClient.convertToType(data['id'], 'String');
        if (data.hasOwnProperty('created_at')) obj.createdAt = _ApiClient.ApiClient.convertToType(data['created_at'], 'Date');
        if (data.hasOwnProperty('updated_at')) obj.updatedAt = _ApiClient.ApiClient.convertToType(data['updated_at'], 'Date');
        if (data.hasOwnProperty('subject_type')) obj.subjectType = _ApiClient.ApiClient.convertToType(data['subject_type'], 'String');
        if (data.hasOwnProperty('type')) obj.type = _ApiClient.ApiClient.convertToType(data['type'], 'String');
        if (data.hasOwnProperty('value')) obj.value = _ApiClient.ApiClient.convertToType(data['value'], 'Date');
      }
      return obj;
    }
  }]);
  return DateIsFuture;
}();
/**
 * @member {String} id
 */
exports.DateIsFuture = DateIsFuture;
DateIsFuture.prototype.id = undefined;

/**
 * @member {Date} createdAt
 */
DateIsFuture.prototype.createdAt = undefined;

/**
 * @member {Date} updatedAt
 */
DateIsFuture.prototype.updatedAt = undefined;

/**
 * Allowed values for the <code>subjectType</code> property.
 * @enum {String}
 * @readonly
 */
DateIsFuture.SubjectTypeEnum = {
  /**
   * value: "JOB_DUE_AT"
   * @const
   */
  JOB_DUE_AT: "JOB_DUE_AT"
};
/**
 * The list members field to filter results. Specified subject type must be compatible with the associated list member class. DateIsFuture rules only admit date subject types (fields with date type).
 * @member {module:model/DateIsFuture.SubjectTypeEnum} subjectType
 */
DateIsFuture.prototype.subjectType = undefined;

/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
DateIsFuture.TypeEnum = {
  /**
   * value: "DateIsFuture"
   * @const
   */
  dateIsFuture: "DateIsFuture"
};
/**
 * The rule match condition. Defines how the rule matches list members. Rule matches list members by comparing the rule value with the subject type field value associated with each list member candidate. The type attribute defines how these values are compared (number greater than, string begins with, etc). DateIsFuture rules always have \"DateIsFuture\" as type.
 * @member {module:model/DateIsFuture.TypeEnum} type
 */
DateIsFuture.prototype.type = undefined;

/**
 * The value rule uses to compare the subject type field value of list member candidates. Value comparison will be performed according to the specified rule type. DateIsFuture rules use the current date to compare the subject type field value, thus, they do not require the value to be specified.
 * @member {Date} value
 */
DateIsFuture.prototype.value = undefined;

// Implement Rule interface: