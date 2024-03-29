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
    instance = new MissionControl.ShopFloorApi();
  });

  describe('(package)', function() {
    describe('ShopFloorApi', function() {
      describe('executionsExecutionIdDelete', function() {
        it('should call executionsExecutionIdDelete successfully', function(done) {
          // TODO: uncomment, update parameter values for executionsExecutionIdDelete call
          /*

          instance.executionsExecutionIdDelete(executionId).then(function(data) {

            done();
          }, function(error) {
            done(error);
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('executionsExecutionIdGet', function() {
        it('should call executionsExecutionIdGet successfully', function(done) {
          // TODO: uncomment, update parameter values for executionsExecutionIdGet call and complete the assertions
          /*

          instance.executionsExecutionIdGet(executionId).then(function(data) {
            // TODO: update response assertions
            expect(data).to.be.a(MissionControl.Execution);

            done();
          }, function(error) {
            done(error);
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('executionsExecutionIdPatch', function() {
        it('should call executionsExecutionIdPatch successfully', function(done) {
          // TODO: uncomment, update parameter values for executionsExecutionIdPatch call and complete the assertions
          /*

          instance.executionsExecutionIdPatch(body, executionId).then(function(data) {
            // TODO: update response assertions
            expect(data).to.be.a(MissionControl.Execution);

            done();
          }, function(error) {
            done(error);
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('executionsGet', function() {
        it('should call executionsGet successfully', function(done) {
          // TODO: uncomment, update parameter values for executionsGet call and complete the assertions
          /*
          var opts = {};

          instance.executionsGet(opts).then(function(data) {
            // TODO: update response assertions
            let dataCtr = data;
            expect(dataCtr).to.be.an(Array);
            expect(dataCtr).to.not.be.empty();
            for (let p in dataCtr) {
              let data = dataCtr[p];
              expect(data).to.be.a(MissionControl.Execution);
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
      describe('executionsPost', function() {
        it('should call executionsPost successfully', function(done) {
          // TODO: uncomment, update parameter values for executionsPost call and complete the assertions
          /*

          instance.executionsPost(body).then(function(data) {
            // TODO: update response assertions
            expect(data).to.be.a(MissionControl.Execution);

            done();
          }, function(error) {
            done(error);
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('jobsJobIdJobDelaysGet', function() {
        it('should call jobsJobIdJobDelaysGet successfully', function(done) {
          // TODO: uncomment, update parameter values for jobsJobIdJobDelaysGet call and complete the assertions
          /*
          var opts = {};

          instance.jobsJobIdJobDelaysGet(jobId, opts).then(function(data) {
            // TODO: update response assertions
            let dataCtr = data;
            expect(dataCtr).to.be.an(Array);
            expect(dataCtr).to.not.be.empty();
            for (let p in dataCtr) {
              let data = dataCtr[p];
              expect(data).to.be.a(MissionControl.JobDelay);
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
      describe('jobsJobIdJobDelaysJobDelayIdDelete', function() {
        it('should call jobsJobIdJobDelaysJobDelayIdDelete successfully', function(done) {
          // TODO: uncomment, update parameter values for jobsJobIdJobDelaysJobDelayIdDelete call
          /*

          instance.jobsJobIdJobDelaysJobDelayIdDelete(jobId, jobDelayId).then(function(data) {

            done();
          }, function(error) {
            done(error);
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('jobsJobIdJobDelaysJobDelayIdGet', function() {
        it('should call jobsJobIdJobDelaysJobDelayIdGet successfully', function(done) {
          // TODO: uncomment, update parameter values for jobsJobIdJobDelaysJobDelayIdGet call and complete the assertions
          /*

          instance.jobsJobIdJobDelaysJobDelayIdGet(jobId, jobDelayId).then(function(data) {
            // TODO: update response assertions
            expect(data).to.be.a(MissionControl.JobDelay);

            done();
          }, function(error) {
            done(error);
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('jobsJobIdJobDelaysJobDelayIdPatch', function() {
        it('should call jobsJobIdJobDelaysJobDelayIdPatch successfully', function(done) {
          // TODO: uncomment, update parameter values for jobsJobIdJobDelaysJobDelayIdPatch call and complete the assertions
          /*

          instance.jobsJobIdJobDelaysJobDelayIdPatch(body, jobId, jobDelayId).then(function(data) {
            // TODO: update response assertions
            expect(data).to.be.a(MissionControl.JobDelay);

            done();
          }, function(error) {
            done(error);
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('jobsJobIdJobDelaysPost', function() {
        it('should call jobsJobIdJobDelaysPost successfully', function(done) {
          // TODO: uncomment, update parameter values for jobsJobIdJobDelaysPost call and complete the assertions
          /*

          instance.jobsJobIdJobDelaysPost(body, jobId).then(function(data) {
            // TODO: update response assertions
            expect(data).to.be.a(MissionControl.JobDelay);

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
