"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BoxModelSheet = void 0;
var _ApiClient = require("../ApiClient");
var _Bleeds = require("./Bleeds");
var _BoxModelSheetChildren = require("./BoxModelSheetChildren");
var _Dimensions = require("./Dimensions");
var _Front = require("./Front2");
var _Position = require("./Position");
var _PrintFreeMargins = require("./PrintFreeMargins");
var _Rear = require("./Rear");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The BoxModelSheet model module.
 * @module model/BoxModelSheet
 * @version 1.0.0
 */
var BoxModelSheet = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>BoxModelSheet</code>.
   * @alias module:model/BoxModelSheet
   * @class
   * @param id {String} 
   * @param kind {module:model/BoxModelSheet.KindEnum} 
   * @param sides {module:model/BoxModelSheet.SidesEnum} 
   * @param dimensions {module:model/Dimensions} 
   * @param position {module:model/Position} 
   * @param front {module:model/Front2} 
   * @param rear {module:model/Rear} 
   * @param bleeds {module:model/Bleeds} 
   * @param printFreeMargins {module:model/PrintFreeMargins} 
   * @param children {Array.<module:model/BoxModelSheetChildren>} 
   */
  function BoxModelSheet(id, kind, sides, dimensions, position, front, rear, bleeds, printFreeMargins, children) {
    _classCallCheck(this, BoxModelSheet);
    this.id = id;
    this.kind = kind;
    this.sides = sides;
    this.dimensions = dimensions;
    this.position = position;
    this.front = front;
    this.rear = rear;
    this.bleeds = bleeds;
    this.printFreeMargins = printFreeMargins;
    this.children = children;
  }

  /**
   * Constructs a <code>BoxModelSheet</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BoxModelSheet} obj Optional instance to populate.
   * @return {module:model/BoxModelSheet} The populated <code>BoxModelSheet</code> instance.
   */
  _createClass(BoxModelSheet, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new BoxModelSheet();
        if (data.hasOwnProperty('id')) obj.id = _ApiClient.ApiClient.convertToType(data['id'], 'String');
        if (data.hasOwnProperty('kind')) obj.kind = _ApiClient.ApiClient.convertToType(data['kind'], 'String');
        if (data.hasOwnProperty('sides')) obj.sides = _ApiClient.ApiClient.convertToType(data['sides'], 'String');
        if (data.hasOwnProperty('dimensions')) obj.dimensions = _Dimensions.Dimensions.constructFromObject(data['dimensions']);
        if (data.hasOwnProperty('position')) obj.position = _Position.Position.constructFromObject(data['position']);
        if (data.hasOwnProperty('front')) obj.front = _Front.Front2.constructFromObject(data['front']);
        if (data.hasOwnProperty('rear')) obj.rear = _Rear.Rear.constructFromObject(data['rear']);
        if (data.hasOwnProperty('bleeds')) obj.bleeds = _Bleeds.Bleeds.constructFromObject(data['bleeds']);
        if (data.hasOwnProperty('print_free_margins')) obj.printFreeMargins = _PrintFreeMargins.PrintFreeMargins.constructFromObject(data['print_free_margins']);
        if (data.hasOwnProperty('children')) obj.children = _ApiClient.ApiClient.convertToType(data['children'], [_BoxModelSheetChildren.BoxModelSheetChildren]);
      }
      return obj;
    }
  }]);
  return BoxModelSheet;
}();
/**
 * @member {String} id
 */
exports.BoxModelSheet = BoxModelSheet;
BoxModelSheet.prototype.id = undefined;

/**
 * Allowed values for the <code>kind</code> property.
 * @enum {String}
 * @readonly
 */
BoxModelSheet.KindEnum = {
  /**
   * value: "sheet"
   * @const
   */
  sheet: "sheet"
};
/**
 * @member {module:model/BoxModelSheet.KindEnum} kind
 */
BoxModelSheet.prototype.kind = undefined;

/**
 * Allowed values for the <code>sides</code> property.
 * @enum {String}
 * @readonly
 */
BoxModelSheet.SidesEnum = {
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
 * @member {module:model/BoxModelSheet.SidesEnum} sides
 */
BoxModelSheet.prototype.sides = undefined;

/**
 * @member {module:model/Dimensions} dimensions
 */
BoxModelSheet.prototype.dimensions = undefined;

/**
 * @member {module:model/Position} position
 */
BoxModelSheet.prototype.position = undefined;

/**
 * @member {module:model/Front2} front
 */
BoxModelSheet.prototype.front = undefined;

/**
 * @member {module:model/Rear} rear
 */
BoxModelSheet.prototype.rear = undefined;

/**
 * @member {module:model/Bleeds} bleeds
 */
BoxModelSheet.prototype.bleeds = undefined;

/**
 * @member {module:model/PrintFreeMargins} printFreeMargins
 */
BoxModelSheet.prototype.printFreeMargins = undefined;

/**
 * @member {Array.<module:model/BoxModelSheetChildren>} children
 */
BoxModelSheet.prototype.children = undefined;

// Implement BoxModelSignatureLayoutChildren interface: