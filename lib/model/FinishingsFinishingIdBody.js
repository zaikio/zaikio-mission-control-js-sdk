"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FinishingsFinishingIdBody = void 0;
var _ApiClient = require("../ApiClient");
var _FinishingUpdate = require("./FinishingUpdate");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The FinishingsFinishingIdBody model module.
 * @module model/FinishingsFinishingIdBody
 * @version 1.0.0
 */
var FinishingsFinishingIdBody = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>FinishingsFinishingIdBody</code>.
   * @alias module:model/FinishingsFinishingIdBody
   * @class
   * @param finishing {module:model/FinishingUpdate} 
   */
  function FinishingsFinishingIdBody(finishing) {
    _classCallCheck(this, FinishingsFinishingIdBody);
    this.finishing = finishing;
  }

  /**
   * Constructs a <code>FinishingsFinishingIdBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/FinishingsFinishingIdBody} obj Optional instance to populate.
   * @return {module:model/FinishingsFinishingIdBody} The populated <code>FinishingsFinishingIdBody</code> instance.
   */
  _createClass(FinishingsFinishingIdBody, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new FinishingsFinishingIdBody();
        if (data.hasOwnProperty('finishing')) obj.finishing = _FinishingUpdate.FinishingUpdate.constructFromObject(data['finishing']);
      }
      return obj;
    }
  }]);
  return FinishingsFinishingIdBody;
}();
/**
 * @member {module:model/FinishingUpdate} finishing
 */
exports.FinishingsFinishingIdBody = FinishingsFinishingIdBody;
FinishingsFinishingIdBody.prototype.finishing = undefined;