import React from 'react';
import './App.css';
import Tabledata from './components/tabledata';
import Form from './components/form';
import Tablehead from './components/table-head';
import Pagination from './components/pagination';
import { connect } from 'react-redux';

class App extends React.Component{
  dropdown =(event) =>{
    this.props.pageSize(parseInt(event.target.value),this.props.post.duplicate);
	}
  render(){
   return (
      <div className="text-center w-75 mx-auto mt-5">
        <div className="row">
         <div className="col-3 mt-5">
            <Form />
         </div>
         <div className="col-9 mt-5">
            <table className = "table table-bordered table-hover">
              <Tablehead />
             <tbody>
                <Tabledata />
              </tbody>
            </table>
            <ul className = "pagination justify-content-center">
              <Pagination />
            </ul>
            <form className="text-center">
							<select onChange={this.dropdown}>
								<option value="5">5</option>
								<option value="10">10</option>
								<option value="15">15</option>
							</select>
						</form>
          </div>
        </div>
      </div>
    );
  }
}

const mapStatetoProps = (state) =>{
  return{
      post : state
  }
}
const mapDispatchtoProps = (dispatch) => {
  return {
      pageSize : (data,newData) => {dispatch({type: "PAGE_SIZE", data: data,newData : newData})}
  }
}
export default connect(mapStatetoProps,mapDispatchtoProps)(App);
