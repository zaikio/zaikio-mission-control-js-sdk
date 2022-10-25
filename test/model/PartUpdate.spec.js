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
    describe('PartUpdate', function() {
      beforeEach(function() {
        instance = new MissionControl.PartUpdate();
      });

      it('should create an instance of PartUpdate', function() {
        // TODO: update the code to test PartUpdate
        expect(instance).to.be.a(MissionControl.PartUpdate);
      });

      it('should have the property layout (base name: "layout")', function() {
        // TODO: update the code to test the property layout
        expect(instance).to.have.property('layout');
        // expect(instance.layout).to.be(expectedValueLiteral);
      });

      it('should have the property colors (base name: "colors")', function() {
        // TODO: update the code to test the property colors
        expect(instance).to.have.property('colors');
        // expect(instance.colors).to.be(expectedValueLiteral);
      });

      it('should have the property desiredSubstrate (base name: "desired_substrate")', function() {
        // TODO: update the code to test the property desiredSubstrate
        expect(instance).to.have.property('desiredSubstrate');
        // expect(instance.desiredSubstrate).to.be(expectedValueLiteral);
      });

      it('should have the property finishingApplications (base name: "finishing_applications")', function() {
        // TODO: update the code to test the property finishingApplications
        expect(instance).to.have.property('finishingApplications');
        // expect(instance.finishingApplications).to.be(expectedValueLiteral);
      });

      it('should have the property finishings (base name: "finishings")', function() {
        // TODO: update the code to test the property finishings
        expect(instance).to.have.property('finishings');
        // expect(instance.finishings).to.be(expectedValueLiteral);
      });

      it('should have the property fileReferences (base name: "file_references")', function() {
        // TODO: update the code to test the property fileReferences
        expect(instance).to.have.property('fileReferences');
        // expect(instance.fileReferences).to.be(expectedValueLiteral);
      });

      it('should have the property kind (base name: "kind")', function() {
        // TODO: update the code to test the property kind
        expect(instance).to.have.property('kind');
        // expect(instance.kind).to.be(expectedValueLiteral);
      });

      it('should have the property content (base name: "content")', function() {
        // TODO: update the code to test the property content
        expect(instance).to.have.property('content');
        // expect(instance.content).to.be(expectedValueLiteral);
      });

      it('should have the property pages (base name: "pages")', function() {
        // TODO: update the code to test the property pages
        expect(instance).to.have.property('pages');
        // expect(instance.pages).to.be(expectedValueLiteral);
      });

      it('should have the property dimensions (base name: "dimensions")', function() {
        // TODO: update the code to test the property dimensions
        expect(instance).to.have.property('dimensions');
        // expect(instance.dimensions).to.be(expectedValueLiteral);
      });

      it('should have the property dimensionsUnit (base name: "dimensions_unit")', function() {
        // TODO: update the code to test the property dimensionsUnit
        expect(instance).to.have.property('dimensionsUnit');
        // expect(instance.dimensionsUnit).to.be(expectedValueLiteral);
      });

    });
  });

}));
