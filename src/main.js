import './style.css'
import { createStore } from 'redux'
import cookieReducer from './cookieReducer'
const addCookie=document.getElementById("addCookie")
const removeCookie=document.getElementById("removeCookie")
const cookieCount=document.getElementById("cookieCount")
const store=createStore(cookieReducer)
store.subscribe(()=>updatedCookie())

const addCookieHandler=()=>{
    store.dispatch({type:"cookies/added"})
}
const removeCookieHandler=()=>{
    store.dispatch({type:"cookies/removed"})
}

addCookie.addEventListener("click",addCookieHandler)
addCookie.addEventListener("click",addCookieHandler)
removeCookie.addEventListener("click",removeCookieHandler)
const updatedCookie=()=>{
    const state=store.getState()
    cookieCount.textContent=state.value
}
updatedCookie()