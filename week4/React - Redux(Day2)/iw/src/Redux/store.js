import { legacy_createStore as createStore } from "redux";
import { counterReducer } from "./reducer";

//store is like useState
export const store = createStore(counterReducer, {counter: 0, todos: []});

// store.subscribe(()=>{
// console.log("subscribe:",store.getState())
// })