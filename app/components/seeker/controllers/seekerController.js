angular.module("CareFull").controller("seekerController", ['$scope', function($scope) {
  $scope.caregivers = [
    {
      name: "João Vilela",
      rating: 4
    },
    {
      name: "João Vilela",
      rating: 4
    },
    {
      name: "João Vilela",
      rating: 4
    }
  ]
}]);

angular.module("CareFull").controller("seekerCaregiverFormCtrl", ['$scope', function($scope) {
  // Set up
  $scope.advancedOptions = false;
  // Age slider
  $scope.ageSlider = {
    minValue: 18,
    maxValue: 30,
    options: {
      floor: 0,
      ceil: 80
    }
  };
  // Price slider
  $scope.priceSlider = {
    minValue: 0,
    maxValue: 55,
    options: {
      floor: 0,
      ceil: 500,
      translate: function(value) {
        return '€' + value;
      }
    }
  };
  // Hide & show advanced options
  $scope.showAdvancedOptions = function() {
    $scope.advancedOptions = !$scope.advancedOptions;
  }

  // Test info
  $scope.getInfo = function() {
    console.log("Distrito: " + $scope.district);
    console.log("Localidade: " + $scope.localidade);
    console.log("Male: " + $scope.male);
    console.log("Female: " + $scope.female);
    console.log("Idade: " + $scope.ageSlider.minValue + ", " + $scope.ageSlider.maxValue);
    console.log("Preço: " + $scope.priceSlider.minValue + ", " + $scope.priceSlider.maxValue);
  }
}]);
