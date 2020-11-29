import React from 'react';

class AccountSetup extends React.Component{

constructor(props)
{
  super(props)
    this.state={

signInEmail:"",
signInPassword:"",
company:false,
userId:"",
 name:"",
username:"",
 address:"",
country:"",
 phone:"",
levelOfEducation:"",
rating:"",
 github:"",
image:"",
 about:""
        

  }

}




onSignInSubmit=(event)=>{

console.log(this.state)

console.log(this.state)

fetch("http://localhost:3001/profile",{
  method:'post',
  headers:{'Content-Type':'application/json'},
  body:JSON.stringify({

  

     userId:this.state.userId,
     name:this.state.name,
     username:this.state.username,
     address:this.state.address,
     country:this.state.country,
     phone:this.state.phone,
     levelOfEducation:this.state.levelOfEducation,
     rating:this.state.rating,
     github:this.state.github,
     image:this.state.image,
     about:this.state.about


  })

}).then(response=>response.json())
  .then(data=>{
    if (data==="success") {
   
     this.props.onRouteChange("startpage")     
    }

  })


}

onAddressChange=(event)=>{

 this.setState({address:event.target.value})
}


onDisplayNameChange=(event)=>{

  this.setState({username:event.target.value})
}


onCountryChange=(event)=>{

 this.setState({country:event.target.value})
}

onNameChange=(event)=>{

  if (this.state.company===false) {
     this.setState({name:event.target.value})
     
  }else{
   this.setState({name:event.target.value})
  }

}



companyA=()=>{
this.setState({company:true})

}
personalA=()=>{
this.setState({company:false})
}

render()
{

	const {onRouteChange} =this.props;
 return (

      <article class="br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 dib bw2 tc center">
			 <main class="pa4 black-80">
       <form class="measure center" >
       <fieldset id="sign_up" class="ba b--transparent ph0 mh0">
     
       <legend class="f4 fw6 ph0 mh0"> <label >select Account type</label></legend>
      <br/>
      <input type="button" value="Personal " className="bn f6 dim  white bg-purple" onClick={()=>this.personalA()}/>
      <input type="button" value="Company  " className="bn f6 dim  white bg-green" onClick={()=>this.companyA()}/>
      {

     this.state.company===true ?

      <div class="mt3">
        <label class="db fw6 lh-copy f6" for="email-address">Enter Company name</label>
        <input onChange ={this.onNameChange} class="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="name"  id="email-address"/>
      </div>

      :

       <div class="mt3">
        <label class="db fw6 lh-copy f6" for="email-address">Enter Full Name</label>
        <input onChange ={this.onNameChange} class="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="name"  id="email-address"/>
      </div>
    
      }

       <div class="mt3">
        <label class="db fw6 lh-copy f6" for="email-address">Display Name</label>
        <input onChange ={this.onDisplayNameChange} class="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="email-address"  id="email-address"/>
      </div>
      <div class="mv3">
        <label class="db fw6 lh-copy f6" for="password">Address</label>
        <input onChange ={this.onAddressChange} class="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="password"  id="password"/>
      </div>
      <div class="mv3">
        <label class="db fw6 lh-copy f6" for="password">Country</label>
        <input onChange ={this.onCountryChange} class="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="password"  id="password"/>
      </div>
      </fieldset>
      <div class="">
      <input onClick ={this.onSignInSubmit} class="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="button" value="Complete setup"/>
      </div>
   
  </form>
</main>
            </article>
	);


}
 

}


export default AccountSetup;