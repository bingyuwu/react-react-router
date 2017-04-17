import React,{Component} from 'react'
import {Link} from 'react-router'
export default class  NavBar extends Component{
    constructor(){
        super();
        this.state={
            linkData:[
                {name:"首页",path:"/"},
                {name:"分类",path:"/category"},
                {name:"购物车",path:"/"},
                {name:"个人中心",path:"/"}
            ]
        }
    }
    render(){
        const List=this.state.linkData.map((item,index)=>(
            <div key={index}>
                <Link to={item.path}>
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
