"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NumberEquals = void 0;
var _ApiClient = require("../ApiClient");
var _BaseEquals = require("./BaseEquals");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The NumberEquals model module.
 * @module model/NumberEquals
 * @version 1.0.0
 */
var NumberEquals = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>NumberEquals</code>.
   * @alias module:model/NumberEquals
   * @class
   * @param id {} 
   * @param createdAt {} 
   * @param updatedAt {} 
   * @param subjectType {} The list members field to filter results. Specified subject type must be compatible with the associated list member class.
   * @param type {} The rule match condition. Defines how the rule matches list members. Rule matches list members by comparing the rule value with the subject type field value associated with each list member candidate. The type attribute defines how these values are compared (number greather than, string begins with, etc). Equals rules always have \"Equals\" as type.
   */
  function NumberEquals(id, createdAt, updatedAt, subjectType, type) {
    _classCallCheck(this, NumberEquals);
    this.id = id;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.subjectType = subjectType;
    this.type = type;
  }

  /**
   * Constructs a <code>NumberEquals</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/NumberEquals} obj Optional instance to populate.
   * @return {module:model/NumberEquals} The populated <code>NumberEquals</code> instance.
   */
  _createClass(NumberEquals, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new NumberEquals();
        if (data.hasOwnProperty('id')) obj.id = _ApiClient.ApiClient.convertToType(data['id'], 'String');
        if (data.hasOwnProperty('created_at')) obj.createdAt = _ApiClient.ApiClient.convertToType(data['created_at'], 'Date');
        if (data.hasOwnProperty('updated_at')) obj.updatedAt = _ApiClient.ApiClient.convertToType(data['updated_at'], 'Date');
        if (data.hasOwnProperty('subject_type')) obj.subjectType = _ApiClient.ApiClient.convertToType(data['subject_type'], 'String');
        if (data.hasOwnProperty('type')) obj.type = _ApiClient.ApiClient.convertToType(data['type'], 'String');
      }
      return obj;
    }
  }]);
  return NumberEquals;
}();
/**
 * @member {String} id
 */
exports.NumberEquals = NumberEquals;
NumberEquals.prototype.id = undefined;

/**
 * @member {Date} createdAt
 */
NumberEquals.prototype.createdAt = undefined;

/**
 * @member {Date} updatedAt
 */
NumberEquals.prototype.updatedAt = undefined;

/**
 * Allowed values for the <code>subjectType</code> property.
 * @enum {String}
 * @readonly
 */
NumberEquals.SubjectTypeEnum = {
  /**
   * value: "CUSTOMER_NAME"
   * @const
   */
  CUSTOMER_NAME: "CUSTOMER_NAME",
  /**
   * value: "FINISHING_KIND"
   * @const
   */
  FINISHING_KIND: "FINISHING_KIND",
  /**
   * value: "JOB_DUE_AT"
   * @const
   */
  JOB_DUE_AT: "JOB_DUE_AT",
  /**
   * value: "JOB_KIND"
   * @const
   */
  JOB_KIND: "JOB_KIND",
  /**
   * value: "JOB_NAME"
   * @const
   */
  JOB_NAME: "JOB_NAME",
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
   * value: "JOB_SOURCE"
   * @const
   */
  JOB_SOURCE: "JOB_SOURCE",
  /**
   * value: "JOB_STATE"
   * @const
   */
  JOB_STATE: "JOB_STATE",
  /**
   * value: "MILESTONE_POSITION"
   * @const
   */
  MILESTONE_POSITION: "MILESTONE_POSITION",
  /**
   * value: "SUBSTRATE_PAPER_WEIGHT"
   * @const
   */
  SUBSTRATE_PAPER_WEIGHT: "SUBSTRATE_PAPER_WEIGHT",
  /**
   * value: "TODO_STATE"
   * @const
   */
  TODO_STATE: "TODO_STATE",
  /**
   * value: "WORKSTEP_STATE"
   * @const
   */
  WORKSTEP_STATE: "WORKSTEP_STATE"
};
/**
 * The list members field to filter results. Specified subject type must be compatible with the associated list member class.
 * @member {module:model/NumberEquals.SubjectTypeEnum} subjectType
 */
NumberEquals.prototype.subjectType = undefined;

/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
NumberEquals.TypeEnum = {
  /**
   * value: "Equals"
   * @const
   */
  equals: "Equals"
};
/**
 * The rule match condition. Defines how the rule matches list members. Rule matches list members by comparing the rule value with the subject type field value associated with each list member candidate. The type attribute defines how these values are compared (number greather than, string begins with, etc). Equals rules always have \"Equals\" as type.
 * @member {module:model/NumberEquals.TypeEnum} type
 */
NumberEquals.prototype.type = undefined;

// Implement Equals interface: