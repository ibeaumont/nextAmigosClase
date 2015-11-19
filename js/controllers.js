var amigosControllers = angular.module('amigosControllers', []);

//controlador del index
amigosControllers.controller('appCtrl', function($scope,$rootScope, $location){
  $rootScope.amigos = [
	{
		nombre:"juan",
		tlfno:"123456789"
	},
	{
		nombre:"pedro",
		tlfno:"123456789"
	},	
	{
		nombre:"luis",
		tlfno:"123456789"
	}
	];
	
$scope.isActive = function (viewLocation) {
     var active = (viewLocation === $location.path());
     return active;
};

});
//controlador de la lista de amigos
amigosControllers.controller('amigosCtrl', ['$scope','$rootScope',
  function($scope,$rootScope) {
  
  }]);
  
 //controlador de la vista Edición de amigo
amigosControllers.controller('amigoEditCtrl', ['$scope', '$rootScope','$routeParams',
  function($scope,$rootScope,$routeParams) {
  	/*for (i=0;i<$rootScope.amigos.length;i++){
  		if ($rootScope.amigos[i].nombre==$routeParams.amigoId){
  		 $scope.amigo=$rootScope.amigos[i];
  		}
	}*/
	$scope.amigo=$rootScope.amigos[$routeParams.amigoId];
	$scope.guardar=function(){
		console.log($scope.amigo);
		$rootScope.amigos[$routeParams.amigoId]=$scope.amigo;
	}
  }]);
