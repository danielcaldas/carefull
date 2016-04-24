angular.module('CareFull').factory('CaregiverService',[ function () {
   var service = {};

   service.setCaregiver = function (cg){
      service.caregiver = cg;
   }

   service.getCaregiver = function () {
      return service.caregiver;
   }

   return service;
}]);
