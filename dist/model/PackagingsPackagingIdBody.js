"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PackagingsPackagingIdBody = void 0;
var _ApiClient = require("../ApiClient");
var _PackagingUpdate = require("./PackagingUpdate");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The PackagingsPackagingIdBody model module.
 * @module model/PackagingsPackagingIdBody
 * @version 1.0.0
 */
var PackagingsPackagingIdBody = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PackagingsPackagingIdBody</code>.
   * @alias module:model/PackagingsPackagingIdBody
   * @class
   * @param packaging {module:model/PackagingUpdate} 
   */
  function PackagingsPackagingIdBody(packaging) {
    _classCallCheck(this, PackagingsPackagingIdBody);
    this.packaging = packaging;
  }

  /**
   * Constructs a <code>PackagingsPackagingIdBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PackagingsPackagingIdBody} obj Optional instance to populate.
   * @return {module:model/PackagingsPackagingIdBody} The populated <code>PackagingsPackagingIdBody</code> instance.
   */
  _createClass(PackagingsPackagingIdBody, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PackagingsPackagingIdBody();
        if (data.hasOwnProperty('packaging')) obj.packaging = _PackagingUpdate.PackagingUpdate.constructFromObject(data['packaging']);
      }
      return obj;
    }
  }]);
  return PackagingsPackagingIdBody;
}();
/**
 * @member {module:model/PackagingUpdate} packaging
 */
exports.PackagingsPackagingIdBody = PackagingsPackagingIdBody;
PackagingsPackagingIdBody.prototype.packaging = undefined;