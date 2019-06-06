<?php 

require '../connection.php';
$year=$_GET['year'];

$month=$_GET['month'];


$sql="SELECT *,(SELECT username FROM users where id=customers.server_id ) as servedby,(SELECT MpesaReceiptNumber FROM Payment where customer_id=customers.id)as mpesaCode,(SELECT count(*) FROM orders where customer_id=customers.id) as products,(SELECT sum(price) FROM orders Where customer_id=customers.id ) as total FROM customers where DATE_FORMAT(customers.date,'%c')='$month' and DATE_FORMAT(customers.date,'%Y')='$year'";

$result=$con->query($sql);
while($row=$result->fetch_assoc()) {
	$customers[]=$row;
}

if(!isset($customers)) {
	// $data=[
 //  array( 
 //      	id=>"0",
 //      	products=>0,
 //      	total=>0,
 //      	mpesaCode=>'None',
 //      	servedby=>'None'
 //      )
 // 	];
 // 	echo json_encode($data);

}else {


echo json_encode($customers);
}
?>