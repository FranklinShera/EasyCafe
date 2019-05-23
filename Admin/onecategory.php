<?php
require '../connection.php';

$id=$_GET['id'];
$sql="SELECT category_name FROM categories WHERE id='$id'";

$result=$con->query($sql)->fetch_assoc();

echo $result['category_name'];


 ?>