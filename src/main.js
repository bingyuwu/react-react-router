import React from 'react';
import ReactDOM ,{render} from 'react-dom';
import route from "./router"
import store from './redux/store'
import {Provider} from 'react-redux'
import "./styles/common"
import './styles/navBar'
import './styles/commodityDetails'
import './styles/shopCart'



// store.subscribe(() => { //监听state变化
//     //console.log(store.getState())
// });

render(
      <Provider store={store}><div> {route} </div></Provider>,
     //route,
        document.getElementById("app")
    )