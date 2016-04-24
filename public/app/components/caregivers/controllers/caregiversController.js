angular.module("CareFull").controller("CaregiversController", ['$scope', 'CaregiverService', '$state',
    function($scope, CaregiverService, $state) {

        $scope.limit = 3;

        $scope.caregivers = [
{"id":0,"name":"Tiago","username":"tiago","job":"Arquiteto(a)","gender":"M","age":47,"skills":[["SONDA_NASOG","Sonda Nasogástrica"]],"district":"Porto","city":"Gondomar","reviews":[],"avgRating":1,"price":"42\u20ac\/h","description":"Ola, chamo-me Tiago, sou um(a) Arquiteto(a) e estou atualmente \u00e0 procura de fazer umas horas extra a tomar conta de pessoas idosas.","schedule":"Fins de semana"},
{"id":1,"name":"Carla","username":"carla","job":"Limpeza","gender":"F","age":41,"skills":[["HIGIENE","Higiene"]],"district":"Lisboa","city":"Estoril","reviews":[],"avgRating":4,"price":"38\u20ac\/h","description":"Ola, chamo-me Carla, sou um(a) Limpeza e estou atualmente \u00e0 procura de fazer umas horas extra a tomar conta de pessoas idosas.","schedule":"Segundas e Quintas entre as 9h e as 12h"},
{"id":2,"name":"Jorge","username":"jorge","job":"Arquiteto(a)","gender":"M","age":23,"skills":[],"district":"Porto","city":"Gondomar","reviews":[],"avgRating":2,"price":"27\u20ac\/h","description":"Ola, chamo-me Jorge, sou um(a) Arquiteto(a) e estou atualmente \u00e0 procura de fazer umas horas extra a tomar conta de pessoas idosas.","schedule":"Fins de semana"},
{"id":3,"name":"Jorge","username":"jorge","job":"Arquiteto(a)","gender":"M","age":48,"skills":[["SONDA_NASOG","Sonda Nasogástrica"],["ACAMADO","Pessoas acamadas"]],"district":"Porto","city":"Gondomar","reviews":[],"avgRating":3,"price":"11\u20ac\/h","description":"Ola, chamo-me Jorge, sou um(a) Arquiteto(a) e estou atualmente \u00e0 procura de fazer umas horas extra a tomar conta de pessoas idosas.","schedule":"Quartas e Quintas feiras"},
{"id":4,"name":"Tiago","username":"tiago","job":"Arquiteto(a)","gender":"M","age":48,"skills":[],"district":"Lisboa","city":"Estoril","reviews":[],"avgRating":4,"price":"44\u20ac\/h","description":"Ola, chamo-me Tiago, sou um(a) Arquiteto(a) e estou atualmente \u00e0 procura de fazer umas horas extra a tomar conta de pessoas idosas.","schedule":"Segunda a Sexta feira a partir das 18h"},
{"id":5,"name":"Tiago","username":"tiago","job":"Enfermeiro(a)","gender":"M","age":31,"skills":[["DEMENCIA","Demencia"]],"district":"Lisboa","city":"Estoril","reviews":[],"avgRating":1,"price":"40\u20ac\/h","description":"Ola, chamo-me Tiago, sou um(a) Enfermeiro(a) e estou atualmente \u00e0 procura de fazer umas horas extra a tomar conta de pessoas idosas.","schedule":"Sabados"},
{"id":6,"name":"Maria","username":"maria","job":"Limpeza","gender":"F","age":27,"skills":[["DEMENCIA","Demencia"],["SONDA_NASOG","Sonda Nasogástrica"],["ACAMADO","Pessoas acamadas"]],"district":"Lisboa","city":"Estoril","reviews":[],"avgRating":3,"price":"10\u20ac\/h","description":"Ola, chamo-me Maria, sou um(a) Limpeza e estou atualmente \u00e0 procura de fazer umas horas extra a tomar conta de pessoas idosas.","schedule":"Dias uteis entre as 21h e as 04h"},
{"id":7,"name":"Maria","username":"maria","job":"Enfermeiro(a)","gender":"F","age":37,"skills":[["SONDA_NASOG","Sonda Nasogástrica"],["ACAMADO","Pessoas acamadas"],["HIGIENE","Higiene"]],"district":"Porto","city":"Gondomar","reviews":[],"avgRating":2,"price":"0\u20ac\/h","description":"Ola, chamo-me Maria, sou um(a) Enfermeiro(a) e estou atualmente \u00e0 procura de fazer umas horas extra a tomar conta de pessoas idosas.","schedule":"Segundas e Quintas entre as 9h e as 12h"},
{"id":8,"name":"Maria","username":"maria","job":"Limpeza","gender":"F","age":51,"skills":[],"district":"Porto","city":"Gondomar","reviews":[],"avgRating":2,"price":"10\u20ac\/h","description":"Ola, chamo-me Maria, sou um(a) Limpeza e estou atualmente \u00e0 procura de fazer umas horas extra a tomar conta de pessoas idosas.","schedule":"Segunda a Sexta feira a partir das 18h"},
{"id":9,"name":"Carla","username":"carla","job":"Arquiteto(a)","gender":"F","age":19,"skills":[["DEMENCIA","Demencia"],["SONDA_NASOG","Sonda Nasogástrica"]],"district":"Porto","city":"Gondomar","reviews":[],"avgRating":5,"price":"32\u20ac\/h","description":"Ola, chamo-me Carla, sou um(a) Arquiteto(a) e estou atualmente \u00e0 procura de fazer umas horas extra a tomar conta de pessoas idosas.","schedule":"Dias uteis entre as 21h e as 04h"},
{"id":10,"name":"Maria","username":"maria","job":"Estudante","gender":"F","age":50,"skills":[],"district":"Porto","city":"Gondomar","reviews":[],"avgRating":2,"price":"34\u20ac\/h","description":"Ola, chamo-me Maria, sou um(a) Estudante e estou atualmente \u00e0 procura de fazer umas horas extra a tomar conta de pessoas idosas.","schedule":"Dias uteis entre as 21h e as 04h"},
{"id":11,"name":"Jorge","username":"jorge","job":"Limpeza","gender":"M","age":41,"skills":[["SONDA_NASOG","Sonda Nasogástrica"],["ACAMADO","Pessoas acamadas"],["HIGIENE","Higiene"]],"district":"Lisboa","city":"Estoril","reviews":[],"avgRating":3,"price":"19\u20ac\/h","description":"Ola, chamo-me Jorge, sou um(a) Limpeza e estou atualmente \u00e0 procura de fazer umas horas extra a tomar conta de pessoas idosas.","schedule":"Fins de semana"},
{"id":12,"name":"Tiago","username":"tiago","job":"Enfermeiro(a)","gender":"M","age":28,"skills":[["HIGIENE","Higiene"]],"district":"Lisboa","city":"Estoril","reviews":[],"avgRating":5,"price":"25\u20ac\/h","description":"Ola, chamo-me Tiago, sou um(a) Enfermeiro(a) e estou atualmente \u00e0 procura de fazer umas horas extra a tomar conta de pessoas idosas.","schedule":"Fins de semana"},
{"id":13,"name":"Jorge","username":"jorge","job":"Arquiteto(a)","gender":"M","age":34,"skills":[["HIGIENE","Higiene"],null],"district":"Porto","city":"Gondomar","reviews":[],"avgRating":1,"price":"36\u20ac\/h","description":"Ola, chamo-me Jorge, sou um(a) Arquiteto(a) e estou atualmente \u00e0 procura de fazer umas horas extra a tomar conta de pessoas idosas.","schedule":"Fins de semana"},
{"id":14,"name":"Jorge","username":"jorge","job":"Limpeza","gender":"M","age":24,"skills":[["ACAMADO","Pessoas acamadas"],["HIGIENE","Higiene"]],"district":"Porto","city":"Gondomar","reviews":[],"avgRating":3,"price":"53\u20ac\/h","description":"Ola, chamo-me Jorge, sou um(a) Limpeza e estou atualmente \u00e0 procura de fazer umas horas extra a tomar conta de pessoas idosas.","schedule":"Quartas e Quintas feiras"},
{"id":15,"name":"Maria","username":"maria","job":"Enfermeiro(a)","gender":"F","age":25,"skills":[["DEMENCIA","Demencia"],["SONDA_NASOG","Sonda Nasogástrica"],["ACAMADO","Pessoas acamadas"]],"district":"Porto","city":"Gondomar","reviews":[],"avgRating":1,"price":"43\u20ac\/h","description":"Ola, chamo-me Maria, sou um(a) Enfermeiro(a) e estou atualmente \u00e0 procura de fazer umas horas extra a tomar conta de pessoas idosas.","schedule":"Segundas e Quintas entre as 9h e as 12h"},
{"id":16,"name":"Tiago","username":"tiago","job":"Enfermeiro(a)","gender":"M","age":34,"skills":[["DEMENCIA","Demencia"]],"district":"Porto","city":"Gondomar","reviews":[],"avgRating":3,"price":"19\u20ac\/h","description":"Ola, chamo-me Tiago, sou um(a) Enfermeiro(a) e estou atualmente \u00e0 procura de fazer umas horas extra a tomar conta de pessoas idosas.","schedule":"Dias uteis entre as 21h e as 04h"},
{"id":17,"name":"Jorge","username":"jorge","job":"Arquiteto(a)","gender":"M","age":38,"skills":[["ACAMADO","Pessoas acamadas"]],"district":"Lisboa","city":"Estoril","reviews":[],"avgRating":5,"price":"55\u20ac\/h","description":"Ola, chamo-me Jorge, sou um(a) Arquiteto(a) e estou atualmente \u00e0 procura de fazer umas horas extra a tomar conta de pessoas idosas.","schedule":"Segunda a Sexta feira a partir das 18h"},
{"id":18,"name":"Maria","username":"maria","job":"Enfermeiro(a)","gender":"F","age":44,"skills":[["DEMENCIA","Demencia"],["SONDA_NASOG","Sonda Nasogástrica"],["ACAMADO","Pessoas acamadas"]],"district":"Porto","city":"Gondomar","reviews":[],"avgRating":4,"price":"45\u20ac\/h","description":"Ola, chamo-me Maria, sou um(a) Enfermeiro(a) e estou atualmente \u00e0 procura de fazer umas horas extra a tomar conta de pessoas idosas.","schedule":"Fins de semana"},
{"id":19,"name":"Jorge","username":"jorge","job":"Limpeza","gender":"M","age":21,"skills":[],"district":"Porto","city":"Gondomar","reviews":[],"avgRating":3,"price":"11\u20ac\/h","description":"Ola, chamo-me Jorge, sou um(a) Limpeza e estou atualmente \u00e0 procura de fazer umas horas extra a tomar conta de pessoas idosas.","schedule":"Segundas e Quintas entre as 9h e as 12h"},
];



        $scope.loadMore = function() {
            console.log($scope.caregivers.length);
            var incremented = $scope.limit + 3;
            $scope.limit = incremented > $scope.caregivers.length ? $scope.caregivers.length : incremented;
        };

        $scope.loadCaregiver = function(index) {
            CaregiverService.setCaregiver($scope.caregivers[index]);
            $state.go('seeker.caregiverProfile', {
                caregiverID: $scope.caregivers[index].id
            })
        };
    }
]);
