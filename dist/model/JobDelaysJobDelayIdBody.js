"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.JobDelaysJobDelayIdBody = void 0;
var _ApiClient = require("../ApiClient");
var _JobDelayUpdate = require("./JobDelayUpdate");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The JobDelaysJobDelayIdBody model module.
 * @module model/JobDelaysJobDelayIdBody
 * @version 1.0.0
 */
var JobDelaysJobDelayIdBody = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>JobDelaysJobDelayIdBody</code>.
   * @alias module:model/JobDelaysJobDelayIdBody
   * @class
   * @param jobDelay {module:model/JobDelayUpdate} 
   */
  function JobDelaysJobDelayIdBody(jobDelay) {
    _classCallCheck(this, JobDelaysJobDelayIdBody);
    this.jobDelay = jobDelay;
  }

  /**
   * Constructs a <code>JobDelaysJobDelayIdBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/JobDelaysJobDelayIdBody} obj Optional instance to populate.
   * @return {module:model/JobDelaysJobDelayIdBody} The populated <code>JobDelaysJobDelayIdBody</code> instance.
   */
  _createClass(JobDelaysJobDelayIdBody, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new JobDelaysJobDelayIdBody();
        if (data.hasOwnProperty('job_delay')) obj.jobDelay = _JobDelayUpdate.JobDelayUpdate.constructFromObject(data['job_delay']);
      }
      return obj;
    }
  }]);
  return JobDelaysJobDelayIdBody;
}();
/**
 * @member {module:model/JobDelayUpdate} jobDelay
 */
exports.JobDelaysJobDelayIdBody = JobDelaysJobDelayIdBody;
JobDelaysJobDelayIdBody.prototype.jobDelay = undefined;