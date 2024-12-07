import React from "react";
import { Route, Routes } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import "./assets/scss/style.scss";
import Homepage from "./components/Homepage/Homepage";
import ResumePage from "./components/ResumePage/ResumePage";
import TV from "./components/TV/TVPage";
 
function App(props) {
  return (
    <div className="App" id="home">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="curriculo" element={<ResumePage />} />
        <Route path="televisao" element={<TV />} />
      </Routes>
    </div>
  );
}

export default App;
