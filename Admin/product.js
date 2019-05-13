//const e=React.createElement;

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

ReactDOM.render(e(Product),document.querySelector("#product-body"))
