<?php 

$dbhost='localhost';
$dbuser="root1";
$dbpass="2018";
$database="ASSIGNMENT";


$conn=mysqli_connect($dbhost,$dbuser,$dbpass,$database);

for ($i=0; $i <100 ; $i++) { 
	# code...

	$name="matumbo".$i;
$sql="INSERT INTO `orders`( `qty`, `name`, `price`) VALUES (1,'$name','20')";

$result=mysqli_query($conn,$sql);


}

if($result){
	echo "successfuly";
}

?>