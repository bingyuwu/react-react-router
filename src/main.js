import React from 'react';
import ReactDOM ,{render} from 'react-dom';
import router from "./router"
import "./styles/common"
import './styles/navBar'

render(router,document.getElementById("app"))