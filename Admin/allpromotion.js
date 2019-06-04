const e=React.createElement;
function toast(msg, clas="bg-success",time=3000) {
 //create icon element
  var icon=document.createElement("span");
     
//create Div
var div=document.createElement("div");

//give id to the div
div.id="toast";

//give it a classname
div.className="card show"+" "+ clas+" "+ " border border-info ";
var msg=msg;

//create textNode
var text=document.createTextNode(msg);

//add text element to the div
div.appendChild(icon);
div.appendChild(text);

//append the div to the document
document.body.appendChild(div);

setTimeout(function(){

  div.className=div.className.replace("show","");

  div.parentNode.removeChild(div);
},time)


}

 export class Allpromotion extends React.Component {
	constructor() {
		super()
		this.state={
		data:[	{       
			                id:1,
			               name:"April promotion",
							priceoff:9,
						    actualPrice:30
						}
				    ,
				 {               
				                  id:2,   
				 	                name:"May promotion",
				 					priceoff:70,
				 				    actualPrice:40
				 	}
				    ,
				        {
				      id:3,
					name:"June promotion",
				priceoff:39,
				actualPrice:30
			}
				    ]


		}
	}

componentDidMount() {
	let sc=this.state;
	   fetch("http://localhost/Denis/Admin/allpromotion.php")
   .then(response=>response.json())
   .then(data=>{
	let sc=this.state;
	sc.data=data;

	this.setState(sc);
   })
}
render(){
 const editpromotion=(e)=> {
		let tr=e.target.parentElement.parentElement;
		let id=e.target.parentElement.parentElement.id;

       let sc=this.state;
     let newsc=  sc.data.filter(item=>{
       	if(item.id==id){
       		item.active=false;
       	
       	}
   return item;
       })

     sc=newsc[0];
     	this.setState(sc);
  
		// let first=$(tr).children().first().next();
		// // let namediv=$(tr).children().first().next().children().first().attr("disabled","true");
		// // console.log($(tr).children().first().next().children().first().attr("disabled"))
	}

const postEditpromotion= (e)=> {
//name
let column=$(e.target).attr("name");
let id=$(e.target).attr("id");

let value= column=="priceoff"?$(e.target).val()/100:$(e.target).val();

if(column=="priceoff") {
   if(value=="") {
    toast("Kindly priceoff should be greater than 0","bg-danger");
    
   }else {

        $.ajax({
   Method:'GET',
   url:'editpromotion.php',
   data:{id:id,column:column,value:value}
  }).done(res=>{
   if(res!=1) {
    toast(res);
    let sc=this.state;
    if(column=="priceoff"){
  const  newsc=sc.data.filter(item=>{
      if(item.id==id) {
        item.priceoff=value;

      }
 return item;
    })
   sc=newsc[0];
    this.setState(sc);

}//only if it is priceoff
   }
  })
   }
}//end of price 
else {

  if(value=="") {
    toast(column +"is required","bg-danger")

  }else {

        $.ajax({
   Method:'GET',
   url:'editpromotion.php',
   data:{id:id,column:column,value:value}
  }).done(res=>{
   if(res!=1) {
    toast(res);
    let sc=this.state;
    if(column=="priceoff"){
  const  newsc=sc.data.filter(item=>{
      if(item.id==id) {
        item.priceoff=value;

      }
 return item;
    })
   sc=newsc[0];
    this.setState(sc);

}//only if it is priceoff
   }
  })
  }
}


}

//delete function
const deletepromotion=(e)=> {

let id=$(e.target).attr("name");
        $.ajax({
   Method:'GET',
   url:'deletepromo.php',
   data:{id:id}
  }).done((res)=>{
 
  if(res!=1) {
    let sc=this.state;
     fetch("http://localhost/Denis/Admin/allpromotion.php")
   .then(response=>response.json())
   .then(data=>{
  let sc=this.state;
  sc.data=data;

  this.setState(sc);
   })
    toast(res);
  }else {
    toast("Error Deleting promotion","bg-danger");
  }

  })

}
	return(

   e("div",{className:"w-100", id:"allpromotion"},
   e("div",{className:"row w-75 mx-auto"},
         e("div",{className:"card w-100 text-center"},
              e("h2",null,"Promotions")
         	),
       //table begin
        e("table",{className:"table table-striped text-center"},
           e("thead",{className:"bg-primary text-white"},

            e("tr",null,
             e("td",null,"#"),
              e("td",null,"promotion name"),
               e("td",null,"price off"," %"),
                 e("td",null,"price now"," Kshs."),
                   e("td",null,"Actual Price"," Kshs."),
                 e("td",null,"Action")

            	)
           	),//end of thead
   e("tbody",null,
       
       	this.state.data.map(item=>{
       		return(
    e("tr",{key:item.id,id:item.id},
            e("td",null,item.id),
               e("td",null,
           e("input",{
           	name:"name",
           	type:"text",
           	className:"form-control",
           	id:item.id,
           	defaultValue:item.name,
            onBlur:(e)=>postEditpromotion(e),
            disabled:item.active==false?false:true})
          	),
                e("td",null,
           e("input",{
           	name:"priceoff",
           	type:"number",
           onBlur:(e)=>postEditpromotion(e),
           	className:"form-control",
           	id:item.id,
           	defaultValue:Math.floor(item.priceoff*100),
             disabled:item.active==false?false:true})
          	),
               e("td",null,Math.floor(item.actualPrice-
                              	(item.priceoff*item.actualPrice))),
                e("td",null,item.actualPrice),
               e("td",null,

               e("span",{name:item.id,className:"far fa-edit fa-2x text-primary  hover",onClick:(e)=>editpromotion(e)}),
               e("span",{name:item.id,
                onClick:(e)=>deletepromotion(e),
                className:"fa fa-trash fa-2x text-danger  hover"})
               	)

      
       			)
       		      	)
       	}),

 
   	)
        	)
       //table ends
   	 )

   	)
		)
}

}
