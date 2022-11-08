"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.JobsJobIdBody = void 0;
var _ApiClient = require("../ApiClient");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The JobsJobIdBody model module.
 * @module model/JobsJobIdBody
 * @version 1.0.0
 */
var JobsJobIdBody = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>JobsJobIdBody</code>.
   * @alias module:model/JobsJobIdBody
   * @class
   * @param job {Object} 
   */
  function JobsJobIdBody(job) {
    _classCallCheck(this, JobsJobIdBody);
    this.job = job;
  }

  /**
   * Constructs a <code>JobsJobIdBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/JobsJobIdBody} obj Optional instance to populate.
   * @return {module:model/JobsJobIdBody} The populated <code>JobsJobIdBody</code> instance.
   */
  _createClass(JobsJobIdBody, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new JobsJobIdBody();
        if (data.hasOwnProperty('job')) obj.job = _ApiClient.ApiClient.convertToType(data['job'], Object);
      }
      return obj;
    }
  }]);
  return JobsJobIdBody;
}();
/**
 * @member {Object} job
 */
exports.JobsJobIdBody = JobsJobIdBody;
JobsJobIdBody.prototype.job = undefined;