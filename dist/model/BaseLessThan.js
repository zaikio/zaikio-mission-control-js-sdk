"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BaseLessThan = void 0;
var _ApiClient = require("../ApiClient");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The BaseLessThan model module.
 * @module model/BaseLessThan
 * @version 1.0.0
 */
var BaseLessThan = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>BaseLessThan</code>.
   * @alias module:model/BaseLessThan
   * @class
   * @param id {String} 
   * @param createdAt {Date} 
   * @param updatedAt {Date} 
   * @param subjectType {module:model/BaseLessThan.SubjectTypeEnum} The list members field to filter results. Specified subject type must be compatible with the associated list member class.
   * @param type {module:model/BaseLessThan.TypeEnum} The rule match condition. Defines how the rule matches list members. Rule matches list members by comparing the rule value with the subject type field value associated with each list member candidate. The type attribute defines how these values are compared (number greater than, string begins with, etc). LessThan rules always have \"LessThan\" as type.
   */
  function BaseLessThan(id, createdAt, updatedAt, subjectType, type) {
    _classCallCheck(this, BaseLessThan);
    this.id = id;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.subjectType = subjectType;
    this.type = type;
  }

  /**
   * Constructs a <code>BaseLessThan</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BaseLessThan} obj Optional instance to populate.
   * @return {module:model/BaseLessThan} The populated <code>BaseLessThan</code> instance.
   */
  _createClass(BaseLessThan, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new BaseLessThan();
        if (data.hasOwnProperty('id')) obj.id = _ApiClient.ApiClient.convertToType(data['id'], 'String');
        if (data.hasOwnProperty('created_at')) obj.createdAt = _ApiClient.ApiClient.convertToType(data['created_at'], 'Date');
        if (data.hasOwnProperty('updated_at')) obj.updatedAt = _ApiClient.ApiClient.convertToType(data['updated_at'], 'Date');
        if (data.hasOwnProperty('subject_type')) obj.subjectType = _ApiClient.ApiClient.convertToType(data['subject_type'], 'String');
        if (data.hasOwnProperty('type')) obj.type = _ApiClient.ApiClient.convertToType(data['type'], 'String');
      }
      return obj;
    }
  }]);
  return BaseLessThan;
}();
/**
 * @member {String} id
 */
exports.BaseLessThan = BaseLessThan;
BaseLessThan.prototype.id = undefined;

/**
 * @member {Date} createdAt
 */
BaseLessThan.prototype.createdAt = undefined;

/**
 * @member {Date} updatedAt
 */
BaseLessThan.prototype.updatedAt = undefined;

/**
 * Allowed values for the <code>subjectType</code> property.
 * @enum {String}
 * @readonly
 */
BaseLessThan.SubjectTypeEnum = {
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
 * @member {module:model/BaseLessThan.SubjectTypeEnum} subjectType
 */
BaseLessThan.prototype.subjectType = undefined;

/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
BaseLessThan.TypeEnum = {
  /**
   * value: "LessThan"
   * @const
   */
  lessThan: "LessThan"
};
/**
 * The rule match condition. Defines how the rule matches list members. Rule matches list members by comparing the rule value with the subject type field value associated with each list member candidate. The type attribute defines how these values are compared (number greater than, string begins with, etc). LessThan rules always have \"LessThan\" as type.
 * @member {module:model/BaseLessThan.TypeEnum} type
 */
BaseLessThan.prototype.type = undefined;