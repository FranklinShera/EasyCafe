<?php
require("../connection.php");
class today {
	


	public $customers=0;
	public $products_sold=0;
	public $sales=0;
	public $active_users=0;
	public $categories=0;
	public $products=0;
	private $con;
	
public function __construct($con){
	if($con) {
		//set the connection 
		$this->con=$con;
	}
}//end of constructor
		public function customers_served(){
			$sql="SELECT count(*) as customers FROM `customers`";
			$result=$this->con->query($sql)->fetch_assoc();
			$this->customers=$result['customers'];
		
		}
		public function products_sold(){
		    
		    $sql="SELECT SUM(quantity) as products_sold FROM `orders`";
		    $products_sold=$this->con->query($sql)->fetch_assoc();
		    $this->products_sold=$products_sold['products_sold'];
		}
		public function total_sales(){
		    $sql="SELECT SUM(price) as sales FROM `orders`";
		    $sales=$this->con->query($sql)->fetch_assoc();
		     $this->sales=$sales['sales'];

		}
        public function active_users(){
		   $sql="SELECT DISTINCT count(*) as Active FROM users where id in (SELECT user_id from user_logs)";
		   $result=$this->con->query($sql);
		  $row=$result->fetch_assoc();
		  $this->active_users=$row['Active'];
		   
		   

		}
		public function total_categories(){
		  $sql="SELECT count(*) as categories FROM `categories`";
		  $result=$this->con->query($sql)->fetch_assoc();
		  $this->categories=$result['categories'];
		

		}
		public function total_products(){
		
		$sql="SELECT COUNT(*) as products FROM `products`";
		 $result=$this->con->query($sql)->fetch_assoc();
		  $this->products=$result['products'];
		}

}

//initialize
$today=new today($con);
//retrieve the number of customers served
$today->customers_served();

//retrieve products sold
$today->products_sold();


 //retrieve the sales 
 $today->total_sales();


 //retrieve active users 
 $today->active_users();

//retrieve categories
 $today->total_categories();


//retrieve products
 $today->total_products();


 $res=array(
 	"Customers"=>$today->customers,
 	"products_sold"=>$today->products_sold,
 	"sales"=>$today->sales,
 	"categories"=>$today->categories,
 	"products"=>$today->products,
 	"users"=>$today->active_users
 );

 echo json_encode($res);

?>