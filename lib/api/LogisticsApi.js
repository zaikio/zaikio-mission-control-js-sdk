"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LogisticsApi = void 0;
var _ApiClient = require("../ApiClient");
var _Address = require("../model/Address");
var _Commissioning = require("../model/Commissioning");
var _CommissioningIdPickupsBody = require("../model/CommissioningIdPickupsBody");
var _CommissioningIdShipmentsBody = require("../model/CommissioningIdShipmentsBody");
var _CommissioningsBody = require("../model/CommissioningsBody");
var _CommissioningsCommissioningIdBody = require("../model/CommissioningsCommissioningIdBody");
var _InlineResponse = require("../model/InlineResponse2013");
var _InlineResponse2 = require("../model/InlineResponse400");
var _InlineResponse3 = require("../model/InlineResponse401");
var _Pickup = require("../model/Pickup");
var _PickupsPickupIdBody = require("../model/PickupsPickupIdBody");
var _Shipment = require("../model/Shipment");
var _ShipmentIdAddressBody = require("../model/ShipmentIdAddressBody");
var _ShipmentIdAddressBody2 = require("../model/ShipmentIdAddressBody1");
var _ShipmentsShipmentIdBody = require("../model/ShipmentsShipmentIdBody");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
* Logistics service.
* @module api/LogisticsApi
* @version 1.0.0
*/
var LogisticsApi = /*#__PURE__*/function () {
  /**
  * Constructs a new LogisticsApi. 
  * @alias module:api/LogisticsApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instanc
  e} if unspecified.
  */
  function LogisticsApi(apiClient) {
    _classCallCheck(this, LogisticsApi);
    this.apiClient = apiClient || _ApiClient.ApiClient.instance;
  }

  /**
   * Removes a commissioning. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: &#x60;mission-control.commissionings.w&#x60;
   * @param {String} commissioningId 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
   */
  _createClass(LogisticsApi, [{
    key: "commissioningsCommissioningIdDeleteWithHttpInfo",
    value: function commissioningsCommissioningIdDeleteWithHttpInfo(commissioningId) {
      var postBody = null;
      // verify the required parameter 'commissioningId' is set
      if (commissioningId === undefined || commissioningId === null) {
        throw new Error("Missing the required parameter 'commissioningId' when calling commissioningsCommissioningIdDelete");
      }
      var pathParams = {
        'commissioning_id': commissioningId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/commissionings/{commissioning_id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Removes a commissioning. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: &#x60;mission-control.commissionings.w&#x60;
     * @param {<&vendorExtensions.x-jsdoc-type>} commissioningId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
  }, {
    key: "commissioningsCommissioningIdDelete",
    value: function commissioningsCommissioningIdDelete(commissioningId) {
      return this.commissioningsCommissioningIdDeleteWithHttpInfo(commissioningId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Returns a specific commissioning. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: &#x60;mission-control.commissionings.r&#x60;
     * @param {String} commissioningId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Commissioning} and HTTP response
     */
  }, {
    key: "commissioningsCommissioningIdGetWithHttpInfo",
    value: function commissioningsCommissioningIdGetWithHttpInfo(commissioningId) {
      var postBody = null;
      // verify the required parameter 'commissioningId' is set
      if (commissioningId === undefined || commissioningId === null) {
        throw new Error("Missing the required parameter 'commissioningId' when calling commissioningsCommissioningIdGet");
      }
      var pathParams = {
        'commissioning_id': commissioningId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _Commissioning.Commissioning;
      return this.apiClient.callApi('/commissionings/{commissioning_id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Returns a specific commissioning. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: &#x60;mission-control.commissionings.r&#x60;
     * @param {<&vendorExtensions.x-jsdoc-type>} commissioningId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Commissioning}
     */
  }, {
    key: "commissioningsCommissioningIdGet",
    value: function commissioningsCommissioningIdGet(commissioningId) {
      return this.commissioningsCommissioningIdGetWithHttpInfo(commissioningId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Modifies a commissioning. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: &#x60;mission-control.commissionings.w&#x60;
     * @param {module:model/CommissioningsCommissioningIdBody} body 
     * @param {String} commissioningId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Commissioning} and HTTP response
     */
  }, {
    key: "commissioningsCommissioningIdPatchWithHttpInfo",
    value: function commissioningsCommissioningIdPatchWithHttpInfo(body, commissioningId) {
      var postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling commissioningsCommissioningIdPatch");
      }
      // verify the required parameter 'commissioningId' is set
      if (commissioningId === undefined || commissioningId === null) {
        throw new Error("Missing the required parameter 'commissioningId' when calling commissioningsCommissioningIdPatch");
      }
      var pathParams = {
        'commissioning_id': commissioningId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _Commissioning.Commissioning;
      return this.apiClient.callApi('/commissionings/{commissioning_id}', 'PATCH', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Modifies a commissioning. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: &#x60;mission-control.commissionings.w&#x60;
     * @param {<&vendorExtensions.x-jsdoc-type>} body 
     * @param {<&vendorExtensions.x-jsdoc-type>} commissioningId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Commissioning}
     */
  }, {
    key: "commissioningsCommissioningIdPatch",
    value: function commissioningsCommissioningIdPatch(body, commissioningId) {
      return this.commissioningsCommissioningIdPatchWithHttpInfo(body, commissioningId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Get all pickups of a commissioning. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: &#x60;mission-control.commissionings.r&#x60;
     * @param {String} commissioningId 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page The page of the current collection that shall be returned
     * @param {Number} opts.perPage The maximum number of items included in the response, ie., the page size (default to <.>)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/Pickup>} and HTTP response
     */
  }, {
    key: "commissioningsCommissioningIdPickupsGetWithHttpInfo",
    value: function commissioningsCommissioningIdPickupsGetWithHttpInfo(commissioningId, opts) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'commissioningId' is set
      if (commissioningId === undefined || commissioningId === null) {
        throw new Error("Missing the required parameter 'commissioningId' when calling commissioningsCommissioningIdPickupsGet");
      }
      var pathParams = {
        'commissioning_id': commissioningId
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
      var returnType = [_Pickup.Pickup];
      return this.apiClient.callApi('/commissionings/{commissioning_id}/pickups', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Get all pickups of a commissioning. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: &#x60;mission-control.commissionings.r&#x60;
     * @param {<&vendorExtensions.x-jsdoc-type>} commissioningId 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page The page of the current collection that shall be returned
     * @param {Number} opts.perPage The maximum number of items included in the response, ie., the page size (default to <.>)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/Pickup>}
     */
  }, {
    key: "commissioningsCommissioningIdPickupsGet",
    value: function commissioningsCommissioningIdPickupsGet(commissioningId, opts) {
      return this.commissioningsCommissioningIdPickupsGetWithHttpInfo(commissioningId, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Creates a pickup. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: 
     * @param {module:model/CommissioningIdPickupsBody} body 
     * @param {String} commissioningId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Pickup} and HTTP response
     */
  }, {
    key: "commissioningsCommissioningIdPickupsPostWithHttpInfo",
    value: function commissioningsCommissioningIdPickupsPostWithHttpInfo(body, commissioningId) {
      var postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling commissioningsCommissioningIdPickupsPost");
      }
      // verify the required parameter 'commissioningId' is set
      if (commissioningId === undefined || commissioningId === null) {
        throw new Error("Missing the required parameter 'commissioningId' when calling commissioningsCommissioningIdPickupsPost");
      }
      var pathParams = {
        'commissioning_id': commissioningId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _Pickup.Pickup;
      return this.apiClient.callApi('/commissionings/{commissioning_id}/pickups', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Creates a pickup. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: 
     * @param {<&vendorExtensions.x-jsdoc-type>} body 
     * @param {<&vendorExtensions.x-jsdoc-type>} commissioningId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Pickup}
     */
  }, {
    key: "commissioningsCommissioningIdPickupsPost",
    value: function commissioningsCommissioningIdPickupsPost(body, commissioningId) {
      return this.commissioningsCommissioningIdPickupsPostWithHttpInfo(body, commissioningId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Get all shipments of a commissioning. - needed bearer: &#x60;Organization&#x60; - needed scopes: &#x60;mission-control.commissionings.r&#x60;
     * @param {String} commissioningId 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page The page of the current collection that shall be returned
     * @param {Number} opts.perPage The maximum number of items included in the response, ie., the page size (default to <.>)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/Shipment>} and HTTP response
     */
  }, {
    key: "commissioningsCommissioningIdShipmentsGetWithHttpInfo",
    value: function commissioningsCommissioningIdShipmentsGetWithHttpInfo(commissioningId, opts) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'commissioningId' is set
      if (commissioningId === undefined || commissioningId === null) {
        throw new Error("Missing the required parameter 'commissioningId' when calling commissioningsCommissioningIdShipmentsGet");
      }
      var pathParams = {
        'commissioning_id': commissioningId
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
      var returnType = [_Shipment.Shipment];
      return this.apiClient.callApi('/commissionings/{commissioning_id}/shipments', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Get all shipments of a commissioning. - needed bearer: &#x60;Organization&#x60; - needed scopes: &#x60;mission-control.commissionings.r&#x60;
     * @param {<&vendorExtensions.x-jsdoc-type>} commissioningId 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page The page of the current collection that shall be returned
     * @param {Number} opts.perPage The maximum number of items included in the response, ie., the page size (default to <.>)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/Shipment>}
     */
  }, {
    key: "commissioningsCommissioningIdShipmentsGet",
    value: function commissioningsCommissioningIdShipmentsGet(commissioningId, opts) {
      return this.commissioningsCommissioningIdShipmentsGetWithHttpInfo(commissioningId, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Creates a shipment. - needed bearer: &#x60;Organization&#x60; - needed scopes: 
     * @param {module:model/CommissioningIdShipmentsBody} body 
     * @param {String} commissioningId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse2013} and HTTP response
     */
  }, {
    key: "commissioningsCommissioningIdShipmentsPostWithHttpInfo",
    value: function commissioningsCommissioningIdShipmentsPostWithHttpInfo(body, commissioningId) {
      var postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling commissioningsCommissioningIdShipmentsPost");
      }
      // verify the required parameter 'commissioningId' is set
      if (commissioningId === undefined || commissioningId === null) {
        throw new Error("Missing the required parameter 'commissioningId' when calling commissioningsCommissioningIdShipmentsPost");
      }
      var pathParams = {
        'commissioning_id': commissioningId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _InlineResponse.InlineResponse2013;
      return this.apiClient.callApi('/commissionings/{commissioning_id}/shipments', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Creates a shipment. - needed bearer: &#x60;Organization&#x60; - needed scopes: 
     * @param {<&vendorExtensions.x-jsdoc-type>} body 
     * @param {<&vendorExtensions.x-jsdoc-type>} commissioningId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse2013}
     */
  }, {
    key: "commissioningsCommissioningIdShipmentsPost",
    value: function commissioningsCommissioningIdShipmentsPost(body, commissioningId) {
      return this.commissioningsCommissioningIdShipmentsPostWithHttpInfo(body, commissioningId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Get all commissionings. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: &#x60;mission-control.commissionings.r&#x60;
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page The page of the current collection that shall be returned
     * @param {Number} opts.perPage The maximum number of items included in the response, ie., the page size (default to <.>)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/Commissioning>} and HTTP response
     */
  }, {
    key: "commissioningsGetWithHttpInfo",
    value: function commissioningsGetWithHttpInfo(opts) {
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
      var returnType = [_Commissioning.Commissioning];
      return this.apiClient.callApi('/commissionings', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Get all commissionings. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: &#x60;mission-control.commissionings.r&#x60;
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page The page of the current collection that shall be returned
     * @param {Number} opts.perPage The maximum number of items included in the response, ie., the page size (default to <.>)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/Commissioning>}
     */
  }, {
    key: "commissioningsGet",
    value: function commissioningsGet(opts) {
      return this.commissioningsGetWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Creates a commissioning. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: &#x60;mission-control.commissionings.w&#x60;
     * @param {module:model/CommissioningsBody} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Commissioning} and HTTP response
     */
  }, {
    key: "commissioningsPostWithHttpInfo",
    value: function commissioningsPostWithHttpInfo(body) {
      var postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling commissioningsPost");
      }
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _Commissioning.Commissioning;
      return this.apiClient.callApi('/commissionings', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Creates a commissioning. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: &#x60;mission-control.commissionings.w&#x60;
     * @param {<&vendorExtensions.x-jsdoc-type>} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Commissioning}
     */
  }, {
    key: "commissioningsPost",
    value: function commissioningsPost(body) {
      return this.commissioningsPostWithHttpInfo(body).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Removes a pickup. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: 
     * @param {String} pickupId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
  }, {
    key: "pickupsPickupIdDeleteWithHttpInfo",
    value: function pickupsPickupIdDeleteWithHttpInfo(pickupId) {
      var postBody = null;
      // verify the required parameter 'pickupId' is set
      if (pickupId === undefined || pickupId === null) {
        throw new Error("Missing the required parameter 'pickupId' when calling pickupsPickupIdDelete");
      }
      var pathParams = {
        'pickup_id': pickupId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/pickups/{pickup_id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Removes a pickup. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: 
     * @param {<&vendorExtensions.x-jsdoc-type>} pickupId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
  }, {
    key: "pickupsPickupIdDelete",
    value: function pickupsPickupIdDelete(pickupId) {
      return this.pickupsPickupIdDeleteWithHttpInfo(pickupId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Returns a specific pickup. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: &#x60;mission-control.commissionings.r&#x60;
     * @param {String} pickupId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Pickup} and HTTP response
     */
  }, {
    key: "pickupsPickupIdGetWithHttpInfo",
    value: function pickupsPickupIdGetWithHttpInfo(pickupId) {
      var postBody = null;
      // verify the required parameter 'pickupId' is set
      if (pickupId === undefined || pickupId === null) {
        throw new Error("Missing the required parameter 'pickupId' when calling pickupsPickupIdGet");
      }
      var pathParams = {
        'pickup_id': pickupId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _Pickup.Pickup;
      return this.apiClient.callApi('/pickups/{pickup_id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Returns a specific pickup. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: &#x60;mission-control.commissionings.r&#x60;
     * @param {<&vendorExtensions.x-jsdoc-type>} pickupId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Pickup}
     */
  }, {
    key: "pickupsPickupIdGet",
    value: function pickupsPickupIdGet(pickupId) {
      return this.pickupsPickupIdGetWithHttpInfo(pickupId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Modifies pickup. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: 
     * @param {module:model/PickupsPickupIdBody} body 
     * @param {String} pickupId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Pickup} and HTTP response
     */
  }, {
    key: "pickupsPickupIdPatchWithHttpInfo",
    value: function pickupsPickupIdPatchWithHttpInfo(body, pickupId) {
      var postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling pickupsPickupIdPatch");
      }
      // verify the required parameter 'pickupId' is set
      if (pickupId === undefined || pickupId === null) {
        throw new Error("Missing the required parameter 'pickupId' when calling pickupsPickupIdPatch");
      }
      var pathParams = {
        'pickup_id': pickupId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _Pickup.Pickup;
      return this.apiClient.callApi('/pickups/{pickup_id}', 'PATCH', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Modifies pickup. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: 
     * @param {<&vendorExtensions.x-jsdoc-type>} body 
     * @param {<&vendorExtensions.x-jsdoc-type>} pickupId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Pickup}
     */
  }, {
    key: "pickupsPickupIdPatch",
    value: function pickupsPickupIdPatch(body, pickupId) {
      return this.pickupsPickupIdPatchWithHttpInfo(body, pickupId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Removes the address from a specific shipment as long as the shipment is in                             a &#x60;waiting_for_commission&#x60; state. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: 
     * @param {String} shipmentId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
  }, {
    key: "shipmentsShipmentIdAddressDeleteWithHttpInfo",
    value: function shipmentsShipmentIdAddressDeleteWithHttpInfo(shipmentId) {
      var postBody = null;
      // verify the required parameter 'shipmentId' is set
      if (shipmentId === undefined || shipmentId === null) {
        throw new Error("Missing the required parameter 'shipmentId' when calling shipmentsShipmentIdAddressDelete");
      }
      var pathParams = {
        'shipment_id': shipmentId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/shipments/{shipment_id}/address', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Removes the address from a specific shipment as long as the shipment is in                             a &#x60;waiting_for_commission&#x60; state. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: 
     * @param {<&vendorExtensions.x-jsdoc-type>} shipmentId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
  }, {
    key: "shipmentsShipmentIdAddressDelete",
    value: function shipmentsShipmentIdAddressDelete(shipmentId) {
      return this.shipmentsShipmentIdAddressDeleteWithHttpInfo(shipmentId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Returns the address for this shipment. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: &#x60;mission-control.commissionings.r&#x60;
     * @param {String} shipmentId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Address} and HTTP response
     */
  }, {
    key: "shipmentsShipmentIdAddressGetWithHttpInfo",
    value: function shipmentsShipmentIdAddressGetWithHttpInfo(shipmentId) {
      var postBody = null;
      // verify the required parameter 'shipmentId' is set
      if (shipmentId === undefined || shipmentId === null) {
        throw new Error("Missing the required parameter 'shipmentId' when calling shipmentsShipmentIdAddressGet");
      }
      var pathParams = {
        'shipment_id': shipmentId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _Address.Address;
      return this.apiClient.callApi('/shipments/{shipment_id}/address', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Returns the address for this shipment. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: &#x60;mission-control.commissionings.r&#x60;
     * @param {<&vendorExtensions.x-jsdoc-type>} shipmentId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Address}
     */
  }, {
    key: "shipmentsShipmentIdAddressGet",
    value: function shipmentsShipmentIdAddressGet(shipmentId) {
      return this.shipmentsShipmentIdAddressGetWithHttpInfo(shipmentId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Modifies the address from a specific shipment as long as                           the shipment is still in a &#x60;waiting_for_commission&#x60; state. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: 
     * @param {module:model/ShipmentIdAddressBody1} body 
     * @param {String} shipmentId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Address} and HTTP response
     */
  }, {
    key: "shipmentsShipmentIdAddressPatchWithHttpInfo",
    value: function shipmentsShipmentIdAddressPatchWithHttpInfo(body, shipmentId) {
      var postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling shipmentsShipmentIdAddressPatch");
      }
      // verify the required parameter 'shipmentId' is set
      if (shipmentId === undefined || shipmentId === null) {
        throw new Error("Missing the required parameter 'shipmentId' when calling shipmentsShipmentIdAddressPatch");
      }
      var pathParams = {
        'shipment_id': shipmentId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _Address.Address;
      return this.apiClient.callApi('/shipments/{shipment_id}/address', 'PATCH', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Modifies the address from a specific shipment as long as                           the shipment is still in a &#x60;waiting_for_commission&#x60; state. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: 
     * @param {<&vendorExtensions.x-jsdoc-type>} body 
     * @param {<&vendorExtensions.x-jsdoc-type>} shipmentId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Address}
     */
  }, {
    key: "shipmentsShipmentIdAddressPatch",
    value: function shipmentsShipmentIdAddressPatch(body, shipmentId) {
      return this.shipmentsShipmentIdAddressPatchWithHttpInfo(body, shipmentId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Creates new address. If an address is already present, it will be overwritten.                           Creating an address is only possible as long as the shipment is in                           a &#x60;waiting_for_commission&#x60; state. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: 
     * @param {module:model/ShipmentIdAddressBody} body 
     * @param {String} shipmentId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Address} and HTTP response
     */
  }, {
    key: "shipmentsShipmentIdAddressPostWithHttpInfo",
    value: function shipmentsShipmentIdAddressPostWithHttpInfo(body, shipmentId) {
      var postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling shipmentsShipmentIdAddressPost");
      }
      // verify the required parameter 'shipmentId' is set
      if (shipmentId === undefined || shipmentId === null) {
        throw new Error("Missing the required parameter 'shipmentId' when calling shipmentsShipmentIdAddressPost");
      }
      var pathParams = {
        'shipment_id': shipmentId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _Address.Address;
      return this.apiClient.callApi('/shipments/{shipment_id}/address', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Creates new address. If an address is already present, it will be overwritten.                           Creating an address is only possible as long as the shipment is in                           a &#x60;waiting_for_commission&#x60; state. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: 
     * @param {<&vendorExtensions.x-jsdoc-type>} body 
     * @param {<&vendorExtensions.x-jsdoc-type>} shipmentId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Address}
     */
  }, {
    key: "shipmentsShipmentIdAddressPost",
    value: function shipmentsShipmentIdAddressPost(body, shipmentId) {
      return this.shipmentsShipmentIdAddressPostWithHttpInfo(body, shipmentId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Removes a shipment. - needed bearer: &#x60;Organization&#x60; - needed scopes: 
     * @param {String} shipmentId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
  }, {
    key: "shipmentsShipmentIdDeleteWithHttpInfo",
    value: function shipmentsShipmentIdDeleteWithHttpInfo(shipmentId) {
      var postBody = null;
      // verify the required parameter 'shipmentId' is set
      if (shipmentId === undefined || shipmentId === null) {
        throw new Error("Missing the required parameter 'shipmentId' when calling shipmentsShipmentIdDelete");
      }
      var pathParams = {
        'shipment_id': shipmentId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/shipments/{shipment_id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Removes a shipment. - needed bearer: &#x60;Organization&#x60; - needed scopes: 
     * @param {<&vendorExtensions.x-jsdoc-type>} shipmentId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
  }, {
    key: "shipmentsShipmentIdDelete",
    value: function shipmentsShipmentIdDelete(shipmentId) {
      return this.shipmentsShipmentIdDeleteWithHttpInfo(shipmentId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Returns a specific shipment. - needed bearer: &#x60;Organization&#x60; - needed scopes: &#x60;mission-control.commissionings.r&#x60;
     * @param {String} shipmentId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse2013} and HTTP response
     */
  }, {
    key: "shipmentsShipmentIdGetWithHttpInfo",
    value: function shipmentsShipmentIdGetWithHttpInfo(shipmentId) {
      var postBody = null;
      // verify the required parameter 'shipmentId' is set
      if (shipmentId === undefined || shipmentId === null) {
        throw new Error("Missing the required parameter 'shipmentId' when calling shipmentsShipmentIdGet");
      }
      var pathParams = {
        'shipment_id': shipmentId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _InlineResponse.InlineResponse2013;
      return this.apiClient.callApi('/shipments/{shipment_id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Returns a specific shipment. - needed bearer: &#x60;Organization&#x60; - needed scopes: &#x60;mission-control.commissionings.r&#x60;
     * @param {<&vendorExtensions.x-jsdoc-type>} shipmentId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse2013}
     */
  }, {
    key: "shipmentsShipmentIdGet",
    value: function shipmentsShipmentIdGet(shipmentId) {
      return this.shipmentsShipmentIdGetWithHttpInfo(shipmentId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Modifies a shipment. - needed bearer: &#x60;Organization&#x60; - needed scopes: 
     * @param {module:model/ShipmentsShipmentIdBody} body 
     * @param {String} shipmentId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse2013} and HTTP response
     */
  }, {
    key: "shipmentsShipmentIdPatchWithHttpInfo",
    value: function shipmentsShipmentIdPatchWithHttpInfo(body, shipmentId) {
      var postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling shipmentsShipmentIdPatch");
      }
      // verify the required parameter 'shipmentId' is set
      if (shipmentId === undefined || shipmentId === null) {
        throw new Error("Missing the required parameter 'shipmentId' when calling shipmentsShipmentIdPatch");
      }
      var pathParams = {
        'shipment_id': shipmentId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _InlineResponse.InlineResponse2013;
      return this.apiClient.callApi('/shipments/{shipment_id}', 'PATCH', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Modifies a shipment. - needed bearer: &#x60;Organization&#x60; - needed scopes: 
     * @param {<&vendorExtensions.x-jsdoc-type>} body 
     * @param {<&vendorExtensions.x-jsdoc-type>} shipmentId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse2013}
     */
  }, {
    key: "shipmentsShipmentIdPatch",
    value: function shipmentsShipmentIdPatch(body, shipmentId) {
      return this.shipmentsShipmentIdPatchWithHttpInfo(body, shipmentId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);
  return LogisticsApi;
}();
exports.LogisticsApi = LogisticsApi;