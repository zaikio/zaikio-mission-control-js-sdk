# MissionControl.PaymentTerms

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** |  | 
**createdAt** | **Date** |  | 
**updatedAt** | **Date** |  | 
**mode** | **String** | A hint that allows anybody involved with the payment to understand in more detail which mean so of payment was used. For credit cards this might be the last four digits (under no circumstances must you provide the full number!). For digital means of payment, such as PayPal, Apple Pay or Google Pay this might be the respective transaction number. For bank collection this might be a bank account number or IBAN. For invoice this might be an invoice number or left blank. For wire transfer this might be the receivers bank account number or IBAN. For cash this field is best left blank. | 
**meansOfPayment** | **String** | The financial instrument used to pay for this order | 
**meansOfPaymentHint** | **String** | A hint that allows anybody involved with the payment to understand in more detail which mean so of payment was used. For credit cards this might be the last four digits (under no circumstances must you provide the full number!). For digital means of payment, such as PayPal, Apple Pay or Google Pay this might be the respective transaction number. For bank collection this might be a bank account number or IBAN. For invoice this might be an invoice number or left blank. For wire transfer this might be the receivers bank account number or IBAN. For cash this field is best left blank. | 
**cashDiscount** | **String** | A decimal representation of a percentage of the payable order gross total that will be discounted if the amount due is paid within the timeframe specified in the &#x60;cash_discount_timeframe&#x60; attribute. For example a 3% cash discount can be granted when the order is paid within 10 days. This has no effect on the order total&#x27;s, as the customer is expected to subtract the discount themselves from the order&#x27;s gross total. | 
**cashDiscountTimeframe** | **Number** | The amount of days after which the order must be paid to entitle the customer to a cash discount. Must be set once the &#x60;cash_discount&#x60; attribute is set. | 
**dueAt** | **Date** | The date at which this order was paid in full. | 
**paidAt** | **Date** | The date at which the full order gross total is due. | 

<a name="ModeEnum"></a>
## Enum: ModeEnum

* `collecting` (value: `"collecting"`)
* `postpaid` (value: `"postpaid"`)
* `prepaid` (value: `"prepaid"`)


<a name="MeansOfPaymentEnum"></a>
## Enum: MeansOfPaymentEnum

* `applePay` (value: `"apple_pay"`)
* `bankCollection` (value: `"bank_collection"`)
* `cash` (value: `"cash"`)
* `creditCard` (value: `"credit_card"`)
* `googlePay` (value: `"google_pay"`)
* `invoice` (value: `"invoice"`)
* `paypal` (value: `"paypal"`)
* `wireTransfer` (value: `"wire_transfer"`)

