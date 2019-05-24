<?php
require '../connection.php';

$sql="SELECT id,category_name as name,icon as value FROM categories";

$result=$con->query($sql);

if($result->num_rows>0) {

while($row=$result->fetch_assoc()) {
	$data[]=$row;
}
}else {
	echo "No Categories";
}

echo json_encode($data);

 ?>