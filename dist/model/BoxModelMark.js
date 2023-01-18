"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BoxModelMark = void 0;
var _ApiClient = require("../ApiClient");
var _Dimensions = require("./Dimensions");
var _Position = require("./Position");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The BoxModelMark model module.
 * @module model/BoxModelMark
 * @version 1.0.0
 */
var BoxModelMark = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>BoxModelMark</code>.
   * @alias module:model/BoxModelMark
   * @class
   * @param id {String} 
   * @param kind {module:model/BoxModelMark.KindEnum} 
   * @param dimensions {module:model/Dimensions} 
   * @param position {module:model/Position} 
   */
  function BoxModelMark(id, kind, dimensions, position) {
    _classCallCheck(this, BoxModelMark);
    this.id = id;
    this.kind = kind;
    this.dimensions = dimensions;
    this.position = position;
  }

  /**
   * Constructs a <code>BoxModelMark</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BoxModelMark} obj Optional instance to populate.
   * @return {module:model/BoxModelMark} The populated <code>BoxModelMark</code> instance.
   */
  _createClass(BoxModelMark, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new BoxModelMark();
        if (data.hasOwnProperty('id')) obj.id = _ApiClient.ApiClient.convertToType(data['id'], 'String');
        if (data.hasOwnProperty('kind')) obj.kind = _ApiClient.ApiClient.convertToType(data['kind'], 'String');
        if (data.hasOwnProperty('dimensions')) obj.dimensions = _Dimensions.Dimensions.constructFromObject(data['dimensions']);
        if (data.hasOwnProperty('position')) obj.position = _Position.Position.constructFromObject(data['position']);
      }
      return obj;
    }
  }]);
  return BoxModelMark;
}();
/**
 * @member {String} id
 */
exports.BoxModelMark = BoxModelMark;
BoxModelMark.prototype.id = undefined;

/**
 * Allowed values for the <code>kind</code> property.
 * @enum {String}
 * @readonly
 */
BoxModelMark.KindEnum = {
  /**
   * value: "mark"
   * @const
   */
  mark: "mark"
};
/**
 * @member {module:model/BoxModelMark.KindEnum} kind
 */
BoxModelMark.prototype.kind = undefined;

/**
 * @member {module:model/Dimensions} dimensions
 */
BoxModelMark.prototype.dimensions = undefined;

/**
 * @member {module:model/Position} position
 */
BoxModelMark.prototype.position = undefined;

// Implement BoxModelPageChildren interface:
// Implement BoxModelRollSegmentChildren interface:
// Implement BoxModelSheetChildren interface:
// Implement BoxModelSpreadChildren interface: