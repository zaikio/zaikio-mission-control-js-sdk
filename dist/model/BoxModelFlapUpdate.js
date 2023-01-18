"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BoxModelFlapUpdate = void 0;
var _ApiClient = require("../ApiClient");
var _Back = require("./Back3");
var _Dimensions = require("./Dimensions1");
var _Front = require("./Front3");
var _Position = require("./Position1");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The BoxModelFlapUpdate model module.
 * @module model/BoxModelFlapUpdate
 * @version 1.0.0
 */
var BoxModelFlapUpdate = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>BoxModelFlapUpdate</code>.
   * @alias module:model/BoxModelFlapUpdate
   * @class
   */
  function BoxModelFlapUpdate() {
    _classCallCheck(this, BoxModelFlapUpdate);
  }

  /**
   * Constructs a <code>BoxModelFlapUpdate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BoxModelFlapUpdate} obj Optional instance to populate.
   * @return {module:model/BoxModelFlapUpdate} The populated <code>BoxModelFlapUpdate</code> instance.
   */
  _createClass(BoxModelFlapUpdate, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new BoxModelFlapUpdate();
        if (data.hasOwnProperty('id')) obj.id = _ApiClient.ApiClient.convertToType(data['id'], 'String');
        if (data.hasOwnProperty('kind')) obj.kind = _ApiClient.ApiClient.convertToType(data['kind'], 'String');
        if (data.hasOwnProperty('dimensions')) obj.dimensions = _Dimensions.Dimensions1.constructFromObject(data['dimensions']);
        if (data.hasOwnProperty('position')) obj.position = _Position.Position1.constructFromObject(data['position']);
        if (data.hasOwnProperty('front')) obj.front = _Front.Front3.constructFromObject(data['front']);
        if (data.hasOwnProperty('back')) obj.back = _Back.Back3.constructFromObject(data['back']);
      }
      return obj;
    }
  }]);
  return BoxModelFlapUpdate;
}();
/**
 * @member {String} id
 */
exports.BoxModelFlapUpdate = BoxModelFlapUpdate;
BoxModelFlapUpdate.prototype.id = undefined;

/**
 * Allowed values for the <code>kind</code> property.
 * @enum {String}
 * @readonly
 */
BoxModelFlapUpdate.KindEnum = {
  /**
   * value: "flap"
   * @const
   */
  flap: "flap"
};
/**
 * @member {module:model/BoxModelFlapUpdate.KindEnum} kind
 */
BoxModelFlapUpdate.prototype.kind = undefined;

/**
 * @member {module:model/Dimensions1} dimensions
 */
BoxModelFlapUpdate.prototype.dimensions = undefined;

/**
 * @member {module:model/Position1} position
 */
BoxModelFlapUpdate.prototype.position = undefined;

/**
 * @member {module:model/Front3} front
 */
BoxModelFlapUpdate.prototype.front = undefined;

/**
 * @member {module:model/Back3} back
 */
BoxModelFlapUpdate.prototype.back = undefined;

// Implement BoxModelPageChildrenUpdate interface:
// Implement BoxModelSpreadChildrenUpdate interface: