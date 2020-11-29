import React from 'react';
import "./signin.css"


class Signin extends React.Component{

constructor(props)
{
  super(props)
  this.state={

signInEmail:"",
signInPassword:""

  }


}


onSignInEmailChange=(event)=>{

this.setState({signInEmail:event.target.value})

}


onSignInPasswordChange=(event)=>{
this.setState({signInPassword:event.target.value})
}


onSignInSubmit=()=>{

console.log(this.state)

fetch("http://localhost:3001/signin",{
	method:'post',
	headers:{'Content-Type':'application/json'},
	body:JSON.stringify({

		email:this.state.signInEmail,
		password:this.state.signInPassword
	})

}).then(response=>response.json())
.then(data=>{

	if (data==="failed") {

    console.log("failed")
	
	} else if(data==="not found"){

   console.log("not found")
     
  }else{

 this.props.onUserLoggedIn(data[0].id)
 this.props.onRouteChange("financeView")

  }
})


}

onRegisterClicked=()=>{

	this.props.onRouteChange("register")
}

render()
{
const {onRouteChange} =this.props;
	
return (


 <article class="br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 dib bw2 tc center">
	 <main class="pa4 black-80">
  
    <fieldset id="sign_up" class="ba b--transparent ph0 mh0">
      <legend class="f4 fw6 ph0 mh0">Sign In</legend>
      <div class="mt3">
        <label class="db fw6 lh-copy f6" for="email-address">Email</label>
        <input onChange ={this.onSignInEmailChange} class="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address"/>
      </div>
      <div class="mv3">
        <label class="db fw6 lh-copy f6" for="password">Password</label>
        <input onChange ={this.onSignInPasswordChange} class="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password"/>
      </div>
    </fieldset>
    <div class="">
      <input onClick ={this.onSignInSubmit} class="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="button" value="Sign in"/>
    </div>
    <div class="lh-copy mt3">
      <a onClick={this.onRegisterClicked}  href="#0" class="f6 link dim blue db">new user? sign up</a>
      <a href="#0" class="f6 link dim black db">Forgot your password?</a>
    </div>
 
</main>

</article>
	   );

}


}

export default Signin;