"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ShipmentCreate = void 0;
var _ApiClient = require("../ApiClient");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The ShipmentCreate model module.
 * @module model/ShipmentCreate
 * @version 1.0.0
 */
var ShipmentCreate = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ShipmentCreate</code>.
   * @alias module:model/ShipmentCreate
   * @class
   */
  function ShipmentCreate() {
    _classCallCheck(this, ShipmentCreate);
  }

  /**
   * Constructs a <code>ShipmentCreate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ShipmentCreate} obj Optional instance to populate.
   * @return {module:model/ShipmentCreate} The populated <code>ShipmentCreate</code> instance.
   */
  _createClass(ShipmentCreate, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ShipmentCreate();
        if (data.hasOwnProperty('references')) obj.references = _ApiClient.ApiClient.convertToType(data['references'], ['String']);
        if (data.hasOwnProperty('state')) obj.state = _ApiClient.ApiClient.convertToType(data['state'], 'String');
        if (data.hasOwnProperty('costs')) obj.costs = _ApiClient.ApiClient.convertToType(data['costs'], 'Number');
        if (data.hasOwnProperty('incoterm')) obj.incoterm = _ApiClient.ApiClient.convertToType(data['incoterm'], 'String');
        if (data.hasOwnProperty('carrier_kind')) obj.carrierKind = _ApiClient.ApiClient.convertToType(data['carrier_kind'], 'String');
        if (data.hasOwnProperty('carrier_name')) obj.carrierName = _ApiClient.ApiClient.convertToType(data['carrier_name'], 'String');
        if (data.hasOwnProperty('carrier_service')) obj.carrierService = _ApiClient.ApiClient.convertToType(data['carrier_service'], 'String');
        if (data.hasOwnProperty('delivery_contact_email')) obj.deliveryContactEmail = _ApiClient.ApiClient.convertToType(data['delivery_contact_email'], 'String');
        if (data.hasOwnProperty('delivery_contact_phone')) obj.deliveryContactPhone = _ApiClient.ApiClient.convertToType(data['delivery_contact_phone'], 'String');
        if (data.hasOwnProperty('delivery_instructions')) obj.deliveryInstructions = _ApiClient.ApiClient.convertToType(data['delivery_instructions'], 'String');
        if (data.hasOwnProperty('delivery_requirements')) obj.deliveryRequirements = _ApiClient.ApiClient.convertToType(data['delivery_requirements'], ['String']);
        if (data.hasOwnProperty('white_label')) obj.whiteLabel = _ApiClient.ApiClient.convertToType(data['white_label'], 'Boolean');
        if (data.hasOwnProperty('expected_delivery_at')) obj.expectedDeliveryAt = _ApiClient.ApiClient.convertToType(data['expected_delivery_at'], 'Date');
        if (data.hasOwnProperty('delivered_at')) obj.deliveredAt = _ApiClient.ApiClient.convertToType(data['delivered_at'], 'Date');
      }
      return obj;
    }
  }]);
  return ShipmentCreate;
}();
/**
 * The the first reference of this pickup is generated by the system that created it. The references are supposed to be used in customer/human related communication. It is not a technical ID.
 * @member {Array.<String>} references
 */
exports.ShipmentCreate = ShipmentCreate;
ShipmentCreate.prototype.references = undefined;

/**
 * Allowed values for the <code>state</code> property.
 * @enum {String}
 * @readonly
 */
ShipmentCreate.StateEnum = {
  /**
   * value: "waiting_for_commission"
   * @const
   */
  waitingForCommission: "waiting_for_commission",
  /**
   * value: "packed"
   * @const
   */
  packed: "packed",
  /**
   * value: "announced"
   * @const
   */
  announced: "announced",
  /**
   * value: "in_transit"
   * @const
   */
  inTransit: "in_transit",
  /**
   * value: "exception"
   * @const
   */
  exception: "exception",
  /**
   * value: "untrackable"
   * @const
   */
  untrackable: "untrackable",
  /**
   * value: "delivered"
   * @const
   */
  delivered: "delivered"
};
/**
 * The current state of the object
 * @member {module:model/ShipmentCreate.StateEnum} state
 */
ShipmentCreate.prototype.state = undefined;

/**
 * The total costs (that is without taxes) of the shipment in the smallest unit of `currency`. For USD/EUR this would be cents, for GPB pence, etc.
 * @member {Number} costs
 */
ShipmentCreate.prototype.costs = undefined;

/**
 * Allowed values for the <code>incoterm</code> property.
 * @enum {String}
 * @readonly
 */
ShipmentCreate.IncotermEnum = {
  /**
   * value: "CFR"
   * @const
   */
  CFR: "CFR",
  /**
   * value: "CIF"
   * @const
   */
  CIF: "CIF",
  /**
   * value: "CIP"
   * @const
   */
  CIP: "CIP",
  /**
   * value: "CPT"
   * @const
   */
  CPT: "CPT",
  /**
   * value: "DAP"
   * @const
   */
  DAP: "DAP",
  /**
   * value: "DAT"
   * @const
   */
  DAT: "DAT",
  /**
   * value: "DDP"
   * @const
   */
  DDP: "DDP",
  /**
   * value: "EXW"
   * @const
   */
  EXW: "EXW",
  /**
   * value: "FAS"
   * @const
   */
  FAS: "FAS",
  /**
   * value: "FCA"
   * @const
   */
  FCA: "FCA",
  /**
   * value: "FOB"
   * @const
   */
  FOB: "FOB"
};
/**
 * The incoterm of this Shipment
 * @member {module:model/ShipmentCreate.IncotermEnum} incoterm
 */
ShipmentCreate.prototype.incoterm = undefined;

/**
 * Allowed values for the <code>carrierKind</code> property.
 * @enum {String}
 * @readonly
 */
ShipmentCreate.CarrierKindEnum = {
  /**
   * value: "courier"
   * @const
   */
  courier: "courier",
  /**
   * value: "forwarder"
   * @const
   */
  forwarder: "forwarder"
};
/**
 * The kind of carrier for this Shipment
 * @member {module:model/ShipmentCreate.CarrierKindEnum} carrierKind
 */
ShipmentCreate.prototype.carrierKind = undefined;

/**
 * The name of the carrier for this shipment. If `carrier_kind` is set to courier, the name must be one of `dhl`, `dhl_express`, `ups`, `gls`, `dpd`, `tnt`, `go`, `fedex`, `hermes`, `deutsche_post`, `bw_post`, `apc_overnight`, `royal_mail`. If `carrier_kind` is set to forwarder, the name of the forwarder is applicable.
 * @member {String} carrierName
 */
ShipmentCreate.prototype.carrierName = undefined;

/**
 * The booked carrier service for this shipment
 * @member {String} carrierService
 */
ShipmentCreate.prototype.carrierService = undefined;

/**
 * The email address of the contact person at the delivery location.
 * @member {String} deliveryContactEmail
 */
ShipmentCreate.prototype.deliveryContactEmail = undefined;

/**
 * The phone number of the contact person at the delivery location.
 * @member {String} deliveryContactPhone
 */
ShipmentCreate.prototype.deliveryContactPhone = undefined;

/**
 * The delivery instructions for this shipment.
 * @member {String} deliveryInstructions
 */
ShipmentCreate.prototype.deliveryInstructions = undefined;

/**
 * Allowed values for the <code>deliveryRequirements</code> property.
 * @enum {String}
 * @readonly
 */
ShipmentCreate.DeliveryRequirementsEnum = {
  /**
   * value: "forklift"
   * @const
   */
  forklift: "forklift"
};
/**
 * The delivery requirements for this Shipment.
 * @member {Array.<module:model/ShipmentCreate.DeliveryRequirementsEnum>} deliveryRequirements
 */
ShipmentCreate.prototype.deliveryRequirements = undefined;

/**
 * Specifies whether the markings indicating the actual sender of the products should be removed before shipping.
 * @member {Boolean} whiteLabel
 */
ShipmentCreate.prototype.whiteLabel = undefined;

/**
 * The date on which this shipment should be delivered.
 * @member {Date} expectedDeliveryAt
 */
ShipmentCreate.prototype.expectedDeliveryAt = undefined;

/**
 * The date on which this shipment was delivered.
 * @member {Date} deliveredAt
 */
ShipmentCreate.prototype.deliveredAt = undefined;