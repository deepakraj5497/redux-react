import React from 'react';
import {connect} from 'react-redux';

class Tabledata extends React.Component{
    delete (key){
		this.props.deleteItem(this.props.post.duplicate[this.props.post.currentPage + key].id);
	}
	getdata(index){
		let name = this.props.post.post[index].name;
		let english = this.props.post.post[index].english;
		let tamil = this.props.post.post[index].tamil;
		let maths = this.props.post.post[index].maths;
		let science = this.props.post.post[index].science;
		let social = this.props.post.post[index].social;
		let id = this.props.post.post[index].id;
		let i = this.props.post.currentPage + index; 
		let data = {name,english,tamil,maths,science,social,id,i};
		this.props.getItem(data);
	}
	componentDidMount(){
		this.totalRank();
	}
	totalRank =() =>{
		let rankIndex;		
		let rankArr = "",unorder,total,ordered;
		this.props.post.post.map((n,i) => {
			const {english,tamil,maths,science,social} = n;
			total = english+tamil+maths+science+social;
			rankArr = rankArr + total + ",";
			unorder = rankArr.split(",").map(Number);
			unorder.pop();
			ordered = unorder.slice().sort(function(a,b){return b - a});
		});
		let p;
		rankIndex = "";
		let rank="",rankAll;
		for(p =0 ; p < ordered.length; p++){
			let data = unorder[p];
			ordered.forEach(function(item){ 
				if(item === data){
					rankIndex = ordered.indexOf(data) + 1;
				}
			}); 
			rank = rank + rankIndex + ",";
			rankAll = rank.split(",").map(Number);
			rankAll.pop();
		}
		this.props.totalrank(unorder,rankAll)
	}
	render(){
		let data;
		if(this.props.post.duplicate !== ""){
			data = this.props.post.duplicate;
		}else{
			data = this.props.post.post;
		}
		return this.props.post.post.map((n,i) => {
		const {name,english,tamil,maths,science,social} = n;
		let total = english+tamil+maths+science+social;
		return (
			<tr key={i} className="allRows">
           		<td>{name}</td>
          		<td>{english}</td>
           		<td>{tamil}</td>
           		<td>{maths}</td>
				<td>{science}</td>
				<td>{social}</td>
				<td className="total">{total}</td>
				<Rank total={total} post={data}/>
				<td>
					<button className="btn btn-info mr-3 py-0" onClick ={this.getdata.bind(this,i)}>edit</button>
					<button className="btn btn-danger py-0" onClick={this.delete.bind(this,i)}>del</button>
				</td>
           	</tr>
			)			
		})
	}
}

class Rank extends React.Component{
	render(){
    	var rankIndex;		
		var rankArr = "",unorder,total,ordered;
    	this.props.post.map((n,i) => {
        	const {english,tamil,maths,science,social} = n;
        	total = english+tamil+maths+science+social;
        	rankArr = rankArr + total + ",";
        	unorder = rankArr.split(",").map(Number);
        	unorder.pop();
        	ordered = unorder.slice().sort(function(a,b){return b - a});
    	});
    	let p;
    	rankIndex = "";
    	for(p =0 ; p < ordered.length; p++){
        	var data = unorder[p];
        	if(this.props.total === data){
            	rankIndex = ordered.indexOf(data) + 1;
        	}
   		 }
	return <td>{rankIndex}</td>;	
	}	
}

const mapStatetoProps = (state) =>{
    return{
        post : state
    }
}

const mapDispatchtoProps = (dispatch) => {
    return{
		deleteItem : (id) => {dispatch({type: "DELETE_POST", id: id})},
		getItem : (data) => {dispatch({type: "UPDATE_POST", data : data})},
		totalrank : (total,rank) => {dispatch({type: "TOTAL_RANK", total : total,rank : rank})}
    }
}

export default connect(mapStatetoProps,mapDispatchtoProps)(Tabledata)