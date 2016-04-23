angular.module("CareFull").config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');


  $stateProvider
  .state('homepage' , {
     url :'/',
     templateUrl: 'app/components/home/views/homepage.html'
 })
  .state('caregivers', {
    url: '/caregivers',
    templateUrl: 'app/components/caregivers/views/caregivers.html'
   });


}]);
