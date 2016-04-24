angular.module("CareFull").controller("CaregiversController", ['$scope', 'CaregiverService', '$state',
 function($scope,CaregiverService, $state) {

   $scope.limit = 3;


   $scope.caregivers= [
{"id":0,"name":"Jorge","username":"jorge","job":"Arquiteto(a)","gender":"M","age":21,"skills":[],"district":"Lisboa","city":"Estoril","reviews":[],"avgRating":5},

{"id":1,"name":"Maria","username":"maria","job":"Arquiteto(a)","gender":"F","age":36,"skills":[],"district":"Porto","city":"Gondomar","reviews":[],"avgRating":3},

{"id":2,"name":"Carla","username":"carla","job":"Enfermeiro(a)","gender":"F","age":46,"skills":[],"district":"Lisboa","city":"Estoril","reviews":[],"avgRating":2},

{"id":3,"name":"Jorge","username":"jorge","job":"Limpeza","gender":"M","age":46,"skills":[],"district":"Lisboa","city":"Estoril","reviews":[],"avgRating":3},

{"id":4,"name":"Jorge","username":"jorge","job":"Limpeza","gender":"M","age":24,"skills":[],"district":"Lisboa","city":"Estoril","reviews":[],"avgRating":4},

{"id":5,"name":"Jorge","username":"jorge","job":"Enfermeiro(a)","gender":"M","age":30,"skills":[],"district":"Porto","city":"Gondomar","reviews":[],"avgRating":1},

{"id":6,"name":"Maria","username":"maria","job":"Student","gender":"F","age":48,"skills":[],"district":"Porto","city":"Gondomar","reviews":[],"avgRating":2},

{"id":7,"name":"Maria","username":"maria","job":"Limpeza","gender":"F","age":35,"skills":[],"district":"Lisboa","city":"Estoril","reviews":[],"avgRating":3},

{"id":8,"name":"Tiago","username":"tiago","job":"Student","gender":"M","age":20,"skills":[],"district":"Lisboa","city":"Estoril","reviews":[],"avgRating":5},

{"id":9,"name":"Maria","username":"maria","job":"Limpeza","gender":"F","age":18,"skills":[],"district":"Lisboa","city":"Estoril","reviews":[],"avgRating":4},

{"id":10,"name":"Tiago","username":"tiago","job":"Limpeza","gender":"M","age":53,"skills":[],"district":"Lisboa","city":"Estoril","reviews":[],"avgRating":1},

{"id":11,"name":"Maria","username":"maria","job":"Limpeza","gender":"F","age":33,"skills":[],"district":"Lisboa","city":"Estoril","reviews":[],"avgRating":1},

{"id":12,"name":"Jorge","username":"jorge","job":"Enfermeiro(a)","gender":"M","age":30,"skills":[],"district":"Porto","city":"Gondomar","reviews":[],"avgRating":3},

{"id":13,"name":"Carla","username":"carla","job":"Enfermeiro(a)","gender":"F","age":31,"skills":[],"district":"Porto","city":"Gondomar","reviews":[],"avgRating":1},

{"id":14,"name":"Jorge","username":"jorge","job":"Enfermeiro(a)","gender":"M","age":49,"skills":[],"district":"Porto","city":"Gondomar","reviews":[],"avgRating":4},

{"id":15,"name":"Maria","username":"maria","job":"Student","gender":"F","age":20,"skills":[],"district":"Lisboa","city":"Estoril","reviews":[],"avgRating":1},

{"id":16,"name":"Tiago","username":"tiago","job":"Arquiteto(a)","gender":"M","age":54,"skills":[],"district":"Lisboa","city":"Estoril","reviews":[],"avgRating":2},

{"id":17,"name":"Jorge","username":"jorge","job":"Student","gender":"M","age":46,"skills":[],"district":"Porto","city":"Gondomar","reviews":[],"avgRating":4},

{"id":18,"name":"Maria","username":"maria","job":"Enfermeiro(a)","gender":"F","age":40,"skills":[],"district":"Porto","city":"Gondomar","reviews":[],"avgRating":5},

{"id":19,"name":"Jorge","username":"jorge","job":"Student","gender":"M","age":25,"skills":[],"district":"Lisboa","city":"Estoril","reviews":[],"avgRating":3} ];

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
