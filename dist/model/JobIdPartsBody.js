"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.JobIdPartsBody = void 0;
var _ApiClient = require("../ApiClient");
var _PartCreate = require("./PartCreate");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The JobIdPartsBody model module.
 * @module model/JobIdPartsBody
 * @version 1.0.0
 */
var JobIdPartsBody = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>JobIdPartsBody</code>.
   * @alias module:model/JobIdPartsBody
   * @class
   * @param part {module:model/PartCreate} 
   */
  function JobIdPartsBody(part) {
    _classCallCheck(this, JobIdPartsBody);
    this.part = part;
  }

  /**
   * Constructs a <code>JobIdPartsBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/JobIdPartsBody} obj Optional instance to populate.
   * @return {module:model/JobIdPartsBody} The populated <code>JobIdPartsBody</code> instance.
   */
  _createClass(JobIdPartsBody, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new JobIdPartsBody();
        if (data.hasOwnProperty('part')) obj.part = _PartCreate.PartCreate.constructFromObject(data['part']);
      }
      return obj;
    }
  }]);
  return JobIdPartsBody;
}();
/**
 * @member {module:model/PartCreate} part
 */
exports.JobIdPartsBody = JobIdPartsBody;
JobIdPartsBody.prototype.part = undefined;