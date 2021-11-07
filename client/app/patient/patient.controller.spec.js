'use strict';
/**
 * Defines a suite of specifications.
 *
 * Stores the description and all defined specs in the Jasmine environment as one suite of specs. Variables declared
 * are accessible by calls to beforeEach, it, and afterEach. Describe blocks can be nested, allowing for specialization
 * of setup in some tests.
 *
 * @example
 * // TODO: a simple suite
 *
 * // TODO: a simple suite with a nested describe block
 *
 * @param {String} description A string, usually the class under test.
 * @param {Function} specDefinitions function that defines several specs.
 */
describe('Controller: PatientCtrl', function () {
  /**
   * A function that is called before each spec in a suite.
   *
   * Used for spec setup, including validating assumptions.
   *
   * @param {Function} beforeEachFunction
   */
  // load the controller's module
  beforeEach(module('MeanApp'));

  var PatientCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PatientCtrl = $controller('PatientCtrl', {
      $scope: scope
    });
  }));
  //
  // it('should ...', function () {
  //   expect(true).toBe(true);
  // });
});
