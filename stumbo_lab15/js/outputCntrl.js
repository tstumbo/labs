var app = angular.module("madLibsApp");

app.controller('outputCntrl', function($scope, madLibsFactory) {

	$scope.madLibsObject = madLibsFactory.returnObject();
	console.log($scope.madLibsObject);


});