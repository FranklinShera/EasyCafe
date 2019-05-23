//const e=React.createElement;

 class AddCategory extends React.Component {
 constructor(){
  super();
 }


 render() {
  return(
 e("div",{className:"w-100"},
//row
e("div",{className:"row"},
   e("div",{className:"card w-75 text-center mx-auto"},
    e("h2",null,"New Category")
    )
    ), //end of row
//start form
e("form",{className:"w-50 mx-auto mt-5"},
e("div",{className:"form-group"},
e("label",null,"Enter Cagetory Name"),
e("input",{type:"text",name:"category_name",className:"form-control"})
  ),

//button
e("div",{className:"form-group"},
e("button",{className:"btn btn-primary d-inline-block  mr-4"},
e("span",{className:"fa fa-plus-square"},"Add Products")
  ),
e("button",{className:"btn btn-success d-inline-block"},
e("span",{className:"fa fa-plus-square"},"Save")
  )
  )
  )
  )//end of wrapper
    ) //end of return
 }
 } 

ReactDOM.render(e(AddCategory),document.querySelector("#addcategory"))
