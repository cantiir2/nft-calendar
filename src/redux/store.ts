import { configureStore, applyMiddleware } from '@reduxjs/toolkit'
import {eventReducer} from "./reducers/event";
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import {contactReducer} from "./reducers/contact";

const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware))

export const store = configureStore({
    reducer: {
        //@ts-ignore
        event: eventReducer,
        //@ts-ignore
        contact: contactReducer
    }, composedEnhancer
})

