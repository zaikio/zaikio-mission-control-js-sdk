"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PackagingCreate = void 0;
var _ApiClient = require("../ApiClient");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The PackagingCreate model module.
 * @module model/PackagingCreate
 * @version 1.0.0
 */
var PackagingCreate = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PackagingCreate</code>.
   * @alias module:model/PackagingCreate
   * @class
   */
  function PackagingCreate() {
    _classCallCheck(this, PackagingCreate);
  }

  /**
   * Constructs a <code>PackagingCreate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PackagingCreate} obj Optional instance to populate.
   * @return {module:model/PackagingCreate} The populated <code>PackagingCreate</code> instance.
   */
  _createClass(PackagingCreate, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PackagingCreate();
        if (data.hasOwnProperty('job_id')) obj.jobId = _ApiClient.ApiClient.convertToType(data['job_id'], 'String');
        if (data.hasOwnProperty('previous_packaging_id')) obj.previousPackagingId = _ApiClient.ApiClient.convertToType(data['previous_packaging_id'], 'String');
        if (data.hasOwnProperty('kind')) obj.kind = _ApiClient.ApiClient.convertToType(data['kind'], 'String');
        if (data.hasOwnProperty('amount')) obj.amount = _ApiClient.ApiClient.convertToType(data['amount'], 'Number');
      }
      return obj;
    }
  }]);
  return PackagingCreate;
}();
/**
 * @member {String} jobId
 */
exports.PackagingCreate = PackagingCreate;
PackagingCreate.prototype.jobId = undefined;

/**
 * The UUID of a packaging which has to be packed into this packaging.
 * @member {String} previousPackagingId
 */
PackagingCreate.prototype.previousPackagingId = undefined;

/**
 * Allowed values for the <code>kind</code> property.
 * @enum {String}
 * @readonly
 */
PackagingCreate.KindEnum = {
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
 * @member {module:model/PackagingCreate.KindEnum} kind
 */
PackagingCreate.prototype.kind = undefined;

/**
 * The amount of products to be packed in the chosen kind of the packaging.
 * @member {Number} amount
 */
PackagingCreate.prototype.amount = undefined;