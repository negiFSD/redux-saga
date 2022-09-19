import { GET_DATA, SET_DATA } from "./type";

export const getData=()=>{
 return{
    type:GET_DATA
 }
};

export const setData =(payload)=>{
    return{
        type: SET_DATA,
        data:payload
    }
}
 
