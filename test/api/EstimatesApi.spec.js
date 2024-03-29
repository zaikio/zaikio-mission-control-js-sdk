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

  beforeEach(function() {
    instance = new MissionControl.EstimatesApi();
  });

  describe('(package)', function() {
    describe('EstimatesApi', function() {
      describe('estimatesEstimateIdDelete', function() {
        it('should call estimatesEstimateIdDelete successfully', function(done) {
          // TODO: uncomment, update parameter values for estimatesEstimateIdDelete call
          /*

          instance.estimatesEstimateIdDelete(estimateId).then(function(data) {

            done();
          }, function(error) {
            done(error);
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('estimatesEstimateIdGet', function() {
        it('should call estimatesEstimateIdGet successfully', function(done) {
          // TODO: uncomment, update parameter values for estimatesEstimateIdGet call and complete the assertions
          /*

          instance.estimatesEstimateIdGet(estimateId).then(function(data) {
            // TODO: update response assertions
            expect(data).to.be.a(MissionControl.Estimate);

            done();
          }, function(error) {
            done(error);
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('estimatesEstimateIdPatch', function() {
        it('should call estimatesEstimateIdPatch successfully', function(done) {
          // TODO: uncomment, update parameter values for estimatesEstimateIdPatch call and complete the assertions
          /*

          instance.estimatesEstimateIdPatch(body, estimateId).then(function(data) {
            // TODO: update response assertions
            expect(data).to.be.a(MissionControl.Estimate);

            done();
          }, function(error) {
            done(error);
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('estimatesEstimateIdWorkstepEstimatesGet', function() {
        it('should call estimatesEstimateIdWorkstepEstimatesGet successfully', function(done) {
          // TODO: uncomment, update parameter values for estimatesEstimateIdWorkstepEstimatesGet call and complete the assertions
          /*
          var opts = {};

          instance.estimatesEstimateIdWorkstepEstimatesGet(estimateId, opts).then(function(data) {
            // TODO: update response assertions
            let dataCtr = data;
            expect(dataCtr).to.be.an(Array);
            expect(dataCtr).to.not.be.empty();
            for (let p in dataCtr) {
              let data = dataCtr[p];
              expect(data).to.be.a(MissionControl.WorkstepEstimate);
            }

            done();
          }, function(error) {
            done(error);
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('estimatesEstimateIdWorkstepEstimatesPost', function() {
        it('should call estimatesEstimateIdWorkstepEstimatesPost successfully', function(done) {
          // TODO: uncomment, update parameter values for estimatesEstimateIdWorkstepEstimatesPost call and complete the assertions
          /*

          instance.estimatesEstimateIdWorkstepEstimatesPost(body, estimateId).then(function(data) {
            // TODO: update response assertions
            expect(data).to.be.a(MissionControl.WorkstepEstimate);

            done();
          }, function(error) {
            done(error);
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('jobsJobIdEstimatesGet', function() {
        it('should call jobsJobIdEstimatesGet successfully', function(done) {
          // TODO: uncomment, update parameter values for jobsJobIdEstimatesGet call and complete the assertions
          /*
          var opts = {};

          instance.jobsJobIdEstimatesGet(jobId, opts).then(function(data) {
            // TODO: update response assertions
            let dataCtr = data;
            expect(dataCtr).to.be.an(Array);
            expect(dataCtr).to.not.be.empty();
            for (let p in dataCtr) {
              let data = dataCtr[p];
              expect(data).to.be.a(MissionControl.Estimate);
            }

            done();
          }, function(error) {
            done(error);
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('jobsJobIdEstimatesPost', function() {
        it('should call jobsJobIdEstimatesPost successfully', function(done) {
          // TODO: uncomment, update parameter values for jobsJobIdEstimatesPost call and complete the assertions
          /*

          instance.jobsJobIdEstimatesPost(body, jobId).then(function(data) {
            // TODO: update response assertions
            expect(data).to.be.a(MissionControl.Estimate);

            done();
          }, function(error) {
            done(error);
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('materialEstimatesMaterialEstimateIdDelete', function() {
        it('should call materialEstimatesMaterialEstimateIdDelete successfully', function(done) {
          // TODO: uncomment, update parameter values for materialEstimatesMaterialEstimateIdDelete call
          /*

          instance.materialEstimatesMaterialEstimateIdDelete(materialEstimateId).then(function(data) {

            done();
          }, function(error) {
            done(error);
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('materialEstimatesMaterialEstimateIdGet', function() {
        it('should call materialEstimatesMaterialEstimateIdGet successfully', function(done) {
          // TODO: uncomment, update parameter values for materialEstimatesMaterialEstimateIdGet call and complete the assertions
          /*

          instance.materialEstimatesMaterialEstimateIdGet(materialEstimateId).then(function(data) {
            // TODO: update response assertions
            expect(data).to.be.a(MissionControl.MaterialEstimate);

            done();
          }, function(error) {
            done(error);
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('materialEstimatesMaterialEstimateIdPatch', function() {
        it('should call materialEstimatesMaterialEstimateIdPatch successfully', function(done) {
          // TODO: uncomment, update parameter values for materialEstimatesMaterialEstimateIdPatch call and complete the assertions
          /*

          instance.materialEstimatesMaterialEstimateIdPatch(body, materialEstimateId).then(function(data) {
            // TODO: update response assertions
            expect(data).to.be.a(MissionControl.MaterialEstimate);

            done();
          }, function(error) {
            done(error);
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('workstepEstimatesWorkstepEstimateIdDelete', function() {
        it('should call workstepEstimatesWorkstepEstimateIdDelete successfully', function(done) {
          // TODO: uncomment, update parameter values for workstepEstimatesWorkstepEstimateIdDelete call
          /*

          instance.workstepEstimatesWorkstepEstimateIdDelete(workstepEstimateId).then(function(data) {

            done();
          }, function(error) {
            done(error);
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('workstepEstimatesWorkstepEstimateIdGet', function() {
        it('should call workstepEstimatesWorkstepEstimateIdGet successfully', function(done) {
          // TODO: uncomment, update parameter values for workstepEstimatesWorkstepEstimateIdGet call and complete the assertions
          /*

          instance.workstepEstimatesWorkstepEstimateIdGet(workstepEstimateId).then(function(data) {
            // TODO: update response assertions
            expect(data).to.be.a(MissionControl.WorkstepEstimate);

            done();
          }, function(error) {
            done(error);
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('workstepEstimatesWorkstepEstimateIdMaterialEstimatesGet', function() {
        it('should call workstepEstimatesWorkstepEstimateIdMaterialEstimatesGet successfully', function(done) {
          // TODO: uncomment, update parameter values for workstepEstimatesWorkstepEstimateIdMaterialEstimatesGet call and complete the assertions
          /*
          var opts = {};

          instance.workstepEstimatesWorkstepEstimateIdMaterialEstimatesGet(workstepEstimateId, opts).then(function(data) {
            // TODO: update response assertions
            let dataCtr = data;
            expect(dataCtr).to.be.an(Array);
            expect(dataCtr).to.not.be.empty();
            for (let p in dataCtr) {
              let data = dataCtr[p];
              expect(data).to.be.a(MissionControl.MaterialEstimate);
            }

            done();
          }, function(error) {
            done(error);
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('workstepEstimatesWorkstepEstimateIdMaterialEstimatesPost', function() {
        it('should call workstepEstimatesWorkstepEstimateIdMaterialEstimatesPost successfully', function(done) {
          // TODO: uncomment, update parameter values for workstepEstimatesWorkstepEstimateIdMaterialEstimatesPost call and complete the assertions
          /*

          instance.workstepEstimatesWorkstepEstimateIdMaterialEstimatesPost(body, workstepEstimateId).then(function(data) {
            // TODO: update response assertions
            expect(data).to.be.a(MissionControl.MaterialEstimate);

            done();
          }, function(error) {
            done(error);
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('workstepEstimatesWorkstepEstimateIdPatch', function() {
        it('should call workstepEstimatesWorkstepEstimateIdPatch successfully', function(done) {
          // TODO: uncomment, update parameter values for workstepEstimatesWorkstepEstimateIdPatch call and complete the assertions
          /*

          instance.workstepEstimatesWorkstepEstimateIdPatch(body, workstepEstimateId).then(function(data) {
            // TODO: update response assertions
            expect(data).to.be.a(MissionControl.WorkstepEstimate);

            done();
          }, function(error) {
            done(error);
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
    });
  });

}));
