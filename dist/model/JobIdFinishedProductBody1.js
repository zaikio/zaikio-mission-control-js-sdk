"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.JobIdFinishedProductBody1 = void 0;
var _ApiClient = require("../ApiClient");
var _FinishedProductUpdate = require("./FinishedProductUpdate");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The JobIdFinishedProductBody1 model module.
 * @module model/JobIdFinishedProductBody1
 * @version 1.0.0
 */
var JobIdFinishedProductBody1 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>JobIdFinishedProductBody1</code>.
   * @alias module:model/JobIdFinishedProductBody1
   * @class
   * @param finishedProduct {module:model/FinishedProductUpdate} 
   */
  function JobIdFinishedProductBody1(finishedProduct) {
    _classCallCheck(this, JobIdFinishedProductBody1);
    this.finishedProduct = finishedProduct;
  }

  /**
   * Constructs a <code>JobIdFinishedProductBody1</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/JobIdFinishedProductBody1} obj Optional instance to populate.
   * @return {module:model/JobIdFinishedProductBody1} The populated <code>JobIdFinishedProductBody1</code> instance.
   */
  _createClass(JobIdFinishedProductBody1, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new JobIdFinishedProductBody1();
        if (data.hasOwnProperty('finished_product')) obj.finishedProduct = _FinishedProductUpdate.FinishedProductUpdate.constructFromObject(data['finished_product']);
      }
      return obj;
    }
  }]);
  return JobIdFinishedProductBody1;
}();
/**
 * @member {module:model/FinishedProductUpdate} finishedProduct
 */
exports.JobIdFinishedProductBody1 = JobIdFinishedProductBody1;
JobIdFinishedProductBody1.prototype.finishedProduct = undefined;