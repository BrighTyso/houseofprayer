import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


class AddFinance extends React.Component{


constructor({props}){
super(props);


}


 submitRecords=()=>{

const name= document.getElementById("name")
const surname= document.getElementById("surname")
const phoneNumber= document.getElementById("phoneNumber")
const amount= document.getElementById("amount")
const description= document.getElementById("description")
const paymentMethod= document.getElementById("paymentMethod")
const income_payment= document.getElementById("income_payment")
const date= document.getElementById("date")



fetch('http://localhost:3001/addFinance', {

method:"post",
headers:{'Content-Type':'application/json'},
body:JSON.stringify({
   
   name:name.value,
   surname:surname.value,
   phoneNumber:phoneNumber.value,
   amount:amount.value,
   purpose:description.value,
   paymentMethod:paymentMethod.value
   ,income_payment:income_payment.value
   ,record_date:date.value
   ,userId:this.props.id

    })
  }).then(response=>{
    response.json()
  })
  .then(data=>{

    console.log(data)
  })


}


render(){


return (


    <article class="br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 dib bw2 tc center">
      <div className="tc pa2 ma1">
            

    <div>
    <p> Enter Financial Records</p>
 </div>
     <div>
      <TextField  className="flex " id="name" placeholder="Enter Name" label="name" inputProps={{'aria-label':'description'}} variant ="outlined"  color="primary"/>
     </div>
     <br/>
      <div>
      <TextField  className="flex " id="surname" placeholder="Enter Surname" label="surname" inputProps={{'aria-label':'description'}} variant ="outlined"  color="primary"/>
     </div>
        <br/>
      <div>
      <TextField  className="flex " id="phoneNumber" placeholder="Enter Phone Number" label="phone number" inputProps={{'aria-label':'description'}} variant ="outlined"  color="primary"/>
     </div>
        <br/>
      <div>
      <TextField  className="flex " id="amount" placeholder="Amount" label="amount" inputProps={{'aria-label':'description'}} variant ="outlined"  color="primary"/>
     </div>
        <br/>
         <div>
      <TextField  className="flex " id="description" placeholder="Purpose" label="description" inputProps={{'aria-label':'description'}} variant ="outlined"  color="primary"/>
     </div>
        <br/>
         <div>
      <select className="md-select" aria-labelledby="searchExplanation" id="income_payment" >
      <option>income</option>
      <option>payment</option>
      </select>
     </div>
      <br/>
         <div>
      <select className="md-select" aria-labelledby="searchExplanation" id="paymentMethod" >
      <option>ecocash</option>
      <option>onemoney</option>
      <option>usd</option>
      <option>rands</option>
      <option>pounds</option>
      <option>zwl</option>
      </select>
     </div>
        <br/>
         <div>
      <TextField  className="flex " id="date" inputProps={{'aria-label':'description'}} placeholder="enter Date"  color="secondary" type="date"/>
     </div>
        <br/>
      <div>
   <Button onClick={this.submitRecords} >Enter Finance </Button>
   </div>
      </div>
      </article>
  );
}

}




export default AddFinance;