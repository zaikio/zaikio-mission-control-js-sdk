"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StringEndsCreate = void 0;
var _ApiClient = require("../ApiClient");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The StringEndsCreate model module.
 * @module model/StringEndsCreate
 * @version 1.0.0
 */
var StringEndsCreate = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>StringEndsCreate</code>.
   * @alias module:model/StringEndsCreate
   * @class
   */
  function StringEndsCreate() {
    _classCallCheck(this, StringEndsCreate);
  }

  /**
   * Constructs a <code>StringEndsCreate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/StringEndsCreate} obj Optional instance to populate.
   * @return {module:model/StringEndsCreate} The populated <code>StringEndsCreate</code> instance.
   */
  _createClass(StringEndsCreate, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new StringEndsCreate();
        if (data.hasOwnProperty('subject_type')) obj.subjectType = _ApiClient.ApiClient.convertToType(data['subject_type'], 'String');
        if (data.hasOwnProperty('type')) obj.type = _ApiClient.ApiClient.convertToType(data['type'], 'String');
        if (data.hasOwnProperty('value')) obj.value = _ApiClient.ApiClient.convertToType(data['value'], 'String');
      }
      return obj;
    }
  }]);
  return StringEndsCreate;
}();
/**
 * Allowed values for the <code>subjectType</code> property.
 * @enum {String}
 * @readonly
 */
exports.StringEndsCreate = StringEndsCreate;
StringEndsCreate.SubjectTypeEnum = {
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
 * @member {module:model/StringEndsCreate.SubjectTypeEnum} subjectType
 */
StringEndsCreate.prototype.subjectType = undefined;

/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
StringEndsCreate.TypeEnum = {
  /**
   * value: "StringEnds"
   * @const
   */
  stringEnds: "StringEnds"
};
/**
 * The rule match condition. Defines how the rule matches list members. Rule matches list members by comparing the rule value with the subject type field value associated with each list member candidate. The type attribute defines how these values are compared (number greater than, string begins with, etc). StringEnds rules always have \"StringEnds\" as type.
 * @member {module:model/StringEndsCreate.TypeEnum} type
 */
StringEndsCreate.prototype.type = undefined;

/**
 * The value rule uses to compare the subject type field value of list member candidates. Value comparison will be performed according to the specified rule type. StringBegins rules check subject type field string value ends with rule value.
 * @member {String} value
 */
StringEndsCreate.prototype.value = undefined;

// Implement RuleCreate interface: