<?php 

$con=new mysqli("localhost","root1","2018","mpesa");

if($con->connect_error) {
	die("Error".$con->connect_error);
}
?>