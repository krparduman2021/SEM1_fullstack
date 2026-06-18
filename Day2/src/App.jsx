import React from "react";
import "./App.css";

import Count from "./Count.jsx";
import Like from "./Like.jsx";
import From from "./From.jsx";
import Light from "./Light.jsx";
import Password from "./Password.jsx";
import MultiForm from "./MultiForm.jsx";




const App = () => {
  return (
    <div className="container">
      <h1 className="title">🚀 React Mini Projects</h1>

      <div className="grid">
        <div className="card">
          <Count />
        </div>

        <div className="card">
          <Like />
        </div>

        <div className="card">
          <From />
        </div>

        <div className="card">
          <Light />
        </div>

        <div className="card">
          <Password />
        </div>
        <div className="card">
          <MultiForm/>
        </div>
      </div>
    </div>
  );
};

export default App;