<?php

 require 'connection.php';
 $url=trim($_POST['url']);
 $url=str_replace(" ", "", $url);



 $sql="UPDATE `url_table` SET `url`='$url' WHERE id=1";

 $result=$con->query($sql);

 if($result) {
 	echo 1;
 }else {
 	echo 0;
 }
 ?>