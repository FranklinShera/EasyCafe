<?php 

$total=$_POST['total'];

echo "

<div class=\"card\">
	  <div class=\"card-header bg-success text-white\"><h2 class=\"h3\">PAY 
	  VIA MPESA</h2>
	  <strong class=\"lead\">Kshs:{$total}</strong>
	   </div>
	  <div class=\"card-body\">
	  
	  	<input type='hidden' name='total' id='total2' value='{$total}'>
        <div class=\"card border border-warning error\" style=\" display:none\"></div>

	  		<div class=\"form-group\">
	  		<label>TYPE YOUR PHONE NO:</label>
	  		<input type=\"text\" name=\"phone\" class=\"form-control\" id=\"phone\" onkeyup=\"validatephone()\" onblur=\"validatephone()\">
            </div>

            <div class=\"form-group\">
	  		<button id='pay' onclick='sendphone()' class=\"btn btn-outline-primary w-100\">Pay NOW</button>
            </div>
	  	
	  </div>
</div>
";



?>