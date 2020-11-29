import React from 'react';
import TextField from '@material-ui/core/TextField';



const TextInput=({onStateChange})=>{

return(

<div className="tc pa2">
<form noValidate autoComplete="off">
<TextField id="outlined" 
placeholder="search here" 
lable="outlined" inputProps={{'aria-label':'description'}} 
variant ="outlined" 
 color="secondary"
onChange={onStateChange}
 />
</form>
</div>


	);

}


export default TextInput;