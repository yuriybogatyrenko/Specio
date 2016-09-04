<?php

$sendmail = 'frontline_tz@mail.ru';

$username = $_POST['username'];
$usermail = $_POST['usermail'];
$userphone = $_POST['userphone'];
$usermessage = $_POST['usermessage'];

print_r($_POST);

if ((isset($usermail) && $usermail != '') || (isset($userphone) && $userphone != '')) {
    // Для отправки HTML-письма должен быть установлен заголовок Content-type
    $headers  = 'MIME-Version: 1.0' . "\r\n";
    $headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";

// Дополнительные заголовки
    $headers .= 'To: ' .$sendmail. "\r\n";
    $headers .= 'From: Specio Order <noreply@specio.kz>' . "\r\n";
    $headers .= 'Cc: noreply@specio.kz' . "\r\n";
    $headers .= 'Bcc: noreply@specio.kz' . "\r\n";



    $message = '';

    if (isset($username) and $username != '')
        $message .= '<p>Имя клиента: '.$username.'</p>';
    if (isset($usermail) and $usermail != '')
        $message .= '<p>Почта клиента: '.$usermail.'</p>';
    if (isset($userphone) and $userphone != '')
        $message .= '<p>Телефон клиента: '.$userphone.'</p>';
    if (isset($usermessage) and $usermessage != '')
        $message .= '<p>Сообщение клиента: '.$usermessage.'</p>';

//    mail($sendmail,'Specio заявка',$message, $headers);

    if(mail($sendmail,'Specio заявка',$message, $headers)){
        echo "The email was successfully sent.";
    } else {
        echo "The email($email_subject) was NOT sent.";
    }

//    echo $message;
}