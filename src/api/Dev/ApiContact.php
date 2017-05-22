<?php

header("Access-Control-Allow-Origin: http://localhost:3000");
//header("Access-Control-Allow-Origin: https://sickadelicposters.netlify.com");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept, Authorization, If-Modified-Since, Cache-Control, Pragma");


// ----- validation -----  
$valide = true;

//honetpot
if(!empty($_POST['Honeypot'])){
  $valide = false;
  $msgerreur = "Le formulaire semble contenir des erreurs.";
}

//Sujet
if(isset($_POST['Sujet'])){
  $sujet = $_POST['Sujet'];
}
else{
  $sujet = "";
  $valide = false;
}

//prenom
if(isset($_POST['Prenom'])){
  $prenom = $_POST['Prenom'];
}
else{
  $prenom = "";
  $valide = false;
}

//nom
if(isset($_POST['Nom'])){
  $nom = $_POST['Nom'];
}
else{
  $nom = "";
  $valide = false;
}

//courriel
if(isset($_POST['Email'])){
  $email = $_POST['Email'];
}
else{
  $email = "";
  $valide = false;
}

//message
if(isset($_POST['Message'])){
  $message = $_POST['Message'];
}
else{
  $message = "";
  $valide = false;
}

if($valide){
  $to = 'sickadelic.posters@gmail.com';
  $msg = '
    NOM: '.$prenom.' '.$nom.'
    EMAIL: '.$email.'
    Sujet: '.$sujet.'
    MESSAGE: '.$message;
  $headers = 'From: '.$email . "\r\n" .
    'Reply-To: '.$email . "\r\n" .
    'X-Mailer: PHP/' . phpversion();
  mail($to, 'Website Contact Form | '.$sujet, $msg, $headers);
  //$host  = $_SERVER['HTTP_HOST'];
  //$uri   = rtrim(dirname($_SERVER['PHP_SELF']), '/\\');
  //$extra = 'que-faire-lors-d-un-deces-merci';
  //header("Location: http://groupeba.ca/que-faire-lors-d-un-deces-merci");
  //header("Location: http://dev.absoludev.ca/Boudreau/confirmation.php");
}

?>