import React,{Component} from 'react'
import {Link} from 'react-router'
export default class  NavBar extends Component{
    constructor(){
        super();
        this.state={
            linkData:[
                {name:"首页",path:"/"},
                {name:"分类",path:"/category"},
                {name:"购物车",path:"/shopCart"},
                {name:"个人中心",path:"/userCenter"}
            ]
        }
    }
    render(){
        const List=this.state.linkData.map((item,index)=>(
            <div key={index}>
                <Link to={item.path} activeClassName="active" onlyActiveOnIndex>
                    <span></span>
                    <p>{item.name}</p>
                </Link>
            </div>
        ))
        return(
            <nav className="nav">
                {List}
            </nav>
        )
    }
}
