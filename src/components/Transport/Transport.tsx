import React from 'react';
import {ReactComponent as PlayButton} from '../../assets/play.svg';
import {ReactComponent as PauseButton} from "../../assets/pause.svg";
import {ReactComponent as StopButton} from "../../assets/stop.svg";
import './transport.css'

export interface TransportPros {
  onPlay: () => void;
  onPause: () => void;
  onStop: () => void;
  currentBPM?: string;
}
export default function Transport({onPlay, onPause, onStop, currentBPM = '120'}: TransportPros) {
  return (
    <div className="transport-container">
    <button onClick={onPlay} className="transport-button">
      <PlayButton height={32} width={32} />
    </button>
    <button onClick={onPause} className="transport-button">
        <PauseButton height={32} width={32}/>
    </button>
      <button onClick={onStop} className="transport-button">
        <StopButton height={32} width={32}/>
      </button>
     <div className="transport-content">
        <span className="transport-margins">
        BPM
      </span>
       <span className="transport-margins">
        {currentBPM}
      </span>
     </div>
    </div>
  );
}
