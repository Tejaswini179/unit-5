import logo from './logo.svg';
import './App.css';
import { Navbar } from './components/Navbar';
import { Cart } from './components/Body/Cart';
import { useContext } from 'react';
import { LangContext } from './context/LanguageContext';


function App() {
  const  {handleLang} = useContext(LangContext)
  return (
    <>
     <button onClick={()=>{
       handleLang()
     }}>Change Language</button>
     <Navbar/>
     <Cart/> 
    </>
  );
}

export default App;
