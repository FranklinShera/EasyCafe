<?php 
//get the session
require 'session_start.php';
// This page insert a customer and dtermines the current customer
//connection
require 'connection.php';



//insert into  database
if($new){
$server=$_SESSION['server'];

$sql="INSERT INTO `customers`(`server_id`, `Date`) VALUES ('$server',NOW())";

$result=$con->query($sql);

if($result){



}else {
	echo "Customer could not be Inserted". $con->error;
	exit;
}

//end insertion
}// new customer
// find customer id;
    $sql="SELECT MAX(id) as current_id FROM customers";

    $result=$con->query($sql);

    if($result->num_rows>0){

    	$current=$result->fetch_assoc();
    	$current=$current['current_id'];

    	
    }else {

    	die("Could Retrieve current User");

    }


?>