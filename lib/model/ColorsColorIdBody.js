"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ColorsColorIdBody = void 0;
var _ApiClient = require("../ApiClient");
var _ColorUpdate = require("./ColorUpdate");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The ColorsColorIdBody model module.
 * @module model/ColorsColorIdBody
 * @version 1.0.0
 */
var ColorsColorIdBody = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ColorsColorIdBody</code>.
   * @alias module:model/ColorsColorIdBody
   * @class
   * @param color {module:model/ColorUpdate} 
   */
  function ColorsColorIdBody(color) {
    _classCallCheck(this, ColorsColorIdBody);
    this.color = color;
  }

  /**
   * Constructs a <code>ColorsColorIdBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ColorsColorIdBody} obj Optional instance to populate.
   * @return {module:model/ColorsColorIdBody} The populated <code>ColorsColorIdBody</code> instance.
   */
  _createClass(ColorsColorIdBody, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ColorsColorIdBody();
        if (data.hasOwnProperty('color')) obj.color = _ColorUpdate.ColorUpdate.constructFromObject(data['color']);
      }
      return obj;
    }
  }]);
  return ColorsColorIdBody;
}();
/**
 * @member {module:model/ColorUpdate} color
 */
exports.ColorsColorIdBody = ColorsColorIdBody;
ColorsColorIdBody.prototype.color = undefined;