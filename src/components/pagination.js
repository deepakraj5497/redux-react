import React from 'react';
import { connect } from 'react-redux';

class Pagination extends React.Component{
    show = (j) =>{
		let a;
		let i = 0;
        a = [...this.props.post.post].splice(0,this.props.post.pageSize);
        if(j){
            let startIndex = parseInt(j);
            a = [...this.props.post.duplicate].splice(startIndex,this.props.post.pageSize);
        }
        this.props.showItem(a);
    }
    duplicate = () => {
        this.props.duplicateItem(this.props.post.post)
    }
    componentDidMount(){
        this.duplicate();
        this.show();
    }
    componentDidUpdate(prevProps){
        if(this.props.post.post.length !== prevProps.post.post.length){
            this.show(this.props.post.currentPage);
        }else if(this.props.post.pageSize !== prevProps.post.pageSize){
            this.show(this.props.post.currentPage);
        }
    }
    current = (i) => {
        this.props.currentPage(parseInt(i));
        this.show(i);
    }
    active(index){
        this.props.activePage(index);
    }
	render(){
		let pagecount = "";
		let active;
        pagecount = Math.ceil(this.props.post.duplicate.length/this.props.post.pageSize);
		let number = [];
		let a = 0;
		for(var i = 0; i < pagecount; i++){
            if(this.props.post.active === i){
				active = "page-item active"
			}else if(this.props.post.active !== i){
				active = "page-item"
			}
            number.push(<li className = {active} key={1+i} onClick = {this.active.bind(this,i)}><a href='#' id={a} 
                onClick={e => {this.current(e.target.id)}} className = "page-link"> {1 + i}</a></li>);
			a = a +this.props.post.pageSize;
		}
		return number;
	}
}

const mapStatetoProps = (state) =>{
    return{
        post : state
    }
}

const mapDispatchtoProps = (dispatch) => {
    return {
        showItem : (data) => {dispatch({type: "SHOW_POST", data: data})},
        duplicateItem : (data) => {dispatch({type: "DUPLICATE_POST", data: data})},
        currentPage : (data) => {dispatch({type: "CURRENT_PAGE", data: data})},
        activePage : (data) => {dispatch({type: "ACTIVE_PAGE", data: data})}
    }
}
export default connect(mapStatetoProps,mapDispatchtoProps)(Pagination)