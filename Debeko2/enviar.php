<?php
$name= $_POST['nombre'];
$email= $_POST['email'];
$asunto=$_POST['asunto'];
$mensaje=$_POST['mensaje'];

$header= 'Desde: '. $email . '\n';
$header='Mine version: 1.0 \n';
$header= 'Content-Type: text/plain';

$message='Mensaje enviado por: '. $name . '\n';
$message='Su email es: '. $email.'\n';
$message= 'Asunto: '. $asunto.'\n';
$message='Mensaje: '. $$mensaje . '\n';

$para='farinasiker@gmail.com';
$asunto2='Asunto del mensaje: ';

mail($para, $asunto2, mb_convert_encoding($message, 'UTF-8', 'auto'), $header);












?>