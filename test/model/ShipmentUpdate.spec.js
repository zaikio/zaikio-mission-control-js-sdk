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
    describe('ShipmentUpdate', function() {
      beforeEach(function() {
        instance = new MissionControl.ShipmentUpdate();
      });

      it('should create an instance of ShipmentUpdate', function() {
        // TODO: update the code to test ShipmentUpdate
        expect(instance).to.be.a(MissionControl.ShipmentUpdate);
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

      it('should have the property costs (base name: "costs")', function() {
        // TODO: update the code to test the property costs
        expect(instance).to.have.property('costs');
        // expect(instance.costs).to.be(expectedValueLiteral);
      });

      it('should have the property incoterm (base name: "incoterm")', function() {
        // TODO: update the code to test the property incoterm
        expect(instance).to.have.property('incoterm');
        // expect(instance.incoterm).to.be(expectedValueLiteral);
      });

      it('should have the property carrierKind (base name: "carrier_kind")', function() {
        // TODO: update the code to test the property carrierKind
        expect(instance).to.have.property('carrierKind');
        // expect(instance.carrierKind).to.be(expectedValueLiteral);
      });

      it('should have the property carrierName (base name: "carrier_name")', function() {
        // TODO: update the code to test the property carrierName
        expect(instance).to.have.property('carrierName');
        // expect(instance.carrierName).to.be(expectedValueLiteral);
      });

      it('should have the property carrierService (base name: "carrier_service")', function() {
        // TODO: update the code to test the property carrierService
        expect(instance).to.have.property('carrierService');
        // expect(instance.carrierService).to.be(expectedValueLiteral);
      });

      it('should have the property deliveryContactEmail (base name: "delivery_contact_email")', function() {
        // TODO: update the code to test the property deliveryContactEmail
        expect(instance).to.have.property('deliveryContactEmail');
        // expect(instance.deliveryContactEmail).to.be(expectedValueLiteral);
      });

      it('should have the property deliveryContactPhone (base name: "delivery_contact_phone")', function() {
        // TODO: update the code to test the property deliveryContactPhone
        expect(instance).to.have.property('deliveryContactPhone');
        // expect(instance.deliveryContactPhone).to.be(expectedValueLiteral);
      });

      it('should have the property deliveryInstructions (base name: "delivery_instructions")', function() {
        // TODO: update the code to test the property deliveryInstructions
        expect(instance).to.have.property('deliveryInstructions');
        // expect(instance.deliveryInstructions).to.be(expectedValueLiteral);
      });

      it('should have the property deliveryRequirements (base name: "delivery_requirements")', function() {
        // TODO: update the code to test the property deliveryRequirements
        expect(instance).to.have.property('deliveryRequirements');
        // expect(instance.deliveryRequirements).to.be(expectedValueLiteral);
      });

      it('should have the property whiteLabel (base name: "white_label")', function() {
        // TODO: update the code to test the property whiteLabel
        expect(instance).to.have.property('whiteLabel');
        // expect(instance.whiteLabel).to.be(expectedValueLiteral);
      });

      it('should have the property expectedDeliveryAt (base name: "expected_delivery_at")', function() {
        // TODO: update the code to test the property expectedDeliveryAt
        expect(instance).to.have.property('expectedDeliveryAt');
        // expect(instance.expectedDeliveryAt).to.be(expectedValueLiteral);
      });

      it('should have the property deliveredAt (base name: "delivered_at")', function() {
        // TODO: update the code to test the property deliveredAt
        expect(instance).to.have.property('deliveredAt');
        // expect(instance.deliveredAt).to.be(expectedValueLiteral);
      });

    });
  });

}));