import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { lighten, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import DeleteIcon from '@material-ui/icons/Delete';
import FilterListIcon from '@material-ui/icons/FilterList';
import EmailIcon from '@material-ui/icons/Email';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import Model from './Model'
import Modal from '@material-ui/core/Modal';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


let mySelectedIndex;
let myModelData;



let myId="";
let modNumber=1;
let addName="";
let addSurname="";
let addPhone="";
let addUserId="";


let editName="";
let  editSurname="";
let editPhone="";
let editDescription="";
let editIncome_payment="";
let editPaymentMethod="";
let editAmount="";
let editRecord_date="";
let editUserId="";
let editId="";





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
   ,userId:addUserId

    })
  }).then(response=>{
    response.json()
  })
  .then(data=>{

    console.log(data)
  }).catch(err=>{console.log(err)})



}


const submitEditRecords=({props})=>{

const name= document.getElementById("name")
const surname= document.getElementById("surname")
const phoneNumber= document.getElementById("phoneNumber")
const amount= document.getElementById("amount")
const description= document.getElementById("description")
const paymentMethod= document.getElementById("paymentMethod")
const income_payment= document.getElementById("income_payment")
const date= document.getElementById("date")

fetch('http://localhost:3001/updateFinance', {

method:"put",
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
   ,userId:editUserId,
    id:editId

    })
  }).then(response=>{
    response.json()
  })
  .then(data=>{

    console.log(data)

  }).catch(err=>{console.log(err)})

}



const deleteRecord=()=>{

   const value=myModelData.filter((data)=>{

    return data.id===mySelectedIndex[0];

    })



fetch('http://localhost:3001/deleteFinance', {

method:"delete",
headers:{'Content-Type':'application/json'},
body:JSON.stringify({
   
    id:value[0].id

    })
  }).then(response=>{
    response.json()
  })
  .then(data=>{

    console.log(data)

  }).catch(err=>{console.log(err)})

}

 



function createData(name, surname,  phoneNumber, amount ,purpose,paymentMethod,income_payment) {
  return { name, surname, phoneNumber, amount ,purpose,paymentMethod,income_payment,};
}

/*
const rows = [
  createData('Cupcake', 'Cupcake', 3.7, 'Cupcake', 4.3, 305),
  createData('Donut', 452, 25.0, 51, 4.9, 305),
  createData('Eclair', 262, 16.0, 24, 6.0, 305),
  createData('Frozen ', 159, 'Cupcake', 24, 4.0, 305),
  createData('Gingerbread', 356, 16.0, 49, 3.9, 305),
  createData('Honeycomb', 408, 3.2, 87, 6.5, 305),
  createData('Ice', 237, 9.0, 37, 4.3, 305),
  createData('Jelly Bean', 375, 0.0, 94, 0.0),
  createData('KitKat', 518, 26.0, 65, 7.0, 305),
  createData('Lollipop', 392, 0.2, 98, 0.0, 305),
  createData('Marshmallow', 318, 0, 81, 2.0,3),
  createData('Nougat', 360, 19.0, 9, 37.0, 305),
  createData('Oreo', 437, 18.0, 63, 4.0, 305),
];
*/

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}


const deletef=(props)=>{


}






function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}


const headCells = [
  { id: 'name', numeric: false, disablePadding: false, label: ' NAME' },
  { id: 'surname', numeric: false, disablePadding: false, label: '  SURNAME' },
  { id: 'phoneNumber', numeric: true, disablePadding: false, label: 'PHONE NUMBER' },
  { id: 'amount', numeric: true, disablePadding: false, label: 'AMOUNT ' },
  { id: 'purpose', numeric: false, disablePadding: false, label: 'DESCRIPTION      ' },
  { id: 'paymentMethod', numeric: false, disablePadding: false, label: 'PAYMENT METHOD       ' },
  { id: 'income_payment', numeric: false, disablePadding: false, label: 'INCOME/PAYMENT' },

];

function EnhancedTableHead(props) {
  const { classes, onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead className="pa111">
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{ 'aria-label': 'select all desserts' }}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align="center"
            padding={headCell.disablePadding ? '20' : 'default'}
            sortDirection={orderBy === headCell.id ? order : false}
            width={300}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <span className={classes.visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </span>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  classes: PropTypes.object.isRequired,
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

const useToolbarStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(1),
  },
  highlight:
    theme.palette.type === 'light'
      ? {
          color: theme.palette.secondary.main,
          backgroundColor: lighten(theme.palette.secondary.light, 0.85),
        }
      : {
          color: theme.palette.text.primary,
          backgroundColor: theme.palette.secondary.dark,
        },
  title: {
    flex: '1 1 100%',
  },
}));


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

const useStyles1 = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px  #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const EnhancedTableToolbar = (props) => {
  const classes = useToolbarStyles();
  const { numSelected } = props;




 const classes1 = useStyles1();
// getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {


    setOpen(true);
  };


  const addF=()=>{



   const value=myModelData.filter((data)=>{


    return data.id===mySelectedIndex[0];

    })



   addName=value[0].name
   addSurname=value[0].surname
   addPhone=value[0].phoneNumber
   addUserId=value[0].userId

// select the modal to open
   modNumber=1;
// open modal
   handleOpen();



  }

  const editF=()=>{



   const value=myModelData.filter((data)=>{


    return data.id===mySelectedIndex[0];

    })



   editName=value[0].name
   editSurname=value[0].surname
   editPhone=value[0].phoneNumber
   editDescription=value[0].purpose
   editIncome_payment=value[0].income_payment
   editPaymentMethod=value[0].paymentMethod
   editAmount=value[0].amount
   editRecord_date=value[0].record_date
   editUserId=value[0].userId
   editId=value[0].id



    modNumber=0;
    handleOpen();

  }



  const handleClose = () => {
    setOpen(false);
  };


const getData=()=>{


}


const body=(




 <div style={modalStyle} className={classes1.paper}>
 <div className="tc pa2 ma1">

    <div>
     <p> ENTER FINANCIAL RECORD</p>
    </div>
      <div>
      <TextField  className="flex " id="name" placeholder="Enter Name" label="name" inputProps={{'aria-label':'description'}} variant ="outlined" value={addName} color="primary"/>
     </div>
     <br/>
      <div>
      <TextField  className="flex " id="surname" placeholder="Enter Surname" label="surname" inputProps={{'aria-label':'description'}} variant ="outlined" value={addSurname} color="primary"/>
     </div>
        <br/>
      <div>
      <TextField  className="flex " id="phoneNumber" placeholder="Enter Phone Number" label="phone number" inputProps={{'aria-label':'description'}} value={addPhone} variant ="outlined"  color="primary"/>
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
     <Button onClick={submitRecords} >ENTER RECORD </Button>
     </div>
      </div>


</div>



  );








const editbody=(



 <div style={modalStyle} className={classes1.paper}>
 <div className="tc pa2 ma1">

    <div>
    <p> UPDATE RECORD</p>
       </div>
     <div>
      <TextField  className="flex " id="name" placeholder="Enter Name" label="name" inputProps={{'aria-label':'description'}} variant ="outlined"  defaultValue={editName} color="primary"/>
     </div>
     <br/>
      <div>
      <TextField  className="flex " id="surname" placeholder="Enter Surname" label="surname" inputProps={{'aria-label':'description'}} variant ="outlined" defaultValue={editSurname} color="primary"/>
     </div>
        <br/>
      <div>
      <TextField  className="flex " id="phoneNumber" placeholder="Enter Phone Number" label="phone number" inputProps={{'aria-label':'description'}} defaultValue={editPhone} variant ="outlined"  color="primary"/>
     </div>
        <br/>
      <div>
      <TextField  className="flex " id="amount" placeholder="Amount" label="amount" inputProps={{'aria-label':'description'}} variant ="outlined" defaultValue={editAmount} color="primary"/>
     </div>
        <br/>
         <div>
      <TextField  className="flex " id="description" placeholder="Purpose" label="description" inputProps={{'aria-label':'description'}} variant ="outlined" defaultValue={editDescription} color="primary"/>
     </div>
        <br/>
         <div>
      <select className="md-select" aria-labelledby="searchExplanation" id="income_payment" defaultValue={editIncome_payment} >
      <option>income</option>
      <option>payment</option>
      </select>
     </div>
      <br/>
         <div>
      <select className="md-select" aria-labelledby="searchExplanation" id="paymentMethod" defaultValue={editPaymentMethod}>
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
      <TextField  className="flex " id="date" inputProps={{'aria-label':'description'}} placeholder="enter Date"  defaultValue={editRecord_date}  color="secondary" type="date"/>
     </div>
        <br/>
      <div>
     <Button onClick={submitEditRecords} >UPDATE RECORD</Button>
     </div>
      </div>

</div>
  );





const edit=()=>{


const value=myModelData.filter((data)=>{


  return data.id===mySelectedIndex[0];

})

console.log(value)

const name=document.getElementById("name1");




}



  return (
    <Toolbar
      className={clsx(classes.root, {
        [classes.highlight]: numSelected > 0,
      })}
    >
      {numSelected > 0 ? (
        <Typography className={classes.title} color="inherit" variant="subtitle1" component="div">
          {numSelected} selected
        </Typography>
      ) : (
        <Typography className={classes.title} variant="h6" id="tableTitle" component="div">
          Financial Records
        </Typography>
      )}

      {numSelected > 0 ? (
        <div className="flex">


        <Tooltip title="Add">
          <IconButton aria-label="delete" onClick={addF} >
           <AddIcon />
          </IconButton>
        </Tooltip>


        <Tooltip title="Edit">
          <IconButton aria-label="delete" onClick={editF}>
           <EditIcon  />
          </IconButton>
        </Tooltip>

           <Tooltip title="messaging">
          <IconButton aria-label="delete">
           <EmailIcon/>
          </IconButton>
        </Tooltip>

        <Tooltip title="Delete">
          <IconButton aria-label="delete" onClick={deleteRecord}>
           <DeleteIcon/>
          </IconButton>
        </Tooltip>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {
          modNumber===1?body:editbody
        }

      </Modal>

    
      </div>


      ) : (
        <Tooltip title="Filter list">
          <IconButton aria-label="filter list">
           <FilterListIcon/>
          </IconButton>
        </Tooltip>
      )}
    </Toolbar>
  );

       getData();
};

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  paper: {
    width: '100%',
    marginBottom: theme.spacing(2),
  },
  table: {
    minWidth: 750,
  },
  visuallyHidden: {
    border: 0,
    clip: 'rect(0 0 0 0)',
    height: 1,
    margin: -1,
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    top: 20,
    width: 1,
  },
}));











export default function EnhancedTable({rows}) {


  myModelData=rows;
  const classes = useStyles();
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('calories');
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = rows.map((n) => n.id);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };





  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }


    mySelectedIndex=newSelected;
    setSelected(newSelected);



  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = (event) => {
    setDense(event.target.checked);
  };

  const isSelected = (name) => selected.indexOf(name) !== -1;

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);





  return (






    <div className={classes.root}>
      <Paper className={classes.paper}>
        <EnhancedTableToolbar numSelected={selected.length} />
        <TableContainer>
          <Table
            className={classes.table}
            aria-labelledby="tableTitle"
            size={dense ? 'small' : 'medium'}
            aria-label="enhanced table"
          >
            <EnhancedTableHead
              classes={classes}
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              {stableSort(rows, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const isItemSelected = isSelected(row.id);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow
                      hover
                      onClick={(event) => handleClick(event, row.id)}
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row.id}
                      selected={isItemSelected}
                    >
                      <TableCell padding="checkbox">
                        <Checkbox
                          checked={isItemSelected}
                          inputProps={{ 'aria-labelledby': labelId }}
                        />
                      </TableCell>
                      <TableCell  component="th" id={labelId} scope="row" padding="none" align="center">
                        {row.name}
                      </TableCell>
                      <TableCell   align="center">{row.surname}</TableCell>
                      <TableCell   align="center">{row.phoneNumber}</TableCell>
                      <TableCell  align="center" paddingLeft="30">{row.amount}</TableCell>
                      <TableCell  align="center">{row.purpose}</TableCell>
                      <TableCell  align="center">{row.paymentMethod}</TableCell>
                       <TableCell align="center">{row.income_payment}</TableCell>
                    </TableRow>


                  );
                })}
              {emptyRows > 0 && (
                <TableRow style={{ height: (dense ? 33 : 53) * emptyRows}}>
                  <TableCell colSpan={7} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Paper>
      <FormControlLabel
        control={<Switch checked={dense} onChange={handleChangeDense} />}
        label="Dense padding"
      />





    </div>
  );
}
