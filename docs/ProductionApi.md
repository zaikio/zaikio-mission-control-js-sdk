# MissionControl.ProductionApi

All URIs are relative to *https://mc.zaikio.com/api/v1/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**batchesBatchIdDelete**](ProductionApi.md#batchesBatchIdDelete) | **DELETE** /batches/{batch_id} | 
[**batchesBatchIdGet**](ProductionApi.md#batchesBatchIdGet) | **GET** /batches/{batch_id} | 
[**batchesBatchIdPatch**](ProductionApi.md#batchesBatchIdPatch) | **PATCH** /batches/{batch_id} | 
[**batchesGet**](ProductionApi.md#batchesGet) | **GET** /batches | 
[**batchesPost**](ProductionApi.md#batchesPost) | **POST** /batches | 
[**imposingsImposingIdDelete**](ProductionApi.md#imposingsImposingIdDelete) | **DELETE** /imposings/{imposing_id} | 
[**imposingsImposingIdGet**](ProductionApi.md#imposingsImposingIdGet) | **GET** /imposings/{imposing_id} | 
[**imposingsImposingIdPatch**](ProductionApi.md#imposingsImposingIdPatch) | **PATCH** /imposings/{imposing_id} | 
[**imposingsImposingIdSignaturesGet**](ProductionApi.md#imposingsImposingIdSignaturesGet) | **GET** /imposings/{imposing_id}/signatures | 
[**imposingsImposingIdSignaturesPost**](ProductionApi.md#imposingsImposingIdSignaturesPost) | **POST** /imposings/{imposing_id}/signatures | 
[**intermediateProductsIntermediateProductIdDelete**](ProductionApi.md#intermediateProductsIntermediateProductIdDelete) | **DELETE** /intermediate_products/{intermediate_product_id} | 
[**intermediateProductsIntermediateProductIdGet**](ProductionApi.md#intermediateProductsIntermediateProductIdGet) | **GET** /intermediate_products/{intermediate_product_id} | 
[**intermediateProductsIntermediateProductIdPatch**](ProductionApi.md#intermediateProductsIntermediateProductIdPatch) | **PATCH** /intermediate_products/{intermediate_product_id} | 
[**jobsJobIdIntermediateProductsGet**](ProductionApi.md#jobsJobIdIntermediateProductsGet) | **GET** /jobs/{job_id}/intermediate_products | 
[**jobsJobIdIntermediateProductsPost**](ProductionApi.md#jobsJobIdIntermediateProductsPost) | **POST** /jobs/{job_id}/intermediate_products | 
[**jobsJobIdProductionStrategiesGet**](ProductionApi.md#jobsJobIdProductionStrategiesGet) | **GET** /jobs/{job_id}/production_strategies | 
[**jobsJobIdProductionStrategiesPost**](ProductionApi.md#jobsJobIdProductionStrategiesPost) | **POST** /jobs/{job_id}/production_strategies | 
[**jobsJobIdTodosGet**](ProductionApi.md#jobsJobIdTodosGet) | **GET** /jobs/{job_id}/todos | 
[**jobsJobIdTodosPost**](ProductionApi.md#jobsJobIdTodosPost) | **POST** /jobs/{job_id}/todos | 
[**productionPathsPost**](ProductionApi.md#productionPathsPost) | **POST** /production_paths | 
[**productionStrategiesProductionStrategyIdDelete**](ProductionApi.md#productionStrategiesProductionStrategyIdDelete) | **DELETE** /production_strategies/{production_strategy_id} | 
[**productionStrategiesProductionStrategyIdGet**](ProductionApi.md#productionStrategiesProductionStrategyIdGet) | **GET** /production_strategies/{production_strategy_id} | 
[**productionStrategiesProductionStrategyIdImposingsGet**](ProductionApi.md#productionStrategiesProductionStrategyIdImposingsGet) | **GET** /production_strategies/{production_strategy_id}/imposings | 
[**productionStrategiesProductionStrategyIdImposingsPost**](ProductionApi.md#productionStrategiesProductionStrategyIdImposingsPost) | **POST** /production_strategies/{production_strategy_id}/imposings | 
[**productionStrategiesProductionStrategyIdPatch**](ProductionApi.md#productionStrategiesProductionStrategyIdPatch) | **PATCH** /production_strategies/{production_strategy_id} | 
[**signaturesSignatureIdDelete**](ProductionApi.md#signaturesSignatureIdDelete) | **DELETE** /signatures/{signature_id} | 
[**signaturesSignatureIdGet**](ProductionApi.md#signaturesSignatureIdGet) | **GET** /signatures/{signature_id} | 
[**signaturesSignatureIdPatch**](ProductionApi.md#signaturesSignatureIdPatch) | **PATCH** /signatures/{signature_id} | 
[**todosTodoIdDelete**](ProductionApi.md#todosTodoIdDelete) | **DELETE** /todos/{todo_id} | 
[**todosTodoIdGet**](ProductionApi.md#todosTodoIdGet) | **GET** /todos/{todo_id} | 
[**todosTodoIdPatch**](ProductionApi.md#todosTodoIdPatch) | **PATCH** /todos/{todo_id} | 
[**workstepGroupsGet**](ProductionApi.md#workstepGroupsGet) | **GET** /workstep_groups | 
[**workstepGroupsPost**](ProductionApi.md#workstepGroupsPost) | **POST** /workstep_groups | 
[**workstepGroupsWorkstepGroupIdDelete**](ProductionApi.md#workstepGroupsWorkstepGroupIdDelete) | **DELETE** /workstep_groups/{workstep_group_id} | 
[**workstepGroupsWorkstepGroupIdGet**](ProductionApi.md#workstepGroupsWorkstepGroupIdGet) | **GET** /workstep_groups/{workstep_group_id} | 
[**workstepGroupsWorkstepGroupIdPatch**](ProductionApi.md#workstepGroupsWorkstepGroupIdPatch) | **PATCH** /workstep_groups/{workstep_group_id} | 
[**workstepsGet**](ProductionApi.md#workstepsGet) | **GET** /worksteps | 
[**workstepsPost**](ProductionApi.md#workstepsPost) | **POST** /worksteps | 
[**workstepsWorkstepIdDelete**](ProductionApi.md#workstepsWorkstepIdDelete) | **DELETE** /worksteps/{workstep_id} | 
[**workstepsWorkstepIdGet**](ProductionApi.md#workstepsWorkstepIdGet) | **GET** /worksteps/{workstep_id} | 
[**workstepsWorkstepIdPatch**](ProductionApi.md#workstepsWorkstepIdPatch) | **PATCH** /worksteps/{workstep_id} | 

<a name="batchesBatchIdDelete"></a>
# **batchesBatchIdDelete**
> batchesBatchIdDelete(batchId)



Remove a Batch. This will remove all associated linked Production resources too - needed bearer: &#x60;Organization&#x60; - needed scopes: &#x60;mission_control.production.w&#x60; or &#x60;mission_control.production.rw&#x60;

### Example
```javascript
import {MissionControl} from 'mission_control';
let defaultClient = MissionControl.ApiClient.instance;


let apiInstance = new MissionControl.ProductionApi();
let batchId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 

apiInstance.batchesBatchIdDelete(batchId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **batchId** | [**String**](.md)|  | 

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="batchesBatchIdGet"></a>
# **batchesBatchIdGet**
> Batch batchesBatchIdGet(batchId)



Return in depth information about a single Batch - needed bearer: &#x60;Organization&#x60; - needed scopes: &#x60;mission_control.production.r&#x60; or &#x60;mission_control.production.rw&#x60;

### Example
```javascript
import {MissionControl} from 'mission_control';
let defaultClient = MissionControl.ApiClient.instance;


let apiInstance = new MissionControl.ProductionApi();
let batchId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 

apiInstance.batchesBatchIdGet(batchId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **batchId** | [**String**](.md)|  | 

### Return type

[**Batch**](Batch.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="batchesBatchIdPatch"></a>
# **batchesBatchIdPatch**
> Batch batchesBatchIdPatch(body, batchId)



Update the details of a Batch - needed bearer: &#x60;Organization&#x60; - needed scopes: &#x60;mission_control.production.w&#x60; or &#x60;mission_control.production.rw&#x60;

### Example
```javascript
import {MissionControl} from 'mission_control';
let defaultClient = MissionControl.ApiClient.instance;


let apiInstance = new MissionControl.ProductionApi();
let body = new MissionControl.BatchesBatchIdBody(); // BatchesBatchIdBody | 
let batchId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 

apiInstance.batchesBatchIdPatch(body, batchId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**BatchesBatchIdBody**](BatchesBatchIdBody.md)|  | 
 **batchId** | [**String**](.md)|  | 

### Return type

[**Batch**](Batch.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="batchesGet"></a>
# **batchesGet**
> [Batch] batchesGet(opts)



Return all Batches for the current caller - needed bearer: &#x60;Organization&#x60; - needed scopes: &#x60;mission_control.production.r&#x60; or &#x60;mission_control.production.rw&#x60;

### Example
```javascript
import {MissionControl} from 'mission_control';
let defaultClient = MissionControl.ApiClient.instance;


let apiInstance = new MissionControl.ProductionApi();
let opts = { 
  'page': 56, // Number | The page of the current collection that shall be returned
  'perPage': 100 // Number | The maximum number of items included in the response, ie., the page size
};
apiInstance.batchesGet(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Number**| The page of the current collection that shall be returned | [optional] 
 **perPage** | **Number**| The maximum number of items included in the response, ie., the page size | [optional] [default to 100]

### Return type

[**[Batch]**](Batch.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="batchesPost"></a>
# **batchesPost**
> Batch batchesPost(body)



Create a new Batch for producing multiple Parts together - needed bearer: &#x60;Organization&#x60; - needed scopes: &#x60;mission_control.production.w&#x60; or &#x60;mission_control.production.rw&#x60;

### Example
```javascript
import {MissionControl} from 'mission_control';
let defaultClient = MissionControl.ApiClient.instance;


let apiInstance = new MissionControl.ProductionApi();
let body = new MissionControl.BatchesBody(); // BatchesBody | 

apiInstance.batchesPost(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**BatchesBody**](BatchesBody.md)|  | 

### Return type

[**Batch**](Batch.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="imposingsImposingIdDelete"></a>
# **imposingsImposingIdDelete**
> imposingsImposingIdDelete(imposingId)



Remove an Imposing from the ProductionStrategy - needed bearer: &#x60;Organization&#x60; - needed scopes: &#x60;mission_control.jobs.w&#x60; or &#x60;mission_control.jobs.rw&#x60;

### Example
```javascript
import {MissionControl} from 'mission_control';
let defaultClient = MissionControl.ApiClient.instance;


let apiInstance = new MissionControl.ProductionApi();
let imposingId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 

apiInstance.imposingsImposingIdDelete(imposingId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **imposingId** | [**String**](.md)|  | 

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="imposingsImposingIdGet"></a>
# **imposingsImposingIdGet**
> Imposing imposingsImposingIdGet(imposingId)



Show the full details of a given Imposing including all Signatures - needed bearer: &#x60;Organization&#x60; - needed scopes: &#x60;mission_control.jobs.r&#x60; or &#x60;mission_control.jobs.rw&#x60;

### Example
```javascript
import {MissionControl} from 'mission_control';
let defaultClient = MissionControl.ApiClient.instance;


let apiInstance = new MissionControl.ProductionApi();
let imposingId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 

apiInstance.imposingsImposingIdGet(imposingId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **imposingId** | [**String**](.md)|  | 

### Return type

[**Imposing**](Imposing.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="imposingsImposingIdPatch"></a>
# **imposingsImposingIdPatch**
> Imposing imposingsImposingIdPatch(body, imposingId)



Update an Imposing - needed bearer: &#x60;Organization&#x60; - needed scopes: &#x60;mission_control.jobs.w&#x60; or &#x60;mission_control.jobs.rw&#x60;

### Example
```javascript
import {MissionControl} from 'mission_control';
let defaultClient = MissionControl.ApiClient.instance;


let apiInstance = new MissionControl.ProductionApi();
let body = new MissionControl.ImposingsImposingIdBody(); // ImposingsImposingIdBody | 
let imposingId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 

apiInstance.imposingsImposingIdPatch(body, imposingId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ImposingsImposingIdBody**](ImposingsImposingIdBody.md)|  | 
 **imposingId** | [**String**](.md)|  | 

### Return type

[**Imposing**](Imposing.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="imposingsImposingIdSignaturesGet"></a>
# **imposingsImposingIdSignaturesGet**
> [Signature] imposingsImposingIdSignaturesGet(imposingId)



List Signatures for provided Imposings - needed bearer: &#x60;Organization&#x60; - needed scopes: &#x60;mission_control.jobs.r&#x60; or &#x60;mission_control.jobs.rw&#x60;

### Example
```javascript
import {MissionControl} from 'mission_control';
let defaultClient = MissionControl.ApiClient.instance;


let apiInstance = new MissionControl.ProductionApi();
let imposingId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 

apiInstance.imposingsImposingIdSignaturesGet(imposingId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **imposingId** | [**String**](.md)|  | 

### Return type

[**[Signature]**](Signature.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="imposingsImposingIdSignaturesPost"></a>
# **imposingsImposingIdSignaturesPost**
> Signature imposingsImposingIdSignaturesPost(body, imposingId)



Create a new Signature for the provided Imposing - needed bearer: &#x60;Organization&#x60; - needed scopes: &#x60;mission_control.jobs.w&#x60; or &#x60;mission_control.jobs.rw&#x60;

### Example
```javascript
import {MissionControl} from 'mission_control';
let defaultClient = MissionControl.ApiClient.instance;


let apiInstance = new MissionControl.ProductionApi();
let body = new MissionControl.ImposingIdSignaturesBody(); // ImposingIdSignaturesBody | 
let imposingId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 

apiInstance.imposingsImposingIdSignaturesPost(body, imposingId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ImposingIdSignaturesBody**](ImposingIdSignaturesBody.md)|  | 
 **imposingId** | [**String**](.md)|  | 

### Return type

[**Signature**](Signature.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="intermediateProductsIntermediateProductIdDelete"></a>
# **intermediateProductsIntermediateProductIdDelete**
> intermediateProductsIntermediateProductIdDelete(intermediateProductId)



Remove an IntermediateProduct - needed bearer: &#x60;Organization&#x60; - needed scopes: &#x60;mission_control.jobs.w&#x60; or &#x60;mission_control.jobs.rw&#x60;

### Example
```javascript
import {MissionControl} from 'mission_control';
let defaultClient = MissionControl.ApiClient.instance;


let apiInstance = new MissionControl.ProductionApi();
let intermediateProductId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 

apiInstance.intermediateProductsIntermediateProductIdDelete(intermediateProductId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **intermediateProductId** | [**String**](.md)|  | 

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="intermediateProductsIntermediateProductIdGet"></a>
# **intermediateProductsIntermediateProductIdGet**
> IntermediateProduct intermediateProductsIntermediateProductIdGet(intermediateProductId)



Show the full details of an IntermediateProduct - needed bearer: &#x60;Organization&#x60; - needed scopes: &#x60;mission_control.jobs.r&#x60; or &#x60;mission_control.jobs.rw&#x60;

### Example
```javascript
import {MissionControl} from 'mission_control';
let defaultClient = MissionControl.ApiClient.instance;


let apiInstance = new MissionControl.ProductionApi();
let intermediateProductId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 

apiInstance.intermediateProductsIntermediateProductIdGet(intermediateProductId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **intermediateProductId** | [**String**](.md)|  | 

### Return type

[**IntermediateProduct**](IntermediateProduct.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="intermediateProductsIntermediateProductIdPatch"></a>
# **intermediateProductsIntermediateProductIdPatch**
> IntermediateProduct intermediateProductsIntermediateProductIdPatch(body, intermediateProductId)



Update an IntermediateProduct with the provided params - needed bearer: &#x60;Organization&#x60; - needed scopes: &#x60;mission_control.jobs.w&#x60; or &#x60;mission_control.jobs.rw&#x60;

### Example
```javascript
import {MissionControl} from 'mission_control';
let defaultClient = MissionControl.ApiClient.instance;


let apiInstance = new MissionControl.ProductionApi();
let body = new MissionControl.IntermediateProductsIntermediateProductIdBody(); // IntermediateProductsIntermediateProductIdBody | 
let intermediateProductId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 

apiInstance.intermediateProductsIntermediateProductIdPatch(body, intermediateProductId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**IntermediateProductsIntermediateProductIdBody**](IntermediateProductsIntermediateProductIdBody.md)|  | 
 **intermediateProductId** | [**String**](.md)|  | 

### Return type

[**IntermediateProduct**](IntermediateProduct.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="jobsJobIdIntermediateProductsGet"></a>
# **jobsJobIdIntermediateProductsGet**
> [IntermediateProduct] jobsJobIdIntermediateProductsGet(jobId, opts)



List all available IntermediateProducts for a given Job - needed bearer: &#x60;Organization&#x60; - needed scopes: &#x60;mission_control.jobs.r&#x60; or &#x60;mission_control.jobs.rw&#x60;

### Example
```javascript
import {MissionControl} from 'mission_control';
let defaultClient = MissionControl.ApiClient.instance;


let apiInstance = new MissionControl.ProductionApi();
let jobId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 
let opts = { 
  'page': 56, // Number | The page of the current collection that shall be returned
  'perPage': 100 // Number | The maximum number of items included in the response, ie., the page size
};
apiInstance.jobsJobIdIntermediateProductsGet(jobId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **jobId** | [**String**](.md)|  | 
 **page** | **Number**| The page of the current collection that shall be returned | [optional] 
 **perPage** | **Number**| The maximum number of items included in the response, ie., the page size | [optional] [default to 100]

### Return type

[**[IntermediateProduct]**](IntermediateProduct.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="jobsJobIdIntermediateProductsPost"></a>
# **jobsJobIdIntermediateProductsPost**
> IntermediateProduct jobsJobIdIntermediateProductsPost(body, jobId)



Create a new IntermediateProduct for a Job - needed bearer: &#x60;Organization&#x60; - needed scopes: &#x60;mission_control.jobs.w&#x60; or &#x60;mission_control.jobs.rw&#x60;

### Example
```javascript
import {MissionControl} from 'mission_control';
let defaultClient = MissionControl.ApiClient.instance;


let apiInstance = new MissionControl.ProductionApi();
let body = new MissionControl.JobIdIntermediateProductsBody(); // JobIdIntermediateProductsBody | 
let jobId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 

apiInstance.jobsJobIdIntermediateProductsPost(body, jobId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**JobIdIntermediateProductsBody**](JobIdIntermediateProductsBody.md)|  | 
 **jobId** | [**String**](.md)|  | 

### Return type

[**IntermediateProduct**](IntermediateProduct.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="jobsJobIdProductionStrategiesGet"></a>
# **jobsJobIdProductionStrategiesGet**
> [ProductionStrategy] jobsJobIdProductionStrategiesGet(jobId)



List ProductionStrategies for the provided job - needed bearer: &#x60;Organization&#x60; - needed scopes: &#x60;mission_control.jobs.r&#x60; or &#x60;mission_control.jobs.rw&#x60;

### Example
```javascript
import {MissionControl} from 'mission_control';
let defaultClient = MissionControl.ApiClient.instance;


let apiInstance = new MissionControl.ProductionApi();
let jobId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 

apiInstance.jobsJobIdProductionStrategiesGet(jobId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **jobId** | [**String**](.md)|  | 

### Return type

[**[ProductionStrategy]**](ProductionStrategy.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="jobsJobIdProductionStrategiesPost"></a>
# **jobsJobIdProductionStrategiesPost**
> InlineResponse2011 jobsJobIdProductionStrategiesPost(body, jobId)



Create a new ProductionStrategy for the provided job - needed bearer: &#x60;Organization&#x60; - needed scopes: &#x60;mission_control.jobs.w&#x60; or &#x60;mission_control.jobs.rw&#x60;

### Example
```javascript
import {MissionControl} from 'mission_control';
let defaultClient = MissionControl.ApiClient.instance;


let apiInstance = new MissionControl.ProductionApi();
let body = new MissionControl.JobIdProductionStrategiesBody(); // JobIdProductionStrategiesBody | 
let jobId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 

apiInstance.jobsJobIdProductionStrategiesPost(body, jobId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**JobIdProductionStrategiesBody**](JobIdProductionStrategiesBody.md)|  | 
 **jobId** | [**String**](.md)|  | 

### Return type

[**InlineResponse2011**](InlineResponse2011.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="jobsJobIdTodosGet"></a>
# **jobsJobIdTodosGet**
> [Todo] jobsJobIdTodosGet(jobId, opts)



List all todos for this Job - needed bearer: &#x60;Organization&#x60; - needed scopes: &#x60;mission_control.jobs.r&#x60; or &#x60;mission_control.jobs.rw&#x60;

### Example
```javascript
import {MissionControl} from 'mission_control';
let defaultClient = MissionControl.ApiClient.instance;


let apiInstance = new MissionControl.ProductionApi();
let jobId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 
let opts = { 
  'page': 56, // Number | The page of the current collection that shall be returned
  'perPage': 100 // Number | The maximum number of items included in the response, ie., the page size
};
apiInstance.jobsJobIdTodosGet(jobId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **jobId** | [**String**](.md)|  | 
 **page** | **Number**| The page of the current collection that shall be returned | [optional] 
 **perPage** | **Number**| The maximum number of items included in the response, ie., the page size | [optional] [default to 100]

### Return type

[**[Todo]**](Todo.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="jobsJobIdTodosPost"></a>
# **jobsJobIdTodosPost**
> Todo jobsJobIdTodosPost(body, jobId)



Create a new todo for this Job - needed bearer: &#x60;Organization&#x60; - needed scopes: &#x60;mission_control.jobs.w&#x60; or &#x60;mission_control.jobs.rw&#x60;

### Example
```javascript
import {MissionControl} from 'mission_control';
let defaultClient = MissionControl.ApiClient.instance;


let apiInstance = new MissionControl.ProductionApi();
let body = new MissionControl.JobIdTodosBody(); // JobIdTodosBody | 
let jobId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 

apiInstance.jobsJobIdTodosPost(body, jobId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**JobIdTodosBody**](JobIdTodosBody.md)|  | 
 **jobId** | [**String**](.md)|  | 

### Return type

[**Todo**](Todo.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="productionPathsPost"></a>
# **productionPathsPost**
> InlineResponse201 productionPathsPost(body)



Creates a full production pathway with all linkages - needed bearer: &#x60;Organization&#x60; - needed scopes: &#x60;mission_control.jobs.w&#x60; or &#x60;mission_control.jobs.rw&#x60;

### Example
```javascript
import {MissionControl} from 'mission_control';
let defaultClient = MissionControl.ApiClient.instance;


let apiInstance = new MissionControl.ProductionApi();
let body = new MissionControl.ProductionPathsBody(); // ProductionPathsBody | 

apiInstance.productionPathsPost(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ProductionPathsBody**](ProductionPathsBody.md)|  | 

### Return type

[**InlineResponse201**](InlineResponse201.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="productionStrategiesProductionStrategyIdDelete"></a>
# **productionStrategiesProductionStrategyIdDelete**
> productionStrategiesProductionStrategyIdDelete(productionStrategyId, opts)



 - needed bearer: &#x60;Organization&#x60; - needed scopes: &#x60;mission_control.jobs.w&#x60; or &#x60;mission_control.jobs.rw&#x60;

### Example
```javascript
import {MissionControl} from 'mission_control';
let defaultClient = MissionControl.ApiClient.instance;


let apiInstance = new MissionControl.ProductionApi();
let productionStrategyId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 
let opts = { 
  'clone': true // Boolean | Create a clone of this strategy when cancelling the existing one.
};
apiInstance.productionStrategiesProductionStrategyIdDelete(productionStrategyId, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productionStrategyId** | [**String**](.md)|  | 
 **clone** | **Boolean**| Create a clone of this strategy when cancelling the existing one. | [optional] 

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="productionStrategiesProductionStrategyIdGet"></a>
# **productionStrategiesProductionStrategyIdGet**
> InlineResponse2011 productionStrategiesProductionStrategyIdGet(productionStrategyId)



Show the ProductionStrategy for the provided job, if set - needed bearer: &#x60;Organization&#x60; - needed scopes: &#x60;mission_control.jobs.r&#x60; or &#x60;mission_control.jobs.rw&#x60;

### Example
```javascript
import {MissionControl} from 'mission_control';
let defaultClient = MissionControl.ApiClient.instance;


let apiInstance = new MissionControl.ProductionApi();
let productionStrategyId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 

apiInstance.productionStrategiesProductionStrategyIdGet(productionStrategyId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productionStrategyId** | [**String**](.md)|  | 

### Return type

[**InlineResponse2011**](InlineResponse2011.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="productionStrategiesProductionStrategyIdImposingsGet"></a>
# **productionStrategiesProductionStrategyIdImposingsGet**
> [Imposing] productionStrategiesProductionStrategyIdImposingsGet(productionStrategyId)



List Imposings for provided ProductionStrategy - needed bearer: &#x60;Organization&#x60; - needed scopes: &#x60;mission_control.jobs.r&#x60; or &#x60;mission_control.jobs.rw&#x60;

### Example
```javascript
import {MissionControl} from 'mission_control';
let defaultClient = MissionControl.ApiClient.instance;


let apiInstance = new MissionControl.ProductionApi();
let productionStrategyId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 

apiInstance.productionStrategiesProductionStrategyIdImposingsGet(productionStrategyId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productionStrategyId** | [**String**](.md)|  | 

### Return type

[**[Imposing]**](Imposing.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="productionStrategiesProductionStrategyIdImposingsPost"></a>
# **productionStrategiesProductionStrategyIdImposingsPost**
> Imposing productionStrategiesProductionStrategyIdImposingsPost(body, productionStrategyId)



Create a new Imposing for the provided ProductionStrategy - needed bearer: &#x60;Organization&#x60; - needed scopes: &#x60;mission_control.jobs.w&#x60; or &#x60;mission_control.jobs.rw&#x60;

### Example
```javascript
import {MissionControl} from 'mission_control';
let defaultClient = MissionControl.ApiClient.instance;


let apiInstance = new MissionControl.ProductionApi();
let body = new MissionControl.ProductionStrategyIdImposingsBody(); // ProductionStrategyIdImposingsBody | 
let productionStrategyId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 

apiInstance.productionStrategiesProductionStrategyIdImposingsPost(body, productionStrategyId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ProductionStrategyIdImposingsBody**](ProductionStrategyIdImposingsBody.md)|  | 
 **productionStrategyId** | [**String**](.md)|  | 

### Return type

[**Imposing**](Imposing.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="productionStrategiesProductionStrategyIdPatch"></a>
# **productionStrategiesProductionStrategyIdPatch**
> InlineResponse2011 productionStrategiesProductionStrategyIdPatch(body, productionStrategyId)



 - needed bearer: &#x60;Organization&#x60; - needed scopes: &#x60;mission_control.jobs.w&#x60; or &#x60;mission_control.jobs.rw&#x60;

### Example
```javascript
import {MissionControl} from 'mission_control';
let defaultClient = MissionControl.ApiClient.instance;


let apiInstance = new MissionControl.ProductionApi();
let body = new MissionControl.ProductionStrategiesProductionStrategyIdBody(); // ProductionStrategiesProductionStrategyIdBody | 
let productionStrategyId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 

apiInstance.productionStrategiesProductionStrategyIdPatch(body, productionStrategyId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ProductionStrategiesProductionStrategyIdBody**](ProductionStrategiesProductionStrategyIdBody.md)|  | 
 **productionStrategyId** | [**String**](.md)|  | 

### Return type

[**InlineResponse2011**](InlineResponse2011.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="signaturesSignatureIdDelete"></a>
# **signaturesSignatureIdDelete**
> signaturesSignatureIdDelete(signatureId)



Remove a Signature from the Imposing - needed bearer: &#x60;Organization&#x60; - needed scopes: &#x60;mission_control.jobs.w&#x60; or &#x60;mission_control.jobs.rw&#x60;

### Example
```javascript
import {MissionControl} from 'mission_control';
let defaultClient = MissionControl.ApiClient.instance;


let apiInstance = new MissionControl.ProductionApi();
let signatureId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 

apiInstance.signaturesSignatureIdDelete(signatureId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **signatureId** | [**String**](.md)|  | 

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="signaturesSignatureIdGet"></a>
# **signaturesSignatureIdGet**
> Signature signaturesSignatureIdGet(signatureId)



Show the full details of a given Signature - needed bearer: &#x60;Organization&#x60; - needed scopes: &#x60;mission_control.jobs.r&#x60; or &#x60;mission_control.jobs.rw&#x60;

### Example
```javascript
import {MissionControl} from 'mission_control';
let defaultClient = MissionControl.ApiClient.instance;


let apiInstance = new MissionControl.ProductionApi();
let signatureId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 

apiInstance.signaturesSignatureIdGet(signatureId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **signatureId** | [**String**](.md)|  | 

### Return type

[**Signature**](Signature.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="signaturesSignatureIdPatch"></a>
# **signaturesSignatureIdPatch**
> Signature signaturesSignatureIdPatch(body, signatureId)



Update a Signature - needed bearer: &#x60;Organization&#x60; - needed scopes: &#x60;mission_control.jobs.w&#x60; or &#x60;mission_control.jobs.rw&#x60;

### Example
```javascript
import {MissionControl} from 'mission_control';
let defaultClient = MissionControl.ApiClient.instance;


let apiInstance = new MissionControl.ProductionApi();
let body = new MissionControl.SignaturesSignatureIdBody(); // SignaturesSignatureIdBody | 
let signatureId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 

apiInstance.signaturesSignatureIdPatch(body, signatureId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**SignaturesSignatureIdBody**](SignaturesSignatureIdBody.md)|  | 
 **signatureId** | [**String**](.md)|  | 

### Return type

[**Signature**](Signature.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="todosTodoIdDelete"></a>
# **todosTodoIdDelete**
> todosTodoIdDelete(todoId)



Remove a todo - needed bearer: &#x60;Organization&#x60; - needed scopes: &#x60;mission_control.jobs.w&#x60; or &#x60;mission_control.jobs.rw&#x60;

### Example
```javascript
import {MissionControl} from 'mission_control';
let defaultClient = MissionControl.ApiClient.instance;


let apiInstance = new MissionControl.ProductionApi();
let todoId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 

apiInstance.todosTodoIdDelete(todoId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **todoId** | [**String**](.md)|  | 

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="todosTodoIdGet"></a>
# **todosTodoIdGet**
> Todo todosTodoIdGet(todoId)



Display the status of a todo - needed bearer: &#x60;Organization&#x60; - needed scopes: &#x60;mission_control.jobs.r&#x60; or &#x60;mission_control.jobs.rw&#x60;

### Example
```javascript
import {MissionControl} from 'mission_control';
let defaultClient = MissionControl.ApiClient.instance;


let apiInstance = new MissionControl.ProductionApi();
let todoId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 

apiInstance.todosTodoIdGet(todoId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **todoId** | [**String**](.md)|  | 

### Return type

[**Todo**](Todo.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="todosTodoIdPatch"></a>
# **todosTodoIdPatch**
> Todo todosTodoIdPatch(body, todoId)



Change properties of a todo - needed bearer: &#x60;Organization&#x60; - needed scopes: &#x60;mission_control.jobs.w&#x60; or &#x60;mission_control.jobs.rw&#x60;

### Example
```javascript
import {MissionControl} from 'mission_control';
let defaultClient = MissionControl.ApiClient.instance;


let apiInstance = new MissionControl.ProductionApi();
let body = new MissionControl.TodosTodoIdBody(); // TodosTodoIdBody | 
let todoId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 

apiInstance.todosTodoIdPatch(body, todoId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**TodosTodoIdBody**](TodosTodoIdBody.md)|  | 
 **todoId** | [**String**](.md)|  | 

### Return type

[**Todo**](Todo.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="workstepGroupsGet"></a>
# **workstepGroupsGet**
> [WorkstepGroup] workstepGroupsGet(opts)



Show all available WorkstepGroups - needed bearer: &#x60;Organization&#x60; - needed scopes: &#x60;mission_control.jobs.r&#x60; or &#x60;mission_control.jobs.rw&#x60;

### Example
```javascript
import {MissionControl} from 'mission_control';
let defaultClient = MissionControl.ApiClient.instance;


let apiInstance = new MissionControl.ProductionApi();
let opts = { 
  'page': 56, // Number | The page of the current collection that shall be returned
  'perPage': 100 // Number | The maximum number of items included in the response, ie., the page size
};
apiInstance.workstepGroupsGet(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Number**| The page of the current collection that shall be returned | [optional] 
 **perPage** | **Number**| The maximum number of items included in the response, ie., the page size | [optional] [default to 100]

### Return type

[**[WorkstepGroup]**](WorkstepGroup.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="workstepGroupsPost"></a>
# **workstepGroupsPost**
> WorkstepGroup workstepGroupsPost(body)



Create a new WorkstepGroup - needed bearer: &#x60;Organization&#x60; - needed scopes: &#x60;mission_control.jobs.w&#x60; or &#x60;mission_control.jobs.rw&#x60;

### Example
```javascript
import {MissionControl} from 'mission_control';
let defaultClient = MissionControl.ApiClient.instance;


let apiInstance = new MissionControl.ProductionApi();
let body = new MissionControl.WorkstepGroupsBody(); // WorkstepGroupsBody | 

apiInstance.workstepGroupsPost(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**WorkstepGroupsBody**](WorkstepGroupsBody.md)|  | 

### Return type

[**WorkstepGroup**](WorkstepGroup.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="workstepGroupsWorkstepGroupIdDelete"></a>
# **workstepGroupsWorkstepGroupIdDelete**
> workstepGroupsWorkstepGroupIdDelete(workstepGroupId)



Remove a WorkstepGroup, this will remove all contained Worksteps and associated IntermediateProducts\&quot;  - needed bearer: &#x60;Organization&#x60; - needed scopes: &#x60;mission_control.jobs.w&#x60; or &#x60;mission_control.jobs.rw&#x60;

### Example
```javascript
import {MissionControl} from 'mission_control';
let defaultClient = MissionControl.ApiClient.instance;


let apiInstance = new MissionControl.ProductionApi();
let workstepGroupId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 

apiInstance.workstepGroupsWorkstepGroupIdDelete(workstepGroupId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workstepGroupId** | [**String**](.md)|  | 

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="workstepGroupsWorkstepGroupIdGet"></a>
# **workstepGroupsWorkstepGroupIdGet**
> WorkstepGroup workstepGroupsWorkstepGroupIdGet(workstepGroupId)



Show the full details of a given WorkstepGroup including all Worksteps - needed bearer: &#x60;Organization&#x60; - needed scopes: &#x60;mission_control.jobs.r&#x60; or &#x60;mission_control.jobs.rw&#x60;

### Example
```javascript
import {MissionControl} from 'mission_control';
let defaultClient = MissionControl.ApiClient.instance;


let apiInstance = new MissionControl.ProductionApi();
let workstepGroupId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 

apiInstance.workstepGroupsWorkstepGroupIdGet(workstepGroupId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workstepGroupId** | [**String**](.md)|  | 

### Return type

[**WorkstepGroup**](WorkstepGroup.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="workstepGroupsWorkstepGroupIdPatch"></a>
# **workstepGroupsWorkstepGroupIdPatch**
> WorkstepGroup workstepGroupsWorkstepGroupIdPatch(body, workstepGroupId)



Update a WorkstepGroup - needed bearer: &#x60;Organization&#x60; - needed scopes: &#x60;mission_control.jobs.w&#x60; or &#x60;mission_control.jobs.rw&#x60;

### Example
```javascript
import {MissionControl} from 'mission_control';
let defaultClient = MissionControl.ApiClient.instance;


let apiInstance = new MissionControl.ProductionApi();
let body = new MissionControl.WorkstepGroupsWorkstepGroupIdBody(); // WorkstepGroupsWorkstepGroupIdBody | 
let workstepGroupId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 

apiInstance.workstepGroupsWorkstepGroupIdPatch(body, workstepGroupId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**WorkstepGroupsWorkstepGroupIdBody**](WorkstepGroupsWorkstepGroupIdBody.md)|  | 
 **workstepGroupId** | [**String**](.md)|  | 

### Return type

[**WorkstepGroup**](WorkstepGroup.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="workstepsGet"></a>
# **workstepsGet**
> [Workstep] workstepsGet(opts)



List all available Worksteps - needed bearer: &#x60;Organization&#x60; - needed scopes: &#x60;mission_control.jobs.r&#x60; or &#x60;mission_control.jobs.rw&#x60;

### Example
```javascript
import {MissionControl} from 'mission_control';
let defaultClient = MissionControl.ApiClient.instance;


let apiInstance = new MissionControl.ProductionApi();
let opts = { 
  'page': 56, // Number | The page of the current collection that shall be returned
  'perPage': 100 // Number | The maximum number of items included in the response, ie., the page size
};
apiInstance.workstepsGet(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Number**| The page of the current collection that shall be returned | [optional] 
 **perPage** | **Number**| The maximum number of items included in the response, ie., the page size | [optional] [default to 100]

### Return type

[**[Workstep]**](Workstep.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="workstepsPost"></a>
# **workstepsPost**
> Workstep workstepsPost(body)



Create a new Workstep - needed bearer: &#x60;Organization&#x60; - needed scopes: &#x60;mission_control.jobs.w&#x60; or &#x60;mission_control.jobs.rw&#x60;

### Example
```javascript
import {MissionControl} from 'mission_control';
let defaultClient = MissionControl.ApiClient.instance;


let apiInstance = new MissionControl.ProductionApi();
let body = new MissionControl.WorkstepsBody(); // WorkstepsBody | 

apiInstance.workstepsPost(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**WorkstepsBody**](WorkstepsBody.md)|  | 

### Return type

[**Workstep**](Workstep.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="workstepsWorkstepIdDelete"></a>
# **workstepsWorkstepIdDelete**
> workstepsWorkstepIdDelete(workstepId)



Remove a Workstep - needed bearer: &#x60;Organization&#x60; - needed scopes: &#x60;mission_control.jobs.w&#x60; or &#x60;mission_control.jobs.rw&#x60;

### Example
```javascript
import {MissionControl} from 'mission_control';
let defaultClient = MissionControl.ApiClient.instance;


let apiInstance = new MissionControl.ProductionApi();
let workstepId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 

apiInstance.workstepsWorkstepIdDelete(workstepId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workstepId** | [**String**](.md)|  | 

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="workstepsWorkstepIdGet"></a>
# **workstepsWorkstepIdGet**
> Workstep workstepsWorkstepIdGet(workstepId)



Show the full details of a Workstep - needed bearer: &#x60;Organization&#x60; - needed scopes: &#x60;mission_control.jobs.r&#x60; or &#x60;mission_control.jobs.rw&#x60;

### Example
```javascript
import {MissionControl} from 'mission_control';
let defaultClient = MissionControl.ApiClient.instance;


let apiInstance = new MissionControl.ProductionApi();
let workstepId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 

apiInstance.workstepsWorkstepIdGet(workstepId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workstepId** | [**String**](.md)|  | 

### Return type

[**Workstep**](Workstep.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="workstepsWorkstepIdPatch"></a>
# **workstepsWorkstepIdPatch**
> Workstep workstepsWorkstepIdPatch(body, workstepId)



Update a Workstep with the provided params - needed bearer: &#x60;Organization&#x60; - needed scopes: &#x60;mission_control.jobs.w&#x60; or &#x60;mission_control.jobs.rw&#x60;

### Example
```javascript
import {MissionControl} from 'mission_control';
let defaultClient = MissionControl.ApiClient.instance;


let apiInstance = new MissionControl.ProductionApi();
let body = new MissionControl.WorkstepsWorkstepIdBody(); // WorkstepsWorkstepIdBody | 
let workstepId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 

apiInstance.workstepsWorkstepIdPatch(body, workstepId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**WorkstepsWorkstepIdBody**](WorkstepsWorkstepIdBody.md)|  | 
 **workstepId** | [**String**](.md)|  | 

### Return type

[**Workstep**](Workstep.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

