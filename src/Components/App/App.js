import { useSelector } from 'react-redux'
import './App.scss';
import Body from "../Body/Body";
import PianoRoll from '../PianoRoll'
import Transport from "../Transport/Transport";

const App = () => {
  const stateObject = useSelector(state => state)
  console.log("test root state Object", stateObject)

  return (
    <div className="App">
      <header className="App-header">
        {/* <button onClick={startPlay}>Start</button> */}
        <Transport onPlay={() => {}} />
        <Body/>
        <PianoRoll />
      </header>
    </div>
  );
}

export default App;
