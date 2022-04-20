import { CartContext } from "../context/CartContext";
import { useContext } from "react";
import { LangContext } from "../context/LanguageContext";

export const Navbar = () => {
  const { cart } = useContext(CartContext); //consumer
  const {lang} = useContext(LangContext)
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "end",
        padding: "15px",
        fontSize: "28px",
        border: "1px solid red",
        margin: "10px",
      }}
    >
    {lang === "en" ? "Cart" : "Thaila"}:{cart}
    </nav>
  );
};
