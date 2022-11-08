"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AddressCreate = void 0;
var _ApiClient = require("../ApiClient");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The AddressCreate model module.
 * @module model/AddressCreate
 * @version 1.0.0
 */
var AddressCreate = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>AddressCreate</code>.
   * An address represents a physical, real world location. These can be created through two mechanisms:  1. Easy Interface - simple provide &#x60;addressee&#x60; and &#x60;kind&#x60; attributes, along with a free-text    &#x60;text&#x60; field and we will try our best to geocode this to a fully populated record. 2. Full Interface - provide all attributes if present to have full control over the Address    you are creating. We will still attempt to populate &#x60;location&#x60; co-ordinates if not provided. 
   * @alias module:model/AddressCreate
   * @class
   * @param kind {module:model/AddressCreate.KindEnum} Set the kind of Address this represents. This value can only be set when the address is created. To change the value, remove the address and create a replacement one with the desired new value.
   */
  function AddressCreate(kind) {
    _classCallCheck(this, AddressCreate);
    this.kind = kind;
  }

  /**
   * Constructs a <code>AddressCreate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AddressCreate} obj Optional instance to populate.
   * @return {module:model/AddressCreate} The populated <code>AddressCreate</code> instance.
   */
  _createClass(AddressCreate, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new AddressCreate();
        if (data.hasOwnProperty('text')) obj.text = _ApiClient.ApiClient.convertToType(data['text'], 'String');
        if (data.hasOwnProperty('addressee')) obj.addressee = _ApiClient.ApiClient.convertToType(data['addressee'], 'String');
        if (data.hasOwnProperty('street')) obj.street = _ApiClient.ApiClient.convertToType(data['street'], 'String');
        if (data.hasOwnProperty('addition')) obj.addition = _ApiClient.ApiClient.convertToType(data['addition'], 'String');
        if (data.hasOwnProperty('number')) obj._number = _ApiClient.ApiClient.convertToType(data['number'], 'String');
        if (data.hasOwnProperty('zip_code')) obj.zipCode = _ApiClient.ApiClient.convertToType(data['zip_code'], 'String');
        if (data.hasOwnProperty('town')) obj.town = _ApiClient.ApiClient.convertToType(data['town'], 'String');
        if (data.hasOwnProperty('state')) obj.state = _ApiClient.ApiClient.convertToType(data['state'], 'String');
        if (data.hasOwnProperty('country_code')) obj.countryCode = _ApiClient.ApiClient.convertToType(data['country_code'], 'String');
        if (data.hasOwnProperty('kind')) obj.kind = _ApiClient.ApiClient.convertToType(data['kind'], 'String');
        if (data.hasOwnProperty('location')) obj.location = _ApiClient.ApiClient.convertToType(data['location'], ['Number']);
      }
      return obj;
    }
  }]);
  return AddressCreate;
}();
/**
 * @member {String} text
 */
exports.AddressCreate = AddressCreate;
AddressCreate.prototype.text = undefined;

/**
 * @member {String} addressee
 */
AddressCreate.prototype.addressee = undefined;

/**
 * @member {String} street
 */
AddressCreate.prototype.street = undefined;

/**
 * @member {String} addition
 */
AddressCreate.prototype.addition = undefined;

/**
 * @member {String} _number
 */
AddressCreate.prototype._number = undefined;

/**
 * @member {String} zipCode
 */
AddressCreate.prototype.zipCode = undefined;

/**
 * @member {String} town
 */
AddressCreate.prototype.town = undefined;

/**
 * @member {String} state
 */
AddressCreate.prototype.state = undefined;

/**
 * Allowed values for the <code>countryCode</code> property.
 * @enum {String}
 * @readonly
 */
AddressCreate.CountryCodeEnum = {
  /**
   * value: "DE"
   * @const
   */
  DE: "DE",
  /**
   * value: "GB"
   * @const
   */
  GB: "GB",
  /**
   * value: "CH"
   * @const
   */
  CH: "CH",
  /**
   * value: "AT"
   * @const
   */
  AT: "AT",
  /**
   * value: "AU"
   * @const
   */
  AU: "AU",
  /**
   * value: "LV"
   * @const
   */
  LV: "LV",
  /**
   * value: "NL"
   * @const
   */
  NL: "NL",
  /**
   * value: "FR"
   * @const
   */
  FR: "FR",
  /**
   * value: "BE"
   * @const
   */
  BE: "BE",
  /**
   * value: "BG"
   * @const
   */
  BG: "BG",
  /**
   * value: "DK"
   * @const
   */
  DK: "DK",
  /**
   * value: "EE"
   * @const
   */
  EE: "EE",
  /**
   * value: "FI"
   * @const
   */
  FI: "FI",
  /**
   * value: "GR"
   * @const
   */
  GR: "GR",
  /**
   * value: "IE"
   * @const
   */
  IE: "IE",
  /**
   * value: "IT"
   * @const
   */
  IT: "IT",
  /**
   * value: "HR"
   * @const
   */
  HR: "HR",
  /**
   * value: "LT"
   * @const
   */
  LT: "LT",
  /**
   * value: "LU"
   * @const
   */
  LU: "LU",
  /**
   * value: "MT"
   * @const
   */
  MT: "MT",
  /**
   * value: "PL"
   * @const
   */
  PL: "PL",
  /**
   * value: "PT"
   * @const
   */
  PT: "PT",
  /**
   * value: "RO"
   * @const
   */
  RO: "RO",
  /**
   * value: "SE"
   * @const
   */
  SE: "SE",
  /**
   * value: "SK"
   * @const
   */
  SK: "SK",
  /**
   * value: "SI"
   * @const
   */
  SI: "SI",
  /**
   * value: "ES"
   * @const
   */
  ES: "ES",
  /**
   * value: "CZ"
   * @const
   */
  CZ: "CZ",
  /**
   * value: "HU"
   * @const
   */
  HU: "HU",
  /**
   * value: "CY"
   * @const
   */
  CY: "CY",
  /**
   * value: "AL"
   * @const
   */
  AL: "AL",
  /**
   * value: "AD"
   * @const
   */
  AD: "AD",
  /**
   * value: "AZ"
   * @const
   */
  AZ: "AZ",
  /**
   * value: "BA"
   * @const
   */
  BA: "BA",
  /**
   * value: "GE"
   * @const
   */
  GE: "GE",
  /**
   * value: "IS"
   * @const
   */
  IS: "IS",
  /**
   * value: "KZ"
   * @const
   */
  KZ: "KZ",
  /**
   * value: "LI"
   * @const
   */
  LI: "LI",
  /**
   * value: "MK"
   * @const
   */
  MK: "MK",
  /**
   * value: "MD"
   * @const
   */
  MD: "MD",
  /**
   * value: "MC"
   * @const
   */
  MC: "MC",
  /**
   * value: "ME"
   * @const
   */
  ME: "ME",
  /**
   * value: "NO"
   * @const
   */
  NO: "NO",
  /**
   * value: "RU"
   * @const
   */
  RU: "RU",
  /**
   * value: "SM"
   * @const
   */
  SM: "SM",
  /**
   * value: "RS"
   * @const
   */
  RS: "RS",
  /**
   * value: "TR"
   * @const
   */
  TR: "TR",
  /**
   * value: "UA"
   * @const
   */
  UA: "UA",
  /**
   * value: "AM"
   * @const
   */
  AM: "AM",
  /**
   * value: "VA"
   * @const
   */
  VA: "VA",
  /**
   * value: "BY"
   * @const
   */
  BY: "BY",
  /**
   * value: "US"
   * @const
   */
  US: "US",
  /**
   * value: "IN"
   * @const
   */
  IN: "IN",
  /**
   * value: "BR"
   * @const
   */
  BR: "BR",
  /**
   * value: "KR"
   * @const
   */
  KR: "KR",
  /**
   * value: "AE"
   * @const
   */
  AE: "AE",
  /**
   * value: "AR"
   * @const
   */
  AR: "AR",
  /**
   * value: "TZ"
   * @const
   */
  TZ: "TZ",
  /**
   * value: "ZA"
   * @const
   */
  ZA: "ZA",
  /**
   * value: "CA"
   * @const
   */
  CA: "CA",
  /**
   * value: "KE"
   * @const
   */
  KE: "KE",
  /**
   * value: "UG"
   * @const
   */
  UG: "UG",
  /**
   * value: "EG"
   * @const
   */
  EG: "EG",
  /**
   * value: "CN"
   * @const
   */
  CN: "CN",
  /**
   * value: "JP"
   * @const
   */
  JP: "JP",
  /**
   * value: "AF"
   * @const
   */
  AF: "AF",
  /**
   * value: "BD"
   * @const
   */
  BD: "BD",
  /**
   * value: "BT"
   * @const
   */
  BT: "BT",
  /**
   * value: "MV"
   * @const
   */
  MV: "MV",
  /**
   * value: "NP"
   * @const
   */
  NP: "NP",
  /**
   * value: "PK"
   * @const
   */
  PK: "PK",
  /**
   * value: "LK"
   * @const
   */
  LK: "LK",
  /**
   * value: "ID"
   * @const
   */
  ID: "ID",
  /**
   * value: "LA"
   * @const
   */
  LA: "LA",
  /**
   * value: "MY"
   * @const
   */
  MY: "MY",
  /**
   * value: "MM"
   * @const
   */
  MM: "MM",
  /**
   * value: "PH"
   * @const
   */
  PH: "PH",
  /**
   * value: "SG"
   * @const
   */
  SG: "SG",
  /**
   * value: "TW"
   * @const
   */
  TW: "TW",
  /**
   * value: "TH"
   * @const
   */
  TH: "TH",
  /**
   * value: "TL"
   * @const
   */
  TL: "TL",
  /**
   * value: "VN"
   * @const
   */
  VN: "VN",
  /**
   * value: "NZ"
   * @const
   */
  NZ: "NZ",
  /**
   * value: "NG"
   * @const
   */
  NG: "NG",
  /**
   * value: "CL"
   * @const
   */
  CL: "CL",
  /**
   * value: "JO"
   * @const
   */
  JO: "JO",
  /**
   * value: "MX"
   * @const
   */
  MX: "MX"
};
/**
 * @member {module:model/AddressCreate.CountryCodeEnum} countryCode
 */
AddressCreate.prototype.countryCode = undefined;

/**
 * Allowed values for the <code>kind</code> property.
 * @enum {String}
 * @readonly
 */
AddressCreate.KindEnum = {
  /**
   * value: "billing"
   * @const
   */
  billing: "billing",
  /**
   * value: "shipping"
   * @const
   */
  shipping: "shipping"
};
/**
 * Set the kind of Address this represents. This value can only be set when the address is created. To change the value, remove the address and create a replacement one with the desired new value.
 * @member {module:model/AddressCreate.KindEnum} kind
 */
AddressCreate.prototype.kind = undefined;

/**
 * Latitude and Longitude
 * @member {Array.<Number>} location
 */
AddressCreate.prototype.location = undefined;

// Implement OneOfExpandedOrderCreateAddress interface:
// Implement OneOfExtendedShipmentCreateAddress interface: