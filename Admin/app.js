

const e=React.createElement;
class Nav extends React.Component {

	constructor(){
		super();
		this.state={
			name:"Kiprono"
		}
	}
  
	render() {
		
			return e("nav",{className:"navbar", id:"navbar"},
        e("h1",null,"EasyCafe"),
        e("p",{className:"navbar-right"},
        	e("span",{className:"fa fa fa-user fa-2x"}),this.state.name) 

		);

	}
}

ReactDOM.render(React.createElement(Nav),document.querySelector("#nav_root"));

const List=(props)=>{
	return (
		e("li",{className:"list-group-item my-3"},
   e("a",{href:props.attr},props.name)
		))
}

class SideBar extends React.Component {
	constructor(){
		super();
		this.state={
			name:[{name:"Home",attr:"index.html"},
			{name:"Users",attr:"users.html"},
			{name:"Products",attr:"products.html"},
			{name:"Statistics",attr:"statistics.html"},
			{name:"Promotion",attr:"promotion.html"}]
		}
	}


	render(){
		return(
         e("div",{className:"card navigation mt-3 ml-2"},
           	e("div",{className:"card-header text-center w-100 "},
            e("h2",{className:"Circular"},"Navigation")
           		),
           	e("div",{className:"card-body p-0 m-0"},
               e("ul",{className:"list-group p-0  w-75",id:"navigation_li"},
               	this.state.name.map(name=>{
               return(e(List,{name:name.name,key:name.name,attr:name.attr}));	
               	})
            
               	)
           		)

         	)
			)
	}
}
ReactDOM.render(React.createElement(SideBar),document.querySelector("#sideBar"));

class FirstRow extends React.Component {
	constructor(){
		super();
		this.state={
			data:[{id:"customers",qty:200,desc:"Customers Served"},
			{id:"products",qty:210,desc:"Product Sold"},
			{id:"sales",qty:20,desc:"Today's Total Sales"}]
		}
	}

	componentDidMount() {
		fetch("http://localhost/Denis/Admin/index_controller.php")
		 .then(response=>response.json())
		 .then(data=>{
		 	this.setState({
			data:[{id:"customers",qty:data.Customers,desc:"Customers Served"},
			{id:"products",qty:data.products_sold,desc:"Product Sold"},
			{id:"sales",qty:data.sales,desc:"Today's Total Sales"}]
		})

		console.log(this.state);
		 })
	}
	render(){
		return(
          e("div",{className:"row mx-auto"},this.state.data.map(item=>{
          	return(
          		e("div",{key: item.id,className:"col-4"},e(
                   "div",{className:"row rounded",id:item.id},
                   e("div",{className:"col-6 amount"},item.qty),
                   e("div",{className:"col-6 description p-1"},item.desc)
          			))
          		);
          }))
			)
	}
}
ReactDOM.render(React.createElement(FirstRow),document.querySelector("#first_row"));
class SecondRow extends React.Component {
	constructor(){
		super();
		this.state={
			data:[{id:"card1",qty:2,desc:"Active Users"},
			{id:"card2",qty:20,desc:"Categories"},
			{id:"card3",qty:300,desc:"Products"}]
		}
	}
 componentDidMount() {
 	fetch("http://localhost/Denis/Admin/index_controller.php")
		 .then(response=>response.json())
		 .then(data=>{
		 	this.setState(
        {
			data:[{id:"card1",qty:data.users,desc:"Active Users"},
			{id:"card2",qty:data.categories,desc:"Categories"},
			{id:"card3",qty:data.products,desc:"Products"}]
		}
		 		)
		 })
 }
	render(){
		return(
          e("div",{className:"row mx-auto mt-5",id:"body2"},this.state.data.map(item=>{
          	return(
          		e("div",{key: item.id,className:"col-4"},
          			e("div",{className:"card mt-1 text-center",id:item.id},
                        e("div",{className:"card-header mt-1"},
                        	e("h5",null,item.desc)
                        	),
                        e("h1",{className:"display-4"},item.qty),
                        e("a",{href:"#",className:"btn btn-success mt-3 w-50 mx-auto"},"View")
          				)
          			)
          		);
          }))
			)
	}
}
ReactDOM.render(React.createElement(SecondRow),document.querySelector("#second_row"));
const Footer=()=>{
	return(
        e("footer",{className:"footer w-100 py-2 text-center"},
        	e("p",null,'copyright2019.WEBTECHIE'))
		)
}
ReactDOM.render(React.createElement(Footer),document.querySelector("#footer"));

