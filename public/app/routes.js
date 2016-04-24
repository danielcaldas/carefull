angular.module("CareFull").config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');


  $stateProvider
  .state('homepage' , {
     url :'/',
     templateUrl: 'app/components/home/views/homepage.html'
 })
  .state('seeker', {
    url: '/1',
    templateUrl: 'app/components/seeker/views/seeker-maincontent.html'
   })
   .state('seeker.caregivers' ,{
      url: '/caregivers',
      views: {
      'searchform': {
        templateUrl: 'app/components/seeker/views/caregivers-search-form.html',
        controller: 'SeekersCaregiverFormCtrl'
      },
      'caregivers': {
        templateUrl: 'app/components/seeker/views/caregivers.html',
        controller: 'SeekersController'
      }
    }
   })
   .state('seeker.profile' ,{
      url: '/profile',
      templateUrl: 'app/components/seeker/views/profile.html'
   })
   .state('seeker.messages' ,{
      url: '/messages',
      templateUrl: 'app/components/seeker/views/messages.html'
   });


}]);
