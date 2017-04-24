import React,{Component} from 'react'
import { Router,Route,Redirect,IndexRoute,browserHistory,hashHistory} from 'react-router'

import Index from "../views/index"
import App from "../views/app"

const Category=(location,cb)=>{
   require.ensure([],(require)=>{
       cb(null,require('../views/category').default)
   },'Category')
}


const CommodityDetail=(location,cb)=>{
   require.ensure([],(require)=>{
       cb(null,require('../views/commodityDetails').default)
   },'CommodityDetail')
}


const UserCenter=(location,cb)=>{
   require.ensure([],(require)=>{
       cb(null,require('../views/userCenter').default)
   },'UserCenter')
}


const ShopCart=(location,cb)=>{
   require.ensure([],(require)=>{
       cb(null,require('../views/shopCart').default)
   },'ShopCart')
}

export default(
    <Router history={browserHistory}>
        <Route path="/" component={App} >
          <IndexRoute  component={Index}/>
          <Route path="category" getComponent={Category}/>
          <Route path="commmodityDetails/:shop_id" getComponent={CommodityDetail}/>
          <Route path="shopCart" getComponent={ShopCart}/>
          <Route path="userCenter" getComponent={UserCenter}/>
          <Redirect from='*' to='/'  />
        </Route>
    </Router>
)
