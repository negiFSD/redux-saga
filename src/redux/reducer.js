import { FETCH_ERROR, SET_DATA } from "./type";

const inititalState  ={
    data: [],
    error:'sdfs'
   
}

  const productReducer = (state=inititalState, action)=>{
    switch (action.type) {
        case SET_DATA:
            console.log(action)
            return {
              ...state,data:[action.data]
            }
        case FETCH_ERROR:
            return{
                ...state
            }
    
        default:
            return state
    }
}
export default productReducer
