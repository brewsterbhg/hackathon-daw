import React, { useState } from "react";
import { ReactComponent as PlayButton } from "../../assets/play.svg";
import { ReactComponent as PauseButton } from "../../assets/pause.svg";
import { ReactComponent as StopButton } from "../../assets/stop.svg";
import { useSelector, useDispatch } from "react-redux";
import * as Tone from "tone";
import { setPlay, setPause } from "../../state/actions";
import "./transport.css";
import { Control, Reset, Timer } from "../Timer/Timer";

export interface TransportPros {
  onPlay: () => void;
  onPause: () => void;
  onStop: () => void;
  currentBPM?: string;
}
export default function Transport({
  onStop,
  currentBPM = "120",
}: TransportPros) {
  const sequence = useSelector((state) => state.sequence.sequence);
  const isPlaying = useSelector((state) => state.player.isPlaying);
  const dispatch = useDispatch();
  const synth = new Tone.PolySynth().toDestination();
  const [currentColumn, setCurrentColumn] = useState(null);
  const playClicked = async () => {
    let music: string[][] = [];

    sequence.slice(1, sequence.length).forEach((column) => {
      let columnNotes: string[] = [];
      column.map(
        (shouldPlay) => shouldPlay.isActive && columnNotes.push(shouldPlay.note)
      );
      music.push(columnNotes);
    });

    await Tone.start();

    let n = 32,
      i = 0,
      numSteps = Array(n);
    while (i < n) numSteps[i++] = i;

    await Tone.start();

    const Sequencer = new Tone.Sequence(
      (time, column) => {
        setCurrentColumn(column);

        synth.triggerAttackRelease(music[column - 1], "8n", time);
      },
      numSteps,
      "8n"
    );

    if (isPlaying) {
      dispatch(setPause());
      setCurrentColumn(null);

      await Tone.Transport.stop();
      await Sequencer.stop();
      await Sequencer.clear();
      await Sequencer.dispose();

      return;
    }
    dispatch(setPlay());

    await Sequencer.start();
    await Tone.Transport.start();
  };
  return (
    <div className="transport-container">
      <button onClick={playClicked} className="transport-button">
        {isPlaying ? (
          <PauseButton height={32} width={32} />
        ) : (
          <PlayButton height={32} width={32} />
        )}
      </button>
      <button onClick={onStop} className="transport-button">
        <StopButton height={32} width={32} />
      </button>
      <div className="transport-content">
        <span className="transport-margins">BPM</span>
        <span className="transport-margins">{currentBPM}</span>
      </div>
      <Timer time={100} />
      {/*<Control*/}
      {/*    paused={false}*/}
      {/*    start={null}*/}
      {/*    stop={null}*/}
      {/*/>*/}
      {/*<Reset  onClickReset={this.reset}/>*/}
    </div>
  );
}
