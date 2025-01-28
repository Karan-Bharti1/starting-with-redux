import './style.css'
import { createStore } from 'redux'
import cookieReducer from './cookieReducer'

const store=createStore(cookieReducer)
store.subscribe(()=>console.log(store.getState()))

// store.dispatch({type:"cookies/added"})
// store.dispatch({type:"cookies/added"})
// store.dispatch({type:"cookies/removed"})