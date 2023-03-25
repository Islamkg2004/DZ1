import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Transition from "./components/transitionPage/Transition";
import First from "./pages/firstPage/First";
import Second from "./pages/secondPage/Second";
import Third from "./pages/thirdPage/Third";
import Fourth from "./pages/fourthPage/Fourth";
import Fifth from "./pages/fifthPage/Fifth";
import {useEffect} from "react";
import {useState} from "react";
function App() {
  return (
      <BrowserRouter>
        <Transition/>
        <Routes>
          <Route index element={<First/>}/>
          <Route path="/second" element={<Second/>}/>
          <Route path="/third" element={<Third/>}/>
          <Route path="/fourth" element={<Fourth/>}/>
          <Route path="fifth" element={<Fifth/>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;