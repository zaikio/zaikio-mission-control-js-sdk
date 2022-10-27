"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DateIsToday = void 0;
var _ApiClient = require("../ApiClient");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The DateIsToday model module.
 * @module model/DateIsToday
 * @version 1.0.0
 */
var DateIsToday = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>DateIsToday</code>.
   * @alias module:model/DateIsToday
   * @class
   * @param id {String} 
   * @param createdAt {Date} 
   * @param updatedAt {Date} 
   * @param subjectType {module:model/DateIsToday.SubjectTypeEnum} The list members field to filter results. Specified subject type must be compatible with the associated list member class. DateIsToday rules only admit date subject types (fields with date type).
   * @param type {module:model/DateIsToday.TypeEnum} The rule match condition. Defines how the rule matches list members. Rule matches list members by comparing the rule value with the subject type field value associated with each list member candidate. The type attribute defines how these values are compared (number greater than, string begins with, etc). DateIsToday rules always have \"DateIsToday\" as type.
   * @param value {Date} The value rule uses to compare the subject type field value of list member candidates. Value comparison will be performed according to the specified rule type. DateIsToday rules use the current date to compare the subject type field value, thus, they do not require the value to be specified.
   */
  function DateIsToday(id, createdAt, updatedAt, subjectType, type, value) {
    _classCallCheck(this, DateIsToday);
    this.id = id;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.subjectType = subjectType;
    this.type = type;
    this.value = value;
  }

  /**
   * Constructs a <code>DateIsToday</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DateIsToday} obj Optional instance to populate.
   * @return {module:model/DateIsToday} The populated <code>DateIsToday</code> instance.
   */
  _createClass(DateIsToday, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DateIsToday();
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
  return DateIsToday;
}();
/**
 * @member {String} id
 */
exports.DateIsToday = DateIsToday;
DateIsToday.prototype.id = undefined;

/**
 * @member {Date} createdAt
 */
DateIsToday.prototype.createdAt = undefined;

/**
 * @member {Date} updatedAt
 */
DateIsToday.prototype.updatedAt = undefined;

/**
 * Allowed values for the <code>subjectType</code> property.
 * @enum {String}
 * @readonly
 */
DateIsToday.SubjectTypeEnum = {
  /**
   * value: "JOB_DUE_AT"
   * @const
   */
  JOB_DUE_AT: "JOB_DUE_AT"
};
/**
 * The list members field to filter results. Specified subject type must be compatible with the associated list member class. DateIsToday rules only admit date subject types (fields with date type).
 * @member {module:model/DateIsToday.SubjectTypeEnum} subjectType
 */
DateIsToday.prototype.subjectType = undefined;

/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
DateIsToday.TypeEnum = {
  /**
   * value: "DateIsToday"
   * @const
   */
  dateIsToday: "DateIsToday"
};
/**
 * The rule match condition. Defines how the rule matches list members. Rule matches list members by comparing the rule value with the subject type field value associated with each list member candidate. The type attribute defines how these values are compared (number greater than, string begins with, etc). DateIsToday rules always have \"DateIsToday\" as type.
 * @member {module:model/DateIsToday.TypeEnum} type
 */
DateIsToday.prototype.type = undefined;

/**
 * The value rule uses to compare the subject type field value of list member candidates. Value comparison will be performed according to the specified rule type. DateIsToday rules use the current date to compare the subject type field value, thus, they do not require the value to be specified.
 * @member {Date} value
 */
DateIsToday.prototype.value = undefined;

// Implement Rule interface: