"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BoxModelFinishing = void 0;
var _ApiClient = require("../ApiClient");
var _Back = require("./Back");
var _Dimensions = require("./Dimensions");
var _Front = require("./Front");
var _Position = require("./Position");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The BoxModelFinishing model module.
 * @module model/BoxModelFinishing
 * @version 1.0.0
 */
var BoxModelFinishing = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>BoxModelFinishing</code>.
   * @alias module:model/BoxModelFinishing
   * @class
   * @param id {String} 
   * @param kind {module:model/BoxModelFinishing.KindEnum} 
   * @param dimensions {module:model/Dimensions} 
   * @param position {module:model/Position} 
   * @param front {module:model/Front} 
   * @param back {module:model/Back} 
   */
  function BoxModelFinishing(id, kind, dimensions, position, front, back) {
    _classCallCheck(this, BoxModelFinishing);
    this.id = id;
    this.kind = kind;
    this.dimensions = dimensions;
    this.position = position;
    this.front = front;
    this.back = back;
  }

  /**
   * Constructs a <code>BoxModelFinishing</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BoxModelFinishing} obj Optional instance to populate.
   * @return {module:model/BoxModelFinishing} The populated <code>BoxModelFinishing</code> instance.
   */
  _createClass(BoxModelFinishing, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new BoxModelFinishing();
        if (data.hasOwnProperty('id')) obj.id = _ApiClient.ApiClient.convertToType(data['id'], 'String');
        if (data.hasOwnProperty('kind')) obj.kind = _ApiClient.ApiClient.convertToType(data['kind'], 'String');
        if (data.hasOwnProperty('dimensions')) obj.dimensions = _Dimensions.Dimensions.constructFromObject(data['dimensions']);
        if (data.hasOwnProperty('position')) obj.position = _Position.Position.constructFromObject(data['position']);
        if (data.hasOwnProperty('front')) obj.front = _Front.Front.constructFromObject(data['front']);
        if (data.hasOwnProperty('back')) obj.back = _Back.Back.constructFromObject(data['back']);
      }
      return obj;
    }
  }]);
  return BoxModelFinishing;
}();
/**
 * @member {String} id
 */
exports.BoxModelFinishing = BoxModelFinishing;
BoxModelFinishing.prototype.id = undefined;

/**
 * Allowed values for the <code>kind</code> property.
 * @enum {String}
 * @readonly
 */
BoxModelFinishing.KindEnum = {
  /**
   * value: "finishing"
   * @const
   */
  finishing: "finishing"
};
/**
 * @member {module:model/BoxModelFinishing.KindEnum} kind
 */
BoxModelFinishing.prototype.kind = undefined;

/**
 * @member {module:model/Dimensions} dimensions
 */
BoxModelFinishing.prototype.dimensions = undefined;

/**
 * @member {module:model/Position} position
 */
BoxModelFinishing.prototype.position = undefined;

/**
 * @member {module:model/Front} front
 */
BoxModelFinishing.prototype.front = undefined;

/**
 * @member {module:model/Back} back
 */
BoxModelFinishing.prototype.back = undefined;

// Implement BoxModelIntermediateLayoutChildren interface:
// Implement BoxModelPageChildren interface:
// Implement BoxModelPartLayoutChildren interface:
// Implement BoxModelRollSegmentChildren interface:
// Implement BoxModelSheetChildren interface:
// Implement BoxModelSpreadChildren interface: