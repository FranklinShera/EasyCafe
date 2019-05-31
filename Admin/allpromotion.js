const e=React.createElement;

 export class Allpromotion extends React.Component {
	constructor() {
		super()
		this.state={
			name:"April promotion",
			priceoff:9,
			actualPrice:30
		}
	}

render(){
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
               e("td",null,"price off"),
                 e("td",null,"price now"),
                 e("td",null,"Action")

            	)
           	),//end of thead
   e("tbody",null,
       e("tr",null,
          e("td",null,1),
               e("td",null,
           e("input",{name:"name",
           	id:"1",
           	defaultValue:"promotion name",
            disabled:true})
          	),
                e("td",null,
           e("input",{name:"priceoff",
           	id:"1",
           	defaultValue:".9%",
            disabled:true})
          	),
               e("td",null,100),
               e("td",null,

               e("span",{className:"far fa-edit fa-2x text-primary hover"}),
               e("span",{className:"fa fa-trash fa-2x text-primary hover"})
               	)
       	)
   	)
        	)
       //table ends
   	 )

   	)
		)
}

}
