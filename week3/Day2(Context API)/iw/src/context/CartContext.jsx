import { createContext, useState } from "react";

export const CartContext = createContext(); //create empty box

export const CartContextProvider = ({ children }) => {
  //childern is the App
  //connect App to that Box
  const [cart, setCart] = useState(0);

  const handelChange = (inc) =>{
    
    setCart( cart + inc );
  }
  return ( 
  <CartContext.Provider value={{cart, handelChange}}>
  {children}
  </CartContext.Provider>
  )
};
