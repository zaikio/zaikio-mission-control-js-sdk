"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BusinessApi = void 0;
var _ApiClient = require("../ApiClient");
var _Address = require("../model/Address");
var _InlineResponse = require("../model/InlineResponse2012");
var _InlineResponse2 = require("../model/InlineResponse400");
var _InlineResponse3 = require("../model/InlineResponse401");
var _Order = require("../model/Order");
var _OrderIdAddressBody = require("../model/OrderIdAddressBody");
var _OrderIdAddressBody2 = require("../model/OrderIdAddressBody1");
var _OrderIdOrderLineItemsBody = require("../model/OrderIdOrderLineItemsBody");
var _OrderIdPaymentTermsBody = require("../model/OrderIdPaymentTermsBody");
var _OrderIdPaymentTermsBody2 = require("../model/OrderIdPaymentTermsBody1");
var _OrderIdStateTransitionsBody = require("../model/OrderIdStateTransitionsBody");
var _OrderLineItem = require("../model/OrderLineItem");
var _OrderLineItemsOrderLineItemIdBody = require("../model/OrderLineItemsOrderLineItemIdBody");
var _OrderStateTransition = require("../model/OrderStateTransition");
var _OrdersBody = require("../model/OrdersBody");
var _OrdersOrderIdBody = require("../model/OrdersOrderIdBody");
var _PaymentTerms = require("../model/PaymentTerms");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
* Business service.
* @module api/BusinessApi
* @version 1.0.0
*/
var BusinessApi = /*#__PURE__*/function () {
  /**
  * Constructs a new BusinessApi. 
  * @alias module:api/BusinessApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instanc
  e} if unspecified.
  */
  function BusinessApi(apiClient) {
    _classCallCheck(this, BusinessApi);
    this.apiClient = apiClient || _ApiClient.ApiClient.instance;
  }

  /**
   * Removes or specific order line item. Please not that removing line items is only possible                             if the parent order is still in a &#x60;draft&#x60; state. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: 
   * @param {String} orderLineItemId 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
   */
  _createClass(BusinessApi, [{
    key: "orderLineItemsOrderLineItemIdDeleteWithHttpInfo",
    value: function orderLineItemsOrderLineItemIdDeleteWithHttpInfo(orderLineItemId) {
      var postBody = null;
      // verify the required parameter 'orderLineItemId' is set
      if (orderLineItemId === undefined || orderLineItemId === null) {
        throw new Error("Missing the required parameter 'orderLineItemId' when calling orderLineItemsOrderLineItemIdDelete");
      }
      var pathParams = {
        'order_line_item_id': orderLineItemId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/order_line_items/{order_line_item_id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Removes or specific order line item. Please not that removing line items is only possible                             if the parent order is still in a &#x60;draft&#x60; state. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: 
     * @param {<&vendorExtensions.x-jsdoc-type>} orderLineItemId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
  }, {
    key: "orderLineItemsOrderLineItemIdDelete",
    value: function orderLineItemsOrderLineItemIdDelete(orderLineItemId) {
      return this.orderLineItemsOrderLineItemIdDeleteWithHttpInfo(orderLineItemId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Returns a specific order line item. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: &#x60;mission_control.orders.r&#x60;
     * @param {String} orderLineItemId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/OrderLineItem} and HTTP response
     */
  }, {
    key: "orderLineItemsOrderLineItemIdGetWithHttpInfo",
    value: function orderLineItemsOrderLineItemIdGetWithHttpInfo(orderLineItemId) {
      var postBody = null;
      // verify the required parameter 'orderLineItemId' is set
      if (orderLineItemId === undefined || orderLineItemId === null) {
        throw new Error("Missing the required parameter 'orderLineItemId' when calling orderLineItemsOrderLineItemIdGet");
      }
      var pathParams = {
        'order_line_item_id': orderLineItemId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _OrderLineItem.OrderLineItem;
      return this.apiClient.callApi('/order_line_items/{order_line_item_id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Returns a specific order line item. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: &#x60;mission_control.orders.r&#x60;
     * @param {<&vendorExtensions.x-jsdoc-type>} orderLineItemId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/OrderLineItem}
     */
  }, {
    key: "orderLineItemsOrderLineItemIdGet",
    value: function orderLineItemsOrderLineItemIdGet(orderLineItemId) {
      return this.orderLineItemsOrderLineItemIdGetWithHttpInfo(orderLineItemId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Modifies a specfic order line item. Please not that any modifications to order line items                           are only possible as long as the parent order is in a &#x60;draft&#x60; state. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: 
     * @param {module:model/OrderLineItemsOrderLineItemIdBody} body 
     * @param {String} orderLineItemId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/OrderLineItem} and HTTP response
     */
  }, {
    key: "orderLineItemsOrderLineItemIdPatchWithHttpInfo",
    value: function orderLineItemsOrderLineItemIdPatchWithHttpInfo(body, orderLineItemId) {
      var postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling orderLineItemsOrderLineItemIdPatch");
      }
      // verify the required parameter 'orderLineItemId' is set
      if (orderLineItemId === undefined || orderLineItemId === null) {
        throw new Error("Missing the required parameter 'orderLineItemId' when calling orderLineItemsOrderLineItemIdPatch");
      }
      var pathParams = {
        'order_line_item_id': orderLineItemId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _OrderLineItem.OrderLineItem;
      return this.apiClient.callApi('/order_line_items/{order_line_item_id}', 'PATCH', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Modifies a specfic order line item. Please not that any modifications to order line items                           are only possible as long as the parent order is in a &#x60;draft&#x60; state. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: 
     * @param {<&vendorExtensions.x-jsdoc-type>} body 
     * @param {<&vendorExtensions.x-jsdoc-type>} orderLineItemId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/OrderLineItem}
     */
  }, {
    key: "orderLineItemsOrderLineItemIdPatch",
    value: function orderLineItemsOrderLineItemIdPatch(body, orderLineItemId) {
      return this.orderLineItemsOrderLineItemIdPatchWithHttpInfo(body, orderLineItemId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Returns all orders that have already been confirmed. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: &#x60;mission_control.orders.r&#x60;
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page The page of the current collection that shall be returned
     * @param {Number} opts.perPage The maximum number of items included in the response, ie., the page size (default to <.>)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/Order>} and HTTP response
     */
  }, {
    key: "ordersGetWithHttpInfo",
    value: function ordersGetWithHttpInfo(opts) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'page': opts['page'],
        'per_page': opts['perPage']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_Order.Order];
      return this.apiClient.callApi('/orders', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Returns all orders that have already been confirmed. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: &#x60;mission_control.orders.r&#x60;
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page The page of the current collection that shall be returned
     * @param {Number} opts.perPage The maximum number of items included in the response, ie., the page size (default to <.>)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/Order>}
     */
  }, {
    key: "ordersGet",
    value: function ordersGet(opts) {
      return this.ordersGetWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Removes the address from a specific order as long as the order is in a &#x60;draft&#x60; state. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: 
     * @param {String} orderId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
  }, {
    key: "ordersOrderIdAddressDeleteWithHttpInfo",
    value: function ordersOrderIdAddressDeleteWithHttpInfo(orderId) {
      var postBody = null;
      // verify the required parameter 'orderId' is set
      if (orderId === undefined || orderId === null) {
        throw new Error("Missing the required parameter 'orderId' when calling ordersOrderIdAddressDelete");
      }
      var pathParams = {
        'order_id': orderId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/orders/{order_id}/address', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Removes the address from a specific order as long as the order is in a &#x60;draft&#x60; state. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: 
     * @param {<&vendorExtensions.x-jsdoc-type>} orderId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
  }, {
    key: "ordersOrderIdAddressDelete",
    value: function ordersOrderIdAddressDelete(orderId) {
      return this.ordersOrderIdAddressDeleteWithHttpInfo(orderId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Returns the address for this order. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: &#x60;mission-control.orders.r&#x60;
     * @param {String} orderId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Address} and HTTP response
     */
  }, {
    key: "ordersOrderIdAddressGetWithHttpInfo",
    value: function ordersOrderIdAddressGetWithHttpInfo(orderId) {
      var postBody = null;
      // verify the required parameter 'orderId' is set
      if (orderId === undefined || orderId === null) {
        throw new Error("Missing the required parameter 'orderId' when calling ordersOrderIdAddressGet");
      }
      var pathParams = {
        'order_id': orderId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _Address.Address;
      return this.apiClient.callApi('/orders/{order_id}/address', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Returns the address for this order. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: &#x60;mission-control.orders.r&#x60;
     * @param {<&vendorExtensions.x-jsdoc-type>} orderId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Address}
     */
  }, {
    key: "ordersOrderIdAddressGet",
    value: function ordersOrderIdAddressGet(orderId) {
      return this.ordersOrderIdAddressGetWithHttpInfo(orderId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Modifies the address from a specific order as long as                   the order is still in a &#x60;draft&#x60; state. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: 
     * @param {module:model/OrderIdAddressBody1} body 
     * @param {String} orderId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Address} and HTTP response
     */
  }, {
    key: "ordersOrderIdAddressPatchWithHttpInfo",
    value: function ordersOrderIdAddressPatchWithHttpInfo(body, orderId) {
      var postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling ordersOrderIdAddressPatch");
      }
      // verify the required parameter 'orderId' is set
      if (orderId === undefined || orderId === null) {
        throw new Error("Missing the required parameter 'orderId' when calling ordersOrderIdAddressPatch");
      }
      var pathParams = {
        'order_id': orderId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _Address.Address;
      return this.apiClient.callApi('/orders/{order_id}/address', 'PATCH', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Modifies the address from a specific order as long as                   the order is still in a &#x60;draft&#x60; state. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: 
     * @param {<&vendorExtensions.x-jsdoc-type>} body 
     * @param {<&vendorExtensions.x-jsdoc-type>} orderId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Address}
     */
  }, {
    key: "ordersOrderIdAddressPatch",
    value: function ordersOrderIdAddressPatch(body, orderId) {
      return this.ordersOrderIdAddressPatchWithHttpInfo(body, orderId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Creates new address. If an address is already present, it will be overwritten.                   Creating an address is only possible as long as the order is in a &#x60;draft&#x60; state. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: 
     * @param {module:model/OrderIdAddressBody} body 
     * @param {String} orderId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Address} and HTTP response
     */
  }, {
    key: "ordersOrderIdAddressPostWithHttpInfo",
    value: function ordersOrderIdAddressPostWithHttpInfo(body, orderId) {
      var postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling ordersOrderIdAddressPost");
      }
      // verify the required parameter 'orderId' is set
      if (orderId === undefined || orderId === null) {
        throw new Error("Missing the required parameter 'orderId' when calling ordersOrderIdAddressPost");
      }
      var pathParams = {
        'order_id': orderId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _Address.Address;
      return this.apiClient.callApi('/orders/{order_id}/address', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Creates new address. If an address is already present, it will be overwritten.                   Creating an address is only possible as long as the order is in a &#x60;draft&#x60; state. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: 
     * @param {<&vendorExtensions.x-jsdoc-type>} body 
     * @param {<&vendorExtensions.x-jsdoc-type>} orderId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Address}
     */
  }, {
    key: "ordersOrderIdAddressPost",
    value: function ordersOrderIdAddressPost(body, orderId) {
      return this.ordersOrderIdAddressPostWithHttpInfo(body, orderId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     *  - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: 
     * @param {String} orderId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
  }, {
    key: "ordersOrderIdDeleteWithHttpInfo",
    value: function ordersOrderIdDeleteWithHttpInfo(orderId) {
      var postBody = null;
      // verify the required parameter 'orderId' is set
      if (orderId === undefined || orderId === null) {
        throw new Error("Missing the required parameter 'orderId' when calling ordersOrderIdDelete");
      }
      var pathParams = {
        'order_id': orderId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/orders/{order_id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     *  - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: 
     * @param {<&vendorExtensions.x-jsdoc-type>} orderId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
  }, {
    key: "ordersOrderIdDelete",
    value: function ordersOrderIdDelete(orderId) {
      return this.ordersOrderIdDeleteWithHttpInfo(orderId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Returns a specific order, including the address, payment terms and line items. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: &#x60;mission_control.orders.r&#x60;
     * @param {String} orderId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse2012} and HTTP response
     */
  }, {
    key: "ordersOrderIdGetWithHttpInfo",
    value: function ordersOrderIdGetWithHttpInfo(orderId) {
      var postBody = null;
      // verify the required parameter 'orderId' is set
      if (orderId === undefined || orderId === null) {
        throw new Error("Missing the required parameter 'orderId' when calling ordersOrderIdGet");
      }
      var pathParams = {
        'order_id': orderId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _InlineResponse.InlineResponse2012;
      return this.apiClient.callApi('/orders/{order_id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Returns a specific order, including the address, payment terms and line items. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: &#x60;mission_control.orders.r&#x60;
     * @param {<&vendorExtensions.x-jsdoc-type>} orderId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse2012}
     */
  }, {
    key: "ordersOrderIdGet",
    value: function ordersOrderIdGet(orderId) {
      return this.ordersOrderIdGetWithHttpInfo(orderId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Returns all line item of a specific order. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: &#x60;mission_control.orders.r&#x60;
     * @param {String} orderId 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page The page of the current collection that shall be returned
     * @param {Number} opts.perPage The maximum number of items included in the response, ie., the page size (default to <.>)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/OrderLineItem>} and HTTP response
     */
  }, {
    key: "ordersOrderIdOrderLineItemsGetWithHttpInfo",
    value: function ordersOrderIdOrderLineItemsGetWithHttpInfo(orderId, opts) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'orderId' is set
      if (orderId === undefined || orderId === null) {
        throw new Error("Missing the required parameter 'orderId' when calling ordersOrderIdOrderLineItemsGet");
      }
      var pathParams = {
        'order_id': orderId
      };
      var queryParams = {
        'page': opts['page'],
        'per_page': opts['perPage']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_OrderLineItem.OrderLineItem];
      return this.apiClient.callApi('/orders/{order_id}/order_line_items', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Returns all line item of a specific order. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: &#x60;mission_control.orders.r&#x60;
     * @param {<&vendorExtensions.x-jsdoc-type>} orderId 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page The page of the current collection that shall be returned
     * @param {Number} opts.perPage The maximum number of items included in the response, ie., the page size (default to <.>)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/OrderLineItem>}
     */
  }, {
    key: "ordersOrderIdOrderLineItemsGet",
    value: function ordersOrderIdOrderLineItemsGet(orderId, opts) {
      return this.ordersOrderIdOrderLineItemsGetWithHttpInfo(orderId, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Creates a new order line item and attaches it to an order. Please note that line items can                           only be added to orders in a &#x60;draft&#x60; state. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: 
     * @param {module:model/OrderIdOrderLineItemsBody} body 
     * @param {String} orderId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/OrderLineItem} and HTTP response
     */
  }, {
    key: "ordersOrderIdOrderLineItemsPostWithHttpInfo",
    value: function ordersOrderIdOrderLineItemsPostWithHttpInfo(body, orderId) {
      var postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling ordersOrderIdOrderLineItemsPost");
      }
      // verify the required parameter 'orderId' is set
      if (orderId === undefined || orderId === null) {
        throw new Error("Missing the required parameter 'orderId' when calling ordersOrderIdOrderLineItemsPost");
      }
      var pathParams = {
        'order_id': orderId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _OrderLineItem.OrderLineItem;
      return this.apiClient.callApi('/orders/{order_id}/order_line_items', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Creates a new order line item and attaches it to an order. Please note that line items can                           only be added to orders in a &#x60;draft&#x60; state. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: 
     * @param {<&vendorExtensions.x-jsdoc-type>} body 
     * @param {<&vendorExtensions.x-jsdoc-type>} orderId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/OrderLineItem}
     */
  }, {
    key: "ordersOrderIdOrderLineItemsPost",
    value: function ordersOrderIdOrderLineItemsPost(body, orderId) {
      return this.ordersOrderIdOrderLineItemsPostWithHttpInfo(body, orderId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     *  - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: 
     * @param {module:model/OrdersOrderIdBody} body 
     * @param {String} orderId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse2012} and HTTP response
     */
  }, {
    key: "ordersOrderIdPatchWithHttpInfo",
    value: function ordersOrderIdPatchWithHttpInfo(body, orderId) {
      var postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling ordersOrderIdPatch");
      }
      // verify the required parameter 'orderId' is set
      if (orderId === undefined || orderId === null) {
        throw new Error("Missing the required parameter 'orderId' when calling ordersOrderIdPatch");
      }
      var pathParams = {
        'order_id': orderId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _InlineResponse.InlineResponse2012;
      return this.apiClient.callApi('/orders/{order_id}', 'PATCH', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     *  - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: 
     * @param {<&vendorExtensions.x-jsdoc-type>} body 
     * @param {<&vendorExtensions.x-jsdoc-type>} orderId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse2012}
     */
  }, {
    key: "ordersOrderIdPatch",
    value: function ordersOrderIdPatch(body, orderId) {
      return this.ordersOrderIdPatchWithHttpInfo(body, orderId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Removes the payment terms. Removing the payment terms is only possible while                             the order is still in a &#x60;draft&#x60; state. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: 
     * @param {String} orderId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
  }, {
    key: "ordersOrderIdPaymentTermsDeleteWithHttpInfo",
    value: function ordersOrderIdPaymentTermsDeleteWithHttpInfo(orderId) {
      var postBody = null;
      // verify the required parameter 'orderId' is set
      if (orderId === undefined || orderId === null) {
        throw new Error("Missing the required parameter 'orderId' when calling ordersOrderIdPaymentTermsDelete");
      }
      var pathParams = {
        'order_id': orderId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/orders/{order_id}/payment_terms', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Removes the payment terms. Removing the payment terms is only possible while                             the order is still in a &#x60;draft&#x60; state. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: 
     * @param {<&vendorExtensions.x-jsdoc-type>} orderId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
  }, {
    key: "ordersOrderIdPaymentTermsDelete",
    value: function ordersOrderIdPaymentTermsDelete(orderId) {
      return this.ordersOrderIdPaymentTermsDeleteWithHttpInfo(orderId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Returns the payment terms for the specified order. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: &#x60;mission_control.orders.r&#x60;
     * @param {String} orderId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PaymentTerms} and HTTP response
     */
  }, {
    key: "ordersOrderIdPaymentTermsGetWithHttpInfo",
    value: function ordersOrderIdPaymentTermsGetWithHttpInfo(orderId) {
      var postBody = null;
      // verify the required parameter 'orderId' is set
      if (orderId === undefined || orderId === null) {
        throw new Error("Missing the required parameter 'orderId' when calling ordersOrderIdPaymentTermsGet");
      }
      var pathParams = {
        'order_id': orderId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _PaymentTerms.PaymentTerms;
      return this.apiClient.callApi('/orders/{order_id}/payment_terms', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Returns the payment terms for the specified order. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: &#x60;mission_control.orders.r&#x60;
     * @param {<&vendorExtensions.x-jsdoc-type>} orderId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PaymentTerms}
     */
  }, {
    key: "ordersOrderIdPaymentTermsGet",
    value: function ordersOrderIdPaymentTermsGet(orderId) {
      return this.ordersOrderIdPaymentTermsGetWithHttpInfo(orderId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Modifies existing payment terms for the specified order. If payment terms already                           exist they will be overwritten. Creating payment terms is only possible as long as                           the order is in a &#x60;draft&#x60; state. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: 
     * @param {module:model/OrderIdPaymentTermsBody1} body 
     * @param {String} orderId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PaymentTerms} and HTTP response
     */
  }, {
    key: "ordersOrderIdPaymentTermsPatchWithHttpInfo",
    value: function ordersOrderIdPaymentTermsPatchWithHttpInfo(body, orderId) {
      var postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling ordersOrderIdPaymentTermsPatch");
      }
      // verify the required parameter 'orderId' is set
      if (orderId === undefined || orderId === null) {
        throw new Error("Missing the required parameter 'orderId' when calling ordersOrderIdPaymentTermsPatch");
      }
      var pathParams = {
        'order_id': orderId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _PaymentTerms.PaymentTerms;
      return this.apiClient.callApi('/orders/{order_id}/payment_terms', 'PATCH', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Modifies existing payment terms for the specified order. If payment terms already                           exist they will be overwritten. Creating payment terms is only possible as long as                           the order is in a &#x60;draft&#x60; state. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: 
     * @param {<&vendorExtensions.x-jsdoc-type>} body 
     * @param {<&vendorExtensions.x-jsdoc-type>} orderId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PaymentTerms}
     */
  }, {
    key: "ordersOrderIdPaymentTermsPatch",
    value: function ordersOrderIdPaymentTermsPatch(body, orderId) {
      return this.ordersOrderIdPaymentTermsPatchWithHttpInfo(body, orderId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Creates a new payment terms for the specified order. If payment terms already                           exist they will be overwritten. Creating payment terms is only possible as long                           as the order is in a &#x60;draft&#x60; state. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: 
     * @param {module:model/OrderIdPaymentTermsBody} body 
     * @param {String} orderId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PaymentTerms} and HTTP response
     */
  }, {
    key: "ordersOrderIdPaymentTermsPostWithHttpInfo",
    value: function ordersOrderIdPaymentTermsPostWithHttpInfo(body, orderId) {
      var postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling ordersOrderIdPaymentTermsPost");
      }
      // verify the required parameter 'orderId' is set
      if (orderId === undefined || orderId === null) {
        throw new Error("Missing the required parameter 'orderId' when calling ordersOrderIdPaymentTermsPost");
      }
      var pathParams = {
        'order_id': orderId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _PaymentTerms.PaymentTerms;
      return this.apiClient.callApi('/orders/{order_id}/payment_terms', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Creates a new payment terms for the specified order. If payment terms already                           exist they will be overwritten. Creating payment terms is only possible as long                           as the order is in a &#x60;draft&#x60; state. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: 
     * @param {<&vendorExtensions.x-jsdoc-type>} body 
     * @param {<&vendorExtensions.x-jsdoc-type>} orderId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PaymentTerms}
     */
  }, {
    key: "ordersOrderIdPaymentTermsPost",
    value: function ordersOrderIdPaymentTermsPost(body, orderId) {
      return this.ordersOrderIdPaymentTermsPostWithHttpInfo(body, orderId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * List transitions for a given Order, chronologically from most recent to oldest - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: &#x60;mission_control.orders.r&#x60; or &#x60;mission_control.orders.rw&#x60;
     * @param {String} orderId 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page The page of the current collection that shall be returned
     * @param {Number} opts.perPage The maximum number of items included in the response, ie., the page size (default to <.>)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/OrderStateTransition>} and HTTP response
     */
  }, {
    key: "ordersOrderIdStateTransitionsGetWithHttpInfo",
    value: function ordersOrderIdStateTransitionsGetWithHttpInfo(orderId, opts) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'orderId' is set
      if (orderId === undefined || orderId === null) {
        throw new Error("Missing the required parameter 'orderId' when calling ordersOrderIdStateTransitionsGet");
      }
      var pathParams = {
        'order_id': orderId
      };
      var queryParams = {
        'page': opts['page'],
        'per_page': opts['perPage']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_OrderStateTransition.OrderStateTransition];
      return this.apiClient.callApi('/orders/{order_id}/state_transitions', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * List transitions for a given Order, chronologically from most recent to oldest - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: &#x60;mission_control.orders.r&#x60; or &#x60;mission_control.orders.rw&#x60;
     * @param {<&vendorExtensions.x-jsdoc-type>} orderId 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page The page of the current collection that shall be returned
     * @param {Number} opts.perPage The maximum number of items included in the response, ie., the page size (default to <.>)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/OrderStateTransition>}
     */
  }, {
    key: "ordersOrderIdStateTransitionsGet",
    value: function ordersOrderIdStateTransitionsGet(orderId, opts) {
      return this.ordersOrderIdStateTransitionsGetWithHttpInfo(orderId, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Transition an Order to a new state - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: &#x60;mission_control.orders.w&#x60; or &#x60;mission_control.orders.rw&#x60;
     * @param {module:model/OrderIdStateTransitionsBody} body 
     * @param {String} orderId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/OrderStateTransition} and HTTP response
     */
  }, {
    key: "ordersOrderIdStateTransitionsPostWithHttpInfo",
    value: function ordersOrderIdStateTransitionsPostWithHttpInfo(body, orderId) {
      var postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling ordersOrderIdStateTransitionsPost");
      }
      // verify the required parameter 'orderId' is set
      if (orderId === undefined || orderId === null) {
        throw new Error("Missing the required parameter 'orderId' when calling ordersOrderIdStateTransitionsPost");
      }
      var pathParams = {
        'order_id': orderId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _OrderStateTransition.OrderStateTransition;
      return this.apiClient.callApi('/orders/{order_id}/state_transitions', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Transition an Order to a new state - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: &#x60;mission_control.orders.w&#x60; or &#x60;mission_control.orders.rw&#x60;
     * @param {<&vendorExtensions.x-jsdoc-type>} body 
     * @param {<&vendorExtensions.x-jsdoc-type>} orderId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/OrderStateTransition}
     */
  }, {
    key: "ordersOrderIdStateTransitionsPost",
    value: function ordersOrderIdStateTransitionsPost(body, orderId) {
      return this.ordersOrderIdStateTransitionsPostWithHttpInfo(body, orderId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Display a given transition - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: &#x60;mission_control.orders.r&#x60; or &#x60;mission_control.orders.rw&#x60;
     * @param {String} orderId 
     * @param {String} stateTransitionId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/OrderStateTransition} and HTTP response
     */
  }, {
    key: "ordersOrderIdStateTransitionsStateTransitionIdGetWithHttpInfo",
    value: function ordersOrderIdStateTransitionsStateTransitionIdGetWithHttpInfo(orderId, stateTransitionId) {
      var postBody = null;
      // verify the required parameter 'orderId' is set
      if (orderId === undefined || orderId === null) {
        throw new Error("Missing the required parameter 'orderId' when calling ordersOrderIdStateTransitionsStateTransitionIdGet");
      }
      // verify the required parameter 'stateTransitionId' is set
      if (stateTransitionId === undefined || stateTransitionId === null) {
        throw new Error("Missing the required parameter 'stateTransitionId' when calling ordersOrderIdStateTransitionsStateTransitionIdGet");
      }
      var pathParams = {
        'order_id': orderId,
        'state_transition_id': stateTransitionId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _OrderStateTransition.OrderStateTransition;
      return this.apiClient.callApi('/orders/{order_id}/state_transitions/{state_transition_id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Display a given transition - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: &#x60;mission_control.orders.r&#x60; or &#x60;mission_control.orders.rw&#x60;
     * @param {<&vendorExtensions.x-jsdoc-type>} orderId 
     * @param {<&vendorExtensions.x-jsdoc-type>} stateTransitionId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/OrderStateTransition}
     */
  }, {
    key: "ordersOrderIdStateTransitionsStateTransitionIdGet",
    value: function ordersOrderIdStateTransitionsStateTransitionIdGet(orderId, stateTransitionId) {
      return this.ordersOrderIdStateTransitionsStateTransitionIdGetWithHttpInfo(orderId, stateTransitionId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Creates a new order with the given properties. The order will be in state &#x60;draft&#x60; and can be modified as long as that is the case. You can also supply nested properties for line items and the address. DESC, update: &lt;&lt;-DESC.squish Modifies a specific order. Please note that changes are only possible while the order is in &#x60;draft&#x60; state. DESC, destroy: &lt;&lt;-DESC.squish Removes a specific order as long as it still is in &#x60;draft&#x60; state, otherwise the order is set to the &#x60;canceled&#x60; state. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: 
     * @param {module:model/OrdersBody} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse2012} and HTTP response
     */
  }, {
    key: "ordersPostWithHttpInfo",
    value: function ordersPostWithHttpInfo(body) {
      var postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling ordersPost");
      }
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _InlineResponse.InlineResponse2012;
      return this.apiClient.callApi('/orders', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Creates a new order with the given properties. The order will be in state &#x60;draft&#x60; and can be modified as long as that is the case. You can also supply nested properties for line items and the address. DESC, update: &lt;&lt;-DESC.squish Modifies a specific order. Please note that changes are only possible while the order is in &#x60;draft&#x60; state. DESC, destroy: &lt;&lt;-DESC.squish Removes a specific order as long as it still is in &#x60;draft&#x60; state, otherwise the order is set to the &#x60;canceled&#x60; state. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: 
     * @param {<&vendorExtensions.x-jsdoc-type>} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse2012}
     */
  }, {
    key: "ordersPost",
    value: function ordersPost(body) {
      return this.ordersPostWithHttpInfo(body).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);
  return BusinessApi;
}();
exports.BusinessApi = BusinessApi;