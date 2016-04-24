angular.module("CareFull").config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');


  $stateProvider
  .state('homepage', {
    url: '/',
    templateUrl: 'app/components/home/views/homepage.html'
  })
  .state('seeker', {
    url: '/caregivers',
    templateUrl: 'app/components/caregivers/views/seeker-maincontent.html',
    controller: 'CaregiversController'
  })
  .state('seeker.profile', {
    url: '/profile',
    templateUrl: 'app/components/caregivers/views/profile.html'
  })
  .state('seeker.messages', {
    url: '/messages',
    templateUrl: 'app/components/caregivers/views/messages.html'
  })
  .state('seeker.caregiverProfile', {
    url: '/:caregiverID',
    templateUrl: 'app/components/caregivers/views/caregiver-profile.html',
    controller: 'CaregiverProfileController',
    resolve: {
      Caregiver: ['CaregiverService', function(CaregiverService) {
        return CaregiverService.getCaregiver();
      }]
    }

  });


}]);
