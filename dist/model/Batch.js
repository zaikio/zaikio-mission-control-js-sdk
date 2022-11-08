"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Batch = void 0;
var _ApiClient = require("../ApiClient");
var _BatchMember = require("./BatchMember");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The Batch model module.
 * @module model/Batch
 * @version 1.0.0
 */
var Batch = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Batch</code>.
   * A Batch is a container for grouping together the production of Parts with similar qualities, such as the substrate or finishings. A Batch can also be used to group together production of Parts from different Products entirely - this can also be known as a Gang.
   * @alias module:model/Batch
   * @class
   * @param id {String} 
   * @param createdAt {Date} 
   * @param updatedAt {Date} 
   * @param organizationId {String} 
   * @param permittedFinishings {Array.<module:model/Batch.PermittedFinishingsEnum>} A list of finishings that could be batched together here. If a finishing is not provided in this list then production planning/batching software will not attempt to optimize for those finishings of the batched parts. This does not mean that they cannot be produced as a batch, but the best outcomes should not be expected.
   * @param members {Array.<module:model/BatchMember>} 
   * @param batchSignature {Object} 
   */
  function Batch(id, createdAt, updatedAt, organizationId, permittedFinishings, members, batchSignature) {
    _classCallCheck(this, Batch);
    this.id = id;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.organizationId = organizationId;
    this.permittedFinishings = permittedFinishings;
    this.members = members;
    this.batchSignature = batchSignature;
  }

  /**
   * Constructs a <code>Batch</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Batch} obj Optional instance to populate.
   * @return {module:model/Batch} The populated <code>Batch</code> instance.
   */
  _createClass(Batch, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Batch();
        if (data.hasOwnProperty('id')) obj.id = _ApiClient.ApiClient.convertToType(data['id'], 'String');
        if (data.hasOwnProperty('created_at')) obj.createdAt = _ApiClient.ApiClient.convertToType(data['created_at'], 'Date');
        if (data.hasOwnProperty('updated_at')) obj.updatedAt = _ApiClient.ApiClient.convertToType(data['updated_at'], 'Date');
        if (data.hasOwnProperty('organization_id')) obj.organizationId = _ApiClient.ApiClient.convertToType(data['organization_id'], 'String');
        if (data.hasOwnProperty('permitted_finishings')) obj.permittedFinishings = _ApiClient.ApiClient.convertToType(data['permitted_finishings'], ['String']);
        if (data.hasOwnProperty('members')) obj.members = _ApiClient.ApiClient.convertToType(data['members'], [_BatchMember.BatchMember]);
        if (data.hasOwnProperty('batch_signature')) obj.batchSignature = _ApiClient.ApiClient.convertToType(data['batch_signature'], Object);
      }
      return obj;
    }
  }]);
  return Batch;
}();
/**
 * @member {String} id
 */
exports.Batch = Batch;
Batch.prototype.id = undefined;

/**
 * @member {Date} createdAt
 */
Batch.prototype.createdAt = undefined;

/**
 * @member {Date} updatedAt
 */
Batch.prototype.updatedAt = undefined;

/**
 * @member {String} organizationId
 */
Batch.prototype.organizationId = undefined;

/**
 * Allowed values for the <code>permittedFinishings</code> property.
 * @enum {String}
 * @readonly
 */
Batch.PermittedFinishingsEnum = {
  /**
   * value: "comb_binding"
   * @const
   */
  combBinding: "comb_binding",
  /**
   * value: "embossing"
   * @const
   */
  embossing: "embossing",
  /**
   * value: "foil_stamp"
   * @const
   */
  foilStamp: "foil_stamp",
  /**
   * value: "glue"
   * @const
   */
  glue: "glue",
  /**
   * value: "head_band"
   * @const
   */
  headBand: "head_band",
  /**
   * value: "spiral_binding"
   * @const
   */
  spiralBinding: "spiral_binding",
  /**
   * value: "strip_binding"
   * @const
   */
  stripBinding: "strip_binding",
  /**
   * value: "engraving"
   * @const
   */
  engraving: "engraving",
  /**
   * value: "hole"
   * @const
   */
  hole: "hole",
  /**
   * value: "lamination"
   * @const
   */
  lamination: "lamination",
  /**
   * value: "perforation"
   * @const
   */
  perforation: "perforation",
  /**
   * value: "perfect_binding"
   * @const
   */
  perfectBinding: "perfect_binding",
  /**
   * value: "ring_binding"
   * @const
   */
  ringBinding: "ring_binding",
  /**
   * value: "saddle_stitch"
   * @const
   */
  saddleStitch: "saddle_stitch",
  /**
   * value: "thread_sewing"
   * @const
   */
  threadSewing: "thread_sewing"
};
/**
 * A list of finishings that could be batched together here. If a finishing is not provided in this list then production planning/batching software will not attempt to optimize for those finishings of the batched parts. This does not mean that they cannot be produced as a batch, but the best outcomes should not be expected.
 * @member {Array.<module:model/Batch.PermittedFinishingsEnum>} permittedFinishings
 */
Batch.prototype.permittedFinishings = undefined;

/**
 * @member {Array.<module:model/BatchMember>} members
 */
Batch.prototype.members = undefined;

/**
 * @member {Object} batchSignature
 */
Batch.prototype.batchSignature = undefined;