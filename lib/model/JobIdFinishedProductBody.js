"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.JobIdFinishedProductBody = void 0;
var _ApiClient = require("../ApiClient");
var _FinishedProductCreate = require("./FinishedProductCreate");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The JobIdFinishedProductBody model module.
 * @module model/JobIdFinishedProductBody
 * @version 1.0.0
 */
var JobIdFinishedProductBody = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>JobIdFinishedProductBody</code>.
   * @alias module:model/JobIdFinishedProductBody
   * @class
   * @param finishedProduct {module:model/FinishedProductCreate} 
   */
  function JobIdFinishedProductBody(finishedProduct) {
    _classCallCheck(this, JobIdFinishedProductBody);
    this.finishedProduct = finishedProduct;
  }

  /**
   * Constructs a <code>JobIdFinishedProductBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/JobIdFinishedProductBody} obj Optional instance to populate.
   * @return {module:model/JobIdFinishedProductBody} The populated <code>JobIdFinishedProductBody</code> instance.
   */
  _createClass(JobIdFinishedProductBody, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new JobIdFinishedProductBody();
        if (data.hasOwnProperty('finished_product')) obj.finishedProduct = _FinishedProductCreate.FinishedProductCreate.constructFromObject(data['finished_product']);
      }
      return obj;
    }
  }]);
  return JobIdFinishedProductBody;
}();
/**
 * @member {module:model/FinishedProductCreate} finishedProduct
 */
exports.JobIdFinishedProductBody = JobIdFinishedProductBody;
JobIdFinishedProductBody.prototype.finishedProduct = undefined;