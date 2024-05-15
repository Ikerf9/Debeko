<?php
$name = $_POST['nombre'];
$email = $_POST['email'];
$asunto = $_POST['asunto'];
$mensaje = $_POST['mensaje'];

// Configuración de las cabeceras
$header = 'From: ' . $email . "\r\n";
$header .= 'MIME-Version: 1.0' . "\r\n";
$header .= 'Content-Type: text/plain; charset=UTF-8' . "\r\n";

// Construcción del mensaje
$message = 'Mensaje enviado por: ' . $name . "\n";
$message .= 'Su email es: ' . $email . "\n";
$message .= 'Asunto: ' . $asunto . "\n";
$message .= 'Mensaje: ' . $mensaje . "\n";

// Dirección de destino
$para = 'farinasiker@gmail.com';
$asunto2 = 'Asunto del mensaje: ' . $asunto;

// Envío del correo
mail($para, $asunto2, $message, $header);

if(mail($para, $asunto2, $message, $header)) {
    echo "Correo enviado exitosamente.";
} else {
    echo "Error al enviar el correo.";
}
?>
