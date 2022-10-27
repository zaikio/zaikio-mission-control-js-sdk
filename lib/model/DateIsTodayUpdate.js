"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DateIsTodayUpdate = void 0;
var _ApiClient = require("../ApiClient");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The DateIsTodayUpdate model module.
 * @module model/DateIsTodayUpdate
 * @version 1.0.0
 */
var DateIsTodayUpdate = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>DateIsTodayUpdate</code>.
   * @alias module:model/DateIsTodayUpdate
   * @class
   */
  function DateIsTodayUpdate() {
    _classCallCheck(this, DateIsTodayUpdate);
  }

  /**
   * Constructs a <code>DateIsTodayUpdate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DateIsTodayUpdate} obj Optional instance to populate.
   * @return {module:model/DateIsTodayUpdate} The populated <code>DateIsTodayUpdate</code> instance.
   */
  _createClass(DateIsTodayUpdate, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DateIsTodayUpdate();
        if (data.hasOwnProperty('subject_type')) obj.subjectType = _ApiClient.ApiClient.convertToType(data['subject_type'], 'String');
        if (data.hasOwnProperty('type')) obj.type = _ApiClient.ApiClient.convertToType(data['type'], 'String');
        if (data.hasOwnProperty('value')) obj.value = _ApiClient.ApiClient.convertToType(data['value'], 'Date');
      }
      return obj;
    }
  }]);
  return DateIsTodayUpdate;
}();
/**
 * Allowed values for the <code>subjectType</code> property.
 * @enum {String}
 * @readonly
 */
exports.DateIsTodayUpdate = DateIsTodayUpdate;
DateIsTodayUpdate.SubjectTypeEnum = {
  /**
   * value: "JOB_DUE_AT"
   * @const
   */
  JOB_DUE_AT: "JOB_DUE_AT"
};
/**
 * The list members field to filter results. Specified subject type must be compatible with the associated list member class. DateIsToday rules only admit date subject types (fields with date type).
 * @member {module:model/DateIsTodayUpdate.SubjectTypeEnum} subjectType
 */
DateIsTodayUpdate.prototype.subjectType = undefined;

/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
DateIsTodayUpdate.TypeEnum = {
  /**
   * value: "DateIsToday"
   * @const
   */
  dateIsToday: "DateIsToday"
};
/**
 * The rule match condition. Defines how the rule matches list members. Rule matches list members by comparing the rule value with the subject type field value associated with each list member candidate. The type attribute defines how these values are compared (number greater than, string begins with, etc). DateIsToday rules always have \"DateIsToday\" as type.
 * @member {module:model/DateIsTodayUpdate.TypeEnum} type
 */
DateIsTodayUpdate.prototype.type = undefined;

/**
 * The value rule uses to compare the subject type field value of list member candidates. Value comparison will be performed according to the specified rule type. DateIsToday rules use the current date to compare the subject type field value, thus, they do not require the value to be specified.
 * @member {Date} value
 */
DateIsTodayUpdate.prototype.value = undefined;

// Implement RuleUpdate interface: