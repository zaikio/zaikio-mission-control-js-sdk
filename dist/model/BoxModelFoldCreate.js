"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BoxModelFoldCreate = void 0;
var _ApiClient = require("../ApiClient");
var _Dimensions = require("./Dimensions1");
var _Position = require("./Position1");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The BoxModelFoldCreate model module.
 * @module model/BoxModelFoldCreate
 * @version 1.0.0
 */
var BoxModelFoldCreate = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>BoxModelFoldCreate</code>.
   * @alias module:model/BoxModelFoldCreate
   * @class
   */
  function BoxModelFoldCreate() {
    _classCallCheck(this, BoxModelFoldCreate);
  }

  /**
   * Constructs a <code>BoxModelFoldCreate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BoxModelFoldCreate} obj Optional instance to populate.
   * @return {module:model/BoxModelFoldCreate} The populated <code>BoxModelFoldCreate</code> instance.
   */
  _createClass(BoxModelFoldCreate, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new BoxModelFoldCreate();
        if (data.hasOwnProperty('id')) obj.id = _ApiClient.ApiClient.convertToType(data['id'], 'String');
        if (data.hasOwnProperty('kind')) obj.kind = _ApiClient.ApiClient.convertToType(data['kind'], 'String');
        if (data.hasOwnProperty('dimensions')) obj.dimensions = _Dimensions.Dimensions1.constructFromObject(data['dimensions']);
        if (data.hasOwnProperty('position')) obj.position = _Position.Position1.constructFromObject(data['position']);
      }
      return obj;
    }
  }]);
  return BoxModelFoldCreate;
}();
/**
 * @member {String} id
 */
exports.BoxModelFoldCreate = BoxModelFoldCreate;
BoxModelFoldCreate.prototype.id = undefined;

/**
 * Allowed values for the <code>kind</code> property.
 * @enum {String}
 * @readonly
 */
BoxModelFoldCreate.KindEnum = {
  /**
   * value: "fold"
   * @const
   */
  fold: "fold"
};
/**
 * @member {module:model/BoxModelFoldCreate.KindEnum} kind
 */
BoxModelFoldCreate.prototype.kind = undefined;

/**
 * @member {module:model/Dimensions1} dimensions
 */
BoxModelFoldCreate.prototype.dimensions = undefined;

/**
 * @member {module:model/Position1} position
 */
BoxModelFoldCreate.prototype.position = undefined;

// Implement BoxModelPageChildrenCreate interface:
// Implement BoxModelRollSegmentChildrenCreate interface:
// Implement BoxModelSpreadChildrenCreate interface: