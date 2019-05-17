<?php
//to get particular user
include_once '../connection.php';
$id=$_POST['id'];

$sql="SELECT * FROM users WHERE id='1'";
$result=$con->query($sql)->fetch_assoc();

echo json_encode($result);
?>