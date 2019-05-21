<?php

include '../connection.php';

$firstname=$_GET['firstname'];
$lastname=$_GET['lastname'];
$email=$_GET['email'];
$username=$_GET['username'];
$role=$_GET['role'];
$image=$_GET['image'];
$password=$_GET['password'];
//first select where username is the username
$sql="SELECT * FROM users WHERE username='$username'";
$present=$con->query($sql)->num_rows;
if($present>0) {
	echo "username already taken";
	exit;
}

$sql="INSERT INTO `users`( `username`, `firstname`, `lastname`, `email`, `role`,`image`, `password`) VALUES ('$username','$firstname','$lastname','$email','$role','$image','$password')";

$result=$con->query($sql);

if($con->error) {
	echo "$con->error";
}else {
	echo "Successfully created";
}

