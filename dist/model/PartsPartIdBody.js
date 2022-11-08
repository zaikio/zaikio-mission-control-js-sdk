"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PartsPartIdBody = void 0;
var _ApiClient = require("../ApiClient");
var _PartUpdate = require("./PartUpdate");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The PartsPartIdBody model module.
 * @module model/PartsPartIdBody
 * @version 1.0.0
 */
var PartsPartIdBody = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PartsPartIdBody</code>.
   * @alias module:model/PartsPartIdBody
   * @class
   * @param part {module:model/PartUpdate} 
   */
  function PartsPartIdBody(part) {
    _classCallCheck(this, PartsPartIdBody);
    this.part = part;
  }

  /**
   * Constructs a <code>PartsPartIdBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PartsPartIdBody} obj Optional instance to populate.
   * @return {module:model/PartsPartIdBody} The populated <code>PartsPartIdBody</code> instance.
   */
  _createClass(PartsPartIdBody, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PartsPartIdBody();
        if (data.hasOwnProperty('part')) obj.part = _PartUpdate.PartUpdate.constructFromObject(data['part']);
      }
      return obj;
    }
  }]);
  return PartsPartIdBody;
}();
/**
 * @member {module:model/PartUpdate} part
 */
exports.PartsPartIdBody = PartsPartIdBody;
PartsPartIdBody.prototype.part = undefined;