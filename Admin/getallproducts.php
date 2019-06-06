<?php

require '../connection.php';

$id=$_GET['id'];

$sql="SELECT id,name,amount as price,(SELECT sum(price) FROM orders WHERE orders.product_name=products.name) as total FROM products WHERE category='$id'";
$result=$con->query($sql);
while($row=$result->fetch_assoc()){
	$products[]=$row;
}

 echo json_encode($products);
 ?>