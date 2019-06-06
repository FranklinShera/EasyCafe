const e=React.createElement;

export class Alltransaction extends React.Component {
	constructor() {
		super()
 this.state={

 	month:['January','February',
 	 'March','April','May','June',
 	 'July','August','September','October',
 	 'November','December'
 	],
 	data:[
 
 	]
		}
 }

componentDidMount() {
		let sc=this.state;
		let year=2019;
		let month=1;
	
	fetch("http://localhost/Denis/Admin/alltransaction.php?year="+year+"&month="+month)
   .then(response=>response.json())
   .then(data=>{
	let sc=this.state;
	sc.data=data;

	this.setState(sc);
   })
}
render() {

	const updateChanges=(e)=>{
    let month=parseInt(e.target.value)+1;
    let sc=this.state;
		let year=2019;
		
	fetch("http://localhost/Denis/Admin/alltransaction.php?year="+year+"&month="+month)
   .then(response=>response.json())
   .then(data=>{
	let sc=this.state;
	sc.data=data;

	this.setState(sc);
   })
	}
	let total=0;
	let total1=Array.isArray(this.state.data)?this.state.data.map(item=>{
    	return total+=item.total==null?0:parseInt(item.total);
    }):0;
   //UpdateByDate function
   const UpdateByDate=(e)=>{
    //the default year
    let defaultYear=new Date().getFullYear();
  let date=e.target.value;
  var date_selected=new Date(date);
  var month=date_selected.getMonth()+1;
  let day=date_selected.getDate();
  var year=date_selected.getFullYear();
    fetch("http://localhost/Denis/Admin/alltransaction.php?year="+year+"&month="+month)
   .then(response=>response.json())
   .then(data=>{
    var fetched=data;

  // let sc=this.state;
  // sc.data=data;

  // this.setState(sc);

 //do array manipulation if the year is deafault Year

  let sc=this.state;
 let selected=[];
 let newdata= Array.isArray(fetched)?fetched.filter(item=>{
   if(item!=undefined) {
    let itemdate=new Date(item.Date);
    let itemday=itemdate.getDate();

    let itemmonth=date_selected.getMonth()+1;
    //check if the day is equal to the day selected
    if(itemday==day && itemmonth==month) {

       return item;

    }else {
     // console.log(item.Date);
    }

   }
  }):"";

sc.data=newdata;

this.setState(sc);

 
   })


  //lets get the year date

   }
  return (
  	e("div",{className:"row w-100",id:"alltransaction"},
  		e("div",{className:"col-3"},
     //start a div
    e("div",{className:"card text-center "},
       //start a round div
       e("div",{className:"round mx-auto"},
    e("h1",null,total)
       	),
       e("h2",{className:"h4 mt-2"},"Total Sales")
    	),
       e("div",{className:"card text-center "},
       //start a round div
       e("div",{className:"round mx-auto"},
    e("h1",null,this.state.data.length||0)
        ),
       e("h2",{className:"h4 mt-2"},"Total Transaction")
      ),
     //end a text-center div
     //start a form 
     e("form",null,
        e("div",{className:"card mt-4 p-2"},
             e("div",{className:"form-group"},
                e("label",null,"SELECT MONTH:"),
                e("select",{name:"month",
                	onChange:(e)=>updateChanges(e),
                	className:"form-control"},
                	this.state.month.map(item=>{
                		return(
                       e("option",{key:item,value:this.state.month.indexOf(item)},item)
                			)
                	})
          
                	)//end select
             	),
                e("div",{className:"form-group"},
                e("label",null,"SELECT DATE:"),
                e("input",{name:"date",type:"date" ,
                     onChange:(e)=>UpdateByDate(e),
                     min:"2019-01-1",
                className:"form-control"})//end select
             	)
        	)
     	)//end of the form
  			),
   e("div",{className:"col-9"},

//wrapper div
    e("div",{className:"card mx-auto text-center w-75 card2"},
    	   e("h2",null,"ALL TRANSACTIONS")),
    //BEGIN A TABLE
      e("table",{className:"table table-striped w-75 mx-auto text-center"},
         e("thead",{className:"bg-primary text-white"},
               e("tr",null,
      //begin the heading of the table data
         e("td",null,"#"),
          e("td",null,"Products"),
           e("td",null,"Total"),
            e("td",null,"Mpesa Code"),
             e("td",null,"Served By"),
           
              e("td",null,"View")
               	)//end of table row
         	),//end of tablzle head

         e("tbody",null,
          Array.isArray(this.state.data)? this.state.data.map(item=>{
          return( 	e("tr",{key:item.id},
               e("td",null,item.id),
               e("td",null,item.products),
               e("td",null,item.total),
               e("td",null,item.mpesaCode),
               e("td",null,item.servedby),
             
               e("td",null,
                  e("span",{id:item.id,className:"btn btn-primary"},"View")
               	)

           		))
           }):e("tr",null,
           e("td",{colSpan:6,rowSpan:3},"Nothing In There Yet")
           )
         	)
      	)//end of table
//end of wrapper div
   	)
  	)
  	)
	}
}
