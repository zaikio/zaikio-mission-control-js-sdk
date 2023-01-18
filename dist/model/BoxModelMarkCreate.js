"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BoxModelMarkCreate = void 0;
var _ApiClient = require("../ApiClient");
var _Dimensions = require("./Dimensions1");
var _Position = require("./Position1");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The BoxModelMarkCreate model module.
 * @module model/BoxModelMarkCreate
 * @version 1.0.0
 */
var BoxModelMarkCreate = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>BoxModelMarkCreate</code>.
   * @alias module:model/BoxModelMarkCreate
   * @class
   */
  function BoxModelMarkCreate() {
    _classCallCheck(this, BoxModelMarkCreate);
  }

  /**
   * Constructs a <code>BoxModelMarkCreate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BoxModelMarkCreate} obj Optional instance to populate.
   * @return {module:model/BoxModelMarkCreate} The populated <code>BoxModelMarkCreate</code> instance.
   */
  _createClass(BoxModelMarkCreate, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new BoxModelMarkCreate();
        if (data.hasOwnProperty('id')) obj.id = _ApiClient.ApiClient.convertToType(data['id'], 'String');
        if (data.hasOwnProperty('kind')) obj.kind = _ApiClient.ApiClient.convertToType(data['kind'], 'String');
        if (data.hasOwnProperty('dimensions')) obj.dimensions = _Dimensions.Dimensions1.constructFromObject(data['dimensions']);
        if (data.hasOwnProperty('position')) obj.position = _Position.Position1.constructFromObject(data['position']);
      }
      return obj;
    }
  }]);
  return BoxModelMarkCreate;
}();
/**
 * @member {String} id
 */
exports.BoxModelMarkCreate = BoxModelMarkCreate;
BoxModelMarkCreate.prototype.id = undefined;

/**
 * Allowed values for the <code>kind</code> property.
 * @enum {String}
 * @readonly
 */
BoxModelMarkCreate.KindEnum = {
  /**
   * value: "mark"
   * @const
   */
  mark: "mark"
};
/**
 * @member {module:model/BoxModelMarkCreate.KindEnum} kind
 */
BoxModelMarkCreate.prototype.kind = undefined;

/**
 * @member {module:model/Dimensions1} dimensions
 */
BoxModelMarkCreate.prototype.dimensions = undefined;

/**
 * @member {module:model/Position1} position
 */
BoxModelMarkCreate.prototype.position = undefined;

// Implement BoxModelPageChildrenCreate interface:
// Implement BoxModelRollSegmentChildrenCreate interface:
// Implement BoxModelSheetChildrenCreate interface:
// Implement BoxModelSpreadChildrenCreate interface: