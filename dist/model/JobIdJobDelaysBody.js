"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.JobIdJobDelaysBody = void 0;
var _ApiClient = require("../ApiClient");
var _JobDelayCreate = require("./JobDelayCreate");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The JobIdJobDelaysBody model module.
 * @module model/JobIdJobDelaysBody
 * @version 1.0.0
 */
var JobIdJobDelaysBody = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>JobIdJobDelaysBody</code>.
   * @alias module:model/JobIdJobDelaysBody
   * @class
   * @param jobDelay {module:model/JobDelayCreate} 
   */
  function JobIdJobDelaysBody(jobDelay) {
    _classCallCheck(this, JobIdJobDelaysBody);
    this.jobDelay = jobDelay;
  }

  /**
   * Constructs a <code>JobIdJobDelaysBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/JobIdJobDelaysBody} obj Optional instance to populate.
   * @return {module:model/JobIdJobDelaysBody} The populated <code>JobIdJobDelaysBody</code> instance.
   */
  _createClass(JobIdJobDelaysBody, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new JobIdJobDelaysBody();
        if (data.hasOwnProperty('job_delay')) obj.jobDelay = _JobDelayCreate.JobDelayCreate.constructFromObject(data['job_delay']);
      }
      return obj;
    }
  }]);
  return JobIdJobDelaysBody;
}();
/**
 * @member {module:model/JobDelayCreate} jobDelay
 */
exports.JobIdJobDelaysBody = JobIdJobDelaysBody;
JobIdJobDelaysBody.prototype.jobDelay = undefined;