import React from "react";
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
  class About extends React.Component {
    render(){
    return <h2>{this.props.name}</h2>;
    }
    
  }
  
const mapStateToProps = (state) => {
    return{
        name                : state.AppReducer.name, 
    };
};

// const mapDispatchToProps = (dispatch) => {
//     return {
//         actions: bindActionCreators(CRAnalysisActions, dispatch)
//     };
// };
export default connect(
    mapStateToProps,
    null
)(About) 