import React from 'react';
import {connect} from 'react-redux';

class Form extends React.Component{
	handleChange (e){
		let name = e.target.name;
		let value = e.target.value;
		if(name === "english" ||name === "tamil" || name === "maths" || name === "science" ||name === "social"){
			if(value > 100){
				return
			}else if(value < 100){
				value=e.target.value.substr(0, 3);
			}else{
				value = e.target.value.replace(/[^0-9\.]/g,'');
			}
		}
		if(name !== ""){
			if(name === "name"){
				this.props.errorclass("nameCheck","form-control")
			}else if(name === "english"){
				this.props.errorclass("englishCheck","form-control")
			}else if(name === "tamil"){
				this.props.errorclass("tamilCheck","form-control")
			}else if(name === "maths"){
				this.props.errorclass("mathsCheck","form-control")
			}else if(name === "science"){
				this.props.errorclass("scienceCheck","form-control")
			}else if(name === "social"){
				this.props.errorclass("socialCheck","form-control")
			}
		}
		this.props.inputChange(name,value);
	}
	handleClick(){
		let id = this.props.post.duplicate.length + 1;
		const newData = {name: this.props.post.name,english: parseInt(this.props.post.english),tamil: parseInt(this.props.post.tamil),
			maths: parseInt(this.props.post.maths),science: parseInt(this.props.post.science),social: parseInt(this.props.post.social),id:id}
			if(this.props.post.name === "" || this.props.post.english === "" || this.props.post.tamil === "" 
			||this.props.post.maths === "" || this.props.post.science === "" || this.props.post.social === ""){
			if(this.props.post.name === ""){
				this.props.errorclass("nameCheck","form-control error")
				
			}else if(this.props.post.english === ""){
				this.props.errorclass("englishCheck","form-control error")
				
			}else if(this.props.post.tamil === ""){
				this.props.errorclass("tamilCheck","form-control error")
				
			}else if(this.props.post.maths === ""){
				this.props.errorclass("mathsCheck","form-control error")
				
			}else if(this.props.post.science === ""){
				this.props.errorclass("scienceCheck","form-control error")
				
			}else if(this.props.post.social === ""){
				this.props.errorclass("socialCheck","form-control error")
				
			}	
			return	
		}else{
			this.setState({nameCheck : "form-control",tamilCheck : "form-control",englishCheck : "form-control",
			mathsCheck : "form-control",scienceCheck : "form-control",socialCheck : "form-control"})
		}
		const data = this.props.post.duplicate.concat(newData)
		this.props.addData(data,newData);
		this.props.success("Added Successfully")
	}
	handleUpdate(){
		const data = {name: this.props.post.name,english: parseInt(this.props.post.english),tamil: parseInt(this.props.post.tamil),
			maths: parseInt(this.props.post.maths),science: parseInt(this.props.post.science),social: parseInt(this.props.post.social),
			id:this.props.post.id}
		if(this.props.post.name === "" || this.props.post.english === "" || this.props.post.tamil === "" 
			||this.props.post.maths === "" || this.props.post.science === "" || this.props.post.social === ""){
			if(this.props.post.name === ""){
				this.props.errorclass("nameCheck","form-control error")
				
			}else if(this.props.post.english === ""){
				this.props.errorclass("englishCheck","form-control error")
				
			}else if(this.props.post.tamil === ""){
				this.props.errorclass("tamilCheck","form-control error")
				
			}else if(this.props.post.maths === ""){
				this.props.errorclass("mathsCheck","form-control error")
				
			}else if(this.props.post.science === ""){
				this.props.errorclass("scienceCheck","form-control error")
				
			}else if(this.props.post.social === ""){
				this.props.errorclass("socialCheck","form-control error")
				
			}	
			return	
		}else{
			this.setState({nameCheck : "form-control",tamilCheck : "form-control",englishCheck : "form-control",
			mathsCheck : "form-control",scienceCheck : "form-control",socialCheck : "form-control"})
		}
		this.props.updateData(data);
		this.props.success("Updated Successfully")
	}
	change = (event) => {
		let name = event.target.name;
		let value = event.target.value;
		if(name === "english" ||name === "tamil" || name === "maths" || name === "science" ||name === "social"){
			if(value > 100){
				return
			}else if(value < 100){
				value=event.target.value.substr(0, 3);
			}else{
				value = event.target.value.replace(/[^0-9\.]/g,'');
			}
		}
		if(name !== ""){
			if(name === "name"){
				this.props.errorclass("nameCheck","form-control")
			}else if(name === "english"){
				this.props.errorclass("englishCheck","form-control")
			}else if(name === "tamil"){
				this.props.errorclass("tamilCheck","form-control")
			}else if(name === "maths"){
				this.props.errorclass("mathsCheck","form-control")
			}else if(name === "science"){
				this.props.errorclass("scienceCheck","form-control")
			}else if(name === "social"){
				this.props.errorclass("socialCheck","form-control")
			}
		}
	
	}
	render(){
		let button;
		if(this.props.post.add === true){
			button = <button className="btn btn-info" onClick={this.handleClick.bind(this)}>Add Member</button>
		}else if(this.props.post.add === false){
			button = <button className="btn btn-info" onClick={this.handleUpdate.bind(this)}>update Member</button>
		}
		return(
			<div>
				<p className="text-success font-weight-bold">{this.props.post.success}</p>
				<div className="form-group">
					<label className="font-weight-bold">Name:</label><br></br>
					<input type="text" name="name" value={this.props.post.name} onChange={this.handleChange.bind(this)}
						className={this.props.post.nameCheck}></input><br></br>
				</div>
				<div className="form-group">
					<label className="font-weight-bold">English:</label><br></br>
					<input type="text" name="english" value={this.props.post.english} onChange={this.handleChange.bind(this)}
						className={this.props.post.englishCheck}></input><br></br>
				</div>
				<div className="form-group">
					<label className="font-weight-bold">Tamil:</label><br></br>
					<input type="text" name="tamil" value={this.props.post.tamil} onChange={this.handleChange.bind(this)}
						className={this.props.post.tamilCheck}></input><br></br>
				</div>
				<div className="form-group">
					<label className="font-weight-bold">Maths:</label><br></br>
					<input type="text" name="maths" value={this.props.post.maths} onChange={this.handleChange.bind(this)}
						className={this.props.post.mathsCheck}></input><br></br>
				</div>
				<div className="form-group">
					<label className="font-weight-bold">Science:</label><br></br>
					<input type="text" name="science" value={this.props.post.science} onChange={this.handleChange.bind(this)}
						className={this.props.post.scienceCheck}></input><br></br>
				</div>
				<div className="form-group">
					<label className="font-weight-bold">Social:</label><br></br>
					<input type="text" name="social" value={this.props.post.social} onChange={this.handleChange.bind(this)}
						className={this.props.post.socialCheck}></input><br></br>
				</div>
				{button}
			</div>
		)
	}
}

const mapStatetoProps = (state) =>{
    return{
        post : state
    }
}
const mapDispatchtoProps = (dispatch) => {
    return{
		inputChange : (name,value) => {dispatch({type: "INPUT_CHANGE",name:name, value: value})},
		addData : (data,newData) => {dispatch({type: "ADD_DATA",data:data,newData : newData})},
		updateData : (data) => {dispatch({type: "UPDATE_DATA",data:data})},
		errorclass : (name,data) => {dispatch({type: "ERROR",name : name,data:data})},
		success : (data) => {dispatch({type: "SUCCESS",data:data})}
    }
}

export default connect(mapStatetoProps,mapDispatchtoProps)(Form)