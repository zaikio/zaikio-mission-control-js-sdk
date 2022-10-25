# MissionControl.ProductionApi

All URIs are relative to *https://mc.zaikio.com/api/v1/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**batchesBatchIdDelete**](ProductionApi.md#batchesBatchIdDelete) | **DELETE** /batches/{batch_id} | 
[**batchesBatchIdGet**](ProductionApi.md#batchesBatchIdGet) | **GET** /batches/{batch_id} | 
[**batchesBatchIdPatch**](ProductionApi.md#batchesBatchIdPatch) | **PATCH** /batches/{batch_id} | 
[**batchesGet**](ProductionApi.md#batchesGet) | **GET** /batches | 
[**batchesPost**](ProductionApi.md#batchesPost) | **POST** /batches | 
[**executionsExecutionIdDelete**](ProductionApi.md#executionsExecutionIdDelete) | **DELETE** /executions/{execution_id} | 
[**executionsExecutionIdGet**](ProductionApi.md#executionsExecutionIdGet) | **GET** /executions/{execution_id} | 
[**executionsExecutionIdPatch**](ProductionApi.md#executionsExecutionIdPatch) | **PATCH** /executions/{execution_id} | 
[**executionsGet**](ProductionApi.md#executionsGet) | **GET** /executions | 
[**executionsPost**](ProductionApi.md#executionsPost) | **POST** /executions | 
[**imposingsImposingIdDelete**](ProductionApi.md#imposingsImposingIdDelete) | **DELETE** /imposings/{imposing_id} | 
[**imposingsImposingIdGet**](ProductionApi.md#imposingsImposingIdGet) | **GET** /imposings/{imposing_id} | 
[**imposingsImposingIdPatch**](ProductionApi.md#imposingsImposingIdPatch) | **PATCH** /imposings/{imposing_id} | 
[**imposingsImposingIdSignaturesGet**](ProductionApi.md#imposingsImposingIdSignaturesGet) | **GET** /imposings/{imposing_id}/signatures | 
[**imposingsImposingIdSignaturesPost**](ProductionApi.md#imposingsImposingIdSignaturesPost) | **POST** /imposings/{imposing_id}/signatures | 
[**intermediateProductsIntermediateProductIdDelete**](ProductionApi.md#intermediateProductsIntermediateProductIdDelete) | **DELETE** /intermediate_products/{intermediate_product_id} | 
[**intermediateProductsIntermediateProductIdGet**](ProductionApi.md#intermediateProductsIntermediateProductIdGet) | **GET** /intermediate_products/{intermediate_product_id} | 
[**intermediateProductsIntermediateProductIdPatch**](ProductionApi.md#intermediateProductsIntermediateProductIdPatch) | **PATCH** /intermediate_products/{intermediate_product_id} | 
[**jobsJobIdFinishedProductDelete**](ProductionApi.md#jobsJobIdFinishedProductDelete) | **DELETE** /jobs/{job_id}/finished_product | 
[**jobsJobIdFinishedProductGet**](ProductionApi.md#jobsJobIdFinishedProductGet) | **GET** /jobs/{job_id}/finished_product | 
[**jobsJobIdFinishedProductPatch**](ProductionApi.md#jobsJobIdFinishedProductPatch) | **PATCH** /jobs/{job_id}/finished_product | 
[**jobsJobIdFinishedProductPost**](ProductionApi.md#jobsJobIdFinishedProductPost) | **POST** /jobs/{job_id}/finished_product | 
[**jobsJobIdIntermediateProductsGet**](ProductionApi.md#jobsJobIdIntermediateProductsGet) | **GET** /jobs/{job_id}/intermediate_products | 
[**jobsJobIdIntermediateProductsPost**](ProductionApi.md#jobsJobIdIntermediateProductsPost) | **POST** /jobs/{job_id}/intermediate_products | 
[**jobsJobIdMilestonesGet**](ProductionApi.md#jobsJobIdMilestonesGet) | **GET** /jobs/{job_id}/milestones | 
[**jobsJobIdMilestonesPost**](ProductionApi.md#jobsJobIdMilestonesPost) | **POST** /jobs/{job_id}/milestones | 
[**jobsJobIdProductionStrategiesGet**](ProductionApi.md#jobsJobIdProductionStrategiesGet) | **GET** /jobs/{job_id}/production_strategies | 
[**jobsJobIdProductionStrategiesPost**](ProductionApi.md#jobsJobIdProductionStrategiesPost) | **POST** /jobs/{job_id}/production_strategies | 
[**jobsJobIdTodosGet**](ProductionApi.md#jobsJobIdTodosGet) | **GET** /jobs/{job_id}/todos | 
[**jobsJobIdTodosPost**](ProductionApi.md#jobsJobIdTodosPost) | **POST** /jobs/{job_id}/todos | 
[**listsGet**](ProductionApi.md#listsGet) | **GET** /lists | 
[**listsListIdDelete**](ProductionApi.md#listsListIdDelete) | **DELETE** /lists/{list_id} | 
[**listsListIdGet**](ProductionApi.md#listsListIdGet) | **GET** /lists/{list_id} | 
[**listsListIdPatch**](ProductionApi.md#listsListIdPatch) | **PATCH** /lists/{list_id} | 
[**listsListIdPredicatesGet**](ProductionApi.md#listsListIdPredicatesGet) | **GET** /lists/{list_id}/predicates | 
[**listsListIdPredicatesPost**](ProductionApi.md#listsListIdPredicatesPost) | **POST** /lists/{list_id}/predicates | 
[**listsPost**](ProductionApi.md#listsPost) | **POST** /lists | 
[**milestonesMilestoneIdDelete**](ProductionApi.md#milestonesMilestoneIdDelete) | **DELETE** /milestones/{milestone_id} | 
[**milestonesMilestoneIdGet**](ProductionApi.md#milestonesMilestoneIdGet) | **GET** /milestones/{milestone_id} | 
[**milestonesMilestoneIdPatch**](ProductionApi.md#milestonesMilestoneIdPatch) | **PATCH** /milestones/{milestone_id} | 
[**predicatesPredicateIdDelete**](ProductionApi.md#predicatesPredicateIdDelete) | **DELETE** /predicates/{predicate_id} | 
[**predicatesPredicateIdGet**](ProductionApi.md#predicatesPredicateIdGet) | **GET** /predicates/{predicate_id} | 
[**predicatesPredicateIdPatch**](ProductionApi.md#predicatesPredicateIdPatch) | **PATCH** /predicates/{predicate_id} | 
[**predicatesPredicateIdRulesGet**](ProductionApi.md#predicatesPredicateIdRulesGet) | **GET** /predicates/{predicate_id}/rules | 
[**predicatesPredicateIdRulesPost**](ProductionApi.md#predicatesPredicateIdRulesPost) | **POST** /predicates/{predicate_id}/rules | 
[**productionPathsPost**](ProductionApi.md#productionPathsPost) | **POST** /production_paths | 
[**productionStrategiesProductionStrategyIdDelete**](ProductionApi.md#productionStrategiesProductionStrategyIdDelete) | **DELETE** /production_strategies/{production_strategy_id} | 
[**productionStrategiesProductionStrategyIdGet**](ProductionApi.md#productionStrategiesProductionStrategyIdGet) | **GET** /production_strategies/{production_strategy_id} | 
[**productionStrategiesProductionStrategyIdImposingsGet**](ProductionApi.md#productionStrategiesProductionStrategyIdImposingsGet) | **GET** /production_strategies/{production_strategy_id}/imposings | 
[**productionStrategiesProductionStrategyIdImposingsPost**](ProductionApi.md#productionStrategiesProductionStrategyIdImposingsPost) | **POST** /production_strategies/{production_strategy_id}/imposings | 
[**productionStrategiesProductionStrategyIdPatch**](ProductionApi.md#productionStrategiesProductionStrategyIdPatch) | **PATCH** /production_strategies/{production_strategy_id} | 
[**rulesRuleIdDelete**](ProductionApi.md#rulesRuleIdDelete) | **DELETE** /rules/{rule_id} | 
[**rulesRuleIdGet**](ProductionApi.md#rulesRuleIdGet) | **GET** /rules/{rule_id} | 
[**rulesRuleIdPatch**](ProductionApi.md#rulesRuleIdPatch) | **PATCH** /rules/{rule_id} | 
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

apiInstance.batchesBatchIdDelete(batchId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
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

apiInstance.batchesBatchIdGet(batchId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
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

apiInstance.batchesBatchIdPatch(body, batchId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
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
apiInstance.batchesGet(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
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

apiInstance.batchesPost(body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
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

<a name="executionsExecutionIdDelete"></a>
# **executionsExecutionIdDelete**
> executionsExecutionIdDelete(executionId)



Remove an execution - needed bearer: &#x60;Organization&#x60; - needed scopes: &#x60;mission_control.jobs.w&#x60;

### Example
```javascript
import {MissionControl} from 'mission_control';
let defaultClient = MissionControl.ApiClient.instance;


let apiInstance = new MissionControl.ProductionApi();
let executionId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 

apiInstance.executionsExecutionIdDelete(executionId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **executionId** | [**String**](.md)|  | 

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="executionsExecutionIdGet"></a>
# **executionsExecutionIdGet**
> Execution executionsExecutionIdGet(executionId)



Show the details of a given execution - needed bearer: &#x60;Organization&#x60; - needed scopes: &#x60;mission_control.jobs.r&#x60;

### Example
```javascript
import {MissionControl} from 'mission_control';
let defaultClient = MissionControl.ApiClient.instance;


let apiInstance = new MissionControl.ProductionApi();
let executionId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 

apiInstance.executionsExecutionIdGet(executionId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **executionId** | [**String**](.md)|  | 

### Return type

[**Execution**](Execution.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="executionsExecutionIdPatch"></a>
# **executionsExecutionIdPatch**
> Execution executionsExecutionIdPatch(body, executionId)



Update the status of an execution - needed bearer: &#x60;Organization&#x60; - needed scopes: &#x60;mission_control.jobs.w&#x60;

### Example
```javascript
import {MissionControl} from 'mission_control';
let defaultClient = MissionControl.ApiClient.instance;


let apiInstance = new MissionControl.ProductionApi();
let body = new MissionControl.ExecutionsExecutionIdBody(); // ExecutionsExecutionIdBody | 
let executionId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 

apiInstance.executionsExecutionIdPatch(body, executionId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ExecutionsExecutionIdBody**](ExecutionsExecutionIdBody.md)|  | 
 **executionId** | [**String**](.md)|  | 

### Return type

[**Execution**](Execution.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="executionsGet"></a>
# **executionsGet**
> [Execution] executionsGet(opts)



List all executions, useful as an audit log of production - needed bearer: &#x60;Organization&#x60; - needed scopes: &#x60;mission_control.jobs.r&#x60;

### Example
```javascript
import {MissionControl} from 'mission_control';
let defaultClient = MissionControl.ApiClient.instance;


let apiInstance = new MissionControl.ProductionApi();
let opts = { 
  'page': 56, // Number | The page of the current collection that shall be returned
  'perPage': 100 // Number | The maximum number of items included in the response, ie., the page size
};
apiInstance.executionsGet(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Number**| The page of the current collection that shall be returned | [optional] 
 **perPage** | **Number**| The maximum number of items included in the response, ie., the page size | [optional] [default to 100]

### Return type

[**[Execution]**](Execution.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="executionsPost"></a>
# **executionsPost**
> Execution executionsPost(body)



Create a new execution to log production - needed bearer: &#x60;Organization&#x60; - needed scopes: &#x60;mission_control.jobs.w&#x60;

### Example
```javascript
import {MissionControl} from 'mission_control';
let defaultClient = MissionControl.ApiClient.instance;


let apiInstance = new MissionControl.ProductionApi();
let body = new MissionControl.ExecutionsBody(); // ExecutionsBody | 

apiInstance.executionsPost(body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ExecutionsBody**](ExecutionsBody.md)|  | 

### Return type

[**Execution**](Execution.md)

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

apiInstance.imposingsImposingIdDelete(imposingId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
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

apiInstance.imposingsImposingIdGet(imposingId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
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

apiInstance.imposingsImposingIdPatch(body, imposingId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
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

apiInstance.imposingsImposingIdSignaturesGet(imposingId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
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

apiInstance.imposingsImposingIdSignaturesPost(body, imposingId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
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

apiInstance.intermediateProductsIntermediateProductIdDelete(intermediateProductId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
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

apiInstance.intermediateProductsIntermediateProductIdGet(intermediateProductId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
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

apiInstance.intermediateProductsIntermediateProductIdPatch(body, intermediateProductId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
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

<a name="jobsJobIdFinishedProductDelete"></a>
# **jobsJobIdFinishedProductDelete**
> jobsJobIdFinishedProductDelete(jobId)



Remove the FinishedProduct - needed bearer: &#x60;Organization&#x60; - needed scopes: &#x60;mission_control.jobs.w&#x60; or &#x60;mission_control.jobs.rw&#x60;

### Example
```javascript
import {MissionControl} from 'mission_control';
let defaultClient = MissionControl.ApiClient.instance;


let apiInstance = new MissionControl.ProductionApi();
let jobId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 

apiInstance.jobsJobIdFinishedProductDelete(jobId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **jobId** | [**String**](.md)|  | 

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="jobsJobIdFinishedProductGet"></a>
# **jobsJobIdFinishedProductGet**
> FinishedProduct jobsJobIdFinishedProductGet(jobId)



Show the full details of the FinishedProduct - needed bearer: &#x60;Organization&#x60; - needed scopes: &#x60;mission_control.jobs.r&#x60; or &#x60;mission_control.jobs.rw&#x60;

### Example
```javascript
import {MissionControl} from 'mission_control';
let defaultClient = MissionControl.ApiClient.instance;


let apiInstance = new MissionControl.ProductionApi();
let jobId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 

apiInstance.jobsJobIdFinishedProductGet(jobId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **jobId** | [**String**](.md)|  | 

### Return type

[**FinishedProduct**](FinishedProduct.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="jobsJobIdFinishedProductPatch"></a>
# **jobsJobIdFinishedProductPatch**
> FinishedProduct jobsJobIdFinishedProductPatch(body, jobId)



Update the FinishedProduct with the provided params - needed bearer: &#x60;Organization&#x60; - needed scopes: &#x60;mission_control.jobs.w&#x60; or &#x60;mission_control.jobs.rw&#x60;

### Example
```javascript
import {MissionControl} from 'mission_control';
let defaultClient = MissionControl.ApiClient.instance;


let apiInstance = new MissionControl.ProductionApi();
let body = new MissionControl.JobIdFinishedProductBody1(); // JobIdFinishedProductBody1 | 
let jobId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 

apiInstance.jobsJobIdFinishedProductPatch(body, jobId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**JobIdFinishedProductBody1**](JobIdFinishedProductBody1.md)|  | 
 **jobId** | [**String**](.md)|  | 

### Return type

[**FinishedProduct**](FinishedProduct.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="jobsJobIdFinishedProductPost"></a>
# **jobsJobIdFinishedProductPost**
> FinishedProduct jobsJobIdFinishedProductPost(body, jobId)



Create the FinishedProduct for a Job - needed bearer: &#x60;Organization&#x60; - needed scopes: &#x60;mission_control.jobs.w&#x60; or &#x60;mission_control.jobs.rw&#x60;

### Example
```javascript
import {MissionControl} from 'mission_control';
let defaultClient = MissionControl.ApiClient.instance;


let apiInstance = new MissionControl.ProductionApi();
let body = new MissionControl.JobIdFinishedProductBody(); // JobIdFinishedProductBody | 
let jobId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 

apiInstance.jobsJobIdFinishedProductPost(body, jobId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**JobIdFinishedProductBody**](JobIdFinishedProductBody.md)|  | 
 **jobId** | [**String**](.md)|  | 

### Return type

[**FinishedProduct**](FinishedProduct.md)

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
apiInstance.jobsJobIdIntermediateProductsGet(jobId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
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

apiInstance.jobsJobIdIntermediateProductsPost(body, jobId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
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

<a name="jobsJobIdMilestonesGet"></a>
# **jobsJobIdMilestonesGet**
> [Milestone] jobsJobIdMilestonesGet(jobId, opts)



List all milestones for this Job - needed bearer: &#x60;Organization&#x60; - needed scopes: &#x60;mission_control.jobs.r&#x60; or &#x60;mission_control.jobs.rw&#x60;

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
apiInstance.jobsJobIdMilestonesGet(jobId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **jobId** | [**String**](.md)|  | 
 **page** | **Number**| The page of the current collection that shall be returned | [optional] 
 **perPage** | **Number**| The maximum number of items included in the response, ie., the page size | [optional] [default to 100]

### Return type

[**[Milestone]**](Milestone.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="jobsJobIdMilestonesPost"></a>
# **jobsJobIdMilestonesPost**
> Milestone jobsJobIdMilestonesPost(body, jobId)



Create a new milestone for this Job - needed bearer: &#x60;Organization&#x60; - needed scopes: &#x60;mission_control.jobs.w&#x60; or &#x60;mission_control.jobs.rw&#x60;

### Example
```javascript
import {MissionControl} from 'mission_control';
let defaultClient = MissionControl.ApiClient.instance;


let apiInstance = new MissionControl.ProductionApi();
let body = new MissionControl.JobIdMilestonesBody(); // JobIdMilestonesBody | 
let jobId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 

apiInstance.jobsJobIdMilestonesPost(body, jobId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**JobIdMilestonesBody**](JobIdMilestonesBody.md)|  | 
 **jobId** | [**String**](.md)|  | 

### Return type

[**Milestone**](Milestone.md)

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

apiInstance.jobsJobIdProductionStrategiesGet(jobId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
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

apiInstance.jobsJobIdProductionStrategiesPost(body, jobId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
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
apiInstance.jobsJobIdTodosGet(jobId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
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

apiInstance.jobsJobIdTodosPost(body, jobId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
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

<a name="listsGet"></a>
# **listsGet**
> [Object] listsGet(opts)



Returns all lists associated to user organizations. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: &#x60;mission_control.lists.r&#x60;

### Example
```javascript
import {MissionControl} from 'mission_control';
let defaultClient = MissionControl.ApiClient.instance;


let apiInstance = new MissionControl.ProductionApi();
let opts = { 
  'page': 56, // Number | The page of the current collection that shall be returned
  'perPage': 100 // Number | The maximum number of items included in the response, ie., the page size
};
apiInstance.listsGet(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Number**| The page of the current collection that shall be returned | [optional] 
 **perPage** | **Number**| The maximum number of items included in the response, ie., the page size | [optional] [default to 100]

### Return type

**[Object]**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="listsListIdDelete"></a>
# **listsListIdDelete**
> listsListIdDelete(listId)



Removes a list. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: &#x60;mission_control.lists.w&#x60;

### Example
```javascript
import {MissionControl} from 'mission_control';
let defaultClient = MissionControl.ApiClient.instance;


let apiInstance = new MissionControl.ProductionApi();
let listId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 

apiInstance.listsListIdDelete(listId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **listId** | [**String**](.md)|  | 

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="listsListIdGet"></a>
# **listsListIdGet**
> InlineResponse2014 listsListIdGet(listId)



Returns a specific list associated to a user organizations (without its members). - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: &#x60;mission_control.lists.r&#x60;

### Example
```javascript
import {MissionControl} from 'mission_control';
let defaultClient = MissionControl.ApiClient.instance;


let apiInstance = new MissionControl.ProductionApi();
let listId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 

apiInstance.listsListIdGet(listId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **listId** | [**String**](.md)|  | 

### Return type

[**InlineResponse2014**](InlineResponse2014.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="listsListIdPatch"></a>
# **listsListIdPatch**
> InlineResponse2014 listsListIdPatch(body, listId)



Modifies a list. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: &#x60;mission_control.lists.w&#x60;

### Example
```javascript
import {MissionControl} from 'mission_control';
let defaultClient = MissionControl.ApiClient.instance;


let apiInstance = new MissionControl.ProductionApi();
let body = new MissionControl.ListsListIdBody(); // ListsListIdBody | 
let listId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 

apiInstance.listsListIdPatch(body, listId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ListsListIdBody**](ListsListIdBody.md)|  | 
 **listId** | [**String**](.md)|  | 

### Return type

[**InlineResponse2014**](InlineResponse2014.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listsListIdPredicatesGet"></a>
# **listsListIdPredicatesGet**
> [Predicate] listsListIdPredicatesGet(listId, opts)



Returns all predicates of a specific list. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: &#x60;mission_control.lists.r&#x60;

### Example
```javascript
import {MissionControl} from 'mission_control';
let defaultClient = MissionControl.ApiClient.instance;


let apiInstance = new MissionControl.ProductionApi();
let listId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 
let opts = { 
  'page': 56, // Number | The page of the current collection that shall be returned
  'perPage': 100 // Number | The maximum number of items included in the response, ie., the page size
};
apiInstance.listsListIdPredicatesGet(listId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **listId** | [**String**](.md)|  | 
 **page** | **Number**| The page of the current collection that shall be returned | [optional] 
 **perPage** | **Number**| The maximum number of items included in the response, ie., the page size | [optional] [default to 100]

### Return type

[**[Predicate]**](Predicate.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="listsListIdPredicatesPost"></a>
# **listsListIdPredicatesPost**
> Predicate listsListIdPredicatesPost(body, listId)



Creates a new predicate for a specific list. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: &#x60;mission_control.lists.w&#x60;

### Example
```javascript
import {MissionControl} from 'mission_control';
let defaultClient = MissionControl.ApiClient.instance;


let apiInstance = new MissionControl.ProductionApi();
let body = new MissionControl.ListIdPredicatesBody(); // ListIdPredicatesBody | 
let listId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 

apiInstance.listsListIdPredicatesPost(body, listId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ListIdPredicatesBody**](ListIdPredicatesBody.md)|  | 
 **listId** | [**String**](.md)|  | 

### Return type

[**Predicate**](Predicate.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listsPost"></a>
# **listsPost**
> InlineResponse2014 listsPost(body)



Creates a list. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: &#x60;mission_control.lists.w&#x60;

### Example
```javascript
import {MissionControl} from 'mission_control';
let defaultClient = MissionControl.ApiClient.instance;


let apiInstance = new MissionControl.ProductionApi();
let body = new MissionControl.ListsBody(); // ListsBody | 

apiInstance.listsPost(body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ListsBody**](ListsBody.md)|  | 

### Return type

[**InlineResponse2014**](InlineResponse2014.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="milestonesMilestoneIdDelete"></a>
# **milestonesMilestoneIdDelete**
> milestonesMilestoneIdDelete(milestoneId)



Remove a milestone - needed bearer: &#x60;Organization&#x60; - needed scopes: &#x60;mission_control.jobs.w&#x60; or &#x60;mission_control.jobs.rw&#x60;

### Example
```javascript
import {MissionControl} from 'mission_control';
let defaultClient = MissionControl.ApiClient.instance;


let apiInstance = new MissionControl.ProductionApi();
let milestoneId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 

apiInstance.milestonesMilestoneIdDelete(milestoneId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **milestoneId** | [**String**](.md)|  | 

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="milestonesMilestoneIdGet"></a>
# **milestonesMilestoneIdGet**
> Milestone milestonesMilestoneIdGet(milestoneId)



Display the status of a Milestone - needed bearer: &#x60;Organization&#x60; - needed scopes: &#x60;mission_control.jobs.r&#x60; or &#x60;mission_control.jobs.rw&#x60;

### Example
```javascript
import {MissionControl} from 'mission_control';
let defaultClient = MissionControl.ApiClient.instance;


let apiInstance = new MissionControl.ProductionApi();
let milestoneId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 

apiInstance.milestonesMilestoneIdGet(milestoneId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **milestoneId** | [**String**](.md)|  | 

### Return type

[**Milestone**](Milestone.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="milestonesMilestoneIdPatch"></a>
# **milestonesMilestoneIdPatch**
> Milestone milestonesMilestoneIdPatch(body, milestoneId)



Change properties of a Milestone - needed bearer: &#x60;Organization&#x60; - needed scopes: &#x60;mission_control.jobs.w&#x60; or &#x60;mission_control.jobs.rw&#x60;

### Example
```javascript
import {MissionControl} from 'mission_control';
let defaultClient = MissionControl.ApiClient.instance;


let apiInstance = new MissionControl.ProductionApi();
let body = new MissionControl.MilestonesMilestoneIdBody(); // MilestonesMilestoneIdBody | 
let milestoneId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 

apiInstance.milestonesMilestoneIdPatch(body, milestoneId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**MilestonesMilestoneIdBody**](MilestonesMilestoneIdBody.md)|  | 
 **milestoneId** | [**String**](.md)|  | 

### Return type

[**Milestone**](Milestone.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="predicatesPredicateIdDelete"></a>
# **predicatesPredicateIdDelete**
> predicatesPredicateIdDelete(predicateId)



Removes a predicate. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: &#x60;mission_control.lists.w&#x60;

### Example
```javascript
import {MissionControl} from 'mission_control';
let defaultClient = MissionControl.ApiClient.instance;


let apiInstance = new MissionControl.ProductionApi();
let predicateId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 

apiInstance.predicatesPredicateIdDelete(predicateId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **predicateId** | [**String**](.md)|  | 

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="predicatesPredicateIdGet"></a>
# **predicatesPredicateIdGet**
> Predicate predicatesPredicateIdGet(predicateId)



Returns a specific predicate associated to a user organizations. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: &#x60;mission_control.lists.r&#x60;

### Example
```javascript
import {MissionControl} from 'mission_control';
let defaultClient = MissionControl.ApiClient.instance;


let apiInstance = new MissionControl.ProductionApi();
let predicateId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 

apiInstance.predicatesPredicateIdGet(predicateId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **predicateId** | [**String**](.md)|  | 

### Return type

[**Predicate**](Predicate.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="predicatesPredicateIdPatch"></a>
# **predicatesPredicateIdPatch**
> Predicate predicatesPredicateIdPatch(body, predicateId)



Modifies a predicate. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: &#x60;mission_control.lists.w&#x60;

### Example
```javascript
import {MissionControl} from 'mission_control';
let defaultClient = MissionControl.ApiClient.instance;


let apiInstance = new MissionControl.ProductionApi();
let body = new MissionControl.PredicatesPredicateIdBody(); // PredicatesPredicateIdBody | 
let predicateId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 

apiInstance.predicatesPredicateIdPatch(body, predicateId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**PredicatesPredicateIdBody**](PredicatesPredicateIdBody.md)|  | 
 **predicateId** | [**String**](.md)|  | 

### Return type

[**Predicate**](Predicate.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="predicatesPredicateIdRulesGet"></a>
# **predicatesPredicateIdRulesGet**
> [Rule] predicatesPredicateIdRulesGet(predicateId, opts)



Returns all rules of a specific predicate. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: &#x60;mission_control.lists.r&#x60;

### Example
```javascript
import {MissionControl} from 'mission_control';
let defaultClient = MissionControl.ApiClient.instance;


let apiInstance = new MissionControl.ProductionApi();
let predicateId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 
let opts = { 
  'page': 56, // Number | The page of the current collection that shall be returned
  'perPage': 100 // Number | The maximum number of items included in the response, ie., the page size
};
apiInstance.predicatesPredicateIdRulesGet(predicateId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **predicateId** | [**String**](.md)|  | 
 **page** | **Number**| The page of the current collection that shall be returned | [optional] 
 **perPage** | **Number**| The maximum number of items included in the response, ie., the page size | [optional] [default to 100]

### Return type

[**[Rule]**](Rule.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="predicatesPredicateIdRulesPost"></a>
# **predicatesPredicateIdRulesPost**
> Rule predicatesPredicateIdRulesPost(body, predicateId)



Creates a new rule for a specific predicate. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: &#x60;mission_control.lists.w&#x60;

### Example
```javascript
import {MissionControl} from 'mission_control';
let defaultClient = MissionControl.ApiClient.instance;


let apiInstance = new MissionControl.ProductionApi();
let body = new MissionControl.PredicateIdRulesBody(); // PredicateIdRulesBody | 
let predicateId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 

apiInstance.predicatesPredicateIdRulesPost(body, predicateId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**PredicateIdRulesBody**](PredicateIdRulesBody.md)|  | 
 **predicateId** | [**String**](.md)|  | 

### Return type

[**Rule**](Rule.md)

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

apiInstance.productionPathsPost(body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
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
apiInstance.productionStrategiesProductionStrategyIdDelete(productionStrategyId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
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

apiInstance.productionStrategiesProductionStrategyIdGet(productionStrategyId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
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

apiInstance.productionStrategiesProductionStrategyIdImposingsGet(productionStrategyId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
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

apiInstance.productionStrategiesProductionStrategyIdImposingsPost(body, productionStrategyId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
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

apiInstance.productionStrategiesProductionStrategyIdPatch(body, productionStrategyId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
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

<a name="rulesRuleIdDelete"></a>
# **rulesRuleIdDelete**
> rulesRuleIdDelete(ruleId)



Removes a rule. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: &#x60;mission_control.lists.w&#x60;

### Example
```javascript
import {MissionControl} from 'mission_control';
let defaultClient = MissionControl.ApiClient.instance;


let apiInstance = new MissionControl.ProductionApi();
let ruleId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 

apiInstance.rulesRuleIdDelete(ruleId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ruleId** | [**String**](.md)|  | 

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="rulesRuleIdGet"></a>
# **rulesRuleIdGet**
> Rule rulesRuleIdGet(ruleId)



Returns a specific rule. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: &#x60;mission_control.lists.r&#x60;

### Example
```javascript
import {MissionControl} from 'mission_control';
let defaultClient = MissionControl.ApiClient.instance;


let apiInstance = new MissionControl.ProductionApi();
let ruleId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 

apiInstance.rulesRuleIdGet(ruleId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ruleId** | [**String**](.md)|  | 

### Return type

[**Rule**](Rule.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="rulesRuleIdPatch"></a>
# **rulesRuleIdPatch**
> Rule rulesRuleIdPatch(body, ruleId)



Modifies a rule. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: &#x60;mission_control.lists.w&#x60;

### Example
```javascript
import {MissionControl} from 'mission_control';
let defaultClient = MissionControl.ApiClient.instance;


let apiInstance = new MissionControl.ProductionApi();
let body = new MissionControl.RulesRuleIdBody(); // RulesRuleIdBody | 
let ruleId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 

apiInstance.rulesRuleIdPatch(body, ruleId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**RulesRuleIdBody**](RulesRuleIdBody.md)|  | 
 **ruleId** | [**String**](.md)|  | 

### Return type

[**Rule**](Rule.md)

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

apiInstance.signaturesSignatureIdDelete(signatureId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
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

apiInstance.signaturesSignatureIdGet(signatureId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
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

apiInstance.signaturesSignatureIdPatch(body, signatureId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
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

apiInstance.todosTodoIdDelete(todoId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
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

apiInstance.todosTodoIdGet(todoId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
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

apiInstance.todosTodoIdPatch(body, todoId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
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
apiInstance.workstepGroupsGet(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
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

apiInstance.workstepGroupsPost(body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
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

apiInstance.workstepGroupsWorkstepGroupIdDelete(workstepGroupId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
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

apiInstance.workstepGroupsWorkstepGroupIdGet(workstepGroupId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
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

apiInstance.workstepGroupsWorkstepGroupIdPatch(body, workstepGroupId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
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
apiInstance.workstepsGet(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
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

apiInstance.workstepsPost(body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
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

apiInstance.workstepsWorkstepIdDelete(workstepId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
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

apiInstance.workstepsWorkstepIdGet(workstepId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
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

apiInstance.workstepsWorkstepIdPatch(body, workstepId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
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

