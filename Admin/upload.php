<?php

$size=$_FILES['file']['size'];
   if($size>0) {

    if($size<=1960387) {
$tmp_name=$_FILES['file']['tmp_name'];
$new="images/".$_FILES['file']['name'];
//move it
if(move_uploaded_file($tmp_name, $new)) {
	//echo "Successfully Uploaded.We will be taking it to datatabase";


	?>
<script type="text/javascript">
 parent.document.querySelector("#upload_img").value="";
 parent.document.querySelector("#error").style.display="block";
 parent.document.querySelector("#error").innerHTML="Successfully uploaded";
let image=	parent.document.querySelector("#round_image_user");
 image.setAttribute("src","<?php echo $new ?>")
	//window.parent.updatepicture();

</script>
	<?php
}
    }else {
    //	echo "Your file should be less than two megabytes";
      ?>

<script type="text/javascript">
  
parent.document.querySelector("#error").style.display="block";
parent.document.querySelector("#error").innerHTML="Your file should be less than two megabytes";
</script>
      <?php
    }
   }else {
   	//echo "The file should be BETWEEN 0MB and 2MB";

          ?>

<script type="text/javascript">
  
parent.document.querySelector("#error").style.display="block";
parent.document.querySelector("#error").innerHTML="The file should be BETWEEN 0MB and 2MB";
</script>
      <?php
   }
//echo "Hallo youtube.So you are working";
 ?>

 <script type="text/javascript">


 </script>