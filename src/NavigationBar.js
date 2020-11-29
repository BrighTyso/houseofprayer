import React from "react";
import './App.css';




const NavigationBar=({onRouteChange})=>
{
	return(
		<nav className="navBar">
		
		<div  style={{display:'flex',justifyContent:'flex-end'}}>
        {/*  button here */}
        <p onClick={()=>onRouteChange("startpage")} style={{paddingLeft:'15px',paddingRight:'5px' ,color:'white'}} className="pointer">Home </p>
		<p onClick={()=>onRouteChange("academy")} style={{paddingLeft:'15px',paddingRight:'5px' ,color:'white'}} className="pointer">Academy </p>
        <p  onClick={()=>onRouteChange("applications")}  style={{paddingLeft:'15px',paddingRight:'5px',color:'white'}} className="pointer">Applications</p>
        <p  onClick={()=>onRouteChange("services")}  style={{paddingRight:'15px',paddingLeft:'15px',color:'white'}} className="pointer"> Services</p>
        <p  onClick={()=>onRouteChange("news")} style={{paddingRight:'15px',paddingLeft:'15px',color:'white'}} className="pointer"> News</p>
        <p onClick={()=>onRouteChange("about")} style={{paddingLeft:'15px',paddingRight:'5px',color:'white'}} className="pointer">About</p>
        
        {/*  input div */}

		<div style={{paddingTop:'15px ' ,paddingLeft:'15px'}}>
		<input type="text" placeholder="search here" style={{height:'25px ',width:'220px'}}/>
		<input className="bn f6 dim  white bg-purple" type="submit" onClick={()=>onRouteChange("signin")} style={{height:'31px '}} value ="search"/>
		</div>
          <p  onClick={()=>onRouteChange("signin")}  style={{paddingLeft:'15px',paddingRight:'10px',color:'white'}} className="pointer"> Sign In</p>
          <p  onClick={()=>onRouteChange("register")}  style={{paddingLeft:'15px',paddingRight:'10px',color:'white'}} className="pointer"> Register</p>
		</div>
		
		</nav>
		);
}

export default NavigationBar;

