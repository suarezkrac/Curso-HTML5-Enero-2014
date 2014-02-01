<?php
require 'PHPMailerAutoload.php';

$nombre = $_POST['nombre_usuario'];
$correo_usuario = $_POST['correo_usuario'];
$mensaje_usuario = $_POST['mensaje_usuario'];



$correo="<p>".$nombre." con correo electronico : ".$correo_usuario." escribio el mensaje : ".$mensaje_usuario."</p>";


$mail = new PHPMailer();
$mail->setFrom('giovanny.suarez@multimedialab.co', 'Giovanny Suarez');
$mail->addAddress('giovanny.suarez@multimedialab.co', 'Giovanny Suarez');
$mail->Subject = 'Nuevo Contacto';
$mail->msgHTML($correo);
$mail->AltBody = 'Nuevo Correo de contacto';
if (!$mail->send()) {
    echo "Mailer Error: " . $mail->ErrorInfo;
} else {
    echo "Message sent!";
}





?>