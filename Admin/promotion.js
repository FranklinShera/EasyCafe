//const e=React.createElement;

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

const Final=()=> {
  return(
    e("div",{className:"row"},
        e(PromoDiv),
        e(CreatePromo)
      )
    )
}
ReactDOM.render(e(Final),document.querySelector("#promotion"))
