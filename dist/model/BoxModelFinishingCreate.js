"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BoxModelFinishingCreate = void 0;
var _ApiClient = require("../ApiClient");
var _Back = require("./Back1");
var _Dimensions = require("./Dimensions1");
var _Front = require("./Front1");
var _Position = require("./Position1");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The BoxModelFinishingCreate model module.
 * @module model/BoxModelFinishingCreate
 * @version 1.0.0
 */
var BoxModelFinishingCreate = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>BoxModelFinishingCreate</code>.
   * @alias module:model/BoxModelFinishingCreate
   * @class
   */
  function BoxModelFinishingCreate() {
    _classCallCheck(this, BoxModelFinishingCreate);
  }

  /**
   * Constructs a <code>BoxModelFinishingCreate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BoxModelFinishingCreate} obj Optional instance to populate.
   * @return {module:model/BoxModelFinishingCreate} The populated <code>BoxModelFinishingCreate</code> instance.
   */
  _createClass(BoxModelFinishingCreate, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new BoxModelFinishingCreate();
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
  return BoxModelFinishingCreate;
}();
/**
 * @member {String} id
 */
exports.BoxModelFinishingCreate = BoxModelFinishingCreate;
BoxModelFinishingCreate.prototype.id = undefined;

/**
 * Allowed values for the <code>kind</code> property.
 * @enum {String}
 * @readonly
 */
BoxModelFinishingCreate.KindEnum = {
  /**
   * value: "finishing"
   * @const
   */
  finishing: "finishing"
};
/**
 * @member {module:model/BoxModelFinishingCreate.KindEnum} kind
 */
BoxModelFinishingCreate.prototype.kind = undefined;

/**
 * @member {module:model/Dimensions1} dimensions
 */
BoxModelFinishingCreate.prototype.dimensions = undefined;

/**
 * @member {module:model/Position1} position
 */
BoxModelFinishingCreate.prototype.position = undefined;

/**
 * @member {module:model/Front1} front
 */
BoxModelFinishingCreate.prototype.front = undefined;

/**
 * @member {module:model/Back1} back
 */
BoxModelFinishingCreate.prototype.back = undefined;

// Implement BoxModelIntermediateLayoutChildrenCreate interface:
// Implement BoxModelPageChildrenCreate interface:
// Implement BoxModelPartLayoutChildrenCreate interface:
// Implement BoxModelRollSegmentChildrenCreate interface:
// Implement BoxModelSheetChildrenCreate interface:
// Implement BoxModelSpreadChildrenCreate interface: