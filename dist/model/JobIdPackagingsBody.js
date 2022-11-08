"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.JobIdPackagingsBody = void 0;
var _ApiClient = require("../ApiClient");
var _PackagingCreate = require("./PackagingCreate");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The JobIdPackagingsBody model module.
 * @module model/JobIdPackagingsBody
 * @version 1.0.0
 */
var JobIdPackagingsBody = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>JobIdPackagingsBody</code>.
   * @alias module:model/JobIdPackagingsBody
   * @class
   * @param packaging {module:model/PackagingCreate} 
   */
  function JobIdPackagingsBody(packaging) {
    _classCallCheck(this, JobIdPackagingsBody);
    this.packaging = packaging;
  }

  /**
   * Constructs a <code>JobIdPackagingsBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/JobIdPackagingsBody} obj Optional instance to populate.
   * @return {module:model/JobIdPackagingsBody} The populated <code>JobIdPackagingsBody</code> instance.
   */
  _createClass(JobIdPackagingsBody, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new JobIdPackagingsBody();
        if (data.hasOwnProperty('packaging')) obj.packaging = _PackagingCreate.PackagingCreate.constructFromObject(data['packaging']);
      }
      return obj;
    }
  }]);
  return JobIdPackagingsBody;
}();
/**
 * @member {module:model/PackagingCreate} packaging
 */
exports.JobIdPackagingsBody = JobIdPackagingsBody;
JobIdPackagingsBody.prototype.packaging = undefined;