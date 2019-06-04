<?php

require '../connection.php';
$sql="SELECT id,name,priceoff,(SELECT amount FROM products where id=promotion.product_id) as actualPrice FROM promotion ORDER BY id DESC";

$result=$con->query($sql);

if($result->num_rows>0) {

while($row=$result->fetch_assoc()) {
	$promotion[]=$row;
} 
}
echo json_encode($promotion);
  ?>
