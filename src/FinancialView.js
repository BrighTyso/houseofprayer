import React from "react"
import FinancialTableView from "./FinanceTableView"
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import AlertInfo from "./AlertInfo"
import Backdrop from "./Backdrop"
import FinanceSearch from "./FinanceSearch"
import SnackBar from "./SnackBar"

class FinancialView extends React.Component{



constructor({props})
{
super(props)


this.state={
        userId:"",
        fData:[],
        cards:[],
        input:'',
        totalAmount:'',
        totalEco:'',
        totalRands:'',
        totalUSD:'',
        totalPounds:'',
        totalZWL:'',

        totalEcoP:'',
        totalRandsP:'',
        totalUSDP:'',
        totalPoundsP:'',
        totalZWLP:'',
        route:'startpage',
        isSignedIn:false


}
}

componentDidMount()
{

fetch(`http://localhost:3001/getFinance/${this.props.id}`)
.then(response=>{return response.json();})
.then(data=> {
	this.setState({fData:data})
})

}



onInputChange=(event)=>{

	this.setState({input:event.target.value});

 
fetch('http://localhost:3001/getFinanceByDescription', {

method:"post",
headers:{'Content-Type':'application/json'},
body:JSON.stringify({
   
   input:event.target.value,
   userId:this.props.id

    })
  }).then(response=>{
    return response.json()
  })
  .then(data=>{
    
	this.setState({fData:data})
  })

 
}


onDateChange=(start,end)=>{



fetch('http://localhost:3001/getFinanceByDate', {

method:"post",
headers:{'Content-Type':'application/json'},
body:JSON.stringify({
   
   start:start,
   end:end,
   input:this.state.input
  ,userId:this.props.id

    })
  }).then(response=>{
    return response.json()
  })
  .then(data=>{
   let total=0;
   let totalEco=0;
   let totalUSD=0;
   let totalPounds=0;
   let totalRands=0;
   let totalZWL=0;

   let totalEcoP=0;
   let totalUSDP=0;
   let totalPoundsP=0;
   let totalRandsP=0;
   let totalZWLP=0;
   data.map((m,i)=>{



   if (data[i].income_payment==="income") {
           if (data[i].paymentMethod==="ecocash") {

              totalEco+=Number(data[i].amount)

            }else if(data[i].paymentMethod==="usd"){

              totalUSD+=Number(data[i].amount)

            }else if(data[i].paymentMethod==="rands"){

              totalRands+=Number(data[i].amount)

            }else if(data[i].paymentMethod==="zwl"){

               totalZWL+=Number(data[i].amount)
            }

   }else{

         if (data[i].paymentMethod==="ecocash") {

           totalEcoP+=Number(data[i].amount)

            }else if(data[i].paymentMethod==="usd"){

              totalUSDP+=Number(data[i].amount)

            }else if(data[i].paymentMethod==="rands"){

              totalRandsP+=Number(data[i].amount)

            }else if(data[i].paymentMethod==="zwl"){

               totalZWLP+=Number(data[i].amount)
            }


   }
   
   

     

    })



  this.setState({totalAmount:total})
  this.setState({totalEco:totalEco})
  this.setState({totalUSD:totalUSD})
  this.setState({totalZWL:totalZWL})
  this.setState({totalRands:totalRands})

  this.setState({totalEcoP:totalEcoP})
  this.setState({totalUSDP:totalUSDP})
  this.setState({totalZWLP:totalZWLP})
  this.setState({totalRandsP:totalRandsP})

   console.log(this.state.totalAmount)
   console.log(this.state.totalUSDP)
   console.log(this.state.totalRandsP)
   console.log(this.state.totalEcoP)
	 this.setState({fData:data})
  })


}


render(){

	const filter=this.state.fData.filter((records)=>{


		return records.surname.toLowerCase().includes(this.state.input.toLowerCase())

	})




return(

  <div>
  
  <FinanceSearch ecocash={this.state.totalEco} usd={this.state.totalUSD} rands={this.state.totalRands} zwl={this.state.totalZWL} 
  ecocashP={this.state.totalEcoP} usdP={this.state.totalUSDP} randsP={this.state.totalRandsP}
   zwlP={this.state.totalZWLP} onInputChange={this.onInputChange} onDateChange={this.onDateChange} />
  <FinancialTableView rows={this.state.fData }/>
 

  {

  //<AlertInfo/>
  //<SnackBar />
  //<Backdrop/>
 
   }
  
  </div>

  )

}


}

export default FinancialView;