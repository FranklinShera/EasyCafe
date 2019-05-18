<?php
//to get particular user
include_once '../connection.php';
$id=$_GET['id'];

$sql="SELECT * FROM users WHERE id='$id'";
$result=$con->query($sql)->fetch_assoc();

echo json_encode($result);
?>