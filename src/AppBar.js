import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Bar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/ToolBar';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const AppBar =()=>{

return(
<Bar position="static">

<ToolBar>
<Typography variant="h6" style={{display:'flex',justifyContent:'flex-end'}} >
   HOUSE OF PRAYER
</Typography>
 <Button color="inherit " style={{display:'flex',justifyContent:'flex-end',alignself: "stretch",marginright: "16px"}} >login out</Button>
</ToolBar>
</Bar>
)


}

export default AppBar;