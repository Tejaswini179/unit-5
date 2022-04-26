import { legacy_createStore as createStore } from "redux";


const initState = {
  counter: 0,
  todos: [],
  //   theme: "dark",
};

const store = createStore(reducer, initState);


// console.log(" initial store", store.getState());



// store.dispatch({ type: ADD_COUNT, payload: 1 });

// console.log("After dispatch", store.getState());

// store.dispatch(addTodo("Learn Redux"));

// console.log("After dispatch", store.getState());

// store.dispatch(addTodo("Learn typescript"));

// console.log("After dispatch", store.getState());
