'use strict';

/**
 * @ngdoc function
 * @name guestDoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the guestDoApp
 */
angular.module('guestDoApp')
  .controller('MainCtrl', function ($scope,$http,$location) {
  	$scope.signin = function(user) {
  		// login user
  		$http.post('http://localhost:3000/login',user).
  		success(function(response) {
  			console.log(response);
  		}).
  		error(function(err) {
  			console.error(err);
  		});
  	};

  	$scope.signup = function() {
  		$location.path('/signup');
  	};
  });
