"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AllOfjobsBodyJob = void 0;
var _ApiClient = require("../ApiClient");
var _ExtendedJobCreate = require("./ExtendedJobCreate");
var _ExtendedPartCreate = require("./ExtendedPartCreate");
var _JobCreate2 = require("./JobCreate");
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
 * The AllOfjobsBodyJob model module.
 * @module model/AllOfjobsBodyJob
 * @version 1.0.0
 */
var AllOfjobsBodyJob = /*#__PURE__*/function (_JobCreate) {
  _inherits(AllOfjobsBodyJob, _JobCreate);
  var _super = _createSuper(AllOfjobsBodyJob);
  /**
   * Constructs a new <code>AllOfjobsBodyJob</code>.
   * @alias module:model/AllOfjobsBodyJob
   * @class
   * @extends module:model/JobCreate
   */
  function AllOfjobsBodyJob() {
    _classCallCheck(this, AllOfjobsBodyJob);
    return _super.call(this);
  }

  /**
   * Constructs a <code>AllOfjobsBodyJob</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AllOfjobsBodyJob} obj Optional instance to populate.
   * @return {module:model/AllOfjobsBodyJob} The populated <code>AllOfjobsBodyJob</code> instance.
   */
  _createClass(AllOfjobsBodyJob, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new AllOfjobsBodyJob();
        _JobCreate2.JobCreate.constructFromObject(data, obj);
        if (data.hasOwnProperty('parts')) obj.parts = _ApiClient.ApiClient.convertToType(data['parts'], [_ExtendedPartCreate.ExtendedPartCreate]);
      }
      return obj;
    }
  }]);
  return AllOfjobsBodyJob;
}(_JobCreate2.JobCreate);
/**
 * @member {Array.<module:model/ExtendedPartCreate>} parts
 */
exports.AllOfjobsBodyJob = AllOfjobsBodyJob;
AllOfjobsBodyJob.prototype.parts = undefined;