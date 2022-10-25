/*
 * Mission Control
 * This is the documentation of all API endpoints provided by Mission Control.  ## Provided OAuth Scopes - `mission_control.commissionings.r` [`Commissioning`]: Read information of all commissionings - `mission_control.commissionings.w` [`Commissioning`]: Create or update commissioning related models - `mission_control.estimates.r` [`Estimate`]: Read information of all Estimates - `mission_control.estimates.w` [`Estimate`]: Create or update all kinds of Estimates - `mission_control.lists.r` [`List`]: Read information of all List objects - `mission_control.lists.r` [`List`]: Create or update List objects - `mission_control.orders.r` [`Order`]: Read information of all orders - `mission_control.orders.w` [`Order`]: Create or update new orders - `mission_control.jobs.r` [`Job`]: Read basic information of all jobs currently or formerly in production (`GET /jobs/_*`) - `mission_control.jobs.w` [`Job`]: Create or update new jobs (`POST /jobs/_*`, `PATCH /jobs/_*`) 
 *
 * OpenAPI spec version: 1.0.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.35
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
    describe('Order', function() {
      beforeEach(function() {
        instance = new MissionControl.Order();
      });

      it('should create an instance of Order', function() {
        // TODO: update the code to test Order
        expect(instance).to.be.a(MissionControl.Order);
      });

      it('should have the property id (base name: "id")', function() {
        // TODO: update the code to test the property id
        expect(instance).to.have.property('id');
        // expect(instance.id).to.be(expectedValueLiteral);
      });

      it('should have the property createdAt (base name: "created_at")', function() {
        // TODO: update the code to test the property createdAt
        expect(instance).to.have.property('createdAt');
        // expect(instance.createdAt).to.be(expectedValueLiteral);
      });

      it('should have the property updatedAt (base name: "updated_at")', function() {
        // TODO: update the code to test the property updatedAt
        expect(instance).to.have.property('updatedAt');
        // expect(instance.updatedAt).to.be(expectedValueLiteral);
      });

      it('should have the property references (base name: "references")', function() {
        // TODO: update the code to test the property references
        expect(instance).to.have.property('references');
        // expect(instance.references).to.be(expectedValueLiteral);
      });

      it('should have the property state (base name: "state")', function() {
        // TODO: update the code to test the property state
        expect(instance).to.have.property('state');
        // expect(instance.state).to.be(expectedValueLiteral);
      });

      it('should have the property currency (base name: "currency")', function() {
        // TODO: update the code to test the property currency
        expect(instance).to.have.property('currency');
        // expect(instance.currency).to.be(expectedValueLiteral);
      });

      it('should have the property netTotal (base name: "net_total")', function() {
        // TODO: update the code to test the property netTotal
        expect(instance).to.have.property('netTotal');
        // expect(instance.netTotal).to.be(expectedValueLiteral);
      });

      it('should have the property grossTotal (base name: "gross_total")', function() {
        // TODO: update the code to test the property grossTotal
        expect(instance).to.have.property('grossTotal');
        // expect(instance.grossTotal).to.be(expectedValueLiteral);
      });

      it('should have the property taxes (base name: "taxes")', function() {
        // TODO: update the code to test the property taxes
        expect(instance).to.have.property('taxes');
        // expect(instance.taxes).to.be(expectedValueLiteral);
      });

      it('should have the property confirmedAt (base name: "confirmed_at")', function() {
        // TODO: update the code to test the property confirmedAt
        expect(instance).to.have.property('confirmedAt');
        // expect(instance.confirmedAt).to.be(expectedValueLiteral);
      });

      it('should have the property canceledAt (base name: "canceled_at")', function() {
        // TODO: update the code to test the property canceledAt
        expect(instance).to.have.property('canceledAt');
        // expect(instance.canceledAt).to.be(expectedValueLiteral);
      });

      it('should have the property fulfilledAt (base name: "fulfilled_at")', function() {
        // TODO: update the code to test the property fulfilledAt
        expect(instance).to.have.property('fulfilledAt');
        // expect(instance.fulfilledAt).to.be(expectedValueLiteral);
      });

    });
  });

}));
