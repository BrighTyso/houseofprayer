import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import TextInput from './TextInput';
import Paper from '@material-ui/core/Paper';


const startDate=()=>{

const startDate=document.getElementById("start").value

return startDate.value;

}


const endDate=()=>{

const endDate=document.getElementById("end").value

return endDate.value;
	
}
const FinanceSearch=({onInputChange,onDateChange,ecocash,usd,rands,zwl,ecocashP,usdP,randsP,zwlP})=>{

return(

	<div claasName="tc ma2">
		
 
		 <Tooltip title="Select Start Date">
     <TextField   id="start"  type="date"  inputProps={{'aria-label':'description'}} />
     </Tooltip>

     <Tooltip title="Select End Date">
     <TextField   id="end"   type="date" inputProps={{'aria-label':'description'}} />
     </Tooltip>

     <Button onClick={()=>onDateChange(document.getElementById("start").value,document.getElementById("end").value)} className="pa2 " color="primary" >search by date</Button>

     <TextField onChange={onInputChange} className="flex " id="outlined" placeholder="search here" lable="outlined" inputProps={{'aria-label':'description'}} variant ="outlined"  color="secondary"/>
     
     <p>{`INCOME => ECOCASH : ${ecocash}  ~  USD : ${usd}   ~  RANDS : ${rands}  ~  ZWL  : ${zwl}  
     | PAYMENTS  ==> ECOCASH : ${ecocashP}  ~  USD : ${usdP}   ~  RANDS : ${randsP}  ~  ZWL  : ${zwlP} `}</p>


     </div>


	);

}


export default FinanceSearch;











