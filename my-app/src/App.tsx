import React from "react";
import "./App.css";
import HomePage from "./components/HomePage";
import { MycontextProvider } from "./context/MyContext";

function App() {
  return (
      <MycontextProvider>
      <HomePage />
      </MycontextProvider>
  );
}

export default App;
