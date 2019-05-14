
const e=React.createElement;

//users section


class User extends React.Component {
    constructor() {
      super();
      this.state={
        data:[
        {
          id:1,
          image:"images/user.jpg",
          data:[
        {Name:"Name:",value:"Kiprono Denis",style:{}},
        {Name:"Email:",value:"kipronokemei98@gmail",style:{}},
        {Name:"Customers served:",value:1200,style:{}},
        {Name:"Status:",value:"Active",style:{color:"#10E37D"}},
        {Name:"Date Added:",value:"12/12/18",style:{}},
        {Name:"Role:",value:"Admin",style:{color:"#BB3131"}},
        {Name:"Last Login:",value:"12/2/19",style:{color:"#999999",fontWeight:" 100",fontSize:"16px"}}

                   
                ]


        },
        {
          id:2,
          image:"images/user.jpg",
          data:[
        {Name:"Name:",value:"Kiptanui Reliph",style:{}},
        {Name:"Email:",value:"reliphkiptanui98@gmail",style:{}},
        {Name:"Customers served:",value:200,style:{}},
        {Name:"Status:",value:"Active",style:{color:"#10E37D"}},
        {Name:"Date Added:",value:"01/12/19",style:{}},
        {Name:"Role:",value:"User",style:{color:"#BB3131"}},
        {Name:"Last Login:",value:"12/2/19",style:{color:"#999999",fontWeight:" 100",fontSize:"16px"}}

                   
                ]


        },
        {
          id:3,
          image:"images/user.jpg",
          data:[
        {Name:"Name:",value:"Kipchirchir Felix",style:{}},
        {Name:"Email:",value:"reliphkiptanui98@gmail",style:{}},
        {Name:"Customers served:",value:800,style:{}},
        {Name:"Status:",value:"Active",style:{color:"#10E37D"}},
        {Name:"Date Added:",value:"15/12/18",style:{}},
        {Name:"Role:",value:"User",style:{color:"#BB3131"}},
        {Name:"Last Login:",value:"Active now",style:{color:"#999999",fontWeight:" 100",fontSize:"16px"}}

                   
                ]


        }
        
        ]
      }//end of state


    }//end of constructor

    render(){

      return(
          e("div",{className:"card-deck  mx-2 text-center"},

             this.state.data.map(item=>{
          return  e("div",{className:"card",key:item.id},

           e("img",{src:item.image,className:"card-img-top"}),
           e("div",{className:"card-body mt-3 px-0",style:{backgroundColor:"white !importart",border:"none !important"}},
            e("ul",{className:"list-group"},
              item.data.map(data=>{
                
                return e("li",{className:"list-group-item",key:data.value},
                            e("strong",null,data.Name),
                            e("span",{style:data.style},data.value)
                    )
              }),
              e("li",{},e("a",{href:"#",className:"btn btn-danger float-right m-2"},"Delete"),
                e("a",{href:"#",className:"btn btn-success float-left m-2"},"Edit")
                ),
              
              )
            )
              )
          }))
         
        )
    }
}

//end of user section


//start of product section

const Products=(props)=> {

	const list=props.list;
 return (
 	e("div",{className:"col-6"},
      e("div",{className:"card card-p"},
       e("table",{className:"w-100"},
         e("tr",null,
           e("td",null,
            e("h4",null,"PRODUCT LIST")
           	),
         e("td",null,
            e("p",{className:"circle-badge float-right"},list.length)
         	)
         	)
       	 ),

       e("div",{style:{"maxHeight":"350px !important",'overflowY': "scroll"}},
      e("table",{className:"table table-hover",id:"product-table1"},
         e("thead",null,
          e("tr",null,
          	e("td",null,"#"),
          	e("td",null,"Name"),
          	e("td",null,"Price"),
          	e("td",null,"Action"),
          	e("td",null,"Instock")
          	 )
         	),
         e("tbody",null,
           list.map(item=>{
           	return(
            e("tr",{key:item.id},
             e("td",null,item.id),
               e("td",null,item.name),
               e("td",null,"20"),
               e("td",null,
                 e("span",{className:"text-primary far fa-edit"}),
                 e("span",{className:"text-danger fas fa-trash"})
               	  ),
               e("td",null,
                 e("a",{className:"btn btn-primary"},"Disabled")
               	)

            	)
           		)
           })
         	)
      	)
       	)
      	)
 		)

 // 	e("div",null,list.map(item=>{

 // 	return e("li",{key:item},item)
 // }))

 	)
}
class Product extends React.Component {
    constructor() {
    	super();
  this.state={
     title:"SELECT CATEGORY",
     title2:"Product List",
     table_head:['#',"Name","products","Action"],
     tabledata:[{
     	id:1,
     	Category:{
     		name:"Main Meals",
     		products:[
                 {id:1,name:"Ugali Mix"},
                 {id:2,name:"Ugali Mix"},
                 {id:3,name:"Ugali Mix"},
                 {id:4,name:"Ugali Mix"}

               ]
     	}
     },
     {
     	id:2,
     	Category:{
     		name:"Main Meals",
     		products:[
                 {id:1,name:"Ugali Mix"},
                 {id:2,name:"Ugali Mix"}

               ]
     	}
     },
     {
     	id:3,
     	Category:{
     		name:"Main Meals",
     		products:[
                 {id:1,name:"Ugali Mix"},
                 {id:2,name:"Ugali Mix"}

               ]
     	}
     }],

     selected:{
     		id:1,
     	Category:{
     		name:"Main Meals",
     		products:[
                 {id:1,name:"Ugali Mix"},
                 {id:2,name:"Ugali Mix"},
                 {id:3,name:"Ugali Mix"},
                 {id:4,name:"Ugali Mix"}

               ]
     	}
     }
  }
         
    		
    }

componentDidMount(){
  fetch("http://localhost/Denis/Admin/pro.php")
.then(response=>response.json())
.then(data=>{
  let changed=this.state;
  changed.tabledata=data;
  changed.selected=data[0];
   this.setState(changed);

})
}

    render() {

const categoryHandler=(event)=>{

let selected_category=	event.target.parentElement.id;
let change=this.state;

let products_cat=this.state.tabledata.filter(item=>{
	if(item.id==selected_category)return item;
});
change.selected=products_cat[0];

this.setState(change);

}

let list=this.state.selected.Category.products;

    	return(

e("div",{className:"row mx-2"},

 e("div",{className:"col-6"},
 e("div",{className:"card"},

 e("table",{className:"bg-primary w-100"},
 e("tr",null,
  e("td",null,
  	e("h4",null,this.state.title)),
     e("td",null,
     	 e("p",{className:"circle-badge float-right"},this.state.tabledata.length))
 	),
   e("div",{style:{maxHeight:"350px !important","overflowY":"scroll"}},
    e("table",{className:"table table-hover w-100",id:"product-table"},
       e("thead",null,
         e("tr",null,
           e("td",null,"#"),
           e("td",null,"Name"),
           e("td",null,"Products"),
           e("td",null,"Action")
          )
        ),
       e("tbody",null,
        this.state.tabledata.map(item=>{
          return(
               e("tr",{key:item.id,id:item.id,onClick:categoryHandler},
                  e("td",null,item.id),
                  e("td",null,item.Category.name),
                  e("td",null,item.Category.products.length),
                  e("td",null,
                      e("span",{className:"text-primary far fa-edit"}),
                      e("span",{className:"text-danger fas fa-trash"})
                      )
                )
            )
        })
        )
      ))
 	))
 ),


  e(Products,{list:list})

)



        
    		)
    }
}

//start of statistics section
const Aggregate=(props)=>{
  return(
 e("div",{className:"stat_container text-center mt-2"},
   e("div",{className:"card round", id:"stat_sales"},
       e("h2",{className:"display-4"},props.amount)),
   e("h5",{className:"card-text mt-1",style:{color:"#9A1F41"}},props.Text)
  )
    )
}

const Graph=()=> {
  const month=["Select Month","January","February","March","April","May","June","July","August","September","October","November","December"];
  return(
 e("div",{className:"card",id:"stat_top_card"},
    e("table",{className:"table"},
       e("tbody",null,
         e("tr",null,
           e("td",null,
            e("h4",null,"Weekly Transactions")
            ),
             e("td",null,e("select",{name:"Month",className:"form-control",defaultValue:"Select month"},
              month.map(item=>{
                return(
           e("option",{value:month.indexOf(item),key:item},item)
                  )
              })
              ))
           )
        )
      )
  )

    )
}
class Statisctic extends React.Component {
       constructor(){
        super();
       }
   componentDidMount() {
    //get canvas
  var canvas=document.querySelector("#canvas");

  //get context
  var context=canvas.getContext("2d");
var values=['10','100','300','320','10','100','350'];
  //declare constant width
  var width=60;
  var X=0;//starting x-axis position
  var colors=['#811',"#6E16A2",'#811',"#6E16A2",'#811',"#6E16A2",'#811'];
  context.fillStyle="#811";
  for (var i = 0; i < values.length; i++) {
    
      context.fillStyle=colors[i];
    
    var h=values[i];
    //draw
    context.fillRect(X,canvas.height-h,width,h);

    X+=width+1;
  }

   }
       render() {

        return(
          e("div",{className:"row"},
          e("div",{className:"col-md-4"},
                e(Aggregate,{amount:"123",Text:"AGGREGATE SALES"}),
                e(Aggregate,{amount:"12",Text:"AGGREGATE TRANSACTIONS"})
            )
            ,
            e("div",{className:"col-md-8 mx-auto"},
              e(Graph),
               e("canvas",{id:"canvas",height:"350",width:"500",style:{border:"1px solid white",className:"mt-1"}})
              )
            )
          ) 
       }

}


//end of statistics section

//START OF PROMOTION SECTION
const PromoCard=(props)=>{
  return(
     e("div",{className:"btn btn-primary w-75 promo_btn mt-5  p-5"},props.title)
    )
}

const PromoDiv=()=> {
  return(
    e("div",{className:"col-6 p-2"},

 e(PromoCard,{title:"New Promotion"}),
 e(PromoCard,{title:"Edit Promotion"}),
 e(PromoCard,{title:"View Promotion"})
      )

    )
}

class CreatePromo extends React.Component {
  constructor() {
    super();
    this.state={
      Categories:["Main Meals","Beverages","Drinks","Others"],
      products:["Ugali Makande","Rice Beans","Uji Moto","Menginevyo"]
    }

  }

  render() {

    return(
     e("div",{className:"col-6 mt-5 p-2"},
         e("div",{className:"card w-75"},
          e("div",{className:"card-header text-center"},
            e("h4",null,"Create New Promotion")
            ),
         e("form",{className:"px-2"},
          e("div",{className:"form-group"},
                e("label",null,"Enter Promotion name:"),
                e("input",{type:"text",name:"prom_name", className:"form-control"})
            ),

           e("div",{className:"form-group"},
                e("label",null,"Select Category:"),
                e("select",{name:"Category" ,className:"form-control"},
                      this.state.Categories.map(item=>{
                        return(
                   e("option",{value:this.state.Categories.indexOf(item),key:item},item)
                          )
                      })
                  )
            ),
           e("div",{className:"form-group"},
                e("label",null,"Select Product:"),
                e("select",{name:"product_promo", className:"form-control"},
                      this.state.products.map(item=>{
                        return(
                   e("option",{value:this.state.Categories.indexOf(item),key:item},item)
                          )
                      })
                  )
            ),
           e("div",{className:"form-group"},
                e("label",null,"Enter Price Off:"),
                e("input",{type:"number",name:"priceoff" ,className:"form-control"})
            ),
           e("div",{className:"form-group"},
          
                e("input",{type:"button",name:"prom_submit" ,className:"btn btn-success w-100 py-3",value:"Submit"})
            )
           )
          )
      )
      )
  }
}

const PromotionB=()=> {
  return(
    e("div",{className:"row"},
        e(PromoDiv),
        e(CreatePromo)
      )
    )
}
//END OF PROMOTION SECTION
//start of index section
class Nav extends React.Component {

	constructor(){
		super();
		this.state={
			name:"Kiprono",

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
	//console.log(props);
	return (
		e("li",{className:"list-group-item my-3",id:props.id,onClick:props.click()},
   props.name
		))
}
//this is sideBar
class SideBar extends React.Component {
	constructor(){
		super();
		this.state={
			name:[{name:"Home",id:"1"},
			{name:"Users",id:"2"},
			{name:"Products",id:"3"},
			{name:"Statistics",id:"4"},
			{name:"Promotion",id:"5"}]
		}
	}


	render(){
	const changing=(e)=> {
		//console.log(e.target.id)
		this.props.change(e.target.id)
		
	}
		return(
         e("div",{className:"card navigation mt-3 ml-2"},
           	e("div",{className:"card-header text-center w-100 "},
            e("h2",{className:"Circular"},"Navigation")
           		),
           	e("div",{className:"card-body p-0 m-0"},
               e("ul",{className:"list-group p-0  w-75",id:"navigation_li"},
               	this.state.name.map(name=>{
               return(e(List,{name:name.name,key:name.id,id:name.id,click:()=>changing}));	
               	})
            
               	)
           		)

         	)
			)
	}
	}

//ReactDOM.render(React.createElement(SideBar),document.querySelector("#sideBar"));

//this is the first row
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
//ReactDOM.render(React.createElement(FirstRow),document.querySelector("#first_row"));

//this is the second row

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
class Body extends React.Component {

	constructor() {
		super();
		this.state={
			which:1
		}
	}

	render() {
		return(
         e("div",{className:"w-100"},
         e(FirstRow),
         e(SecondRow)
         	)
			)
	}
}

//class that router


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

 	// componentDidMount() {
 	// 	setTimeout(()=>{
  //  this.setState({which:5})
 	// 	},3000)
 	// }

 	render() {
const Update=(item)=> {
	
	this.setState({which:parseInt(item)})
}
 const switchhandler=(data)=> {


	switch(data) {
        	case 1:console.log("Iam the first");
        	return(e(Body))
        	break;
        	case 2:console.log("Iam the second");
        	return(e(User))
        	break;
        	case 3:console.log("Iam the third and default");
        	return(e(Product))
        	break;
        	case 4:console.log("Iam the third and default");
        	return(e(Statisctic))
        	break;
        	case 5:
        	return(e(PromotionB))
        	break;
        	default:
        	 return(e(Body))
        	 break;
        }
}

return (e("div",{className:"container-fluid d-flex"},
   e("div",{className:"col-3",id:"sideBar"},e(SideBar,{change:Update})),
   e("div",{className:"col-9 mt-3",id:"body"},switchhandler(this.state.which))
	)
	
	);
        }

 	}
 
ReactDOM.render(e(App),document.querySelector("#index_body"))


//ReactDOM.render(React.createElement(Body),document.querySelector("#body"));
const Footer=()=>{
	return(
        e("footer",{className:"footer w-100 py-2 text-center"},
        	e("p",null,'copyright2019.WEBTECHIE'))
		)
}
ReactDOM.render(React.createElement(Footer),document.querySelector("#footer"));

