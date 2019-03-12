<?php
require 'session_start.php';


$username=$_POST['username'];
$password=$_POST['password'];
if($username && $password) {
//get the connection
	require 'connection.php';
//query
 $sql="SELECT * FROM `users` WHERE username ='$username' AND password='$password' ";

 //query the result
 $result=$con->query($sql);

//get numrows
 $num_rows=$result->num_rows;

 if($num_rows>0) {
 	$user=$result->fetch_assoc();
 
 	$value=$user['id'];

 	 $sql="INSERT INTO `user_logs`(`user_id`) VALUES ('$value')";
 	 $userlogged=$con->query($sql);
 	 if(!$userlogged) {
 	 	echo "cannot log in user";
 	 	exit;
 	 }else {
 	 		$_SESSION['server']=$user['id'];
 	 }
echo 1;

 }else {
 	$error=array("error"=>"username or password is wrong");

 	//convert to json ans return
 	echo json_encode($error);

 }
}//end of if isset usrname


// ---------USer Log out......

if(isset($_GET['id'])) {
  $id=$_GET['id'];
require 'connection.php';

$sql="UPDATE `user_logs` SET `logout`=NOW() WHERE user_id='$id' ";

$result=$con->query($sql);

if($result) {
 


	session_start();

	session_unset();

	session_destroy();
		header("Location: login.php");

}else {
  echo "Failed".$con->error;
  exit;
}

	// $sql="UPDATE `user_logs` SET `logout`='NOW()' WHERE user_id='$id' ";
	// $loggedout=$con->query($sql);
 //   print_r($loggedout);
 //   exit;
	// if($loggedout){
	// session_start();

	// session_unset();

	// session_destroy();
	// 	header("Location: login.php");	
	// }else {
	// 	die("There was an Error Logging out");
	// }



}
 ?>


