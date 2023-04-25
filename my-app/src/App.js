import React from "react";
import "./index.css";


import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <Header title="Berlin Clean GBR" subtitle="Gebäudereinigung" />
      <Main message="My content" />
      <Footer note="Footer Note" /> 
      
     
    </div>
  );
}

export default App;
