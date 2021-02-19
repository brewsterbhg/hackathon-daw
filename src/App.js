import * as Tone from 'tone';
import './App.css';
import { useSelector } from 'react-redux'


import PianoRoll from './components/PianoRoll'

function App() {
  const stateObject = useSelector(state => state)
  console.log("test root state Object", stateObject)
  async function startPlay() {
    await Tone.start();
    await Tone.Transport.start();

    if (Tone.context.state !== 'running') {
      Tone.context.resume();
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={startPlay}>Start</button>
        <PianoRoll />
      </header>
    </div>
  );
}

export default App;
