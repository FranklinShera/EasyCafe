const e=React.createElement;

class UserComponent extends React.Component {

 constructor() {
    super();

 } 

 render() {
    return(
  e("form",{className:"w-100"},
//first div
e("div",{className:"card w-75 mx-auto text-center p-2"},
        e("h2",{className:"h3"},"Add New User")),
//the second div
  e("div",{className:"row mt-3 mx-auto"},
         e("div",{className:"col-6"},e("div",{className:"round_image"})),
         e("div",{className:"col-6"},
            e("button",{className:"btn btn-success mt-5 w-auto"},"Upload picture")
                )
         ),//end of row
  //the third div
  e("div",{className:"row text-center mx-auto w-100 mt-3"},
    e("div",{className:"col-6"},
   e("div",{className:"form-group"},
   e("input",
    {type:"name",
     name:"firstname",
     className:"form-control",
     placeholder:"Enter Firstname",
     value:""})
    ),
   //last name
     e("div",{className:"form-group"},
   e("input",
    {type:"name",
     name:"lastname",
     className:"form-control",
     placeholder:"Enter Lastname",
     value:""})
    ),
       e("div",{className:"form-group"},
   e("input",
    {type:"name",
     name:"email",
     className:"form-control",
     placeholder:"Enter email",
     value:""})
    ),
    e("div",{className:"form-group"},
   e("input",
    {type:"name",
     name:"username",
     className:"form-control",
     placeholder:"Enter Username",
     value:""})
    )
        ),
     e("div",{className:"col-6"},
      e("div",{className:"form-group"},
      e("label",null,"Assign Role"),
        e("select",{
            name:"role",
            className:"form-control w-50 d-inline-block"
        },
            e("option",{value:"0",selected:true},"Not Selected"),
            e("option",{value:"1"},"Admin"),
            e("option",{value:"2"},"User"),
            e("option",{value:"3"},"Manager")
        )//end select
    ),
      //password
         e("div",{className:"form-group"},
   e("input",
    {type:"password",
     name:"password",
     className:"form-control",
     placeholder:"Enter new password",
     value:""})
    ),
         //confirm password

         e("div",{className:"form-group"},
   e("input",
    {type:"password",
     name:"c_password",
     className:"form-control",
     placeholder:"Confirm new password",
     value:""})
    ),
         //submit
 e("div",{className:"form-group"},
   e("button",
    {type:"button",
     name:"submit",
     className:"btn btn-success w-100 p-2"
     },"Register")
    )

        )
    )
  )
        )
    
  
 }  
}
 
ReactDOM.render(e(UserComponent),document.querySelector("#body"))
