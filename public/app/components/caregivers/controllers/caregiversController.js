angular.module("CareFull").controller("CaregiversController", ['$scope', function($scope) {
   $scope.caregivers = [
      {
         name: "João Vilela",
         city: "Braga",
         price: 3.5,
         rating: 4,
         occupation: "Fisioterapeuta"
      },
      {
         name: "Miguel Chouriço",
         city: "Porto",
         price: 7.6,
         rating: 3,
         occupation: "Enfermeiro"
      },
      {
         name: "Francisco Rolando",
         city: "Lisboa",
         price: 1.1,
         rating: 2,
         occupation: "Estudante"
      }
   ]
}]);
