import React from 'react';
import { connect } from 'react-redux';

class Tablehead extends React.Component{
    
    sortBynum(key){
        this.props.keyItem(key);
        if(key !== this.props.post.key){
			this.props.direction("asc");
			this.props.allclass();
		}
        switch (key) {
			case "name":
				this.props.icon("nameClass",true)
				break;
			case "english":
				this.props.icon("englishClass",true)
				break;
			case "tamil":
				this.props.icon("tamClass",true)
				break;
			case "maths":
				this.props.icon("mathClass",true)
				break;
			case "science":
				this.props.icon("sciClass",true)
				break;
			case "social":
				this.props.icon("socClass", true)
				break;
			case "total":
				this.props.icon("totalClass",true)
				break;
			case "rank":
				this.props.icon("rankClass",true)
				break;	
		}
		this.sorting(key);
    }

    sorting(key){
		let newArray;
        newArray = [...this.props.post.duplicate];
        console.log(this.props.post.direction)
		if(this.props.post.direction === "asc"){
			if(key === "name"){
				newArray.sort((a,b) => a.name.localeCompare(b.name));
			}else{
				newArray.sort((a,b) => a[key] - b[key]);
            }
            this.props.sort(newArray,true,false)
            this.props.direction("dsc");
            this.props.sortOn(true);
		}else if(this.props.post.direction === "dsc"){
			if(key === "name"){
				newArray.sort((a,b) => b.name.localeCompare(a.name));
			}else{
				newArray.sort((a,b) => b[key] - a[key]);
            }
            this.props.sort(newArray,false,true)
            this.props.direction("");
		}else{
            this.props.sort(this.props.post.duplicate2,false,false)
            this.props.direction("asc");
            this.props.sortOn(true);
		}	
	}

    render(){
        let nameClass,engClass,tamClass,mathClass,sciClass,socClass,totalClass,rankClass;
        let icon = (this.props.post.className1 === true) ? "fa fa-caret-down": (this.props.post.className2 === true) ? "fa fa-caret-up" : "";
        if(this.props.post.nameClass === true){
            nameClass = icon; 
		}else if(this.props.post.englishClass === true){
			engClass = icon;
		}else if(this.props.post.tamClass === true){
			tamClass = icon;
		}else if(this.props.post.mathClass === true){
			mathClass = icon;
		}else if(this.props.post.sciClass === true){
			sciClass = icon;
		}else if(this.props.post.socClass === true){
			socClass = icon;
		}else if(this.props.post.totalClass === true){
			totalClass = icon;
		}else if(this.props.post.rankClass === true){
			rankClass = icon;
		} 
        return(
        <thead style={{textAlign:"center"}}>
			<tr style ={{backgroundColor:"black",color:"white"}}>
                <th style={{width:"120px",padding:"12px 0px"}}><a onClick={this.sortBynum.bind(this,'name')} style={{padding:"12px 30px"}} href="#" 
                    className="w-100 text-decoration-none text-white" >Name<i className={nameClass} style={{marginLeft:"5px"}}></i></a></th>
                <th style={{width:"80px",padding:"12px 0px"}}><a onClick={this.sortBynum.bind(this,'english')} style={{padding:"12px 10x"}} href="#" 
                    className="w-100 text-decoration-none text-white">English<i className={engClass} style={{marginLeft:"5px"}}></i></a></th>
                <th style={{width:"76px",padding:"12px 0px"}}><a onClick={this.sortBynum.bind(this,'tamil')} style={{padding:"12px 10px"}} href="#" 
                    className="w-100 text-decoration-none text-white">Tamil<i className={tamClass} style={{marginLeft:"5px"}}></i></a></th>
                <th style={{width:"83px",padding:"12px 0px"}}><a onClick={this.sortBynum.bind(this,'maths')} style={{padding:"12px 10px"}} href="#" 
                    className="w-100 text-decoration-none text-white">Maths<i className={mathClass} style={{marginLeft:"5px"}} ></i></a></th>
                <th style={{width:"92px",padding:"12px 0px"}}><a onClick={this.sortBynum.bind(this,'science')} style={{padding:"12px 10px"}} href="#" 
                    className="w-100 text-decoration-none text-white">Science<i className={sciClass} style={{marginLeft:"5px"}}></i></a></th>
                <th style={{width:"80px",padding:"12px 0px"}}><a onClick={this.sortBynum.bind(this,'social')} style={{padding:"12px 10px"}} href="#" 
                    className="w-100 text-decoration-none text-white">Social<i className={socClass} style={{marginLeft:"5px"}}></i></a></th>
                <th style={{width:"76px",padding:"12px 0px"}}><a onClick={this.sortBynum.bind(this,'total')} style={{padding:"12px 10px"}} href="#" 
                    className="w-100 text-decoration-none text-white">Total<i className={totalClass} style={{marginLeft:"5px"}}></i></a></th>
                <th style={{width:"73px",padding:"12px 0px"}}><a onClick={this.sortBynum.bind(this,'rank')} style={{padding:"12px 10px"}} href="#" 
                    className="w-100 text-decoration-none text-white">Rank<i className={rankClass} style={{marginLeft:"5px"}}></i></a></th>
				<th>Action</th>
			</tr>
		</thead>
        )
    }    
}

const mapStatetoProps = (state) =>{
    return{
        post : state
    }
  }
  const mapDispatchtoProps = (dispatch) => {
    return {
        direction : (data) => {dispatch({type: "SORT_DIRECTION", data: data})},
        sort : (data,class1,class2) => {dispatch({type: "SORTING", data: data,className1: class1 ,className2: class2})},
        icon : (data) => {dispatch({type: "ICON", data: data})},
        allclass : () => {dispatch({type: "ALL_CLASS"})},
        keyItem : (data) => {dispatch({type: "KEY",data: data})},
        sortOn : (data) => {dispatch({type: "SORT_ON",data: data})}
    }
  }

export default connect(mapStatetoProps,mapDispatchtoProps)(Tablehead)
