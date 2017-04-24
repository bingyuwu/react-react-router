import React,{Component} from 'react'
import NavBar from 'components/navBar'
import Swipe from 'components/swipe'
import ProductList from 'components/productList'
import { paging} from '../scripts/untils'
import { connect } from 'react-redux'
import *as action from '../redux/action';
 class Index extends Component{
        constructor(props){
            super(props);
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
            const { dispatch } = this.props
            dispatch(action.testAction({data:"20"}))
            const url="http://www.qijianh.com/coreApi/api/danpin_tuijian.htm"
            dispatch(action.getData(url,{start:0,limit:10,action:0},(res)=>{
                this.setState({productData: res.data,total:res.total})
            },"indexProduct"))
            // const url="http://www.qijianh.com/coreApi/api/danpin_tuijian.htm?start=0&limit=10&action=0"
            // fetch(url).then( response => response.json())
            // .then(json =>{
            //     console.log(json)
            //     this.setState({productData: json.data,total:json.total})
            // });
        }
        load(){
            const {productData}=this.state
            const { dispatch } = this.props
            const url="http://www.qijianh.com/coreApi/api/danpin_tuijian.htm"
            this.setState({loading: false})
            dispatch(action.getData(url,{start:productData.length,limit:10,action:0},(res)=>{
                 this.setState({productData:[...productData,...res.data]})
                 this.setState({loading: true}) 
            },"indexProduct"))

            // fetch("http://www.qijianh.com/coreApi/api/danpin_tuijian.htm?limit=10&action=0&start="+productData.length)
            //    .then(response => response.json())
            //    .then(json =>{
            //      this.setState({productData:[...productData,...json.data]})
            //      this.setState({loading: true})
            //      console.log("加载数据。。。")
            //      console.log(this.state.loading)
            //    });
        }
        render(){
            const {swipeData,categoryData,productData,total,loading}=this.state
            //const { testData } = this.props
           // console.log(testData)
           if(productData.length<total){
                paging(this.refs.container,this.load.bind(this),loading)
           }
            return(
                <div>
                    <header className="header" >
                        <input placeholder="搜素店铺内的宝贝"/>
                    </header>
                    <div className="clear marginTop marginBottom">
                        <Swipe swipeData={swipeData}></Swipe>
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
                        
                        <div className="clear" ref="container">
                            <h2 style={{height:'0.8rem',lineHeight:'0.8rem',textAlign:'center',fondSize:'0.28rem'}}>单品推荐</h2>
                            <ProductList proData={productData} > </ProductList>      
                        </div>
                    </div>
                    <NavBar></NavBar>
                </div>
            )
        }
}

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
)(Index)

//export default Index;