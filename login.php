<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" type="text/css" href="bootstrap.css">
  <link rel="stylesheet" type="text/css" href="font-awesome/css/font-awesome.css">
  <link rel="stylesheet" type="text/css" href="style.css">

  <script type="text/javascript" src="jquery.min.js"></script>
  <script type="text/javascript" src="popper.js"></script>
  <script type="text/javascript" src="bootstrap.min.js"></script>

<style type="text/css">
  .navbar {
    box-shadow: 1px 2px 4px rgba(0,0,0,.5);
  }
  .navbar-brand {
    font-size: 2rem;
    font-weight: 700;
    letter-spacing: .2rem;
  }

  .navbar-dark .navbar-nav .nav-link  {
    color:blue;
    font-size: 1.3rem;
    text-transform: uppercase;
  }
  .container-fluid {
    padding:0;
    margin:0;
  }
.body {
  
  width:100%;
  height:auto;

}
.body .jumbotron {
  padding:0;
  margin:0;
  border-radius: 0;
}
/*//login form styles*/
#login_content {
 margin-left:30%;
 margin-top: 8%;
 box-shadow: 1px 2px 4px rgba(0,0,0,.5);
 padding:4px;
 transform:rotateY(2deg);
}
#login_content .form-group {
margin-top: 10px;
}
#login_content .form-control {
  height: 50px;
  font-weight: 500;
  font-size: 1.2rem;
}
#login_content button {
height: 50px; 
}
#login_content h1 {
  word-spacing:10px;
  text-shadow:2px 1px #000000;
  transform:rotateZ(8deg);
}/*end of login content styles*/

/*pop up error divs styles*/
#pop-up {
			width:250px;
			line-height: 50px;
			font-size:14px;
			height:auto;
			padding: 3px;
			position: relative;
			top:15.4rem;
			left:5.5rem;
			text-align: center;
			color: rgb(250,0,0);
			box-shadow: 3px 3px 10px rgba(0,0,0,.3);
			border-radius: 3px;

		}

		#pop-up {
			left:-400px;
			/*animation: drop 3s ease forwards;*/

		}

		@keyframes drop {
			0% {
				opacity:0;

			}

			50% {
				transform:translateX(430px);
				opacity:1;
			}
			70% {
				transform:translateX(450px);
				opacity:1;
			}

			100% {
				
			}
		}
/*end of pop up error div styles*/
</style>

  <title>EasyCafe</title>
</head>
<body>

<nav class="navbar navbar-expand navbar-dark bg-danger fixed-top">
  <a href="" class="navbar navbar-brand">EASYCAFE <span class="fa fa-hotel"></span></a>

  <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#list">
    <span class="navbar-toggler-icon"></span>
  </button>

</nav>
 <div class="container">
 	    <div id="pop-up">
    	
    	</div>
    </div>
  <div class="w-50 text-center" id="login_content">
      <form >
        <h1 class="display-4 text-danger"><span class="fa fa-user "></span>LOGIN</h1>
        <div class="form-group">
        <input type="text" name="username" class="form-control" placeholder="Enter your Username" id="username" required>
           </div>
           <div class="form-group">
        <input type="password" name="password" class="form-control" placeholder="password" id="password" required="">
      </div>

        <button type="button" id="login" class="btn btn-primary w-100"  >lOGIN</button>
      </form>
  </div>
 </div>

<script type="text/javascript">
  $(document).ready(function(){
  
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
    var popup=	document.querySelector("#pop-up");
     popup.innerHTML=`<div class="continer">
    	
    		<div class="border border-success text-success" id="error"><p>Login successful</p>
    			<strong class="fa fa-user fa-2x "></strong>
    		</div>
`;
      popup.style="animation: drop 2s ease-in ";

        setTimeout(function(){
  popup.style="animation: drop 2s ease-in ";
          location.replace("index.php");




        },3000);
     }else {
  var popup=document.querySelector("#pop-up"); 	
 popup.innerHTML=`<div class="border border-danger" id="error">username or password is wrong<span class="fa fa-exclamation-triangle fa-2x"></span></div> `;

//popup.style="animation: drop 3s ease-in ";

  $("#pop-up").animate({
   			"left":"50px"
   		},800);
   	$("#pop-up").animate({
   			"left":"-400px"
   		},2000);	

 setTimeout(function(){
 	location.reload(true);
 },3000)
     }
     });//end of post function
    //end of validated section if
    }else {
    var popup=document.querySelector("#pop-up"); 	
 popup.innerHTML=`<div class="border border-danger" id="error">${validated}<span class="fa fa-exclamation-triangle fa-2x"></span></div> `;

popup.style="animation: drop 3s ease-in ";

    }

  }//end of function
})
</script>
</body>
</html>