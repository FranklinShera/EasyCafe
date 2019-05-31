<?php

//  $today=getdate();

//  echo "<pre>";

// print_r($today);
//  echo "</pre>";
//$time = mktime(52,43,14,12,27,19);
// $date=time("2019-05-27 14:43:52");

//LETS AVE A MONTH
$month=$_GET['id'];
//what is the no of dats it has
$time = mktime(0,0,0,$month,1,19);
$noD=date("t",$time);

// echo $week;


 //assuming is january alone
$monthWeeks=[];
for($i=1;$i<=$noD;$i++) {
$time = mktime(0,0,0,$month,$i,19);
$week=strftime("%W",$time);
$monthWeeks[]=$week;
}


$start=current($monthWeeks); 
$end = end ($monthWeeks);

for($k=intval($start);$k<intval($end);$k++)   {

	$monthW[]=$k;
}
 echo json_encode($monthW);
  ?>
