"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BoxModelObjectUpdate = void 0;
var _ApiClient = require("../ApiClient");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The BoxModelObjectUpdate model module.
 * @module model/BoxModelObjectUpdate
 * @version 1.0.0
 */
var BoxModelObjectUpdate = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>BoxModelObjectUpdate</code>.
   * @alias module:model/BoxModelObjectUpdate
   * @class
   */
  function BoxModelObjectUpdate() {
    _classCallCheck(this, BoxModelObjectUpdate);
  }

  /**
   * Constructs a <code>BoxModelObjectUpdate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BoxModelObjectUpdate} obj Optional instance to populate.
   * @return {module:model/BoxModelObjectUpdate} The populated <code>BoxModelObjectUpdate</code> instance.
   */
  _createClass(BoxModelObjectUpdate, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new BoxModelObjectUpdate();
        if (data.hasOwnProperty('id')) obj.id = _ApiClient.ApiClient.convertToType(data['id'], 'String');
        if (data.hasOwnProperty('kind')) obj.kind = _ApiClient.ApiClient.convertToType(data['kind'], 'String');
      }
      return obj;
    }
  }]);
  return BoxModelObjectUpdate;
}();
/**
 * @member {String} id
 */
exports.BoxModelObjectUpdate = BoxModelObjectUpdate;
BoxModelObjectUpdate.prototype.id = undefined;

/**
 * Allowed values for the <code>kind</code> property.
 * @enum {String}
 * @readonly
 */
BoxModelObjectUpdate.KindEnum = {
  /**
   * value: "object"
   * @const
   */
  _object: "object"
};
/**
 * @member {module:model/BoxModelObjectUpdate.KindEnum} kind
 */
BoxModelObjectUpdate.prototype.kind = undefined;

// Implement BoxModelIntermediateLayoutChildrenUpdate interface:
// Implement BoxModelPartLayoutChildrenUpdate interface: