import React,{Component} from 'react'
import NavBar from 'components/navBar'
import Swipe from 'components/swipe'
import ProductList from 'components/productList'
import {paging} from '../scripts/untils'
export default class Index extends Component{
        constructor(){
            super();
            this.state={
                 swipeData:[
                    {
                        imgPath:"http://www.qijianh.com/coreApi/upload/system/slide/01.jpg"
                    },
                    {
                        imgPath:"http://www.qijianh.com/coreApi/upload/system/slide/02.jpg"
                    },
                    {
                        imgPath:"http://www.qijianh.com/coreApi/upload/system/slide/03.jpg"
                    }
                 ],
                 categoryData:[
                      { name:"上新",img:require("../images/new.png")},
                      { name:"精选",img:require("../images/jing.png")},
                      { name:"热销",img:require("../images/hots.png")},
                      { name:"折扣",img:require("../images/diac.png")}
                 ],
                 productData:[],
                 loading:true,
                 total:0
            }
        }
        componentDidMount(){
            const url="http://www.qijianh.com/coreApi/api/danpin_tuijian.htm?start=0&limit=10&action=0"
            fetch(url).then(response => response.json())
            .then(json =>{
                this.setState({productData: json.data,total:json.total})
            });
        }
        load(){
            const {productData}=this.state
            this.setState({loading: false})
            fetch("http://www.qijianh.com/coreApi/api/danpin_tuijian.htm?limit=10&action=0&start="+productData.length)
               .then(response => response.json())
               .then(json =>{
                 this.setState({productData:[...productData,...json.data]})
                 this.setState({loading: true})
                 console.log("加载数据。。。")
                 console.log(this.state.loading)
               });
        }
        render(){
            const {swipeData,categoryData,productData,total,loading}=this.state
            const swipeImage=swipeData.map((item,index)=>(
                <div key={index}>
                    <img src={item.imgPath}/>
                </div>
                )
            )
           if(productData.length<total){
                paging(this.refs.container,this.load.bind(this),loading)
           }
            return(
                <div>
                    <header className="header" >
                        <input placeholder="搜素店铺内的宝贝"/>
                    </header>
                    <Swipe imageData={swipeImage} className="paddingTop"></Swipe>
                    <div className="square_category">
                        {
                            categoryData.map((item,index)=>{
                                return(
                                    <div key={index}>
                                        <span style={{backgroundImage:`url(${item.img})`}}></span>
                                        <p>{item.name}</p>
                                    </div>
                                    )
                            })
                        }
                    </div>
                    <div className="clear padingBottom" ref="container">
                        <h2 style={{height:'0.8rem',lineHeight:'0.8rem',textAlign:'center',fondSize:'0.28rem'}}>单品推荐</h2>
                        <ProductList proData={productData} />      
                    </div>
                    <NavBar></NavBar>
                </div>
            )
        }
}