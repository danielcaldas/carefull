angular.module("CareFull").controller("CaregiversController", ['$scope', 'CaregiverService', '$state',
 function($scope,CaregiverService, $state) {

   $scope.limit = 3;


   $scope.caregivers = [
      {
         id: 1,
         name: "João Vilela",
         city: "Braga",
         price: 3.5,
         rating: 4,
         occupation: "Fisioterapeuta"
      },
      {
         id: 2,
         name: "Miguel Chouriço",
         city: "Porto",
         price: 7.6,
         rating: 3,
         occupation: "Enfermeiro"
      },
      {
         id: 3,
         name: "Francisco Rolando",
         city: "Lisboa",
         price: 1.1,
         rating: 2,
         occupation: "Estudante"
      },{
         id: 4,
         name: "João Vilela",
         city: "Braga",
         price: 3.5,
         rating: 4,
         occupation: "Fisioterapeuta"
      },
      {
         id: 5,
         name: "Miguel Chouriço",
         city: "Porto",
         price: 7.6,
         rating: 3,
         occupation: "Enfermeiro"
      },
      {
         id: 6,
         name: "Francisco Rolando",
         city: "Lisboa",
         price: 1.1,
         rating: 2,
         occupation: "Estudante"
      },{
         id: 7,
         name: "João Vilela",
         city: "Braga",
         price: 3.5,
         rating: 4,
         occupation: "Fisioterapeuta"
      },
      {
         id: 8,
         name: "Miguel Chouriço",
         city: "Porto",
         price: 7.6,
         rating: 3,
         occupation: "Enfermeiro"
      },
      {
         id: 9,
         name: "Francisco Rolando",
         city: "Lisboa",
         price: 1.1,
         rating: 2,
         occupation: "Estudante"
      },{
         id: 10,
         name: "João Vilela",
         city: "Braga",
         price: 3.5,
         rating: 4,
         occupation: "Fisioterapeuta"
      },
      {
         id: 11,
         name: "Miguel Chouriço",
         city: "Porto",
         price: 7.6,
         rating: 3,
         occupation: "Enfermeiro"
      },
      {
         id: 12,
         name: "Francisco Rolando",
         city: "Lisboa",
         price: 1.1,
         rating: 2,
         occupation: "Estudante"
      }
   ];

   $scope.loadMore = function() {
      console.log($scope.caregivers.length);
      var incremented = $scope.limit + 3;
      $scope.limit = incremented > $scope.caregivers.length ? $scope.caregivers.length : incremented;
    };

    $scope.loadCaregiver = function (index) {
      CaregiverService.setCaregiver($scope.caregivers[index]);
      $state.go('seeker.caregiverProfile', {caregiverID: $scope.caregivers[index].id})
   };
}]);
