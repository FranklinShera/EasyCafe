//const e=React.createElement;

 class AddProduct extends React.Component {
 constructor(){
  super();
  this.state={
    cat:[{
      id:0,
      name:"choose category"
    },
    {
      id:1,
      name:"Main Meals"
    },
     {
      
      id:2,
      name:"Drinks"
    },
      {
      id:3,
      name:"Beverages"
    },
        {
      id:4,
      name:"Others"
    }
    ]
  }
 }


 render() {
  return(
   e("div",{className:"w-100"},
//h3
e("h3",{className:"h3 text-center mt-1"},"Add Product  To Category"),
e("form",{className:"w-50 mx-auto mt-5"},
//product name
e(
"div",{className:"form-group"},
   e("label",null,"Type Product Name:"),
    e("div",{className:"input-group"},
      e("div",{className:"input-group-prepend"},
  e("span",{className:"input-group-text"},
  e("i",{className:"fa fa-coffee"})
    )
        ),

      e("input",{type:"text",className:"form-control",name:"product"})
      )
  ),//price
e(
"div",{className:"form-group"},
   e("label",null,"Type Product Price:"),
    e("div",{className:"input-group"},
      e("div",{className:"input-group-prepend"},
  e("span",{className:"input-group-text"},
  e("i",{className:"fa fa-dollar-sign"})
    )
        ),

      e("input",{type:"text",className:"form-control",name:"price"})
      )
  ),
//seclect
e("div",{className:"form-group"},
e("label",null,"Select category"),
 e("div",{className:"input-group"},
   e("div",{className:"input-group-prepend"},
      e("span",{className:"input-group-text"},
      e("i",null,"Choose")
        )
    ),
   //select
   e("select",{className:"form-control",name:"category"},this.state.cat.map(item=>{

  return  e("option",{value:item.id,key:item.id},item.name)
   }))
  )
  ),

e("div",{className:"form-group"},
  e("button",{className:"btn btn-success w-100",name:"submit"},"Add",
     e("span",{className:"fa fa-plus-square"})
    )
  )
  )
    )
    ) //end of return
 }
 } 

ReactDOM.render(e(AddProduct),document.querySelector("#addp_category"))
