import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { lighten, makeStyles } from '@material-ui/core/styles';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Paper from '@material-ui/core/Paper';
import Modal from '@material-ui/core/Modal';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


let myId="";
let modNumber=1;

const submitMRecords=()=>{

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
   userId:myId,
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



 const submitRecords=({props})=>{

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
   ,userId:myId

    })
  }).then(response=>{
    response.json()
  })
  .then(data=>{

    console.log(data)
  }).catch(err=>{console.log(err)})



}

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px  #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));


export default function  MainTabs({ onRouteChange, id }){

  myId=id;
 const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
  

    setOpen(true);
  };


  const m=()=>{
   
   modNumber=0;
   handleOpen();

  }

  const f=()=>{

    modNumber=1;
    handleOpen();
  }

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
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
   <Button onClick={submitRecords} >Enter Finance </Button>
   </div>
      </div>
   
    </div>
  );


  const body2=(
    <div style={modalStyle} className={classes.paper}>
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

   <Button onClick={submitMRecords} >Enter Member</Button>
   </div>
      </div>
   </div>
    );

return(



<Paper square className="flex">


<Tabs value={0} indicatorColor="primary" textColor="primary" aria-label="disabled tabs example">

<Tab onClick={()=>onRouteChange("financeView")}  label="Finance"/>
<Tab onClick={()=>onRouteChange("membersView")}  label="members"/>
<Tab onClick={()=>onRouteChange("eventView")} label="view Event"/>
<Tab  label="add Event"/>
<Tab onClick={m} id="members" label="add Member"/>
<Tab id="tabAddFinance" value="addFinance" onClick={f} label="add Finance"/>
<Tab onClick={()=>onRouteChange("history")} label="History"/>

</Tabs>

     <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {modNumber===1? body:body2}
      </Modal>

</Paper>


	)



}

