<?php 
//get the connection
//require 'connect.php';

function select_category($con,$cat,$icon){


$sql="SELECT * FROM `products` WHERE category = '$cat'  ";

$products=$con->query($sql);

$product=array();
//have a counter
$counter=0;
while ($row=$products->fetch_assoc()) {
	$product[]=$row;
}

foreach ($product as $value) {
	echo   "
      <li class=\"d-inline-block mx-auto\">
          	<div class=\"card square\">
				<div class=\"item\">
					<h4 class='pt-1' id=\"me\" data=\"{$value['name']}/{$value['amount']}\" price=\"{$value['amount']}\">{$value['name']}</h4>
					<p ><i class=\"fa {$icon} fa-3x\"></i></p>
					<p>Kshs:{$value['amount']}</p>
				</div>
			</div>
</li>
	";
	$counter++;

	if($counter==4) {
		echo "</ul>";
		echo "<ul class=\"list-unstyled text-center d-flex mt-1\" >";
		$counter=0;
	}
}

}


?>