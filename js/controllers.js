var phonecatControllers = angular.module('phonecatControllers', []);

phonecatControllers.controller('PhoneListCtrl', ['$scope', '$http',
  function ($scope, $http) {
	  
	  $scope.showmodel = function () {
        alert('phone details');
    }
	 
    $http.get('phones/phones.json').success(function(data) {
      $scope.phones = data;
	  // alert(data);
    });

    $scope.orderProp = 'age';
  }]);
  
 phonecatControllers.controller('PhoneDetailCtrl', ['$scope', '$routeParams', 'Phone',
  function ($scope, $routeParams, Phone) {
	 
     
    $scope.phone = Phone.get({phoneId: $routeParams.phoneId}, function(phone) {
      $scope.mainImageUrl = phone.images[0];
    });

    $scope.setImage = function(imageUrl) {
      $scope.mainImageUrl = imageUrl;
    }
	
    $scope.updateEvent2 = function () {
        alert('delete ' + $scope.phone.imageUrl);
    }
	
	
	
	 alert('yt');
	
	
  }]); 


phonecatControllers.controller('homeController', ['$scope', '$routeParams',
  function($scope, $routeParams) {
	  alert('hi');
    $scope.phoneId = $routeParams.phoneId;
  }]);
  
  phonecatControllers.controller('componentController', ['$scope', '$routeParams',
  function($scope, $routeParams) {
	  alert('hi component');
    $scope.phoneId = $routeParams.phoneId;
  }]);
  
   phonecatControllers.controller('contactusController', ['$scope', '$routeParams',
  function($scope, $routeParams) {
	  alert('hi contact');
    $scope.phoneId = $routeParams.phoneId;
  }]);
  
   phonecatControllers.controller('chartsController', ['$scope', '$routeParams',
  function($scope, $routeParams) {
	  alert('hi contact');
    $scope.phoneId = $routeParams.phoneId;
  }]);