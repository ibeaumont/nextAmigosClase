var amigoApp = angular.module('amigoApp', [
  'ngRoute',
  'amigosControllers'  
]);

amigoApp.config(['$routeProvider',
  function($routeProvider,$location) {
    
        $location.path('/');
    
    $routeProvider.
      when('/amigos', {
        templateUrl: 'amigos.html',
        controller: 'amigosCtrl'
      }).
      when('/amigo/:amigoId', {
        templateUrl: 'amigoEdit.html',
        controller: 'amigoEditCtrl'
      }).
      otherwise({
        redirectTo: '/amigos'
      });
      
  }]);
