// {type: "", payload: ""}

//ACtion Types

export const ADD_COUNT = "ADD_COUNT";

//Action creator
export const addCount = (data)=>{
    return {
        type:ADD_COUNT,
        paylod:data
    }
}