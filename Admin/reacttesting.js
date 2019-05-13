const e=React.createElement;

const home=()=>{
	return(e("div",null,"This is home 1")

		)
}

const home2=()=>{
	return(e("div",null,"This is home 2")

		)
}




 class App extends React.Component {

 	constructor() {
 		super();
 		this.state={
 			which:1
 		}
 	}

 	componentDidMount() {
 		setTimeout(()=>{
   this.setState({which:2})
 		},3000)
 	}

 	render() {
 const switchhandler=(data)=> {


	switch(data) {
        	case 1:console.log("Iam the first");
        	return(e(home))
        	break;
        	case 2:console.log("Iam the second");
        	return(e(home2))
        	break;
        	default:console.log("Iam the third and default");
        }
}

return switchhandler(this.state.which);
 		 
 		
 		
        }
 	}
 
ReactDOM.render(

	e(App),document.querySelector("#body"))
