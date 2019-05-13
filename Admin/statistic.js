//const e=React.createElement;

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

ReactDOM.render(e(Statisctic),document.querySelector("#statistic"))
