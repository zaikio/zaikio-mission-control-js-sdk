"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.JobIdEstimatesBody = void 0;
var _ApiClient = require("../ApiClient");
var _EstimateCreate = require("./EstimateCreate");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The JobIdEstimatesBody model module.
 * @module model/JobIdEstimatesBody
 * @version 1.0.0
 */
var JobIdEstimatesBody = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>JobIdEstimatesBody</code>.
   * @alias module:model/JobIdEstimatesBody
   * @class
   * @param estimate {module:model/EstimateCreate} 
   */
  function JobIdEstimatesBody(estimate) {
    _classCallCheck(this, JobIdEstimatesBody);
    this.estimate = estimate;
  }

  /**
   * Constructs a <code>JobIdEstimatesBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/JobIdEstimatesBody} obj Optional instance to populate.
   * @return {module:model/JobIdEstimatesBody} The populated <code>JobIdEstimatesBody</code> instance.
   */
  _createClass(JobIdEstimatesBody, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new JobIdEstimatesBody();
        if (data.hasOwnProperty('estimate')) obj.estimate = _EstimateCreate.EstimateCreate.constructFromObject(data['estimate']);
      }
      return obj;
    }
  }]);
  return JobIdEstimatesBody;
}();
/**
 * @member {module:model/EstimateCreate} estimate
 */
exports.JobIdEstimatesBody = JobIdEstimatesBody;
JobIdEstimatesBody.prototype.estimate = undefined;