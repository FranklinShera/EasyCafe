<?php

require '../session_start.php';



include_once '../connection.php';

$all=[];
$data=[
// array(
// "id"=>"1",
// "image"=>"images/user.jpg",
// "data"=>array(
// array(
// 	"Name"=>"Name:",
// 	"value"=>"Kiprono Denis",
// 	"style"=>array()

// ),
// array(
// 	"Name"=>"Email:",
// 	"value"=>"kipronokemei98@gmail",
// 	"style"=>array()

// ),
// array(
// "Name"=>"Customers served:",
// 	"value"=>"1200",
// 	"style"=>array()
// ),
// array(
// "Name"=>"Status:",
// 	"value"=>"Active",
// 	"style"=>array("color"=>"#10E37D")
// ),
// array(
// "Name"=>"Date Added:",
// 	"value"=>"12/12/18",
// 	"style"=>array()
// ),
// array(
// "Name"=>"Role:",
// 	"value"=>"Admin",
// 	"style"=>array("color"=>"#BB3131")
// ),
// array(
// "Name"=>"Last Login:",
// 	"value"=>"12/2/19",
// 	"style"=>array("color"=>"#999999",
//                    "fontWeight"=>" 100",
//                    "fontSize"=>"16px"
//                   )

// )

// )
// )


];


//echo json_encode($data);

	$sql="SELECT * ,(select role FROM roles WHERE id=users.role) as rolename, (select count(*) FROM customers where server_id=users.id) as total,(SELECT login FROM `user_logs` WHERE id=(SELECT MAX(id) FROM user_logs WHERE user_id=users.id)) as lastLogin FROM users";
	$result=$con->query($sql);
	while($row=$result->fetch_assoc()) {
		$users[]=$row;
	}

	function details($user) {

	$itemN['Name']="Name:";
	$itemN['value']=$user['firstname']. " ".$user['lastname'];
	$itemN['style']=array();
	$result[]=$itemN;

	//Email
		$itemE['Email']="Email:";
	$itemE['value']=$user['email'];
	$itemE['style']=array();
	$result[]=$itemE;
//customers served
   	$itemC['Name']="Customers served:";
	$itemC['value']=$user['total'];
	$itemC['style']=array();
	$result[]=$itemC;

	//STATUS 

	if(isset($_SESSION['server'])) {
		$status=$_SESSION['server']==$user['id']?"Active":"Not Active";
	}else {
		$status="NOT ACTIVE";
	}
	$itemS['Name']="Status:";
	$itemS['value']=$status;
	$itemS['style']=array("color"=>"#10E37D");
	$result[]=$itemS;
  //Date added
	$itemD['Name']="Date Added:";
	$itemD['value']=$user['created_at'];
	$itemD['style']=array();
	$result[]=$itemD;
//ROLE
  $itemR['Name']="Role: ";
	$itemR['value']=$user['rolename'];
	$itemR['style']=array("color"=>"#BB3131");
	$result[]=$itemR;
//last Login
	$itemL['Name']="LastLogin:";
	$itemL['value']=$user['lastLogin'];
	$itemL['style']=array("color"=>"#999999",
                   "fontWeight"=>" 100",
                   "fontSize"=>"16px"
                  );
	$result[]=$itemL;
	return $result;
	}

	foreach($users as $user) {
	

		$data['id']=$user['id'];
		$data['image']=$user['image'];
	   $data['data']=details($user);
	   array_push($all, $data);
	}



echo json_encode($all);

 ?>