const e=React.createElement;

export class Allproducts extends React.Component {

	constructor() {
		super();
		this.state={
			categories:[
            {id:1,name:"Main Meals"},{id:2,name:"Others"},
            {id:3,name:"Test Category"},{id:4,name:"Test 234"}
			],
			products:[
     
			]
		}
	}
  componentDidMount() {
    fetch("http://localhost/Denis/Admin/getCategory.php")
   .then(response=>response.json())
   .then(data=>{
   	let sc=this.state;
   	sc.categories=data;
 this.setState(sc);
 //fetch the deault products
 var default1=data[0].id;

    fetch("http://localhost/Denis/Admin/getallproducts.php?id="+default1)
   .then(response=>response.json())
   .then(data=>{

   	let sc=this.state;
   	sc.products=data;
 this.setState(sc);

 

   })

     //end of fetch

   })
  }
	render() {
		const updateProducts=(e)=>{
   
      let id=e.target.value;

        fetch("http://localhost/Denis/Admin/getallproducts.php?id="+id)
   .then(response=>response.json())
   .then(data=>{

   	let sc=this.state;
   	if(data==null) {
   	sc.products=[];	

}else {
   	sc.products=data;
   }
 this.setState(sc);
   })

		}
		return(
    e("div",{className:"w-100",id:"allproducts"},
       e("div",{className:"row w-75 mx-auto"},
      e("form",{className:"form-inline"},
             e("div",{className:"form-group"},
                e("label",null,"Choose Category"),
                e("select",{name:"category",
                	onChange:(e)=>updateProducts(e),
                	id:"cat",className:"form-control"},
                  this.state.categories.map(item=>{
                  return	e("option",{key:item.id ,value:item.id},item.name)
                  })
                	)
             	)
          
      	),
      e("table",{className:"table table-striped w-75 mt-3 text-center"},
           e("thead",{className:"bg-primary text-white"},
          e("tr",null,
         e("td",null,"#"),
         e("td",null,"Product Name"),
         e("td",null,"Price"),
         e("td",null,"Total Sales")
          	)
           	 ),
           //start tbody
           e("tbody",null,this.state.products.length>0?
         this.state.products.map(item=>{
         	return(
            e("tr",{key:item.id},
            	e("td",{},item.id),
               e("td",{id:item.id},item.name),
               e("td",{id:item.id},item.price),
               e("td",{id:item.id},item.total||0)
            	)
         		)
         }):e("tr",null,e("td",{colSpan:4},"No items Yet!"))
           	)
      	)
       	)
    	)
			)
	}
}