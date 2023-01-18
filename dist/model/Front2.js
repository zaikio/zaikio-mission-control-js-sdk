"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Front2 = void 0;
var _ApiClient = require("../ApiClient");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The Front2 model module.
 * @module model/Front2
 * @version 1.0.0
 */
var Front2 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Front2</code>.
   * The content of the front of this item
   * @alias module:model/Front2
   * @class
   * @param orientation {module:model/Front2.OrientationEnum} 
   * @param pageNumber {Number} 
   * @param reference {String} 
   */
  function Front2(orientation, pageNumber, reference) {
    _classCallCheck(this, Front2);
    this.orientation = orientation;
    this.pageNumber = pageNumber;
    this.reference = reference;
  }

  /**
   * Constructs a <code>Front2</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Front2} obj Optional instance to populate.
   * @return {module:model/Front2} The populated <code>Front2</code> instance.
   */
  _createClass(Front2, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Front2();
        if (data.hasOwnProperty('orientation')) obj.orientation = _ApiClient.ApiClient.convertToType(data['orientation'], 'Number');
        if (data.hasOwnProperty('page_number')) obj.pageNumber = _ApiClient.ApiClient.convertToType(data['page_number'], 'Number');
        if (data.hasOwnProperty('reference')) obj.reference = _ApiClient.ApiClient.convertToType(data['reference'], 'String');
      }
      return obj;
    }
  }]);
  return Front2;
}();
/**
 * Allowed values for the <code>orientation</code> property.
 * @enum {Number}
 * @readonly
 */
exports.Front2 = Front2;
Front2.OrientationEnum = {
  /**
   * value: 0
   * @const
   */
  _0: 0,
  /**
   * value: 90
   * @const
   */
  _90: 90,
  /**
   * value: 180
   * @const
   */
  _180: 180,
  /**
   * value: 270
   * @const
   */
  _270: 270
};
/**
 * @member {module:model/Front2.OrientationEnum} orientation
 */
Front2.prototype.orientation = undefined;

/**
 * @member {Number} pageNumber
 */
Front2.prototype.pageNumber = undefined;

/**
 * @member {String} reference
 */
Front2.prototype.reference = undefined;