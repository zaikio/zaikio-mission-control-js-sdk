"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BoxModelPartLayoutChildrenCreate = void 0;
var _ApiClient = require("../ApiClient");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The BoxModelPartLayoutChildrenCreate model module.
 * @module model/BoxModelPartLayoutChildrenCreate
 * @version 1.0.0
 */
var BoxModelPartLayoutChildrenCreate = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>BoxModelPartLayoutChildrenCreate</code>.
   * @alias module:model/BoxModelPartLayoutChildrenCreate
   * @class
   */
  function BoxModelPartLayoutChildrenCreate() {
    _classCallCheck(this, BoxModelPartLayoutChildrenCreate);
  }

  /**
   * Constructs a <code>BoxModelPartLayoutChildrenCreate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BoxModelPartLayoutChildrenCreate} obj Optional instance to populate.
   * @return {module:model/BoxModelPartLayoutChildrenCreate} The populated <code>BoxModelPartLayoutChildrenCreate</code> instance.
   */
  _createClass(BoxModelPartLayoutChildrenCreate, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new BoxModelPartLayoutChildrenCreate();
      }
      return obj;
    }
  }]);
  return BoxModelPartLayoutChildrenCreate;
}();
exports.BoxModelPartLayoutChildrenCreate = BoxModelPartLayoutChildrenCreate;