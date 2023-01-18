"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BaseEqualsUpdate = void 0;
var _ApiClient = require("../ApiClient");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The BaseEqualsUpdate model module.
 * @module model/BaseEqualsUpdate
 * @version 1.0.0
 */
var BaseEqualsUpdate = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>BaseEqualsUpdate</code>.
   * @alias module:model/BaseEqualsUpdate
   * @class
   */
  function BaseEqualsUpdate() {
    _classCallCheck(this, BaseEqualsUpdate);
  }

  /**
   * Constructs a <code>BaseEqualsUpdate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BaseEqualsUpdate} obj Optional instance to populate.
   * @return {module:model/BaseEqualsUpdate} The populated <code>BaseEqualsUpdate</code> instance.
   */
  _createClass(BaseEqualsUpdate, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new BaseEqualsUpdate();
        if (data.hasOwnProperty('subject_type')) obj.subjectType = _ApiClient.ApiClient.convertToType(data['subject_type'], 'String');
        if (data.hasOwnProperty('type')) obj.type = _ApiClient.ApiClient.convertToType(data['type'], 'String');
      }
      return obj;
    }
  }]);
  return BaseEqualsUpdate;
}();
/**
 * Allowed values for the <code>subjectType</code> property.
 * @enum {String}
 * @readonly
 */
exports.BaseEqualsUpdate = BaseEqualsUpdate;
BaseEqualsUpdate.SubjectTypeEnum = {
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
 * @member {module:model/BaseEqualsUpdate.SubjectTypeEnum} subjectType
 */
BaseEqualsUpdate.prototype.subjectType = undefined;

/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
BaseEqualsUpdate.TypeEnum = {
  /**
   * value: "Equals"
   * @const
   */
  equals: "Equals"
};
/**
 * The rule match condition. Defines how the rule matches list members. Rule matches list members by comparing the rule value with the subject type field value associated with each list member candidate. The type attribute defines how these values are compared (number greather than, string begins with, etc). Equals rules always have \"Equals\" as type.
 * @member {module:model/BaseEqualsUpdate.TypeEnum} type
 */
BaseEqualsUpdate.prototype.type = undefined;