<?php


  $name = $_POST['given-name'];
  $surname = $_POST['family-name'];
  $phone = $_POST['phone'];
  $visitor = $_POST['email'];
  $message = $_POST['message'];
  $htmlContent = file_get_contents("email_template.html");
  $email_subiect = $_POST['subiect'];

  $email_body = "Imię: $name $surname.\n".
                  "Email: $visitor.\n".
                   "Telefon: $phone.\n".
                    "Temat: $email_subiect.\n".
                     "Wiadomość: $message.\n";

  $to = 'kontakt@webitbase.com';

$headers = "From: Webitbase <kontakt@webitbase.com>". "\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";

  mail($to,$email_subiect,$email_body,$visitor);

  mail($visitor,$email_subiect,$htmlContent,$headers);

  header("Location: ../index.php");

?>
