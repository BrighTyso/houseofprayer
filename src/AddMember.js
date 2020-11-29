import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';


class AddMember extends React.Component{


  constructor({props}){
   super(props)



  }


submitRecords=()=>{

const name= document.getElementById("mName")
const surname= document.getElementById("mSurname")
const phoneNumber= document.getElementById("mPhoneNumber")
const category= document.getElementById("mCategory")
const location= document.getElementById("mLocation")
const email= document.getElementById("mEmail")
const occupation= document.getElementById("mOccupation")
const maritalStatus= document.getElementById("mMaritalStatus")

fetch('http://localhost:3001/addMember', {

method:"post",
headers:{'Content-Type':'application/json'},
body:JSON.stringify({
   
   name:name.value,
   userId:this.props.id,
   surname:surname.value,
   phoneNumber:phoneNumber.value,
   ageCategory:category.value,
   location:location.value,
   email:email.value
   ,occupation:occupation.value
   ,maritalStatus:maritalStatus.value

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

   <Paper square>
      <div className="tc pa2 ma1">
            


      <div><p>Enter Members</p></div>
     <div>
      <TextField className="flex " id="mName" placeholder="Enter Name" label="Name" inputProps={{'aria-label':'description'}} variant ="outlined"  color="primary"/>
     </div>
     <br/>
      <div>
      <TextField  className="flex " id="mSurname" placeholder="Enter Surname" label="Surname" inputProps={{'aria-label':'description'}} variant ="outlined"  color="primary"/>
     </div>
        <br/>
      <div>
      <TextField  className="flex " id="mCategory" placeholder="Age Category" label="Category" inputProps={{'aria-label':'description'}} variant ="outlined"  color="primary"/>
     </div>
        <br/>
      <div>
      <TextField  className="flex " id="mPhoneNumber" placeholder="Enter Phone number" label="Phone number" inputProps={{'aria-label':'description'}} variant ="outlined"  color="primary"/>
     </div>
      
      <div>
      <br/>
      <div>
      <TextField  className="flex " id="mEmail" placeholder="Enter Email" label="Email" inputProps={{'aria-label':'description'}} variant ="outlined"  color="primary"/>
     </div>
     <br/>
      <div>
      <TextField  className="flex " id="mLocation" placeholder="Enter Location" label="Location" inputProps={{'aria-label':'description'}} variant ="outlined"  color="primary"/>
     </div>
        <br/>
      <div>
      <TextField  className="flex " id="mOccupation" placeholder="Enter Occupation" label="Occupation" inputProps={{'aria-label':'description'}} variant ="outlined"  color="primary"/>
     </div>

      <br/>
      <div>
      <TextField  className="flex " id="mMaritalStatus" placeholder="Enter Marital Status" label="Marital Status" inputProps={{'aria-label':'description'}} variant ="outlined"  color="primary"/>
     </div>

   <Button onClick={this.submitRecords} >Enter Member</Button>
   </div>
      </div>

      </Paper>
  );



}



}


export default AddMember;