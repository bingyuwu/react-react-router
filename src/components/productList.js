import React,{Component} from 'react'
import {Link} from 'react-router'

// export default function ProductList(props){
//         return(
//             <ul className="product_list">
//                 <li>
//                 <Link to="">
//                     <div className="product_img">
//                         <img  src="" />
//                     </div>
//                     <p className="product_title">alsdjfa</p>
//                     <div className="product_span">
//                         <span className="price">￥20</span>
//                     </div>
//                 </Link>
//                 </li>
//             </ul>
//         )
// }
export default class ProductList extends Component{

    render(){
        return(
            <ul className="product_list">
                {
                    this.props.proData.map((item,index)=>(
                    <li key={index}>
                        <Link to="/commmodityDetails">
                            <div className="product_img">
                                <img  src={item.proimg} />
                            </div>
                            <p className="product_title">{item.proname}</p>
                            <div className="product_span">
                                <span className="price">￥{item.pronewprice}</span>
                            </div>
                        </Link>
                    </li>
                    ))
                }

            </ul>
        )
    }
}