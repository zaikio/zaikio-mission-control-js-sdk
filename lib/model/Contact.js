"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Contact = void 0;
var _ApiClient = require("../ApiClient");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The Contact model module.
 * @module model/Contact
 * @version 1.0.0
 */
var Contact = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Contact</code>.
   * @alias module:model/Contact
   * @class
   * @param id {String} 
   * @param createdAt {Date} 
   * @param updatedAt {Date} 
   * @param displayName {String} The name of this contact to be displayed
   * @param phone {String} A phone number for this contact
   * @param email {String} An email address for this contact
   * @param role {module:model/Contact.RoleEnum} The role of this contact in relation to the order on which it is assigned
   */
  function Contact(id, createdAt, updatedAt, displayName, phone, email, role) {
    _classCallCheck(this, Contact);
    this.id = id;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.displayName = displayName;
    this.phone = phone;
    this.email = email;
    this.role = role;
  }

  /**
   * Constructs a <code>Contact</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Contact} obj Optional instance to populate.
   * @return {module:model/Contact} The populated <code>Contact</code> instance.
   */
  _createClass(Contact, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Contact();
        if (data.hasOwnProperty('id')) obj.id = _ApiClient.ApiClient.convertToType(data['id'], 'String');
        if (data.hasOwnProperty('created_at')) obj.createdAt = _ApiClient.ApiClient.convertToType(data['created_at'], 'Date');
        if (data.hasOwnProperty('updated_at')) obj.updatedAt = _ApiClient.ApiClient.convertToType(data['updated_at'], 'Date');
        if (data.hasOwnProperty('display_name')) obj.displayName = _ApiClient.ApiClient.convertToType(data['display_name'], 'String');
        if (data.hasOwnProperty('phone')) obj.phone = _ApiClient.ApiClient.convertToType(data['phone'], 'String');
        if (data.hasOwnProperty('email')) obj.email = _ApiClient.ApiClient.convertToType(data['email'], 'String');
        if (data.hasOwnProperty('role')) obj.role = _ApiClient.ApiClient.convertToType(data['role'], 'String');
      }
      return obj;
    }
  }]);
  return Contact;
}();
/**
 * @member {String} id
 */
exports.Contact = Contact;
Contact.prototype.id = undefined;

/**
 * @member {Date} createdAt
 */
Contact.prototype.createdAt = undefined;

/**
 * @member {Date} updatedAt
 */
Contact.prototype.updatedAt = undefined;

/**
 * The name of this contact to be displayed
 * @member {String} displayName
 */
Contact.prototype.displayName = undefined;

/**
 * A phone number for this contact
 * @member {String} phone
 */
Contact.prototype.phone = undefined;

/**
 * An email address for this contact
 * @member {String} email
 */
Contact.prototype.email = undefined;

/**
 * Allowed values for the <code>role</code> property.
 * @enum {String}
 * @readonly
 */
Contact.RoleEnum = {
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
 * @member {module:model/Contact.RoleEnum} role
 */
Contact.prototype.role = undefined;