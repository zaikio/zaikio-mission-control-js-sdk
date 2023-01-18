"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BoxModelPage = void 0;
var _ApiClient = require("../ApiClient");
var _Bleeds = require("./Bleeds2");
var _BoxModelPageChildren = require("./BoxModelPageChildren");
var _Dimensions = require("./Dimensions");
var _Front = require("./Front2");
var _Position = require("./Position");
var _PrintFreeMargins = require("./PrintFreeMargins2");
var _Rear = require("./Rear");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The BoxModelPage model module.
 * @module model/BoxModelPage
 * @version 1.0.0
 */
var BoxModelPage = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>BoxModelPage</code>.
   * @alias module:model/BoxModelPage
   * @class
   * @param id {String} 
   * @param kind {module:model/BoxModelPage.KindEnum} 
   * @param sides {module:model/BoxModelPage.SidesEnum} 
   * @param dimensions {module:model/Dimensions} 
   * @param position {module:model/Position} 
   * @param front {module:model/Front2} 
   * @param rear {module:model/Rear} 
   * @param bleeds {module:model/Bleeds2} 
   * @param printFreeMargins {module:model/PrintFreeMargins2} 
   * @param children {Array.<module:model/BoxModelPageChildren>} 
   */
  function BoxModelPage(id, kind, sides, dimensions, position, front, rear, bleeds, printFreeMargins, children) {
    _classCallCheck(this, BoxModelPage);
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
   * Constructs a <code>BoxModelPage</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BoxModelPage} obj Optional instance to populate.
   * @return {module:model/BoxModelPage} The populated <code>BoxModelPage</code> instance.
   */
  _createClass(BoxModelPage, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new BoxModelPage();
        if (data.hasOwnProperty('id')) obj.id = _ApiClient.ApiClient.convertToType(data['id'], 'String');
        if (data.hasOwnProperty('kind')) obj.kind = _ApiClient.ApiClient.convertToType(data['kind'], 'String');
        if (data.hasOwnProperty('sides')) obj.sides = _ApiClient.ApiClient.convertToType(data['sides'], 'String');
        if (data.hasOwnProperty('dimensions')) obj.dimensions = _Dimensions.Dimensions.constructFromObject(data['dimensions']);
        if (data.hasOwnProperty('position')) obj.position = _Position.Position.constructFromObject(data['position']);
        if (data.hasOwnProperty('front')) obj.front = _Front.Front2.constructFromObject(data['front']);
        if (data.hasOwnProperty('rear')) obj.rear = _Rear.Rear.constructFromObject(data['rear']);
        if (data.hasOwnProperty('bleeds')) obj.bleeds = _Bleeds.Bleeds2.constructFromObject(data['bleeds']);
        if (data.hasOwnProperty('print_free_margins')) obj.printFreeMargins = _PrintFreeMargins.PrintFreeMargins2.constructFromObject(data['print_free_margins']);
        if (data.hasOwnProperty('children')) obj.children = _ApiClient.ApiClient.convertToType(data['children'], [_BoxModelPageChildren.BoxModelPageChildren]);
      }
      return obj;
    }
  }]);
  return BoxModelPage;
}();
/**
 * @member {String} id
 */
exports.BoxModelPage = BoxModelPage;
BoxModelPage.prototype.id = undefined;

/**
 * Allowed values for the <code>kind</code> property.
 * @enum {String}
 * @readonly
 */
BoxModelPage.KindEnum = {
  /**
   * value: "page"
   * @const
   */
  page: "page"
};
/**
 * @member {module:model/BoxModelPage.KindEnum} kind
 */
BoxModelPage.prototype.kind = undefined;

/**
 * Allowed values for the <code>sides</code> property.
 * @enum {String}
 * @readonly
 */
BoxModelPage.SidesEnum = {
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
 * @member {module:model/BoxModelPage.SidesEnum} sides
 */
BoxModelPage.prototype.sides = undefined;

/**
 * @member {module:model/Dimensions} dimensions
 */
BoxModelPage.prototype.dimensions = undefined;

/**
 * @member {module:model/Position} position
 */
BoxModelPage.prototype.position = undefined;

/**
 * @member {module:model/Front2} front
 */
BoxModelPage.prototype.front = undefined;

/**
 * @member {module:model/Rear} rear
 */
BoxModelPage.prototype.rear = undefined;

/**
 * @member {module:model/Bleeds2} bleeds
 */
BoxModelPage.prototype.bleeds = undefined;

/**
 * @member {module:model/PrintFreeMargins2} printFreeMargins
 */
BoxModelPage.prototype.printFreeMargins = undefined;

/**
 * @member {Array.<module:model/BoxModelPageChildren>} children
 */
BoxModelPage.prototype.children = undefined;

// Implement BoxModelIntermediateLayoutChildren interface:
// Implement BoxModelPartLayoutChildren interface:
// Implement BoxModelRollSegmentChildren interface:
// Implement BoxModelSheetChildren interface:
// Implement BoxModelSpreadChildren interface: