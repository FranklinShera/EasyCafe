
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


//ReactDOM.render(e(User),document.querySelector("#user-body"))