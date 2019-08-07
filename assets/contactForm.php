<?php

if (isset($_POST['submit'])) {
    $name = $_POST['name'];
    $subject = "Coming Soon!"
    $email = $_POST['email'];
    $message = $_POST['message'];
    
    $myEmail = "sarneet123@gmail.com"
    $headers = "From: ".$email;
    $txt = "You have received an e-mail from ".$name.".\n\n".$message;

    mail($myEmail, $subject, $txt, $headers);
    header("Location: index.php?mailsend");
}

?>