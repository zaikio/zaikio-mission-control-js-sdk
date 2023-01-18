"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProductionApi = void 0;
var _ApiClient = require("../ApiClient");
var _Batch = require("../model/Batch");
var _BatchesBatchIdBody = require("../model/BatchesBatchIdBody");
var _BatchesBody = require("../model/BatchesBody");
var _Imposing = require("../model/Imposing");
var _ImposingIdSignaturesBody = require("../model/ImposingIdSignaturesBody");
var _ImposingsImposingIdBody = require("../model/ImposingsImposingIdBody");
var _InlineResponse = require("../model/InlineResponse201");
var _InlineResponse2 = require("../model/InlineResponse2011");
var _InlineResponse3 = require("../model/InlineResponse400");
var _InlineResponse4 = require("../model/InlineResponse401");
var _IntermediateProduct = require("../model/IntermediateProduct");
var _IntermediateProductsIntermediateProductIdBody = require("../model/IntermediateProductsIntermediateProductIdBody");
var _JobIdIntermediateProductsBody = require("../model/JobIdIntermediateProductsBody");
var _JobIdProductionStrategiesBody = require("../model/JobIdProductionStrategiesBody");
var _JobIdTodosBody = require("../model/JobIdTodosBody");
var _ProductionPathsBody = require("../model/ProductionPathsBody");
var _ProductionStrategiesProductionStrategyIdBody = require("../model/ProductionStrategiesProductionStrategyIdBody");
var _ProductionStrategy = require("../model/ProductionStrategy");
var _ProductionStrategyIdImposingsBody = require("../model/ProductionStrategyIdImposingsBody");
var _Signature = require("../model/Signature");
var _SignaturesSignatureIdBody = require("../model/SignaturesSignatureIdBody");
var _Todo = require("../model/Todo");
var _TodosTodoIdBody = require("../model/TodosTodoIdBody");
var _Workstep = require("../model/Workstep");
var _WorkstepGroup = require("../model/WorkstepGroup");
var _WorkstepGroupsBody = require("../model/WorkstepGroupsBody");
var _WorkstepGroupsWorkstepGroupIdBody = require("../model/WorkstepGroupsWorkstepGroupIdBody");
var _WorkstepsBody = require("../model/WorkstepsBody");
var _WorkstepsWorkstepIdBody = require("../model/WorkstepsWorkstepIdBody");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
* Production service.
* @module api/ProductionApi
* @version 1.0.0
*/
var ProductionApi = /*#__PURE__*/function () {
  /**
  * Constructs a new ProductionApi. 
  * @alias module:api/ProductionApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instanc
  e} if unspecified.
  */
  function ProductionApi(apiClient) {
    _classCallCheck(this, ProductionApi);
    this.apiClient = apiClient || _ApiClient.ApiClient.instance;
  }

  /**
   * Remove a Batch. This will remove all associated linked Production resources too - needed bearer: &#x60;Organization&#x60; - needed scopes: &#x60;mission_control.production.w&#x60; or &#x60;mission_control.production.rw&#x60;
   * @param {String} batchId 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
   */
  _createClass(ProductionApi, [{
    key: "batchesBatchIdDeleteWithHttpInfo",
    value: function batchesBatchIdDeleteWithHttpInfo(batchId) {
      var postBody = null;
      // verify the required parameter 'batchId' is set
      if (batchId === undefined || batchId === null) {
        throw new Error("Missing the required parameter 'batchId' when calling batchesBatchIdDelete");
      }
      var pathParams = {
        'batch_id': batchId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/batches/{batch_id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Remove a Batch. This will remove all associated linked Production resources too - needed bearer: &#x60;Organization&#x60; - needed scopes: &#x60;mission_control.production.w&#x60; or &#x60;mission_control.production.rw&#x60;
     * @param {<&vendorExtensions.x-jsdoc-type>} batchId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
  }, {
    key: "batchesBatchIdDelete",
    value: function batchesBatchIdDelete(batchId) {
      return this.batchesBatchIdDeleteWithHttpInfo(batchId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Return in depth information about a single Batch - needed bearer: &#x60;Organization&#x60; - needed scopes: &#x60;mission_control.production.r&#x60; or &#x60;mission_control.production.rw&#x60;
     * @param {String} batchId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Batch} and HTTP response
     */
  }, {
    key: "batchesBatchIdGetWithHttpInfo",
    value: function batchesBatchIdGetWithHttpInfo(batchId) {
      var postBody = null;
      // verify the required parameter 'batchId' is set
      if (batchId === undefined || batchId === null) {
        throw new Error("Missing the required parameter 'batchId' when calling batchesBatchIdGet");
      }
      var pathParams = {
        'batch_id': batchId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _Batch.Batch;
      return this.apiClient.callApi('/batches/{batch_id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Return in depth information about a single Batch - needed bearer: &#x60;Organization&#x60; - needed scopes: &#x60;mission_control.production.r&#x60; or &#x60;mission_control.production.rw&#x60;
     * @param {<&vendorExtensions.x-jsdoc-type>} batchId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Batch}
     */
  }, {
    key: "batchesBatchIdGet",
    value: function batchesBatchIdGet(batchId) {
      return this.batchesBatchIdGetWithHttpInfo(batchId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Update the details of a Batch - needed bearer: &#x60;Organization&#x60; - needed scopes: &#x60;mission_control.production.w&#x60; or &#x60;mission_control.production.rw&#x60;
     * @param {module:model/BatchesBatchIdBody} body 
     * @param {String} batchId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Batch} and HTTP response
     */
  }, {
    key: "batchesBatchIdPatchWithHttpInfo",
    value: function batchesBatchIdPatchWithHttpInfo(body, batchId) {
      var postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling batchesBatchIdPatch");
      }
      // verify the required parameter 'batchId' is set
      if (batchId === undefined || batchId === null) {
        throw new Error("Missing the required parameter 'batchId' when calling batchesBatchIdPatch");
      }
      var pathParams = {
        'batch_id': batchId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _Batch.Batch;
      return this.apiClient.callApi('/batches/{batch_id}', 'PATCH', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Update the details of a Batch - needed bearer: &#x60;Organization&#x60; - needed scopes: &#x60;mission_control.production.w&#x60; or &#x60;mission_control.production.rw&#x60;
     * @param {<&vendorExtensions.x-jsdoc-type>} body 
     * @param {<&vendorExtensions.x-jsdoc-type>} batchId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Batch}
     */
  }, {
    key: "batchesBatchIdPatch",
    value: function batchesBatchIdPatch(body, batchId) {
      return this.batchesBatchIdPatchWithHttpInfo(body, batchId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Return all Batches for the current caller - needed bearer: &#x60;Organization&#x60; - needed scopes: &#x60;mission_control.production.r&#x60; or &#x60;mission_control.production.rw&#x60;
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page The page of the current collection that shall be returned
     * @param {Number} opts.perPage The maximum number of items included in the response, ie., the page size (default to <.>)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/Batch>} and HTTP response
     */
  }, {
    key: "batchesGetWithHttpInfo",
    value: function batchesGetWithHttpInfo(opts) {
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
      var returnType = [_Batch.Batch];
      return this.apiClient.callApi('/batches', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Return all Batches for the current caller - needed bearer: &#x60;Organization&#x60; - needed scopes: &#x60;mission_control.production.r&#x60; or &#x60;mission_control.production.rw&#x60;
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page The page of the current collection that shall be returned
     * @param {Number} opts.perPage The maximum number of items included in the response, ie., the page size (default to <.>)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/Batch>}
     */
  }, {
    key: "batchesGet",
    value: function batchesGet(opts) {
      return this.batchesGetWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Create a new Batch for producing multiple Parts together - needed bearer: &#x60;Organization&#x60; - needed scopes: &#x60;mission_control.production.w&#x60; or &#x60;mission_control.production.rw&#x60;
     * @param {module:model/BatchesBody} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Batch} and HTTP response
     */
  }, {
    key: "batchesPostWithHttpInfo",
    value: function batchesPostWithHttpInfo(body) {
      var postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling batchesPost");
      }
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _Batch.Batch;
      return this.apiClient.callApi('/batches', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Create a new Batch for producing multiple Parts together - needed bearer: &#x60;Organization&#x60; - needed scopes: &#x60;mission_control.production.w&#x60; or &#x60;mission_control.production.rw&#x60;
     * @param {<&vendorExtensions.x-jsdoc-type>} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Batch}
     */
  }, {
    key: "batchesPost",
    value: function batchesPost(body) {
      return this.batchesPostWithHttpInfo(body).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Remove an Imposing from the ProductionStrategy - needed bearer: &#x60;Organization&#x60; - needed scopes: &#x60;mission_control.jobs.w&#x60; or &#x60;mission_control.jobs.rw&#x60;
     * @param {String} imposingId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
  }, {
    key: "imposingsImposingIdDeleteWithHttpInfo",
    value: function imposingsImposingIdDeleteWithHttpInfo(imposingId) {
      var postBody = null;
      // verify the required parameter 'imposingId' is set
      if (imposingId === undefined || imposingId === null) {
        throw new Error("Missing the required parameter 'imposingId' when calling imposingsImposingIdDelete");
      }
      var pathParams = {
        'imposing_id': imposingId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/imposings/{imposing_id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Remove an Imposing from the ProductionStrategy - needed bearer: &#x60;Organization&#x60; - needed scopes: &#x60;mission_control.jobs.w&#x60; or &#x60;mission_control.jobs.rw&#x60;
     * @param {<&vendorExtensions.x-jsdoc-type>} imposingId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
  }, {
    key: "imposingsImposingIdDelete",
    value: function imposingsImposingIdDelete(imposingId) {
      return this.imposingsImposingIdDeleteWithHttpInfo(imposingId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Show the full details of a given Imposing including all Signatures - needed bearer: &#x60;Organization&#x60; - needed scopes: &#x60;mission_control.jobs.r&#x60; or &#x60;mission_control.jobs.rw&#x60;
     * @param {String} imposingId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Imposing} and HTTP response
     */
  }, {
    key: "imposingsImposingIdGetWithHttpInfo",
    value: function imposingsImposingIdGetWithHttpInfo(imposingId) {
      var postBody = null;
      // verify the required parameter 'imposingId' is set
      if (imposingId === undefined || imposingId === null) {
        throw new Error("Missing the required parameter 'imposingId' when calling imposingsImposingIdGet");
      }
      var pathParams = {
        'imposing_id': imposingId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _Imposing.Imposing;
      return this.apiClient.callApi('/imposings/{imposing_id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Show the full details of a given Imposing including all Signatures - needed bearer: &#x60;Organization&#x60; - needed scopes: &#x60;mission_control.jobs.r&#x60; or &#x60;mission_control.jobs.rw&#x60;
     * @param {<&vendorExtensions.x-jsdoc-type>} imposingId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Imposing}
     */
  }, {
    key: "imposingsImposingIdGet",
    value: function imposingsImposingIdGet(imposingId) {
      return this.imposingsImposingIdGetWithHttpInfo(imposingId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Update an Imposing - needed bearer: &#x60;Organization&#x60; - needed scopes: &#x60;mission_control.jobs.w&#x60; or &#x60;mission_control.jobs.rw&#x60;
     * @param {module:model/ImposingsImposingIdBody} body 
     * @param {String} imposingId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Imposing} and HTTP response
     */
  }, {
    key: "imposingsImposingIdPatchWithHttpInfo",
    value: function imposingsImposingIdPatchWithHttpInfo(body, imposingId) {
      var postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling imposingsImposingIdPatch");
      }
      // verify the required parameter 'imposingId' is set
      if (imposingId === undefined || imposingId === null) {
        throw new Error("Missing the required parameter 'imposingId' when calling imposingsImposingIdPatch");
      }
      var pathParams = {
        'imposing_id': imposingId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _Imposing.Imposing;
      return this.apiClient.callApi('/imposings/{imposing_id}', 'PATCH', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Update an Imposing - needed bearer: &#x60;Organization&#x60; - needed scopes: &#x60;mission_control.jobs.w&#x60; or &#x60;mission_control.jobs.rw&#x60;
     * @param {<&vendorExtensions.x-jsdoc-type>} body 
     * @param {<&vendorExtensions.x-jsdoc-type>} imposingId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Imposing}
     */
  }, {
    key: "imposingsImposingIdPatch",
    value: function imposingsImposingIdPatch(body, imposingId) {
      return this.imposingsImposingIdPatchWithHttpInfo(body, imposingId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * List Signatures for provided Imposings - needed bearer: &#x60;Organization&#x60; - needed scopes: &#x60;mission_control.jobs.r&#x60; or &#x60;mission_control.jobs.rw&#x60;
     * @param {String} imposingId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/Signature>} and HTTP response
     */
  }, {
    key: "imposingsImposingIdSignaturesGetWithHttpInfo",
    value: function imposingsImposingIdSignaturesGetWithHttpInfo(imposingId) {
      var postBody = null;
      // verify the required parameter 'imposingId' is set
      if (imposingId === undefined || imposingId === null) {
        throw new Error("Missing the required parameter 'imposingId' when calling imposingsImposingIdSignaturesGet");
      }
      var pathParams = {
        'imposing_id': imposingId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_Signature.Signature];
      return this.apiClient.callApi('/imposings/{imposing_id}/signatures', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * List Signatures for provided Imposings - needed bearer: &#x60;Organization&#x60; - needed scopes: &#x60;mission_control.jobs.r&#x60; or &#x60;mission_control.jobs.rw&#x60;
     * @param {<&vendorExtensions.x-jsdoc-type>} imposingId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/Signature>}
     */
  }, {
    key: "imposingsImposingIdSignaturesGet",
    value: function imposingsImposingIdSignaturesGet(imposingId) {
      return this.imposingsImposingIdSignaturesGetWithHttpInfo(imposingId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Create a new Signature for the provided Imposing - needed bearer: &#x60;Organization&#x60; - needed scopes: &#x60;mission_control.jobs.w&#x60; or &#x60;mission_control.jobs.rw&#x60;
     * @param {module:model/ImposingIdSignaturesBody} body 
     * @param {String} imposingId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Signature} and HTTP response
     */
  }, {
    key: "imposingsImposingIdSignaturesPostWithHttpInfo",
    value: function imposingsImposingIdSignaturesPostWithHttpInfo(body, imposingId) {
      var postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling imposingsImposingIdSignaturesPost");
      }
      // verify the required parameter 'imposingId' is set
      if (imposingId === undefined || imposingId === null) {
        throw new Error("Missing the required parameter 'imposingId' when calling imposingsImposingIdSignaturesPost");
      }
      var pathParams = {
        'imposing_id': imposingId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _Signature.Signature;
      return this.apiClient.callApi('/imposings/{imposing_id}/signatures', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Create a new Signature for the provided Imposing - needed bearer: &#x60;Organization&#x60; - needed scopes: &#x60;mission_control.jobs.w&#x60; or &#x60;mission_control.jobs.rw&#x60;
     * @param {<&vendorExtensions.x-jsdoc-type>} body 
     * @param {<&vendorExtensions.x-jsdoc-type>} imposingId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Signature}
     */
  }, {
    key: "imposingsImposingIdSignaturesPost",
    value: function imposingsImposingIdSignaturesPost(body, imposingId) {
      return this.imposingsImposingIdSignaturesPostWithHttpInfo(body, imposingId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Remove an IntermediateProduct - needed bearer: &#x60;Organization&#x60; - needed scopes: &#x60;mission_control.jobs.w&#x60; or &#x60;mission_control.jobs.rw&#x60;
     * @param {String} intermediateProductId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
  }, {
    key: "intermediateProductsIntermediateProductIdDeleteWithHttpInfo",
    value: function intermediateProductsIntermediateProductIdDeleteWithHttpInfo(intermediateProductId) {
      var postBody = null;
      // verify the required parameter 'intermediateProductId' is set
      if (intermediateProductId === undefined || intermediateProductId === null) {
        throw new Error("Missing the required parameter 'intermediateProductId' when calling intermediateProductsIntermediateProductIdDelete");
      }
      var pathParams = {
        'intermediate_product_id': intermediateProductId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/intermediate_products/{intermediate_product_id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Remove an IntermediateProduct - needed bearer: &#x60;Organization&#x60; - needed scopes: &#x60;mission_control.jobs.w&#x60; or &#x60;mission_control.jobs.rw&#x60;
     * @param {<&vendorExtensions.x-jsdoc-type>} intermediateProductId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
  }, {
    key: "intermediateProductsIntermediateProductIdDelete",
    value: function intermediateProductsIntermediateProductIdDelete(intermediateProductId) {
      return this.intermediateProductsIntermediateProductIdDeleteWithHttpInfo(intermediateProductId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Show the full details of an IntermediateProduct - needed bearer: &#x60;Organization&#x60; - needed scopes: &#x60;mission_control.jobs.r&#x60; or &#x60;mission_control.jobs.rw&#x60;
     * @param {String} intermediateProductId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/IntermediateProduct} and HTTP response
     */
  }, {
    key: "intermediateProductsIntermediateProductIdGetWithHttpInfo",
    value: function intermediateProductsIntermediateProductIdGetWithHttpInfo(intermediateProductId) {
      var postBody = null;
      // verify the required parameter 'intermediateProductId' is set
      if (intermediateProductId === undefined || intermediateProductId === null) {
        throw new Error("Missing the required parameter 'intermediateProductId' when calling intermediateProductsIntermediateProductIdGet");
      }
      var pathParams = {
        'intermediate_product_id': intermediateProductId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _IntermediateProduct.IntermediateProduct;
      return this.apiClient.callApi('/intermediate_products/{intermediate_product_id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Show the full details of an IntermediateProduct - needed bearer: &#x60;Organization&#x60; - needed scopes: &#x60;mission_control.jobs.r&#x60; or &#x60;mission_control.jobs.rw&#x60;
     * @param {<&vendorExtensions.x-jsdoc-type>} intermediateProductId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/IntermediateProduct}
     */
  }, {
    key: "intermediateProductsIntermediateProductIdGet",
    value: function intermediateProductsIntermediateProductIdGet(intermediateProductId) {
      return this.intermediateProductsIntermediateProductIdGetWithHttpInfo(intermediateProductId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Update an IntermediateProduct with the provided params - needed bearer: &#x60;Organization&#x60; - needed scopes: &#x60;mission_control.jobs.w&#x60; or &#x60;mission_control.jobs.rw&#x60;
     * @param {module:model/IntermediateProductsIntermediateProductIdBody} body 
     * @param {String} intermediateProductId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/IntermediateProduct} and HTTP response
     */
  }, {
    key: "intermediateProductsIntermediateProductIdPatchWithHttpInfo",
    value: function intermediateProductsIntermediateProductIdPatchWithHttpInfo(body, intermediateProductId) {
      var postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling intermediateProductsIntermediateProductIdPatch");
      }
      // verify the required parameter 'intermediateProductId' is set
      if (intermediateProductId === undefined || intermediateProductId === null) {
        throw new Error("Missing the required parameter 'intermediateProductId' when calling intermediateProductsIntermediateProductIdPatch");
      }
      var pathParams = {
        'intermediate_product_id': intermediateProductId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _IntermediateProduct.IntermediateProduct;
      return this.apiClient.callApi('/intermediate_products/{intermediate_product_id}', 'PATCH', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Update an IntermediateProduct with the provided params - needed bearer: &#x60;Organization&#x60; - needed scopes: &#x60;mission_control.jobs.w&#x60; or &#x60;mission_control.jobs.rw&#x60;
     * @param {<&vendorExtensions.x-jsdoc-type>} body 
     * @param {<&vendorExtensions.x-jsdoc-type>} intermediateProductId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/IntermediateProduct}
     */
  }, {
    key: "intermediateProductsIntermediateProductIdPatch",
    value: function intermediateProductsIntermediateProductIdPatch(body, intermediateProductId) {
      return this.intermediateProductsIntermediateProductIdPatchWithHttpInfo(body, intermediateProductId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * List all available IntermediateProducts for a given Job - needed bearer: &#x60;Organization&#x60; - needed scopes: &#x60;mission_control.jobs.r&#x60; or &#x60;mission_control.jobs.rw&#x60;
     * @param {String} jobId 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page The page of the current collection that shall be returned
     * @param {Number} opts.perPage The maximum number of items included in the response, ie., the page size (default to <.>)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/IntermediateProduct>} and HTTP response
     */
  }, {
    key: "jobsJobIdIntermediateProductsGetWithHttpInfo",
    value: function jobsJobIdIntermediateProductsGetWithHttpInfo(jobId, opts) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'jobId' is set
      if (jobId === undefined || jobId === null) {
        throw new Error("Missing the required parameter 'jobId' when calling jobsJobIdIntermediateProductsGet");
      }
      var pathParams = {
        'job_id': jobId
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
      var returnType = [_IntermediateProduct.IntermediateProduct];
      return this.apiClient.callApi('/jobs/{job_id}/intermediate_products', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * List all available IntermediateProducts for a given Job - needed bearer: &#x60;Organization&#x60; - needed scopes: &#x60;mission_control.jobs.r&#x60; or &#x60;mission_control.jobs.rw&#x60;
     * @param {<&vendorExtensions.x-jsdoc-type>} jobId 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page The page of the current collection that shall be returned
     * @param {Number} opts.perPage The maximum number of items included in the response, ie., the page size (default to <.>)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/IntermediateProduct>}
     */
  }, {
    key: "jobsJobIdIntermediateProductsGet",
    value: function jobsJobIdIntermediateProductsGet(jobId, opts) {
      return this.jobsJobIdIntermediateProductsGetWithHttpInfo(jobId, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Create a new IntermediateProduct for a Job - needed bearer: &#x60;Organization&#x60; - needed scopes: &#x60;mission_control.jobs.w&#x60; or &#x60;mission_control.jobs.rw&#x60;
     * @param {module:model/JobIdIntermediateProductsBody} body 
     * @param {String} jobId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/IntermediateProduct} and HTTP response
     */
  }, {
    key: "jobsJobIdIntermediateProductsPostWithHttpInfo",
    value: function jobsJobIdIntermediateProductsPostWithHttpInfo(body, jobId) {
      var postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling jobsJobIdIntermediateProductsPost");
      }
      // verify the required parameter 'jobId' is set
      if (jobId === undefined || jobId === null) {
        throw new Error("Missing the required parameter 'jobId' when calling jobsJobIdIntermediateProductsPost");
      }
      var pathParams = {
        'job_id': jobId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _IntermediateProduct.IntermediateProduct;
      return this.apiClient.callApi('/jobs/{job_id}/intermediate_products', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Create a new IntermediateProduct for a Job - needed bearer: &#x60;Organization&#x60; - needed scopes: &#x60;mission_control.jobs.w&#x60; or &#x60;mission_control.jobs.rw&#x60;
     * @param {<&vendorExtensions.x-jsdoc-type>} body 
     * @param {<&vendorExtensions.x-jsdoc-type>} jobId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/IntermediateProduct}
     */
  }, {
    key: "jobsJobIdIntermediateProductsPost",
    value: function jobsJobIdIntermediateProductsPost(body, jobId) {
      return this.jobsJobIdIntermediateProductsPostWithHttpInfo(body, jobId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * List ProductionStrategies for the provided job - needed bearer: &#x60;Organization&#x60; - needed scopes: &#x60;mission_control.jobs.r&#x60; or &#x60;mission_control.jobs.rw&#x60;
     * @param {String} jobId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/ProductionStrategy>} and HTTP response
     */
  }, {
    key: "jobsJobIdProductionStrategiesGetWithHttpInfo",
    value: function jobsJobIdProductionStrategiesGetWithHttpInfo(jobId) {
      var postBody = null;
      // verify the required parameter 'jobId' is set
      if (jobId === undefined || jobId === null) {
        throw new Error("Missing the required parameter 'jobId' when calling jobsJobIdProductionStrategiesGet");
      }
      var pathParams = {
        'job_id': jobId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_ProductionStrategy.ProductionStrategy];
      return this.apiClient.callApi('/jobs/{job_id}/production_strategies', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * List ProductionStrategies for the provided job - needed bearer: &#x60;Organization&#x60; - needed scopes: &#x60;mission_control.jobs.r&#x60; or &#x60;mission_control.jobs.rw&#x60;
     * @param {<&vendorExtensions.x-jsdoc-type>} jobId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/ProductionStrategy>}
     */
  }, {
    key: "jobsJobIdProductionStrategiesGet",
    value: function jobsJobIdProductionStrategiesGet(jobId) {
      return this.jobsJobIdProductionStrategiesGetWithHttpInfo(jobId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Create a new ProductionStrategy for the provided job - needed bearer: &#x60;Organization&#x60; - needed scopes: &#x60;mission_control.jobs.w&#x60; or &#x60;mission_control.jobs.rw&#x60;
     * @param {module:model/JobIdProductionStrategiesBody} body 
     * @param {String} jobId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse2011} and HTTP response
     */
  }, {
    key: "jobsJobIdProductionStrategiesPostWithHttpInfo",
    value: function jobsJobIdProductionStrategiesPostWithHttpInfo(body, jobId) {
      var postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling jobsJobIdProductionStrategiesPost");
      }
      // verify the required parameter 'jobId' is set
      if (jobId === undefined || jobId === null) {
        throw new Error("Missing the required parameter 'jobId' when calling jobsJobIdProductionStrategiesPost");
      }
      var pathParams = {
        'job_id': jobId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _InlineResponse2.InlineResponse2011;
      return this.apiClient.callApi('/jobs/{job_id}/production_strategies', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Create a new ProductionStrategy for the provided job - needed bearer: &#x60;Organization&#x60; - needed scopes: &#x60;mission_control.jobs.w&#x60; or &#x60;mission_control.jobs.rw&#x60;
     * @param {<&vendorExtensions.x-jsdoc-type>} body 
     * @param {<&vendorExtensions.x-jsdoc-type>} jobId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse2011}
     */
  }, {
    key: "jobsJobIdProductionStrategiesPost",
    value: function jobsJobIdProductionStrategiesPost(body, jobId) {
      return this.jobsJobIdProductionStrategiesPostWithHttpInfo(body, jobId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * List all todos for this Job - needed bearer: &#x60;Organization&#x60; - needed scopes: &#x60;mission_control.jobs.r&#x60; or &#x60;mission_control.jobs.rw&#x60;
     * @param {String} jobId 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page The page of the current collection that shall be returned
     * @param {Number} opts.perPage The maximum number of items included in the response, ie., the page size (default to <.>)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/Todo>} and HTTP response
     */
  }, {
    key: "jobsJobIdTodosGetWithHttpInfo",
    value: function jobsJobIdTodosGetWithHttpInfo(jobId, opts) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'jobId' is set
      if (jobId === undefined || jobId === null) {
        throw new Error("Missing the required parameter 'jobId' when calling jobsJobIdTodosGet");
      }
      var pathParams = {
        'job_id': jobId
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
      var returnType = [_Todo.Todo];
      return this.apiClient.callApi('/jobs/{job_id}/todos', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * List all todos for this Job - needed bearer: &#x60;Organization&#x60; - needed scopes: &#x60;mission_control.jobs.r&#x60; or &#x60;mission_control.jobs.rw&#x60;
     * @param {<&vendorExtensions.x-jsdoc-type>} jobId 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page The page of the current collection that shall be returned
     * @param {Number} opts.perPage The maximum number of items included in the response, ie., the page size (default to <.>)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/Todo>}
     */
  }, {
    key: "jobsJobIdTodosGet",
    value: function jobsJobIdTodosGet(jobId, opts) {
      return this.jobsJobIdTodosGetWithHttpInfo(jobId, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Create a new todo for this Job - needed bearer: &#x60;Organization&#x60; - needed scopes: &#x60;mission_control.jobs.w&#x60; or &#x60;mission_control.jobs.rw&#x60;
     * @param {module:model/JobIdTodosBody} body 
     * @param {String} jobId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Todo} and HTTP response
     */
  }, {
    key: "jobsJobIdTodosPostWithHttpInfo",
    value: function jobsJobIdTodosPostWithHttpInfo(body, jobId) {
      var postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling jobsJobIdTodosPost");
      }
      // verify the required parameter 'jobId' is set
      if (jobId === undefined || jobId === null) {
        throw new Error("Missing the required parameter 'jobId' when calling jobsJobIdTodosPost");
      }
      var pathParams = {
        'job_id': jobId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _Todo.Todo;
      return this.apiClient.callApi('/jobs/{job_id}/todos', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Create a new todo for this Job - needed bearer: &#x60;Organization&#x60; - needed scopes: &#x60;mission_control.jobs.w&#x60; or &#x60;mission_control.jobs.rw&#x60;
     * @param {<&vendorExtensions.x-jsdoc-type>} body 
     * @param {<&vendorExtensions.x-jsdoc-type>} jobId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Todo}
     */
  }, {
    key: "jobsJobIdTodosPost",
    value: function jobsJobIdTodosPost(body, jobId) {
      return this.jobsJobIdTodosPostWithHttpInfo(body, jobId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Creates a full production pathway with all linkages - needed bearer: &#x60;Organization&#x60; - needed scopes: &#x60;mission_control.jobs.w&#x60; or &#x60;mission_control.jobs.rw&#x60;
     * @param {module:model/ProductionPathsBody} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse201} and HTTP response
     */
  }, {
    key: "productionPathsPostWithHttpInfo",
    value: function productionPathsPostWithHttpInfo(body) {
      var postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling productionPathsPost");
      }
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _InlineResponse.InlineResponse201;
      return this.apiClient.callApi('/production_paths', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Creates a full production pathway with all linkages - needed bearer: &#x60;Organization&#x60; - needed scopes: &#x60;mission_control.jobs.w&#x60; or &#x60;mission_control.jobs.rw&#x60;
     * @param {<&vendorExtensions.x-jsdoc-type>} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse201}
     */
  }, {
    key: "productionPathsPost",
    value: function productionPathsPost(body) {
      return this.productionPathsPostWithHttpInfo(body).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     *  - needed bearer: &#x60;Organization&#x60; - needed scopes: &#x60;mission_control.jobs.w&#x60; or &#x60;mission_control.jobs.rw&#x60;
     * @param {String} productionStrategyId 
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.clone Create a clone of this strategy when cancelling the existing one.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
  }, {
    key: "productionStrategiesProductionStrategyIdDeleteWithHttpInfo",
    value: function productionStrategiesProductionStrategyIdDeleteWithHttpInfo(productionStrategyId, opts) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'productionStrategyId' is set
      if (productionStrategyId === undefined || productionStrategyId === null) {
        throw new Error("Missing the required parameter 'productionStrategyId' when calling productionStrategiesProductionStrategyIdDelete");
      }
      var pathParams = {
        'production_strategy_id': productionStrategyId
      };
      var queryParams = {
        'clone': opts['clone']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/production_strategies/{production_strategy_id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     *  - needed bearer: &#x60;Organization&#x60; - needed scopes: &#x60;mission_control.jobs.w&#x60; or &#x60;mission_control.jobs.rw&#x60;
     * @param {<&vendorExtensions.x-jsdoc-type>} productionStrategyId 
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.clone Create a clone of this strategy when cancelling the existing one.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
  }, {
    key: "productionStrategiesProductionStrategyIdDelete",
    value: function productionStrategiesProductionStrategyIdDelete(productionStrategyId, opts) {
      return this.productionStrategiesProductionStrategyIdDeleteWithHttpInfo(productionStrategyId, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Show the ProductionStrategy for the provided job, if set - needed bearer: &#x60;Organization&#x60; - needed scopes: &#x60;mission_control.jobs.r&#x60; or &#x60;mission_control.jobs.rw&#x60;
     * @param {String} productionStrategyId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse2011} and HTTP response
     */
  }, {
    key: "productionStrategiesProductionStrategyIdGetWithHttpInfo",
    value: function productionStrategiesProductionStrategyIdGetWithHttpInfo(productionStrategyId) {
      var postBody = null;
      // verify the required parameter 'productionStrategyId' is set
      if (productionStrategyId === undefined || productionStrategyId === null) {
        throw new Error("Missing the required parameter 'productionStrategyId' when calling productionStrategiesProductionStrategyIdGet");
      }
      var pathParams = {
        'production_strategy_id': productionStrategyId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _InlineResponse2.InlineResponse2011;
      return this.apiClient.callApi('/production_strategies/{production_strategy_id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Show the ProductionStrategy for the provided job, if set - needed bearer: &#x60;Organization&#x60; - needed scopes: &#x60;mission_control.jobs.r&#x60; or &#x60;mission_control.jobs.rw&#x60;
     * @param {<&vendorExtensions.x-jsdoc-type>} productionStrategyId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse2011}
     */
  }, {
    key: "productionStrategiesProductionStrategyIdGet",
    value: function productionStrategiesProductionStrategyIdGet(productionStrategyId) {
      return this.productionStrategiesProductionStrategyIdGetWithHttpInfo(productionStrategyId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * List Imposings for provided ProductionStrategy - needed bearer: &#x60;Organization&#x60; - needed scopes: &#x60;mission_control.jobs.r&#x60; or &#x60;mission_control.jobs.rw&#x60;
     * @param {String} productionStrategyId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/Imposing>} and HTTP response
     */
  }, {
    key: "productionStrategiesProductionStrategyIdImposingsGetWithHttpInfo",
    value: function productionStrategiesProductionStrategyIdImposingsGetWithHttpInfo(productionStrategyId) {
      var postBody = null;
      // verify the required parameter 'productionStrategyId' is set
      if (productionStrategyId === undefined || productionStrategyId === null) {
        throw new Error("Missing the required parameter 'productionStrategyId' when calling productionStrategiesProductionStrategyIdImposingsGet");
      }
      var pathParams = {
        'production_strategy_id': productionStrategyId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_Imposing.Imposing];
      return this.apiClient.callApi('/production_strategies/{production_strategy_id}/imposings', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * List Imposings for provided ProductionStrategy - needed bearer: &#x60;Organization&#x60; - needed scopes: &#x60;mission_control.jobs.r&#x60; or &#x60;mission_control.jobs.rw&#x60;
     * @param {<&vendorExtensions.x-jsdoc-type>} productionStrategyId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/Imposing>}
     */
  }, {
    key: "productionStrategiesProductionStrategyIdImposingsGet",
    value: function productionStrategiesProductionStrategyIdImposingsGet(productionStrategyId) {
      return this.productionStrategiesProductionStrategyIdImposingsGetWithHttpInfo(productionStrategyId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Create a new Imposing for the provided ProductionStrategy - needed bearer: &#x60;Organization&#x60; - needed scopes: &#x60;mission_control.jobs.w&#x60; or &#x60;mission_control.jobs.rw&#x60;
     * @param {module:model/ProductionStrategyIdImposingsBody} body 
     * @param {String} productionStrategyId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Imposing} and HTTP response
     */
  }, {
    key: "productionStrategiesProductionStrategyIdImposingsPostWithHttpInfo",
    value: function productionStrategiesProductionStrategyIdImposingsPostWithHttpInfo(body, productionStrategyId) {
      var postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling productionStrategiesProductionStrategyIdImposingsPost");
      }
      // verify the required parameter 'productionStrategyId' is set
      if (productionStrategyId === undefined || productionStrategyId === null) {
        throw new Error("Missing the required parameter 'productionStrategyId' when calling productionStrategiesProductionStrategyIdImposingsPost");
      }
      var pathParams = {
        'production_strategy_id': productionStrategyId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _Imposing.Imposing;
      return this.apiClient.callApi('/production_strategies/{production_strategy_id}/imposings', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Create a new Imposing for the provided ProductionStrategy - needed bearer: &#x60;Organization&#x60; - needed scopes: &#x60;mission_control.jobs.w&#x60; or &#x60;mission_control.jobs.rw&#x60;
     * @param {<&vendorExtensions.x-jsdoc-type>} body 
     * @param {<&vendorExtensions.x-jsdoc-type>} productionStrategyId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Imposing}
     */
  }, {
    key: "productionStrategiesProductionStrategyIdImposingsPost",
    value: function productionStrategiesProductionStrategyIdImposingsPost(body, productionStrategyId) {
      return this.productionStrategiesProductionStrategyIdImposingsPostWithHttpInfo(body, productionStrategyId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     *  - needed bearer: &#x60;Organization&#x60; - needed scopes: &#x60;mission_control.jobs.w&#x60; or &#x60;mission_control.jobs.rw&#x60;
     * @param {module:model/ProductionStrategiesProductionStrategyIdBody} body 
     * @param {String} productionStrategyId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse2011} and HTTP response
     */
  }, {
    key: "productionStrategiesProductionStrategyIdPatchWithHttpInfo",
    value: function productionStrategiesProductionStrategyIdPatchWithHttpInfo(body, productionStrategyId) {
      var postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling productionStrategiesProductionStrategyIdPatch");
      }
      // verify the required parameter 'productionStrategyId' is set
      if (productionStrategyId === undefined || productionStrategyId === null) {
        throw new Error("Missing the required parameter 'productionStrategyId' when calling productionStrategiesProductionStrategyIdPatch");
      }
      var pathParams = {
        'production_strategy_id': productionStrategyId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _InlineResponse2.InlineResponse2011;
      return this.apiClient.callApi('/production_strategies/{production_strategy_id}', 'PATCH', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     *  - needed bearer: &#x60;Organization&#x60; - needed scopes: &#x60;mission_control.jobs.w&#x60; or &#x60;mission_control.jobs.rw&#x60;
     * @param {<&vendorExtensions.x-jsdoc-type>} body 
     * @param {<&vendorExtensions.x-jsdoc-type>} productionStrategyId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse2011}
     */
  }, {
    key: "productionStrategiesProductionStrategyIdPatch",
    value: function productionStrategiesProductionStrategyIdPatch(body, productionStrategyId) {
      return this.productionStrategiesProductionStrategyIdPatchWithHttpInfo(body, productionStrategyId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Remove a Signature from the Imposing - needed bearer: &#x60;Organization&#x60; - needed scopes: &#x60;mission_control.jobs.w&#x60; or &#x60;mission_control.jobs.rw&#x60;
     * @param {String} signatureId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
  }, {
    key: "signaturesSignatureIdDeleteWithHttpInfo",
    value: function signaturesSignatureIdDeleteWithHttpInfo(signatureId) {
      var postBody = null;
      // verify the required parameter 'signatureId' is set
      if (signatureId === undefined || signatureId === null) {
        throw new Error("Missing the required parameter 'signatureId' when calling signaturesSignatureIdDelete");
      }
      var pathParams = {
        'signature_id': signatureId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/signatures/{signature_id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Remove a Signature from the Imposing - needed bearer: &#x60;Organization&#x60; - needed scopes: &#x60;mission_control.jobs.w&#x60; or &#x60;mission_control.jobs.rw&#x60;
     * @param {<&vendorExtensions.x-jsdoc-type>} signatureId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
  }, {
    key: "signaturesSignatureIdDelete",
    value: function signaturesSignatureIdDelete(signatureId) {
      return this.signaturesSignatureIdDeleteWithHttpInfo(signatureId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Show the full details of a given Signature - needed bearer: &#x60;Organization&#x60; - needed scopes: &#x60;mission_control.jobs.r&#x60; or &#x60;mission_control.jobs.rw&#x60;
     * @param {String} signatureId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Signature} and HTTP response
     */
  }, {
    key: "signaturesSignatureIdGetWithHttpInfo",
    value: function signaturesSignatureIdGetWithHttpInfo(signatureId) {
      var postBody = null;
      // verify the required parameter 'signatureId' is set
      if (signatureId === undefined || signatureId === null) {
        throw new Error("Missing the required parameter 'signatureId' when calling signaturesSignatureIdGet");
      }
      var pathParams = {
        'signature_id': signatureId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _Signature.Signature;
      return this.apiClient.callApi('/signatures/{signature_id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Show the full details of a given Signature - needed bearer: &#x60;Organization&#x60; - needed scopes: &#x60;mission_control.jobs.r&#x60; or &#x60;mission_control.jobs.rw&#x60;
     * @param {<&vendorExtensions.x-jsdoc-type>} signatureId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Signature}
     */
  }, {
    key: "signaturesSignatureIdGet",
    value: function signaturesSignatureIdGet(signatureId) {
      return this.signaturesSignatureIdGetWithHttpInfo(signatureId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Update a Signature - needed bearer: &#x60;Organization&#x60; - needed scopes: &#x60;mission_control.jobs.w&#x60; or &#x60;mission_control.jobs.rw&#x60;
     * @param {module:model/SignaturesSignatureIdBody} body 
     * @param {String} signatureId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Signature} and HTTP response
     */
  }, {
    key: "signaturesSignatureIdPatchWithHttpInfo",
    value: function signaturesSignatureIdPatchWithHttpInfo(body, signatureId) {
      var postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling signaturesSignatureIdPatch");
      }
      // verify the required parameter 'signatureId' is set
      if (signatureId === undefined || signatureId === null) {
        throw new Error("Missing the required parameter 'signatureId' when calling signaturesSignatureIdPatch");
      }
      var pathParams = {
        'signature_id': signatureId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _Signature.Signature;
      return this.apiClient.callApi('/signatures/{signature_id}', 'PATCH', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Update a Signature - needed bearer: &#x60;Organization&#x60; - needed scopes: &#x60;mission_control.jobs.w&#x60; or &#x60;mission_control.jobs.rw&#x60;
     * @param {<&vendorExtensions.x-jsdoc-type>} body 
     * @param {<&vendorExtensions.x-jsdoc-type>} signatureId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Signature}
     */
  }, {
    key: "signaturesSignatureIdPatch",
    value: function signaturesSignatureIdPatch(body, signatureId) {
      return this.signaturesSignatureIdPatchWithHttpInfo(body, signatureId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Remove a todo - needed bearer: &#x60;Organization&#x60; - needed scopes: &#x60;mission_control.jobs.w&#x60; or &#x60;mission_control.jobs.rw&#x60;
     * @param {String} todoId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
  }, {
    key: "todosTodoIdDeleteWithHttpInfo",
    value: function todosTodoIdDeleteWithHttpInfo(todoId) {
      var postBody = null;
      // verify the required parameter 'todoId' is set
      if (todoId === undefined || todoId === null) {
        throw new Error("Missing the required parameter 'todoId' when calling todosTodoIdDelete");
      }
      var pathParams = {
        'todo_id': todoId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/todos/{todo_id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Remove a todo - needed bearer: &#x60;Organization&#x60; - needed scopes: &#x60;mission_control.jobs.w&#x60; or &#x60;mission_control.jobs.rw&#x60;
     * @param {<&vendorExtensions.x-jsdoc-type>} todoId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
  }, {
    key: "todosTodoIdDelete",
    value: function todosTodoIdDelete(todoId) {
      return this.todosTodoIdDeleteWithHttpInfo(todoId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Display the status of a todo - needed bearer: &#x60;Organization&#x60; - needed scopes: &#x60;mission_control.jobs.r&#x60; or &#x60;mission_control.jobs.rw&#x60;
     * @param {String} todoId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Todo} and HTTP response
     */
  }, {
    key: "todosTodoIdGetWithHttpInfo",
    value: function todosTodoIdGetWithHttpInfo(todoId) {
      var postBody = null;
      // verify the required parameter 'todoId' is set
      if (todoId === undefined || todoId === null) {
        throw new Error("Missing the required parameter 'todoId' when calling todosTodoIdGet");
      }
      var pathParams = {
        'todo_id': todoId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _Todo.Todo;
      return this.apiClient.callApi('/todos/{todo_id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Display the status of a todo - needed bearer: &#x60;Organization&#x60; - needed scopes: &#x60;mission_control.jobs.r&#x60; or &#x60;mission_control.jobs.rw&#x60;
     * @param {<&vendorExtensions.x-jsdoc-type>} todoId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Todo}
     */
  }, {
    key: "todosTodoIdGet",
    value: function todosTodoIdGet(todoId) {
      return this.todosTodoIdGetWithHttpInfo(todoId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Change properties of a todo - needed bearer: &#x60;Organization&#x60; - needed scopes: &#x60;mission_control.jobs.w&#x60; or &#x60;mission_control.jobs.rw&#x60;
     * @param {module:model/TodosTodoIdBody} body 
     * @param {String} todoId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Todo} and HTTP response
     */
  }, {
    key: "todosTodoIdPatchWithHttpInfo",
    value: function todosTodoIdPatchWithHttpInfo(body, todoId) {
      var postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling todosTodoIdPatch");
      }
      // verify the required parameter 'todoId' is set
      if (todoId === undefined || todoId === null) {
        throw new Error("Missing the required parameter 'todoId' when calling todosTodoIdPatch");
      }
      var pathParams = {
        'todo_id': todoId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _Todo.Todo;
      return this.apiClient.callApi('/todos/{todo_id}', 'PATCH', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Change properties of a todo - needed bearer: &#x60;Organization&#x60; - needed scopes: &#x60;mission_control.jobs.w&#x60; or &#x60;mission_control.jobs.rw&#x60;
     * @param {<&vendorExtensions.x-jsdoc-type>} body 
     * @param {<&vendorExtensions.x-jsdoc-type>} todoId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Todo}
     */
  }, {
    key: "todosTodoIdPatch",
    value: function todosTodoIdPatch(body, todoId) {
      return this.todosTodoIdPatchWithHttpInfo(body, todoId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Show all available WorkstepGroups - needed bearer: &#x60;Organization&#x60; - needed scopes: &#x60;mission_control.jobs.r&#x60; or &#x60;mission_control.jobs.rw&#x60;
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page The page of the current collection that shall be returned
     * @param {Number} opts.perPage The maximum number of items included in the response, ie., the page size (default to <.>)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/WorkstepGroup>} and HTTP response
     */
  }, {
    key: "workstepGroupsGetWithHttpInfo",
    value: function workstepGroupsGetWithHttpInfo(opts) {
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
      var returnType = [_WorkstepGroup.WorkstepGroup];
      return this.apiClient.callApi('/workstep_groups', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Show all available WorkstepGroups - needed bearer: &#x60;Organization&#x60; - needed scopes: &#x60;mission_control.jobs.r&#x60; or &#x60;mission_control.jobs.rw&#x60;
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page The page of the current collection that shall be returned
     * @param {Number} opts.perPage The maximum number of items included in the response, ie., the page size (default to <.>)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/WorkstepGroup>}
     */
  }, {
    key: "workstepGroupsGet",
    value: function workstepGroupsGet(opts) {
      return this.workstepGroupsGetWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Create a new WorkstepGroup - needed bearer: &#x60;Organization&#x60; - needed scopes: &#x60;mission_control.jobs.w&#x60; or &#x60;mission_control.jobs.rw&#x60;
     * @param {module:model/WorkstepGroupsBody} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/WorkstepGroup} and HTTP response
     */
  }, {
    key: "workstepGroupsPostWithHttpInfo",
    value: function workstepGroupsPostWithHttpInfo(body) {
      var postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling workstepGroupsPost");
      }
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _WorkstepGroup.WorkstepGroup;
      return this.apiClient.callApi('/workstep_groups', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Create a new WorkstepGroup - needed bearer: &#x60;Organization&#x60; - needed scopes: &#x60;mission_control.jobs.w&#x60; or &#x60;mission_control.jobs.rw&#x60;
     * @param {<&vendorExtensions.x-jsdoc-type>} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/WorkstepGroup}
     */
  }, {
    key: "workstepGroupsPost",
    value: function workstepGroupsPost(body) {
      return this.workstepGroupsPostWithHttpInfo(body).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Remove a WorkstepGroup, this will remove all contained Worksteps and associated IntermediateProducts\&quot;  - needed bearer: &#x60;Organization&#x60; - needed scopes: &#x60;mission_control.jobs.w&#x60; or &#x60;mission_control.jobs.rw&#x60;
     * @param {String} workstepGroupId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
  }, {
    key: "workstepGroupsWorkstepGroupIdDeleteWithHttpInfo",
    value: function workstepGroupsWorkstepGroupIdDeleteWithHttpInfo(workstepGroupId) {
      var postBody = null;
      // verify the required parameter 'workstepGroupId' is set
      if (workstepGroupId === undefined || workstepGroupId === null) {
        throw new Error("Missing the required parameter 'workstepGroupId' when calling workstepGroupsWorkstepGroupIdDelete");
      }
      var pathParams = {
        'workstep_group_id': workstepGroupId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/workstep_groups/{workstep_group_id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Remove a WorkstepGroup, this will remove all contained Worksteps and associated IntermediateProducts\&quot;  - needed bearer: &#x60;Organization&#x60; - needed scopes: &#x60;mission_control.jobs.w&#x60; or &#x60;mission_control.jobs.rw&#x60;
     * @param {<&vendorExtensions.x-jsdoc-type>} workstepGroupId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
  }, {
    key: "workstepGroupsWorkstepGroupIdDelete",
    value: function workstepGroupsWorkstepGroupIdDelete(workstepGroupId) {
      return this.workstepGroupsWorkstepGroupIdDeleteWithHttpInfo(workstepGroupId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Show the full details of a given WorkstepGroup including all Worksteps - needed bearer: &#x60;Organization&#x60; - needed scopes: &#x60;mission_control.jobs.r&#x60; or &#x60;mission_control.jobs.rw&#x60;
     * @param {String} workstepGroupId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/WorkstepGroup} and HTTP response
     */
  }, {
    key: "workstepGroupsWorkstepGroupIdGetWithHttpInfo",
    value: function workstepGroupsWorkstepGroupIdGetWithHttpInfo(workstepGroupId) {
      var postBody = null;
      // verify the required parameter 'workstepGroupId' is set
      if (workstepGroupId === undefined || workstepGroupId === null) {
        throw new Error("Missing the required parameter 'workstepGroupId' when calling workstepGroupsWorkstepGroupIdGet");
      }
      var pathParams = {
        'workstep_group_id': workstepGroupId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _WorkstepGroup.WorkstepGroup;
      return this.apiClient.callApi('/workstep_groups/{workstep_group_id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Show the full details of a given WorkstepGroup including all Worksteps - needed bearer: &#x60;Organization&#x60; - needed scopes: &#x60;mission_control.jobs.r&#x60; or &#x60;mission_control.jobs.rw&#x60;
     * @param {<&vendorExtensions.x-jsdoc-type>} workstepGroupId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/WorkstepGroup}
     */
  }, {
    key: "workstepGroupsWorkstepGroupIdGet",
    value: function workstepGroupsWorkstepGroupIdGet(workstepGroupId) {
      return this.workstepGroupsWorkstepGroupIdGetWithHttpInfo(workstepGroupId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Update a WorkstepGroup - needed bearer: &#x60;Organization&#x60; - needed scopes: &#x60;mission_control.jobs.w&#x60; or &#x60;mission_control.jobs.rw&#x60;
     * @param {module:model/WorkstepGroupsWorkstepGroupIdBody} body 
     * @param {String} workstepGroupId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/WorkstepGroup} and HTTP response
     */
  }, {
    key: "workstepGroupsWorkstepGroupIdPatchWithHttpInfo",
    value: function workstepGroupsWorkstepGroupIdPatchWithHttpInfo(body, workstepGroupId) {
      var postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling workstepGroupsWorkstepGroupIdPatch");
      }
      // verify the required parameter 'workstepGroupId' is set
      if (workstepGroupId === undefined || workstepGroupId === null) {
        throw new Error("Missing the required parameter 'workstepGroupId' when calling workstepGroupsWorkstepGroupIdPatch");
      }
      var pathParams = {
        'workstep_group_id': workstepGroupId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _WorkstepGroup.WorkstepGroup;
      return this.apiClient.callApi('/workstep_groups/{workstep_group_id}', 'PATCH', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Update a WorkstepGroup - needed bearer: &#x60;Organization&#x60; - needed scopes: &#x60;mission_control.jobs.w&#x60; or &#x60;mission_control.jobs.rw&#x60;
     * @param {<&vendorExtensions.x-jsdoc-type>} body 
     * @param {<&vendorExtensions.x-jsdoc-type>} workstepGroupId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/WorkstepGroup}
     */
  }, {
    key: "workstepGroupsWorkstepGroupIdPatch",
    value: function workstepGroupsWorkstepGroupIdPatch(body, workstepGroupId) {
      return this.workstepGroupsWorkstepGroupIdPatchWithHttpInfo(body, workstepGroupId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * List all available Worksteps - needed bearer: &#x60;Organization&#x60; - needed scopes: &#x60;mission_control.jobs.r&#x60; or &#x60;mission_control.jobs.rw&#x60;
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page The page of the current collection that shall be returned
     * @param {Number} opts.perPage The maximum number of items included in the response, ie., the page size (default to <.>)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/Workstep>} and HTTP response
     */
  }, {
    key: "workstepsGetWithHttpInfo",
    value: function workstepsGetWithHttpInfo(opts) {
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
      var returnType = [_Workstep.Workstep];
      return this.apiClient.callApi('/worksteps', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * List all available Worksteps - needed bearer: &#x60;Organization&#x60; - needed scopes: &#x60;mission_control.jobs.r&#x60; or &#x60;mission_control.jobs.rw&#x60;
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page The page of the current collection that shall be returned
     * @param {Number} opts.perPage The maximum number of items included in the response, ie., the page size (default to <.>)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/Workstep>}
     */
  }, {
    key: "workstepsGet",
    value: function workstepsGet(opts) {
      return this.workstepsGetWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Create a new Workstep - needed bearer: &#x60;Organization&#x60; - needed scopes: &#x60;mission_control.jobs.w&#x60; or &#x60;mission_control.jobs.rw&#x60;
     * @param {module:model/WorkstepsBody} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Workstep} and HTTP response
     */
  }, {
    key: "workstepsPostWithHttpInfo",
    value: function workstepsPostWithHttpInfo(body) {
      var postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling workstepsPost");
      }
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _Workstep.Workstep;
      return this.apiClient.callApi('/worksteps', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Create a new Workstep - needed bearer: &#x60;Organization&#x60; - needed scopes: &#x60;mission_control.jobs.w&#x60; or &#x60;mission_control.jobs.rw&#x60;
     * @param {<&vendorExtensions.x-jsdoc-type>} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Workstep}
     */
  }, {
    key: "workstepsPost",
    value: function workstepsPost(body) {
      return this.workstepsPostWithHttpInfo(body).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Remove a Workstep - needed bearer: &#x60;Organization&#x60; - needed scopes: &#x60;mission_control.jobs.w&#x60; or &#x60;mission_control.jobs.rw&#x60;
     * @param {String} workstepId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
  }, {
    key: "workstepsWorkstepIdDeleteWithHttpInfo",
    value: function workstepsWorkstepIdDeleteWithHttpInfo(workstepId) {
      var postBody = null;
      // verify the required parameter 'workstepId' is set
      if (workstepId === undefined || workstepId === null) {
        throw new Error("Missing the required parameter 'workstepId' when calling workstepsWorkstepIdDelete");
      }
      var pathParams = {
        'workstep_id': workstepId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/worksteps/{workstep_id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Remove a Workstep - needed bearer: &#x60;Organization&#x60; - needed scopes: &#x60;mission_control.jobs.w&#x60; or &#x60;mission_control.jobs.rw&#x60;
     * @param {<&vendorExtensions.x-jsdoc-type>} workstepId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
  }, {
    key: "workstepsWorkstepIdDelete",
    value: function workstepsWorkstepIdDelete(workstepId) {
      return this.workstepsWorkstepIdDeleteWithHttpInfo(workstepId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Show the full details of a Workstep - needed bearer: &#x60;Organization&#x60; - needed scopes: &#x60;mission_control.jobs.r&#x60; or &#x60;mission_control.jobs.rw&#x60;
     * @param {String} workstepId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Workstep} and HTTP response
     */
  }, {
    key: "workstepsWorkstepIdGetWithHttpInfo",
    value: function workstepsWorkstepIdGetWithHttpInfo(workstepId) {
      var postBody = null;
      // verify the required parameter 'workstepId' is set
      if (workstepId === undefined || workstepId === null) {
        throw new Error("Missing the required parameter 'workstepId' when calling workstepsWorkstepIdGet");
      }
      var pathParams = {
        'workstep_id': workstepId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _Workstep.Workstep;
      return this.apiClient.callApi('/worksteps/{workstep_id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Show the full details of a Workstep - needed bearer: &#x60;Organization&#x60; - needed scopes: &#x60;mission_control.jobs.r&#x60; or &#x60;mission_control.jobs.rw&#x60;
     * @param {<&vendorExtensions.x-jsdoc-type>} workstepId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Workstep}
     */
  }, {
    key: "workstepsWorkstepIdGet",
    value: function workstepsWorkstepIdGet(workstepId) {
      return this.workstepsWorkstepIdGetWithHttpInfo(workstepId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Update a Workstep with the provided params - needed bearer: &#x60;Organization&#x60; - needed scopes: &#x60;mission_control.jobs.w&#x60; or &#x60;mission_control.jobs.rw&#x60;
     * @param {module:model/WorkstepsWorkstepIdBody} body 
     * @param {String} workstepId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Workstep} and HTTP response
     */
  }, {
    key: "workstepsWorkstepIdPatchWithHttpInfo",
    value: function workstepsWorkstepIdPatchWithHttpInfo(body, workstepId) {
      var postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling workstepsWorkstepIdPatch");
      }
      // verify the required parameter 'workstepId' is set
      if (workstepId === undefined || workstepId === null) {
        throw new Error("Missing the required parameter 'workstepId' when calling workstepsWorkstepIdPatch");
      }
      var pathParams = {
        'workstep_id': workstepId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _Workstep.Workstep;
      return this.apiClient.callApi('/worksteps/{workstep_id}', 'PATCH', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Update a Workstep with the provided params - needed bearer: &#x60;Organization&#x60; - needed scopes: &#x60;mission_control.jobs.w&#x60; or &#x60;mission_control.jobs.rw&#x60;
     * @param {<&vendorExtensions.x-jsdoc-type>} body 
     * @param {<&vendorExtensions.x-jsdoc-type>} workstepId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Workstep}
     */
  }, {
    key: "workstepsWorkstepIdPatch",
    value: function workstepsWorkstepIdPatch(body, workstepId) {
      return this.workstepsWorkstepIdPatchWithHttpInfo(body, workstepId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);
  return ProductionApi;
}();
exports.ProductionApi = ProductionApi;