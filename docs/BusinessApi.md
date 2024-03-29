# MissionControl.BusinessApi

All URIs are relative to *https://mc.zaikio.com/api/v1/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**orderLineItemsOrderLineItemIdDelete**](BusinessApi.md#orderLineItemsOrderLineItemIdDelete) | **DELETE** /order_line_items/{order_line_item_id} | 
[**orderLineItemsOrderLineItemIdGet**](BusinessApi.md#orderLineItemsOrderLineItemIdGet) | **GET** /order_line_items/{order_line_item_id} | 
[**orderLineItemsOrderLineItemIdPatch**](BusinessApi.md#orderLineItemsOrderLineItemIdPatch) | **PATCH** /order_line_items/{order_line_item_id} | 
[**ordersGet**](BusinessApi.md#ordersGet) | **GET** /orders | 
[**ordersOrderIdAddressDelete**](BusinessApi.md#ordersOrderIdAddressDelete) | **DELETE** /orders/{order_id}/address | 
[**ordersOrderIdAddressGet**](BusinessApi.md#ordersOrderIdAddressGet) | **GET** /orders/{order_id}/address | 
[**ordersOrderIdAddressPatch**](BusinessApi.md#ordersOrderIdAddressPatch) | **PATCH** /orders/{order_id}/address | 
[**ordersOrderIdAddressPost**](BusinessApi.md#ordersOrderIdAddressPost) | **POST** /orders/{order_id}/address | 
[**ordersOrderIdDelete**](BusinessApi.md#ordersOrderIdDelete) | **DELETE** /orders/{order_id} | 
[**ordersOrderIdGet**](BusinessApi.md#ordersOrderIdGet) | **GET** /orders/{order_id} | 
[**ordersOrderIdOrderLineItemsGet**](BusinessApi.md#ordersOrderIdOrderLineItemsGet) | **GET** /orders/{order_id}/order_line_items | 
[**ordersOrderIdOrderLineItemsPost**](BusinessApi.md#ordersOrderIdOrderLineItemsPost) | **POST** /orders/{order_id}/order_line_items | 
[**ordersOrderIdPatch**](BusinessApi.md#ordersOrderIdPatch) | **PATCH** /orders/{order_id} | 
[**ordersOrderIdPaymentTermsDelete**](BusinessApi.md#ordersOrderIdPaymentTermsDelete) | **DELETE** /orders/{order_id}/payment_terms | 
[**ordersOrderIdPaymentTermsGet**](BusinessApi.md#ordersOrderIdPaymentTermsGet) | **GET** /orders/{order_id}/payment_terms | 
[**ordersOrderIdPaymentTermsPatch**](BusinessApi.md#ordersOrderIdPaymentTermsPatch) | **PATCH** /orders/{order_id}/payment_terms | 
[**ordersOrderIdPaymentTermsPost**](BusinessApi.md#ordersOrderIdPaymentTermsPost) | **POST** /orders/{order_id}/payment_terms | 
[**ordersOrderIdStateTransitionsGet**](BusinessApi.md#ordersOrderIdStateTransitionsGet) | **GET** /orders/{order_id}/state_transitions | 
[**ordersOrderIdStateTransitionsPost**](BusinessApi.md#ordersOrderIdStateTransitionsPost) | **POST** /orders/{order_id}/state_transitions | 
[**ordersOrderIdStateTransitionsStateTransitionIdGet**](BusinessApi.md#ordersOrderIdStateTransitionsStateTransitionIdGet) | **GET** /orders/{order_id}/state_transitions/{state_transition_id} | 
[**ordersPost**](BusinessApi.md#ordersPost) | **POST** /orders | 

<a name="orderLineItemsOrderLineItemIdDelete"></a>
# **orderLineItemsOrderLineItemIdDelete**
> orderLineItemsOrderLineItemIdDelete(orderLineItemId)



Removes or specific order line item. Please not that removing line items is only possible                             if the parent order is still in a &#x60;draft&#x60; state. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: 

### Example
```javascript
import {MissionControl} from 'mission_control';
let defaultClient = MissionControl.ApiClient.instance;


let apiInstance = new MissionControl.BusinessApi();
let orderLineItemId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 

apiInstance.orderLineItemsOrderLineItemIdDelete(orderLineItemId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderLineItemId** | [**String**](.md)|  | 

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="orderLineItemsOrderLineItemIdGet"></a>
# **orderLineItemsOrderLineItemIdGet**
> OrderLineItem orderLineItemsOrderLineItemIdGet(orderLineItemId)



Returns a specific order line item. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: &#x60;mission_control.orders.r&#x60;

### Example
```javascript
import {MissionControl} from 'mission_control';
let defaultClient = MissionControl.ApiClient.instance;


let apiInstance = new MissionControl.BusinessApi();
let orderLineItemId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 

apiInstance.orderLineItemsOrderLineItemIdGet(orderLineItemId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderLineItemId** | [**String**](.md)|  | 

### Return type

[**OrderLineItem**](OrderLineItem.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="orderLineItemsOrderLineItemIdPatch"></a>
# **orderLineItemsOrderLineItemIdPatch**
> OrderLineItem orderLineItemsOrderLineItemIdPatch(body, orderLineItemId)



Modifies a specfic order line item. Please not that any modifications to order line items                           are only possible as long as the parent order is in a &#x60;draft&#x60; state. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: 

### Example
```javascript
import {MissionControl} from 'mission_control';
let defaultClient = MissionControl.ApiClient.instance;


let apiInstance = new MissionControl.BusinessApi();
let body = new MissionControl.OrderLineItemsOrderLineItemIdBody(); // OrderLineItemsOrderLineItemIdBody | 
let orderLineItemId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 

apiInstance.orderLineItemsOrderLineItemIdPatch(body, orderLineItemId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**OrderLineItemsOrderLineItemIdBody**](OrderLineItemsOrderLineItemIdBody.md)|  | 
 **orderLineItemId** | [**String**](.md)|  | 

### Return type

[**OrderLineItem**](OrderLineItem.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="ordersGet"></a>
# **ordersGet**
> [Order] ordersGet(opts)



Returns all orders that have already been confirmed. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: &#x60;mission_control.orders.r&#x60;

### Example
```javascript
import {MissionControl} from 'mission_control';
let defaultClient = MissionControl.ApiClient.instance;


let apiInstance = new MissionControl.BusinessApi();
let opts = { 
  'page': 56, // Number | The page of the current collection that shall be returned
  'perPage': 100 // Number | The maximum number of items included in the response, ie., the page size
};
apiInstance.ordersGet(opts).then((data) => {
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

[**[Order]**](Order.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="ordersOrderIdAddressDelete"></a>
# **ordersOrderIdAddressDelete**
> ordersOrderIdAddressDelete(orderId)



Removes the address from a specific order as long as the order is in a &#x60;draft&#x60; state. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: 

### Example
```javascript
import {MissionControl} from 'mission_control';
let defaultClient = MissionControl.ApiClient.instance;


let apiInstance = new MissionControl.BusinessApi();
let orderId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 

apiInstance.ordersOrderIdAddressDelete(orderId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderId** | [**String**](.md)|  | 

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="ordersOrderIdAddressGet"></a>
# **ordersOrderIdAddressGet**
> Address ordersOrderIdAddressGet(orderId)



Returns the address for this order. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: &#x60;mission-control.orders.r&#x60;

### Example
```javascript
import {MissionControl} from 'mission_control';
let defaultClient = MissionControl.ApiClient.instance;


let apiInstance = new MissionControl.BusinessApi();
let orderId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 

apiInstance.ordersOrderIdAddressGet(orderId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderId** | [**String**](.md)|  | 

### Return type

[**Address**](Address.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="ordersOrderIdAddressPatch"></a>
# **ordersOrderIdAddressPatch**
> Address ordersOrderIdAddressPatch(body, orderId)



Modifies the address from a specific order as long as                   the order is still in a &#x60;draft&#x60; state. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: 

### Example
```javascript
import {MissionControl} from 'mission_control';
let defaultClient = MissionControl.ApiClient.instance;


let apiInstance = new MissionControl.BusinessApi();
let body = new MissionControl.OrderIdAddressBody1(); // OrderIdAddressBody1 | 
let orderId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 

apiInstance.ordersOrderIdAddressPatch(body, orderId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**OrderIdAddressBody1**](OrderIdAddressBody1.md)|  | 
 **orderId** | [**String**](.md)|  | 

### Return type

[**Address**](Address.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="ordersOrderIdAddressPost"></a>
# **ordersOrderIdAddressPost**
> Address ordersOrderIdAddressPost(body, orderId)



Creates new address. If an address is already present, it will be overwritten.                   Creating an address is only possible as long as the order is in a &#x60;draft&#x60; state. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: 

### Example
```javascript
import {MissionControl} from 'mission_control';
let defaultClient = MissionControl.ApiClient.instance;


let apiInstance = new MissionControl.BusinessApi();
let body = new MissionControl.OrderIdAddressBody(); // OrderIdAddressBody | 
let orderId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 

apiInstance.ordersOrderIdAddressPost(body, orderId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**OrderIdAddressBody**](OrderIdAddressBody.md)|  | 
 **orderId** | [**String**](.md)|  | 

### Return type

[**Address**](Address.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="ordersOrderIdDelete"></a>
# **ordersOrderIdDelete**
> ordersOrderIdDelete(orderId)



 - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: 

### Example
```javascript
import {MissionControl} from 'mission_control';
let defaultClient = MissionControl.ApiClient.instance;


let apiInstance = new MissionControl.BusinessApi();
let orderId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 

apiInstance.ordersOrderIdDelete(orderId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderId** | [**String**](.md)|  | 

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="ordersOrderIdGet"></a>
# **ordersOrderIdGet**
> InlineResponse2012 ordersOrderIdGet(orderId)



Returns a specific order, including the address, payment terms and line items. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: &#x60;mission_control.orders.r&#x60;

### Example
```javascript
import {MissionControl} from 'mission_control';
let defaultClient = MissionControl.ApiClient.instance;


let apiInstance = new MissionControl.BusinessApi();
let orderId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 

apiInstance.ordersOrderIdGet(orderId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderId** | [**String**](.md)|  | 

### Return type

[**InlineResponse2012**](InlineResponse2012.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="ordersOrderIdOrderLineItemsGet"></a>
# **ordersOrderIdOrderLineItemsGet**
> [OrderLineItem] ordersOrderIdOrderLineItemsGet(orderId, opts)



Returns all line item of a specific order. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: &#x60;mission_control.orders.r&#x60;

### Example
```javascript
import {MissionControl} from 'mission_control';
let defaultClient = MissionControl.ApiClient.instance;


let apiInstance = new MissionControl.BusinessApi();
let orderId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 
let opts = { 
  'page': 56, // Number | The page of the current collection that shall be returned
  'perPage': 100 // Number | The maximum number of items included in the response, ie., the page size
};
apiInstance.ordersOrderIdOrderLineItemsGet(orderId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderId** | [**String**](.md)|  | 
 **page** | **Number**| The page of the current collection that shall be returned | [optional] 
 **perPage** | **Number**| The maximum number of items included in the response, ie., the page size | [optional] [default to 100]

### Return type

[**[OrderLineItem]**](OrderLineItem.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="ordersOrderIdOrderLineItemsPost"></a>
# **ordersOrderIdOrderLineItemsPost**
> OrderLineItem ordersOrderIdOrderLineItemsPost(body, orderId)



Creates a new order line item and attaches it to an order. Please note that line items can                           only be added to orders in a &#x60;draft&#x60; state. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: 

### Example
```javascript
import {MissionControl} from 'mission_control';
let defaultClient = MissionControl.ApiClient.instance;


let apiInstance = new MissionControl.BusinessApi();
let body = new MissionControl.OrderIdOrderLineItemsBody(); // OrderIdOrderLineItemsBody | 
let orderId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 

apiInstance.ordersOrderIdOrderLineItemsPost(body, orderId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**OrderIdOrderLineItemsBody**](OrderIdOrderLineItemsBody.md)|  | 
 **orderId** | [**String**](.md)|  | 

### Return type

[**OrderLineItem**](OrderLineItem.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="ordersOrderIdPatch"></a>
# **ordersOrderIdPatch**
> InlineResponse2012 ordersOrderIdPatch(body, orderId)



 - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: 

### Example
```javascript
import {MissionControl} from 'mission_control';
let defaultClient = MissionControl.ApiClient.instance;


let apiInstance = new MissionControl.BusinessApi();
let body = new MissionControl.OrdersOrderIdBody(); // OrdersOrderIdBody | 
let orderId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 

apiInstance.ordersOrderIdPatch(body, orderId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**OrdersOrderIdBody**](OrdersOrderIdBody.md)|  | 
 **orderId** | [**String**](.md)|  | 

### Return type

[**InlineResponse2012**](InlineResponse2012.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="ordersOrderIdPaymentTermsDelete"></a>
# **ordersOrderIdPaymentTermsDelete**
> ordersOrderIdPaymentTermsDelete(orderId)



Removes the payment terms. Removing the payment terms is only possible while                             the order is still in a &#x60;draft&#x60; state. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: 

### Example
```javascript
import {MissionControl} from 'mission_control';
let defaultClient = MissionControl.ApiClient.instance;


let apiInstance = new MissionControl.BusinessApi();
let orderId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 

apiInstance.ordersOrderIdPaymentTermsDelete(orderId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderId** | [**String**](.md)|  | 

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="ordersOrderIdPaymentTermsGet"></a>
# **ordersOrderIdPaymentTermsGet**
> PaymentTerms ordersOrderIdPaymentTermsGet(orderId)



Returns the payment terms for the specified order. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: &#x60;mission_control.orders.r&#x60;

### Example
```javascript
import {MissionControl} from 'mission_control';
let defaultClient = MissionControl.ApiClient.instance;


let apiInstance = new MissionControl.BusinessApi();
let orderId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 

apiInstance.ordersOrderIdPaymentTermsGet(orderId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderId** | [**String**](.md)|  | 

### Return type

[**PaymentTerms**](PaymentTerms.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="ordersOrderIdPaymentTermsPatch"></a>
# **ordersOrderIdPaymentTermsPatch**
> PaymentTerms ordersOrderIdPaymentTermsPatch(body, orderId)



Modifies existing payment terms for the specified order. If payment terms already                           exist they will be overwritten. Creating payment terms is only possible as long as                           the order is in a &#x60;draft&#x60; state. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: 

### Example
```javascript
import {MissionControl} from 'mission_control';
let defaultClient = MissionControl.ApiClient.instance;


let apiInstance = new MissionControl.BusinessApi();
let body = new MissionControl.OrderIdPaymentTermsBody1(); // OrderIdPaymentTermsBody1 | 
let orderId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 

apiInstance.ordersOrderIdPaymentTermsPatch(body, orderId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**OrderIdPaymentTermsBody1**](OrderIdPaymentTermsBody1.md)|  | 
 **orderId** | [**String**](.md)|  | 

### Return type

[**PaymentTerms**](PaymentTerms.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="ordersOrderIdPaymentTermsPost"></a>
# **ordersOrderIdPaymentTermsPost**
> PaymentTerms ordersOrderIdPaymentTermsPost(body, orderId)



Creates a new payment terms for the specified order. If payment terms already                           exist they will be overwritten. Creating payment terms is only possible as long                           as the order is in a &#x60;draft&#x60; state. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: 

### Example
```javascript
import {MissionControl} from 'mission_control';
let defaultClient = MissionControl.ApiClient.instance;


let apiInstance = new MissionControl.BusinessApi();
let body = new MissionControl.OrderIdPaymentTermsBody(); // OrderIdPaymentTermsBody | 
let orderId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 

apiInstance.ordersOrderIdPaymentTermsPost(body, orderId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**OrderIdPaymentTermsBody**](OrderIdPaymentTermsBody.md)|  | 
 **orderId** | [**String**](.md)|  | 

### Return type

[**PaymentTerms**](PaymentTerms.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="ordersOrderIdStateTransitionsGet"></a>
# **ordersOrderIdStateTransitionsGet**
> [OrderStateTransition] ordersOrderIdStateTransitionsGet(orderId, opts)



List transitions for a given Order, chronologically from most recent to oldest - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: &#x60;mission_control.orders.r&#x60; or &#x60;mission_control.orders.rw&#x60;

### Example
```javascript
import {MissionControl} from 'mission_control';
let defaultClient = MissionControl.ApiClient.instance;


let apiInstance = new MissionControl.BusinessApi();
let orderId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 
let opts = { 
  'page': 56, // Number | The page of the current collection that shall be returned
  'perPage': 100 // Number | The maximum number of items included in the response, ie., the page size
};
apiInstance.ordersOrderIdStateTransitionsGet(orderId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderId** | [**String**](.md)|  | 
 **page** | **Number**| The page of the current collection that shall be returned | [optional] 
 **perPage** | **Number**| The maximum number of items included in the response, ie., the page size | [optional] [default to 100]

### Return type

[**[OrderStateTransition]**](OrderStateTransition.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="ordersOrderIdStateTransitionsPost"></a>
# **ordersOrderIdStateTransitionsPost**
> OrderStateTransition ordersOrderIdStateTransitionsPost(body, orderId)



Transition an Order to a new state - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: &#x60;mission_control.orders.w&#x60; or &#x60;mission_control.orders.rw&#x60;

### Example
```javascript
import {MissionControl} from 'mission_control';
let defaultClient = MissionControl.ApiClient.instance;


let apiInstance = new MissionControl.BusinessApi();
let body = new MissionControl.OrderIdStateTransitionsBody(); // OrderIdStateTransitionsBody | 
let orderId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 

apiInstance.ordersOrderIdStateTransitionsPost(body, orderId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**OrderIdStateTransitionsBody**](OrderIdStateTransitionsBody.md)|  | 
 **orderId** | [**String**](.md)|  | 

### Return type

[**OrderStateTransition**](OrderStateTransition.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="ordersOrderIdStateTransitionsStateTransitionIdGet"></a>
# **ordersOrderIdStateTransitionsStateTransitionIdGet**
> OrderStateTransition ordersOrderIdStateTransitionsStateTransitionIdGet(orderId, stateTransitionId)



Display a given transition - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: &#x60;mission_control.orders.r&#x60; or &#x60;mission_control.orders.rw&#x60;

### Example
```javascript
import {MissionControl} from 'mission_control';
let defaultClient = MissionControl.ApiClient.instance;


let apiInstance = new MissionControl.BusinessApi();
let orderId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 
let stateTransitionId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 

apiInstance.ordersOrderIdStateTransitionsStateTransitionIdGet(orderId, stateTransitionId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderId** | [**String**](.md)|  | 
 **stateTransitionId** | [**String**](.md)|  | 

### Return type

[**OrderStateTransition**](OrderStateTransition.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="ordersPost"></a>
# **ordersPost**
> InlineResponse2012 ordersPost(body)



Creates a new order with the given properties. The order will be in state &#x60;draft&#x60; and can be modified as long as that is the case. You can also supply nested properties for line items and the address. DESC, update: &lt;&lt;-DESC.squish Modifies a specific order. Please note that changes are only possible while the order is in &#x60;draft&#x60; state. DESC, destroy: &lt;&lt;-DESC.squish Removes a specific order as long as it still is in &#x60;draft&#x60; state, otherwise the order is set to the &#x60;canceled&#x60; state. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: 

### Example
```javascript
import {MissionControl} from 'mission_control';
let defaultClient = MissionControl.ApiClient.instance;


let apiInstance = new MissionControl.BusinessApi();
let body = new MissionControl.OrdersBody(); // OrdersBody | 

apiInstance.ordersPost(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**OrdersBody**](OrdersBody.md)|  | 

### Return type

[**InlineResponse2012**](InlineResponse2012.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

