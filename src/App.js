import * as Tone from 'tone';
import './App.css';
import { useSelector } from 'react-redux'


import PianoRoll from './Components/PianoRoll'
import Transport from "./Components/Transport/Transport";
import React from "react";

function App() {
  const stateObject = useSelector(state => state)
  console.log("test root state Object", stateObject)

  return (
    <div className="App">
      <header className="App-header">
        <Transport onPlay={() => {}} />
        <PianoRoll />
      </header>
    </div>
  );
}

export default App;
