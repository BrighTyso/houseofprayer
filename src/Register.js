import React from 'react';
import "./App.css";


class Register extends React.Component {


constructor(props)
{
  super(props)
  this.state={

signInEmail:"",
signInPassword:"",
signInPhoneNumber:"",
signInUserName:"",
company:false
  }
}






onSignInEmailChange=(event)=>{

this.setState({signInEmail:event.target.value})

}


onSignInPasswordChange=(event)=>{

this.setState({signInPassword:event.target.value})

}

onPhoneNumberChange=(event)=>{

this.setState({signInPhoneNumber:event.target.value})

}

onUserNameChange=(event)=>{

this.setState({signInUserName:event.target.value})

}

onSignInSubmit=()=>{

console.log(this.state)

fetch("http://localhost:3001/Register",{
	method:'post',
	headers:{'Content-Type':'application/json'},
	body:JSON.stringify({

		email:this.state.signInEmail,
		password:this.state.signInPassword,
		phoneNumber:this.state.signInPhoneNumber,
    displayName:this.state.signInUserName

	})

}).then(response=>{return response.json()})
  .then(data=>{

      this.props.onUserLoggedIn(data)
      this.props.onRouteChange("financeView")   
    
     

  })

}

backToSignIn=()=>{

  this.props.onRouteChange("startpage")
}

 accountType=()=>{
this.setState({company:true})

}

render()
{

	const {onRouteChange} =this.props;
 return (

            <article class="br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 dib bw2 tc center">
			 <main class="pa4 black-80">
  <form class="measure center" >
    <fieldset id="sign_up" class="ba b--transparent ph0 mh0">
      <legend class="f4 fw6 ph0 mh0">Register</legend>
       


 <div class="mt3">
        <label class="db fw6 lh-copy f6" for="email-address">Email</label>
        <input onChange ={this.onSignInEmailChange} class="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="email-address"  id="email-address"/>
      </div>

     <div class="mv3">
        <label class="db fw6 lh-copy f6" for="password">Phone Number</label>
        <input onChange ={this.onPhoneNumberChange} class="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="number" name="password"  id="phone"/>
      </div>



      <div class="mv3">
        <label class="db fw6 lh-copy f6" for="password">Display Name</label>
        <input onChange ={this.onUserNameChange} class="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="password"  id="displayName"/>
      </div>


      <div class="mv3">
        <label class="db fw6 lh-copy f6" for="password">Password</label>
        <input onChange ={this.onSignInPasswordChange} class="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password"/>
      </div>



    </fieldset>
    <div class="">
      <input onClick ={this.onSignInSubmit} class="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="button" value="Register"/>
    </div>
    <div class="lh-copy mt3">
      <a onClick={this.backToSignIn} href="#0" class="f6 link dim blue db">already have an account?</a>
      
    </div>
  </form>
</main>
            </article>
	);


}
 


}

export default Register;