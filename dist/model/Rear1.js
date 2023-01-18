"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Rear1 = void 0;
var _ApiClient = require("../ApiClient");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The Rear1 model module.
 * @module model/Rear1
 * @version 1.0.0
 */
var Rear1 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Rear1</code>.
   * The content of the rear of this item
   * @alias module:model/Rear1
   * @class
   */
  function Rear1() {
    _classCallCheck(this, Rear1);
  }

  /**
   * Constructs a <code>Rear1</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Rear1} obj Optional instance to populate.
   * @return {module:model/Rear1} The populated <code>Rear1</code> instance.
   */
  _createClass(Rear1, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Rear1();
        if (data.hasOwnProperty('orientation')) obj.orientation = _ApiClient.ApiClient.convertToType(data['orientation'], 'Number');
        if (data.hasOwnProperty('page_number')) obj.pageNumber = _ApiClient.ApiClient.convertToType(data['page_number'], 'Number');
        if (data.hasOwnProperty('reference')) obj.reference = _ApiClient.ApiClient.convertToType(data['reference'], 'String');
      }
      return obj;
    }
  }]);
  return Rear1;
}();
/**
 * Allowed values for the <code>orientation</code> property.
 * @enum {Number}
 * @readonly
 */
exports.Rear1 = Rear1;
Rear1.OrientationEnum = {
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
 * @member {module:model/Rear1.OrientationEnum} orientation
 */
Rear1.prototype.orientation = undefined;

/**
 * @member {Number} pageNumber
 */
Rear1.prototype.pageNumber = undefined;

/**
 * @member {String} reference
 */
Rear1.prototype.reference = undefined;