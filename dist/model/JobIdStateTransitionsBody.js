"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.JobIdStateTransitionsBody = void 0;
var _ApiClient = require("../ApiClient");
var _JobStateTransitionCreate = require("./JobStateTransitionCreate");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The JobIdStateTransitionsBody model module.
 * @module model/JobIdStateTransitionsBody
 * @version 1.0.0
 */
var JobIdStateTransitionsBody = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>JobIdStateTransitionsBody</code>.
   * @alias module:model/JobIdStateTransitionsBody
   * @class
   * @param stateTransition {module:model/JobStateTransitionCreate} 
   */
  function JobIdStateTransitionsBody(stateTransition) {
    _classCallCheck(this, JobIdStateTransitionsBody);
    this.stateTransition = stateTransition;
  }

  /**
   * Constructs a <code>JobIdStateTransitionsBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/JobIdStateTransitionsBody} obj Optional instance to populate.
   * @return {module:model/JobIdStateTransitionsBody} The populated <code>JobIdStateTransitionsBody</code> instance.
   */
  _createClass(JobIdStateTransitionsBody, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new JobIdStateTransitionsBody();
        if (data.hasOwnProperty('state_transition')) obj.stateTransition = _JobStateTransitionCreate.JobStateTransitionCreate.constructFromObject(data['state_transition']);
      }
      return obj;
    }
  }]);
  return JobIdStateTransitionsBody;
}();
/**
 * @member {module:model/JobStateTransitionCreate} stateTransition
 */
exports.JobIdStateTransitionsBody = JobIdStateTransitionsBody;
JobIdStateTransitionsBody.prototype.stateTransition = undefined;