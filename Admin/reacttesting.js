const e=React.createElement;


function updatePicture(pic) {
	let comp= new UserComponent();
	console.log(comp.state);
	comp.setState({name:"Hallo New state"})
	console.log(comp.state);

}
class UserComponent extends React.Component {

 constructor() {
    super();
    this.state={name:"Hallo state"};

 } 

logging()  {
	console.log("test my scope");
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
