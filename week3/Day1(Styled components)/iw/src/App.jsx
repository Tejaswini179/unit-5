import logo from "./logo.svg";
import "./App.css";
// import { Button } from "./components/Button";
import { Button } from 'antd';
import { Flex } from "./components/Flex";
import { useState } from "react";

function App() {
  const [theme, setTheme] = useState("dark");

  return (
    <div className="App">
      <h3>Count:0</h3>
      <Button
        theme={theme}
        variant="hollow"
        onClick={() => {
          alert("Clickied click me ");
        }}
      >
        Click me
      </Button>
      <Button theme={theme}>Sign Up</Button>

      <Flex>
        <h1>one</h1>
        <h1>Two</h1>
        <h1>Three</h1>
      </Flex>

      <Button type="primary">Primary Button</Button>
       
      <button onClick={() => setTheme(theme === "Dark" ? "light" : "Dark")}>
        Theme is: {theme}
      </button>
    </div>
  );
}

export default App;
