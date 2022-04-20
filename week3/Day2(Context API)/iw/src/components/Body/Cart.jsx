import { CartContext } from "../../context/CartContext";
import { useContext } from "react";

export const Cart = () => {
    const {handelChange} = useContext(CartContext)
  return (
    <div
      style={{
        width: "200px",
        height: "300px",
        padding: "10px",
        background: "teal",
      }}
    >
      <button onClick={()=>{
          handelChange(1)
      }}>Add to cart</button>

<button onClick={()=>{
          handelChange(-1)
      }}>Remove to cart</button>
    </div>
  );
};
