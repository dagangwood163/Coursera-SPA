(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];

function LunchCheckController($scope) {

    $scope.message="";	
	$scope.numberofitems="";
	
	$scope.checkNumeric = function () {
	
	if ($scope.numberofitems=="")
	{
		$scope.message="Please enter data first";
	}
	else if ($scope.numberofitems.trim().length<1)
	{
		$scope.message="Please enter data first";
	}	
	else if ($scope.numberofitems.trim().split(",").length<=3)
	{		
		$scope.message="Enjoy!";
	}		
	else if ($scope.numberofitems.trim().split(",").length>3)
	{
		$scope.message="Too Much!";	
	}
  };

}

})();



