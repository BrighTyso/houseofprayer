import React from 'react';
import logo from './logo.svg';
import './App.css';
import Scroll from "./Scroll";
import Footer from "./Footer";
import Signin from "./Signin";
import Register from "./Register";
import About from "./About";
import AccountSetup from "./AccountSetup";
import Button from '@material-ui/core/Button';
import {CircularProgress} from '@material-ui/core';
import { Badge } from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableView3 from "./TableView3"
import TextInput from "./TextInput"
import Model from "./Model"
import MainTabs from "./MainTabs"
import AppBar from "./AppBar"
import FinancialView from "./FinancialView"
import Skeleton from "./Skeleton"
import SpeedDial from "./SpeedDial"
import  "tachyons"
import AddMember from "./AddMember"
import AddFinance from "./AddFinance"
import AddEvent from "./AddEvent"
import MembersView from "./MembersView"
import TimeLine from "./TimeLine"



class App extends React.Component{


  constructor()
  { 

      super();
      this.state={
        userId:"",
        fData:[],
        eData:[],
        cards:[],
        input:'',
        route:'startpage',
        isSignedIn:false

      }

  }

  componentDidMount(){


fetch(`http://localhost:3001/getFinance/${this.state.userId}`).then(response=>{return response.json();})
.then(data=> {

  this.setState({fData:data})
   
})

  }

  onUserLoggedIn=(userId)=>{

    this.setState({userId:userId})

  }

    onRouteChange=(route)=>{
           this.setState({route:route})
   }

    onSignIn=(isSignedIn)=>{
 
    this.setState({isSignedIn:isSignedIn})

   if (this.state.isSignedIn===true) {


    }else{

      
    }
 
}

  render(){
      if (this.state.route==='startpage') {

        return (
          <div>
                  <div className="App" style={{height:'500px'}}>

                    <Signin onUserLoggedIn={this.onUserLoggedIn} onRouteChange={this.onRouteChange}/>


{
       //                  <Button variant="contained" color="primary">
 //     Hello World
 //   </Button>

  //  <CircularProgress />
    //<CircularProgress color="secondary" />
//<Table/>

//<Badge badgeContent={199} color="primary">
// <Button variant="contained" color="primary">
   //   Hello World
  //  </Button>
//</Badge>
//<Badge badgeContent={4} color="secondary">
 //<Button variant="contained" color="primary">
  //    Hello Worlds
  //  </Button>
//</Badge>
//<Badge badgeContent={4} color="error">
//<Button variant="contained" color="secondary">
    //  Hello World
    //</Button>
//</Badge>
}
                
              
                  
                   </div>
           </div>
            );
         }else if (this.state.route==='signin'){
          return (
            <div>
                  <div className="App" style={{height:'500px'}}>
                   <AppBar onRouteChange={this.onRouteChange} />
                    <MainTabs  id={this.state.userId}  onRouteChange={this.onRouteChange} />
                  </div>
                 </div> 
               );
         }
          else if (this.state.route==='membersView') {
            return (
                    <div className="App" style={{height:'500px'}}>
                      <AppBar onRouteChange={this.onRouteChange} />
                      <MainTabs  id={this.state.userId}  onRouteChange={this.onRouteChange} />
                      <MembersView id={this.state.userId}/>

                    </div>
               );

         }else if (this.state.route==='financeView') {

     return(  
            <div className="App" style={{height:'500px'}}>
                   <AppBar onRouteChange={this.onRouteChange} />
                   <MainTabs  id={this.state.userId}  onRouteChange={this.onRouteChange} />
                   <br/>
                   <FinancialView  id={this.state.userId}/>
            </div>
          );

        }else if (this.state.route==='register') {

       return(  
            <div className="App" style={{height:'500px'}}>
          
            <Register onUserLoggedIn={this.onUserLoggedIn} onRouteChange={this.onRouteChange}/>
            </div>
          );


        }else if (this.state.route==='eventView') {

       return(  
            <div className="App" style={{height:'500px'}}>
                    <AppBar onRouteChange={this.onRouteChange} />
                    <MainTabs  id={this.state.userId}  onRouteChange={this.onRouteChange} />
                   <TimeLine />
            </div>
          );


        }
        else if (this.state.route==='addEvent') {

         return(  
            <div className="App" style={{height:'500px'}}>
                    <AppBar onRouteChange={this.onRouteChange} />
                    <MainTabs  id={this.state.userId}  onRouteChange={this.onRouteChange} />  

                    <AddEvent />
                  
            </div>
          );


        }

         else if (this.state.route==='addMember') {

         return(  
            <div className="App" style={{height:'500px'}}>
                    <AppBar onRouteChange={this.onRouteChange} />
                    <MainTabs  id={this.state.userId}  onRouteChange={this.onRouteChange} />  

                    <AddMember id={this.state.userId}/>
                  
            </div>
          );


        }
         else if (this.state.route==='addFinance') {

         return(  
            <div className="App" style={{height:'500px'}}>
                    <AppBar onRouteChange={this.onRouteChange} />
                    <MainTabs id={this.state.userId}   onRouteChange={this.onRouteChange} />  
                    <AddFinance id={this.state.userId}/>
                  
            </div>
          );


        }
            

        else if (this.state.route==='dashboard') {

       return(  
            <div className="App" style={{height:'500px'}}>
            <AppBar onRouteChange={this.onRouteChange} />
            <MainTabs id={this.state.userId}   onRouteChange={this.onRouteChange} />
           
            </div>
          );
}
       else if (this.state.route==='about') {

       return(  
            <div className="App" style={{height:'500px'}}>
            <AppBar onRouteChange={this.onRouteChange} />
            <MainTabs  id={this.state.userId}  onRouteChange={this.onRouteChange} />
            </div>
          );

        }else if (this.state.route==='AccountSetup') {

       return(  
            <div className="App" style={{height:'500px'}}>
            <AppBar onRouteChange={this.onRouteChange} />
            <MainTabs  id={this.state.userId}  onRouteChange={this.onRouteChange} />
            </div>
          );

        }else if (this.state.isSignedIn===true) {

       return(  
            <div className="App" style={{height:'500px'}}>

            <AccountSetup onRouteChange={this.onRouteChange} />
            </div>
          );

        }

    
       
     

  }
}


export default App;
