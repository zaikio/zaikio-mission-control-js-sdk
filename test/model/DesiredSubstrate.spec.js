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
    describe('DesiredSubstrate', function() {
      beforeEach(function() {
        instance = new MissionControl.DesiredSubstrate();
      });

      it('should create an instance of DesiredSubstrate', function() {
        // TODO: update the code to test DesiredSubstrate
        expect(instance).to.be.a(MissionControl.DesiredSubstrate);
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

      it('should have the property uniqueMaterialIdentifier (base name: "unique_material_identifier")', function() {
        // TODO: update the code to test the property uniqueMaterialIdentifier
        expect(instance).to.have.property('uniqueMaterialIdentifier');
        // expect(instance.uniqueMaterialIdentifier).to.be(expectedValueLiteral);
      });

      it('should have the property category (base name: "category")', function() {
        // TODO: update the code to test the property category
        expect(instance).to.have.property('category');
        // expect(instance.category).to.be(expectedValueLiteral);
      });

      it('should have the property paperWeight (base name: "paper_weight")', function() {
        // TODO: update the code to test the property paperWeight
        expect(instance).to.have.property('paperWeight');
        // expect(instance.paperWeight).to.be(expectedValueLiteral);
      });

      it('should have the property paperWeightUnit (base name: "paper_weight_unit")', function() {
        // TODO: update the code to test the property paperWeightUnit
        expect(instance).to.have.property('paperWeightUnit');
        // expect(instance.paperWeightUnit).to.be(expectedValueLiteral);
      });

      it('should have the property coating (base name: "coating")', function() {
        // TODO: update the code to test the property coating
        expect(instance).to.have.property('coating');
        // expect(instance.coating).to.be(expectedValueLiteral);
      });

      it('should have the property grain (base name: "grain")', function() {
        // TODO: update the code to test the property grain
        expect(instance).to.have.property('grain');
        // expect(instance.grain).to.be(expectedValueLiteral);
      });

    });
  });

}));
