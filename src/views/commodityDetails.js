import React,{Component} from 'react';
import Swipe from 'components/swipe'
import { connect } from 'react-redux'
import *as action from '../redux/action';
 class CommodityDetail  extends Component{
    constructor(props){
        super(props);
        this.state={
                swipeData:[
                    {imgPath:"http://www.qijianh.com/cms/upload/store/31/2017/03/17/def2404d-7ec9-4d77-855f-828d26041a25.jpg"},
                    {imgPath:"http://www.qijianh.com/cms/upload/store/31/2017/03/17/9ac8b539-ecff-4e4e-81b9-a708c748afde.jpg"},
                    {imgPath:"http://www.qijianh.com/cms/upload/store/31/2017/03/17/def2404d-7ec9-4d77-855f-828d26041a25.jpg"},
                    {imgPath:"http://www.qijianh.com/cms/upload/store/31/2017/03/17/9ac8b539-ecff-4e4e-81b9-a708c748afde.jpg"}
                ]
        }
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
        const {swipeData}=this.state
        return(
            <div>
               <header className="header">
                <span className="back" onClick={()=>window.history.back()}></span>
                <h1>详情页</h1>
               </header>
               <div className="bar-footer" >
                    <span className="customerService item"></span>
                    <span className="collection item"></span>
                    <span className="shop item" ></span>
                    <span className="witem">加入购物车</span>
                    <span className="witem">立即购买</span>
                </div>
                <div className="clear marginTop marginBttom">
                    <Swipe swipeData={swipeData} className="cd_swipe"></Swipe>
                    <div className="shopDetail_info">
                        <h2>ALFAJING2017春秋时尚黑白撞色落肩收腰连衣裙</h2>
                        <div className="price_box">￥20</div>
                        <p className="fweight">免邮费</p>
                    </div>
                </div>
            </div>
        )  
    }
}
function mapDispatchToProps(dispatch) {
  return {
    testAction: () => dispatch(testAction())
  };
}
//export default CommodityDetail;
function mapStateToProps(state) {
    return{
          testData:state.getData
      }
}
export default connect(
 mapStateToProps
)(CommodityDetail)
