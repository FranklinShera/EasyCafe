<?php

include '../connection.php';

$firstname=$_GET['firstname'];
$lastname=$_GET['lastname'];
$email=$_GET['email'];
$username=$_GET['username'];
$role=$_GET['role'];
$password=$_GET['password'];


$sql="INSERT INTO `users`( `username`, `firstname`, `lastname`, `email`, `role`, `password`) VALUES ('$username','$firstname','$lastname','$email','$role','$password')";

$result=$con->query($sql);

if($con->error) {
	echo "$con->error";
}else {
	echo "Successfully created";
}

