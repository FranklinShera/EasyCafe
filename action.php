<?php 
$dbhost='localhost';
$dbuser="root1";
$dbpass="2018";
$database="mpesa";




$conn=mysqli_connect($dbhost,$dbuser,$dbpass,$database);

  $name=$_POST['name'];
  $price=$_POST['price'];
  $new=(int) $_POST['newc'];
 

//CREATE A CUSTOMER 
 require 'customer.php';

 $customer_id=$current;

 //determine the quantity
 require 'quantity.php';

if($productrows>0){
   

  //find the quantity
  	$quantity=$products->fetch_assoc();


  	$quantity=$quantity['quantity'];

  	//add one to quantity
  	$quantity+=1;
  
     $price*=$quantity;
  	// Update the quantity;
  	 $sql="UPDATE `orders` SET `quantity`= '$quantity',price='$price' WHERE customer_id='$customer_id' AND product_name='$product_name' ";

  	 $updated=$con->query($sql);

  	if($updated){

  		echo "Saved with upd";
  	}else {
  		die($con->error);
  	}

  	//Loop
  }else {

$quantity=1;

$sql="INSERT INTO orders ( `customer_id`, `product_name`, `quantity`,`price`) VALUES ('$customer_id','$name','$quantity','$price')";

 $result=mysqli_query($conn,$sql);






 if($result){
 	echo "saved";
 }else{
 	echo "Not saved". mysqli_error();
 }

  
  }









 ?>