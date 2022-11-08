"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BaseGreaterThanUpdate = void 0;
var _ApiClient = require("../ApiClient");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The BaseGreaterThanUpdate model module.
 * @module model/BaseGreaterThanUpdate
 * @version 1.0.0
 */
var BaseGreaterThanUpdate = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>BaseGreaterThanUpdate</code>.
   * @alias module:model/BaseGreaterThanUpdate
   * @class
   */
  function BaseGreaterThanUpdate() {
    _classCallCheck(this, BaseGreaterThanUpdate);
  }

  /**
   * Constructs a <code>BaseGreaterThanUpdate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BaseGreaterThanUpdate} obj Optional instance to populate.
   * @return {module:model/BaseGreaterThanUpdate} The populated <code>BaseGreaterThanUpdate</code> instance.
   */
  _createClass(BaseGreaterThanUpdate, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new BaseGreaterThanUpdate();
        if (data.hasOwnProperty('subject_type')) obj.subjectType = _ApiClient.ApiClient.convertToType(data['subject_type'], 'String');
        if (data.hasOwnProperty('type')) obj.type = _ApiClient.ApiClient.convertToType(data['type'], 'String');
      }
      return obj;
    }
  }]);
  return BaseGreaterThanUpdate;
}();
/**
 * Allowed values for the <code>subjectType</code> property.
 * @enum {String}
 * @readonly
 */
exports.BaseGreaterThanUpdate = BaseGreaterThanUpdate;
BaseGreaterThanUpdate.SubjectTypeEnum = {
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
 * @member {module:model/BaseGreaterThanUpdate.SubjectTypeEnum} subjectType
 */
BaseGreaterThanUpdate.prototype.subjectType = undefined;

/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
BaseGreaterThanUpdate.TypeEnum = {
  /**
   * value: "GreaterThan"
   * @const
   */
  greaterThan: "GreaterThan"
};
/**
 * The rule match condition. Defines how the rule matches list members. Rule matches list members by comparing the rule value with the subject type field value associated with each list member candidate. The type attribute defines how these values are compared (number greater than, string begins with, etc). GreaterThan rules always have \"GreaterThan\" as type.
 * @member {module:model/BaseGreaterThanUpdate.TypeEnum} type
 */
BaseGreaterThanUpdate.prototype.type = undefined;