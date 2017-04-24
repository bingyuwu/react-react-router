import React,{Component} from 'react'
import { connect } from 'react-redux'
import *as action from '../redux/action';
class App extends Component{
     constructor(props) {
        super(props);
    }
    render(){
        return(
            <div>{this.props.children}</div>
        )
    }
}

function mapDispatchToProps(dispatch) {
  return {
    testAction: () => dispatch(testAction())
  };
}
//export default App;

function mapStateToProps(state) {
    return{
          testData:state.getData
      }
}
export default connect(
 mapStateToProps,mapDispatchToProps
)(App)