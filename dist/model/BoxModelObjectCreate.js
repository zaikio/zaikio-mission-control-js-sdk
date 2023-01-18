"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BoxModelObjectCreate = void 0;
var _ApiClient = require("../ApiClient");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The BoxModelObjectCreate model module.
 * @module model/BoxModelObjectCreate
 * @version 1.0.0
 */
var BoxModelObjectCreate = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>BoxModelObjectCreate</code>.
   * @alias module:model/BoxModelObjectCreate
   * @class
   */
  function BoxModelObjectCreate() {
    _classCallCheck(this, BoxModelObjectCreate);
  }

  /**
   * Constructs a <code>BoxModelObjectCreate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BoxModelObjectCreate} obj Optional instance to populate.
   * @return {module:model/BoxModelObjectCreate} The populated <code>BoxModelObjectCreate</code> instance.
   */
  _createClass(BoxModelObjectCreate, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new BoxModelObjectCreate();
        if (data.hasOwnProperty('id')) obj.id = _ApiClient.ApiClient.convertToType(data['id'], 'String');
        if (data.hasOwnProperty('kind')) obj.kind = _ApiClient.ApiClient.convertToType(data['kind'], 'String');
      }
      return obj;
    }
  }]);
  return BoxModelObjectCreate;
}();
/**
 * @member {String} id
 */
exports.BoxModelObjectCreate = BoxModelObjectCreate;
BoxModelObjectCreate.prototype.id = undefined;

/**
 * Allowed values for the <code>kind</code> property.
 * @enum {String}
 * @readonly
 */
BoxModelObjectCreate.KindEnum = {
  /**
   * value: "object"
   * @const
   */
  _object: "object"
};
/**
 * @member {module:model/BoxModelObjectCreate.KindEnum} kind
 */
BoxModelObjectCreate.prototype.kind = undefined;

// Implement BoxModelIntermediateLayoutChildrenCreate interface:
// Implement BoxModelPartLayoutChildrenCreate interface: