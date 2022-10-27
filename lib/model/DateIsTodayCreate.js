"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DateIsTodayCreate = void 0;
var _ApiClient = require("../ApiClient");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The DateIsTodayCreate model module.
 * @module model/DateIsTodayCreate
 * @version 1.0.0
 */
var DateIsTodayCreate = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>DateIsTodayCreate</code>.
   * @alias module:model/DateIsTodayCreate
   * @class
   */
  function DateIsTodayCreate() {
    _classCallCheck(this, DateIsTodayCreate);
  }

  /**
   * Constructs a <code>DateIsTodayCreate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DateIsTodayCreate} obj Optional instance to populate.
   * @return {module:model/DateIsTodayCreate} The populated <code>DateIsTodayCreate</code> instance.
   */
  _createClass(DateIsTodayCreate, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DateIsTodayCreate();
        if (data.hasOwnProperty('subject_type')) obj.subjectType = _ApiClient.ApiClient.convertToType(data['subject_type'], 'String');
        if (data.hasOwnProperty('type')) obj.type = _ApiClient.ApiClient.convertToType(data['type'], 'String');
        if (data.hasOwnProperty('value')) obj.value = _ApiClient.ApiClient.convertToType(data['value'], 'Date');
      }
      return obj;
    }
  }]);
  return DateIsTodayCreate;
}();
/**
 * Allowed values for the <code>subjectType</code> property.
 * @enum {String}
 * @readonly
 */
exports.DateIsTodayCreate = DateIsTodayCreate;
DateIsTodayCreate.SubjectTypeEnum = {
  /**
   * value: "JOB_DUE_AT"
   * @const
   */
  JOB_DUE_AT: "JOB_DUE_AT"
};
/**
 * The list members field to filter results. Specified subject type must be compatible with the associated list member class. DateIsToday rules only admit date subject types (fields with date type).
 * @member {module:model/DateIsTodayCreate.SubjectTypeEnum} subjectType
 */
DateIsTodayCreate.prototype.subjectType = undefined;

/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
DateIsTodayCreate.TypeEnum = {
  /**
   * value: "DateIsToday"
   * @const
   */
  dateIsToday: "DateIsToday"
};
/**
 * The rule match condition. Defines how the rule matches list members. Rule matches list members by comparing the rule value with the subject type field value associated with each list member candidate. The type attribute defines how these values are compared (number greater than, string begins with, etc). DateIsToday rules always have \"DateIsToday\" as type.
 * @member {module:model/DateIsTodayCreate.TypeEnum} type
 */
DateIsTodayCreate.prototype.type = undefined;

/**
 * The value rule uses to compare the subject type field value of list member candidates. Value comparison will be performed according to the specified rule type. DateIsToday rules use the current date to compare the subject type field value, thus, they do not require the value to be specified.
 * @member {Date} value
 */
DateIsTodayCreate.prototype.value = undefined;

// Implement RuleCreate interface: