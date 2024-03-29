"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InlineResponse200 = void 0;
var _ApiClient = require("../ApiClient");
var _ExtendedJob = require("./ExtendedJob");
var _ExtendedPart = require("./ExtendedPart");
var _Job2 = require("./Job");
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
 * The InlineResponse200 model module.
 * @module model/InlineResponse200
 * @version 1.0.0
 */
var InlineResponse200 = /*#__PURE__*/function (_Job) {
  _inherits(InlineResponse200, _Job);
  var _super = _createSuper(InlineResponse200);
  /**
   * Constructs a new <code>InlineResponse200</code>.
   * @alias module:model/InlineResponse200
   * @class
   * @extends module:model/Job
   * @param parts {} 
   * @param id {} 
   * @param createdAt {} 
   * @param updatedAt {} 
   * @param name {} The name of the Job
   * @param ownerId {} The id of the Organization which the Job belongs to
   * @param state {} The current state of this Job
   * @param references {} A list of refrences that are used in customer/human communication. This is not a technical ID and should not be treated as such. The first reference of this job is automatically generated by Mission Control.
   * @param kind {} The kind of Job, which must be one of this list
   * @param source {} The source software or system that uploaded this job. This could also be a hint to a web shop or other sales channel identifier.
   * @param version {} A version identifier that defines the iteration of this job. Can be a numeric counter or alpha-numeric version designator.
   * @param quantity {} The amount of copies that need to be manufactured of this job.
   * @param acceptableQuantityExcess {} The amount of copies that can be produced additionally to `quantity` and still be sold to the customer as per the purchase agreement.
   * @param acceptableQuantityUnderrun {} The amount of copies that can be producded less than `quantity` which still adheres the customers purchase agreement.
   * @param dueAt {} The date and time at which this job needs to completed in order to be shipped. This is not when it needs to arrive at the customer.
   * @param estimatedCompletedAt {} The date and time at which this job is expected to be completed in order to be shipped. This is not when it needs to arrive at the customer.
   */
  function InlineResponse200(parts, id, createdAt, updatedAt, name, ownerId, state, references, kind, source, version, quantity, acceptableQuantityExcess, acceptableQuantityUnderrun, dueAt, estimatedCompletedAt) {
    var _this;
    _classCallCheck(this, InlineResponse200);
    _this = _super.call(this, id, createdAt, updatedAt, name, ownerId, state, references, kind, source, version, quantity, acceptableQuantityExcess, acceptableQuantityUnderrun, dueAt, estimatedCompletedAt);
    _this.parts = parts;
    return _this;
  }

  /**
   * Constructs a <code>InlineResponse200</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineResponse200} obj Optional instance to populate.
   * @return {module:model/InlineResponse200} The populated <code>InlineResponse200</code> instance.
   */
  _createClass(InlineResponse200, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse200();
        _Job2.Job.constructFromObject(data, obj);
        if (data.hasOwnProperty('parts')) obj.parts = _ApiClient.ApiClient.convertToType(data['parts'], [_ExtendedPart.ExtendedPart]);
      }
      return obj;
    }
  }]);
  return InlineResponse200;
}(_Job2.Job);
/**
 * @member {Array.<module:model/ExtendedPart>} parts
 */
exports.InlineResponse200 = InlineResponse200;
InlineResponse200.prototype.parts = undefined;