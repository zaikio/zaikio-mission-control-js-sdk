"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DateIsPastUpdate = void 0;
var _ApiClient = require("../ApiClient");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The DateIsPastUpdate model module.
 * @module model/DateIsPastUpdate
 * @version 1.0.0
 */
var DateIsPastUpdate = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>DateIsPastUpdate</code>.
   * @alias module:model/DateIsPastUpdate
   * @class
   */
  function DateIsPastUpdate() {
    _classCallCheck(this, DateIsPastUpdate);
  }

  /**
   * Constructs a <code>DateIsPastUpdate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DateIsPastUpdate} obj Optional instance to populate.
   * @return {module:model/DateIsPastUpdate} The populated <code>DateIsPastUpdate</code> instance.
   */
  _createClass(DateIsPastUpdate, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DateIsPastUpdate();
        if (data.hasOwnProperty('subject_type')) obj.subjectType = _ApiClient.ApiClient.convertToType(data['subject_type'], 'String');
        if (data.hasOwnProperty('type')) obj.type = _ApiClient.ApiClient.convertToType(data['type'], 'String');
        if (data.hasOwnProperty('value')) obj.value = _ApiClient.ApiClient.convertToType(data['value'], 'Date');
      }
      return obj;
    }
  }]);
  return DateIsPastUpdate;
}();
/**
 * Allowed values for the <code>subjectType</code> property.
 * @enum {String}
 * @readonly
 */
exports.DateIsPastUpdate = DateIsPastUpdate;
DateIsPastUpdate.SubjectTypeEnum = {
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
 * @member {module:model/DateIsPastUpdate.SubjectTypeEnum} subjectType
 */
DateIsPastUpdate.prototype.subjectType = undefined;

/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
DateIsPastUpdate.TypeEnum = {
  /**
   * value: "DateIsPast"
   * @const
   */
  dateIsPast: "DateIsPast"
};
/**
 * The rule match condition. Defines how the rule matches list members. Rule matches list members by comparing the rule value with the subject type field value associated with each list member candidate. The type attribute defines how these values are compared (number greater than, string begins with, etc). DateIsPast rules always have \"DateIsPast\" as type.
 * @member {module:model/DateIsPastUpdate.TypeEnum} type
 */
DateIsPastUpdate.prototype.type = undefined;

/**
 * The value rule uses to compare the subject type field value of list member candidates. Value comparison will be performed according to the specified rule type. DateIsPast rules use the current date to compare the subject type field value, thus, they do not require the value to be specified.
 * @member {Date} value
 */
DateIsPastUpdate.prototype.value = undefined;

// Implement RuleUpdate interface: