"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BoxModelRollSegment = void 0;
var _ApiClient = require("../ApiClient");
var _Back = require("./Back2");
var _BoxModelRollSegmentChildren = require("./BoxModelRollSegmentChildren");
var _Dimensions = require("./Dimensions");
var _Front = require("./Front2");
var _Position = require("./Position");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The BoxModelRollSegment model module.
 * @module model/BoxModelRollSegment
 * @version 1.0.0
 */
var BoxModelRollSegment = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>BoxModelRollSegment</code>.
   * @alias module:model/BoxModelRollSegment
   * @class
   * @param id {String} 
   * @param kind {module:model/BoxModelRollSegment.KindEnum} 
   * @param sides {module:model/BoxModelRollSegment.SidesEnum} 
   * @param dimensions {module:model/Dimensions} 
   * @param position {module:model/Position} 
   * @param front {module:model/Front2} 
   * @param back {module:model/Back2} 
   * @param children {Array.<module:model/BoxModelRollSegmentChildren>} 
   */
  function BoxModelRollSegment(id, kind, sides, dimensions, position, front, back, children) {
    _classCallCheck(this, BoxModelRollSegment);
    this.id = id;
    this.kind = kind;
    this.sides = sides;
    this.dimensions = dimensions;
    this.position = position;
    this.front = front;
    this.back = back;
    this.children = children;
  }

  /**
   * Constructs a <code>BoxModelRollSegment</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BoxModelRollSegment} obj Optional instance to populate.
   * @return {module:model/BoxModelRollSegment} The populated <code>BoxModelRollSegment</code> instance.
   */
  _createClass(BoxModelRollSegment, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new BoxModelRollSegment();
        if (data.hasOwnProperty('id')) obj.id = _ApiClient.ApiClient.convertToType(data['id'], 'String');
        if (data.hasOwnProperty('kind')) obj.kind = _ApiClient.ApiClient.convertToType(data['kind'], 'String');
        if (data.hasOwnProperty('sides')) obj.sides = _ApiClient.ApiClient.convertToType(data['sides'], 'String');
        if (data.hasOwnProperty('dimensions')) obj.dimensions = _Dimensions.Dimensions.constructFromObject(data['dimensions']);
        if (data.hasOwnProperty('position')) obj.position = _Position.Position.constructFromObject(data['position']);
        if (data.hasOwnProperty('front')) obj.front = _Front.Front2.constructFromObject(data['front']);
        if (data.hasOwnProperty('back')) obj.back = _Back.Back2.constructFromObject(data['back']);
        if (data.hasOwnProperty('children')) obj.children = _ApiClient.ApiClient.convertToType(data['children'], [_BoxModelRollSegmentChildren.BoxModelRollSegmentChildren]);
      }
      return obj;
    }
  }]);
  return BoxModelRollSegment;
}();
/**
 * @member {String} id
 */
exports.BoxModelRollSegment = BoxModelRollSegment;
BoxModelRollSegment.prototype.id = undefined;

/**
 * Allowed values for the <code>kind</code> property.
 * @enum {String}
 * @readonly
 */
BoxModelRollSegment.KindEnum = {
  /**
   * value: "roll_segment"
   * @const
   */
  rollSegment: "roll_segment"
};
/**
 * @member {module:model/BoxModelRollSegment.KindEnum} kind
 */
BoxModelRollSegment.prototype.kind = undefined;

/**
 * Allowed values for the <code>sides</code> property.
 * @enum {String}
 * @readonly
 */
BoxModelRollSegment.SidesEnum = {
  /**
   * value: "one"
   * @const
   */
  one: "one",
  /**
   * value: "headtohead"
   * @const
   */
  headtohead: "headtohead",
  /**
   * value: "headtofoot"
   * @const
   */
  headtofoot: "headtofoot"
};
/**
 * @member {module:model/BoxModelRollSegment.SidesEnum} sides
 */
BoxModelRollSegment.prototype.sides = undefined;

/**
 * @member {module:model/Dimensions} dimensions
 */
BoxModelRollSegment.prototype.dimensions = undefined;

/**
 * @member {module:model/Position} position
 */
BoxModelRollSegment.prototype.position = undefined;

/**
 * @member {module:model/Front2} front
 */
BoxModelRollSegment.prototype.front = undefined;

/**
 * @member {module:model/Back2} back
 */
BoxModelRollSegment.prototype.back = undefined;

/**
 * @member {Array.<module:model/BoxModelRollSegmentChildren>} children
 */
BoxModelRollSegment.prototype.children = undefined;

// Implement BoxModelSignatureLayoutChildren interface: