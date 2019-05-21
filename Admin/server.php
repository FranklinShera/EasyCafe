<?php
require '../session_start.php';
require '../connection.php';
$server=$_SESSION['server'];
$sql="SELECT username FROM users WHERE id='$server'";
$result=$con->query($sql)->fetch_assoc();
$username= $result['username'];
$user=array("name"=>$username,"id"=>$server);

echo json_encode($user);

 ?>