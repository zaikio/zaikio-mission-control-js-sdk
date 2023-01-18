"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BoxModelMarkUpdate = void 0;
var _ApiClient = require("../ApiClient");
var _Dimensions = require("./Dimensions1");
var _Position = require("./Position1");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The BoxModelMarkUpdate model module.
 * @module model/BoxModelMarkUpdate
 * @version 1.0.0
 */
var BoxModelMarkUpdate = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>BoxModelMarkUpdate</code>.
   * @alias module:model/BoxModelMarkUpdate
   * @class
   */
  function BoxModelMarkUpdate() {
    _classCallCheck(this, BoxModelMarkUpdate);
  }

  /**
   * Constructs a <code>BoxModelMarkUpdate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BoxModelMarkUpdate} obj Optional instance to populate.
   * @return {module:model/BoxModelMarkUpdate} The populated <code>BoxModelMarkUpdate</code> instance.
   */
  _createClass(BoxModelMarkUpdate, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new BoxModelMarkUpdate();
        if (data.hasOwnProperty('id')) obj.id = _ApiClient.ApiClient.convertToType(data['id'], 'String');
        if (data.hasOwnProperty('kind')) obj.kind = _ApiClient.ApiClient.convertToType(data['kind'], 'String');
        if (data.hasOwnProperty('dimensions')) obj.dimensions = _Dimensions.Dimensions1.constructFromObject(data['dimensions']);
        if (data.hasOwnProperty('position')) obj.position = _Position.Position1.constructFromObject(data['position']);
      }
      return obj;
    }
  }]);
  return BoxModelMarkUpdate;
}();
/**
 * @member {String} id
 */
exports.BoxModelMarkUpdate = BoxModelMarkUpdate;
BoxModelMarkUpdate.prototype.id = undefined;

/**
 * Allowed values for the <code>kind</code> property.
 * @enum {String}
 * @readonly
 */
BoxModelMarkUpdate.KindEnum = {
  /**
   * value: "mark"
   * @const
   */
  mark: "mark"
};
/**
 * @member {module:model/BoxModelMarkUpdate.KindEnum} kind
 */
BoxModelMarkUpdate.prototype.kind = undefined;

/**
 * @member {module:model/Dimensions1} dimensions
 */
BoxModelMarkUpdate.prototype.dimensions = undefined;

/**
 * @member {module:model/Position1} position
 */
BoxModelMarkUpdate.prototype.position = undefined;

// Implement BoxModelPageChildrenUpdate interface:
// Implement BoxModelRollSegmentChildrenUpdate interface:
// Implement BoxModelSheetChildrenUpdate interface:
// Implement BoxModelSpreadChildrenUpdate interface: