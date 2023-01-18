"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OrderIdStateTransitionsBody = void 0;
var _ApiClient = require("../ApiClient");
var _OrderStateTransitionCreate = require("./OrderStateTransitionCreate");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The OrderIdStateTransitionsBody model module.
 * @module model/OrderIdStateTransitionsBody
 * @version 1.0.0
 */
var OrderIdStateTransitionsBody = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>OrderIdStateTransitionsBody</code>.
   * @alias module:model/OrderIdStateTransitionsBody
   * @class
   * @param stateTransition {module:model/OrderStateTransitionCreate} 
   */
  function OrderIdStateTransitionsBody(stateTransition) {
    _classCallCheck(this, OrderIdStateTransitionsBody);
    this.stateTransition = stateTransition;
  }

  /**
   * Constructs a <code>OrderIdStateTransitionsBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OrderIdStateTransitionsBody} obj Optional instance to populate.
   * @return {module:model/OrderIdStateTransitionsBody} The populated <code>OrderIdStateTransitionsBody</code> instance.
   */
  _createClass(OrderIdStateTransitionsBody, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new OrderIdStateTransitionsBody();
        if (data.hasOwnProperty('state_transition')) obj.stateTransition = _OrderStateTransitionCreate.OrderStateTransitionCreate.constructFromObject(data['state_transition']);
      }
      return obj;
    }
  }]);
  return OrderIdStateTransitionsBody;
}();
/**
 * @member {module:model/OrderStateTransitionCreate} stateTransition
 */
exports.OrderIdStateTransitionsBody = OrderIdStateTransitionsBody;
OrderIdStateTransitionsBody.prototype.stateTransition = undefined;