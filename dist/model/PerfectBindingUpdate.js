"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PerfectBindingUpdate = void 0;
var _ApiClient = require("../ApiClient");
var _FileReferenceUpdate = require("./FileReferenceUpdate");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The PerfectBindingUpdate model module.
 * @module model/PerfectBindingUpdate
 * @version 1.0.0
 */
var PerfectBindingUpdate = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PerfectBindingUpdate</code>.
   * @alias module:model/PerfectBindingUpdate
   * @class
   */
  function PerfectBindingUpdate() {
    _classCallCheck(this, PerfectBindingUpdate);
  }

  /**
   * Constructs a <code>PerfectBindingUpdate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PerfectBindingUpdate} obj Optional instance to populate.
   * @return {module:model/PerfectBindingUpdate} The populated <code>PerfectBindingUpdate</code> instance.
   */
  _createClass(PerfectBindingUpdate, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PerfectBindingUpdate();
        if (data.hasOwnProperty('file_references')) obj.fileReferences = _ApiClient.ApiClient.convertToType(data['file_references'], [_FileReferenceUpdate.FileReferenceUpdate]);
        if (data.hasOwnProperty('kind')) obj.kind = _ApiClient.ApiClient.convertToType(data['kind'], 'String');
      }
      return obj;
    }
  }]);
  return PerfectBindingUpdate;
}();
/**
 * @member {Array.<module:model/FileReferenceUpdate>} fileReferences
 */
exports.PerfectBindingUpdate = PerfectBindingUpdate;
PerfectBindingUpdate.prototype.fileReferences = undefined;

/**
 * Allowed values for the <code>kind</code> property.
 * @enum {String}
 * @readonly
 */
PerfectBindingUpdate.KindEnum = {
  /**
   * value: "perfect_binding"
   * @const
   */
  perfectBinding: "perfect_binding"
};
/**
 * The kind of the finishing. Perfect binding - also known as adhesive binding - uses various types of glue to bind collected pages (the content) to the spine of a book, magazine or brochure. This finishing must span across several parts to connect them together. PerfectBinding does not have any additional properties, but the type and amount of glue used can be set via the MaterialRequirements.
 * @member {module:model/PerfectBindingUpdate.KindEnum} kind
 */
PerfectBindingUpdate.prototype.kind = undefined;

// Implement FinishingUpdate interface: