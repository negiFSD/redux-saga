import {configureStore} from '@reduxjs/toolkit'
import { rootreducer } from './rootReducer'
import watcherSaga from './productSaga'
import createSagaMiddleware from 'redux-saga'

// import productSaga from './productSaga'


const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
    reducer: rootreducer,
    // middleware: (getDefaultMiddleware)=>getDefaultMiddleware().concat(sagaMiddleware)
    middleware:()=>[sagaMiddleware]
})
sagaMiddleware.run(watcherSaga)
 export default store

