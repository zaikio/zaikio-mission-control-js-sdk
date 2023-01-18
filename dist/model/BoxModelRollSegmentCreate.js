"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BoxModelRollSegmentCreate = void 0;
var _ApiClient = require("../ApiClient");
var _Back = require("./Back3");
var _BoxModelRollSegmentChildrenCreate = require("./BoxModelRollSegmentChildrenCreate");
var _Dimensions = require("./Dimensions1");
var _Front = require("./Front3");
var _Position = require("./Position1");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The BoxModelRollSegmentCreate model module.
 * @module model/BoxModelRollSegmentCreate
 * @version 1.0.0
 */
var BoxModelRollSegmentCreate = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>BoxModelRollSegmentCreate</code>.
   * @alias module:model/BoxModelRollSegmentCreate
   * @class
   */
  function BoxModelRollSegmentCreate() {
    _classCallCheck(this, BoxModelRollSegmentCreate);
  }

  /**
   * Constructs a <code>BoxModelRollSegmentCreate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BoxModelRollSegmentCreate} obj Optional instance to populate.
   * @return {module:model/BoxModelRollSegmentCreate} The populated <code>BoxModelRollSegmentCreate</code> instance.
   */
  _createClass(BoxModelRollSegmentCreate, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new BoxModelRollSegmentCreate();
        if (data.hasOwnProperty('id')) obj.id = _ApiClient.ApiClient.convertToType(data['id'], 'String');
        if (data.hasOwnProperty('kind')) obj.kind = _ApiClient.ApiClient.convertToType(data['kind'], 'String');
        if (data.hasOwnProperty('sides')) obj.sides = _ApiClient.ApiClient.convertToType(data['sides'], 'String');
        if (data.hasOwnProperty('dimensions')) obj.dimensions = _Dimensions.Dimensions1.constructFromObject(data['dimensions']);
        if (data.hasOwnProperty('position')) obj.position = _Position.Position1.constructFromObject(data['position']);
        if (data.hasOwnProperty('front')) obj.front = _Front.Front3.constructFromObject(data['front']);
        if (data.hasOwnProperty('back')) obj.back = _Back.Back3.constructFromObject(data['back']);
        if (data.hasOwnProperty('children')) obj.children = _ApiClient.ApiClient.convertToType(data['children'], [_BoxModelRollSegmentChildrenCreate.BoxModelRollSegmentChildrenCreate]);
      }
      return obj;
    }
  }]);
  return BoxModelRollSegmentCreate;
}();
/**
 * @member {String} id
 */
exports.BoxModelRollSegmentCreate = BoxModelRollSegmentCreate;
BoxModelRollSegmentCreate.prototype.id = undefined;

/**
 * Allowed values for the <code>kind</code> property.
 * @enum {String}
 * @readonly
 */
BoxModelRollSegmentCreate.KindEnum = {
  /**
   * value: "roll_segment"
   * @const
   */
  rollSegment: "roll_segment"
};
/**
 * @member {module:model/BoxModelRollSegmentCreate.KindEnum} kind
 */
BoxModelRollSegmentCreate.prototype.kind = undefined;

/**
 * Allowed values for the <code>sides</code> property.
 * @enum {String}
 * @readonly
 */
BoxModelRollSegmentCreate.SidesEnum = {
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
 * @member {module:model/BoxModelRollSegmentCreate.SidesEnum} sides
 */
BoxModelRollSegmentCreate.prototype.sides = undefined;

/**
 * @member {module:model/Dimensions1} dimensions
 */
BoxModelRollSegmentCreate.prototype.dimensions = undefined;

/**
 * @member {module:model/Position1} position
 */
BoxModelRollSegmentCreate.prototype.position = undefined;

/**
 * @member {module:model/Front3} front
 */
BoxModelRollSegmentCreate.prototype.front = undefined;

/**
 * @member {module:model/Back3} back
 */
BoxModelRollSegmentCreate.prototype.back = undefined;

/**
 * @member {Array.<module:model/BoxModelRollSegmentChildrenCreate>} children
 */
BoxModelRollSegmentCreate.prototype.children = undefined;

// Implement BoxModelSignatureLayoutChildrenCreate interface: