"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InlineResponse2013 = void 0;
var _ApiClient = require("../ApiClient");
var _ExtendedShipment = require("./ExtendedShipment");
var _Shipment2 = require("./Shipment");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
/**
 * The InlineResponse2013 model module.
 * @module model/InlineResponse2013
 * @version 1.0.0
 */
var InlineResponse2013 = /*#__PURE__*/function (_Shipment) {
  _inherits(InlineResponse2013, _Shipment);
  var _super = _createSuper(InlineResponse2013);
  /**
   * Constructs a new <code>InlineResponse2013</code>.
   * @alias module:model/InlineResponse2013
   * @class
   * @extends module:model/Shipment
   * @param address {} 
   * @param id {} 
   * @param createdAt {} 
   * @param updatedAt {} 
   * @param references {} The the first reference of this pickup is generated by the system that created it. The references are supposed to be used in customer/human related communication. It is not a technical ID.
   * @param state {} The current state of the object
   * @param costs {} The total costs (that is without taxes) of the shipment in the smallest unit of `currency`. For USD/EUR this would be cents, for GPB pence, etc.
   * @param incoterm {} The incoterm of this Shipment
   * @param carrierKind {} The kind of carrier for this Shipment
   * @param carrierName {} The name of the carrier for this shipment. If `carrier_kind` is set to courier, the name must be one of `dhl`, `dhl_express`, `ups`, `gls`, `dpd`, `tnt`, `go`, `fedex`, `hermes`, `deutsche_post`, `bw_post`, `apc_overnight`, `royal_mail`. If `carrier_kind` is set to forwarder, the name of the forwarder is applicable.
   * @param carrierService {} The booked carrier service for this shipment
   * @param deliveryContactEmail {} The email address of the contact person at the delivery location.
   * @param deliveryContactPhone {} The phone number of the contact person at the delivery location.
   * @param deliveryInstructions {} The delivery instructions for this shipment.
   * @param deliveryRequirements {} The delivery requirements for this Shipment.
   * @param whiteLabel {} Specifies whether the markings indicating the actual sender of the products should be removed before shipping.
   * @param expectedDeliveryAt {} The date on which this shipment should be delivered.
   * @param deliveredAt {} The date on which this shipment was delivered.
   */
  function InlineResponse2013(address, id, createdAt, updatedAt, references, state, costs, incoterm, carrierKind, carrierName, carrierService, deliveryContactEmail, deliveryContactPhone, deliveryInstructions, deliveryRequirements, whiteLabel, expectedDeliveryAt, deliveredAt) {
    var _this;
    _classCallCheck(this, InlineResponse2013);
    _this = _super.call(this, id, createdAt, updatedAt, references, state, costs, incoterm, carrierKind, carrierName, carrierService, deliveryContactEmail, deliveryContactPhone, deliveryInstructions, deliveryRequirements, whiteLabel, expectedDeliveryAt, deliveredAt);
    _this.address = address;
    return _this;
  }

  /**
   * Constructs a <code>InlineResponse2013</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineResponse2013} obj Optional instance to populate.
   * @return {module:model/InlineResponse2013} The populated <code>InlineResponse2013</code> instance.
   */
  _createClass(InlineResponse2013, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse2013();
        _Shipment2.Shipment.constructFromObject(data, obj);
        if (data.hasOwnProperty('address')) obj.address = _ApiClient.ApiClient.convertToType(data['address'], Object);
      }
      return obj;
    }
  }]);
  return InlineResponse2013;
}(_Shipment2.Shipment);
/**
 * @member {Object} address
 */
exports.InlineResponse2013 = InlineResponse2013;
InlineResponse2013.prototype.address = undefined;