
import { addCount } from "../Redux/action"; //import reducer
import { useDispatch, useSelector } from "react-redux";


export const Counter = () =>{
      //show the store
  // const state = store.getState();
  // console.log("store", store.getState());
  const dispatch = useDispatch();
  const counter = useSelector((store) => store.counter);
return <div>
        <h3>Counter: {counter}</h3>
      <button
        onClick={() => {
          //Add reducer
          dispatch(addCount(1));
        }}
      >
        Add 1
      </button>

      <button
        onClick={() => {
          //Add reducer
          dispatch(addCount(-1));
        }}
      >
        redus 1
      </button>
</div>
}