import logo from './logo.svg';
import './App.css';

import {Category} from "./components/Category"

function App() {


  const navbar =[
    {
      image:"https://rukminim2.flixcart.com/flap/128/128/image/f15c02bfeb02d15d.png?q=100",
      title:"Top Offers"
    },
    {
      image:"https://rukminim2.flixcart.com/flap/128/128/image/29327f40e9c4d26b.png?q=100",
      title:"Grocery"
    },
  ]

  return (
    <div className="nav">
      {navbar.map((el)=>(
        <Category image={el.image}label={el.title}/>
      ))}
    </div>
  );
}

export default App;





