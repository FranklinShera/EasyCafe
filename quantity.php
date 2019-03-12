
<?php 

//connection
require 'connection.php';


  $product_name=$name;
  $sql="SELECT product_name,quantity FROM `orders` WHERE customer_id='$customer_id' AND product_name=\"$product_name\"  ";

  $products=$con->query($sql);


  //check the  num rows

  $productrows=$products->num_rows;


//take this out
  


?>