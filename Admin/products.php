<?php
 $tabledata=[
 	["id"=>"1","category"=>[
   "name"=>"Main Meals",
   "products"=>[
    ["id"=>"1","name"=>"UGALI MIX"],
    ["id"=>"2","name"=>"Rice MIX"]
   ]
 	]
 ],

 	 	["id"=>"2","category"=>[
   "name"=>"Main Meals",
   "products"=>[
    ["id"=>"3","name"=>"Soda"],
    ["id"=>"4","name"=>"Others"]
   ]
 	]
 ]
 ];
echo json_encode($tabledata);

 ?>