"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OrderStateTransitionUpdate = void 0;
var _ApiClient = require("../ApiClient");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The OrderStateTransitionUpdate model module.
 * @module model/OrderStateTransitionUpdate
 * @version 1.0.0
 */
var OrderStateTransitionUpdate = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>OrderStateTransitionUpdate</code>.
   * @alias module:model/OrderStateTransitionUpdate
   * @class
   */
  function OrderStateTransitionUpdate() {
    _classCallCheck(this, OrderStateTransitionUpdate);
  }

  /**
   * Constructs a <code>OrderStateTransitionUpdate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OrderStateTransitionUpdate} obj Optional instance to populate.
   * @return {module:model/OrderStateTransitionUpdate} The populated <code>OrderStateTransitionUpdate</code> instance.
   */
  _createClass(OrderStateTransitionUpdate, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new OrderStateTransitionUpdate();
        if (data.hasOwnProperty('next_state')) obj.nextState = _ApiClient.ApiClient.convertToType(data['next_state'], 'String');
      }
      return obj;
    }
  }]);
  return OrderStateTransitionUpdate;
}();
/**
 * Allowed values for the <code>nextState</code> property.
 * @enum {String}
 * @readonly
 */
exports.OrderStateTransitionUpdate = OrderStateTransitionUpdate;
OrderStateTransitionUpdate.NextStateEnum = {
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
 * @member {module:model/OrderStateTransitionUpdate.NextStateEnum} nextState
 */
OrderStateTransitionUpdate.prototype.nextState = undefined;