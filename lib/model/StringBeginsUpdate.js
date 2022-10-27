"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StringBeginsUpdate = void 0;
var _ApiClient = require("../ApiClient");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The StringBeginsUpdate model module.
 * @module model/StringBeginsUpdate
 * @version 1.0.0
 */
var StringBeginsUpdate = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>StringBeginsUpdate</code>.
   * @alias module:model/StringBeginsUpdate
   * @class
   */
  function StringBeginsUpdate() {
    _classCallCheck(this, StringBeginsUpdate);
  }

  /**
   * Constructs a <code>StringBeginsUpdate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/StringBeginsUpdate} obj Optional instance to populate.
   * @return {module:model/StringBeginsUpdate} The populated <code>StringBeginsUpdate</code> instance.
   */
  _createClass(StringBeginsUpdate, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new StringBeginsUpdate();
        if (data.hasOwnProperty('subject_type')) obj.subjectType = _ApiClient.ApiClient.convertToType(data['subject_type'], 'String');
        if (data.hasOwnProperty('type')) obj.type = _ApiClient.ApiClient.convertToType(data['type'], 'String');
        if (data.hasOwnProperty('value')) obj.value = _ApiClient.ApiClient.convertToType(data['value'], 'String');
      }
      return obj;
    }
  }]);
  return StringBeginsUpdate;
}();
/**
 * Allowed values for the <code>subjectType</code> property.
 * @enum {String}
 * @readonly
 */
exports.StringBeginsUpdate = StringBeginsUpdate;
StringBeginsUpdate.SubjectTypeEnum = {
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
 * @member {module:model/StringBeginsUpdate.SubjectTypeEnum} subjectType
 */
StringBeginsUpdate.prototype.subjectType = undefined;

/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
StringBeginsUpdate.TypeEnum = {
  /**
   * value: "StringBegins"
   * @const
   */
  stringBegins: "StringBegins"
};
/**
 * The rule match condition. Defines how the rule matches list members. Rule matches list members by comparing the rule value with the subject type field value associated with each list member candidate. The type attribute defines how these values are compared (number greater than, string begins with, etc). StringBegins rules always have \"StringBegins\" as type.
 * @member {module:model/StringBeginsUpdate.TypeEnum} type
 */
StringBeginsUpdate.prototype.type = undefined;

/**
 * The value rule uses to compare the subject type field value of list member candidates. Value comparison will be performed according to the specified rule type. StringBegins rules check subject type field string value begins with rule value.
 * @member {String} value
 */
StringBeginsUpdate.prototype.value = undefined;

// Implement RuleUpdate interface: