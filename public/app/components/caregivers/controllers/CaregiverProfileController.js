angular.module("CareFull").controller("CaregiverProfileController", ['$scope','Caregiver', function($scope, Caregiver) {
   $scope.caregiver = Caregiver;

   $scope.getSkills = function (){
      var i;
      var str = "";
      var skills = $scope.caregiver.skills;
      for (i=0;i<skills.length-1;i++)
         str += skills[i][1] + ", ";
      str += skills[i][1];
      console.log(str);
      return str;
   }

}]);
