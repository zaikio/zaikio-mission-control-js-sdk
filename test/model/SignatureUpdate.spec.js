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
    describe('SignatureUpdate', function() {
      beforeEach(function() {
        instance = new MissionControl.SignatureUpdate();
      });

      it('should create an instance of SignatureUpdate', function() {
        // TODO: update the code to test SignatureUpdate
        expect(instance).to.be.a(MissionControl.SignatureUpdate);
      });

      it('should have the property kind (base name: "kind")', function() {
        // TODO: update the code to test the property kind
        expect(instance).to.have.property('kind');
        // expect(instance.kind).to.be(expectedValueLiteral);
      });

      it('should have the property foldingLayout (base name: "folding_layout")', function() {
        // TODO: update the code to test the property foldingLayout
        expect(instance).to.have.property('foldingLayout');
        // expect(instance.foldingLayout).to.be(expectedValueLiteral);
      });

      it('should have the property foldingSequence (base name: "folding_sequence")', function() {
        // TODO: update the code to test the property foldingSequence
        expect(instance).to.have.property('foldingSequence');
        // expect(instance.foldingSequence).to.be(expectedValueLiteral);
      });

      it('should have the property pages (base name: "pages")', function() {
        // TODO: update the code to test the property pages
        expect(instance).to.have.property('pages');
        // expect(instance.pages).to.be(expectedValueLiteral);
      });

      it('should have the property layout (base name: "layout")', function() {
        // TODO: update the code to test the property layout
        expect(instance).to.have.property('layout');
        // expect(instance.layout).to.be(expectedValueLiteral);
      });

    });
  });

}));
