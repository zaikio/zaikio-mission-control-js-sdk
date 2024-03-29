"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BoxModelPartLayoutChildrenUpdate = void 0;
var _ApiClient = require("../ApiClient");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The BoxModelPartLayoutChildrenUpdate model module.
 * @module model/BoxModelPartLayoutChildrenUpdate
 * @version 1.0.0
 */
var BoxModelPartLayoutChildrenUpdate = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>BoxModelPartLayoutChildrenUpdate</code>.
   * @alias module:model/BoxModelPartLayoutChildrenUpdate
   * @class
   */
  function BoxModelPartLayoutChildrenUpdate() {
    _classCallCheck(this, BoxModelPartLayoutChildrenUpdate);
  }

  /**
   * Constructs a <code>BoxModelPartLayoutChildrenUpdate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BoxModelPartLayoutChildrenUpdate} obj Optional instance to populate.
   * @return {module:model/BoxModelPartLayoutChildrenUpdate} The populated <code>BoxModelPartLayoutChildrenUpdate</code> instance.
   */
  _createClass(BoxModelPartLayoutChildrenUpdate, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new BoxModelPartLayoutChildrenUpdate();
      }
      return obj;
    }
  }]);
  return BoxModelPartLayoutChildrenUpdate;
}();
exports.BoxModelPartLayoutChildrenUpdate = BoxModelPartLayoutChildrenUpdate;