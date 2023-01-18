"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BoxModelPageUpdate = void 0;
var _ApiClient = require("../ApiClient");
var _Bleeds = require("./Bleeds3");
var _BoxModelPageChildrenUpdate = require("./BoxModelPageChildrenUpdate");
var _Dimensions = require("./Dimensions1");
var _Front = require("./Front3");
var _Position = require("./Position1");
var _PrintFreeMargins = require("./PrintFreeMargins3");
var _Rear = require("./Rear1");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The BoxModelPageUpdate model module.
 * @module model/BoxModelPageUpdate
 * @version 1.0.0
 */
var BoxModelPageUpdate = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>BoxModelPageUpdate</code>.
   * @alias module:model/BoxModelPageUpdate
   * @class
   */
  function BoxModelPageUpdate() {
    _classCallCheck(this, BoxModelPageUpdate);
  }

  /**
   * Constructs a <code>BoxModelPageUpdate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BoxModelPageUpdate} obj Optional instance to populate.
   * @return {module:model/BoxModelPageUpdate} The populated <code>BoxModelPageUpdate</code> instance.
   */
  _createClass(BoxModelPageUpdate, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new BoxModelPageUpdate();
        if (data.hasOwnProperty('id')) obj.id = _ApiClient.ApiClient.convertToType(data['id'], 'String');
        if (data.hasOwnProperty('kind')) obj.kind = _ApiClient.ApiClient.convertToType(data['kind'], 'String');
        if (data.hasOwnProperty('sides')) obj.sides = _ApiClient.ApiClient.convertToType(data['sides'], 'String');
        if (data.hasOwnProperty('dimensions')) obj.dimensions = _Dimensions.Dimensions1.constructFromObject(data['dimensions']);
        if (data.hasOwnProperty('position')) obj.position = _Position.Position1.constructFromObject(data['position']);
        if (data.hasOwnProperty('front')) obj.front = _Front.Front3.constructFromObject(data['front']);
        if (data.hasOwnProperty('rear')) obj.rear = _Rear.Rear1.constructFromObject(data['rear']);
        if (data.hasOwnProperty('bleeds')) obj.bleeds = _Bleeds.Bleeds3.constructFromObject(data['bleeds']);
        if (data.hasOwnProperty('print_free_margins')) obj.printFreeMargins = _PrintFreeMargins.PrintFreeMargins3.constructFromObject(data['print_free_margins']);
        if (data.hasOwnProperty('children')) obj.children = _ApiClient.ApiClient.convertToType(data['children'], [_BoxModelPageChildrenUpdate.BoxModelPageChildrenUpdate]);
      }
      return obj;
    }
  }]);
  return BoxModelPageUpdate;
}();
/**
 * @member {String} id
 */
exports.BoxModelPageUpdate = BoxModelPageUpdate;
BoxModelPageUpdate.prototype.id = undefined;

/**
 * Allowed values for the <code>kind</code> property.
 * @enum {String}
 * @readonly
 */
BoxModelPageUpdate.KindEnum = {
  /**
   * value: "page"
   * @const
   */
  page: "page"
};
/**
 * @member {module:model/BoxModelPageUpdate.KindEnum} kind
 */
BoxModelPageUpdate.prototype.kind = undefined;

/**
 * Allowed values for the <code>sides</code> property.
 * @enum {String}
 * @readonly
 */
BoxModelPageUpdate.SidesEnum = {
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
 * @member {module:model/BoxModelPageUpdate.SidesEnum} sides
 */
BoxModelPageUpdate.prototype.sides = undefined;

/**
 * @member {module:model/Dimensions1} dimensions
 */
BoxModelPageUpdate.prototype.dimensions = undefined;

/**
 * @member {module:model/Position1} position
 */
BoxModelPageUpdate.prototype.position = undefined;

/**
 * @member {module:model/Front3} front
 */
BoxModelPageUpdate.prototype.front = undefined;

/**
 * @member {module:model/Rear1} rear
 */
BoxModelPageUpdate.prototype.rear = undefined;

/**
 * @member {module:model/Bleeds3} bleeds
 */
BoxModelPageUpdate.prototype.bleeds = undefined;

/**
 * @member {module:model/PrintFreeMargins3} printFreeMargins
 */
BoxModelPageUpdate.prototype.printFreeMargins = undefined;

/**
 * @member {Array.<module:model/BoxModelPageChildrenUpdate>} children
 */
BoxModelPageUpdate.prototype.children = undefined;

// Implement BoxModelIntermediateLayoutChildrenUpdate interface:
// Implement BoxModelPartLayoutChildrenUpdate interface:
// Implement BoxModelRollSegmentChildrenUpdate interface:
// Implement BoxModelSheetChildrenUpdate interface:
// Implement BoxModelSpreadChildrenUpdate interface: