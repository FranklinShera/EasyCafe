<?php

//first check whether there are record in payemnt and Rejected table
//connection
require 'connection.php';
//check to find if there anthing in the database
$sql1="SELECT * FROM `Payment` ";
$sql2="SELECT * FROM `Rejected` ";

$Rejected=$con->query($sql2);
$Payment=$con->query($sql1);
//check the number of rows
$Rejected_rows=$Rejected->num_rows;
$Payment_rows=$Payment->num_rows;
if($Rejected_rows>0){
				$Rejected=$Rejected->fetch_assoc();
          //check that particular id
				$id=$Rejected['id'];
				$sql="DELETE  FROM Rejected where id='$id' ";


				$result=$con->query($sql);

				if(!$result){
				die("There is some records to be deleted");
				}

}else if($Payment_rows>0){
	//if there is in the payment table  and set delete to true
				$Payment=$Payment->fetch_assoc();

				$id=$Payment['id'];
				$sql="DELETE  FROM Payment where id='$id' ";


				$result=$con->query($sql);

				if(!$result){
				die("There is some records to be deleted");
				}
}else {
//everything is okay

}
$con->close();
 ?>





