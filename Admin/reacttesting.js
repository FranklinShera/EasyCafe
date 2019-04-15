const e=React.createElement;


class Product extends React.Component {
    constructor() {
    	super();
  this.state={
  	headings:[{
  		id:1,
  		name:"SELECT CATEGORY",
  		amount:200,
  		data:["Main Meals","Others"]
  	},
  	{  
  		id:2,
  		name:"PRODUCT LIST",
  		amount:500,
  		data:["Ugali Mix","Rice Plain","Chapo Beef"]
  	}
  	]
  }
         
    		
    }

    render() {
    	return(
    e("div",null,this.state.headings.map(item=>{
    	return e("li",{id:item.id},item.name,item.amount,
    		item.data.map(d=>{
    			return d;
    		}))
    })


    )
    		)
    }
}

ReactDOM.render(e(Product),document.querySelector("#root"))
state={
  	
  state.headings.filter(item=>{
  	if(item.id==1){
  		console.log(item)
  		return item;

  	}
  })