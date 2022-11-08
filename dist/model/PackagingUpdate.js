"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PackagingUpdate = void 0;
var _ApiClient = require("../ApiClient");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The PackagingUpdate model module.
 * @module model/PackagingUpdate
 * @version 1.0.0
 */
var PackagingUpdate = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PackagingUpdate</code>.
   * @alias module:model/PackagingUpdate
   * @class
   */
  function PackagingUpdate() {
    _classCallCheck(this, PackagingUpdate);
  }

  /**
   * Constructs a <code>PackagingUpdate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PackagingUpdate} obj Optional instance to populate.
   * @return {module:model/PackagingUpdate} The populated <code>PackagingUpdate</code> instance.
   */
  _createClass(PackagingUpdate, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PackagingUpdate();
        if (data.hasOwnProperty('job_id')) obj.jobId = _ApiClient.ApiClient.convertToType(data['job_id'], 'String');
        if (data.hasOwnProperty('previous_packaging_id')) obj.previousPackagingId = _ApiClient.ApiClient.convertToType(data['previous_packaging_id'], 'String');
        if (data.hasOwnProperty('kind')) obj.kind = _ApiClient.ApiClient.convertToType(data['kind'], 'String');
        if (data.hasOwnProperty('amount')) obj.amount = _ApiClient.ApiClient.convertToType(data['amount'], 'Number');
      }
      return obj;
    }
  }]);
  return PackagingUpdate;
}();
/**
 * @member {String} jobId
 */
exports.PackagingUpdate = PackagingUpdate;
PackagingUpdate.prototype.jobId = undefined;

/**
 * The UUID of a packaging which has to be packed into this packaging.
 * @member {String} previousPackagingId
 */
PackagingUpdate.prototype.previousPackagingId = undefined;

/**
 * Allowed values for the <code>kind</code> property.
 * @enum {String}
 * @readonly
 */
PackagingUpdate.KindEnum = {
  /**
   * value: "addressing"
   * @const
   */
  addressing: "addressing",
  /**
   * value: "banding"
   * @const
   */
  banding: "banding",
  /**
   * value: "boxing"
   * @const
   */
  boxing: "boxing",
  /**
   * value: "counting"
   * @const
   */
  counting: "counting",
  /**
   * value: "filing"
   * @const
   */
  filing: "filing",
  /**
   * value: "franking"
   * @const
   */
  franking: "franking",
  /**
   * value: "shrink_wrapping"
   * @const
   */
  shrinkWrapping: "shrink_wrapping",
  /**
   * value: "wrapping"
   * @const
   */
  wrapping: "wrapping"
};
/**
 * The kind of the packaging
 * @member {module:model/PackagingUpdate.KindEnum} kind
 */
PackagingUpdate.prototype.kind = undefined;

/**
 * The amount of products to be packed in the chosen kind of the packaging.
 * @member {Number} amount
 */
PackagingUpdate.prototype.amount = undefined;