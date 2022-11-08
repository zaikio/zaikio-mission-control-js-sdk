"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.JobIdMilestonesBody = void 0;
var _ApiClient = require("../ApiClient");
var _MilestoneCreate = require("./MilestoneCreate");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The JobIdMilestonesBody model module.
 * @module model/JobIdMilestonesBody
 * @version 1.0.0
 */
var JobIdMilestonesBody = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>JobIdMilestonesBody</code>.
   * @alias module:model/JobIdMilestonesBody
   * @class
   * @param milestone {module:model/MilestoneCreate} 
   */
  function JobIdMilestonesBody(milestone) {
    _classCallCheck(this, JobIdMilestonesBody);
    this.milestone = milestone;
  }

  /**
   * Constructs a <code>JobIdMilestonesBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/JobIdMilestonesBody} obj Optional instance to populate.
   * @return {module:model/JobIdMilestonesBody} The populated <code>JobIdMilestonesBody</code> instance.
   */
  _createClass(JobIdMilestonesBody, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new JobIdMilestonesBody();
        if (data.hasOwnProperty('milestone')) obj.milestone = _MilestoneCreate.MilestoneCreate.constructFromObject(data['milestone']);
      }
      return obj;
    }
  }]);
  return JobIdMilestonesBody;
}();
/**
 * @member {module:model/MilestoneCreate} milestone
 */
exports.JobIdMilestonesBody = JobIdMilestonesBody;
JobIdMilestonesBody.prototype.milestone = undefined;