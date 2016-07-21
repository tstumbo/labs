var app = angular.module("toDoList", []);
app.controller("listController", function($scope) {
	$scope.toDos = ["cut grass", "feed dog", "go shopping", "clean basement", "read Angular", "get a job"];
	$scope.addChore = function() {
		$scope.toDos.push($scope.chore);
	$scope.chore = "";
	};

});