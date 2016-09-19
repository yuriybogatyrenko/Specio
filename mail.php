<?php
//print_r($_POST);
require 'PHPMailerAutoload.php';

$recipient = 'shop@specio.kz';

$username = $_POST['username'];
$usermail = $_POST['usermail'];
$userphone = $_POST['userphone'];
$usermessage = $_POST['usermessage'];


if ((isset($usermail) && $usermail != '') || (isset($userphone) && $userphone != '')) {

    $message = '';

    if (isset($username) and $username != '')
        $message .= '<p>Имя клиента: ' . $username . '</p>';
    if (isset($usermail) and $usermail != '')
        $message .= '<p>Почта клиента: ' . $usermail . '</p>';
    if (isset($userphone) and $userphone != '')
        $message .= '<p>Телефон клиента: ' . $userphone . '</p>';
    if (isset($usermessage) and $usermessage != '')
        $message .= '<p>Сообщение клиента: ' . $usermessage . '</p>';

//    mail($sendmail,'Specio заявка',$message, $headers);

    $mail = new PHPMailer;
//
//    $mail->SMTPDebug = 3;                               // Enable verbose debug output
//
    $mail->isSMTP();                                      // Set mailer to use SMTP
    $mail->Host = 'smtp.yandex.ru';  // Specify main and backup SMTP servers
    $mail->SMTPAuth = true;                               // Enable SMTP authentication
    $mail->Username = 'noreply@specio.kz';                 // SMTP username
    $mail->Password = 'SAdlka@@!#alsdk';                           // SMTP password
////$mail->SMTPSecure = 'tls';                            // Enable TLS encryption, `ssl` also accepted
    $mail->Port = 25;                                   // TCP port to connect to
    $mail->CharSet = 'UTF-8';
//
    $mail->setFrom('noreply@specio.kz', 'Заявка Specio.kz');
    $mail->addReplyTo("$usermail", "$username");     // Add a recipient
    $mail->addAddress($recipient, 'Магазин Specio.kz');
////$mail->addCC('cc@example.com');
////$mail->addBCC('bcc@example.com');
//
////    $mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
////    $mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
    $mail->isHTML(true);                                  // Set email format to HTML
//
    $mail->Subject = 'Заявка Specio.kz';
    $mail->Body = $message;
//$mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

    if (!$mail->send()) {
//    echo 'Message could not be sent.';
        echo 'Mailer Error: ' . $mail->ErrorInfo;
    } else {
        echo 'Message has been sent';
    }

//    echo $message;
}