import logo from "./logo.svg";
import "./App.css";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { UserList } from "./components/UserList";
import { UserDetails } from "./components/UserDetails";
import { PrivateComponent } from "./components/PrivateComponents";
import { Login } from "./components/Login";


function App() {
  return (
    <div className="App">
    <Navbar/>
      <Routes>
      
        <Route path="/users/:id" element={ <PrivateComponent> <UserDetails /> </PrivateComponent>}></Route>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/users" element={<UserList />}></Route>
       <Route path ="/login" element={<Login/>}></Route>
       {" "}
      </Routes>
      {/* <Home/>
      <About/> */}
    </div>
  );
}

export default App;
