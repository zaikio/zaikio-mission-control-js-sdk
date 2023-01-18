"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BoxModelFinishingUpdate = void 0;
var _ApiClient = require("../ApiClient");
var _Back = require("./Back1");
var _Dimensions = require("./Dimensions1");
var _Front = require("./Front1");
var _Position = require("./Position1");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The BoxModelFinishingUpdate model module.
 * @module model/BoxModelFinishingUpdate
 * @version 1.0.0
 */
var BoxModelFinishingUpdate = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>BoxModelFinishingUpdate</code>.
   * @alias module:model/BoxModelFinishingUpdate
   * @class
   */
  function BoxModelFinishingUpdate() {
    _classCallCheck(this, BoxModelFinishingUpdate);
  }

  /**
   * Constructs a <code>BoxModelFinishingUpdate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BoxModelFinishingUpdate} obj Optional instance to populate.
   * @return {module:model/BoxModelFinishingUpdate} The populated <code>BoxModelFinishingUpdate</code> instance.
   */
  _createClass(BoxModelFinishingUpdate, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new BoxModelFinishingUpdate();
        if (data.hasOwnProperty('id')) obj.id = _ApiClient.ApiClient.convertToType(data['id'], 'String');
        if (data.hasOwnProperty('kind')) obj.kind = _ApiClient.ApiClient.convertToType(data['kind'], 'String');
        if (data.hasOwnProperty('dimensions')) obj.dimensions = _Dimensions.Dimensions1.constructFromObject(data['dimensions']);
        if (data.hasOwnProperty('position')) obj.position = _Position.Position1.constructFromObject(data['position']);
        if (data.hasOwnProperty('front')) obj.front = _Front.Front1.constructFromObject(data['front']);
        if (data.hasOwnProperty('back')) obj.back = _Back.Back1.constructFromObject(data['back']);
      }
      return obj;
    }
  }]);
  return BoxModelFinishingUpdate;
}();
/**
 * @member {String} id
 */
exports.BoxModelFinishingUpdate = BoxModelFinishingUpdate;
BoxModelFinishingUpdate.prototype.id = undefined;

/**
 * Allowed values for the <code>kind</code> property.
 * @enum {String}
 * @readonly
 */
BoxModelFinishingUpdate.KindEnum = {
  /**
   * value: "finishing"
   * @const
   */
  finishing: "finishing"
};
/**
 * @member {module:model/BoxModelFinishingUpdate.KindEnum} kind
 */
BoxModelFinishingUpdate.prototype.kind = undefined;

/**
 * @member {module:model/Dimensions1} dimensions
 */
BoxModelFinishingUpdate.prototype.dimensions = undefined;

/**
 * @member {module:model/Position1} position
 */
BoxModelFinishingUpdate.prototype.position = undefined;

/**
 * @member {module:model/Front1} front
 */
BoxModelFinishingUpdate.prototype.front = undefined;

/**
 * @member {module:model/Back1} back
 */
BoxModelFinishingUpdate.prototype.back = undefined;

// Implement BoxModelIntermediateLayoutChildrenUpdate interface:
// Implement BoxModelPageChildrenUpdate interface:
// Implement BoxModelPartLayoutChildrenUpdate interface:
// Implement BoxModelRollSegmentChildrenUpdate interface:
// Implement BoxModelSheetChildrenUpdate interface:
// Implement BoxModelSpreadChildrenUpdate interface: