"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ContactCreate = void 0;
var _ApiClient = require("../ApiClient");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The ContactCreate model module.
 * @module model/ContactCreate
 * @version 1.0.0
 */
var ContactCreate = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ContactCreate</code>.
   * @alias module:model/ContactCreate
   * @class
   */
  function ContactCreate() {
    _classCallCheck(this, ContactCreate);
  }

  /**
   * Constructs a <code>ContactCreate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ContactCreate} obj Optional instance to populate.
   * @return {module:model/ContactCreate} The populated <code>ContactCreate</code> instance.
   */
  _createClass(ContactCreate, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ContactCreate();
        if (data.hasOwnProperty('display_name')) obj.displayName = _ApiClient.ApiClient.convertToType(data['display_name'], 'String');
        if (data.hasOwnProperty('phone')) obj.phone = _ApiClient.ApiClient.convertToType(data['phone'], 'String');
        if (data.hasOwnProperty('email')) obj.email = _ApiClient.ApiClient.convertToType(data['email'], 'String');
        if (data.hasOwnProperty('role')) obj.role = _ApiClient.ApiClient.convertToType(data['role'], 'String');
      }
      return obj;
    }
  }]);
  return ContactCreate;
}();
/**
 * The name of this contact to be displayed
 * @member {String} displayName
 */
exports.ContactCreate = ContactCreate;
ContactCreate.prototype.displayName = undefined;

/**
 * A phone number for this contact
 * @member {String} phone
 */
ContactCreate.prototype.phone = undefined;

/**
 * An email address for this contact
 * @member {String} email
 */
ContactCreate.prototype.email = undefined;

/**
 * Allowed values for the <code>role</code> property.
 * @enum {String}
 * @readonly
 */
ContactCreate.RoleEnum = {
  /**
   * value: "customer_contact"
   * @const
   */
  customerContact: "customer_contact",
  /**
   * value: "consultant"
   * @const
   */
  consultant: "consultant"
};
/**
 * The role of this contact in relation to the order on which it is assigned
 * @member {module:model/ContactCreate.RoleEnum} role
 */
ContactCreate.prototype.role = undefined;