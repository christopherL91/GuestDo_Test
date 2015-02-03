'use strict';

/**
 * @ngdoc function
 * @name guestDoApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the guestDoApp
 */
angular.module('guestDoApp')
  .controller('AboutCtrl', function ($scope,$http) {
  	$scope.version = 0;

  	$http.get('http://localhost:3000/version').
  	success(function(response) {
  		console.log(response);
  		$scope.version = response.version;
  	}).
  	error(function(err) {
  		console.error(err);
  	});
  });
