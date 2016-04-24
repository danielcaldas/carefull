<?php

/*
// Keys to experience and skills
DEMENCIA
SONDA_NASOG
ACAMADO
HIGIENE
*/

// Common basis
$NAMES = array(0 => array("Maria Silva", 'F'), 1 => array("Tiago Pinto", 'M'), 2 => array("Carla Macedo", 'F'), 3 => array("Jorge Caldas", 'M'));
$NAMES_USERS = array(0 => array("Sara Matos", 'F'), 1 => array("Mateus Matias", 'M'), 2 => array("Carlos Costa", 'M'), 3 => array("Martim Pereira", 'M'));
$JOBS = array(0 => "Estudante", 1 => "Arquiteto(a)", 2 => "Enfermeiro(a)", 3 => "Limpeza");
$DISTRICTS = array(0 => array("Porto", "Gondomar"), 1 => array("Lisboa", "Estoril"));
$SKILLZ = array(0 => array("DEMENCIA", "Demencia"), 1 => array("SONDA_NASOG", "Sonda Nasogastrica"), 2 => array("ACAMADO", "Pessoas acamadas"), 3 => array("HIGIENE", "Higiene"));

$DESCRIPTION_A = "Ola, chamo-me ";
$DESCRIPTION_B = ", sou um(a) ";
$DESCRIPTION_C = " e estou atualmente à procura de fazer umas horas extra a tomar conta de pessoas idosas.";

$SHCEDULE = array(0 => "Quartas e Quintas feiras", 1 => "Segunda a Sexta feira a partir das 18h", 2 => "Sabados", 3 => "Segundas e Quintas entre as 9h e as 12h", 4 => "Fins de semana", 5 => "Dias uteis entre as 21h e as 04h");

$COMMENTZ = array(0 => "Pouco prestável, preço demasiado elevado para o serviço.", 1 => "Penso que para profissional de saude podia prestar um melhor servico", 2 => "Não foi pontual no entanto nao tenho queixa do serviço prestado.", 3 => "Penso que o serviço foi razoável.", 4 => "Boa atitude, muito prestável.", 5 => "Penso que nunca irei encontrar melhor aqui no CareFull. Obrigado!");

class Review {
  public $id;
  public $comment;
  public $rating;
  public $user;
  public $caregiver;

  public function __construct($id, $comment, $rating, $user, $caregiver) {
    $this->id = $id;
    $this->comment = $comment;
    $this->rating = $rating;
    $this->user = $user;
    $this->caregiver = $caregiver;
  }
}

class Caregiver {
  public $id;
  public $name;
  public $username;
  public $job;
  public $gender;
  public $age;
  public $skills;
  public $district;
  public $city;
  public $reviews;
  public $avgRating;
  public $price;
  public $description;
  public $schedule;

  public function __construct($id, $name, $username, $job, $gender, $age, $skills, $district, $city, $reviews, $avgRating, $price, $description, $schedule) {
    $this->id = $id;
    $this->name = $name;
    $this->username = $username;
    $this->job = $job;
    $this->gender = $gender;
    $this->age = $age;
    $this->skills = $skills;
    $this->district = $district;
    $this->city = $city;
    $this->reviews = $reviews;
    $this->avgRating = $avgRating;
    $this->price = $price;
    $this->description = $description;
    $this->schedule = $schedule;
  }
}


// Generate
print "\$scope.VARIBLE = [\n";
for ($i=0; $i < 20; $i++) {
  $iname = rand(0,count($NAMES)-1);
  $ijob = rand(0,count($JOBS)-1);
  $ilocation = rand(0,count($DISTRICTS)-1);

  $iskills = array();
  $repeat = array();
  // random skills
  $new_s = rand(0,count($SKILLZ)-1);
  $nskillz = rand(0,count($SKILLZ)-1);
  for ($j=0; $j < $nskillz; $j++) {
    $iskills[$j] = $SKILLZ[$new_s];
    array_push($repeat,$new_s);
    if($new_s >= count($SKILLZ)-1) {
      $new_s=0;
    } else $new_s++;
  }
  // random reviews
  $ireviews = array();
  $repeat = array();
  $new_r = rand(1,count($COMMENTZ)-1);
  $nreviews = rand(0,count($COMMENTZ)-1);
  for ($j=0; $j < $nreviews; $j++) {
    $ireviews[$j] = array("rating" => $new_r, "comment" => $COMMENTZ[$new_r], "user" => $NAMES_USERS[rand(0,count($NAMES_USERS)-1)][0]);
    array_push($repeat,$new_r);
    if($new_r >= count($COMMENTZ)-1) {
      $new_r=0;
    } else $new_r++;
  }

  $cg = new Caregiver($i, $NAMES[$iname][0], strtolower($NAMES[$iname][0]), $JOBS[$ijob], $NAMES[$iname][1], rand(18,55), $iskills, $DISTRICTS[$ilocation][0], $DISTRICTS[$ilocation][1], $ireviews, rand(1,5), rand(0,55)."€/h",
  $DESCRIPTION_A.$NAMES[$iname][0].$DESCRIPTION_B.$JOBS[$ijob].$DESCRIPTION_C, $SHCEDULE[rand(0,count($SHCEDULE)-1)]);
  print json_encode($cg).",\n";
}
print "\n];";

?>
