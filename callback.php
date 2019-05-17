<?php 
 $callbackResponse = file_get_contents('php://input');

  
// check if the is any response
			 if( $callbackResponse){
//convert into json
 $jsondata=json_decode($callbackResponse);
$name=$callbackResponse;


                 //connection
			  require 'connection.php';
 	

                           
                             //get the resultcode
                           $ResultCode=$jsondata->Body->stkCallback->ResultCode;
           //check th result code if not 0
			if($ResultCode !==0){
				
				//connect to database
	 
//Now insert into database the code and desc
            $desc=$jsondata->Body->stkCallback->ResultDesc;

            $sql="INSERT INTO `Rejected`( `ResultCode`, `ResultDesc`) VALUES ('$ResultCode','$desc')";

             $result=$con->query($sql);

			 if($result){
			 	echo "The data has been succesfully saved";
			 }else{
			 	echo "There was an Error saving at the database";
			 	exit;
			 }

      }//if its zero then
				 else {

				
						    	//code if 0
						 	// The description
		                          $desc=$jsondata->Body->stkCallback->ResultDesc;
		                     // The result code
		                           $ResultCode=$jsondata->Body->stkCallback->ResultCode;
		                      //Get the Amount=
		                           $amount=$jsondata->Body->stkCallback->CallbackMetadata->Item[0]->Value;
		                           //Receipt  number;
		                             $MpesaReceiptNumber=$jsondata->Body->stkCallback->CallbackMetadata->Item[1]->Value;
		                             //transaction date
		                         $TransactionDate=$jsondata->Body->stkCallback->CallbackMetadata->Item[3]->Value;
		                        //phone number 
		                          $PhoneNumber=$jsondata->Body->stkCallback->CallbackMetadata->Item[4]->Value;
		                         //date
		                       $date=date('D/ m/ Y @ H:i:s',$TransactionDate);

						    	echo "Its Now zero lets handle it later. {$PhoneNumber}".$ResultCode;
						 //Now insert into Database
						   $sql="INSERT INTO `Payment`( `MpesaReceiptNumber`, `TransactionDate`, `PhoneNumber`, `Amount`, `ResultCode`, `ResultDesc`) VALUES  ('$MpesaReceiptNumber','$TransactionDate','$PhoneNumber','$amount','$ResultCode','$desc')";

				             $result=$con->query($sql);

							 if($result){
							 	echo "The Payment has been made successfully";
							 }else{
							 	echo "There was an Error In making the payment";
							 	exit;
							 }    	


				    }



			 }else {
			 	echo "We are still waiting for the response";
			 }

?>