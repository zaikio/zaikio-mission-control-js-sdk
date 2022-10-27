"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AllOfshipmentsShipmentIdBodyShipment = void 0;
var _ApiClient = require("../ApiClient");
var _ExtendedShipmentUpdate = require("./ExtendedShipmentUpdate");
var _ShipmentUpdate2 = require("./ShipmentUpdate");
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
 * The AllOfshipmentsShipmentIdBodyShipment model module.
 * @module model/AllOfshipmentsShipmentIdBodyShipment
 * @version 1.0.0
 */
var AllOfshipmentsShipmentIdBodyShipment = /*#__PURE__*/function (_ShipmentUpdate) {
  _inherits(AllOfshipmentsShipmentIdBodyShipment, _ShipmentUpdate);
  var _super = _createSuper(AllOfshipmentsShipmentIdBodyShipment);
  /**
   * Constructs a new <code>AllOfshipmentsShipmentIdBodyShipment</code>.
   * @alias module:model/AllOfshipmentsShipmentIdBodyShipment
   * @class
   * @extends module:model/ShipmentUpdate
   */
  function AllOfshipmentsShipmentIdBodyShipment() {
    _classCallCheck(this, AllOfshipmentsShipmentIdBodyShipment);
    return _super.call(this);
  }

  /**
   * Constructs a <code>AllOfshipmentsShipmentIdBodyShipment</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AllOfshipmentsShipmentIdBodyShipment} obj Optional instance to populate.
   * @return {module:model/AllOfshipmentsShipmentIdBodyShipment} The populated <code>AllOfshipmentsShipmentIdBodyShipment</code> instance.
   */
  _createClass(AllOfshipmentsShipmentIdBodyShipment, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new AllOfshipmentsShipmentIdBodyShipment();
        _ShipmentUpdate2.ShipmentUpdate.constructFromObject(data, obj);
        if (data.hasOwnProperty('address')) obj.address = _ApiClient.ApiClient.convertToType(data['address'], Object);
      }
      return obj;
    }
  }]);
  return AllOfshipmentsShipmentIdBodyShipment;
}(_ShipmentUpdate2.ShipmentUpdate);
/**
 * @member {Object} address
 */
exports.AllOfshipmentsShipmentIdBodyShipment = AllOfshipmentsShipmentIdBodyShipment;
AllOfshipmentsShipmentIdBodyShipment.prototype.address = undefined;