"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BatchUpdate = void 0;
var _ApiClient = require("../ApiClient");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The BatchUpdate model module.
 * @module model/BatchUpdate
 * @version 1.0.0
 */
var BatchUpdate = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>BatchUpdate</code>.
   * A Batch is a container for grouping together the production of Parts with similar qualities, such as the substrate or finishings. A Batch can also be used to group together production of Parts from different Products entirely - this can also be known as a Gang.
   * @alias module:model/BatchUpdate
   * @class
   */
  function BatchUpdate() {
    _classCallCheck(this, BatchUpdate);
  }

  /**
   * Constructs a <code>BatchUpdate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BatchUpdate} obj Optional instance to populate.
   * @return {module:model/BatchUpdate} The populated <code>BatchUpdate</code> instance.
   */
  _createClass(BatchUpdate, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new BatchUpdate();
        if (data.hasOwnProperty('organization_id')) obj.organizationId = _ApiClient.ApiClient.convertToType(data['organization_id'], 'String');
        if (data.hasOwnProperty('permitted_finishings')) obj.permittedFinishings = _ApiClient.ApiClient.convertToType(data['permitted_finishings'], ['String']);
        if (data.hasOwnProperty('batch_signature')) obj.batchSignature = _ApiClient.ApiClient.convertToType(data['batch_signature'], Object);
      }
      return obj;
    }
  }]);
  return BatchUpdate;
}();
/**
 * @member {String} organizationId
 */
exports.BatchUpdate = BatchUpdate;
BatchUpdate.prototype.organizationId = undefined;

/**
 * Allowed values for the <code>permittedFinishings</code> property.
 * @enum {String}
 * @readonly
 */
BatchUpdate.PermittedFinishingsEnum = {
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
 * @member {Array.<module:model/BatchUpdate.PermittedFinishingsEnum>} permittedFinishings
 */
BatchUpdate.prototype.permittedFinishings = undefined;

/**
 * @member {Object} batchSignature
 */
BatchUpdate.prototype.batchSignature = undefined;