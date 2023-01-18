"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BoxModelRollSegmentUpdate = void 0;
var _ApiClient = require("../ApiClient");
var _Back = require("./Back3");
var _BoxModelRollSegmentChildrenUpdate = require("./BoxModelRollSegmentChildrenUpdate");
var _Dimensions = require("./Dimensions1");
var _Front = require("./Front3");
var _Position = require("./Position1");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The BoxModelRollSegmentUpdate model module.
 * @module model/BoxModelRollSegmentUpdate
 * @version 1.0.0
 */
var BoxModelRollSegmentUpdate = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>BoxModelRollSegmentUpdate</code>.
   * @alias module:model/BoxModelRollSegmentUpdate
   * @class
   */
  function BoxModelRollSegmentUpdate() {
    _classCallCheck(this, BoxModelRollSegmentUpdate);
  }

  /**
   * Constructs a <code>BoxModelRollSegmentUpdate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BoxModelRollSegmentUpdate} obj Optional instance to populate.
   * @return {module:model/BoxModelRollSegmentUpdate} The populated <code>BoxModelRollSegmentUpdate</code> instance.
   */
  _createClass(BoxModelRollSegmentUpdate, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new BoxModelRollSegmentUpdate();
        if (data.hasOwnProperty('id')) obj.id = _ApiClient.ApiClient.convertToType(data['id'], 'String');
        if (data.hasOwnProperty('kind')) obj.kind = _ApiClient.ApiClient.convertToType(data['kind'], 'String');
        if (data.hasOwnProperty('sides')) obj.sides = _ApiClient.ApiClient.convertToType(data['sides'], 'String');
        if (data.hasOwnProperty('dimensions')) obj.dimensions = _Dimensions.Dimensions1.constructFromObject(data['dimensions']);
        if (data.hasOwnProperty('position')) obj.position = _Position.Position1.constructFromObject(data['position']);
        if (data.hasOwnProperty('front')) obj.front = _Front.Front3.constructFromObject(data['front']);
        if (data.hasOwnProperty('back')) obj.back = _Back.Back3.constructFromObject(data['back']);
        if (data.hasOwnProperty('children')) obj.children = _ApiClient.ApiClient.convertToType(data['children'], [_BoxModelRollSegmentChildrenUpdate.BoxModelRollSegmentChildrenUpdate]);
      }
      return obj;
    }
  }]);
  return BoxModelRollSegmentUpdate;
}();
/**
 * @member {String} id
 */
exports.BoxModelRollSegmentUpdate = BoxModelRollSegmentUpdate;
BoxModelRollSegmentUpdate.prototype.id = undefined;

/**
 * Allowed values for the <code>kind</code> property.
 * @enum {String}
 * @readonly
 */
BoxModelRollSegmentUpdate.KindEnum = {
  /**
   * value: "roll_segment"
   * @const
   */
  rollSegment: "roll_segment"
};
/**
 * @member {module:model/BoxModelRollSegmentUpdate.KindEnum} kind
 */
BoxModelRollSegmentUpdate.prototype.kind = undefined;

/**
 * Allowed values for the <code>sides</code> property.
 * @enum {String}
 * @readonly
 */
BoxModelRollSegmentUpdate.SidesEnum = {
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
 * @member {module:model/BoxModelRollSegmentUpdate.SidesEnum} sides
 */
BoxModelRollSegmentUpdate.prototype.sides = undefined;

/**
 * @member {module:model/Dimensions1} dimensions
 */
BoxModelRollSegmentUpdate.prototype.dimensions = undefined;

/**
 * @member {module:model/Position1} position
 */
BoxModelRollSegmentUpdate.prototype.position = undefined;

/**
 * @member {module:model/Front3} front
 */
BoxModelRollSegmentUpdate.prototype.front = undefined;

/**
 * @member {module:model/Back3} back
 */
BoxModelRollSegmentUpdate.prototype.back = undefined;

/**
 * @member {Array.<module:model/BoxModelRollSegmentChildrenUpdate>} children
 */
BoxModelRollSegmentUpdate.prototype.children = undefined;

// Implement BoxModelSignatureLayoutChildrenUpdate interface: