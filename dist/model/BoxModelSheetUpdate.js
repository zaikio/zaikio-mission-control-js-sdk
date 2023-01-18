"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BoxModelSheetUpdate = void 0;
var _ApiClient = require("../ApiClient");
var _Bleeds = require("./Bleeds1");
var _BoxModelSheetChildrenUpdate = require("./BoxModelSheetChildrenUpdate");
var _Dimensions = require("./Dimensions1");
var _Front = require("./Front3");
var _Position = require("./Position1");
var _PrintFreeMargins = require("./PrintFreeMargins1");
var _Rear = require("./Rear1");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The BoxModelSheetUpdate model module.
 * @module model/BoxModelSheetUpdate
 * @version 1.0.0
 */
var BoxModelSheetUpdate = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>BoxModelSheetUpdate</code>.
   * @alias module:model/BoxModelSheetUpdate
   * @class
   */
  function BoxModelSheetUpdate() {
    _classCallCheck(this, BoxModelSheetUpdate);
  }

  /**
   * Constructs a <code>BoxModelSheetUpdate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BoxModelSheetUpdate} obj Optional instance to populate.
   * @return {module:model/BoxModelSheetUpdate} The populated <code>BoxModelSheetUpdate</code> instance.
   */
  _createClass(BoxModelSheetUpdate, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new BoxModelSheetUpdate();
        if (data.hasOwnProperty('id')) obj.id = _ApiClient.ApiClient.convertToType(data['id'], 'String');
        if (data.hasOwnProperty('kind')) obj.kind = _ApiClient.ApiClient.convertToType(data['kind'], 'String');
        if (data.hasOwnProperty('sides')) obj.sides = _ApiClient.ApiClient.convertToType(data['sides'], 'String');
        if (data.hasOwnProperty('dimensions')) obj.dimensions = _Dimensions.Dimensions1.constructFromObject(data['dimensions']);
        if (data.hasOwnProperty('position')) obj.position = _Position.Position1.constructFromObject(data['position']);
        if (data.hasOwnProperty('front')) obj.front = _Front.Front3.constructFromObject(data['front']);
        if (data.hasOwnProperty('rear')) obj.rear = _Rear.Rear1.constructFromObject(data['rear']);
        if (data.hasOwnProperty('bleeds')) obj.bleeds = _Bleeds.Bleeds1.constructFromObject(data['bleeds']);
        if (data.hasOwnProperty('print_free_margins')) obj.printFreeMargins = _PrintFreeMargins.PrintFreeMargins1.constructFromObject(data['print_free_margins']);
        if (data.hasOwnProperty('children')) obj.children = _ApiClient.ApiClient.convertToType(data['children'], [_BoxModelSheetChildrenUpdate.BoxModelSheetChildrenUpdate]);
      }
      return obj;
    }
  }]);
  return BoxModelSheetUpdate;
}();
/**
 * @member {String} id
 */
exports.BoxModelSheetUpdate = BoxModelSheetUpdate;
BoxModelSheetUpdate.prototype.id = undefined;

/**
 * Allowed values for the <code>kind</code> property.
 * @enum {String}
 * @readonly
 */
BoxModelSheetUpdate.KindEnum = {
  /**
   * value: "sheet"
   * @const
   */
  sheet: "sheet"
};
/**
 * @member {module:model/BoxModelSheetUpdate.KindEnum} kind
 */
BoxModelSheetUpdate.prototype.kind = undefined;

/**
 * Allowed values for the <code>sides</code> property.
 * @enum {String}
 * @readonly
 */
BoxModelSheetUpdate.SidesEnum = {
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
 * @member {module:model/BoxModelSheetUpdate.SidesEnum} sides
 */
BoxModelSheetUpdate.prototype.sides = undefined;

/**
 * @member {module:model/Dimensions1} dimensions
 */
BoxModelSheetUpdate.prototype.dimensions = undefined;

/**
 * @member {module:model/Position1} position
 */
BoxModelSheetUpdate.prototype.position = undefined;

/**
 * @member {module:model/Front3} front
 */
BoxModelSheetUpdate.prototype.front = undefined;

/**
 * @member {module:model/Rear1} rear
 */
BoxModelSheetUpdate.prototype.rear = undefined;

/**
 * @member {module:model/Bleeds1} bleeds
 */
BoxModelSheetUpdate.prototype.bleeds = undefined;

/**
 * @member {module:model/PrintFreeMargins1} printFreeMargins
 */
BoxModelSheetUpdate.prototype.printFreeMargins = undefined;

/**
 * @member {Array.<module:model/BoxModelSheetChildrenUpdate>} children
 */
BoxModelSheetUpdate.prototype.children = undefined;

// Implement BoxModelSignatureLayoutChildrenUpdate interface: