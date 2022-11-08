"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WorkstepsBody = void 0;
var _ApiClient = require("../ApiClient");
var _WorkstepCreate = require("./WorkstepCreate");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The WorkstepsBody model module.
 * @module model/WorkstepsBody
 * @version 1.0.0
 */
var WorkstepsBody = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>WorkstepsBody</code>.
   * @alias module:model/WorkstepsBody
   * @class
   * @param workstep {module:model/WorkstepCreate} 
   */
  function WorkstepsBody(workstep) {
    _classCallCheck(this, WorkstepsBody);
    this.workstep = workstep;
  }

  /**
   * Constructs a <code>WorkstepsBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/WorkstepsBody} obj Optional instance to populate.
   * @return {module:model/WorkstepsBody} The populated <code>WorkstepsBody</code> instance.
   */
  _createClass(WorkstepsBody, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new WorkstepsBody();
        if (data.hasOwnProperty('workstep')) obj.workstep = _WorkstepCreate.WorkstepCreate.constructFromObject(data['workstep']);
      }
      return obj;
    }
  }]);
  return WorkstepsBody;
}();
/**
 * @member {module:model/WorkstepCreate} workstep
 */
exports.WorkstepsBody = WorkstepsBody;
WorkstepsBody.prototype.workstep = undefined;