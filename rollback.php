<?php
   //ge the current customer
include 'customer.php';

$sql="DELETE FROM orders where customer_id='$current'";

$result=$con->query($sql);

   if($result){

       $sql="DELETE FROM customers WHERE id='$current'";

        $result=$con->query($sql);
            if($result) {
              echo 1;
            }else {
              echo $con->error;
            }
   }else {
    echo "$con->error";
   }

 ?>