"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.JobStateTransitionUpdate = void 0;
var _ApiClient = require("../ApiClient");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The JobStateTransitionUpdate model module.
 * @module model/JobStateTransitionUpdate
 * @version 1.0.0
 */
var JobStateTransitionUpdate = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>JobStateTransitionUpdate</code>.
   * @alias module:model/JobStateTransitionUpdate
   * @class
   */
  function JobStateTransitionUpdate() {
    _classCallCheck(this, JobStateTransitionUpdate);
  }

  /**
   * Constructs a <code>JobStateTransitionUpdate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/JobStateTransitionUpdate} obj Optional instance to populate.
   * @return {module:model/JobStateTransitionUpdate} The populated <code>JobStateTransitionUpdate</code> instance.
   */
  _createClass(JobStateTransitionUpdate, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new JobStateTransitionUpdate();
        if (data.hasOwnProperty('next_state')) obj.nextState = _ApiClient.ApiClient.convertToType(data['next_state'], 'String');
      }
      return obj;
    }
  }]);
  return JobStateTransitionUpdate;
}();
/**
 * Allowed values for the <code>nextState</code> property.
 * @enum {String}
 * @readonly
 */
exports.JobStateTransitionUpdate = JobStateTransitionUpdate;
JobStateTransitionUpdate.NextStateEnum = {
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
 * @member {module:model/JobStateTransitionUpdate.NextStateEnum} nextState
 */
JobStateTransitionUpdate.prototype.nextState = undefined;