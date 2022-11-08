"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Packaging = void 0;
var _ApiClient = require("../ApiClient");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The Packaging model module.
 * @module model/Packaging
 * @version 1.0.0
 */
var Packaging = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Packaging</code>.
   * @alias module:model/Packaging
   * @class
   * @param id {String} 
   * @param createdAt {Date} 
   * @param updatedAt {Date} 
   * @param jobId {String} 
   * @param previousPackagingId {String} The UUID of a packaging which has to be packed into this packaging.
   * @param kind {module:model/Packaging.KindEnum} The kind of the packaging
   * @param amount {Number} The amount of products to be packed in the chosen kind of the packaging.
   */
  function Packaging(id, createdAt, updatedAt, jobId, previousPackagingId, kind, amount) {
    _classCallCheck(this, Packaging);
    this.id = id;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.jobId = jobId;
    this.previousPackagingId = previousPackagingId;
    this.kind = kind;
    this.amount = amount;
  }

  /**
   * Constructs a <code>Packaging</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Packaging} obj Optional instance to populate.
   * @return {module:model/Packaging} The populated <code>Packaging</code> instance.
   */
  _createClass(Packaging, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Packaging();
        if (data.hasOwnProperty('id')) obj.id = _ApiClient.ApiClient.convertToType(data['id'], 'String');
        if (data.hasOwnProperty('created_at')) obj.createdAt = _ApiClient.ApiClient.convertToType(data['created_at'], 'Date');
        if (data.hasOwnProperty('updated_at')) obj.updatedAt = _ApiClient.ApiClient.convertToType(data['updated_at'], 'Date');
        if (data.hasOwnProperty('job_id')) obj.jobId = _ApiClient.ApiClient.convertToType(data['job_id'], 'String');
        if (data.hasOwnProperty('previous_packaging_id')) obj.previousPackagingId = _ApiClient.ApiClient.convertToType(data['previous_packaging_id'], 'String');
        if (data.hasOwnProperty('kind')) obj.kind = _ApiClient.ApiClient.convertToType(data['kind'], 'String');
        if (data.hasOwnProperty('amount')) obj.amount = _ApiClient.ApiClient.convertToType(data['amount'], 'Number');
      }
      return obj;
    }
  }]);
  return Packaging;
}();
/**
 * @member {String} id
 */
exports.Packaging = Packaging;
Packaging.prototype.id = undefined;

/**
 * @member {Date} createdAt
 */
Packaging.prototype.createdAt = undefined;

/**
 * @member {Date} updatedAt
 */
Packaging.prototype.updatedAt = undefined;

/**
 * @member {String} jobId
 */
Packaging.prototype.jobId = undefined;

/**
 * The UUID of a packaging which has to be packed into this packaging.
 * @member {String} previousPackagingId
 */
Packaging.prototype.previousPackagingId = undefined;

/**
 * Allowed values for the <code>kind</code> property.
 * @enum {String}
 * @readonly
 */
Packaging.KindEnum = {
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
 * @member {module:model/Packaging.KindEnum} kind
 */
Packaging.prototype.kind = undefined;

/**
 * The amount of products to be packed in the chosen kind of the packaging.
 * @member {Number} amount
 */
Packaging.prototype.amount = undefined;