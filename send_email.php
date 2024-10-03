<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $phone = htmlspecialchars($_POST['phone']);
    $address = htmlspecialchars($_POST['address']);
    $email = htmlspecialchars($_POST['email']);

    $to = 'kene.obi9@gmail.com'; // Replace with your email address
    $subject = 'New Ride Request';
    $message = "Name: $name\nPhone: $phone\nAddress: $address\nEmail: $email";

    // Send email to the main email address
    $headers = "From: $email";
    mail($to, $subject, $message, $headers);

    // Send receipt to the user
    $user_subject = 'Your Ride Request Receipt';
    $user_message = "Thank you for requesting a ride.\n\nHere are your details:\nName: $name\nPhone: $phone\nAddress: $address\nEmail: $email";
    mail($email, $user_subject, $user_message, $headers);

    echo "Request submitted successfully!";
} else {
    echo "There was a problem submitting your request.";
}
?>
