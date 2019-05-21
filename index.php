<?php

require 'session_start.php';
require 'loggedin.php';
 ?>

<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width,initial-scale=1.0">
	<meta http-equiv="X-UA-Compatible" content="ie=edge">
	<link rel="stylesheet" type="text/css" href="bootstrap.css">
	<link rel="stylesheet" type="text/css" href="font-awesome/css/font-awesome.css">
	<link rel="stylesheet" type="text/css" href="style.css">

	<title>Basic Bootstrap Classes</title>
</head>
<body>


<!-- Modal section -->

   <div class="card bg-modal text-center" id="bg-modal">
	
   <div class="modal-content" id="bg-modal-content">
   	<!-- <div class="card-header">
   		<h4 class="bg-danger text-white w-100" align="center">EASYCAFE</h4>
   	<h6 align="center">RECEIPT</h6>
   	</div>
   	<table class="table">
   		<tr>
   			<th>#</th>
   			<th>Name</th>
   			<th>price</th>
   			<th>Total</th>
   		</tr>

   		 		<tr>
   			<td>1</td>
   			<td>Sugar</td>
   			<td>10</td>
   			<td>100</td>
   		     </tr>

   		 	<tr>
   			<td>1</td>
   			<td>Sugar</td>
   			<td>10</td>
   			<td>100</td>
   		     </tr>
   		      		 		<tr>
   			<td>1</td>
   			<td>Sugar</td>
   			<td>10</td>
   			<td>100</td>
   		     </tr>
   	</table>

<div class="card-footer ">
	<div>Mpesa Code:<strong>KBGTUDSD</strong></div>
	<div>Amount paid:<strong>100</strong></div>
	<p style="color:red">Thank you for being our patner </p>
   	<button class="btn btn-danger btn-lg">Print</button>
   </div> -->
<div class="card">
	  <div class="card-header bg-success text-white"><h2 class="h3">PAY VIA MPESA</h2></div>
	  <div class="card-body">
	  	<form>
	  		<div class="form-group">
	  		<label>TYPE YOUR PHONE NO:</label>
	  		<input type="text" name="phone" class="form-control">
            </div>

            <div class="form-group">
	  		
	  		<input type="submit" name="phone" id="pay" class="btn btn-outline-primary w-100" value="PAY NOW!!">
            </div>
	  	</form>
	  </div>
</div>

   </div>
</div>


<!-- end of modal section -->

<!-- start navigation bar -->

   <nav class="navbar navbar-expand navbar-dark bg-danger fixed-top">
	<a href="" class="navbar navbar-brand">EASYCAFE <span class="fa fa-hotel"></span></a>

	<button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#list">
		<span class="navbar-toggler-icon"></span>
	</button>

	<div class="collapse navbar-collapse">
		<ul class=" navbar-nav ">
			<li class="nav-item"><a class="nav-link" href="http://localhost/Denis/index.php">Home</a></li>
				<li class="nav-item"><a class="nav-link" href="http://localhost/Denis/Admin/index.php">Admin</a></li>
				<li class="nav-item"><a class="nav-link bg-primary text-white" href="userlogin.php?id=<?php echo $_SESSION['server'] ?>">Log out</a></li>

	
		</ul>
	</div>
</nav>

<!-- end of navigation bar -->

  <!-- start of the body -->

        <div class="container-fluid">
	<div class="body jumbotron mt-3">
		<div class="row">
			<!-- recipt section -->
			<div class="col-md-3 mt-5 ">
				<div class="fixed  receipt">
				<div class="card  ">
					<div class="card-header bg-success text-white text-center"><span class="fa fa-shopping-basket fa-2x"></span>CART COLLECTION</div>
				<div class="table-content" class="overflow" id="rtable">
				<div class="card bg-light text-center">
					<h4>Pick</h4>
					<h6>Something</h6>
					<h6 class="lead">To eat!!!</h6>
					<h4><span class="fa fa-arrow-right fa-2x fa-flip-vertical"></span></h4>
				</div>
				</div>
			</div><!-- end of the card -->
			 <div class="card-footer d-flex" >
				<button class="btn   btn-danger mb-0 w-50"><span id="total_div">0</span></button>

				<button id="submit" class="btn btn-outline-danger mb-0 btn-fill w-50 justify-content">Pay Now <span class="fa fa-money fa-2x fa-spin"></span></button>
			</div>
				<div class="card w-50" style="position:fixed" id="url-div">
		 <div class="input-group d-block">
		 	<label>Paste Tunnel url:</label>
		 	<input type="text" name="url" id="url" class="form-control w-100">
		 	 <button class="btn btn-danger" id="set_url" onclick="seturl()">SAVE</button>
		 </div>
	</div>
		</div><!-- end of fixed section -->
		</div><!-- end of card footer -->
          
		<!-- end of receipt section -->



		<div class="col-md-9 pl-1" id="category" >
        <div class="row card  text-center p-0" >
	
		<!-- --------------- include the Category Driver ------------->			
	<?php

	require 'category.php';
	?>

					
				
		</div>
	
		</div>
	</div><!-- end of jumbotron -->
</div><!-- End of Container Fluid -->


  <!-- end of the body -->





<div id="toast">You Picked chapo</div>
	<script type="text/javascript" src="jquery.min.js"></script>
	<script type="text/javascript" src="popper.js"></script>
	<script type="text/javascript" src="bootstrap.min.js"></script>
<script type="text/javascript" src="app.js">
	

</script>
<script type="text/javascript">
$(document).ready(function(){

})
</script>
</body>
</html>