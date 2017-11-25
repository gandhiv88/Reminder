import React from "react";
import {render} from "react-dom";

import {connect} from "react-redux";

class Sample extends React.Component {

render(){
    return(
      <div>
        <button type="submit" onClick={() => this.props.onButtonClick()}>Click me</button>
        <div>{this.props.initState}</div>
      </div>
    );
}

}

const mapStateToProp = (state) =>{
  return {
    initState : state.createReducer.name
  }
};

const mapDispatchtoProp = (dispatch) => {
  return{
    onButtonClick : () => {
      console.log("On Button Click");
      dispatch({
        type:"CREATE",
        payload:"User"
      });
    }
  }
};


export default connect(mapStateToProp,mapDispatchtoProp)(Sample);
