import React,{Component} from 'react';
import NavBar from 'components/navBar'
import {Link} from 'react-router'
import { connect } from 'react-redux'
import *as action from '../redux/action';
 class ShopCart  extends Component{
    constructor(props){
        super(props);
        this.state={
            
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
        return(
        <div style={{background:"#efefef"}}>
            <header className="header">
            <h1>购物车</h1>
            </header>
            <NavBar></NavBar>
            <div className="bar-second-footer">
                <div className="radio"></div>
                <span >全选</span>
                <div className="bar_right">
                    <div className="settlement">
                    <span>合计：<strong className="price_size">￥40</strong></span>
                    <button>结算 (2)</button>
                    </div>
                </div>
            </div>
           <div className="content clear marginTop marginBottomSecond">
             <div className="shop_item_box">
                    <div className="shop_item_title">
                        <div className="radio"></div>
                        <Link  to="">
                            <span>优子良品</span>
                        </Link>
                    </div>
                     <div className="shop_item_content">
                        <ul>
                            <li>
                                <div className="radio"></div>
                                <div className="shop_img">
                                <Link to="">
                                    <img src="src/images/new.png" alt="" />  
                                </Link>
                                </div>
                                <div className="shop_detail">
                                    <p className="singleOverflowHidden">优子良品2017春装新款蕾丝连衣裙</p>
                                    <div className="price_number">
                                        <span className="color_size">颜色:杏色 尺码:S</span>
                                        <p className="price_size">￥40</p>
                                    </div>
                                    <div className="change_edit">
                                        <div className="change_edit_left" >
                                            <span className="minus">-</span>
                                            <input type="number"  readOnly="readOnly" value="2" />
                                            <span className="plus">+</span>
                                        </div>
                                        <div className="change_edit_right">
                                            <span className="delete" ></span>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
               </div>   {/*shop_item_box end*/}

            </div>  {/*content end*/}
              
            </div>
        )  
    }
}

//export default ShopCart;
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
)(ShopCart)


