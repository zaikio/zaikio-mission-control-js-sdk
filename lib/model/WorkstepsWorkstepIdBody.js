"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WorkstepsWorkstepIdBody = void 0;
var _ApiClient = require("../ApiClient");
var _WorkstepUpdate = require("./WorkstepUpdate");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The WorkstepsWorkstepIdBody model module.
 * @module model/WorkstepsWorkstepIdBody
 * @version 1.0.0
 */
var WorkstepsWorkstepIdBody = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>WorkstepsWorkstepIdBody</code>.
   * @alias module:model/WorkstepsWorkstepIdBody
   * @class
   * @param workstep {module:model/WorkstepUpdate} 
   */
  function WorkstepsWorkstepIdBody(workstep) {
    _classCallCheck(this, WorkstepsWorkstepIdBody);
    this.workstep = workstep;
  }

  /**
   * Constructs a <code>WorkstepsWorkstepIdBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/WorkstepsWorkstepIdBody} obj Optional instance to populate.
   * @return {module:model/WorkstepsWorkstepIdBody} The populated <code>WorkstepsWorkstepIdBody</code> instance.
   */
  _createClass(WorkstepsWorkstepIdBody, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new WorkstepsWorkstepIdBody();
        if (data.hasOwnProperty('workstep')) obj.workstep = _WorkstepUpdate.WorkstepUpdate.constructFromObject(data['workstep']);
      }
      return obj;
    }
  }]);
  return WorkstepsWorkstepIdBody;
}();
/**
 * @member {module:model/WorkstepUpdate} workstep
 */
exports.WorkstepsWorkstepIdBody = WorkstepsWorkstepIdBody;
WorkstepsWorkstepIdBody.prototype.workstep = undefined;