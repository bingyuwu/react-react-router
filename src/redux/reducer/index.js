import {TEST_DISPATCH,GET_DATA_SUCCESS} from "../action"

//手动获取数据
export const requestData = (state = {}, action = {}) => {
    switch(action.type){
        case GET_DATA_SUCCESS:
            action.successCb(action.json);   
            state[action.name] = action.json;
            return state;
        default:
            return state;
    }
}

export const getData=(state={},action={})=>{
      switch(action.type){
        case TEST_DISPATCH:
            state['testData'] = action.data;
            return state;
        default:
            return state;
    }
}





