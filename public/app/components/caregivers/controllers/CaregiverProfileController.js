angular.module("CareFull").controller("CaregiverProfileController", ['$scope','Caregiver', function($scope, Caregiver) {

   $scope.caregiver = Caregiver;
   $scope.limit = 3;

   $scope.getSkills = function (){
      var i;
      var str = "";
      var skills = $scope.caregiver.skills;
      for (i=0;i<skills.length-1;i++)
         str += skills[i][1] + ", ";
      if (i!=0)
         str += skills[i][1];
      console.log(str);
      return str;
   }

   $scope.loadMore = function() {
      var length = $scope.caregivers.reviews.length;
      var incremented = $scope.limit + 3;
      $scope.limit = incremented > length ? length : incremented;
  };

}]);
