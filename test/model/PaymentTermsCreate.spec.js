/*
 * Mission Control
 * This is the documentation of all API endpoints provided by Mission Control.  ## Provided OAuth Scopes - `mission_control.commissionings.r` [`Commissioning`]: Read information of all commissionings - `mission_control.commissionings.w` [`Commissioning`]: Create or update commissioning related models - `mission_control.estimates.r` [`Estimate`]: Read information of all Estimates - `mission_control.estimates.w` [`Estimate`]: Create or update all kinds of Estimates - `mission_control.lists.r` [`List`]: Read information of all List objects - `mission_control.lists.r` [`List`]: Create or update List objects - `mission_control.orders.r` [`Order`]: Read information of all orders - `mission_control.orders.w` [`Order`]: Create or update new orders - `mission_control.jobs.r` [`Job`]: Read basic information of all jobs currently or formerly in production (`GET /jobs/_*`) - `mission_control.jobs.w` [`Job`]: Create or update new jobs (`POST /jobs/_*`, `PATCH /jobs/_*`) 
 *
 * OpenAPI spec version: 1.0.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.36
 *
 * Do not edit the class manually.
 *
 */
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.MissionControl);
  }
}(this, function(expect, MissionControl) {
  'use strict';

  var instance;

  describe('(package)', function() {
    describe('PaymentTermsCreate', function() {
      beforeEach(function() {
        instance = new MissionControl.PaymentTermsCreate();
      });

      it('should create an instance of PaymentTermsCreate', function() {
        // TODO: update the code to test PaymentTermsCreate
        expect(instance).to.be.a(MissionControl.PaymentTermsCreate);
      });

      it('should have the property mode (base name: "mode")', function() {
        // TODO: update the code to test the property mode
        expect(instance).to.have.property('mode');
        // expect(instance.mode).to.be(expectedValueLiteral);
      });

      it('should have the property meansOfPayment (base name: "means_of_payment")', function() {
        // TODO: update the code to test the property meansOfPayment
        expect(instance).to.have.property('meansOfPayment');
        // expect(instance.meansOfPayment).to.be(expectedValueLiteral);
      });

      it('should have the property meansOfPaymentHint (base name: "means_of_payment_hint")', function() {
        // TODO: update the code to test the property meansOfPaymentHint
        expect(instance).to.have.property('meansOfPaymentHint');
        // expect(instance.meansOfPaymentHint).to.be(expectedValueLiteral);
      });

      it('should have the property cashDiscount (base name: "cash_discount")', function() {
        // TODO: update the code to test the property cashDiscount
        expect(instance).to.have.property('cashDiscount');
        // expect(instance.cashDiscount).to.be(expectedValueLiteral);
      });

      it('should have the property cashDiscountTimeframe (base name: "cash_discount_timeframe")', function() {
        // TODO: update the code to test the property cashDiscountTimeframe
        expect(instance).to.have.property('cashDiscountTimeframe');
        // expect(instance.cashDiscountTimeframe).to.be(expectedValueLiteral);
      });

      it('should have the property dueAt (base name: "due_at")', function() {
        // TODO: update the code to test the property dueAt
        expect(instance).to.have.property('dueAt');
        // expect(instance.dueAt).to.be(expectedValueLiteral);
      });

      it('should have the property paidAt (base name: "paid_at")', function() {
        // TODO: update the code to test the property paidAt
        expect(instance).to.have.property('paidAt');
        // expect(instance.paidAt).to.be(expectedValueLiteral);
      });

    });
  });

}));
