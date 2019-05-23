
<?php
//init db connection
include '../connection.php';
//initalize tabledata array
$tabledata=[];


//select all cagegories
$sql="SELECT * FROM `categories` WHERE id IN (SELECT category FROM products)";
$result=$con->query($sql);

while($row=$result->fetch_assoc()){
  $categories[]=$row;
}

	$blueprint=	["id"=>"1","Category"=>[
   "name"=>"Main Meals",
   "products"=>[
    ["id"=>"1","name"=>"UGALI MIX"],
    ["id"=>"2","name"=>"Rice MIX"]
   ]
 	]
 ];

//loop through each category
foreach($categories as $category) {
$blueprint['id']=$category['id'];
$blueprint['Category']['name']=$category['category_name'];

$blueprint['Category']['products']=prepare($category,$con);

$tabledata[] = $blueprint;
}

  //in here cll function prepare and pass id,category name

function prepare($category,$con) {


	//init blue print
	$blueprint=	["id"=>"1","Category"=>[
   "name"=>"Main Meals",
   "products"=>[
    ["id"=>"1","name"=>"UGALI MIX"],
    ["id"=>"2","name"=>"Rice MIX"]
   ]
 	]
 ];

	//select all products where category is this category
 $id=$category['id'];
 $sql="SELECT * FROM `products` WHERE category='$id'";
 $products=$con->query($sql);
 if($products->num_rows) {
$holdP=[];
//just return products 
 	while($row=$products->fetch_assoc()){
 	$holdP[]=$row;	
 		



 	}
return $holdP;
 
 }


	//prepare the array with form blue print 

	//push the array to the major tabledata array
}


//finally echo json_encode data
echo json_encode($tabledata);

?>