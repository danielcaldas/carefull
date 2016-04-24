angular.module("CareFull").controller("CaregiversController", ['$scope', 'CaregiverService', '$state',
    function($scope, CaregiverService, $state) {

        $scope.limit = 3;
        $scope.advancedOptions = true;

        $scope.showAdvancedOptions = function () {
           $scope.advancedOptions = !$scope.advancedOptions;
        }

        $scope.caregivers = [
{"id":0,"name":"Maria Silva","username":"maria silva","job":"Enfermeiro(a)","gender":"F","age":47,"skills":[],"district":"Lisboa","city":"Estoril","reviews":[{"rating":3,"comment":"Penso que o servi\u00e7o foi razo\u00e1vel.","user":"Mateus Matias"},{"rating":4,"comment":"Boa atitude, muito prest\u00e1vel.","user":"Sara Matos"},{"rating":5,"comment":"Penso que nunca irei encontrar melhor aqui no CareFull. Obrigado!","user":"Sara Matos"},{"rating":1,"comment":"Pouco prest\u00e1vel, pre\u00e7o demasiado elevado para o servi\u00e7o.","user":"Sara Matos"},{"rating":1,"comment":"Penso que para profissional de saude podia prestar um melhor servico","user":"Carlos Costa"}],"avgRating":5,"price":"11\u20ac\/h","description":"Ola, chamo-me Maria Silva, sou um(a) Enfermeiro(a) e estou atualmente \u00e0 procura de fazer umas horas extra a tomar conta de pessoas idosas.","schedule":"Segundas e Quintas entre as 9h e as 12h"},
{"id":1,"name":"Tiago Pinto","username":"tiago pinto","job":"Arquiteto(a)","gender":"M","age":42,"skills":[["DEMENCIA","Demencia"],["SONDA_NASOG","Sonda Nasogastrica"],["ACAMADO","Pessoas acamadas"]],"district":"Lisboa","city":"Estoril","reviews":[{"rating":1,"comment":"Penso que para profissional de saude podia prestar um melhor servico","user":"Mateus Matias"},{"rating":2,"comment":"N\u00e3o foi pontual no entanto nao tenho queixa do servi\u00e7o prestado.","user":"Carlos Costa"},{"rating":3,"comment":"Penso que o servi\u00e7o foi razo\u00e1vel.","user":"Mateus Matias"},{"rating":4,"comment":"Boa atitude, muito prest\u00e1vel.","user":"Carlos Costa"},{"rating":5,"comment":"Penso que nunca irei encontrar melhor aqui no CareFull. Obrigado!","user":"Mateus Matias"}],"avgRating":5,"price":"36\u20ac\/h","description":"Ola, chamo-me Tiago Pinto, sou um(a) Arquiteto(a) e estou atualmente \u00e0 procura de fazer umas horas extra a tomar conta de pessoas idosas.","schedule":"Fins de semana"},
{"id":2,"name":"Tiago Pinto","username":"tiago pinto","job":"Arquiteto(a)","gender":"M","age":23,"skills":[],"district":"Lisboa","city":"Estoril","reviews":[{"rating":4,"comment":"Boa atitude, muito prest\u00e1vel.","user":"Mateus Matias"},{"rating":5,"comment":"Penso que nunca irei encontrar melhor aqui no CareFull. Obrigado!","user":"Martim Pereira"},{"rating":0,"comment":"Pouco prest\u00e1vel, pre\u00e7o demasiado elevado para o servi\u00e7o.","user":"Sara Matos"},{"rating":1,"comment":"Penso que para profissional de saude podia prestar um melhor servico","user":"Martim Pereira"},{"rating":2,"comment":"N\u00e3o foi pontual no entanto nao tenho queixa do servi\u00e7o prestado.","user":"Carlos Costa"}],"avgRating":5,"price":"14\u20ac\/h","description":"Ola, chamo-me Tiago Pinto, sou um(a) Arquiteto(a) e estou atualmente \u00e0 procura de fazer umas horas extra a tomar conta de pessoas idosas.","schedule":"Sabados"},
{"id":3,"name":"Tiago Pinto","username":"tiago pinto","job":"Estudante","gender":"M","age":38,"skills":[["SONDA_NASOG","Sonda Nasogastrica"]],"district":"Lisboa","city":"Estoril","reviews":[{"rating":2,"comment":"N\u00e3o foi pontual no entanto nao tenho queixa do servi\u00e7o prestado.","user":"Sara Matos"},{"rating":3,"comment":"Penso que o servi\u00e7o foi razo\u00e1vel.","user":"Martim Pereira"},{"rating":4,"comment":"Boa atitude, muito prest\u00e1vel.","user":"Mateus Matias"},{"rating":5,"comment":"Penso que nunca irei encontrar melhor aqui no CareFull. Obrigado!","user":"Carlos Costa"}],"avgRating":2,"price":"12\u20ac\/h","description":"Ola, chamo-me Tiago Pinto, sou um(a) Estudante e estou atualmente \u00e0 procura de fazer umas horas extra a tomar conta de pessoas idosas.","schedule":"Segunda a Sexta feira a partir das 18h"},
{"id":4,"name":"Carla Macedo","username":"carla macedo","job":"Enfermeiro(a)","gender":"F","age":48,"skills":[["SONDA_NASOG","Sonda Nasogastrica"],["ACAMADO","Pessoas acamadas"],["HIGIENE","Higiene"]],"district":"Porto","city":"Gondomar","reviews":[{"rating":5,"comment":"Penso que nunca irei encontrar melhor aqui no CareFull. Obrigado!","user":"Sara Matos"}],"avgRating":2,"price":"46\u20ac\/h","description":"Ola, chamo-me Carla Macedo, sou um(a) Enfermeiro(a) e estou atualmente \u00e0 procura de fazer umas horas extra a tomar conta de pessoas idosas.","schedule":"Sabados"},
{"id":5,"name":"Tiago Pinto","username":"tiago pinto","job":"Limpeza","gender":"M","age":31,"skills":[],"district":"Lisboa","city":"Estoril","reviews":[{"rating":5,"comment":"Penso que nunca irei encontrar melhor aqui no CareFull. Obrigado!","user":"Carlos Costa"},{"rating":0,"comment":"Pouco prest\u00e1vel, pre\u00e7o demasiado elevado para o servi\u00e7o.","user":"Mateus Matias"},{"rating":1,"comment":"Penso que para profissional de saude podia prestar um melhor servico","user":"Martim Pereira"}],"avgRating":3,"price":"46\u20ac\/h","description":"Ola, chamo-me Tiago Pinto, sou um(a) Limpeza e estou atualmente \u00e0 procura de fazer umas horas extra a tomar conta de pessoas idosas.","schedule":"Segundas e Quintas entre as 9h e as 12h"},
{"id":6,"name":"Maria Silva","username":"maria silva","job":"Arquiteto(a)","gender":"F","age":48,"skills":[["DEMENCIA","Demencia"],["SONDA_NASOG","Sonda Nasogastrica"]],"district":"Lisboa","city":"Estoril","reviews":[{"rating":2,"comment":"N\u00e3o foi pontual no entanto nao tenho queixa do servi\u00e7o prestado.","user":"Martim Pereira"},{"rating":3,"comment":"Penso que o servi\u00e7o foi razo\u00e1vel.","user":"Martim Pereira"},{"rating":4,"comment":"Boa atitude, muito prest\u00e1vel.","user":"Carlos Costa"},{"rating":5,"comment":"Penso que nunca irei encontrar melhor aqui no CareFull. Obrigado!","user":"Carlos Costa"},{"rating":0,"comment":"Pouco prest\u00e1vel, pre\u00e7o demasiado elevado para o servi\u00e7o.","user":"Martim Pereira"}],"avgRating":3,"price":"19\u20ac\/h","description":"Ola, chamo-me Maria Silva, sou um(a) Arquiteto(a) e estou atualmente \u00e0 procura de fazer umas horas extra a tomar conta de pessoas idosas.","schedule":"Segundas e Quintas entre as 9h e as 12h"},
{"id":7,"name":"Jorge Caldas","username":"jorge caldas","job":"Limpeza","gender":"M","age":27,"skills":[["ACAMADO","Pessoas acamadas"],["HIGIENE","Higiene"],["DEMENCIA","Demencia"]],"district":"Porto","city":"Gondomar","reviews":[{"rating":4,"comment":"Boa atitude, muito prest\u00e1vel.","user":"Mateus Matias"},{"rating":5,"comment":"Penso que nunca irei encontrar melhor aqui no CareFull. Obrigado!","user":"Sara Matos"},{"rating":0,"comment":"Pouco prest\u00e1vel, pre\u00e7o demasiado elevado para o servi\u00e7o.","user":"Martim Pereira"}],"avgRating":4,"price":"22\u20ac\/h","description":"Ola, chamo-me Jorge Caldas, sou um(a) Limpeza e estou atualmente \u00e0 procura de fazer umas horas extra a tomar conta de pessoas idosas.","schedule":"Quartas e Quintas feiras"},
{"id":8,"name":"Tiago Pinto","username":"tiago pinto","job":"Arquiteto(a)","gender":"M","age":32,"skills":[["DEMENCIA","Demencia"],["SONDA_NASOG","Sonda Nasogastrica"]],"district":"Porto","city":"Gondomar","reviews":[{"rating":1,"comment":"Pouco prest\u00e1vel, pre\u00e7o demasiado elevado para o servi\u00e7o.","user":"Carlos Costa"},{"rating":1,"comment":"Penso que para profissional de saude podia prestar um melhor servico","user":"Martim Pereira"},{"rating":2,"comment":"N\u00e3o foi pontual no entanto nao tenho queixa do servi\u00e7o prestado.","user":"Mateus Matias"}],"avgRating":4,"price":"20\u20ac\/h","description":"Ola, chamo-me Tiago Pinto, sou um(a) Arquiteto(a) e estou atualmente \u00e0 procura de fazer umas horas extra a tomar conta de pessoas idosas.","schedule":"Quartas e Quintas feiras"},
{"id":9,"name":"Maria Silva","username":"maria silva","job":"Enfermeiro(a)","gender":"F","age":23,"skills":[["DEMENCIA","Demencia"],["SONDA_NASOG","Sonda Nasogastrica"]],"district":"Lisboa","city":"Estoril","reviews":[{"rating":1,"comment":"Penso que para profissional de saude podia prestar um melhor servico","user":"Mateus Matias"},{"rating":2,"comment":"N\u00e3o foi pontual no entanto nao tenho queixa do servi\u00e7o prestado.","user":"Martim Pereira"},{"rating":3,"comment":"Penso que o servi\u00e7o foi razo\u00e1vel.","user":"Mateus Matias"},{"rating":4,"comment":"Boa atitude, muito prest\u00e1vel.","user":"Carlos Costa"}],"avgRating":3,"price":"50\u20ac\/h","description":"Ola, chamo-me Maria Silva, sou um(a) Enfermeiro(a) e estou atualmente \u00e0 procura de fazer umas horas extra a tomar conta de pessoas idosas.","schedule":"Fins de semana"},
{"id":10,"name":"Jorge Caldas","username":"jorge caldas","job":"Limpeza","gender":"M","age":53,"skills":[["SONDA_NASOG","Sonda Nasogastrica"]],"district":"Lisboa","city":"Estoril","reviews":[{"rating":0,"comment":"Pouco prest\u00e1vel, pre\u00e7o demasiado elevado para o servi\u00e7o.","user":"Carlos Costa"},{"rating":1,"comment":"Penso que para profissional de saude podia prestar um melhor servico","user":"Carlos Costa"},{"rating":2,"comment":"N\u00e3o foi pontual no entanto nao tenho queixa do servi\u00e7o prestado.","user":"Carlos Costa"},{"rating":3,"comment":"Penso que o servi\u00e7o foi razo\u00e1vel.","user":"Mateus Matias"},{"rating":4,"comment":"Boa atitude, muito prest\u00e1vel.","user":"Sara Matos"}],"avgRating":1,"price":"25\u20ac\/h","description":"Ola, chamo-me Jorge Caldas, sou um(a) Limpeza e estou atualmente \u00e0 procura de fazer umas horas extra a tomar conta de pessoas idosas.","schedule":"Quartas e Quintas feiras"},
{"id":11,"name":"Maria Silva","username":"maria silva","job":"Estudante","gender":"F","age":19,"skills":[["SONDA_NASOG","Sonda Nasogastrica"],["ACAMADO","Pessoas acamadas"]],"district":"Lisboa","city":"Estoril","reviews":[],"avgRating":5,"price":"35\u20ac\/h","description":"Ola, chamo-me Maria Silva, sou um(a) Estudante e estou atualmente \u00e0 procura de fazer umas horas extra a tomar conta de pessoas idosas.","schedule":"Fins de semana"},
{"id":12,"name":"Maria Silva","username":"maria silva","job":"Estudante","gender":"F","age":44,"skills":[["HIGIENE","Higiene"],["DEMENCIA","Demencia"],["SONDA_NASOG","Sonda Nasogastrica"]],"district":"Lisboa","city":"Estoril","reviews":[{"rating":3,"comment":"Penso que o servi\u00e7o foi razo\u00e1vel.","user":"Sara Matos"},{"rating":4,"comment":"Boa atitude, muito prest\u00e1vel.","user":"Sara Matos"},{"rating":5,"comment":"Penso que nunca irei encontrar melhor aqui no CareFull. Obrigado!","user":"Martim Pereira"},{"rating":0,"comment":"Pouco prest\u00e1vel, pre\u00e7o demasiado elevado para o servi\u00e7o.","user":"Sara Matos"},{"rating":1,"comment":"Penso que para profissional de saude podia prestar um melhor servico","user":"Carlos Costa"}],"avgRating":4,"price":"2\u20ac\/h","description":"Ola, chamo-me Maria Silva, sou um(a) Estudante e estou atualmente \u00e0 procura de fazer umas horas extra a tomar conta de pessoas idosas.","schedule":"Fins de semana"},
{"id":13,"name":"Carla Macedo","username":"carla macedo","job":"Estudante","gender":"F","age":50,"skills":[["HIGIENE","Higiene"]],"district":"Porto","city":"Gondomar","reviews":[{"rating":2,"comment":"N\u00e3o foi pontual no entanto nao tenho queixa do servi\u00e7o prestado.","user":"Carlos Costa"},{"rating":3,"comment":"Penso que o servi\u00e7o foi razo\u00e1vel.","user":"Sara Matos"},{"rating":4,"comment":"Boa atitude, muito prest\u00e1vel.","user":"Martim Pereira"}],"avgRating":1,"price":"43\u20ac\/h","description":"Ola, chamo-me Carla Macedo, sou um(a) Estudante e estou atualmente \u00e0 procura de fazer umas horas extra a tomar conta de pessoas idosas.","schedule":"Sabados"},
{"id":14,"name":"Jorge Caldas","username":"jorge caldas","job":"Limpeza","gender":"M","age":43,"skills":[["SONDA_NASOG","Sonda Nasogastrica"],["ACAMADO","Pessoas acamadas"],["HIGIENE","Higiene"]],"district":"Lisboa","city":"Estoril","reviews":[],"avgRating":4,"price":"6\u20ac\/h","description":"Ola, chamo-me Jorge Caldas, sou um(a) Limpeza e estou atualmente \u00e0 procura de fazer umas horas extra a tomar conta de pessoas idosas.","schedule":"Segundas e Quintas entre as 9h e as 12h"},
{"id":15,"name":"Jorge Caldas","username":"jorge caldas","job":"Enfermeiro(a)","gender":"M","age":32,"skills":[["ACAMADO","Pessoas acamadas"],["HIGIENE","Higiene"],["DEMENCIA","Demencia"]],"district":"Porto","city":"Gondomar","reviews":[{"rating":0,"comment":"Pouco prest\u00e1vel, pre\u00e7o demasiado elevado para o servi\u00e7o.","user":"Martim Pereira"}],"avgRating":5,"price":"12\u20ac\/h","description":"Ola, chamo-me Jorge Caldas, sou um(a) Enfermeiro(a) e estou atualmente \u00e0 procura de fazer umas horas extra a tomar conta de pessoas idosas.","schedule":"Fins de semana"},
{"id":16,"name":"Carla Macedo","username":"carla macedo","job":"Limpeza","gender":"F","age":19,"skills":[["SONDA_NASOG","Sonda Nasogastrica"],["ACAMADO","Pessoas acamadas"]],"district":"Lisboa","city":"Estoril","reviews":[{"rating":1,"comment":"Pouco prest\u00e1vel, pre\u00e7o demasiado elevado para o servi\u00e7o.","user":"Sara Matos"}],"avgRating":1,"price":"42\u20ac\/h","description":"Ola, chamo-me Carla Macedo, sou um(a) Limpeza e estou atualmente \u00e0 procura de fazer umas horas extra a tomar conta de pessoas idosas.","schedule":"Segundas e Quintas entre as 9h e as 12h"},
{"id":17,"name":"Jorge Caldas","username":"jorge caldas","job":"Estudante","gender":"M","age":33,"skills":[["ACAMADO","Pessoas acamadas"],["HIGIENE","Higiene"],["DEMENCIA","Demencia"]],"district":"Lisboa","city":"Estoril","reviews":[{"rating":4,"comment":"Boa atitude, muito prest\u00e1vel.","user":"Carlos Costa"}],"avgRating":4,"price":"14\u20ac\/h","description":"Ola, chamo-me Jorge Caldas, sou um(a) Estudante e estou atualmente \u00e0 procura de fazer umas horas extra a tomar conta de pessoas idosas.","schedule":"Quartas e Quintas feiras"},
{"id":18,"name":"Carla Macedo","username":"carla macedo","job":"Arquiteto(a)","gender":"F","age":19,"skills":[["DEMENCIA","Demencia"]],"district":"Porto","city":"Gondomar","reviews":[{"rating":1,"comment":"Penso que para profissional de saude podia prestar um melhor servico","user":"Sara Matos"},{"rating":2,"comment":"N\u00e3o foi pontual no entanto nao tenho queixa do servi\u00e7o prestado.","user":"Sara Matos"},{"rating":3,"comment":"Penso que o servi\u00e7o foi razo\u00e1vel.","user":"Martim Pereira"},{"rating":4,"comment":"Boa atitude, muito prest\u00e1vel.","user":"Carlos Costa"},{"rating":5,"comment":"Penso que nunca irei encontrar melhor aqui no CareFull. Obrigado!","user":"Martim Pereira"}],"avgRating":4,"price":"5\u20ac\/h","description":"Ola, chamo-me Carla Macedo, sou um(a) Arquiteto(a) e estou atualmente \u00e0 procura de fazer umas horas extra a tomar conta de pessoas idosas.","schedule":"Quartas e Quintas feiras"},
{"id":19,"name":"Jorge Caldas","username":"jorge caldas","job":"Limpeza","gender":"M","age":51,"skills":[],"district":"Lisboa","city":"Estoril","reviews":[{"rating":1,"comment":"Penso que para profissional de saude podia prestar um melhor servico","user":"Martim Pereira"}],"avgRating":3,"price":"37\u20ac\/h","description":"Ola, chamo-me Jorge Caldas, sou um(a) Limpeza e estou atualmente \u00e0 procura de fazer umas horas extra a tomar conta de pessoas idosas.","schedule":"Segunda a Sexta feira a partir das 18h"}
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
