"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Rear = void 0;
var _ApiClient = require("../ApiClient");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The Rear model module.
 * @module model/Rear
 * @version 1.0.0
 */
var Rear = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Rear</code>.
   * The content of the rear of this item
   * @alias module:model/Rear
   * @class
   * @param orientation {module:model/Rear.OrientationEnum} 
   * @param pageNumber {Number} 
   * @param reference {String} 
   */
  function Rear(orientation, pageNumber, reference) {
    _classCallCheck(this, Rear);
    this.orientation = orientation;
    this.pageNumber = pageNumber;
    this.reference = reference;
  }

  /**
   * Constructs a <code>Rear</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Rear} obj Optional instance to populate.
   * @return {module:model/Rear} The populated <code>Rear</code> instance.
   */
  _createClass(Rear, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Rear();
        if (data.hasOwnProperty('orientation')) obj.orientation = _ApiClient.ApiClient.convertToType(data['orientation'], 'Number');
        if (data.hasOwnProperty('page_number')) obj.pageNumber = _ApiClient.ApiClient.convertToType(data['page_number'], 'Number');
        if (data.hasOwnProperty('reference')) obj.reference = _ApiClient.ApiClient.convertToType(data['reference'], 'String');
      }
      return obj;
    }
  }]);
  return Rear;
}();
/**
 * Allowed values for the <code>orientation</code> property.
 * @enum {Number}
 * @readonly
 */
exports.Rear = Rear;
Rear.OrientationEnum = {
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
 * @member {module:model/Rear.OrientationEnum} orientation
 */
Rear.prototype.orientation = undefined;

/**
 * @member {Number} pageNumber
 */
Rear.prototype.pageNumber = undefined;

/**
 * @member {String} reference
 */
Rear.prototype.reference = undefined;