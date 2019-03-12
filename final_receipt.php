<?php 
//take care of connection
 require 'connection.php';
//to get the current customer
 $sql="SELECT MAX(id) as current_id FROM customers";

    $result=$con->query($sql);

    if($result->num_rows>0){

    	$current=$result->fetch_assoc();
    	$current=$current['current_id'];

    	
    }else {

    	die("Could Retrieve current User");

    }
//select * Products from current customer;
$sql="SELECT orders.id, orders.product_name,orders.quantity,orders.price,products.amount as price_initial FROM orders,products WHERE orders.product_name=products.name AND orders.customer_id='$current'  ";

//query total amount so far
$sql1="SELECT SUM(price) as total FROM `orders` WHERE customer_id=(SELECT MAX(id) FROM customers)";

$total=$con->query($sql1);

if(!$total){
	die("could not get the total amount");
}

$total=$total->fetch_assoc();

$total=$total['total'];


$table=" ";
$count=0;
$result=$con->query($sql);

if($result->num_rows>0){
	$table.="

   	<div class=\"modal-content\" id=\"bg-modal-content\">	
  <div class=\"card-header\"><h4 class=\"bg-danger text-white w-100\" align=\"center\">EASYCAFE</h4> 	
<h6 align=\"center\">RECEIPT</h6></div>
   	<table class=\"table\">
   		<tr>
   			<th>#</th>
   			<th>Qty</th>
   			<th>Name</th>
   			<th>price</th>
   			<th>Total</th>
   		</tr>

";

	while($row=$result->fetch_assoc()){
		//increment the count
$count++;

$table.= "		<tr>
   			<td>{$count}</td>
   			<td>{$row['quantity']}</td>
   			<td>{$row['product_name']}</td>
   			<td>{$row['price_initial']}</td>
   			<td>{$row['price']}</td>
   		     </tr>


";
	}

	$table.= "</table>";
}

echo $table;


?>

