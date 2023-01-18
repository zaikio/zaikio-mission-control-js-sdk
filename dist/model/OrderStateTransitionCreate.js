"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OrderStateTransitionCreate = void 0;
var _ApiClient = require("../ApiClient");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The OrderStateTransitionCreate model module.
 * @module model/OrderStateTransitionCreate
 * @version 1.0.0
 */
var OrderStateTransitionCreate = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>OrderStateTransitionCreate</code>.
   * @alias module:model/OrderStateTransitionCreate
   * @class
   */
  function OrderStateTransitionCreate() {
    _classCallCheck(this, OrderStateTransitionCreate);
  }

  /**
   * Constructs a <code>OrderStateTransitionCreate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OrderStateTransitionCreate} obj Optional instance to populate.
   * @return {module:model/OrderStateTransitionCreate} The populated <code>OrderStateTransitionCreate</code> instance.
   */
  _createClass(OrderStateTransitionCreate, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new OrderStateTransitionCreate();
        if (data.hasOwnProperty('next_state')) obj.nextState = _ApiClient.ApiClient.convertToType(data['next_state'], 'String');
      }
      return obj;
    }
  }]);
  return OrderStateTransitionCreate;
}();
/**
 * Allowed values for the <code>nextState</code> property.
 * @enum {String}
 * @readonly
 */
exports.OrderStateTransitionCreate = OrderStateTransitionCreate;
OrderStateTransitionCreate.NextStateEnum = {
  /**
   * value: ":draft"
   * @const
   */
  draft: ":draft",
  /**
   * value: ":confirmed"
   * @const
   */
  confirmed: ":confirmed",
  /**
   * value: ":fulfilled"
   * @const
   */
  fulfilled: ":fulfilled",
  /**
   * value: ":canceled"
   * @const
   */
  canceled: ":canceled"
};
/**
 * The state the Order is transitioning to
 * @member {module:model/OrderStateTransitionCreate.NextStateEnum} nextState
 */
OrderStateTransitionCreate.prototype.nextState = undefined;