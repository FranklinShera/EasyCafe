const e=React.createElement;

class UserComponent extends React.Component {

 constructor() {
    super();

 } 

 render() {
    return(
  e("form",null,
  e("div",{className:"form-group"},
   e("input",{type:"text",name:"password",placeholder:"kipronokemei"})
    )
    )
        )
    
  
 }  
}
 
ReactDOM.render(e(UserComponent),document.querySelector("#body"))
