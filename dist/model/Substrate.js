"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Substrate = void 0;
var _ApiClient = require("../ApiClient");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The Substrate model module.
 * @module model/Substrate
 * @version 1.0.0
 */
var Substrate = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Substrate</code>.
   * @alias module:model/Substrate
   * @class
   * @param id {String} 
   * @param createdAt {Date} 
   * @param updatedAt {Date} 
   * @param foo {String} TODO
   */
  function Substrate(id, createdAt, updatedAt, foo) {
    _classCallCheck(this, Substrate);
    this.id = id;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.foo = foo;
  }

  /**
   * Constructs a <code>Substrate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Substrate} obj Optional instance to populate.
   * @return {module:model/Substrate} The populated <code>Substrate</code> instance.
   */
  _createClass(Substrate, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Substrate();
        if (data.hasOwnProperty('id')) obj.id = _ApiClient.ApiClient.convertToType(data['id'], 'String');
        if (data.hasOwnProperty('created_at')) obj.createdAt = _ApiClient.ApiClient.convertToType(data['created_at'], 'Date');
        if (data.hasOwnProperty('updated_at')) obj.updatedAt = _ApiClient.ApiClient.convertToType(data['updated_at'], 'Date');
        if (data.hasOwnProperty('foo')) obj.foo = _ApiClient.ApiClient.convertToType(data['foo'], 'String');
      }
      return obj;
    }
  }]);
  return Substrate;
}();
/**
 * @member {String} id
 */
exports.Substrate = Substrate;
Substrate.prototype.id = undefined;

/**
 * @member {Date} createdAt
 */
Substrate.prototype.createdAt = undefined;

/**
 * @member {Date} updatedAt
 */
Substrate.prototype.updatedAt = undefined;

/**
 * TODO
 * @member {String} foo
 */
Substrate.prototype.foo = undefined;

// Implement OneOfImposingSubstrate interface: