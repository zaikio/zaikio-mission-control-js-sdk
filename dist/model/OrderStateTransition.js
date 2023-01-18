"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OrderStateTransition = void 0;
var _ApiClient = require("../ApiClient");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The OrderStateTransition model module.
 * @module model/OrderStateTransition
 * @version 1.0.0
 */
var OrderStateTransition = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>OrderStateTransition</code>.
   * @alias module:model/OrderStateTransition
   * @class
   * @param id {String} 
   * @param createdAt {Date} 
   * @param updatedAt {Date} 
   * @param previousState {module:model/OrderStateTransition.PreviousStateEnum} The state of the Order at the start of this transition
   * @param nextState {module:model/OrderStateTransition.NextStateEnum} The state the Order is transitioning to
   * @param triggeredBy {String} The application or other API caller that triggered the transition, if present
   * @param userId {String} The user that triggered the transition, if present
   */
  function OrderStateTransition(id, createdAt, updatedAt, previousState, nextState, triggeredBy, userId) {
    _classCallCheck(this, OrderStateTransition);
    this.id = id;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.previousState = previousState;
    this.nextState = nextState;
    this.triggeredBy = triggeredBy;
    this.userId = userId;
  }

  /**
   * Constructs a <code>OrderStateTransition</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OrderStateTransition} obj Optional instance to populate.
   * @return {module:model/OrderStateTransition} The populated <code>OrderStateTransition</code> instance.
   */
  _createClass(OrderStateTransition, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new OrderStateTransition();
        if (data.hasOwnProperty('id')) obj.id = _ApiClient.ApiClient.convertToType(data['id'], 'String');
        if (data.hasOwnProperty('created_at')) obj.createdAt = _ApiClient.ApiClient.convertToType(data['created_at'], 'Date');
        if (data.hasOwnProperty('updated_at')) obj.updatedAt = _ApiClient.ApiClient.convertToType(data['updated_at'], 'Date');
        if (data.hasOwnProperty('previous_state')) obj.previousState = _ApiClient.ApiClient.convertToType(data['previous_state'], 'String');
        if (data.hasOwnProperty('next_state')) obj.nextState = _ApiClient.ApiClient.convertToType(data['next_state'], 'String');
        if (data.hasOwnProperty('triggered_by')) obj.triggeredBy = _ApiClient.ApiClient.convertToType(data['triggered_by'], 'String');
        if (data.hasOwnProperty('user_id')) obj.userId = _ApiClient.ApiClient.convertToType(data['user_id'], 'String');
      }
      return obj;
    }
  }]);
  return OrderStateTransition;
}();
/**
 * @member {String} id
 */
exports.OrderStateTransition = OrderStateTransition;
OrderStateTransition.prototype.id = undefined;

/**
 * @member {Date} createdAt
 */
OrderStateTransition.prototype.createdAt = undefined;

/**
 * @member {Date} updatedAt
 */
OrderStateTransition.prototype.updatedAt = undefined;

/**
 * Allowed values for the <code>previousState</code> property.
 * @enum {String}
 * @readonly
 */
OrderStateTransition.PreviousStateEnum = {
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
 * The state of the Order at the start of this transition
 * @member {module:model/OrderStateTransition.PreviousStateEnum} previousState
 */
OrderStateTransition.prototype.previousState = undefined;

/**
 * Allowed values for the <code>nextState</code> property.
 * @enum {String}
 * @readonly
 */
OrderStateTransition.NextStateEnum = {
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
 * @member {module:model/OrderStateTransition.NextStateEnum} nextState
 */
OrderStateTransition.prototype.nextState = undefined;

/**
 * The application or other API caller that triggered the transition, if present
 * @member {String} triggeredBy
 */
OrderStateTransition.prototype.triggeredBy = undefined;

/**
 * The user that triggered the transition, if present
 * @member {String} userId
 */
OrderStateTransition.prototype.userId = undefined;