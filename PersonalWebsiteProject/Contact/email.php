<!-- Contact Page  -->

<?php

$name = $_POST['name'];

  $visitor_email = $_POST['email'];

  $message = $_POST['message'];

?>

<?php

 $email_from = 'mail@company.com';

 $email_subject = "New Form submission";

    $email_body = "You have received a new message from the user $name.\n".
                            "Here is the message:\n $message".



$to = "yourname@yourwebsite.com, $email /n";

 $headers = "From: Company";


  mail($to,$email_subject,$email_body,$headers);

?>