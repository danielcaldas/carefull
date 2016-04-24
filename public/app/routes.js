angular.module("CareFull").config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');


  $stateProvider
  .state('homepage' , {
     url :'/',
     templateUrl: 'app/components/home/views/homepage.html'
 })
  .state('seeker', {
    url: '/1',
    templateUrl: 'app/components/caregivers/views/seeker-maincontent.html',
    controller: 'CaregiversController'
   })
   .state('seeker.caregivers' ,{
      url: '/caregivers',
      templateUrl: 'app/components/caregivers/views/caregivers.html',
      controller: 'CaregiversController'
   })
   .state('seeker.profile' ,{
      url: '/profile',
      templateUrl: 'app/components/caregivers/views/profile.html'
   })
   .state('seeker.messages' ,{
      url: '/messages',
      templateUrl: 'app/components/caregivers/views/messages.html'
   });


}]);
