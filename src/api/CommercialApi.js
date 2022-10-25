/*
 * Mission Control
 * This is the documentation of all API endpoints provided by Mission Control.  ## Provided OAuth Scopes - `mission_control.commissionings.r` [`Commissioning`]: Read information of all commissionings - `mission_control.commissionings.w` [`Commissioning`]: Create or update commissioning related models - `mission_control.estimates.r` [`Estimate`]: Read information of all Estimates - `mission_control.estimates.w` [`Estimate`]: Create or update all kinds of Estimates - `mission_control.lists.r` [`List`]: Read information of all List objects - `mission_control.lists.r` [`List`]: Create or update List objects - `mission_control.orders.r` [`Order`]: Read information of all orders - `mission_control.orders.w` [`Order`]: Create or update new orders - `mission_control.jobs.r` [`Job`]: Read basic information of all jobs currently or formerly in production (`GET /jobs/_*`) - `mission_control.jobs.w` [`Job`]: Create or update new jobs (`POST /jobs/_*`, `PATCH /jobs/_*`) 
 *
 * OpenAPI spec version: 1.0.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.35
 *
 * Do not edit the class manually.
 *
 */
import {ApiClient} from "../ApiClient";
import {Address} from '../model/Address';
import {InlineResponse2012} from '../model/InlineResponse2012';
import {InlineResponse400} from '../model/InlineResponse400';
import {InlineResponse401} from '../model/InlineResponse401';
import {Order} from '../model/Order';
import {OrderIdAddressBody} from '../model/OrderIdAddressBody';
import {OrderIdAddressBody1} from '../model/OrderIdAddressBody1';
import {OrderIdOrderLineItemsBody} from '../model/OrderIdOrderLineItemsBody';
import {OrderIdPaymentTermsBody} from '../model/OrderIdPaymentTermsBody';
import {OrderIdPaymentTermsBody1} from '../model/OrderIdPaymentTermsBody1';
import {OrderLineItem} from '../model/OrderLineItem';
import {OrderLineItemsOrderLineItemIdBody} from '../model/OrderLineItemsOrderLineItemIdBody';
import {OrdersBody} from '../model/OrdersBody';
import {OrdersOrderIdBody} from '../model/OrdersOrderIdBody';
import {PaymentTerms} from '../model/PaymentTerms';

/**
* Commercial service.
* @module api/CommercialApi
* @version 1.0.0
*/
export class CommercialApi {

    /**
    * Constructs a new CommercialApi. 
    * @alias module:api/CommercialApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the orderLineItemsOrderLineItemIdDelete operation.
     * @callback moduleapi/CommercialApi~orderLineItemsOrderLineItemIdDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Removes or specific order line item. Please not that removing line items is only possible                             if the parent order is still in a &#x60;draft&#x60; state. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: 
     * @param {String} orderLineItemId 
     * @param {module:api/CommercialApi~orderLineItemsOrderLineItemIdDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */
    orderLineItemsOrderLineItemIdDelete(orderLineItemId, callback) {
      
      let postBody = null;
      // verify the required parameter 'orderLineItemId' is set
      if (orderLineItemId === undefined || orderLineItemId === null) {
        throw new Error("Missing the required parameter 'orderLineItemId' when calling orderLineItemsOrderLineItemIdDelete");
      }

      let pathParams = {
        'order_line_item_id': orderLineItemId
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['bearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = null;

      return this.apiClient.callApi(
        '/order_line_items/{order_line_item_id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the orderLineItemsOrderLineItemIdGet operation.
     * @callback moduleapi/CommercialApi~orderLineItemsOrderLineItemIdGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/OrderLineItem{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns a specific order line item. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: &#x60;mission_control.orders.r&#x60;
     * @param {String} orderLineItemId 
     * @param {module:api/CommercialApi~orderLineItemsOrderLineItemIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    orderLineItemsOrderLineItemIdGet(orderLineItemId, callback) {
      
      let postBody = null;
      // verify the required parameter 'orderLineItemId' is set
      if (orderLineItemId === undefined || orderLineItemId === null) {
        throw new Error("Missing the required parameter 'orderLineItemId' when calling orderLineItemsOrderLineItemIdGet");
      }

      let pathParams = {
        'order_line_item_id': orderLineItemId
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['bearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = OrderLineItem;

      return this.apiClient.callApi(
        '/order_line_items/{order_line_item_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the orderLineItemsOrderLineItemIdPatch operation.
     * @callback moduleapi/CommercialApi~orderLineItemsOrderLineItemIdPatchCallback
     * @param {String} error Error message, if any.
     * @param {module:model/OrderLineItem{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Modifies a specfic order line item. Please not that any modifications to order line items                           are only possible as long as the parent order is in a &#x60;draft&#x60; state. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: 
     * @param {module:model/OrderLineItemsOrderLineItemIdBody} body 
     * @param {String} orderLineItemId 
     * @param {module:api/CommercialApi~orderLineItemsOrderLineItemIdPatchCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    orderLineItemsOrderLineItemIdPatch(body, orderLineItemId, callback) {
      
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling orderLineItemsOrderLineItemIdPatch");
      }
      // verify the required parameter 'orderLineItemId' is set
      if (orderLineItemId === undefined || orderLineItemId === null) {
        throw new Error("Missing the required parameter 'orderLineItemId' when calling orderLineItemsOrderLineItemIdPatch");
      }

      let pathParams = {
        'order_line_item_id': orderLineItemId
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['bearerAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = OrderLineItem;

      return this.apiClient.callApi(
        '/order_line_items/{order_line_item_id}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the ordersGet operation.
     * @callback moduleapi/CommercialApi~ordersGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Order>{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns all orders that have already been confirmed. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: &#x60;mission_control.orders.r&#x60;
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page The page of the current collection that shall be returned
     * @param {Number} opts.perPage The maximum number of items included in the response, ie., the page size (default to <.>)
     * @param {module:api/CommercialApi~ordersGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    ordersGet(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
        
      };
      let queryParams = {
        'page': opts['page'],'per_page': opts['perPage']
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['bearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [Order];

      return this.apiClient.callApi(
        '/orders', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the ordersOrderIdAddressDelete operation.
     * @callback moduleapi/CommercialApi~ordersOrderIdAddressDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Removes the address from a specific order as long as the order is in a &#x60;draft&#x60; state. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: 
     * @param {String} orderId 
     * @param {module:api/CommercialApi~ordersOrderIdAddressDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */
    ordersOrderIdAddressDelete(orderId, callback) {
      
      let postBody = null;
      // verify the required parameter 'orderId' is set
      if (orderId === undefined || orderId === null) {
        throw new Error("Missing the required parameter 'orderId' when calling ordersOrderIdAddressDelete");
      }

      let pathParams = {
        'order_id': orderId
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['bearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = null;

      return this.apiClient.callApi(
        '/orders/{order_id}/address', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the ordersOrderIdAddressGet operation.
     * @callback moduleapi/CommercialApi~ordersOrderIdAddressGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Address{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns the address for this order. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: &#x60;mission-control.orders.r&#x60;
     * @param {String} orderId 
     * @param {module:api/CommercialApi~ordersOrderIdAddressGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    ordersOrderIdAddressGet(orderId, callback) {
      
      let postBody = null;
      // verify the required parameter 'orderId' is set
      if (orderId === undefined || orderId === null) {
        throw new Error("Missing the required parameter 'orderId' when calling ordersOrderIdAddressGet");
      }

      let pathParams = {
        'order_id': orderId
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['bearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Address;

      return this.apiClient.callApi(
        '/orders/{order_id}/address', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the ordersOrderIdAddressPatch operation.
     * @callback moduleapi/CommercialApi~ordersOrderIdAddressPatchCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Address{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Modifies the address from a specific order as long as                   the order is still in a &#x60;draft&#x60; state. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: 
     * @param {module:model/OrderIdAddressBody1} body 
     * @param {String} orderId 
     * @param {module:api/CommercialApi~ordersOrderIdAddressPatchCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    ordersOrderIdAddressPatch(body, orderId, callback) {
      
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling ordersOrderIdAddressPatch");
      }
      // verify the required parameter 'orderId' is set
      if (orderId === undefined || orderId === null) {
        throw new Error("Missing the required parameter 'orderId' when calling ordersOrderIdAddressPatch");
      }

      let pathParams = {
        'order_id': orderId
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['bearerAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = Address;

      return this.apiClient.callApi(
        '/orders/{order_id}/address', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the ordersOrderIdAddressPost operation.
     * @callback moduleapi/CommercialApi~ordersOrderIdAddressPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Address{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Creates new address. If an address is already present, it will be overwritten.                   Creating an address is only possible as long as the order is in a &#x60;draft&#x60; state. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: 
     * @param {module:model/OrderIdAddressBody} body 
     * @param {String} orderId 
     * @param {module:api/CommercialApi~ordersOrderIdAddressPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    ordersOrderIdAddressPost(body, orderId, callback) {
      
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling ordersOrderIdAddressPost");
      }
      // verify the required parameter 'orderId' is set
      if (orderId === undefined || orderId === null) {
        throw new Error("Missing the required parameter 'orderId' when calling ordersOrderIdAddressPost");
      }

      let pathParams = {
        'order_id': orderId
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['bearerAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = Address;

      return this.apiClient.callApi(
        '/orders/{order_id}/address', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the ordersOrderIdDelete operation.
     * @callback moduleapi/CommercialApi~ordersOrderIdDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Removes a specific order as long as it still is in &#x60;draft&#x60; state, otherwise the order                           is set to the &#x60;canceled&#x60; state. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: 
     * @param {String} orderId 
     * @param {module:api/CommercialApi~ordersOrderIdDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */
    ordersOrderIdDelete(orderId, callback) {
      
      let postBody = null;
      // verify the required parameter 'orderId' is set
      if (orderId === undefined || orderId === null) {
        throw new Error("Missing the required parameter 'orderId' when calling ordersOrderIdDelete");
      }

      let pathParams = {
        'order_id': orderId
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['bearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = null;

      return this.apiClient.callApi(
        '/orders/{order_id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the ordersOrderIdGet operation.
     * @callback moduleapi/CommercialApi~ordersOrderIdGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2012{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns a specific order, including the address, payment terms and line items. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: &#x60;mission_control.orders.r&#x60;
     * @param {String} orderId 
     * @param {module:api/CommercialApi~ordersOrderIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    ordersOrderIdGet(orderId, callback) {
      
      let postBody = null;
      // verify the required parameter 'orderId' is set
      if (orderId === undefined || orderId === null) {
        throw new Error("Missing the required parameter 'orderId' when calling ordersOrderIdGet");
      }

      let pathParams = {
        'order_id': orderId
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['bearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = InlineResponse2012;

      return this.apiClient.callApi(
        '/orders/{order_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the ordersOrderIdOrderLineItemsGet operation.
     * @callback moduleapi/CommercialApi~ordersOrderIdOrderLineItemsGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/OrderLineItem>{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns all line item of a specific order. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: &#x60;mission_control.orders.r&#x60;
     * @param {String} orderId 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page The page of the current collection that shall be returned
     * @param {Number} opts.perPage The maximum number of items included in the response, ie., the page size (default to <.>)
     * @param {module:api/CommercialApi~ordersOrderIdOrderLineItemsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    ordersOrderIdOrderLineItemsGet(orderId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'orderId' is set
      if (orderId === undefined || orderId === null) {
        throw new Error("Missing the required parameter 'orderId' when calling ordersOrderIdOrderLineItemsGet");
      }

      let pathParams = {
        'order_id': orderId
      };
      let queryParams = {
        'page': opts['page'],'per_page': opts['perPage']
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['bearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [OrderLineItem];

      return this.apiClient.callApi(
        '/orders/{order_id}/order_line_items', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the ordersOrderIdOrderLineItemsPost operation.
     * @callback moduleapi/CommercialApi~ordersOrderIdOrderLineItemsPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/OrderLineItem{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Creates a new order line item and attaches it to an order. Please note that line items can                           only be added to orders in a &#x60;draft&#x60; state. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: 
     * @param {module:model/OrderIdOrderLineItemsBody} body 
     * @param {String} orderId 
     * @param {module:api/CommercialApi~ordersOrderIdOrderLineItemsPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    ordersOrderIdOrderLineItemsPost(body, orderId, callback) {
      
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling ordersOrderIdOrderLineItemsPost");
      }
      // verify the required parameter 'orderId' is set
      if (orderId === undefined || orderId === null) {
        throw new Error("Missing the required parameter 'orderId' when calling ordersOrderIdOrderLineItemsPost");
      }

      let pathParams = {
        'order_id': orderId
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['bearerAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = OrderLineItem;

      return this.apiClient.callApi(
        '/orders/{order_id}/order_line_items', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the ordersOrderIdPatch operation.
     * @callback moduleapi/CommercialApi~ordersOrderIdPatchCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2012{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Modifies a specific order. Please note that changes are only possible while the order                         is in &#x60;draft&#x60; state. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: 
     * @param {module:model/OrdersOrderIdBody} body 
     * @param {String} orderId 
     * @param {module:api/CommercialApi~ordersOrderIdPatchCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    ordersOrderIdPatch(body, orderId, callback) {
      
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling ordersOrderIdPatch");
      }
      // verify the required parameter 'orderId' is set
      if (orderId === undefined || orderId === null) {
        throw new Error("Missing the required parameter 'orderId' when calling ordersOrderIdPatch");
      }

      let pathParams = {
        'order_id': orderId
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['bearerAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = InlineResponse2012;

      return this.apiClient.callApi(
        '/orders/{order_id}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the ordersOrderIdPaymentTermsDelete operation.
     * @callback moduleapi/CommercialApi~ordersOrderIdPaymentTermsDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Removes the payment terms. Removing the payment terms is only possible while                             the order is still in a &#x60;draft&#x60; state. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: 
     * @param {String} orderId 
     * @param {module:api/CommercialApi~ordersOrderIdPaymentTermsDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */
    ordersOrderIdPaymentTermsDelete(orderId, callback) {
      
      let postBody = null;
      // verify the required parameter 'orderId' is set
      if (orderId === undefined || orderId === null) {
        throw new Error("Missing the required parameter 'orderId' when calling ordersOrderIdPaymentTermsDelete");
      }

      let pathParams = {
        'order_id': orderId
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['bearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = null;

      return this.apiClient.callApi(
        '/orders/{order_id}/payment_terms', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the ordersOrderIdPaymentTermsGet operation.
     * @callback moduleapi/CommercialApi~ordersOrderIdPaymentTermsGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PaymentTerms{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns the payment terms for the specified order. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: &#x60;mission_control.orders.r&#x60;
     * @param {String} orderId 
     * @param {module:api/CommercialApi~ordersOrderIdPaymentTermsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    ordersOrderIdPaymentTermsGet(orderId, callback) {
      
      let postBody = null;
      // verify the required parameter 'orderId' is set
      if (orderId === undefined || orderId === null) {
        throw new Error("Missing the required parameter 'orderId' when calling ordersOrderIdPaymentTermsGet");
      }

      let pathParams = {
        'order_id': orderId
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['bearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = PaymentTerms;

      return this.apiClient.callApi(
        '/orders/{order_id}/payment_terms', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the ordersOrderIdPaymentTermsPatch operation.
     * @callback moduleapi/CommercialApi~ordersOrderIdPaymentTermsPatchCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PaymentTerms{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Modifies existing payment terms for the specified order. If payment terms already                           exist they will be overwritten. Creating payment terms is only possible as long as                           the order is in a &#x60;draft&#x60; state. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: 
     * @param {module:model/OrderIdPaymentTermsBody1} body 
     * @param {String} orderId 
     * @param {module:api/CommercialApi~ordersOrderIdPaymentTermsPatchCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    ordersOrderIdPaymentTermsPatch(body, orderId, callback) {
      
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling ordersOrderIdPaymentTermsPatch");
      }
      // verify the required parameter 'orderId' is set
      if (orderId === undefined || orderId === null) {
        throw new Error("Missing the required parameter 'orderId' when calling ordersOrderIdPaymentTermsPatch");
      }

      let pathParams = {
        'order_id': orderId
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['bearerAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = PaymentTerms;

      return this.apiClient.callApi(
        '/orders/{order_id}/payment_terms', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the ordersOrderIdPaymentTermsPost operation.
     * @callback moduleapi/CommercialApi~ordersOrderIdPaymentTermsPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PaymentTerms{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Creates a new payment terms for the specified order. If payment terms already                           exist they will be overwritten. Creating payment terms is only possible as long                           as the order is in a &#x60;draft&#x60; state. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: 
     * @param {module:model/OrderIdPaymentTermsBody} body 
     * @param {String} orderId 
     * @param {module:api/CommercialApi~ordersOrderIdPaymentTermsPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    ordersOrderIdPaymentTermsPost(body, orderId, callback) {
      
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling ordersOrderIdPaymentTermsPost");
      }
      // verify the required parameter 'orderId' is set
      if (orderId === undefined || orderId === null) {
        throw new Error("Missing the required parameter 'orderId' when calling ordersOrderIdPaymentTermsPost");
      }

      let pathParams = {
        'order_id': orderId
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['bearerAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = PaymentTerms;

      return this.apiClient.callApi(
        '/orders/{order_id}/payment_terms', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the ordersPost operation.
     * @callback moduleapi/CommercialApi~ordersPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2012{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Creates a new order with the given properties. The order will be in state &#x60;draft&#x60; and                         can be modified as long as that is the case. You can also supply nested properties for                           line items and the address. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: 
     * @param {module:model/OrdersBody} body 
     * @param {module:api/CommercialApi~ordersPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    ordersPost(body, callback) {
      
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling ordersPost");
      }

      let pathParams = {
        
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['bearerAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = InlineResponse2012;

      return this.apiClient.callApi(
        '/orders', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}