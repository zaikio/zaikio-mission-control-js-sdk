"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PartIdFinishingsBody = void 0;
var _ApiClient = require("../ApiClient");
var _FinishingCreate = require("./FinishingCreate");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The PartIdFinishingsBody model module.
 * @module model/PartIdFinishingsBody
 * @version 1.0.0
 */
var PartIdFinishingsBody = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PartIdFinishingsBody</code>.
   * @alias module:model/PartIdFinishingsBody
   * @class
   * @param finishing {module:model/FinishingCreate} 
   */
  function PartIdFinishingsBody(finishing) {
    _classCallCheck(this, PartIdFinishingsBody);
    this.finishing = finishing;
  }

  /**
   * Constructs a <code>PartIdFinishingsBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PartIdFinishingsBody} obj Optional instance to populate.
   * @return {module:model/PartIdFinishingsBody} The populated <code>PartIdFinishingsBody</code> instance.
   */
  _createClass(PartIdFinishingsBody, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PartIdFinishingsBody();
        if (data.hasOwnProperty('finishing')) obj.finishing = _FinishingCreate.FinishingCreate.constructFromObject(data['finishing']);
      }
      return obj;
    }
  }]);
  return PartIdFinishingsBody;
}();
/**
 * @member {module:model/FinishingCreate} finishing
 */
exports.PartIdFinishingsBody = PartIdFinishingsBody;
PartIdFinishingsBody.prototype.finishing = undefined;