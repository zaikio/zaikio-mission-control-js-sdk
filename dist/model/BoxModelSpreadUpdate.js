"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BoxModelSpreadUpdate = void 0;
var _ApiClient = require("../ApiClient");
var _Back = require("./Back3");
var _Bleeds = require("./Bleeds1");
var _BoxModelSpreadChildrenUpdate = require("./BoxModelSpreadChildrenUpdate");
var _Dimensions = require("./Dimensions1");
var _Front = require("./Front3");
var _Position = require("./Position1");
var _PrintFreeMargins = require("./PrintFreeMargins1");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The BoxModelSpreadUpdate model module.
 * @module model/BoxModelSpreadUpdate
 * @version 1.0.0
 */
var BoxModelSpreadUpdate = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>BoxModelSpreadUpdate</code>.
   * @alias module:model/BoxModelSpreadUpdate
   * @class
   */
  function BoxModelSpreadUpdate() {
    _classCallCheck(this, BoxModelSpreadUpdate);
  }

  /**
   * Constructs a <code>BoxModelSpreadUpdate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BoxModelSpreadUpdate} obj Optional instance to populate.
   * @return {module:model/BoxModelSpreadUpdate} The populated <code>BoxModelSpreadUpdate</code> instance.
   */
  _createClass(BoxModelSpreadUpdate, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new BoxModelSpreadUpdate();
        if (data.hasOwnProperty('id')) obj.id = _ApiClient.ApiClient.convertToType(data['id'], 'String');
        if (data.hasOwnProperty('kind')) obj.kind = _ApiClient.ApiClient.convertToType(data['kind'], 'String');
        if (data.hasOwnProperty('dimensions')) obj.dimensions = _Dimensions.Dimensions1.constructFromObject(data['dimensions']);
        if (data.hasOwnProperty('position')) obj.position = _Position.Position1.constructFromObject(data['position']);
        if (data.hasOwnProperty('front')) obj.front = _Front.Front3.constructFromObject(data['front']);
        if (data.hasOwnProperty('back')) obj.back = _Back.Back3.constructFromObject(data['back']);
        if (data.hasOwnProperty('sides')) obj.sides = _ApiClient.ApiClient.convertToType(data['sides'], 'String');
        if (data.hasOwnProperty('bleeds')) obj.bleeds = _Bleeds.Bleeds1.constructFromObject(data['bleeds']);
        if (data.hasOwnProperty('print_free_margins')) obj.printFreeMargins = _PrintFreeMargins.PrintFreeMargins1.constructFromObject(data['print_free_margins']);
        if (data.hasOwnProperty('children')) obj.children = _ApiClient.ApiClient.convertToType(data['children'], [_BoxModelSpreadChildrenUpdate.BoxModelSpreadChildrenUpdate]);
      }
      return obj;
    }
  }]);
  return BoxModelSpreadUpdate;
}();
/**
 * @member {String} id
 */
exports.BoxModelSpreadUpdate = BoxModelSpreadUpdate;
BoxModelSpreadUpdate.prototype.id = undefined;

/**
 * Allowed values for the <code>kind</code> property.
 * @enum {String}
 * @readonly
 */
BoxModelSpreadUpdate.KindEnum = {
  /**
   * value: "spread"
   * @const
   */
  spread: "spread"
};
/**
 * @member {module:model/BoxModelSpreadUpdate.KindEnum} kind
 */
BoxModelSpreadUpdate.prototype.kind = undefined;

/**
 * @member {module:model/Dimensions1} dimensions
 */
BoxModelSpreadUpdate.prototype.dimensions = undefined;

/**
 * @member {module:model/Position1} position
 */
BoxModelSpreadUpdate.prototype.position = undefined;

/**
 * @member {module:model/Front3} front
 */
BoxModelSpreadUpdate.prototype.front = undefined;

/**
 * @member {module:model/Back3} back
 */
BoxModelSpreadUpdate.prototype.back = undefined;

/**
 * Allowed values for the <code>sides</code> property.
 * @enum {String}
 * @readonly
 */
BoxModelSpreadUpdate.SidesEnum = {
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
 * @member {module:model/BoxModelSpreadUpdate.SidesEnum} sides
 */
BoxModelSpreadUpdate.prototype.sides = undefined;

/**
 * @member {module:model/Bleeds1} bleeds
 */
BoxModelSpreadUpdate.prototype.bleeds = undefined;

/**
 * @member {module:model/PrintFreeMargins1} printFreeMargins
 */
BoxModelSpreadUpdate.prototype.printFreeMargins = undefined;

/**
 * @member {Array.<module:model/BoxModelSpreadChildrenUpdate>} children
 */
BoxModelSpreadUpdate.prototype.children = undefined;

// Implement BoxModelIntermediateLayoutChildrenUpdate interface:
// Implement BoxModelPartLayoutChildrenUpdate interface:
// Implement BoxModelRollSegmentChildrenUpdate interface:
// Implement BoxModelSheetChildrenUpdate interface: