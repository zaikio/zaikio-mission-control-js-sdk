"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.JobsBody = void 0;
var _ApiClient = require("../ApiClient");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The JobsBody model module.
 * @module model/JobsBody
 * @version 1.0.0
 */
var JobsBody = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>JobsBody</code>.
   * @alias module:model/JobsBody
   * @class
   * @param job {Object} 
   */
  function JobsBody(job) {
    _classCallCheck(this, JobsBody);
    this.job = job;
  }

  /**
   * Constructs a <code>JobsBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/JobsBody} obj Optional instance to populate.
   * @return {module:model/JobsBody} The populated <code>JobsBody</code> instance.
   */
  _createClass(JobsBody, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new JobsBody();
        if (data.hasOwnProperty('job')) obj.job = _ApiClient.ApiClient.convertToType(data['job'], Object);
      }
      return obj;
    }
  }]);
  return JobsBody;
}();
/**
 * @member {Object} job
 */
exports.JobsBody = JobsBody;
JobsBody.prototype.job = undefined;