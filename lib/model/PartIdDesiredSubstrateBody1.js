"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PartIdDesiredSubstrateBody1 = void 0;
var _ApiClient = require("../ApiClient");
var _DesiredSubstrateUpdate = require("./DesiredSubstrateUpdate");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The PartIdDesiredSubstrateBody1 model module.
 * @module model/PartIdDesiredSubstrateBody1
 * @version 1.0.0
 */
var PartIdDesiredSubstrateBody1 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PartIdDesiredSubstrateBody1</code>.
   * @alias module:model/PartIdDesiredSubstrateBody1
   * @class
   * @param desiredSubstrate {module:model/DesiredSubstrateUpdate} 
   */
  function PartIdDesiredSubstrateBody1(desiredSubstrate) {
    _classCallCheck(this, PartIdDesiredSubstrateBody1);
    this.desiredSubstrate = desiredSubstrate;
  }

  /**
   * Constructs a <code>PartIdDesiredSubstrateBody1</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PartIdDesiredSubstrateBody1} obj Optional instance to populate.
   * @return {module:model/PartIdDesiredSubstrateBody1} The populated <code>PartIdDesiredSubstrateBody1</code> instance.
   */
  _createClass(PartIdDesiredSubstrateBody1, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PartIdDesiredSubstrateBody1();
        if (data.hasOwnProperty('desired_substrate')) obj.desiredSubstrate = _DesiredSubstrateUpdate.DesiredSubstrateUpdate.constructFromObject(data['desired_substrate']);
      }
      return obj;
    }
  }]);
  return PartIdDesiredSubstrateBody1;
}();
/**
 * @member {module:model/DesiredSubstrateUpdate} desiredSubstrate
 */
exports.PartIdDesiredSubstrateBody1 = PartIdDesiredSubstrateBody1;
PartIdDesiredSubstrateBody1.prototype.desiredSubstrate = undefined;