import {takeLatest, put, call} from 'redux-saga/effects'
import { setData } from './action'
import { GET_DATA} from './type'


function* handleData(){
  const usersFetch = async()=>{
    const res =await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    return data
}

  try{
    const data = yield call(usersFetch);
    yield put (setData(data))
  }
  catch(error){
      console.log(error)
  }
}

 function* watcherSaga(){
  yield takeLatest(GET_DATA, handleData)
}

export default watcherSaga
