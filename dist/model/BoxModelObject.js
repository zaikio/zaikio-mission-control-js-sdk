"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BoxModelObject = void 0;
var _ApiClient = require("../ApiClient");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The BoxModelObject model module.
 * @module model/BoxModelObject
 * @version 1.0.0
 */
var BoxModelObject = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>BoxModelObject</code>.
   * @alias module:model/BoxModelObject
   * @class
   * @param id {String} 
   * @param kind {module:model/BoxModelObject.KindEnum} 
   */
  function BoxModelObject(id, kind) {
    _classCallCheck(this, BoxModelObject);
    this.id = id;
    this.kind = kind;
  }

  /**
   * Constructs a <code>BoxModelObject</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BoxModelObject} obj Optional instance to populate.
   * @return {module:model/BoxModelObject} The populated <code>BoxModelObject</code> instance.
   */
  _createClass(BoxModelObject, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new BoxModelObject();
        if (data.hasOwnProperty('id')) obj.id = _ApiClient.ApiClient.convertToType(data['id'], 'String');
        if (data.hasOwnProperty('kind')) obj.kind = _ApiClient.ApiClient.convertToType(data['kind'], 'String');
      }
      return obj;
    }
  }]);
  return BoxModelObject;
}();
/**
 * @member {String} id
 */
exports.BoxModelObject = BoxModelObject;
BoxModelObject.prototype.id = undefined;

/**
 * Allowed values for the <code>kind</code> property.
 * @enum {String}
 * @readonly
 */
BoxModelObject.KindEnum = {
  /**
   * value: "object"
   * @const
   */
  _object: "object"
};
/**
 * @member {module:model/BoxModelObject.KindEnum} kind
 */
BoxModelObject.prototype.kind = undefined;

// Implement BoxModelIntermediateLayoutChildren interface:
// Implement BoxModelPartLayoutChildren interface: