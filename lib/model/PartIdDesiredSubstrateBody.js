"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PartIdDesiredSubstrateBody = void 0;
var _ApiClient = require("../ApiClient");
var _DesiredSubstrateCreate = require("./DesiredSubstrateCreate");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The PartIdDesiredSubstrateBody model module.
 * @module model/PartIdDesiredSubstrateBody
 * @version 1.0.0
 */
var PartIdDesiredSubstrateBody = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PartIdDesiredSubstrateBody</code>.
   * @alias module:model/PartIdDesiredSubstrateBody
   * @class
   * @param desiredSubstrate {module:model/DesiredSubstrateCreate} 
   */
  function PartIdDesiredSubstrateBody(desiredSubstrate) {
    _classCallCheck(this, PartIdDesiredSubstrateBody);
    this.desiredSubstrate = desiredSubstrate;
  }

  /**
   * Constructs a <code>PartIdDesiredSubstrateBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PartIdDesiredSubstrateBody} obj Optional instance to populate.
   * @return {module:model/PartIdDesiredSubstrateBody} The populated <code>PartIdDesiredSubstrateBody</code> instance.
   */
  _createClass(PartIdDesiredSubstrateBody, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PartIdDesiredSubstrateBody();
        if (data.hasOwnProperty('desired_substrate')) obj.desiredSubstrate = _DesiredSubstrateCreate.DesiredSubstrateCreate.constructFromObject(data['desired_substrate']);
      }
      return obj;
    }
  }]);
  return PartIdDesiredSubstrateBody;
}();
/**
 * @member {module:model/DesiredSubstrateCreate} desiredSubstrate
 */
exports.PartIdDesiredSubstrateBody = PartIdDesiredSubstrateBody;
PartIdDesiredSubstrateBody.prototype.desiredSubstrate = undefined;