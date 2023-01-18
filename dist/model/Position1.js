"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Position1 = void 0;
var _ApiClient = require("../ApiClient");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The Position1 model module.
 * @module model/Position1
 * @version 1.0.0
 */
var Position1 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Position1</code>.
   * The position of this item within its parent
   * @alias module:model/Position1
   * @class
   */
  function Position1() {
    _classCallCheck(this, Position1);
  }

  /**
   * Constructs a <code>Position1</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Position1} obj Optional instance to populate.
   * @return {module:model/Position1} The populated <code>Position1</code> instance.
   */
  _createClass(Position1, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Position1();
        if (data.hasOwnProperty('x')) obj.x = _ApiClient.ApiClient.convertToType(data['x'], 'Number');
        if (data.hasOwnProperty('y')) obj.y = _ApiClient.ApiClient.convertToType(data['y'], 'Number');
      }
      return obj;
    }
  }]);
  return Position1;
}();
/**
 * @member {Number} x
 */
exports.Position1 = Position1;
Position1.prototype.x = undefined;

/**
 * @member {Number} y
 */
Position1.prototype.y = undefined;