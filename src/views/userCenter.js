import React,{Component} from 'react';
import NavBar from 'components/navBar'
import { connect } from 'react-redux'
import *as action from '../redux/action';
 class UserCenter  extends Component{
    constructor(props){
        super(props);
        this.state={}
    }
    componentWillMount() {
	this.chkProps(this.props)
    }   

    componentWillReceiveProps(nextProps) {
        this.chkProps(nextProps)
        console.log(nextProps.params)
    }
    chkProps(props){
        console.log(props)
    }
    render(){
        return(
            <div>
               <header className="header">
                <h1>个人中心</h1>
               </header>
               <NavBar></NavBar>
               <div className="">
               </div>
            </div>
        )  
    }
}

//export default UserCenter;
function mapDispatchToProps(dispatch) {
  return {
    testAction: () => dispatch(testAction())
  };
}
function mapStateToProps(state) {
    return{
          testData:state.getData
      }
}
export default connect(
 mapStateToProps
)(UserCenter)