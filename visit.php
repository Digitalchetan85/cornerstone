   <?php
if(!empty($_POST["submit"])) {
	$name = $_POST["userName"];
	$email = $_POST["userEmail"];
	$number = $_POST["number"];

	$toEmail = "cskt2015@gmail.com";
	$mailHeaders = "From: " . $name . "<". $email .">\r\n";
	if(mail($toEmail, $number, $mailHeaders)) {
	    $message = "Your contact information is received successfully.";
	    $type = "success";
	}
}
?>