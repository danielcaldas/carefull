
/*
Skills labels
DEMENTIA, AT_BED, MOBILITY, VISION
*/

$scope.caregivers = [
  {id: "1", name: "Carla da Silva", username: "carla.silva", job: "Student", sex: "F", age: "26",
   skills: ["AT_BED", "MOBILITY"],
   district: "Porto",
   city: "Amarante",
   reviews: $scope.reviews,
   avgRating: "4.3",
   institutions: "Associação Famílias Carenciadas"
 }
];

$scope.reviews = [
  {id: "1", comment: "A carla é muito prestável e atenciosa.", rating: "5", user: "carlos.alberto", caregiver: "carla.silva"}
];

$scope.users = [
  {id: "2", name: "Carlos Manuel Alberto", username: "carlos.alberto", district: "Porto", city: "Amarante",
   reviews: $scope.reviews, elder: elder, messages: $scope.messages
 }
]

$scope.messages = [
  {id: "1", user: "2", caregiver: "1", text: "Boa tarde Carla, estou interessado nos seus serviços. Cumprimentos."}
]
