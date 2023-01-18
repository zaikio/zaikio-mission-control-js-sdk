"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EstimatesApi = void 0;
var _ApiClient = require("../ApiClient");
var _Estimate = require("../model/Estimate");
var _EstimateIdWorkstepEstimatesBody = require("../model/EstimateIdWorkstepEstimatesBody");
var _EstimatesEstimateIdBody = require("../model/EstimatesEstimateIdBody");
var _InlineResponse = require("../model/InlineResponse400");
var _InlineResponse2 = require("../model/InlineResponse401");
var _JobIdEstimatesBody = require("../model/JobIdEstimatesBody");
var _MaterialEstimate = require("../model/MaterialEstimate");
var _MaterialEstimatesMaterialEstimateIdBody = require("../model/MaterialEstimatesMaterialEstimateIdBody");
var _WorkstepEstimate = require("../model/WorkstepEstimate");
var _WorkstepEstimateIdMaterialEstimatesBody = require("../model/WorkstepEstimateIdMaterialEstimatesBody");
var _WorkstepEstimatesWorkstepEstimateIdBody = require("../model/WorkstepEstimatesWorkstepEstimateIdBody");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
* Estimates service.
* @module api/EstimatesApi
* @version 1.0.0
*/
var EstimatesApi = /*#__PURE__*/function () {
  /**
  * Constructs a new EstimatesApi. 
  * @alias module:api/EstimatesApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instanc
  e} if unspecified.
  */
  function EstimatesApi(apiClient) {
    _classCallCheck(this, EstimatesApi);
    this.apiClient = apiClient || _ApiClient.ApiClient.instance;
  }

  /**
   * Removes a specific estimate, inclduing all of its workstep and material estimates. - needed bearer: &#x60;Organization&#x60; - needed scopes: &#x60;mission_control.estimates.w&#x60; or &#x60;mission_control.estimates.rw&#x60;
   * @param {String} estimateId 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
   */
  _createClass(EstimatesApi, [{
    key: "estimatesEstimateIdDeleteWithHttpInfo",
    value: function estimatesEstimateIdDeleteWithHttpInfo(estimateId) {
      var postBody = null;
      // verify the required parameter 'estimateId' is set
      if (estimateId === undefined || estimateId === null) {
        throw new Error("Missing the required parameter 'estimateId' when calling estimatesEstimateIdDelete");
      }
      var pathParams = {
        'estimate_id': estimateId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/estimates/{estimate_id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Removes a specific estimate, inclduing all of its workstep and material estimates. - needed bearer: &#x60;Organization&#x60; - needed scopes: &#x60;mission_control.estimates.w&#x60; or &#x60;mission_control.estimates.rw&#x60;
     * @param {<&vendorExtensions.x-jsdoc-type>} estimateId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
  }, {
    key: "estimatesEstimateIdDelete",
    value: function estimatesEstimateIdDelete(estimateId) {
      return this.estimatesEstimateIdDeleteWithHttpInfo(estimateId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Returns a specific estimate, including its workstep estimates and material estimates. - needed bearer: &#x60;Organization&#x60; - needed scopes: &#x60;mission_control.estimates.r&#x60; or &#x60;mission_control.estimates.rw&#x60;
     * @param {String} estimateId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Estimate} and HTTP response
     */
  }, {
    key: "estimatesEstimateIdGetWithHttpInfo",
    value: function estimatesEstimateIdGetWithHttpInfo(estimateId) {
      var postBody = null;
      // verify the required parameter 'estimateId' is set
      if (estimateId === undefined || estimateId === null) {
        throw new Error("Missing the required parameter 'estimateId' when calling estimatesEstimateIdGet");
      }
      var pathParams = {
        'estimate_id': estimateId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _Estimate.Estimate;
      return this.apiClient.callApi('/estimates/{estimate_id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Returns a specific estimate, including its workstep estimates and material estimates. - needed bearer: &#x60;Organization&#x60; - needed scopes: &#x60;mission_control.estimates.r&#x60; or &#x60;mission_control.estimates.rw&#x60;
     * @param {<&vendorExtensions.x-jsdoc-type>} estimateId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Estimate}
     */
  }, {
    key: "estimatesEstimateIdGet",
    value: function estimatesEstimateIdGet(estimateId) {
      return this.estimatesEstimateIdGetWithHttpInfo(estimateId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Modifies a specific estimate. - needed bearer: &#x60;Organization&#x60; - needed scopes: &#x60;mission_control.estimates.w&#x60; or &#x60;mission_control.estimates.rw&#x60;
     * @param {module:model/EstimatesEstimateIdBody} body 
     * @param {String} estimateId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Estimate} and HTTP response
     */
  }, {
    key: "estimatesEstimateIdPatchWithHttpInfo",
    value: function estimatesEstimateIdPatchWithHttpInfo(body, estimateId) {
      var postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling estimatesEstimateIdPatch");
      }
      // verify the required parameter 'estimateId' is set
      if (estimateId === undefined || estimateId === null) {
        throw new Error("Missing the required parameter 'estimateId' when calling estimatesEstimateIdPatch");
      }
      var pathParams = {
        'estimate_id': estimateId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _Estimate.Estimate;
      return this.apiClient.callApi('/estimates/{estimate_id}', 'PATCH', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Modifies a specific estimate. - needed bearer: &#x60;Organization&#x60; - needed scopes: &#x60;mission_control.estimates.w&#x60; or &#x60;mission_control.estimates.rw&#x60;
     * @param {<&vendorExtensions.x-jsdoc-type>} body 
     * @param {<&vendorExtensions.x-jsdoc-type>} estimateId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Estimate}
     */
  }, {
    key: "estimatesEstimateIdPatch",
    value: function estimatesEstimateIdPatch(body, estimateId) {
      return this.estimatesEstimateIdPatchWithHttpInfo(body, estimateId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Returns all workstep estimates for the given estimate. - needed bearer: &#x60;Organization&#x60; - needed scopes: &#x60;mission_control.estimates.r&#x60; or &#x60;mission_control.estimates.rw&#x60;
     * @param {String} estimateId 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page The page of the current collection that shall be returned
     * @param {Number} opts.perPage The maximum number of items included in the response, ie., the page size (default to <.>)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/WorkstepEstimate>} and HTTP response
     */
  }, {
    key: "estimatesEstimateIdWorkstepEstimatesGetWithHttpInfo",
    value: function estimatesEstimateIdWorkstepEstimatesGetWithHttpInfo(estimateId, opts) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'estimateId' is set
      if (estimateId === undefined || estimateId === null) {
        throw new Error("Missing the required parameter 'estimateId' when calling estimatesEstimateIdWorkstepEstimatesGet");
      }
      var pathParams = {
        'estimate_id': estimateId
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
      var returnType = [_WorkstepEstimate.WorkstepEstimate];
      return this.apiClient.callApi('/estimates/{estimate_id}/workstep_estimates', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Returns all workstep estimates for the given estimate. - needed bearer: &#x60;Organization&#x60; - needed scopes: &#x60;mission_control.estimates.r&#x60; or &#x60;mission_control.estimates.rw&#x60;
     * @param {<&vendorExtensions.x-jsdoc-type>} estimateId 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page The page of the current collection that shall be returned
     * @param {Number} opts.perPage The maximum number of items included in the response, ie., the page size (default to <.>)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/WorkstepEstimate>}
     */
  }, {
    key: "estimatesEstimateIdWorkstepEstimatesGet",
    value: function estimatesEstimateIdWorkstepEstimatesGet(estimateId, opts) {
      return this.estimatesEstimateIdWorkstepEstimatesGetWithHttpInfo(estimateId, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Creates a new workstep estimate for the given estimate. - needed bearer: &#x60;Organization&#x60; - needed scopes: &#x60;mission_control.estimates.w&#x60; or &#x60;mission_control.estimates.rw&#x60;
     * @param {module:model/EstimateIdWorkstepEstimatesBody} body 
     * @param {String} estimateId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/WorkstepEstimate} and HTTP response
     */
  }, {
    key: "estimatesEstimateIdWorkstepEstimatesPostWithHttpInfo",
    value: function estimatesEstimateIdWorkstepEstimatesPostWithHttpInfo(body, estimateId) {
      var postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling estimatesEstimateIdWorkstepEstimatesPost");
      }
      // verify the required parameter 'estimateId' is set
      if (estimateId === undefined || estimateId === null) {
        throw new Error("Missing the required parameter 'estimateId' when calling estimatesEstimateIdWorkstepEstimatesPost");
      }
      var pathParams = {
        'estimate_id': estimateId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _WorkstepEstimate.WorkstepEstimate;
      return this.apiClient.callApi('/estimates/{estimate_id}/workstep_estimates', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Creates a new workstep estimate for the given estimate. - needed bearer: &#x60;Organization&#x60; - needed scopes: &#x60;mission_control.estimates.w&#x60; or &#x60;mission_control.estimates.rw&#x60;
     * @param {<&vendorExtensions.x-jsdoc-type>} body 
     * @param {<&vendorExtensions.x-jsdoc-type>} estimateId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/WorkstepEstimate}
     */
  }, {
    key: "estimatesEstimateIdWorkstepEstimatesPost",
    value: function estimatesEstimateIdWorkstepEstimatesPost(body, estimateId) {
      return this.estimatesEstimateIdWorkstepEstimatesPostWithHttpInfo(body, estimateId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Returns all estimates of a specific job - needed bearer: &#x60;Organization&#x60; - needed scopes: &#x60;mission_control.estimates.r&#x60; or &#x60;mission_control.estimates.rw&#x60;
     * @param {String} jobId 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page The page of the current collection that shall be returned
     * @param {Number} opts.perPage The maximum number of items included in the response, ie., the page size (default to <.>)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/Estimate>} and HTTP response
     */
  }, {
    key: "jobsJobIdEstimatesGetWithHttpInfo",
    value: function jobsJobIdEstimatesGetWithHttpInfo(jobId, opts) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'jobId' is set
      if (jobId === undefined || jobId === null) {
        throw new Error("Missing the required parameter 'jobId' when calling jobsJobIdEstimatesGet");
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
      var returnType = [_Estimate.Estimate];
      return this.apiClient.callApi('/jobs/{job_id}/estimates', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Returns all estimates of a specific job - needed bearer: &#x60;Organization&#x60; - needed scopes: &#x60;mission_control.estimates.r&#x60; or &#x60;mission_control.estimates.rw&#x60;
     * @param {<&vendorExtensions.x-jsdoc-type>} jobId 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page The page of the current collection that shall be returned
     * @param {Number} opts.perPage The maximum number of items included in the response, ie., the page size (default to <.>)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/Estimate>}
     */
  }, {
    key: "jobsJobIdEstimatesGet",
    value: function jobsJobIdEstimatesGet(jobId, opts) {
      return this.jobsJobIdEstimatesGetWithHttpInfo(jobId, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Creates a new estimate for the specified job. - needed bearer: &#x60;Organization&#x60; - needed scopes: &#x60;mission_control.estimates.w&#x60; or &#x60;mission_control.estimates.rw&#x60;
     * @param {module:model/JobIdEstimatesBody} body 
     * @param {String} jobId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Estimate} and HTTP response
     */
  }, {
    key: "jobsJobIdEstimatesPostWithHttpInfo",
    value: function jobsJobIdEstimatesPostWithHttpInfo(body, jobId) {
      var postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling jobsJobIdEstimatesPost");
      }
      // verify the required parameter 'jobId' is set
      if (jobId === undefined || jobId === null) {
        throw new Error("Missing the required parameter 'jobId' when calling jobsJobIdEstimatesPost");
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
      var returnType = _Estimate.Estimate;
      return this.apiClient.callApi('/jobs/{job_id}/estimates', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Creates a new estimate for the specified job. - needed bearer: &#x60;Organization&#x60; - needed scopes: &#x60;mission_control.estimates.w&#x60; or &#x60;mission_control.estimates.rw&#x60;
     * @param {<&vendorExtensions.x-jsdoc-type>} body 
     * @param {<&vendorExtensions.x-jsdoc-type>} jobId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Estimate}
     */
  }, {
    key: "jobsJobIdEstimatesPost",
    value: function jobsJobIdEstimatesPost(body, jobId) {
      return this.jobsJobIdEstimatesPostWithHttpInfo(body, jobId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     *  - needed bearer: &#x60;Organization&#x60; - needed scopes: &#x60;mission_control.estimates.w&#x60; or &#x60;mission_control.estimates.rw&#x60;
     * @param {String} materialEstimateId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
  }, {
    key: "materialEstimatesMaterialEstimateIdDeleteWithHttpInfo",
    value: function materialEstimatesMaterialEstimateIdDeleteWithHttpInfo(materialEstimateId) {
      var postBody = null;
      // verify the required parameter 'materialEstimateId' is set
      if (materialEstimateId === undefined || materialEstimateId === null) {
        throw new Error("Missing the required parameter 'materialEstimateId' when calling materialEstimatesMaterialEstimateIdDelete");
      }
      var pathParams = {
        'material_estimate_id': materialEstimateId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/material_estimates/{material_estimate_id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     *  - needed bearer: &#x60;Organization&#x60; - needed scopes: &#x60;mission_control.estimates.w&#x60; or &#x60;mission_control.estimates.rw&#x60;
     * @param {<&vendorExtensions.x-jsdoc-type>} materialEstimateId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
  }, {
    key: "materialEstimatesMaterialEstimateIdDelete",
    value: function materialEstimatesMaterialEstimateIdDelete(materialEstimateId) {
      return this.materialEstimatesMaterialEstimateIdDeleteWithHttpInfo(materialEstimateId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     *  - needed bearer: &#x60;Organization&#x60; - needed scopes: &#x60;mission_control.estimates.r&#x60; or &#x60;mission_control.estimates.rw&#x60;
     * @param {String} materialEstimateId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/MaterialEstimate} and HTTP response
     */
  }, {
    key: "materialEstimatesMaterialEstimateIdGetWithHttpInfo",
    value: function materialEstimatesMaterialEstimateIdGetWithHttpInfo(materialEstimateId) {
      var postBody = null;
      // verify the required parameter 'materialEstimateId' is set
      if (materialEstimateId === undefined || materialEstimateId === null) {
        throw new Error("Missing the required parameter 'materialEstimateId' when calling materialEstimatesMaterialEstimateIdGet");
      }
      var pathParams = {
        'material_estimate_id': materialEstimateId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _MaterialEstimate.MaterialEstimate;
      return this.apiClient.callApi('/material_estimates/{material_estimate_id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     *  - needed bearer: &#x60;Organization&#x60; - needed scopes: &#x60;mission_control.estimates.r&#x60; or &#x60;mission_control.estimates.rw&#x60;
     * @param {<&vendorExtensions.x-jsdoc-type>} materialEstimateId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/MaterialEstimate}
     */
  }, {
    key: "materialEstimatesMaterialEstimateIdGet",
    value: function materialEstimatesMaterialEstimateIdGet(materialEstimateId) {
      return this.materialEstimatesMaterialEstimateIdGetWithHttpInfo(materialEstimateId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     *  - needed bearer: &#x60;Organization&#x60; - needed scopes: &#x60;mission_control.estimates.w&#x60; or &#x60;mission_control.estimates.rw&#x60;
     * @param {module:model/MaterialEstimatesMaterialEstimateIdBody} body 
     * @param {String} materialEstimateId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/MaterialEstimate} and HTTP response
     */
  }, {
    key: "materialEstimatesMaterialEstimateIdPatchWithHttpInfo",
    value: function materialEstimatesMaterialEstimateIdPatchWithHttpInfo(body, materialEstimateId) {
      var postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling materialEstimatesMaterialEstimateIdPatch");
      }
      // verify the required parameter 'materialEstimateId' is set
      if (materialEstimateId === undefined || materialEstimateId === null) {
        throw new Error("Missing the required parameter 'materialEstimateId' when calling materialEstimatesMaterialEstimateIdPatch");
      }
      var pathParams = {
        'material_estimate_id': materialEstimateId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _MaterialEstimate.MaterialEstimate;
      return this.apiClient.callApi('/material_estimates/{material_estimate_id}', 'PATCH', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     *  - needed bearer: &#x60;Organization&#x60; - needed scopes: &#x60;mission_control.estimates.w&#x60; or &#x60;mission_control.estimates.rw&#x60;
     * @param {<&vendorExtensions.x-jsdoc-type>} body 
     * @param {<&vendorExtensions.x-jsdoc-type>} materialEstimateId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/MaterialEstimate}
     */
  }, {
    key: "materialEstimatesMaterialEstimateIdPatch",
    value: function materialEstimatesMaterialEstimateIdPatch(body, materialEstimateId) {
      return this.materialEstimatesMaterialEstimateIdPatchWithHttpInfo(body, materialEstimateId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     *  - needed bearer: &#x60;Organization&#x60; - needed scopes: &#x60;mission_control.estimates.w&#x60; or &#x60;mission_control.estimates.rw&#x60;
     * @param {String} workstepEstimateId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
  }, {
    key: "workstepEstimatesWorkstepEstimateIdDeleteWithHttpInfo",
    value: function workstepEstimatesWorkstepEstimateIdDeleteWithHttpInfo(workstepEstimateId) {
      var postBody = null;
      // verify the required parameter 'workstepEstimateId' is set
      if (workstepEstimateId === undefined || workstepEstimateId === null) {
        throw new Error("Missing the required parameter 'workstepEstimateId' when calling workstepEstimatesWorkstepEstimateIdDelete");
      }
      var pathParams = {
        'workstep_estimate_id': workstepEstimateId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/workstep_estimates/{workstep_estimate_id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     *  - needed bearer: &#x60;Organization&#x60; - needed scopes: &#x60;mission_control.estimates.w&#x60; or &#x60;mission_control.estimates.rw&#x60;
     * @param {<&vendorExtensions.x-jsdoc-type>} workstepEstimateId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
  }, {
    key: "workstepEstimatesWorkstepEstimateIdDelete",
    value: function workstepEstimatesWorkstepEstimateIdDelete(workstepEstimateId) {
      return this.workstepEstimatesWorkstepEstimateIdDeleteWithHttpInfo(workstepEstimateId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     *  - needed bearer: &#x60;Organization&#x60; - needed scopes: &#x60;mission_control.estimates.r&#x60; or &#x60;mission_control.estimates.rw&#x60;
     * @param {String} workstepEstimateId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/WorkstepEstimate} and HTTP response
     */
  }, {
    key: "workstepEstimatesWorkstepEstimateIdGetWithHttpInfo",
    value: function workstepEstimatesWorkstepEstimateIdGetWithHttpInfo(workstepEstimateId) {
      var postBody = null;
      // verify the required parameter 'workstepEstimateId' is set
      if (workstepEstimateId === undefined || workstepEstimateId === null) {
        throw new Error("Missing the required parameter 'workstepEstimateId' when calling workstepEstimatesWorkstepEstimateIdGet");
      }
      var pathParams = {
        'workstep_estimate_id': workstepEstimateId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _WorkstepEstimate.WorkstepEstimate;
      return this.apiClient.callApi('/workstep_estimates/{workstep_estimate_id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     *  - needed bearer: &#x60;Organization&#x60; - needed scopes: &#x60;mission_control.estimates.r&#x60; or &#x60;mission_control.estimates.rw&#x60;
     * @param {<&vendorExtensions.x-jsdoc-type>} workstepEstimateId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/WorkstepEstimate}
     */
  }, {
    key: "workstepEstimatesWorkstepEstimateIdGet",
    value: function workstepEstimatesWorkstepEstimateIdGet(workstepEstimateId) {
      return this.workstepEstimatesWorkstepEstimateIdGetWithHttpInfo(workstepEstimateId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     *  - needed bearer: &#x60;Organization&#x60; - needed scopes: &#x60;mission_control.estimates.r&#x60; or &#x60;mission_control.estimates.rw&#x60;
     * @param {String} workstepEstimateId 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page The page of the current collection that shall be returned
     * @param {Number} opts.perPage The maximum number of items included in the response, ie., the page size (default to <.>)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/MaterialEstimate>} and HTTP response
     */
  }, {
    key: "workstepEstimatesWorkstepEstimateIdMaterialEstimatesGetWithHttpInfo",
    value: function workstepEstimatesWorkstepEstimateIdMaterialEstimatesGetWithHttpInfo(workstepEstimateId, opts) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'workstepEstimateId' is set
      if (workstepEstimateId === undefined || workstepEstimateId === null) {
        throw new Error("Missing the required parameter 'workstepEstimateId' when calling workstepEstimatesWorkstepEstimateIdMaterialEstimatesGet");
      }
      var pathParams = {
        'workstep_estimate_id': workstepEstimateId
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
      var returnType = [_MaterialEstimate.MaterialEstimate];
      return this.apiClient.callApi('/workstep_estimates/{workstep_estimate_id}/material_estimates', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     *  - needed bearer: &#x60;Organization&#x60; - needed scopes: &#x60;mission_control.estimates.r&#x60; or &#x60;mission_control.estimates.rw&#x60;
     * @param {<&vendorExtensions.x-jsdoc-type>} workstepEstimateId 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page The page of the current collection that shall be returned
     * @param {Number} opts.perPage The maximum number of items included in the response, ie., the page size (default to <.>)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/MaterialEstimate>}
     */
  }, {
    key: "workstepEstimatesWorkstepEstimateIdMaterialEstimatesGet",
    value: function workstepEstimatesWorkstepEstimateIdMaterialEstimatesGet(workstepEstimateId, opts) {
      return this.workstepEstimatesWorkstepEstimateIdMaterialEstimatesGetWithHttpInfo(workstepEstimateId, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     *  - needed bearer: &#x60;Organization&#x60; - needed scopes: &#x60;mission_control.estimates.w&#x60; or &#x60;mission_control.estimates.rw&#x60;
     * @param {module:model/WorkstepEstimateIdMaterialEstimatesBody} body 
     * @param {String} workstepEstimateId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/MaterialEstimate} and HTTP response
     */
  }, {
    key: "workstepEstimatesWorkstepEstimateIdMaterialEstimatesPostWithHttpInfo",
    value: function workstepEstimatesWorkstepEstimateIdMaterialEstimatesPostWithHttpInfo(body, workstepEstimateId) {
      var postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling workstepEstimatesWorkstepEstimateIdMaterialEstimatesPost");
      }
      // verify the required parameter 'workstepEstimateId' is set
      if (workstepEstimateId === undefined || workstepEstimateId === null) {
        throw new Error("Missing the required parameter 'workstepEstimateId' when calling workstepEstimatesWorkstepEstimateIdMaterialEstimatesPost");
      }
      var pathParams = {
        'workstep_estimate_id': workstepEstimateId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _MaterialEstimate.MaterialEstimate;
      return this.apiClient.callApi('/workstep_estimates/{workstep_estimate_id}/material_estimates', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     *  - needed bearer: &#x60;Organization&#x60; - needed scopes: &#x60;mission_control.estimates.w&#x60; or &#x60;mission_control.estimates.rw&#x60;
     * @param {<&vendorExtensions.x-jsdoc-type>} body 
     * @param {<&vendorExtensions.x-jsdoc-type>} workstepEstimateId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/MaterialEstimate}
     */
  }, {
    key: "workstepEstimatesWorkstepEstimateIdMaterialEstimatesPost",
    value: function workstepEstimatesWorkstepEstimateIdMaterialEstimatesPost(body, workstepEstimateId) {
      return this.workstepEstimatesWorkstepEstimateIdMaterialEstimatesPostWithHttpInfo(body, workstepEstimateId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     *  - needed bearer: &#x60;Organization&#x60; - needed scopes: &#x60;mission_control.estimates.w&#x60; or &#x60;mission_control.estimates.rw&#x60;
     * @param {module:model/WorkstepEstimatesWorkstepEstimateIdBody} body 
     * @param {String} workstepEstimateId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/WorkstepEstimate} and HTTP response
     */
  }, {
    key: "workstepEstimatesWorkstepEstimateIdPatchWithHttpInfo",
    value: function workstepEstimatesWorkstepEstimateIdPatchWithHttpInfo(body, workstepEstimateId) {
      var postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling workstepEstimatesWorkstepEstimateIdPatch");
      }
      // verify the required parameter 'workstepEstimateId' is set
      if (workstepEstimateId === undefined || workstepEstimateId === null) {
        throw new Error("Missing the required parameter 'workstepEstimateId' when calling workstepEstimatesWorkstepEstimateIdPatch");
      }
      var pathParams = {
        'workstep_estimate_id': workstepEstimateId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _WorkstepEstimate.WorkstepEstimate;
      return this.apiClient.callApi('/workstep_estimates/{workstep_estimate_id}', 'PATCH', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     *  - needed bearer: &#x60;Organization&#x60; - needed scopes: &#x60;mission_control.estimates.w&#x60; or &#x60;mission_control.estimates.rw&#x60;
     * @param {<&vendorExtensions.x-jsdoc-type>} body 
     * @param {<&vendorExtensions.x-jsdoc-type>} workstepEstimateId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/WorkstepEstimate}
     */
  }, {
    key: "workstepEstimatesWorkstepEstimateIdPatch",
    value: function workstepEstimatesWorkstepEstimateIdPatch(body, workstepEstimateId) {
      return this.workstepEstimatesWorkstepEstimateIdPatchWithHttpInfo(body, workstepEstimateId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);
  return EstimatesApi;
}();
exports.EstimatesApi = EstimatesApi;