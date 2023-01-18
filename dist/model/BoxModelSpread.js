"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BoxModelSpread = void 0;
var _ApiClient = require("../ApiClient");
var _Back = require("./Back2");
var _Bleeds = require("./Bleeds");
var _BoxModelSpreadChildren = require("./BoxModelSpreadChildren");
var _Dimensions = require("./Dimensions");
var _Front = require("./Front2");
var _Position = require("./Position");
var _PrintFreeMargins = require("./PrintFreeMargins");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The BoxModelSpread model module.
 * @module model/BoxModelSpread
 * @version 1.0.0
 */
var BoxModelSpread = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>BoxModelSpread</code>.
   * @alias module:model/BoxModelSpread
   * @class
   * @param id {String} 
   * @param kind {module:model/BoxModelSpread.KindEnum} 
   * @param dimensions {module:model/Dimensions} 
   * @param position {module:model/Position} 
   * @param front {module:model/Front2} 
   * @param back {module:model/Back2} 
   * @param sides {module:model/BoxModelSpread.SidesEnum} 
   * @param bleeds {module:model/Bleeds} 
   * @param printFreeMargins {module:model/PrintFreeMargins} 
   * @param children {Array.<module:model/BoxModelSpreadChildren>} 
   */
  function BoxModelSpread(id, kind, dimensions, position, front, back, sides, bleeds, printFreeMargins, children) {
    _classCallCheck(this, BoxModelSpread);
    this.id = id;
    this.kind = kind;
    this.dimensions = dimensions;
    this.position = position;
    this.front = front;
    this.back = back;
    this.sides = sides;
    this.bleeds = bleeds;
    this.printFreeMargins = printFreeMargins;
    this.children = children;
  }

  /**
   * Constructs a <code>BoxModelSpread</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BoxModelSpread} obj Optional instance to populate.
   * @return {module:model/BoxModelSpread} The populated <code>BoxModelSpread</code> instance.
   */
  _createClass(BoxModelSpread, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new BoxModelSpread();
        if (data.hasOwnProperty('id')) obj.id = _ApiClient.ApiClient.convertToType(data['id'], 'String');
        if (data.hasOwnProperty('kind')) obj.kind = _ApiClient.ApiClient.convertToType(data['kind'], 'String');
        if (data.hasOwnProperty('dimensions')) obj.dimensions = _Dimensions.Dimensions.constructFromObject(data['dimensions']);
        if (data.hasOwnProperty('position')) obj.position = _Position.Position.constructFromObject(data['position']);
        if (data.hasOwnProperty('front')) obj.front = _Front.Front2.constructFromObject(data['front']);
        if (data.hasOwnProperty('back')) obj.back = _Back.Back2.constructFromObject(data['back']);
        if (data.hasOwnProperty('sides')) obj.sides = _ApiClient.ApiClient.convertToType(data['sides'], 'String');
        if (data.hasOwnProperty('bleeds')) obj.bleeds = _Bleeds.Bleeds.constructFromObject(data['bleeds']);
        if (data.hasOwnProperty('print_free_margins')) obj.printFreeMargins = _PrintFreeMargins.PrintFreeMargins.constructFromObject(data['print_free_margins']);
        if (data.hasOwnProperty('children')) obj.children = _ApiClient.ApiClient.convertToType(data['children'], [_BoxModelSpreadChildren.BoxModelSpreadChildren]);
      }
      return obj;
    }
  }]);
  return BoxModelSpread;
}();
/**
 * @member {String} id
 */
exports.BoxModelSpread = BoxModelSpread;
BoxModelSpread.prototype.id = undefined;

/**
 * Allowed values for the <code>kind</code> property.
 * @enum {String}
 * @readonly
 */
BoxModelSpread.KindEnum = {
  /**
   * value: "spread"
   * @const
   */
  spread: "spread"
};
/**
 * @member {module:model/BoxModelSpread.KindEnum} kind
 */
BoxModelSpread.prototype.kind = undefined;

/**
 * @member {module:model/Dimensions} dimensions
 */
BoxModelSpread.prototype.dimensions = undefined;

/**
 * @member {module:model/Position} position
 */
BoxModelSpread.prototype.position = undefined;

/**
 * @member {module:model/Front2} front
 */
BoxModelSpread.prototype.front = undefined;

/**
 * @member {module:model/Back2} back
 */
BoxModelSpread.prototype.back = undefined;

/**
 * Allowed values for the <code>sides</code> property.
 * @enum {String}
 * @readonly
 */
BoxModelSpread.SidesEnum = {
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
 * @member {module:model/BoxModelSpread.SidesEnum} sides
 */
BoxModelSpread.prototype.sides = undefined;

/**
 * @member {module:model/Bleeds} bleeds
 */
BoxModelSpread.prototype.bleeds = undefined;

/**
 * @member {module:model/PrintFreeMargins} printFreeMargins
 */
BoxModelSpread.prototype.printFreeMargins = undefined;

/**
 * @member {Array.<module:model/BoxModelSpreadChildren>} children
 */
BoxModelSpread.prototype.children = undefined;

// Implement BoxModelIntermediateLayoutChildren interface:
// Implement BoxModelPartLayoutChildren interface:
// Implement BoxModelRollSegmentChildren interface:
// Implement BoxModelSheetChildren interface: