import { useSelector } from 'react-redux'
import './App.scss';
import Body from "../Body/Body";
import PianoRoll from './components/PianoRoll'
import Transport from "./components/Transport/Transport";

const App = () => {
  const stateObject = useSelector(state => state)
  console.log("test root state Object", stateObject)

  return (
    <div className="App">
      <header className="App-header">
        {/* <button onClick={startPlay}>Start</button> */}
        <Body/>
        <Transport onPlay={() => {}} />
        <PianoRoll />
      </header>
    </div>
  );
}

export default App;
