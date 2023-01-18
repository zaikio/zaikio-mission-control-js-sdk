"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DateIsPast = void 0;
var _ApiClient = require("../ApiClient");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The DateIsPast model module.
 * @module model/DateIsPast
 * @version 1.0.0
 */
var DateIsPast = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>DateIsPast</code>.
   * @alias module:model/DateIsPast
   * @class
   * @param id {String} 
   * @param createdAt {Date} 
   * @param updatedAt {Date} 
   * @param subjectType {module:model/DateIsPast.SubjectTypeEnum} The list members field to filter results. Specified subject type must be compatible with the associated list member class. DateIsPast rules only admit date subject types (fields with date type).
   * @param type {module:model/DateIsPast.TypeEnum} The rule match condition. Defines how the rule matches list members. Rule matches list members by comparing the rule value with the subject type field value associated with each list member candidate. The type attribute defines how these values are compared (number greater than, string begins with, etc). DateIsPast rules always have \"DateIsPast\" as type.
   * @param value {Date} The value rule uses to compare the subject type field value of list member candidates. Value comparison will be performed according to the specified rule type. DateIsPast rules use the current date to compare the subject type field value, thus, they do not require the value to be specified.
   */
  function DateIsPast(id, createdAt, updatedAt, subjectType, type, value) {
    _classCallCheck(this, DateIsPast);
    this.id = id;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.subjectType = subjectType;
    this.type = type;
    this.value = value;
  }

  /**
   * Constructs a <code>DateIsPast</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DateIsPast} obj Optional instance to populate.
   * @return {module:model/DateIsPast} The populated <code>DateIsPast</code> instance.
   */
  _createClass(DateIsPast, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DateIsPast();
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
  return DateIsPast;
}();
/**
 * @member {String} id
 */
exports.DateIsPast = DateIsPast;
DateIsPast.prototype.id = undefined;

/**
 * @member {Date} createdAt
 */
DateIsPast.prototype.createdAt = undefined;

/**
 * @member {Date} updatedAt
 */
DateIsPast.prototype.updatedAt = undefined;

/**
 * Allowed values for the <code>subjectType</code> property.
 * @enum {String}
 * @readonly
 */
DateIsPast.SubjectTypeEnum = {
  /**
   * value: "JOB_CREATED_AT"
   * @const
   */
  CREATED_AT: "JOB_CREATED_AT",
  /**
   * value: "JOB_DUE_AT"
   * @const
   */
  DUE_AT: "JOB_DUE_AT"
};
/**
 * The list members field to filter results. Specified subject type must be compatible with the associated list member class. DateIsPast rules only admit date subject types (fields with date type).
 * @member {module:model/DateIsPast.SubjectTypeEnum} subjectType
 */
DateIsPast.prototype.subjectType = undefined;

/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
DateIsPast.TypeEnum = {
  /**
   * value: "DateIsPast"
   * @const
   */
  dateIsPast: "DateIsPast"
};
/**
 * The rule match condition. Defines how the rule matches list members. Rule matches list members by comparing the rule value with the subject type field value associated with each list member candidate. The type attribute defines how these values are compared (number greater than, string begins with, etc). DateIsPast rules always have \"DateIsPast\" as type.
 * @member {module:model/DateIsPast.TypeEnum} type
 */
DateIsPast.prototype.type = undefined;

/**
 * The value rule uses to compare the subject type field value of list member candidates. Value comparison will be performed according to the specified rule type. DateIsPast rules use the current date to compare the subject type field value, thus, they do not require the value to be specified.
 * @member {Date} value
 */
DateIsPast.prototype.value = undefined;

// Implement Rule interface: