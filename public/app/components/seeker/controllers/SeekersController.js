angular.module("CareFull").controller("SeekersController", ['$scope', function($scope) {

  $scope.limit = 3;


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
    },{
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
    },{
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
    },{
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
  ];

  $scope.loadMore = function() {
    console.log($scope.caregivers.length);
    var incremented = $scope.limit + 3;
    $scope.limit = incremented > $scope.caregivers.length ? $scope.caregivers.length : incremented;
  };

  $scope.search = function(caregiver){
    var gender =
    if (!$scope.query || (item.brand.toLowerCase().indexOf($scope.query) != -1) || (item.model.toLowerCase().indexOf($scope.query.toLowerCase()) != -1) ){
      return true;
    }
    return false;
  };
}]);
