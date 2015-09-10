angular.module("bear", []);

angular.module("bear").controller("polarbearcontroller", ["$scope", function($scope){
	$scope.message = "Show Form";
	$scope.classname="forthehiddenform";
	
	$scope.Sure = function(event) {
			event.preventDefault(); //don't need this - angular does this automatically
		    $scope.firstname=$scope.firstmodel;
		    $scope.bio=$scope.firstbio;
		    $scope.favbooks=$scope.firstbook;
		    $scope.favlib=$scope.firstlib;

    }

    	$scope.Show = function() {
    		if ($scope.classname==="forthevisibleform")
		     	$scope.classname="forthehiddenform"
		    else if ($scope.classname==="forthehiddenform")
		    	$scope.classname="forthevisibleform"
		    if ($scope.message === "Show Form")
		        $scope.message="Hide Form"
		    else if ($scope.message ==="Hide Form")
		      	$scope.message = "Show Form"
		    

    }

}]
);