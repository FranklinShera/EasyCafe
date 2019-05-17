<?php 
//connection
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


$table="";
$result=$con->query($sql);

if($result->num_rows>0){
	$table.="

	<table class=\"table\">
		<thead>
						<tr>
							<td>Qty</td>
							<td>Name</td>
							<td>Total</td>
							<td ><span class=\"fa fa-plus-circle\"></span></td>
							<td ><span class=\"fa fa-minus-circle\"></span></td>
							<td ><span class=\"fa fa-trash-o \"></span></td>
						</tr>
					</thead>
";
	while($row=$result->fetch_assoc()){


$table.= "	<tbody>
<tr>
	
	<td>{$row['quantity']}</td>
	<td style=\"text-transform:lowercase\">{$row['product_name']}</td>
	<td class=\"price\">{$row['price']}</td>
	<td id=\"{$row['id']}\" price=\"{$row['price_initial']}\" class=\"add\" ><span class=\"fa fa-plus-circle\"></td>
	<td id=\"{$row['id']}\" class=\"remove\" price=\"{$row['price_initial']}\"><span class=\"fa fa-minus-circle\"></span></td>
	<td id=\"{$row['id']}\" class=\"del\" price=\"{$row['price_initial']}\"><span class=\"fa fa-trash-o \"></span></td>
</tr>

";
	}

	$table.= "</tbody></table>";
}

echo $table;


?>