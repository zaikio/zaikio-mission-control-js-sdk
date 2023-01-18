"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DateIsFutureUpdate = void 0;
var _ApiClient = require("../ApiClient");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The DateIsFutureUpdate model module.
 * @module model/DateIsFutureUpdate
 * @version 1.0.0
 */
var DateIsFutureUpdate = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>DateIsFutureUpdate</code>.
   * @alias module:model/DateIsFutureUpdate
   * @class
   */
  function DateIsFutureUpdate() {
    _classCallCheck(this, DateIsFutureUpdate);
  }

  /**
   * Constructs a <code>DateIsFutureUpdate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DateIsFutureUpdate} obj Optional instance to populate.
   * @return {module:model/DateIsFutureUpdate} The populated <code>DateIsFutureUpdate</code> instance.
   */
  _createClass(DateIsFutureUpdate, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DateIsFutureUpdate();
        if (data.hasOwnProperty('subject_type')) obj.subjectType = _ApiClient.ApiClient.convertToType(data['subject_type'], 'String');
        if (data.hasOwnProperty('type')) obj.type = _ApiClient.ApiClient.convertToType(data['type'], 'String');
        if (data.hasOwnProperty('value')) obj.value = _ApiClient.ApiClient.convertToType(data['value'], 'Date');
      }
      return obj;
    }
  }]);
  return DateIsFutureUpdate;
}();
/**
 * Allowed values for the <code>subjectType</code> property.
 * @enum {String}
 * @readonly
 */
exports.DateIsFutureUpdate = DateIsFutureUpdate;
DateIsFutureUpdate.SubjectTypeEnum = {
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
 * The list members field to filter results. Specified subject type must be compatible with the associated list member class. DateIsFuture rules only admit date subject types (fields with date type).
 * @member {module:model/DateIsFutureUpdate.SubjectTypeEnum} subjectType
 */
DateIsFutureUpdate.prototype.subjectType = undefined;

/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
DateIsFutureUpdate.TypeEnum = {
  /**
   * value: "DateIsFuture"
   * @const
   */
  dateIsFuture: "DateIsFuture"
};
/**
 * The rule match condition. Defines how the rule matches list members. Rule matches list members by comparing the rule value with the subject type field value associated with each list member candidate. The type attribute defines how these values are compared (number greater than, string begins with, etc). DateIsFuture rules always have \"DateIsFuture\" as type.
 * @member {module:model/DateIsFutureUpdate.TypeEnum} type
 */
DateIsFutureUpdate.prototype.type = undefined;

/**
 * The value rule uses to compare the subject type field value of list member candidates. Value comparison will be performed according to the specified rule type. DateIsFuture rules use the current date to compare the subject type field value, thus, they do not require the value to be specified.
 * @member {Date} value
 */
DateIsFutureUpdate.prototype.value = undefined;

// Implement RuleUpdate interface: