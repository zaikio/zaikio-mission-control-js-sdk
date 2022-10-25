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
    describe('InlineResponse201', function() {
      beforeEach(function() {
        instance = new MissionControl.InlineResponse201();
      });

      it('should create an instance of InlineResponse201', function() {
        // TODO: update the code to test InlineResponse201
        expect(instance).to.be.a(MissionControl.InlineResponse201);
      });

      it('should have the property workstepGroups (base name: "workstep_groups")', function() {
        // TODO: update the code to test the property workstepGroups
        expect(instance).to.have.property('workstepGroups');
        // expect(instance.workstepGroups).to.be(expectedValueLiteral);
      });

      it('should have the property worksteps (base name: "worksteps")', function() {
        // TODO: update the code to test the property worksteps
        expect(instance).to.have.property('worksteps');
        // expect(instance.worksteps).to.be(expectedValueLiteral);
      });

      it('should have the property intermediateProducts (base name: "intermediate_products")', function() {
        // TODO: update the code to test the property intermediateProducts
        expect(instance).to.have.property('intermediateProducts');
        // expect(instance.intermediateProducts).to.be(expectedValueLiteral);
      });

      it('should have the property finishedProduct (base name: "finished_product")', function() {
        // TODO: update the code to test the property finishedProduct
        expect(instance).to.have.property('finishedProduct');
        // expect(instance.finishedProduct).to.be(expectedValueLiteral);
      });

    });
  });

}));