
import {toParams} from "src/scripts/untils"

export const GET_DATA_SUCCESS='GET_DATA_SUCCESS'
export const TEST_DISPATCH='TEST_DISPATCH'

//
export const getData=(url,params,successCb,name)=>{
        return dispatch=>{
            return fetch(url+toParams(params))
            .then(response => response.json())
            .then((json)=>{
                 dispatch(
                     { type:GET_DATA_SUCCESS,json, successCb,name}
                    )
            })
        }      
}


//记录单个商品列表状态
export const testAction = (data) => {
    return{
        type:TEST_DISPATCH,
        data,
    }
}