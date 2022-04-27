// Action is always objects.
//{ type:"somthing",payload:"something"}

//Action Types
export const ADD_COUNT = "ADD_COUNT";
export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";
// Action creator

export const addCount = (data) => {
  return {
    type: ADD_COUNT,
    payload: data,
  };
};

export const addTodo = (data) => {
  return {
    type: ADD_TODO,
    payload: data,
  };
};

export const deleteTodo = (data) => {
    return {
      type: DELETE_TODO,
      payload: data,
    };
  };