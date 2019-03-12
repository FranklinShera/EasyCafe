<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title></title>
</head>
<body>

   <input type="text" name="url" id="url" placeholder="Enter Url">

   <button onclick="seturl()">SET URL</button>

  <script type="text/javascript" src="jquery.min.js"></script>
   <script type="text/javascript">
     function seturl(){
    url=document.querySelector("#url").value;

   $.post('seturl.php',
   {
    url:url
   },function(res){
  alert(res);
   });
   
    // var url_div=document.querySelector("#url-div");

    // url_div.parentNode.removeChild(url_div);
    // toast(url,"u");
  }//end of set url function

   </script>
</body>
</html>