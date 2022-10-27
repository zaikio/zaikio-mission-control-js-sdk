"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PartIdColorsBody = void 0;
var _ApiClient = require("../ApiClient");
var _ColorCreate = require("./ColorCreate");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The PartIdColorsBody model module.
 * @module model/PartIdColorsBody
 * @version 1.0.0
 */
var PartIdColorsBody = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PartIdColorsBody</code>.
   * @alias module:model/PartIdColorsBody
   * @class
   * @param color {module:model/ColorCreate} 
   */
  function PartIdColorsBody(color) {
    _classCallCheck(this, PartIdColorsBody);
    this.color = color;
  }

  /**
   * Constructs a <code>PartIdColorsBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PartIdColorsBody} obj Optional instance to populate.
   * @return {module:model/PartIdColorsBody} The populated <code>PartIdColorsBody</code> instance.
   */
  _createClass(PartIdColorsBody, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PartIdColorsBody();
        if (data.hasOwnProperty('color')) obj.color = _ColorCreate.ColorCreate.constructFromObject(data['color']);
      }
      return obj;
    }
  }]);
  return PartIdColorsBody;
}();
/**
 * @member {module:model/ColorCreate} color
 */
exports.PartIdColorsBody = PartIdColorsBody;
PartIdColorsBody.prototype.color = undefined;