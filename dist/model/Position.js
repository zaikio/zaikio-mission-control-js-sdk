"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Position = void 0;
var _ApiClient = require("../ApiClient");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The Position model module.
 * @module model/Position
 * @version 1.0.0
 */
var Position = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Position</code>.
   * The position of this item within its parent
   * @alias module:model/Position
   * @class
   * @param x {Number} 
   * @param y {Number} 
   */
  function Position(x, y) {
    _classCallCheck(this, Position);
    this.x = x;
    this.y = y;
  }

  /**
   * Constructs a <code>Position</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Position} obj Optional instance to populate.
   * @return {module:model/Position} The populated <code>Position</code> instance.
   */
  _createClass(Position, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Position();
        if (data.hasOwnProperty('x')) obj.x = _ApiClient.ApiClient.convertToType(data['x'], 'Number');
        if (data.hasOwnProperty('y')) obj.y = _ApiClient.ApiClient.convertToType(data['y'], 'Number');
      }
      return obj;
    }
  }]);
  return Position;
}();
/**
 * @member {Number} x
 */
exports.Position = Position;
Position.prototype.x = undefined;

/**
 * @member {Number} y
 */
Position.prototype.y = undefined;