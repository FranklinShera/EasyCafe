<?php

require 'connection.php';


$sql='SELECT * FROM Payment';

$result=$con->query($sql);
$numrows=$result->num_rows;

if($numrows>0){

echo json_encode($result->fetch_assoc());

}else {

$sql  = 'SELECT * FROM Rejected ';
$result=$con->query($sql);

echo json_encode($result->fetch_assoc());


}
 ?>



