"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BoxModelSpreadCreate = void 0;
var _ApiClient = require("../ApiClient");
var _Back = require("./Back3");
var _Bleeds = require("./Bleeds1");
var _BoxModelSpreadChildrenCreate = require("./BoxModelSpreadChildrenCreate");
var _Dimensions = require("./Dimensions1");
var _Front = require("./Front3");
var _Position = require("./Position1");
var _PrintFreeMargins = require("./PrintFreeMargins1");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The BoxModelSpreadCreate model module.
 * @module model/BoxModelSpreadCreate
 * @version 1.0.0
 */
var BoxModelSpreadCreate = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>BoxModelSpreadCreate</code>.
   * @alias module:model/BoxModelSpreadCreate
   * @class
   */
  function BoxModelSpreadCreate() {
    _classCallCheck(this, BoxModelSpreadCreate);
  }

  /**
   * Constructs a <code>BoxModelSpreadCreate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BoxModelSpreadCreate} obj Optional instance to populate.
   * @return {module:model/BoxModelSpreadCreate} The populated <code>BoxModelSpreadCreate</code> instance.
   */
  _createClass(BoxModelSpreadCreate, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new BoxModelSpreadCreate();
        if (data.hasOwnProperty('id')) obj.id = _ApiClient.ApiClient.convertToType(data['id'], 'String');
        if (data.hasOwnProperty('kind')) obj.kind = _ApiClient.ApiClient.convertToType(data['kind'], 'String');
        if (data.hasOwnProperty('dimensions')) obj.dimensions = _Dimensions.Dimensions1.constructFromObject(data['dimensions']);
        if (data.hasOwnProperty('position')) obj.position = _Position.Position1.constructFromObject(data['position']);
        if (data.hasOwnProperty('front')) obj.front = _Front.Front3.constructFromObject(data['front']);
        if (data.hasOwnProperty('back')) obj.back = _Back.Back3.constructFromObject(data['back']);
        if (data.hasOwnProperty('sides')) obj.sides = _ApiClient.ApiClient.convertToType(data['sides'], 'String');
        if (data.hasOwnProperty('bleeds')) obj.bleeds = _Bleeds.Bleeds1.constructFromObject(data['bleeds']);
        if (data.hasOwnProperty('print_free_margins')) obj.printFreeMargins = _PrintFreeMargins.PrintFreeMargins1.constructFromObject(data['print_free_margins']);
        if (data.hasOwnProperty('children')) obj.children = _ApiClient.ApiClient.convertToType(data['children'], [_BoxModelSpreadChildrenCreate.BoxModelSpreadChildrenCreate]);
      }
      return obj;
    }
  }]);
  return BoxModelSpreadCreate;
}();
/**
 * @member {String} id
 */
exports.BoxModelSpreadCreate = BoxModelSpreadCreate;
BoxModelSpreadCreate.prototype.id = undefined;

/**
 * Allowed values for the <code>kind</code> property.
 * @enum {String}
 * @readonly
 */
BoxModelSpreadCreate.KindEnum = {
  /**
   * value: "spread"
   * @const
   */
  spread: "spread"
};
/**
 * @member {module:model/BoxModelSpreadCreate.KindEnum} kind
 */
BoxModelSpreadCreate.prototype.kind = undefined;

/**
 * @member {module:model/Dimensions1} dimensions
 */
BoxModelSpreadCreate.prototype.dimensions = undefined;

/**
 * @member {module:model/Position1} position
 */
BoxModelSpreadCreate.prototype.position = undefined;

/**
 * @member {module:model/Front3} front
 */
BoxModelSpreadCreate.prototype.front = undefined;

/**
 * @member {module:model/Back3} back
 */
BoxModelSpreadCreate.prototype.back = undefined;

/**
 * Allowed values for the <code>sides</code> property.
 * @enum {String}
 * @readonly
 */
BoxModelSpreadCreate.SidesEnum = {
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
 * @member {module:model/BoxModelSpreadCreate.SidesEnum} sides
 */
BoxModelSpreadCreate.prototype.sides = undefined;

/**
 * @member {module:model/Bleeds1} bleeds
 */
BoxModelSpreadCreate.prototype.bleeds = undefined;

/**
 * @member {module:model/PrintFreeMargins1} printFreeMargins
 */
BoxModelSpreadCreate.prototype.printFreeMargins = undefined;

/**
 * @member {Array.<module:model/BoxModelSpreadChildrenCreate>} children
 */
BoxModelSpreadCreate.prototype.children = undefined;

// Implement BoxModelIntermediateLayoutChildrenCreate interface:
// Implement BoxModelPartLayoutChildrenCreate interface:
// Implement BoxModelRollSegmentChildrenCreate interface:
// Implement BoxModelSheetChildrenCreate interface: