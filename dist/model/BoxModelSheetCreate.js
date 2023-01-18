"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BoxModelSheetCreate = void 0;
var _ApiClient = require("../ApiClient");
var _Bleeds = require("./Bleeds1");
var _BoxModelSheetChildrenCreate = require("./BoxModelSheetChildrenCreate");
var _Dimensions = require("./Dimensions1");
var _Front = require("./Front3");
var _Position = require("./Position1");
var _PrintFreeMargins = require("./PrintFreeMargins1");
var _Rear = require("./Rear1");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The BoxModelSheetCreate model module.
 * @module model/BoxModelSheetCreate
 * @version 1.0.0
 */
var BoxModelSheetCreate = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>BoxModelSheetCreate</code>.
   * @alias module:model/BoxModelSheetCreate
   * @class
   */
  function BoxModelSheetCreate() {
    _classCallCheck(this, BoxModelSheetCreate);
  }

  /**
   * Constructs a <code>BoxModelSheetCreate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BoxModelSheetCreate} obj Optional instance to populate.
   * @return {module:model/BoxModelSheetCreate} The populated <code>BoxModelSheetCreate</code> instance.
   */
  _createClass(BoxModelSheetCreate, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new BoxModelSheetCreate();
        if (data.hasOwnProperty('id')) obj.id = _ApiClient.ApiClient.convertToType(data['id'], 'String');
        if (data.hasOwnProperty('kind')) obj.kind = _ApiClient.ApiClient.convertToType(data['kind'], 'String');
        if (data.hasOwnProperty('sides')) obj.sides = _ApiClient.ApiClient.convertToType(data['sides'], 'String');
        if (data.hasOwnProperty('dimensions')) obj.dimensions = _Dimensions.Dimensions1.constructFromObject(data['dimensions']);
        if (data.hasOwnProperty('position')) obj.position = _Position.Position1.constructFromObject(data['position']);
        if (data.hasOwnProperty('front')) obj.front = _Front.Front3.constructFromObject(data['front']);
        if (data.hasOwnProperty('rear')) obj.rear = _Rear.Rear1.constructFromObject(data['rear']);
        if (data.hasOwnProperty('bleeds')) obj.bleeds = _Bleeds.Bleeds1.constructFromObject(data['bleeds']);
        if (data.hasOwnProperty('print_free_margins')) obj.printFreeMargins = _PrintFreeMargins.PrintFreeMargins1.constructFromObject(data['print_free_margins']);
        if (data.hasOwnProperty('children')) obj.children = _ApiClient.ApiClient.convertToType(data['children'], [_BoxModelSheetChildrenCreate.BoxModelSheetChildrenCreate]);
      }
      return obj;
    }
  }]);
  return BoxModelSheetCreate;
}();
/**
 * @member {String} id
 */
exports.BoxModelSheetCreate = BoxModelSheetCreate;
BoxModelSheetCreate.prototype.id = undefined;

/**
 * Allowed values for the <code>kind</code> property.
 * @enum {String}
 * @readonly
 */
BoxModelSheetCreate.KindEnum = {
  /**
   * value: "sheet"
   * @const
   */
  sheet: "sheet"
};
/**
 * @member {module:model/BoxModelSheetCreate.KindEnum} kind
 */
BoxModelSheetCreate.prototype.kind = undefined;

/**
 * Allowed values for the <code>sides</code> property.
 * @enum {String}
 * @readonly
 */
BoxModelSheetCreate.SidesEnum = {
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
 * @member {module:model/BoxModelSheetCreate.SidesEnum} sides
 */
BoxModelSheetCreate.prototype.sides = undefined;

/**
 * @member {module:model/Dimensions1} dimensions
 */
BoxModelSheetCreate.prototype.dimensions = undefined;

/**
 * @member {module:model/Position1} position
 */
BoxModelSheetCreate.prototype.position = undefined;

/**
 * @member {module:model/Front3} front
 */
BoxModelSheetCreate.prototype.front = undefined;

/**
 * @member {module:model/Rear1} rear
 */
BoxModelSheetCreate.prototype.rear = undefined;

/**
 * @member {module:model/Bleeds1} bleeds
 */
BoxModelSheetCreate.prototype.bleeds = undefined;

/**
 * @member {module:model/PrintFreeMargins1} printFreeMargins
 */
BoxModelSheetCreate.prototype.printFreeMargins = undefined;

/**
 * @member {Array.<module:model/BoxModelSheetChildrenCreate>} children
 */
BoxModelSheetCreate.prototype.children = undefined;

// Implement BoxModelSignatureLayoutChildrenCreate interface: