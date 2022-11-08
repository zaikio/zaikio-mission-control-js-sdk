"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SpecificationApi = void 0;
var _ApiClient = require("../ApiClient");
var _Color = require("../model/Color");
var _ColorsColorIdBody = require("../model/ColorsColorIdBody");
var _DesiredSubstrate = require("../model/DesiredSubstrate");
var _ExtendedPart = require("../model/ExtendedPart");
var _FileAction = require("../model/FileAction");
var _FileActionIdFileRemarksBody = require("../model/FileActionIdFileRemarksBody");
var _FileActionsFileActionIdBody = require("../model/FileActionsFileActionIdBody");
var _FileReference = require("../model/FileReference");
var _FileReferenceIdFileActionsBody = require("../model/FileReferenceIdFileActionsBody");
var _FileRemark = require("../model/FileRemark");
var _Finishing = require("../model/Finishing");
var _FinishingApplication = require("../model/FinishingApplication");
var _FinishingIdFileReferencesBody = require("../model/FinishingIdFileReferencesBody");
var _FinishingIdFinishingApplicationsBody = require("../model/FinishingIdFinishingApplicationsBody");
var _FinishingsFinishingIdBody = require("../model/FinishingsFinishingIdBody");
var _InlineResponse = require("../model/InlineResponse200");
var _InlineResponse2 = require("../model/InlineResponse400");
var _InlineResponse3 = require("../model/InlineResponse401");
var _Job = require("../model/Job");
var _JobIdPackagingsBody = require("../model/JobIdPackagingsBody");
var _JobIdPartsBody = require("../model/JobIdPartsBody");
var _JobsBody = require("../model/JobsBody");
var _JobsJobIdBody = require("../model/JobsJobIdBody");
var _Packaging = require("../model/Packaging");
var _PackagingsPackagingIdBody = require("../model/PackagingsPackagingIdBody");
var _Part = require("../model/Part");
var _PartIdColorsBody = require("../model/PartIdColorsBody");
var _PartIdDesiredSubstrateBody = require("../model/PartIdDesiredSubstrateBody");
var _PartIdDesiredSubstrateBody2 = require("../model/PartIdDesiredSubstrateBody1");
var _PartIdFileReferencesBody = require("../model/PartIdFileReferencesBody");
var _PartIdFinishingsBody = require("../model/PartIdFinishingsBody");
var _PartsPartIdBody = require("../model/PartsPartIdBody");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
* Specification service.
* @module api/SpecificationApi
* @version 1.0.0
*/
var SpecificationApi = /*#__PURE__*/function () {
  /**
  * Constructs a new SpecificationApi. 
  * @alias module:api/SpecificationApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instanc
  e} if unspecified.
  */
  function SpecificationApi(apiClient) {
    _classCallCheck(this, SpecificationApi);
    this.apiClient = apiClient || _ApiClient.ApiClient.instance;
  }

  /**
   * Removes a file action. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: 
   * @param {String} fileActionId 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
   */
  _createClass(SpecificationApi, [{
    key: "fileActionsFileActionIdDeleteWithHttpInfo",
    value: function fileActionsFileActionIdDeleteWithHttpInfo(fileActionId) {
      var postBody = null;
      // verify the required parameter 'fileActionId' is set
      if (fileActionId === undefined || fileActionId === null) {
        throw new Error("Missing the required parameter 'fileActionId' when calling fileActionsFileActionIdDelete");
      }
      var pathParams = {
        'file_action_id': fileActionId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/file_actions/{file_action_id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Removes a file action. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: 
     * @param {<&vendorExtensions.x-jsdoc-type>} fileActionId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
  }, {
    key: "fileActionsFileActionIdDelete",
    value: function fileActionsFileActionIdDelete(fileActionId) {
      return this.fileActionsFileActionIdDeleteWithHttpInfo(fileActionId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Get all file remarks of a file action. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: &#x60;mission_control.jobs.r&#x60;
     * @param {String} fileActionId 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page The page of the current collection that shall be returned
     * @param {Number} opts.perPage The maximum number of items included in the response, ie., the page size (default to <.>)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/FileRemark>} and HTTP response
     */
  }, {
    key: "fileActionsFileActionIdFileRemarksGetWithHttpInfo",
    value: function fileActionsFileActionIdFileRemarksGetWithHttpInfo(fileActionId, opts) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'fileActionId' is set
      if (fileActionId === undefined || fileActionId === null) {
        throw new Error("Missing the required parameter 'fileActionId' when calling fileActionsFileActionIdFileRemarksGet");
      }
      var pathParams = {
        'file_action_id': fileActionId
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
      var returnType = [_FileRemark.FileRemark];
      return this.apiClient.callApi('/file_actions/{file_action_id}/file_remarks', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Get all file remarks of a file action. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: &#x60;mission_control.jobs.r&#x60;
     * @param {<&vendorExtensions.x-jsdoc-type>} fileActionId 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page The page of the current collection that shall be returned
     * @param {Number} opts.perPage The maximum number of items included in the response, ie., the page size (default to <.>)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/FileRemark>}
     */
  }, {
    key: "fileActionsFileActionIdFileRemarksGet",
    value: function fileActionsFileActionIdFileRemarksGet(fileActionId, opts) {
      return this.fileActionsFileActionIdFileRemarksGetWithHttpInfo(fileActionId, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Creates a file remark. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: 
     * @param {module:model/FileActionIdFileRemarksBody} body 
     * @param {String} fileActionId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/FileRemark} and HTTP response
     */
  }, {
    key: "fileActionsFileActionIdFileRemarksPostWithHttpInfo",
    value: function fileActionsFileActionIdFileRemarksPostWithHttpInfo(body, fileActionId) {
      var postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling fileActionsFileActionIdFileRemarksPost");
      }
      // verify the required parameter 'fileActionId' is set
      if (fileActionId === undefined || fileActionId === null) {
        throw new Error("Missing the required parameter 'fileActionId' when calling fileActionsFileActionIdFileRemarksPost");
      }
      var pathParams = {
        'file_action_id': fileActionId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _FileRemark.FileRemark;
      return this.apiClient.callApi('/file_actions/{file_action_id}/file_remarks', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Creates a file remark. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: 
     * @param {<&vendorExtensions.x-jsdoc-type>} body 
     * @param {<&vendorExtensions.x-jsdoc-type>} fileActionId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/FileRemark}
     */
  }, {
    key: "fileActionsFileActionIdFileRemarksPost",
    value: function fileActionsFileActionIdFileRemarksPost(body, fileActionId) {
      return this.fileActionsFileActionIdFileRemarksPostWithHttpInfo(body, fileActionId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Returns a specific file action. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: &#x60;mission_control.jobs.r&#x60;
     * @param {String} fileActionId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/FileAction} and HTTP response
     */
  }, {
    key: "fileActionsFileActionIdGetWithHttpInfo",
    value: function fileActionsFileActionIdGetWithHttpInfo(fileActionId) {
      var postBody = null;
      // verify the required parameter 'fileActionId' is set
      if (fileActionId === undefined || fileActionId === null) {
        throw new Error("Missing the required parameter 'fileActionId' when calling fileActionsFileActionIdGet");
      }
      var pathParams = {
        'file_action_id': fileActionId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _FileAction.FileAction;
      return this.apiClient.callApi('/file_actions/{file_action_id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Returns a specific file action. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: &#x60;mission_control.jobs.r&#x60;
     * @param {<&vendorExtensions.x-jsdoc-type>} fileActionId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/FileAction}
     */
  }, {
    key: "fileActionsFileActionIdGet",
    value: function fileActionsFileActionIdGet(fileActionId) {
      return this.fileActionsFileActionIdGetWithHttpInfo(fileActionId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Modifies file action. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: 
     * @param {module:model/FileActionsFileActionIdBody} body 
     * @param {String} fileActionId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/FileAction} and HTTP response
     */
  }, {
    key: "fileActionsFileActionIdPatchWithHttpInfo",
    value: function fileActionsFileActionIdPatchWithHttpInfo(body, fileActionId) {
      var postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling fileActionsFileActionIdPatch");
      }
      // verify the required parameter 'fileActionId' is set
      if (fileActionId === undefined || fileActionId === null) {
        throw new Error("Missing the required parameter 'fileActionId' when calling fileActionsFileActionIdPatch");
      }
      var pathParams = {
        'file_action_id': fileActionId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _FileAction.FileAction;
      return this.apiClient.callApi('/file_actions/{file_action_id}', 'PATCH', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Modifies file action. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: 
     * @param {<&vendorExtensions.x-jsdoc-type>} body 
     * @param {<&vendorExtensions.x-jsdoc-type>} fileActionId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/FileAction}
     */
  }, {
    key: "fileActionsFileActionIdPatch",
    value: function fileActionsFileActionIdPatch(body, fileActionId) {
      return this.fileActionsFileActionIdPatchWithHttpInfo(body, fileActionId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Removes the file reference from it&#x27;s referenceable, which is a part or a finishing. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: 
     * @param {String} fileReferenceId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
  }, {
    key: "fileReferencesFileReferenceIdDeleteWithHttpInfo",
    value: function fileReferencesFileReferenceIdDeleteWithHttpInfo(fileReferenceId) {
      var postBody = null;
      // verify the required parameter 'fileReferenceId' is set
      if (fileReferenceId === undefined || fileReferenceId === null) {
        throw new Error("Missing the required parameter 'fileReferenceId' when calling fileReferencesFileReferenceIdDelete");
      }
      var pathParams = {
        'file_reference_id': fileReferenceId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/file_references/{file_reference_id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Removes the file reference from it&#x27;s referenceable, which is a part or a finishing. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: 
     * @param {<&vendorExtensions.x-jsdoc-type>} fileReferenceId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
  }, {
    key: "fileReferencesFileReferenceIdDelete",
    value: function fileReferencesFileReferenceIdDelete(fileReferenceId) {
      return this.fileReferencesFileReferenceIdDeleteWithHttpInfo(fileReferenceId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Get all file actions of a file reference. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: &#x60;mission_control.jobs.r&#x60;
     * @param {String} fileReferenceId 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page The page of the current collection that shall be returned
     * @param {Number} opts.perPage The maximum number of items included in the response, ie., the page size (default to <.>)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/FileAction>} and HTTP response
     */
  }, {
    key: "fileReferencesFileReferenceIdFileActionsGetWithHttpInfo",
    value: function fileReferencesFileReferenceIdFileActionsGetWithHttpInfo(fileReferenceId, opts) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'fileReferenceId' is set
      if (fileReferenceId === undefined || fileReferenceId === null) {
        throw new Error("Missing the required parameter 'fileReferenceId' when calling fileReferencesFileReferenceIdFileActionsGet");
      }
      var pathParams = {
        'file_reference_id': fileReferenceId
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
      var returnType = [_FileAction.FileAction];
      return this.apiClient.callApi('/file_references/{file_reference_id}/file_actions', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Get all file actions of a file reference. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: &#x60;mission_control.jobs.r&#x60;
     * @param {<&vendorExtensions.x-jsdoc-type>} fileReferenceId 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page The page of the current collection that shall be returned
     * @param {Number} opts.perPage The maximum number of items included in the response, ie., the page size (default to <.>)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/FileAction>}
     */
  }, {
    key: "fileReferencesFileReferenceIdFileActionsGet",
    value: function fileReferencesFileReferenceIdFileActionsGet(fileReferenceId, opts) {
      return this.fileReferencesFileReferenceIdFileActionsGetWithHttpInfo(fileReferenceId, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Creates a file action. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: 
     * @param {module:model/FileReferenceIdFileActionsBody} body 
     * @param {String} fileReferenceId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/FileAction} and HTTP response
     */
  }, {
    key: "fileReferencesFileReferenceIdFileActionsPostWithHttpInfo",
    value: function fileReferencesFileReferenceIdFileActionsPostWithHttpInfo(body, fileReferenceId) {
      var postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling fileReferencesFileReferenceIdFileActionsPost");
      }
      // verify the required parameter 'fileReferenceId' is set
      if (fileReferenceId === undefined || fileReferenceId === null) {
        throw new Error("Missing the required parameter 'fileReferenceId' when calling fileReferencesFileReferenceIdFileActionsPost");
      }
      var pathParams = {
        'file_reference_id': fileReferenceId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _FileAction.FileAction;
      return this.apiClient.callApi('/file_references/{file_reference_id}/file_actions', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Creates a file action. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: 
     * @param {<&vendorExtensions.x-jsdoc-type>} body 
     * @param {<&vendorExtensions.x-jsdoc-type>} fileReferenceId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/FileAction}
     */
  }, {
    key: "fileReferencesFileReferenceIdFileActionsPost",
    value: function fileReferencesFileReferenceIdFileActionsPost(body, fileReferenceId) {
      return this.fileReferencesFileReferenceIdFileActionsPostWithHttpInfo(body, fileReferenceId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Returns a specific file reference. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: &#x60;mission_control.jobs.r&#x60;
     * @param {String} fileReferenceId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/FileReference} and HTTP response
     */
  }, {
    key: "fileReferencesFileReferenceIdGetWithHttpInfo",
    value: function fileReferencesFileReferenceIdGetWithHttpInfo(fileReferenceId) {
      var postBody = null;
      // verify the required parameter 'fileReferenceId' is set
      if (fileReferenceId === undefined || fileReferenceId === null) {
        throw new Error("Missing the required parameter 'fileReferenceId' when calling fileReferencesFileReferenceIdGet");
      }
      var pathParams = {
        'file_reference_id': fileReferenceId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _FileReference.FileReference;
      return this.apiClient.callApi('/file_references/{file_reference_id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Returns a specific file reference. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: &#x60;mission_control.jobs.r&#x60;
     * @param {<&vendorExtensions.x-jsdoc-type>} fileReferenceId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/FileReference}
     */
  }, {
    key: "fileReferencesFileReferenceIdGet",
    value: function fileReferencesFileReferenceIdGet(fileReferenceId) {
      return this.fileReferencesFileReferenceIdGetWithHttpInfo(fileReferenceId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Removes the finishing from a part. The finishing itself is destroyed                         by this operation including all of it&#x27;s applications. If you only want to                         detach a finishing from one part please remove the finishing application                         for that part instead. Finishings can only be removed as long as the                         parent jobs is in a &#x60;draft&#x60; state. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: 
     * @param {String} finishingId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
  }, {
    key: "finishingsFinishingIdDeleteWithHttpInfo",
    value: function finishingsFinishingIdDeleteWithHttpInfo(finishingId) {
      var postBody = null;
      // verify the required parameter 'finishingId' is set
      if (finishingId === undefined || finishingId === null) {
        throw new Error("Missing the required parameter 'finishingId' when calling finishingsFinishingIdDelete");
      }
      var pathParams = {
        'finishing_id': finishingId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/finishings/{finishing_id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Removes the finishing from a part. The finishing itself is destroyed                         by this operation including all of it&#x27;s applications. If you only want to                         detach a finishing from one part please remove the finishing application                         for that part instead. Finishings can only be removed as long as the                         parent jobs is in a &#x60;draft&#x60; state. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: 
     * @param {<&vendorExtensions.x-jsdoc-type>} finishingId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
  }, {
    key: "finishingsFinishingIdDelete",
    value: function finishingsFinishingIdDelete(finishingId) {
      return this.finishingsFinishingIdDeleteWithHttpInfo(finishingId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Returns all file references of a specific finishing. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: &#x60;mission_control.jobs.r&#x60;
     * @param {String} finishingId 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page The page of the current collection that shall be returned
     * @param {Number} opts.perPage The maximum number of items included in the response, ie., the page size (default to <.>)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/FileReference>} and HTTP response
     */
  }, {
    key: "finishingsFinishingIdFileReferencesGetWithHttpInfo",
    value: function finishingsFinishingIdFileReferencesGetWithHttpInfo(finishingId, opts) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'finishingId' is set
      if (finishingId === undefined || finishingId === null) {
        throw new Error("Missing the required parameter 'finishingId' when calling finishingsFinishingIdFileReferencesGet");
      }
      var pathParams = {
        'finishing_id': finishingId
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
      var returnType = [_FileReference.FileReference];
      return this.apiClient.callApi('/finishings/{finishing_id}/file_references', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Returns all file references of a specific finishing. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: &#x60;mission_control.jobs.r&#x60;
     * @param {<&vendorExtensions.x-jsdoc-type>} finishingId 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page The page of the current collection that shall be returned
     * @param {Number} opts.perPage The maximum number of items included in the response, ie., the page size (default to <.>)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/FileReference>}
     */
  }, {
    key: "finishingsFinishingIdFileReferencesGet",
    value: function finishingsFinishingIdFileReferencesGet(finishingId, opts) {
      return this.finishingsFinishingIdFileReferencesGetWithHttpInfo(finishingId, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Creates a new file reference for a specific finishing. File referenes can only be                           added or modified as long as the job has not been &#x60;completed&#x60; or &#x60;canceled&#x60;.                           This means, that file references can be modified for production jobs. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: 
     * @param {module:model/FinishingIdFileReferencesBody} body 
     * @param {String} finishingId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/FileReference} and HTTP response
     */
  }, {
    key: "finishingsFinishingIdFileReferencesPostWithHttpInfo",
    value: function finishingsFinishingIdFileReferencesPostWithHttpInfo(body, finishingId) {
      var postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling finishingsFinishingIdFileReferencesPost");
      }
      // verify the required parameter 'finishingId' is set
      if (finishingId === undefined || finishingId === null) {
        throw new Error("Missing the required parameter 'finishingId' when calling finishingsFinishingIdFileReferencesPost");
      }
      var pathParams = {
        'finishing_id': finishingId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _FileReference.FileReference;
      return this.apiClient.callApi('/finishings/{finishing_id}/file_references', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Creates a new file reference for a specific finishing. File referenes can only be                           added or modified as long as the job has not been &#x60;completed&#x60; or &#x60;canceled&#x60;.                           This means, that file references can be modified for production jobs. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: 
     * @param {<&vendorExtensions.x-jsdoc-type>} body 
     * @param {<&vendorExtensions.x-jsdoc-type>} finishingId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/FileReference}
     */
  }, {
    key: "finishingsFinishingIdFileReferencesPost",
    value: function finishingsFinishingIdFileReferencesPost(body, finishingId) {
      return this.finishingsFinishingIdFileReferencesPostWithHttpInfo(body, finishingId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Removes a finishing application from a specific finishing. If a finishing is                             left without any applications after this removal, the finishing itself will                             be automatically destroyed as well. Removing finishing applications is only                             possible if the parent job is in a &#x60;draft&#x60; state. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: 
     * @param {String} finishingId 
     * @param {String} finishingApplicationId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
  }, {
    key: "finishingsFinishingIdFinishingApplicationsFinishingApplicationIdDeleteWithHttpInfo",
    value: function finishingsFinishingIdFinishingApplicationsFinishingApplicationIdDeleteWithHttpInfo(finishingId, finishingApplicationId) {
      var postBody = null;
      // verify the required parameter 'finishingId' is set
      if (finishingId === undefined || finishingId === null) {
        throw new Error("Missing the required parameter 'finishingId' when calling finishingsFinishingIdFinishingApplicationsFinishingApplicationIdDelete");
      }
      // verify the required parameter 'finishingApplicationId' is set
      if (finishingApplicationId === undefined || finishingApplicationId === null) {
        throw new Error("Missing the required parameter 'finishingApplicationId' when calling finishingsFinishingIdFinishingApplicationsFinishingApplicationIdDelete");
      }
      var pathParams = {
        'finishing_id': finishingId,
        'finishing_application_id': finishingApplicationId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/finishings/{finishing_id}/finishing_applications/{finishing_application_id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Removes a finishing application from a specific finishing. If a finishing is                             left without any applications after this removal, the finishing itself will                             be automatically destroyed as well. Removing finishing applications is only                             possible if the parent job is in a &#x60;draft&#x60; state. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: 
     * @param {<&vendorExtensions.x-jsdoc-type>} finishingId 
     * @param {<&vendorExtensions.x-jsdoc-type>} finishingApplicationId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
  }, {
    key: "finishingsFinishingIdFinishingApplicationsFinishingApplicationIdDelete",
    value: function finishingsFinishingIdFinishingApplicationsFinishingApplicationIdDelete(finishingId, finishingApplicationId) {
      return this.finishingsFinishingIdFinishingApplicationsFinishingApplicationIdDeleteWithHttpInfo(finishingId, finishingApplicationId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Returns a specific finishing application. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: &#x60;mission_control.jobs.r&#x60;
     * @param {String} finishingId 
     * @param {String} finishingApplicationId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/FinishingApplication} and HTTP response
     */
  }, {
    key: "finishingsFinishingIdFinishingApplicationsFinishingApplicationIdGetWithHttpInfo",
    value: function finishingsFinishingIdFinishingApplicationsFinishingApplicationIdGetWithHttpInfo(finishingId, finishingApplicationId) {
      var postBody = null;
      // verify the required parameter 'finishingId' is set
      if (finishingId === undefined || finishingId === null) {
        throw new Error("Missing the required parameter 'finishingId' when calling finishingsFinishingIdFinishingApplicationsFinishingApplicationIdGet");
      }
      // verify the required parameter 'finishingApplicationId' is set
      if (finishingApplicationId === undefined || finishingApplicationId === null) {
        throw new Error("Missing the required parameter 'finishingApplicationId' when calling finishingsFinishingIdFinishingApplicationsFinishingApplicationIdGet");
      }
      var pathParams = {
        'finishing_id': finishingId,
        'finishing_application_id': finishingApplicationId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _FinishingApplication.FinishingApplication;
      return this.apiClient.callApi('/finishings/{finishing_id}/finishing_applications/{finishing_application_id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Returns a specific finishing application. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: &#x60;mission_control.jobs.r&#x60;
     * @param {<&vendorExtensions.x-jsdoc-type>} finishingId 
     * @param {<&vendorExtensions.x-jsdoc-type>} finishingApplicationId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/FinishingApplication}
     */
  }, {
    key: "finishingsFinishingIdFinishingApplicationsFinishingApplicationIdGet",
    value: function finishingsFinishingIdFinishingApplicationsFinishingApplicationIdGet(finishingId, finishingApplicationId) {
      return this.finishingsFinishingIdFinishingApplicationsFinishingApplicationIdGetWithHttpInfo(finishingId, finishingApplicationId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Returns all finishing applications of a specific finishing. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: &#x60;mission_control.jobs.r&#x60;
     * @param {String} finishingId 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page The page of the current collection that shall be returned
     * @param {Number} opts.perPage The maximum number of items included in the response, ie., the page size (default to <.>)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/FinishingApplication>} and HTTP response
     */
  }, {
    key: "finishingsFinishingIdFinishingApplicationsGetWithHttpInfo",
    value: function finishingsFinishingIdFinishingApplicationsGetWithHttpInfo(finishingId, opts) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'finishingId' is set
      if (finishingId === undefined || finishingId === null) {
        throw new Error("Missing the required parameter 'finishingId' when calling finishingsFinishingIdFinishingApplicationsGet");
      }
      var pathParams = {
        'finishing_id': finishingId
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
      var returnType = [_FinishingApplication.FinishingApplication];
      return this.apiClient.callApi('/finishings/{finishing_id}/finishing_applications', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Returns all finishing applications of a specific finishing. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: &#x60;mission_control.jobs.r&#x60;
     * @param {<&vendorExtensions.x-jsdoc-type>} finishingId 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page The page of the current collection that shall be returned
     * @param {Number} opts.perPage The maximum number of items included in the response, ie., the page size (default to <.>)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/FinishingApplication>}
     */
  }, {
    key: "finishingsFinishingIdFinishingApplicationsGet",
    value: function finishingsFinishingIdFinishingApplicationsGet(finishingId, opts) {
      return this.finishingsFinishingIdFinishingApplicationsGetWithHttpInfo(finishingId, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Creates a new finishing application for a specific finshing and part.                           Finshing applications can only be added as long as the job is in a &#x60;draft&#x60; state. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: 
     * @param {module:model/FinishingIdFinishingApplicationsBody} body 
     * @param {String} finishingId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/FinishingApplication} and HTTP response
     */
  }, {
    key: "finishingsFinishingIdFinishingApplicationsPostWithHttpInfo",
    value: function finishingsFinishingIdFinishingApplicationsPostWithHttpInfo(body, finishingId) {
      var postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling finishingsFinishingIdFinishingApplicationsPost");
      }
      // verify the required parameter 'finishingId' is set
      if (finishingId === undefined || finishingId === null) {
        throw new Error("Missing the required parameter 'finishingId' when calling finishingsFinishingIdFinishingApplicationsPost");
      }
      var pathParams = {
        'finishing_id': finishingId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _FinishingApplication.FinishingApplication;
      return this.apiClient.callApi('/finishings/{finishing_id}/finishing_applications', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Creates a new finishing application for a specific finshing and part.                           Finshing applications can only be added as long as the job is in a &#x60;draft&#x60; state. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: 
     * @param {<&vendorExtensions.x-jsdoc-type>} body 
     * @param {<&vendorExtensions.x-jsdoc-type>} finishingId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/FinishingApplication}
     */
  }, {
    key: "finishingsFinishingIdFinishingApplicationsPost",
    value: function finishingsFinishingIdFinishingApplicationsPost(body, finishingId) {
      return this.finishingsFinishingIdFinishingApplicationsPostWithHttpInfo(body, finishingId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Returns a specific finishing. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: &#x60;mission_control.jobs.r&#x60;
     * @param {String} finishingId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Finishing} and HTTP response
     */
  }, {
    key: "finishingsFinishingIdGetWithHttpInfo",
    value: function finishingsFinishingIdGetWithHttpInfo(finishingId) {
      var postBody = null;
      // verify the required parameter 'finishingId' is set
      if (finishingId === undefined || finishingId === null) {
        throw new Error("Missing the required parameter 'finishingId' when calling finishingsFinishingIdGet");
      }
      var pathParams = {
        'finishing_id': finishingId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _Finishing.Finishing;
      return this.apiClient.callApi('/finishings/{finishing_id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Returns a specific finishing. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: &#x60;mission_control.jobs.r&#x60;
     * @param {<&vendorExtensions.x-jsdoc-type>} finishingId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Finishing}
     */
  }, {
    key: "finishingsFinishingIdGet",
    value: function finishingsFinishingIdGet(finishingId) {
      return this.finishingsFinishingIdGetWithHttpInfo(finishingId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     *  - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: 
     * @param {module:model/FinishingsFinishingIdBody} body 
     * @param {String} finishingId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Finishing} and HTTP response
     */
  }, {
    key: "finishingsFinishingIdPatchWithHttpInfo",
    value: function finishingsFinishingIdPatchWithHttpInfo(body, finishingId) {
      var postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling finishingsFinishingIdPatch");
      }
      // verify the required parameter 'finishingId' is set
      if (finishingId === undefined || finishingId === null) {
        throw new Error("Missing the required parameter 'finishingId' when calling finishingsFinishingIdPatch");
      }
      var pathParams = {
        'finishing_id': finishingId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _Finishing.Finishing;
      return this.apiClient.callApi('/finishings/{finishing_id}', 'PATCH', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     *  - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: 
     * @param {<&vendorExtensions.x-jsdoc-type>} body 
     * @param {<&vendorExtensions.x-jsdoc-type>} finishingId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Finishing}
     */
  }, {
    key: "finishingsFinishingIdPatch",
    value: function finishingsFinishingIdPatch(body, finishingId) {
      return this.finishingsFinishingIdPatchWithHttpInfo(body, finishingId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Returns all jobs that have a connection to the &#x60;Organization&#x60;                        from your token. This means that those jobs might have been created by                        that organization, are produced by it, some parts have been outsourced to it,                        or the organization is the customer which ordered a job. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: &#x60;mission_control.jobs.r&#x60;
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page The page of the current collection that shall be returned
     * @param {Number} opts.perPage The maximum number of items included in the response, ie., the page size (default to <.>)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/Job>} and HTTP response
     */
  }, {
    key: "jobsGetWithHttpInfo",
    value: function jobsGetWithHttpInfo(opts) {
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
      var returnType = [_Job.Job];
      return this.apiClient.callApi('/jobs', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Returns all jobs that have a connection to the &#x60;Organization&#x60;                        from your token. This means that those jobs might have been created by                        that organization, are produced by it, some parts have been outsourced to it,                        or the organization is the customer which ordered a job. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: &#x60;mission_control.jobs.r&#x60;
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page The page of the current collection that shall be returned
     * @param {Number} opts.perPage The maximum number of items included in the response, ie., the page size (default to <.>)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/Job>}
     */
  }, {
    key: "jobsGet",
    value: function jobsGet(opts) {
      return this.jobsGetWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Removes or specific job while this job is still a &#x60;draft&#x60;. If the job                          is not in a &#x60;draft&#x60; state anymore the job will be canceled. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: 
     * @param {String} jobId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
  }, {
    key: "jobsJobIdDeleteWithHttpInfo",
    value: function jobsJobIdDeleteWithHttpInfo(jobId) {
      var postBody = null;
      // verify the required parameter 'jobId' is set
      if (jobId === undefined || jobId === null) {
        throw new Error("Missing the required parameter 'jobId' when calling jobsJobIdDelete");
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
      var returnType = null;
      return this.apiClient.callApi('/jobs/{job_id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Removes or specific job while this job is still a &#x60;draft&#x60;. If the job                          is not in a &#x60;draft&#x60; state anymore the job will be canceled. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: 
     * @param {<&vendorExtensions.x-jsdoc-type>} jobId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
  }, {
    key: "jobsJobIdDelete",
    value: function jobsJobIdDelete(jobId) {
      return this.jobsJobIdDeleteWithHttpInfo(jobId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Returns a specific job, including it&#x27;s entire defintion like compments, their                       colors, finishings, finishing applications and desired substrate information. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: &#x60;mission_control.jobs.r&#x60;
     * @param {String} jobId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse200} and HTTP response
     */
  }, {
    key: "jobsJobIdGetWithHttpInfo",
    value: function jobsJobIdGetWithHttpInfo(jobId) {
      var postBody = null;
      // verify the required parameter 'jobId' is set
      if (jobId === undefined || jobId === null) {
        throw new Error("Missing the required parameter 'jobId' when calling jobsJobIdGet");
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
      var returnType = _InlineResponse.InlineResponse200;
      return this.apiClient.callApi('/jobs/{job_id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Returns a specific job, including it&#x27;s entire defintion like compments, their                       colors, finishings, finishing applications and desired substrate information. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: &#x60;mission_control.jobs.r&#x60;
     * @param {<&vendorExtensions.x-jsdoc-type>} jobId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse200}
     */
  }, {
    key: "jobsJobIdGet",
    value: function jobsJobIdGet(jobId) {
      return this.jobsJobIdGetWithHttpInfo(jobId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Returns all packagings of a specific jobs - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: &#x60;mission_control.jobs.r&#x60;
     * @param {String} jobId 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page The page of the current collection that shall be returned
     * @param {Number} opts.perPage The maximum number of items included in the response, ie., the page size (default to <.>)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/Packaging>} and HTTP response
     */
  }, {
    key: "jobsJobIdPackagingsGetWithHttpInfo",
    value: function jobsJobIdPackagingsGetWithHttpInfo(jobId, opts) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'jobId' is set
      if (jobId === undefined || jobId === null) {
        throw new Error("Missing the required parameter 'jobId' when calling jobsJobIdPackagingsGet");
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
      var returnType = [_Packaging.Packaging];
      return this.apiClient.callApi('/jobs/{job_id}/packagings', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Returns all packagings of a specific jobs - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: &#x60;mission_control.jobs.r&#x60;
     * @param {<&vendorExtensions.x-jsdoc-type>} jobId 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page The page of the current collection that shall be returned
     * @param {Number} opts.perPage The maximum number of items included in the response, ie., the page size (default to <.>)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/Packaging>}
     */
  }, {
    key: "jobsJobIdPackagingsGet",
    value: function jobsJobIdPackagingsGet(jobId, opts) {
      return this.jobsJobIdPackagingsGetWithHttpInfo(jobId, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Creates a new packaging for the specified job. Packagings can only be added or                           modified as long as the job is in a &#x60;draft&#x60; state. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: 
     * @param {module:model/JobIdPackagingsBody} body 
     * @param {String} jobId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Packaging} and HTTP response
     */
  }, {
    key: "jobsJobIdPackagingsPostWithHttpInfo",
    value: function jobsJobIdPackagingsPostWithHttpInfo(body, jobId) {
      var postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling jobsJobIdPackagingsPost");
      }
      // verify the required parameter 'jobId' is set
      if (jobId === undefined || jobId === null) {
        throw new Error("Missing the required parameter 'jobId' when calling jobsJobIdPackagingsPost");
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
      var returnType = _Packaging.Packaging;
      return this.apiClient.callApi('/jobs/{job_id}/packagings', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Creates a new packaging for the specified job. Packagings can only be added or                           modified as long as the job is in a &#x60;draft&#x60; state. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: 
     * @param {<&vendorExtensions.x-jsdoc-type>} body 
     * @param {<&vendorExtensions.x-jsdoc-type>} jobId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Packaging}
     */
  }, {
    key: "jobsJobIdPackagingsPost",
    value: function jobsJobIdPackagingsPost(body, jobId) {
      return this.jobsJobIdPackagingsPostWithHttpInfo(body, jobId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Returns all parts of a specific job - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: &#x60;mission_control.jobs.r&#x60;
     * @param {String} jobId 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page The page of the current collection that shall be returned
     * @param {Number} opts.perPage The maximum number of items included in the response, ie., the page size (default to <.>)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/Part>} and HTTP response
     */
  }, {
    key: "jobsJobIdPartsGetWithHttpInfo",
    value: function jobsJobIdPartsGetWithHttpInfo(jobId, opts) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'jobId' is set
      if (jobId === undefined || jobId === null) {
        throw new Error("Missing the required parameter 'jobId' when calling jobsJobIdPartsGet");
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
      var returnType = [_Part.Part];
      return this.apiClient.callApi('/jobs/{job_id}/parts', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Returns all parts of a specific job - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: &#x60;mission_control.jobs.r&#x60;
     * @param {<&vendorExtensions.x-jsdoc-type>} jobId 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page The page of the current collection that shall be returned
     * @param {Number} opts.perPage The maximum number of items included in the response, ie., the page size (default to <.>)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/Part>}
     */
  }, {
    key: "jobsJobIdPartsGet",
    value: function jobsJobIdPartsGet(jobId, opts) {
      return this.jobsJobIdPartsGetWithHttpInfo(jobId, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Creates a new part for the specified job. Parts can only be added or modified                           as long as the job is in a &#x60;draft&#x60; state. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: 
     * @param {module:model/JobIdPartsBody} body 
     * @param {String} jobId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Part} and HTTP response
     */
  }, {
    key: "jobsJobIdPartsPostWithHttpInfo",
    value: function jobsJobIdPartsPostWithHttpInfo(body, jobId) {
      var postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling jobsJobIdPartsPost");
      }
      // verify the required parameter 'jobId' is set
      if (jobId === undefined || jobId === null) {
        throw new Error("Missing the required parameter 'jobId' when calling jobsJobIdPartsPost");
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
      var returnType = _Part.Part;
      return this.apiClient.callApi('/jobs/{job_id}/parts', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Creates a new part for the specified job. Parts can only be added or modified                           as long as the job is in a &#x60;draft&#x60; state. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: 
     * @param {<&vendorExtensions.x-jsdoc-type>} body 
     * @param {<&vendorExtensions.x-jsdoc-type>} jobId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Part}
     */
  }, {
    key: "jobsJobIdPartsPost",
    value: function jobsJobIdPartsPost(body, jobId) {
      return this.jobsJobIdPartsPostWithHttpInfo(body, jobId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Changes the attributes on a job. Please not that most attributes cannot be                         changed anymore, once the job is no longer a draft. If you try to change a                         frozen attribute, you will receive a 422 error. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: 
     * @param {module:model/JobsJobIdBody} body 
     * @param {String} jobId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Job} and HTTP response
     */
  }, {
    key: "jobsJobIdPatchWithHttpInfo",
    value: function jobsJobIdPatchWithHttpInfo(body, jobId) {
      var postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling jobsJobIdPatch");
      }
      // verify the required parameter 'jobId' is set
      if (jobId === undefined || jobId === null) {
        throw new Error("Missing the required parameter 'jobId' when calling jobsJobIdPatch");
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
      var returnType = _Job.Job;
      return this.apiClient.callApi('/jobs/{job_id}', 'PATCH', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Changes the attributes on a job. Please not that most attributes cannot be                         changed anymore, once the job is no longer a draft. If you try to change a                         frozen attribute, you will receive a 422 error. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: 
     * @param {<&vendorExtensions.x-jsdoc-type>} body 
     * @param {<&vendorExtensions.x-jsdoc-type>} jobId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Job}
     */
  }, {
    key: "jobsJobIdPatch",
    value: function jobsJobIdPatch(body, jobId) {
      return this.jobsJobIdPatchWithHttpInfo(body, jobId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Creates a new job. When creating jobs you may supply information for                         parts (including colors, finishings, desired substrate) as well. Please see the                         respective documentation for parameters. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: 
     * @param {module:model/JobsBody} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Job} and HTTP response
     */
  }, {
    key: "jobsPostWithHttpInfo",
    value: function jobsPostWithHttpInfo(body) {
      var postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling jobsPost");
      }
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _Job.Job;
      return this.apiClient.callApi('/jobs', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Creates a new job. When creating jobs you may supply information for                         parts (including colors, finishings, desired substrate) as well. Please see the                         respective documentation for parameters. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: 
     * @param {<&vendorExtensions.x-jsdoc-type>} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Job}
     */
  }, {
    key: "jobsPost",
    value: function jobsPost(body) {
      return this.jobsPostWithHttpInfo(body).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Removes a specific packaging, which also unassigns it from its job. Removing packagings                             is only possible while the attached job is still in a &#x60;draft&#x60; state. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: 
     * @param {String} packagingId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
  }, {
    key: "packagingsPackagingIdDeleteWithHttpInfo",
    value: function packagingsPackagingIdDeleteWithHttpInfo(packagingId) {
      var postBody = null;
      // verify the required parameter 'packagingId' is set
      if (packagingId === undefined || packagingId === null) {
        throw new Error("Missing the required parameter 'packagingId' when calling packagingsPackagingIdDelete");
      }
      var pathParams = {
        'packaging_id': packagingId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/packagings/{packaging_id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Removes a specific packaging, which also unassigns it from its job. Removing packagings                             is only possible while the attached job is still in a &#x60;draft&#x60; state. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: 
     * @param {<&vendorExtensions.x-jsdoc-type>} packagingId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
  }, {
    key: "packagingsPackagingIdDelete",
    value: function packagingsPackagingIdDelete(packagingId) {
      return this.packagingsPackagingIdDeleteWithHttpInfo(packagingId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Returns a specific packaging. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: &#x60;mission_control.jobs.r&#x60;
     * @param {String} packagingId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Packaging} and HTTP response
     */
  }, {
    key: "packagingsPackagingIdGetWithHttpInfo",
    value: function packagingsPackagingIdGetWithHttpInfo(packagingId) {
      var postBody = null;
      // verify the required parameter 'packagingId' is set
      if (packagingId === undefined || packagingId === null) {
        throw new Error("Missing the required parameter 'packagingId' when calling packagingsPackagingIdGet");
      }
      var pathParams = {
        'packaging_id': packagingId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _Packaging.Packaging;
      return this.apiClient.callApi('/packagings/{packaging_id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Returns a specific packaging. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: &#x60;mission_control.jobs.r&#x60;
     * @param {<&vendorExtensions.x-jsdoc-type>} packagingId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Packaging}
     */
  }, {
    key: "packagingsPackagingIdGet",
    value: function packagingsPackagingIdGet(packagingId) {
      return this.packagingsPackagingIdGetWithHttpInfo(packagingId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Modifies a specific packagings. Packagings can only be modified as long as their parent                           job is in a &#x60;draft&#x60; state. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: 
     * @param {module:model/PackagingsPackagingIdBody} body 
     * @param {String} packagingId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Packaging} and HTTP response
     */
  }, {
    key: "packagingsPackagingIdPatchWithHttpInfo",
    value: function packagingsPackagingIdPatchWithHttpInfo(body, packagingId) {
      var postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling packagingsPackagingIdPatch");
      }
      // verify the required parameter 'packagingId' is set
      if (packagingId === undefined || packagingId === null) {
        throw new Error("Missing the required parameter 'packagingId' when calling packagingsPackagingIdPatch");
      }
      var pathParams = {
        'packaging_id': packagingId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _Packaging.Packaging;
      return this.apiClient.callApi('/packagings/{packaging_id}', 'PATCH', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Modifies a specific packagings. Packagings can only be modified as long as their parent                           job is in a &#x60;draft&#x60; state. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: 
     * @param {<&vendorExtensions.x-jsdoc-type>} body 
     * @param {<&vendorExtensions.x-jsdoc-type>} packagingId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Packaging}
     */
  }, {
    key: "packagingsPackagingIdPatch",
    value: function packagingsPackagingIdPatch(body, packagingId) {
      return this.packagingsPackagingIdPatchWithHttpInfo(body, packagingId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Removes a specific color from a part, as long as the job is still a draft. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: &#x60;mission_control.jobs.w&#x60; or &#x60;mission_control.jobs.rw&#x60;
     * @param {String} partId 
     * @param {String} colorId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
  }, {
    key: "partsPartIdColorsColorIdDeleteWithHttpInfo",
    value: function partsPartIdColorsColorIdDeleteWithHttpInfo(partId, colorId) {
      var postBody = null;
      // verify the required parameter 'partId' is set
      if (partId === undefined || partId === null) {
        throw new Error("Missing the required parameter 'partId' when calling partsPartIdColorsColorIdDelete");
      }
      // verify the required parameter 'colorId' is set
      if (colorId === undefined || colorId === null) {
        throw new Error("Missing the required parameter 'colorId' when calling partsPartIdColorsColorIdDelete");
      }
      var pathParams = {
        'part_id': partId,
        'color_id': colorId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/parts/{part_id}/colors/{color_id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Removes a specific color from a part, as long as the job is still a draft. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: &#x60;mission_control.jobs.w&#x60; or &#x60;mission_control.jobs.rw&#x60;
     * @param {<&vendorExtensions.x-jsdoc-type>} partId 
     * @param {<&vendorExtensions.x-jsdoc-type>} colorId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
  }, {
    key: "partsPartIdColorsColorIdDelete",
    value: function partsPartIdColorsColorIdDelete(partId, colorId) {
      return this.partsPartIdColorsColorIdDeleteWithHttpInfo(partId, colorId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Returns a specific color from a part. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: &#x60;mission_control.jobs.r&#x60; or &#x60;mission_control.jobs.rw&#x60;
     * @param {String} partId 
     * @param {String} colorId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Color} and HTTP response
     */
  }, {
    key: "partsPartIdColorsColorIdGetWithHttpInfo",
    value: function partsPartIdColorsColorIdGetWithHttpInfo(partId, colorId) {
      var postBody = null;
      // verify the required parameter 'partId' is set
      if (partId === undefined || partId === null) {
        throw new Error("Missing the required parameter 'partId' when calling partsPartIdColorsColorIdGet");
      }
      // verify the required parameter 'colorId' is set
      if (colorId === undefined || colorId === null) {
        throw new Error("Missing the required parameter 'colorId' when calling partsPartIdColorsColorIdGet");
      }
      var pathParams = {
        'part_id': partId,
        'color_id': colorId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _Color.Color;
      return this.apiClient.callApi('/parts/{part_id}/colors/{color_id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Returns a specific color from a part. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: &#x60;mission_control.jobs.r&#x60; or &#x60;mission_control.jobs.rw&#x60;
     * @param {<&vendorExtensions.x-jsdoc-type>} partId 
     * @param {<&vendorExtensions.x-jsdoc-type>} colorId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Color}
     */
  }, {
    key: "partsPartIdColorsColorIdGet",
    value: function partsPartIdColorsColorIdGet(partId, colorId) {
      return this.partsPartIdColorsColorIdGetWithHttpInfo(partId, colorId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Changes attributes on a specific color from a part, as long as job is still a draft. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: &#x60;mission_control.jobs.w&#x60; or &#x60;mission_control.jobs.rw&#x60;
     * @param {module:model/ColorsColorIdBody} body 
     * @param {String} partId 
     * @param {String} colorId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Color} and HTTP response
     */
  }, {
    key: "partsPartIdColorsColorIdPatchWithHttpInfo",
    value: function partsPartIdColorsColorIdPatchWithHttpInfo(body, partId, colorId) {
      var postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling partsPartIdColorsColorIdPatch");
      }
      // verify the required parameter 'partId' is set
      if (partId === undefined || partId === null) {
        throw new Error("Missing the required parameter 'partId' when calling partsPartIdColorsColorIdPatch");
      }
      // verify the required parameter 'colorId' is set
      if (colorId === undefined || colorId === null) {
        throw new Error("Missing the required parameter 'colorId' when calling partsPartIdColorsColorIdPatch");
      }
      var pathParams = {
        'part_id': partId,
        'color_id': colorId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _Color.Color;
      return this.apiClient.callApi('/parts/{part_id}/colors/{color_id}', 'PATCH', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Changes attributes on a specific color from a part, as long as job is still a draft. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: &#x60;mission_control.jobs.w&#x60; or &#x60;mission_control.jobs.rw&#x60;
     * @param {<&vendorExtensions.x-jsdoc-type>} body 
     * @param {<&vendorExtensions.x-jsdoc-type>} partId 
     * @param {<&vendorExtensions.x-jsdoc-type>} colorId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Color}
     */
  }, {
    key: "partsPartIdColorsColorIdPatch",
    value: function partsPartIdColorsColorIdPatch(body, partId, colorId) {
      return this.partsPartIdColorsColorIdPatchWithHttpInfo(body, partId, colorId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Returns all colors from a job&#x27;s part. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: &#x60;mission_control.jobs.r&#x60; or &#x60;mission_control.jobs.rw&#x60;
     * @param {String} partId 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page The page of the current collection that shall be returned
     * @param {Number} opts.perPage The maximum number of items included in the response, ie., the page size (default to <.>)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/Color>} and HTTP response
     */
  }, {
    key: "partsPartIdColorsGetWithHttpInfo",
    value: function partsPartIdColorsGetWithHttpInfo(partId, opts) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'partId' is set
      if (partId === undefined || partId === null) {
        throw new Error("Missing the required parameter 'partId' when calling partsPartIdColorsGet");
      }
      var pathParams = {
        'part_id': partId
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
      var returnType = [_Color.Color];
      return this.apiClient.callApi('/parts/{part_id}/colors', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Returns all colors from a job&#x27;s part. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: &#x60;mission_control.jobs.r&#x60; or &#x60;mission_control.jobs.rw&#x60;
     * @param {<&vendorExtensions.x-jsdoc-type>} partId 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page The page of the current collection that shall be returned
     * @param {Number} opts.perPage The maximum number of items included in the response, ie., the page size (default to <.>)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/Color>}
     */
  }, {
    key: "partsPartIdColorsGet",
    value: function partsPartIdColorsGet(partId, opts) {
      return this.partsPartIdColorsGetWithHttpInfo(partId, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Creates a new color and attaches it to the selected part with the given parameters. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: &#x60;mission_control.jobs.w&#x60; or &#x60;mission_control.jobs.rw&#x60;
     * @param {module:model/PartIdColorsBody} body 
     * @param {String} partId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Color} and HTTP response
     */
  }, {
    key: "partsPartIdColorsPostWithHttpInfo",
    value: function partsPartIdColorsPostWithHttpInfo(body, partId) {
      var postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling partsPartIdColorsPost");
      }
      // verify the required parameter 'partId' is set
      if (partId === undefined || partId === null) {
        throw new Error("Missing the required parameter 'partId' when calling partsPartIdColorsPost");
      }
      var pathParams = {
        'part_id': partId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _Color.Color;
      return this.apiClient.callApi('/parts/{part_id}/colors', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Creates a new color and attaches it to the selected part with the given parameters. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: &#x60;mission_control.jobs.w&#x60; or &#x60;mission_control.jobs.rw&#x60;
     * @param {<&vendorExtensions.x-jsdoc-type>} body 
     * @param {<&vendorExtensions.x-jsdoc-type>} partId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Color}
     */
  }, {
    key: "partsPartIdColorsPost",
    value: function partsPartIdColorsPost(body, partId) {
      return this.partsPartIdColorsPostWithHttpInfo(body, partId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Removes a specific part, which also unassigns it from its job. Removing parts                            is only possible while the attached job is still in a &#x60;draft&#x60; state. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: 
     * @param {String} partId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
  }, {
    key: "partsPartIdDeleteWithHttpInfo",
    value: function partsPartIdDeleteWithHttpInfo(partId) {
      var postBody = null;
      // verify the required parameter 'partId' is set
      if (partId === undefined || partId === null) {
        throw new Error("Missing the required parameter 'partId' when calling partsPartIdDelete");
      }
      var pathParams = {
        'part_id': partId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/parts/{part_id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Removes a specific part, which also unassigns it from its job. Removing parts                            is only possible while the attached job is still in a &#x60;draft&#x60; state. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: 
     * @param {<&vendorExtensions.x-jsdoc-type>} partId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
  }, {
    key: "partsPartIdDelete",
    value: function partsPartIdDelete(partId) {
      return this.partsPartIdDeleteWithHttpInfo(partId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Removes the desired substrate information from a specific part as long as                             the job to which the part belongs is still a draft. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: &#x60;mission_control.jobs.w&#x60; or &#x60;mission_control.jobs.rw&#x60;
     * @param {String} partId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
  }, {
    key: "partsPartIdDesiredSubstrateDeleteWithHttpInfo",
    value: function partsPartIdDesiredSubstrateDeleteWithHttpInfo(partId) {
      var postBody = null;
      // verify the required parameter 'partId' is set
      if (partId === undefined || partId === null) {
        throw new Error("Missing the required parameter 'partId' when calling partsPartIdDesiredSubstrateDelete");
      }
      var pathParams = {
        'part_id': partId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/parts/{part_id}/desired_substrate', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Removes the desired substrate information from a specific part as long as                             the job to which the part belongs is still a draft. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: &#x60;mission_control.jobs.w&#x60; or &#x60;mission_control.jobs.rw&#x60;
     * @param {<&vendorExtensions.x-jsdoc-type>} partId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
  }, {
    key: "partsPartIdDesiredSubstrateDelete",
    value: function partsPartIdDesiredSubstrateDelete(partId) {
      return this.partsPartIdDesiredSubstrateDeleteWithHttpInfo(partId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Returns the desired substrate information. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: &#x60;mission_control.jobs.r&#x60; or &#x60;mission_control.jobs.rw&#x60;
     * @param {String} partId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/DesiredSubstrate} and HTTP response
     */
  }, {
    key: "partsPartIdDesiredSubstrateGetWithHttpInfo",
    value: function partsPartIdDesiredSubstrateGetWithHttpInfo(partId) {
      var postBody = null;
      // verify the required parameter 'partId' is set
      if (partId === undefined || partId === null) {
        throw new Error("Missing the required parameter 'partId' when calling partsPartIdDesiredSubstrateGet");
      }
      var pathParams = {
        'part_id': partId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _DesiredSubstrate.DesiredSubstrate;
      return this.apiClient.callApi('/parts/{part_id}/desired_substrate', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Returns the desired substrate information. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: &#x60;mission_control.jobs.r&#x60; or &#x60;mission_control.jobs.rw&#x60;
     * @param {<&vendorExtensions.x-jsdoc-type>} partId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/DesiredSubstrate}
     */
  }, {
    key: "partsPartIdDesiredSubstrateGet",
    value: function partsPartIdDesiredSubstrateGet(partId) {
      return this.partsPartIdDesiredSubstrateGetWithHttpInfo(partId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Modifies the desired substrate information from a specific part as long as                           the job to which the part belongs is still a draft. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: &#x60;mission_control.jobs.w&#x60; or &#x60;mission_control.jobs.rw&#x60;
     * @param {module:model/PartIdDesiredSubstrateBody1} body 
     * @param {String} partId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/DesiredSubstrate} and HTTP response
     */
  }, {
    key: "partsPartIdDesiredSubstratePatchWithHttpInfo",
    value: function partsPartIdDesiredSubstratePatchWithHttpInfo(body, partId) {
      var postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling partsPartIdDesiredSubstratePatch");
      }
      // verify the required parameter 'partId' is set
      if (partId === undefined || partId === null) {
        throw new Error("Missing the required parameter 'partId' when calling partsPartIdDesiredSubstratePatch");
      }
      var pathParams = {
        'part_id': partId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _DesiredSubstrate.DesiredSubstrate;
      return this.apiClient.callApi('/parts/{part_id}/desired_substrate', 'PATCH', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Modifies the desired substrate information from a specific part as long as                           the job to which the part belongs is still a draft. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: &#x60;mission_control.jobs.w&#x60; or &#x60;mission_control.jobs.rw&#x60;
     * @param {<&vendorExtensions.x-jsdoc-type>} body 
     * @param {<&vendorExtensions.x-jsdoc-type>} partId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/DesiredSubstrate}
     */
  }, {
    key: "partsPartIdDesiredSubstratePatch",
    value: function partsPartIdDesiredSubstratePatch(body, partId) {
      return this.partsPartIdDesiredSubstratePatchWithHttpInfo(body, partId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Creates new desired substrate information. If desired substrate information is                           already present, it will be overwritten. Creating desired substrate information                           is only possible as long as the job is in a &#x60;draft&#x60; state. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: &#x60;mission_control.jobs.w&#x60; or &#x60;mission_control.jobs.rw&#x60;
     * @param {module:model/PartIdDesiredSubstrateBody} body 
     * @param {String} partId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/DesiredSubstrate} and HTTP response
     */
  }, {
    key: "partsPartIdDesiredSubstratePostWithHttpInfo",
    value: function partsPartIdDesiredSubstratePostWithHttpInfo(body, partId) {
      var postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling partsPartIdDesiredSubstratePost");
      }
      // verify the required parameter 'partId' is set
      if (partId === undefined || partId === null) {
        throw new Error("Missing the required parameter 'partId' when calling partsPartIdDesiredSubstratePost");
      }
      var pathParams = {
        'part_id': partId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _DesiredSubstrate.DesiredSubstrate;
      return this.apiClient.callApi('/parts/{part_id}/desired_substrate', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Creates new desired substrate information. If desired substrate information is                           already present, it will be overwritten. Creating desired substrate information                           is only possible as long as the job is in a &#x60;draft&#x60; state. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: &#x60;mission_control.jobs.w&#x60; or &#x60;mission_control.jobs.rw&#x60;
     * @param {<&vendorExtensions.x-jsdoc-type>} body 
     * @param {<&vendorExtensions.x-jsdoc-type>} partId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/DesiredSubstrate}
     */
  }, {
    key: "partsPartIdDesiredSubstratePost",
    value: function partsPartIdDesiredSubstratePost(body, partId) {
      return this.partsPartIdDesiredSubstratePostWithHttpInfo(body, partId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Returns all file references of a specific part. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: &#x60;mission_control.jobs.r&#x60;
     * @param {String} partId 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page The page of the current collection that shall be returned
     * @param {Number} opts.perPage The maximum number of items included in the response, ie., the page size (default to <.>)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/FileReference>} and HTTP response
     */
  }, {
    key: "partsPartIdFileReferencesGetWithHttpInfo",
    value: function partsPartIdFileReferencesGetWithHttpInfo(partId, opts) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'partId' is set
      if (partId === undefined || partId === null) {
        throw new Error("Missing the required parameter 'partId' when calling partsPartIdFileReferencesGet");
      }
      var pathParams = {
        'part_id': partId
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
      var returnType = [_FileReference.FileReference];
      return this.apiClient.callApi('/parts/{part_id}/file_references', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Returns all file references of a specific part. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: &#x60;mission_control.jobs.r&#x60;
     * @param {<&vendorExtensions.x-jsdoc-type>} partId 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page The page of the current collection that shall be returned
     * @param {Number} opts.perPage The maximum number of items included in the response, ie., the page size (default to <.>)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/FileReference>}
     */
  }, {
    key: "partsPartIdFileReferencesGet",
    value: function partsPartIdFileReferencesGet(partId, opts) {
      return this.partsPartIdFileReferencesGetWithHttpInfo(partId, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Creates a new file reference for a specific part. File referenes can only be added or                           modified as long as the job has not been &#x60;completed&#x60; or &#x60;canceled&#x60;. This means,                           that file references can be modified for production jobs. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: 
     * @param {module:model/PartIdFileReferencesBody} body 
     * @param {String} partId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/FileReference} and HTTP response
     */
  }, {
    key: "partsPartIdFileReferencesPostWithHttpInfo",
    value: function partsPartIdFileReferencesPostWithHttpInfo(body, partId) {
      var postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling partsPartIdFileReferencesPost");
      }
      // verify the required parameter 'partId' is set
      if (partId === undefined || partId === null) {
        throw new Error("Missing the required parameter 'partId' when calling partsPartIdFileReferencesPost");
      }
      var pathParams = {
        'part_id': partId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _FileReference.FileReference;
      return this.apiClient.callApi('/parts/{part_id}/file_references', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Creates a new file reference for a specific part. File referenes can only be added or                           modified as long as the job has not been &#x60;completed&#x60; or &#x60;canceled&#x60;. This means,                           that file references can be modified for production jobs. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: 
     * @param {<&vendorExtensions.x-jsdoc-type>} body 
     * @param {<&vendorExtensions.x-jsdoc-type>} partId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/FileReference}
     */
  }, {
    key: "partsPartIdFileReferencesPost",
    value: function partsPartIdFileReferencesPost(body, partId) {
      return this.partsPartIdFileReferencesPostWithHttpInfo(body, partId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Returns all finishings of a specific part. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: &#x60;mission_control.jobs.r&#x60;
     * @param {String} partId 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page The page of the current collection that shall be returned
     * @param {Number} opts.perPage The maximum number of items included in the response, ie., the page size (default to <.>)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/Finishing>} and HTTP response
     */
  }, {
    key: "partsPartIdFinishingsGetWithHttpInfo",
    value: function partsPartIdFinishingsGetWithHttpInfo(partId, opts) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'partId' is set
      if (partId === undefined || partId === null) {
        throw new Error("Missing the required parameter 'partId' when calling partsPartIdFinishingsGet");
      }
      var pathParams = {
        'part_id': partId
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
      var returnType = [_Finishing.Finishing];
      return this.apiClient.callApi('/parts/{part_id}/finishings', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Returns all finishings of a specific part. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: &#x60;mission_control.jobs.r&#x60;
     * @param {<&vendorExtensions.x-jsdoc-type>} partId 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page The page of the current collection that shall be returned
     * @param {Number} opts.perPage The maximum number of items included in the response, ie., the page size (default to <.>)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/Finishing>}
     */
  }, {
    key: "partsPartIdFinishingsGet",
    value: function partsPartIdFinishingsGet(partId, opts) {
      return this.partsPartIdFinishingsGetWithHttpInfo(partId, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Creates a new finishing for a specific part. Finishings can only be                           added or modified as long as the job they belong to is in a &#x60;draft&#x60; state. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: 
     * @param {module:model/PartIdFinishingsBody} body 
     * @param {String} partId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Finishing} and HTTP response
     */
  }, {
    key: "partsPartIdFinishingsPostWithHttpInfo",
    value: function partsPartIdFinishingsPostWithHttpInfo(body, partId) {
      var postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling partsPartIdFinishingsPost");
      }
      // verify the required parameter 'partId' is set
      if (partId === undefined || partId === null) {
        throw new Error("Missing the required parameter 'partId' when calling partsPartIdFinishingsPost");
      }
      var pathParams = {
        'part_id': partId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _Finishing.Finishing;
      return this.apiClient.callApi('/parts/{part_id}/finishings', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Creates a new finishing for a specific part. Finishings can only be                           added or modified as long as the job they belong to is in a &#x60;draft&#x60; state. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: 
     * @param {<&vendorExtensions.x-jsdoc-type>} body 
     * @param {<&vendorExtensions.x-jsdoc-type>} partId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Finishing}
     */
  }, {
    key: "partsPartIdFinishingsPost",
    value: function partsPartIdFinishingsPost(body, partId) {
      return this.partsPartIdFinishingsPostWithHttpInfo(body, partId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Returns a specific part, including its entire defintion with colors, finishings, finishing applications and desired substrate information. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: &#x60;mission_control.jobs.r&#x60;
     * @param {String} partId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ExtendedPart} and HTTP response
     */
  }, {
    key: "partsPartIdGetWithHttpInfo",
    value: function partsPartIdGetWithHttpInfo(partId) {
      var postBody = null;
      // verify the required parameter 'partId' is set
      if (partId === undefined || partId === null) {
        throw new Error("Missing the required parameter 'partId' when calling partsPartIdGet");
      }
      var pathParams = {
        'part_id': partId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ExtendedPart.ExtendedPart;
      return this.apiClient.callApi('/parts/{part_id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Returns a specific part, including its entire defintion with colors, finishings, finishing applications and desired substrate information. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: &#x60;mission_control.jobs.r&#x60;
     * @param {<&vendorExtensions.x-jsdoc-type>} partId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ExtendedPart}
     */
  }, {
    key: "partsPartIdGet",
    value: function partsPartIdGet(partId) {
      return this.partsPartIdGetWithHttpInfo(partId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Modifies a specific part. Parts can only be modified as long as their parent job                           is in a &#x60;draft&#x60; state. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: 
     * @param {module:model/PartsPartIdBody} body 
     * @param {String} partId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Part} and HTTP response
     */
  }, {
    key: "partsPartIdPatchWithHttpInfo",
    value: function partsPartIdPatchWithHttpInfo(body, partId) {
      var postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling partsPartIdPatch");
      }
      // verify the required parameter 'partId' is set
      if (partId === undefined || partId === null) {
        throw new Error("Missing the required parameter 'partId' when calling partsPartIdPatch");
      }
      var pathParams = {
        'part_id': partId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearerAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _Part.Part;
      return this.apiClient.callApi('/parts/{part_id}', 'PATCH', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Modifies a specific part. Parts can only be modified as long as their parent job                           is in a &#x60;draft&#x60; state. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: 
     * @param {<&vendorExtensions.x-jsdoc-type>} body 
     * @param {<&vendorExtensions.x-jsdoc-type>} partId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Part}
     */
  }, {
    key: "partsPartIdPatch",
    value: function partsPartIdPatch(body, partId) {
      return this.partsPartIdPatchWithHttpInfo(body, partId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);
  return SpecificationApi;
}();
exports.SpecificationApi = SpecificationApi;