# MissionControl.CommercialApi

All URIs are relative to *https://mc.zaikio.com/api/v1/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**orderLineItemsOrderLineItemIdDelete**](CommercialApi.md#orderLineItemsOrderLineItemIdDelete) | **DELETE** /order_line_items/{order_line_item_id} | 
[**orderLineItemsOrderLineItemIdGet**](CommercialApi.md#orderLineItemsOrderLineItemIdGet) | **GET** /order_line_items/{order_line_item_id} | 
[**orderLineItemsOrderLineItemIdPatch**](CommercialApi.md#orderLineItemsOrderLineItemIdPatch) | **PATCH** /order_line_items/{order_line_item_id} | 
[**ordersGet**](CommercialApi.md#ordersGet) | **GET** /orders | 
[**ordersOrderIdAddressDelete**](CommercialApi.md#ordersOrderIdAddressDelete) | **DELETE** /orders/{order_id}/address | 
[**ordersOrderIdAddressGet**](CommercialApi.md#ordersOrderIdAddressGet) | **GET** /orders/{order_id}/address | 
[**ordersOrderIdAddressPatch**](CommercialApi.md#ordersOrderIdAddressPatch) | **PATCH** /orders/{order_id}/address | 
[**ordersOrderIdAddressPost**](CommercialApi.md#ordersOrderIdAddressPost) | **POST** /orders/{order_id}/address | 
[**ordersOrderIdDelete**](CommercialApi.md#ordersOrderIdDelete) | **DELETE** /orders/{order_id} | 
[**ordersOrderIdGet**](CommercialApi.md#ordersOrderIdGet) | **GET** /orders/{order_id} | 
[**ordersOrderIdOrderLineItemsGet**](CommercialApi.md#ordersOrderIdOrderLineItemsGet) | **GET** /orders/{order_id}/order_line_items | 
[**ordersOrderIdOrderLineItemsPost**](CommercialApi.md#ordersOrderIdOrderLineItemsPost) | **POST** /orders/{order_id}/order_line_items | 
[**ordersOrderIdPatch**](CommercialApi.md#ordersOrderIdPatch) | **PATCH** /orders/{order_id} | 
[**ordersOrderIdPaymentTermsDelete**](CommercialApi.md#ordersOrderIdPaymentTermsDelete) | **DELETE** /orders/{order_id}/payment_terms | 
[**ordersOrderIdPaymentTermsGet**](CommercialApi.md#ordersOrderIdPaymentTermsGet) | **GET** /orders/{order_id}/payment_terms | 
[**ordersOrderIdPaymentTermsPatch**](CommercialApi.md#ordersOrderIdPaymentTermsPatch) | **PATCH** /orders/{order_id}/payment_terms | 
[**ordersOrderIdPaymentTermsPost**](CommercialApi.md#ordersOrderIdPaymentTermsPost) | **POST** /orders/{order_id}/payment_terms | 
[**ordersPost**](CommercialApi.md#ordersPost) | **POST** /orders | 

<a name="orderLineItemsOrderLineItemIdDelete"></a>
# **orderLineItemsOrderLineItemIdDelete**
> orderLineItemsOrderLineItemIdDelete(orderLineItemId)



Removes or specific order line item. Please not that removing line items is only possible                             if the parent order is still in a &#x60;draft&#x60; state. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: 

### Example
```javascript
import {MissionControl} from 'mission_control';
let defaultClient = MissionControl.ApiClient.instance;


let apiInstance = new MissionControl.CommercialApi();
let orderLineItemId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 

apiInstance.orderLineItemsOrderLineItemIdDelete(orderLineItemId, (error, data, response) => {
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


let apiInstance = new MissionControl.CommercialApi();
let orderLineItemId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 

apiInstance.orderLineItemsOrderLineItemIdGet(orderLineItemId, (error, data, response) => {
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


let apiInstance = new MissionControl.CommercialApi();
let body = new MissionControl.OrderLineItemsOrderLineItemIdBody(); // OrderLineItemsOrderLineItemIdBody | 
let orderLineItemId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 

apiInstance.orderLineItemsOrderLineItemIdPatch(body, orderLineItemId, (error, data, response) => {
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


let apiInstance = new MissionControl.CommercialApi();
let opts = { 
  'page': 56, // Number | The page of the current collection that shall be returned
  'perPage': 100 // Number | The maximum number of items included in the response, ie., the page size
};
apiInstance.ordersGet(opts, (error, data, response) => {
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


let apiInstance = new MissionControl.CommercialApi();
let orderId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 

apiInstance.ordersOrderIdAddressDelete(orderId, (error, data, response) => {
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


let apiInstance = new MissionControl.CommercialApi();
let orderId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 

apiInstance.ordersOrderIdAddressGet(orderId, (error, data, response) => {
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


let apiInstance = new MissionControl.CommercialApi();
let body = new MissionControl.OrderIdAddressBody1(); // OrderIdAddressBody1 | 
let orderId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 

apiInstance.ordersOrderIdAddressPatch(body, orderId, (error, data, response) => {
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


let apiInstance = new MissionControl.CommercialApi();
let body = new MissionControl.OrderIdAddressBody(); // OrderIdAddressBody | 
let orderId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 

apiInstance.ordersOrderIdAddressPost(body, orderId, (error, data, response) => {
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



Removes a specific order as long as it still is in &#x60;draft&#x60; state, otherwise the order                           is set to the &#x60;canceled&#x60; state. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: 

### Example
```javascript
import {MissionControl} from 'mission_control';
let defaultClient = MissionControl.ApiClient.instance;


let apiInstance = new MissionControl.CommercialApi();
let orderId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 

apiInstance.ordersOrderIdDelete(orderId, (error, data, response) => {
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


let apiInstance = new MissionControl.CommercialApi();
let orderId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 

apiInstance.ordersOrderIdGet(orderId, (error, data, response) => {
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


let apiInstance = new MissionControl.CommercialApi();
let orderId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 
let opts = { 
  'page': 56, // Number | The page of the current collection that shall be returned
  'perPage': 100 // Number | The maximum number of items included in the response, ie., the page size
};
apiInstance.ordersOrderIdOrderLineItemsGet(orderId, opts, (error, data, response) => {
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


let apiInstance = new MissionControl.CommercialApi();
let body = new MissionControl.OrderIdOrderLineItemsBody(); // OrderIdOrderLineItemsBody | 
let orderId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 

apiInstance.ordersOrderIdOrderLineItemsPost(body, orderId, (error, data, response) => {
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



Modifies a specific order. Please note that changes are only possible while the order                         is in &#x60;draft&#x60; state. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: 

### Example
```javascript
import {MissionControl} from 'mission_control';
let defaultClient = MissionControl.ApiClient.instance;


let apiInstance = new MissionControl.CommercialApi();
let body = new MissionControl.OrdersOrderIdBody(); // OrdersOrderIdBody | 
let orderId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 

apiInstance.ordersOrderIdPatch(body, orderId, (error, data, response) => {
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


let apiInstance = new MissionControl.CommercialApi();
let orderId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 

apiInstance.ordersOrderIdPaymentTermsDelete(orderId, (error, data, response) => {
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


let apiInstance = new MissionControl.CommercialApi();
let orderId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 

apiInstance.ordersOrderIdPaymentTermsGet(orderId, (error, data, response) => {
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


let apiInstance = new MissionControl.CommercialApi();
let body = new MissionControl.OrderIdPaymentTermsBody1(); // OrderIdPaymentTermsBody1 | 
let orderId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 

apiInstance.ordersOrderIdPaymentTermsPatch(body, orderId, (error, data, response) => {
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


let apiInstance = new MissionControl.CommercialApi();
let body = new MissionControl.OrderIdPaymentTermsBody(); // OrderIdPaymentTermsBody | 
let orderId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 

apiInstance.ordersOrderIdPaymentTermsPost(body, orderId, (error, data, response) => {
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
 **body** | [**OrderIdPaymentTermsBody**](OrderIdPaymentTermsBody.md)|  | 
 **orderId** | [**String**](.md)|  | 

### Return type

[**PaymentTerms**](PaymentTerms.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="ordersPost"></a>
# **ordersPost**
> InlineResponse2012 ordersPost(body)



Creates a new order with the given properties. The order will be in state &#x60;draft&#x60; and                         can be modified as long as that is the case. You can also supply nested properties for                           line items and the address. - needed bearer: &#x60;Organization&#x60; or &#x60;Person&#x60; - needed scopes: 

### Example
```javascript
import {MissionControl} from 'mission_control';
let defaultClient = MissionControl.ApiClient.instance;


let apiInstance = new MissionControl.CommercialApi();
let body = new MissionControl.OrdersBody(); // OrdersBody | 

apiInstance.ordersPost(body, (error, data, response) => {
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
 **body** | [**OrdersBody**](OrdersBody.md)|  | 

### Return type

[**InlineResponse2012**](InlineResponse2012.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

