var app = angular.module("madLibsApp", ["ngRoute"]);

app.config(function($routeProvider) {
	$routeProvider.when("/view1", {
		controller: "inputCntrl",
		templateUrl: "partials/view1.html"
	}).when("/view2", {
		controller: "outputCntrl",
		templateUrl: "partials/view2.html"
	})
});