# MissionControl.ListsApi

All URIs are relative to *https://mc.zaikio.com/api/v1/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**listsGet**](ListsApi.md#listsGet) | **GET** /lists | 
[**listsListIdDelete**](ListsApi.md#listsListIdDelete) | **DELETE** /lists/{list_id} | 
[**listsListIdGet**](ListsApi.md#listsListIdGet) | **GET** /lists/{list_id} | 
[**listsListIdMembersGet**](ListsApi.md#listsListIdMembersGet) | **GET** /lists/{list_id}/members | 
[**listsListIdPatch**](ListsApi.md#listsListIdPatch) | **PATCH** /lists/{list_id} | 
[**listsListIdPredicatesGet**](ListsApi.md#listsListIdPredicatesGet) | **GET** /lists/{list_id}/predicates | 
[**listsListIdPredicatesPost**](ListsApi.md#listsListIdPredicatesPost) | **POST** /lists/{list_id}/predicates | 
[**listsPost**](ListsApi.md#listsPost) | **POST** /lists | 
[**predicatesPredicateIdDelete**](ListsApi.md#predicatesPredicateIdDelete) | **DELETE** /predicates/{predicate_id} | 
[**predicatesPredicateIdGet**](ListsApi.md#predicatesPredicateIdGet) | **GET** /predicates/{predicate_id} | 
[**predicatesPredicateIdPatch**](ListsApi.md#predicatesPredicateIdPatch) | **PATCH** /predicates/{predicate_id} | 
[**predicatesPredicateIdRulesGet**](ListsApi.md#predicatesPredicateIdRulesGet) | **GET** /predicates/{predicate_id}/rules | 
[**predicatesPredicateIdRulesPost**](ListsApi.md#predicatesPredicateIdRulesPost) | **POST** /predicates/{predicate_id}/rules | 
[**rulesRuleIdDelete**](ListsApi.md#rulesRuleIdDelete) | **DELETE** /rules/{rule_id} | 
[**rulesRuleIdGet**](ListsApi.md#rulesRuleIdGet) | **GET** /rules/{rule_id} | 
[**rulesRuleIdPatch**](ListsApi.md#rulesRuleIdPatch) | **PATCH** /rules/{rule_id} | 

<a name="listsGet"></a>
# **listsGet**
> [Object] listsGet(opts)



Returns all lists associated to user organizations. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: &#x60;mission_control.lists.r&#x60;

### Example
```javascript
import {MissionControl} from 'mission_control';
let defaultClient = MissionControl.ApiClient.instance;


let apiInstance = new MissionControl.ListsApi();
let opts = { 
  'page': 56, // Number | The page of the current collection that shall be returned
  'perPage': 100 // Number | The maximum number of items included in the response, ie., the page size
};
apiInstance.listsGet(opts).then((data) => {
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


let apiInstance = new MissionControl.ListsApi();
let listId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 

apiInstance.listsListIdDelete(listId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
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


let apiInstance = new MissionControl.ListsApi();
let listId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 

apiInstance.listsListIdGet(listId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
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

<a name="listsListIdMembersGet"></a>
# **listsListIdMembersGet**
> [ListMember] listsListIdMembersGet(listId, opts)



Returns all members in a specific list. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: &#x60;mission_control.lists.r&#x60;

### Example
```javascript
import {MissionControl} from 'mission_control';
let defaultClient = MissionControl.ApiClient.instance;


let apiInstance = new MissionControl.ListsApi();
let listId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 
let opts = { 
  'page': 56, // Number | The page of the current collection that shall be returned
  'perPage': 100 // Number | The maximum number of items included in the response, ie., the page size
};
apiInstance.listsListIdMembersGet(listId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **listId** | [**String**](.md)|  | 
 **page** | **Number**| The page of the current collection that shall be returned | [optional] 
 **perPage** | **Number**| The maximum number of items included in the response, ie., the page size | [optional] [default to 100]

### Return type

[**[ListMember]**](ListMember.md)

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


let apiInstance = new MissionControl.ListsApi();
let body = new MissionControl.ListsListIdBody(); // ListsListIdBody | 
let listId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 

apiInstance.listsListIdPatch(body, listId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
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


let apiInstance = new MissionControl.ListsApi();
let listId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 
let opts = { 
  'page': 56, // Number | The page of the current collection that shall be returned
  'perPage': 100 // Number | The maximum number of items included in the response, ie., the page size
};
apiInstance.listsListIdPredicatesGet(listId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
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


let apiInstance = new MissionControl.ListsApi();
let body = new MissionControl.ListIdPredicatesBody(); // ListIdPredicatesBody | 
let listId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 

apiInstance.listsListIdPredicatesPost(body, listId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
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


let apiInstance = new MissionControl.ListsApi();
let body = new MissionControl.ListsBody(); // ListsBody | 

apiInstance.listsPost(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
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

<a name="predicatesPredicateIdDelete"></a>
# **predicatesPredicateIdDelete**
> predicatesPredicateIdDelete(predicateId)



Removes a predicate. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: &#x60;mission_control.lists.w&#x60;

### Example
```javascript
import {MissionControl} from 'mission_control';
let defaultClient = MissionControl.ApiClient.instance;


let apiInstance = new MissionControl.ListsApi();
let predicateId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 

apiInstance.predicatesPredicateIdDelete(predicateId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
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


let apiInstance = new MissionControl.ListsApi();
let predicateId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 

apiInstance.predicatesPredicateIdGet(predicateId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
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


let apiInstance = new MissionControl.ListsApi();
let body = new MissionControl.PredicatesPredicateIdBody(); // PredicatesPredicateIdBody | 
let predicateId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 

apiInstance.predicatesPredicateIdPatch(body, predicateId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
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


let apiInstance = new MissionControl.ListsApi();
let predicateId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 
let opts = { 
  'page': 56, // Number | The page of the current collection that shall be returned
  'perPage': 100 // Number | The maximum number of items included in the response, ie., the page size
};
apiInstance.predicatesPredicateIdRulesGet(predicateId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
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


let apiInstance = new MissionControl.ListsApi();
let body = new MissionControl.PredicateIdRulesBody(); // PredicateIdRulesBody | 
let predicateId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 

apiInstance.predicatesPredicateIdRulesPost(body, predicateId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
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

<a name="rulesRuleIdDelete"></a>
# **rulesRuleIdDelete**
> rulesRuleIdDelete(ruleId)



Removes a rule. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: &#x60;mission_control.lists.w&#x60;

### Example
```javascript
import {MissionControl} from 'mission_control';
let defaultClient = MissionControl.ApiClient.instance;


let apiInstance = new MissionControl.ListsApi();
let ruleId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 

apiInstance.rulesRuleIdDelete(ruleId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
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


let apiInstance = new MissionControl.ListsApi();
let ruleId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 

apiInstance.rulesRuleIdGet(ruleId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
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


let apiInstance = new MissionControl.ListsApi();
let body = new MissionControl.RulesRuleIdBody(); // RulesRuleIdBody | 
let ruleId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 

apiInstance.rulesRuleIdPatch(body, ruleId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
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

