<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php';

// Recibir datos del formulario
$nombre = isset($_POST['name']) ? $_POST['name'] : '';
$apellido = isset($_POST['lastname']) ? $_POST['lastname'] : '';
$titulo = isset($_POST['title']) ? $_POST['title'] : '';
$correo = isset($_POST['email']) ? $_POST['email'] : '';
$mensaje = isset($_POST['message']) ? $_POST['message'] : '';

$mail = new PHPMailer(true);

$response = [];

try {
    $mail->isSMTP();
    $mail->Host = 'smtp.hostinger.com';
    $mail->SMTPAuth = true;
    $mail->Username = 'EMAIL USER';
    $mail->Password = 'EMAIL PASSW';
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port = 'EMAIL_PORT';

    $mail->setFrom('EMAIL', 'EMAIL TITLE');
    $mail->addAddress('EMAIL');
    $mail->addAddress('OTHER_EMAIL');
    $mail->addReplyTo($correo, $nombre);

    $mail->isHTML(false);
    $mail->Subject = "EMAIL SUBJECT";
    $mail->Body = "Nombre: $nombre\nApellido: $apellido\nTítulo: $titulo\nCorreo: $correo\nMensaje: $mensaje";

    if ($mail->send()) {
        $response = [
            'success' => true,
            'message' => 'Gracias, tus datos han sido recibidos.'
        ];
    } else {
        $response = [
            'success' => false,
            'message' => 'Error al enviar el correo.'
        ];
    }
} catch (Exception $e) {
    $response = [
        'success' => false,
        'message' => 'Error al enviar el correo: ' . $mail->ErrorInfo
    ];
}

header('Content-Type: application/json');
echo json_encode($response);
