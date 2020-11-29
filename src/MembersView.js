import React from "react"
import TableView3 from "./TableView3"
import TextInput from "./TextInput"


class MembersView extends React.Component{


constructor({props})
{

super(props)

this.state={

 mData:[],
 input:''

 }

}

componentDidMount()
{

fetch(`http://localhost:3001/getMembers/${this.props.id}`).then(response=>{

return response.json()

}).then(members=>{

this.setState({mData:members})


})

}


onInputChange=(event)=>{


	this.setState({input:event.target.value})

	fetch('http://localhost:3001/getMemberByDescription', {

	method:"post",
	headers:{'Content-Type':'application/json'},
	body:JSON.stringify({
	   
	   input:event.target.value,
	   userId:this.props.id

	    })
	  }).then(response=>{
	    return response.json()
	  })
	  .then(data=>{

	  	console.log(data)
		this.setState({mData:data})
	  })

}


render(){

	        const filter=this.state.mData.filter(records=>{

			    return  records.name.toLowerCase().includes(this.state.input.toLowerCase()) 
			     || records.surname.toLowerCase().includes(this.state.input.toLowerCase()) 
			     || records.email.toLowerCase().includes(this.state.input.toLowerCase()) 
			     || records.location.toLowerCase().includes(this.state.input.toLowerCase()) 
			 
		     })

       


return(

	<div className="tc ">

	 <TextInput  onStateChange={this.onInputChange}/>
     <TableView3 rows={ this.state.mData} />

{
	//<SpeedDial/>
}

	</div>

	)

}


}

export default MembersView;