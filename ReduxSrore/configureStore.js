import {configureStore,getDefaultMiddleware, applyMiddleware} from "@reduxjs/toolkit"
import reducer from "./Reduer"
import {apiMiddleware} from "./middleware/apiMiddleware"



const store =configureStore({

    reducer,
    middleware:[
    ...getDefaultMiddleware(),
    apiMiddleware
     ]}
    );


export default store;