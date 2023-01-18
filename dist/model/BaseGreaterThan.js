"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BaseGreaterThan = void 0;
var _ApiClient = require("../ApiClient");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The BaseGreaterThan model module.
 * @module model/BaseGreaterThan
 * @version 1.0.0
 */
var BaseGreaterThan = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>BaseGreaterThan</code>.
   * @alias module:model/BaseGreaterThan
   * @class
   * @param id {String} 
   * @param createdAt {Date} 
   * @param updatedAt {Date} 
   * @param subjectType {module:model/BaseGreaterThan.SubjectTypeEnum} The list members field to filter results. Specified subject type must be compatible with the associated list member class.
   * @param type {module:model/BaseGreaterThan.TypeEnum} The rule match condition. Defines how the rule matches list members. Rule matches list members by comparing the rule value with the subject type field value associated with each list member candidate. The type attribute defines how these values are compared (number greater than, string begins with, etc). GreaterThan rules always have \"GreaterThan\" as type.
   */
  function BaseGreaterThan(id, createdAt, updatedAt, subjectType, type) {
    _classCallCheck(this, BaseGreaterThan);
    this.id = id;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.subjectType = subjectType;
    this.type = type;
  }

  /**
   * Constructs a <code>BaseGreaterThan</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BaseGreaterThan} obj Optional instance to populate.
   * @return {module:model/BaseGreaterThan} The populated <code>BaseGreaterThan</code> instance.
   */
  _createClass(BaseGreaterThan, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new BaseGreaterThan();
        if (data.hasOwnProperty('id')) obj.id = _ApiClient.ApiClient.convertToType(data['id'], 'String');
        if (data.hasOwnProperty('created_at')) obj.createdAt = _ApiClient.ApiClient.convertToType(data['created_at'], 'Date');
        if (data.hasOwnProperty('updated_at')) obj.updatedAt = _ApiClient.ApiClient.convertToType(data['updated_at'], 'Date');
        if (data.hasOwnProperty('subject_type')) obj.subjectType = _ApiClient.ApiClient.convertToType(data['subject_type'], 'String');
        if (data.hasOwnProperty('type')) obj.type = _ApiClient.ApiClient.convertToType(data['type'], 'String');
      }
      return obj;
    }
  }]);
  return BaseGreaterThan;
}();
/**
 * @member {String} id
 */
exports.BaseGreaterThan = BaseGreaterThan;
BaseGreaterThan.prototype.id = undefined;

/**
 * @member {Date} createdAt
 */
BaseGreaterThan.prototype.createdAt = undefined;

/**
 * @member {Date} updatedAt
 */
BaseGreaterThan.prototype.updatedAt = undefined;

/**
 * Allowed values for the <code>subjectType</code> property.
 * @enum {String}
 * @readonly
 */
BaseGreaterThan.SubjectTypeEnum = {
  /**
   * value: "JOB_CREATED_AT"
   * @const
   */
  JOB_CREATED_AT: "JOB_CREATED_AT",
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
 * @member {module:model/BaseGreaterThan.SubjectTypeEnum} subjectType
 */
BaseGreaterThan.prototype.subjectType = undefined;

/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
BaseGreaterThan.TypeEnum = {
  /**
   * value: "GreaterThan"
   * @const
   */
  greaterThan: "GreaterThan"
};
/**
 * The rule match condition. Defines how the rule matches list members. Rule matches list members by comparing the rule value with the subject type field value associated with each list member candidate. The type attribute defines how these values are compared (number greater than, string begins with, etc). GreaterThan rules always have \"GreaterThan\" as type.
 * @member {module:model/BaseGreaterThan.TypeEnum} type
 */
BaseGreaterThan.prototype.type = undefined;