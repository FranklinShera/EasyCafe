<?php 

require 'connection.php';
require 'select_category.php';

$sql="SELECT id,category_name,icon FROM `categories` ";

$categories=$con->query($sql);


// put the categories into and Array

$category=array();

while($row=$categories->fetch_assoc()){

	$category[]=$row;
}

foreach ($category as $value) {
// this is where the select function will go

//open table data
echo "
	
           <div class=\"card-header
             \">{$value['category_name']} <span class=\"fa fa-shopping-cart fa-2x\"></div>
           <div class=\"card-body\" >
         <div class=\"col-12 container \">
 
     


<ul class=\"list-unstyled text-center d-flex mt-1\" >
         
"; 


//call select category;

select_category($con,$value['id'],$value['icon']);

//close table data
echo "
</ul>
"; 

}
?>