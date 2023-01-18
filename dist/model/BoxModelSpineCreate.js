"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BoxModelSpineCreate = void 0;
var _ApiClient = require("../ApiClient");
var _Dimensions = require("./Dimensions1");
var _Position = require("./Position1");
var _PrintFreeMargins = require("./PrintFreeMargins1");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The BoxModelSpineCreate model module.
 * @module model/BoxModelSpineCreate
 * @version 1.0.0
 */
var BoxModelSpineCreate = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>BoxModelSpineCreate</code>.
   * @alias module:model/BoxModelSpineCreate
   * @class
   */
  function BoxModelSpineCreate() {
    _classCallCheck(this, BoxModelSpineCreate);
  }

  /**
   * Constructs a <code>BoxModelSpineCreate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BoxModelSpineCreate} obj Optional instance to populate.
   * @return {module:model/BoxModelSpineCreate} The populated <code>BoxModelSpineCreate</code> instance.
   */
  _createClass(BoxModelSpineCreate, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new BoxModelSpineCreate();
        if (data.hasOwnProperty('id')) obj.id = _ApiClient.ApiClient.convertToType(data['id'], 'String');
        if (data.hasOwnProperty('kind')) obj.kind = _ApiClient.ApiClient.convertToType(data['kind'], 'String');
        if (data.hasOwnProperty('dimensions')) obj.dimensions = _Dimensions.Dimensions1.constructFromObject(data['dimensions']);
        if (data.hasOwnProperty('position')) obj.position = _Position.Position1.constructFromObject(data['position']);
        if (data.hasOwnProperty('print_free_margins')) obj.printFreeMargins = _PrintFreeMargins.PrintFreeMargins1.constructFromObject(data['print_free_margins']);
      }
      return obj;
    }
  }]);
  return BoxModelSpineCreate;
}();
/**
 * @member {String} id
 */
exports.BoxModelSpineCreate = BoxModelSpineCreate;
BoxModelSpineCreate.prototype.id = undefined;

/**
 * Allowed values for the <code>kind</code> property.
 * @enum {String}
 * @readonly
 */
BoxModelSpineCreate.KindEnum = {
  /**
   * value: "spine"
   * @const
   */
  spine: "spine"
};
/**
 * @member {module:model/BoxModelSpineCreate.KindEnum} kind
 */
BoxModelSpineCreate.prototype.kind = undefined;

/**
 * @member {module:model/Dimensions1} dimensions
 */
BoxModelSpineCreate.prototype.dimensions = undefined;

/**
 * @member {module:model/Position1} position
 */
BoxModelSpineCreate.prototype.position = undefined;

/**
 * @member {module:model/PrintFreeMargins1} printFreeMargins
 */
BoxModelSpineCreate.prototype.printFreeMargins = undefined;

// Implement BoxModelPageChildrenCreate interface:
// Implement BoxModelSpreadChildrenCreate interface: