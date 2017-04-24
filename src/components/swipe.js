import React,{Component} from 'react'
import ReactSwipe from 'react-swipe';
export default class Swipe extends Component{
    render(){
        return(
             <ReactSwipe  className={this.props.className} swipeOptions={{continuous: true,auto:2000,stopPropagation:false,pagination:'.react-swipe-container'}}>
                {
                    this.props.swipeData.map((item,index)=>(
                        <div key={index}>
                            <img src={item.imgPath}/>
                        </div>
                    ))
                }
             </ReactSwipe>
            )
    }
}