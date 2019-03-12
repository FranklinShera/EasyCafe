	var items=document.getElementsByClassName('item');
    var total=0;
     var totaldiv=document.getElementById('total_div');
     var orders=[];
     var data='';
     var submit=document.getElementById('submit');
     var phone='';
     var counter=0;
     var newc=1;
     var url="";


// function disabe submit button
function enablesubmit(){
	
	var total=parseInt(totaldiv.innerHTML);

	if(total<1){
		submit.disabled=false;
	}
}

function disablesubmit(){
	
	var total=parseInt(totaldiv.innerHTML);

	if(total<1){
		submit.disabled=true;
	}
}


//call the function
disablesubmit();

  function getname(data){
 var p ="";
for (var i = 0; i < data.length; i++) {
	
	 if(data[i]=="/"){
	
	 break;


		
	 }
p+=data[i];	 



	
}
return p;
 }

//write names
function writedata(){


var div=document.getElementById('rtable');
var xhr=new XMLHttpRequest();

xhr.open("GET",'receipt.php',true);

xhr.onreadystatechange= function (){
 if(xhr.readyState==1){
 	div.innerHTML="Loading";
 }

 if(xhr.readyState==4 && xhr.status==200){
 	$("#rtable").html(xhr.responseText);

//add Event Listener
 	toaddListener(price);

 	//GET TOTAL

 	 getwritetotal();
 }
}
xhr.send();

// $.ajax({
// 		Method:'POST',
// 		url:'process.php',
// 		data:{}
// 	}).done(function(response){

// 		alert(response)
// 	})
}

 function getprice(name,data){

 var pos=name.length+1;
price="";
 for (var i = pos; i < data.length; i++) {
 	price+=data[i]
 }

 	return price;
 }
// FUNCTION TO GET AND WRITE TOTAL
 function  getwritetotal() {
 var total=0;
	var priceitems=document.getElementsByClassName('price');

for (var i = 0; i < priceitems.length; i++) {
	 total+=parseInt(priceitems[i].innerHTML);
}

var total_div=document.getElementById('total_div');
total_div.innerHTML=total;
 }
//push to array
 function pushtoarray(name,price){

var myarray=[name,parseInt(price)];

orders.push(myarray);
 return orders.join('&');
 }



 //submit data

 function submitdata(n,p,c){
 	
 $.post('action.php',{
name:n,
price:p,
newc:c
 },function(e){
 	//confirm the data submited
 	toast(n,"p");
 	//update the receipt
 	 writedata();
 	 //assign events to buttons
 	
 })


 }
//function to submit total and get response to replace the div with form

function getmpesa(){
	var total_submit=parseInt(document.getElementById('total_div').innerHTML);
var table=document.querySelector(".bg-modal");
$.post('total.php',
	{total:total_submit},
	function(e){
		table.innerHTML=e;
		submit.style.display='none';
	
	   modal();
	   //disabled the pay button
	   document.querySelector("#pay").disabled=true;

	});
}

//Get and send phone number its called by a button
function sendphone(){

 var phone=$("#phone").val();

  var total=$("#total2").val();

$.post('pay.php',{
phone1:phone,
total:total,
url:url
},
function(e){
	//close model

	if(e !=""){


			var modal=document.querySelector(".bg-modal");

			  modal.style.display="none";
			  //fing the result code
			  var res=JSON.parse(e);
			  var res_code=res.ResponseCode;

			  if(res_code==0) {

			  countar();
			  	var spinner=`  <div class="modal-content">
    <div class="col-12 text-center"> <div class="spinner">
    <div class="counter"></div>

    		 <h6 class="text-info h4 text-center mx-auto"><i class="fa fa-check-square-o fa-2x text-success spin-icon" ></i></h6>
    	</div>
    </div>
   
<h6 class="text-success h6 text-center mx-auto">Waiting customer Response..</h6>

   </div>`;
                modal.innerHTML=spinner;
			  	modal.style.display="flex";


		execgetfile();	  	
			  }else {

			  	//make sure we roll back any transaction
			  	  $.ajax({
		Method:'GET',
		url:'rollback.php',
		data:{}
	}).done(function(result){
 
    
        if(result==1) {
        let ResultDesc="unsuccessful";
        var  failed=`<div class="modal-content border border-danger">
<div class="col-12 text-center">
	<p class="h4 text-danger"><i class="fa fa-thumbs-o-down fa-2x"></i></p>`;
	    failed+='<p class="lead  mt-2">'+ResultDesc+'</p>';
	failed+=`	<button class="btn btn-danger btn-fill" onclick="closemodal()">Okay</button>
</div>

   </div>`;

   modal.innerHTML=failed;
	modal.style.display="flex";

     
        }
	});

			  }
				
 
   //reload first
  // location.reload(true);


//check for confrmation code and Make receipt
	

	//callback();
	}else {
		alert("Error:Internet problem"); 
	}
});
}



// to watch for reponse int the server
function execgetfile(){

	var count=0;
	var inter=setInterval(getfile,2000);


	function getfile(){
	


  var xhr=new XMLHttpRequest();

 	xhr.open("GET",'accepted.php',true);

xhr.onreadystatechange= function (){

if(xhr.readyState==4 && xhr.status==200){

//if its is not  empty
  if(xhr.responseText !=="" && xhr.responseText !==null){
var res=JSON.parse(xhr.responseText);

//get result code 
var ResultCode= res.ResultCode;

//get result desc
var ResultDesc=res.ResultDesc;
 

 if(parseInt(ResultCode) >0){
 	clearInterval(inter);
 unsuccessful(ResultDesc);

 
}else if(ResultCode==0){
	//clear the interval first
	clearInterval(inter);
	successful(res,inter);
}else {
	alert("Error:please try again");
	
}
//var resultcode1=res.Body.stkCallback.ResultCode;




  }//if not emty still

  else{
  response.innerHTML="still waiting for the payment ResultCode";
  }

	

	

     
} //if 200 ,4
}//readystate change end
xhr.send();



	}
}//end of exec 
//function get the callback




// if request is unsuccessful

	function unsuccessful(ResultDesc){

var modal=document.querySelector(".bg-modal");

        var  failed=`<div class="modal-content border border-danger">
<div class="col-12 text-center">
	<p class="h4 text-danger"><i class="fa fa-thumbs-o-down fa-2x"></i></p>`;
	    failed+='<p class="lead  mt-2">'+ResultDesc+'</p>';
	failed+=`	<button class="btn btn-danger btn-fill" onclick="closemodal()">Okay</button>
</div>

   </div>`;

   modal.innerHTML=failed;
	modal.style.display="flex";


//   function refresh(){
//     confirm("Request Unsuccessfull please try again");
//   	location.reload(true);

//   }//end refresh

// refresh();



}//end of the function


// function successful
function successful(res){
    

	//get the receipt
	var receipt=res.MpesaReceiptNumber;

   //get the phone
   var phone=res.PhoneNumber;
   //amount
   var amount=res.Amount;
 
 //get the response of the receipt
	$.ajax({
		Method:'GET',
		url:'final_receipt.php',
		data:{}
	}).done(function(response){
	//get the response
   var output=response;

   output+='<div class="card-footer ">';
   	output+='<div>Mpesa Code:<strong>'+receipt+'</strong></div>';
   	output+='<div>Amount paid:<strong>'+amount+'</strong></div>';
   	output+='<div>Phone:<strong>'+phone+'</strong></div>';
   	output+='<p style="color:red">Thank you for being our patner </p>';
   	output+='<button class=" btn btn-danger btn-lg " onclick="closemodal()">Print</button> </div></div>';
  
	var table=document.querySelector(".bg-modal");
	
table.innerHTML=output;
modal();


   location.reload(true);
	})
}//end of success function
function callback(){

				var xhr=new XMLHttpRequest();

				xhr.open('GET','names.json',true);
				xhr.onreadystatechange= function (){

				if(xhr.readyState==4 && xhr.status==200){


				 var result=JSON.parse(xhr.responseText);
				  

				if(result){

					alert(result.Body.stkCallback.ResultCode);
				}

				}

				}
				xhr.send();
}

// function to determine if customer is new
function newcustomer(counter,newc){

		if(counter>0){
  newc=0;
		}else {
			newc=1;
		}

return newc; 
	}

	//function to assign event to receipt 

	function toaddListener(price){


	var elements=document.getElementsByClassName('add');
	//add event listener to remove

	var elementsremove=document.getElementsByClassName('remove');

	//collect the elemts todelete
		var elementsdel=document.getElementsByClassName('del');

	//remove	

	for (var i = 0; i < elements.length; i++) {
	//add button
	var elem=	elements[i];
	//collect remove elements
	   var elem_remove=elementsremove[i];

	   	//element to delete
   var elem_del=elementsdel[i];

//addlistener to delete
elem_del.addEventListener('click',function(){

 var parent=this.parentElement;

//Get the first Child
var child=parent.firstElementChild;
//get the second child value
var name=child.nextElementSibling.innerHTML;


 var parent_to_parent=parent.parentElement;



//Now get the ID
var id=parseInt(this.getAttribute('id'));

$.post('add.php',
	{
		id:id,
		quantity:0,
		price:0
	},
  function (result){

   if(result==0){
toast(name,"d");	
//get grand parent


  parent_to_parent.removeChild(parent);
  		//delete the parent node

 //write total
getwritetotal();

  	}

  	else {
  		alert("server error:could not add");
  	}
  }
	);//end of post function



	});

//addlistener to remove
elem_remove.addEventListener('click',function(){
// Get original price 
var pricediv=parseInt(this.getAttribute('price'));

var original_price=price;
//get the parents
var parent=this.parentElement;
//Get the first Child
var child=parent.firstElementChild;
//get the second child value
var name=child.nextElementSibling.innerHTML;

//the current quantity
var quantity=parseInt(child.innerHTML);

//decrement the quantity
quantity-=1;

//get the total div
var totalnode=this.previousElementSibling;
//go back two times to get total nodes
var totalnode=totalnode.previousElementSibling;
var price_total=pricediv*quantity;


//Now get the ID
var id=parseInt(this.getAttribute('id'));


//Now post the data and get response
$.post('add.php',
	{
		id:id,
		quantity:quantity,
		price:price_total
	},
  function (result){

  	if(result==1){
  		  toast(name,"r");	
  	//update quantity
 child.innerHTML=quantity;
 //update total price
 totalnode.innerHTML=price_total;   
//update total
getwritetotal()
  	}else if(result==0){//meaning it was deleted

      toast(name,"d");	

//get grand parent
 var parent_to_parent=parent.parentElement;

  parent_to_parent.removeChild(parent);
  		//delete the parent node


//updaate total
  getwritetotal()
  	}

  	else {
  		alert("server error:could not add");
  	}
  }
	);//end of post function


	});

//listener for add
	elem.addEventListener('click',function(){

// Get original price 
var original_price=price;
var pricediv=parseInt(this.getAttribute('price'));


var parent=this.parentElement;

//Get the first Child
var child=parent.firstElementChild;

//get the second child value
var name=child.nextElementSibling.innerHTML;

//the current quantity
var quantity=parseInt(child.innerHTML);

//increment the quantity
quantity+=1;

//get the total div
var totalnode=this.previousElementSibling;

var price_total=parseInt(pricediv)*quantity;


//Now get the ID
var id=parseInt(this.getAttribute('id'));

//Now post the data and get response
$.post('add.php',
	{
		id:id,
		quantity:quantity,
		price:price_total
	},
  function (result){

  	if(result==1){
  //update quantity
  toast(name,"a");	
 child.innerHTML=quantity;
 //update total
 totalnode.innerHTML=price_total;

 //update total amount   
getwritetotal()
  	}else {
  		alert("server error:could not add");
  	}
  }
	);//end of post function
		
	});//end of event listenerr
	}//end of function


}


function toast(name,which){
	//create icon element
	var icon=document.createElement("span");
     
//create Div
var div=document.createElement("div");

//give id to the div
div.id="toast";

//give it a classname
div.className="card show bg-light border border-info";
var msg="";
switch(which){
	case "p":
  msg="You Picked "+name;
  icon.className="fa fa-thumbs-o-up fa-2x";
	break;
	case "u":
  msg="url set" +name;
  icon.className="fa fa-thumbs-o-up fa-2x";
	break;
	case "a":
msg="You Added "+name;
icon.className="fa fa-thumbs-o-up fa-2x";
	break;
	case "r":
msg="You Removed "+name;
icon.className="fa fa-thumbs-o-down fa-2x";
	break;
	case "d":
msg="You Deleted "+name;
icon.className="fa fa-thumbs-o-down fa-2x";
	break;

	default:alert("you didnt pick");
}
//create textNode
var text=document.createTextNode(msg);

//add text element to the div
div.appendChild(icon);
div.appendChild(text);

//append the div to the document
document.body.appendChild(div);

setTimeout(function(){

	div.className=div.className.replace("show","");

	div.parentNode.removeChild(div);
},3000)

	}

//function toast
  function modal(){


	  var modal=document.querySelector(".bg-modal");

  modal.style.display="flex";

	

var close=document.querySelector("#pay");

close.addEventListener('click',function(){
var modal=document.querySelector(".bg-modal");

  modal.style.display="none";

});


}

function closemodal() {
var modal=document.querySelector(".bg-modal");

  modal.style.display="none";

  location.reload(true);
}
 // does everything on clicking the element

//function to validate phone

function validatephone(){
  document.querySelector(".error").style.display="none";
  var phone=document.querySelector("#phone").value;
  let pay=document.querySelector("#pay");
 var pattern = /[a-zA-Z]/;
  if(phone=="") {
   
  	document.querySelector(".error").innerHTML='phone is required';
    pay.disabled=true;


  }else if(phone[0] !=0){
    document.querySelector(".error").style.display="block";
  document.querySelector(".error").innerHTML='It Has to begin with zero';
  pay.disabled=true;
  } else if(pattern.exec(phone) !=null) {
    document.querySelector(".error").style.display="block";
  	document.querySelector(".error").innerHTML='Only Numerics required';
    pay.disabled=true;
  }else if(phone.length !=10){

  document.querySelector(".error").style.display="block";
  document.querySelector(".error").innerHTML='Must 10 characters required';
  pay.disabled=true;
  }else {
    document.querySelector(".error").style.display="none";
     pay.disabled=false;
 
   
  }

}//end of function to validate phone

function countar(){
	let counter =10;

//get the counter div
var counter_div=document.querySelector('.counter');
//set the interval
	var inter=	setInterval(function(){
//update the counter Div
   counter_div.innerHTML=counter;
  
   counter--;
   //check if seconds are over
    if(counter==-1){
  	clearInterval(inter);
  }
		},1000);

}//end of function counter
	function seturl(){
    url=document.querySelector("#url").value;

   $.post('seturl.php',
   {
    url:url
   },function(res){
  alert(res);
  var url_div=document.querySelector("#url-div");
  url_div.parentNode.removeChild(url_div);
  toast(url,"u");
   });
   
   
  }//end of set url function




	//function to login user
	  function loginuser() {


  var login=document.querySelector("#login");

  //bind event listener
  login.addEventListener('click',function(e){

    e.preventDefault();
    getlogindetails();
  });


  //declare the functions 
  function getlogindetails(){

    "use strict";
    let username=document.querySelector("#username").value;
    let password=document.querySelector("#password").value;
    let validate=function (username,password) {
      if(username=="") {
        return "You username required";
      }else if(password=="") {
        return "Your password required";
      }else {
        return true;
      }
    }
   let validated=validate(username,password);

 if(validated==true) {

 
   
   $.post('userlogin.php',
     {
      username:username,
      password:password
     },
     function(result){

     if(result==1) {
      alert("Successfully Logged in");

        setTimeout(function(){

          location.replace("index.php");




        },1000);
     }
     });//end of post function
    //end of validated section if
    }else {
      //design the best error div and write data to it
    }

  }//end of function

}//end of function login user

function getdata(){
	//enable submit
	enablesubmit();
//get the full attribute
var res=this.childNodes[1].getAttribute("data");

//get the name
var name=getname(res);
// show toast

//get the price
var price=getprice(name,res);

//if new customer
var new_cus_val=newcustomer(counter,newc);

//push thenm to array
 data=pushtoarray(name,price);


//submitname and price
submitdata(name,price,new_cus_val);

//write the two to the div

 //get and write total



//increment
counter++;
  



//callback();
}





submit.addEventListener('click',getmpesa);

	for( var i=0;i<items.length;i++){

 var item=items[i];

 item.addEventListener('click',getdata);

     
	 }