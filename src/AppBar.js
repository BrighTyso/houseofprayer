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
<Typography variant="h6" >
   HOUSE OF PRAYER
</Typography>
 <Button color="inherit " className="flex right" >login</Button>
</ToolBar>


</Bar>
)


}

export default AppBar;