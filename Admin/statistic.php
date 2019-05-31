<?php

//require the connection
require '../connection.php';

//select everything
//week
$month=$_GET['month'];


$sql="SELECT *, UNIX_TIMESTAMP(date) as Date, DATE_FORMAT(date,'%a') as day,Date_format(date,'%m') as month ,(SELECT SUM(price) as total FROM orders WHERE customer_id=customers.id) as total FROM `customers` WHERE Date_format(date,'%m')=".$month."";

$result=$con->query($sql);
while($row=$result->fetch_assoc()) {
	$Trans[]=$row;
}
 function weekHandler($Trans,$get_week){

$array=array_filter($Trans,function($item){

$getdate=getdate($item['Date']);
$time=mktime($getdate['hours'],$getdate['minutes'],$getdate['seconds'],$getdate['mon'],$getdate['mday'],$getdate['year']);
$week=strftime("%U",$time);
$t="0".$get_week;
if(intval($week)==$_GET['week']){

return $item;	
}

	
});

return $array;
 }

$newarray=weekHandler($Trans,$get_week);





//echo json_encode($newarray);

//set the array of products
$weekdays=[
"Mon"=>0,
"Tue"=>0,
"Wen"=>0,
"Thur"=>0,
"Fri"=>0,
"Sat"=>0,
"Sun"=>0

];

foreach($newarray as $item) {

	switch($item['day']) {
      case "Mon":
    $weekdays['Mon']+=$item['total']>0?$item['total']:0;
      break;
      case "Tue":
    $weekdays['Tue']+=$item['total']>0?$item['total']:0;
      break;
      case "Wen":
    $weekdays['Wen']+=$item['total']>0?$item['total']:0;
      break;
      case "Thur":
    $weekdays['Thur']+=$item['total']>0?$item['total']:0;
      break;
      case "Fri":
    $weekdays['Fri']+=$item['total']>0?$item['total']:0;
      break;
      case "Sat":
    $weekdays['Sat']+=$item['total']>0?$item['total']:0;
      break;
      case "Sun":
    $weekdays['Sun']+=$item['total']>0?$item['total']:0;
      break;

	}
}
 

 // echo "<pre>";

 // print_r($weekdays);
 // echo "</pre>";
//aggregate transactions

 $customers=count($newarray);

 // echo $customers;
 // //total

$sales=array_sum($weekdays);
// echo $sales;
 // foreach ($newarray as $key) {
 // 	$sales+=$key['total']>0?$key['total']:0;

 // 	 }

 // 	 echo "<br>$sales";

//week values

$response=array(
"sales1"=>$sales,
"aggregateT"=>$customers,
"weeks"=>$weekdays
);


echo json_encode($response);
?>
