import React,{Component} from 'react'
import { Router,Route,Redirect,IndexRoute,browserHistory,hashHistory} from 'react-router'


class Roots extends Component{
    render(){
        return(
            <div>{this.props.children}</div>
        )
    }
}
import Index from "../views/index"
const Category=(location,cb)=>{
   require.ensure([],(require)=>{
       cb(null,require('../views/category').default)
   },'Category')
}
export default(
    <Router history={browserHistory}>
        <Route path="/" component={Roots} >
          <IndexRoute  component={Index}/>
          <Route path="category" getComponent={Category}/>
        </Route>

    </Router>
)