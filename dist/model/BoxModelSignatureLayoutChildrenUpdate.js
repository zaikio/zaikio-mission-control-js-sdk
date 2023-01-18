"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BoxModelSignatureLayoutChildrenUpdate = void 0;
var _ApiClient = require("../ApiClient");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The BoxModelSignatureLayoutChildrenUpdate model module.
 * @module model/BoxModelSignatureLayoutChildrenUpdate
 * @version 1.0.0
 */
var BoxModelSignatureLayoutChildrenUpdate = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>BoxModelSignatureLayoutChildrenUpdate</code>.
   * @alias module:model/BoxModelSignatureLayoutChildrenUpdate
   * @class
   */
  function BoxModelSignatureLayoutChildrenUpdate() {
    _classCallCheck(this, BoxModelSignatureLayoutChildrenUpdate);
  }

  /**
   * Constructs a <code>BoxModelSignatureLayoutChildrenUpdate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BoxModelSignatureLayoutChildrenUpdate} obj Optional instance to populate.
   * @return {module:model/BoxModelSignatureLayoutChildrenUpdate} The populated <code>BoxModelSignatureLayoutChildrenUpdate</code> instance.
   */
  _createClass(BoxModelSignatureLayoutChildrenUpdate, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new BoxModelSignatureLayoutChildrenUpdate();
      }
      return obj;
    }
  }]);
  return BoxModelSignatureLayoutChildrenUpdate;
}();
exports.BoxModelSignatureLayoutChildrenUpdate = BoxModelSignatureLayoutChildrenUpdate;