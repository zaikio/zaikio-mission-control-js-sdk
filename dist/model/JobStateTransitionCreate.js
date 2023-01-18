"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.JobStateTransitionCreate = void 0;
var _ApiClient = require("../ApiClient");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The JobStateTransitionCreate model module.
 * @module model/JobStateTransitionCreate
 * @version 1.0.0
 */
var JobStateTransitionCreate = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>JobStateTransitionCreate</code>.
   * @alias module:model/JobStateTransitionCreate
   * @class
   */
  function JobStateTransitionCreate() {
    _classCallCheck(this, JobStateTransitionCreate);
  }

  /**
   * Constructs a <code>JobStateTransitionCreate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/JobStateTransitionCreate} obj Optional instance to populate.
   * @return {module:model/JobStateTransitionCreate} The populated <code>JobStateTransitionCreate</code> instance.
   */
  _createClass(JobStateTransitionCreate, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new JobStateTransitionCreate();
        if (data.hasOwnProperty('next_state')) obj.nextState = _ApiClient.ApiClient.convertToType(data['next_state'], 'String');
      }
      return obj;
    }
  }]);
  return JobStateTransitionCreate;
}();
/**
 * Allowed values for the <code>nextState</code> property.
 * @enum {String}
 * @readonly
 */
exports.JobStateTransitionCreate = JobStateTransitionCreate;
JobStateTransitionCreate.NextStateEnum = {
  /**
   * value: ":draft"
   * @const
   */
  draft: ":draft",
  /**
   * value: ":pending"
   * @const
   */
  pending: ":pending",
  /**
   * value: ":prepress"
   * @const
   */
  prepress: ":prepress",
  /**
   * value: ":press"
   * @const
   */
  press: ":press",
  /**
   * value: ":postpress"
   * @const
   */
  postpress: ":postpress",
  /**
   * value: ":packaging"
   * @const
   */
  packaging: ":packaging",
  /**
   * value: ":completed"
   * @const
   */
  completed: ":completed",
  /**
   * value: ":canceled"
   * @const
   */
  canceled: ":canceled"
};
/**
 * The state the Job is transitioning to
 * @member {module:model/JobStateTransitionCreate.NextStateEnum} nextState
 */
JobStateTransitionCreate.prototype.nextState = undefined;