import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const AddEvent=()=>{

	return (
			<div className="tc pa3 ma4">
            


 <div>
 <p >Enter Event </p> 
 </div>
     <div>
      <TextField claasName="pa2" className="flex " id="outlined" placeholder="search here" lable="outlined" inputProps={{'aria-label':'description'}} variant ="outlined"  color="secondary"/>
     </div>
     <br/>
      <div>
      <TextField claasName="pa2" className="flex " id="outlined" placeholder="search here" lable="outlined" inputProps={{'aria-label':'description'}} variant ="outlined"  color="secondary"/>
     </div>
        <br/>
      <div>
      <TextField claasName="pa2" className="flex " id="outlined" placeholder="search here" lable="outlined" inputProps={{'aria-label':'description'}} variant ="outlined"  color="secondary"/>
     </div>
        <br/>
      <div>
      <TextField claasName="pa2" className="flex " id="outlined" placeholder="search here" lable="outlined" inputProps={{'aria-label':'description'}} variant ="outlined"  color="secondary"/>
     </div>
        <br/>
        <div>
      <TextField claasName="pa2" className="flex " id="outlined" placeholder="search here" lable="outlined" inputProps={{'aria-label':'description'}} variant ="outlined"  color="secondary"/>
     </div>
         <br/>
     <div>
      <TextField claasName="pa2" className="flex " id="outlined" placeholder="search here" lable="outlined" inputProps={{'aria-label':'description'}} variant ="outlined"  color="secondary"/>
     </div>
      <div>
   <Button claasName="pa2"  >search</Button>
   </div>
			</div>
	);
}


export default AddEvent;