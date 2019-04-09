<?php
require("../connection.php");
class today {
	


	protected $customers=0;
	private $con;
	
public function __construct($con){
	if($con) {
		//set the connection 
		$this->con=$con;
	}
}
	public function getcustomers(){
	return $this->customers;
}
}

$today=new today($con);

echo $today->getcustomers();
?>