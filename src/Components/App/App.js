import * as Tone from 'tone';
import { useSelector } from 'react-redux'
import './App.scss';
import PianoRoll from "../PianoRoll/PianoRoll";
import Body from "../Body/Body";

const App = () => {
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
        {/* <button onClick={startPlay}>Start</button> */}
        <Body/>
        <PianoRoll />
      </header>
    </div>
  );
}

export default App;