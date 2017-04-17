import React,{Component} from 'react'
import ReactSwipe from 'react-swipe';
export default class Swipe extends Component{
    render(){
        return(
             <ReactSwipe  className={this.props.className} swipeOptions={{continuous: false,auto:3000,stopPropagation:false,pagination:'carousel'}}>
                {this.props.imageData}
             </ReactSwipe>
            )
    }
}