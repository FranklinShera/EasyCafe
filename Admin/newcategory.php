<?php
include '../connection.php';

 $name=$_GET['name'];
 $icon=$_GET['icon'];
if(isset($name)&&isset($icon)) {

	$sql="INSERT INTO categories (category_name,icon) VALUES('$name','$icon')";

	$result=$con->query($sql);
	if($result) {
		echo "Category $name has been created successfully";
	}else {
		if($con->error) {
			$sql="SELECT * FROM categories WHERE category_name='$name'";
			$result=$con->query($sql);
			 if($result->num_rows>0) {
			 	echo "$name category exist";
			 }else {
			 	echo "Internal error creating category";
			 }
		}
	}
}

 ?>