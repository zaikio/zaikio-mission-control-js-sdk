"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BoxModelSpine = void 0;
var _ApiClient = require("../ApiClient");
var _Dimensions = require("./Dimensions");
var _Position = require("./Position");
var _PrintFreeMargins = require("./PrintFreeMargins");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The BoxModelSpine model module.
 * @module model/BoxModelSpine
 * @version 1.0.0
 */
var BoxModelSpine = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>BoxModelSpine</code>.
   * @alias module:model/BoxModelSpine
   * @class
   * @param id {String} 
   * @param kind {module:model/BoxModelSpine.KindEnum} 
   * @param dimensions {module:model/Dimensions} 
   * @param position {module:model/Position} 
   * @param printFreeMargins {module:model/PrintFreeMargins} 
   */
  function BoxModelSpine(id, kind, dimensions, position, printFreeMargins) {
    _classCallCheck(this, BoxModelSpine);
    this.id = id;
    this.kind = kind;
    this.dimensions = dimensions;
    this.position = position;
    this.printFreeMargins = printFreeMargins;
  }

  /**
   * Constructs a <code>BoxModelSpine</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BoxModelSpine} obj Optional instance to populate.
   * @return {module:model/BoxModelSpine} The populated <code>BoxModelSpine</code> instance.
   */
  _createClass(BoxModelSpine, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new BoxModelSpine();
        if (data.hasOwnProperty('id')) obj.id = _ApiClient.ApiClient.convertToType(data['id'], 'String');
        if (data.hasOwnProperty('kind')) obj.kind = _ApiClient.ApiClient.convertToType(data['kind'], 'String');
        if (data.hasOwnProperty('dimensions')) obj.dimensions = _Dimensions.Dimensions.constructFromObject(data['dimensions']);
        if (data.hasOwnProperty('position')) obj.position = _Position.Position.constructFromObject(data['position']);
        if (data.hasOwnProperty('print_free_margins')) obj.printFreeMargins = _PrintFreeMargins.PrintFreeMargins.constructFromObject(data['print_free_margins']);
      }
      return obj;
    }
  }]);
  return BoxModelSpine;
}();
/**
 * @member {String} id
 */
exports.BoxModelSpine = BoxModelSpine;
BoxModelSpine.prototype.id = undefined;

/**
 * Allowed values for the <code>kind</code> property.
 * @enum {String}
 * @readonly
 */
BoxModelSpine.KindEnum = {
  /**
   * value: "spine"
   * @const
   */
  spine: "spine"
};
/**
 * @member {module:model/BoxModelSpine.KindEnum} kind
 */
BoxModelSpine.prototype.kind = undefined;

/**
 * @member {module:model/Dimensions} dimensions
 */
BoxModelSpine.prototype.dimensions = undefined;

/**
 * @member {module:model/Position} position
 */
BoxModelSpine.prototype.position = undefined;

/**
 * @member {module:model/PrintFreeMargins} printFreeMargins
 */
BoxModelSpine.prototype.printFreeMargins = undefined;

// Implement BoxModelPageChildren interface:
// Implement BoxModelSpreadChildren interface: