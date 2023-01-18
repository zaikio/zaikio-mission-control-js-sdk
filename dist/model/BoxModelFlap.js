"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BoxModelFlap = void 0;
var _ApiClient = require("../ApiClient");
var _Back = require("./Back2");
var _Dimensions = require("./Dimensions");
var _Front = require("./Front2");
var _Position = require("./Position");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The BoxModelFlap model module.
 * @module model/BoxModelFlap
 * @version 1.0.0
 */
var BoxModelFlap = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>BoxModelFlap</code>.
   * @alias module:model/BoxModelFlap
   * @class
   * @param id {String} 
   * @param kind {module:model/BoxModelFlap.KindEnum} 
   * @param dimensions {module:model/Dimensions} 
   * @param position {module:model/Position} 
   * @param front {module:model/Front2} 
   * @param back {module:model/Back2} 
   */
  function BoxModelFlap(id, kind, dimensions, position, front, back) {
    _classCallCheck(this, BoxModelFlap);
    this.id = id;
    this.kind = kind;
    this.dimensions = dimensions;
    this.position = position;
    this.front = front;
    this.back = back;
  }

  /**
   * Constructs a <code>BoxModelFlap</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BoxModelFlap} obj Optional instance to populate.
   * @return {module:model/BoxModelFlap} The populated <code>BoxModelFlap</code> instance.
   */
  _createClass(BoxModelFlap, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new BoxModelFlap();
        if (data.hasOwnProperty('id')) obj.id = _ApiClient.ApiClient.convertToType(data['id'], 'String');
        if (data.hasOwnProperty('kind')) obj.kind = _ApiClient.ApiClient.convertToType(data['kind'], 'String');
        if (data.hasOwnProperty('dimensions')) obj.dimensions = _Dimensions.Dimensions.constructFromObject(data['dimensions']);
        if (data.hasOwnProperty('position')) obj.position = _Position.Position.constructFromObject(data['position']);
        if (data.hasOwnProperty('front')) obj.front = _Front.Front2.constructFromObject(data['front']);
        if (data.hasOwnProperty('back')) obj.back = _Back.Back2.constructFromObject(data['back']);
      }
      return obj;
    }
  }]);
  return BoxModelFlap;
}();
/**
 * @member {String} id
 */
exports.BoxModelFlap = BoxModelFlap;
BoxModelFlap.prototype.id = undefined;

/**
 * Allowed values for the <code>kind</code> property.
 * @enum {String}
 * @readonly
 */
BoxModelFlap.KindEnum = {
  /**
   * value: "flap"
   * @const
   */
  flap: "flap"
};
/**
 * @member {module:model/BoxModelFlap.KindEnum} kind
 */
BoxModelFlap.prototype.kind = undefined;

/**
 * @member {module:model/Dimensions} dimensions
 */
BoxModelFlap.prototype.dimensions = undefined;

/**
 * @member {module:model/Position} position
 */
BoxModelFlap.prototype.position = undefined;

/**
 * @member {module:model/Front2} front
 */
BoxModelFlap.prototype.front = undefined;

/**
 * @member {module:model/Back2} back
 */
BoxModelFlap.prototype.back = undefined;

// Implement BoxModelPageChildren interface:
// Implement BoxModelSpreadChildren interface: