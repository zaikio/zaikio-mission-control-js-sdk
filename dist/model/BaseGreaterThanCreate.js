"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BaseGreaterThanCreate = void 0;
var _ApiClient = require("../ApiClient");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The BaseGreaterThanCreate model module.
 * @module model/BaseGreaterThanCreate
 * @version 1.0.0
 */
var BaseGreaterThanCreate = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>BaseGreaterThanCreate</code>.
   * @alias module:model/BaseGreaterThanCreate
   * @class
   */
  function BaseGreaterThanCreate() {
    _classCallCheck(this, BaseGreaterThanCreate);
  }

  /**
   * Constructs a <code>BaseGreaterThanCreate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BaseGreaterThanCreate} obj Optional instance to populate.
   * @return {module:model/BaseGreaterThanCreate} The populated <code>BaseGreaterThanCreate</code> instance.
   */
  _createClass(BaseGreaterThanCreate, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new BaseGreaterThanCreate();
        if (data.hasOwnProperty('subject_type')) obj.subjectType = _ApiClient.ApiClient.convertToType(data['subject_type'], 'String');
        if (data.hasOwnProperty('type')) obj.type = _ApiClient.ApiClient.convertToType(data['type'], 'String');
      }
      return obj;
    }
  }]);
  return BaseGreaterThanCreate;
}();
/**
 * Allowed values for the <code>subjectType</code> property.
 * @enum {String}
 * @readonly
 */
exports.BaseGreaterThanCreate = BaseGreaterThanCreate;
BaseGreaterThanCreate.SubjectTypeEnum = {
  /**
   * value: "JOB_DUE_AT"
   * @const
   */
  JOB_DUE_AT: "JOB_DUE_AT",
  /**
   * value: "JOB_PROGRESS"
   * @const
   */
  JOB_PROGRESS: "JOB_PROGRESS",
  /**
   * value: "JOB_QUANTITY"
   * @const
   */
  JOB_QUANTITY: "JOB_QUANTITY",
  /**
   * value: "SUBSTRATE_PAPER_WEIGHT"
   * @const
   */
  SUBSTRATE_PAPER_WEIGHT: "SUBSTRATE_PAPER_WEIGHT",
  /**
   * value: "MILESTONE_POSITION"
   * @const
   */
  MILESTONE_POSITION: "MILESTONE_POSITION"
};
/**
 * The list members field to filter results. Specified subject type must be compatible with the associated list member class.
 * @member {module:model/BaseGreaterThanCreate.SubjectTypeEnum} subjectType
 */
BaseGreaterThanCreate.prototype.subjectType = undefined;

/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
BaseGreaterThanCreate.TypeEnum = {
  /**
   * value: "GreaterThan"
   * @const
   */
  greaterThan: "GreaterThan"
};
/**
 * The rule match condition. Defines how the rule matches list members. Rule matches list members by comparing the rule value with the subject type field value associated with each list member candidate. The type attribute defines how these values are compared (number greater than, string begins with, etc). GreaterThan rules always have \"GreaterThan\" as type.
 * @member {module:model/BaseGreaterThanCreate.TypeEnum} type
 */
BaseGreaterThanCreate.prototype.type = undefined;